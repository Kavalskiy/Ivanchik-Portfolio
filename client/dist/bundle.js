/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t,
    n = {
      87: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(81),
          a = n.n(r),
          l = n(645),
          o = n.n(l)()(a());
        o.push([
          e.id,
          "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #23272d;\n  overflow-x: hidden;\n}\n",
          "",
        ]);
        const i = o;
      },
      370: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(81),
          a = n.n(r),
          l = n(645),
          o = n.n(l)()(a());
        o.push([
          e.id,
          '.chat {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: calc(5px + 45 * (100vw / 1080));\n}\n\n.message-list {\n  display: flex;\n  flex-direction: column;\n  max-width: 70%;\n  position: relative;\n}\n\n.message-list::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 35%;\n  height: 100%;\n  z-index: -1;\n  border: #f03b71d5 solid;\n  border-radius: 50%;\n  transition: all 1s;\n  transform: rotate(-45deg);\n}\n\n\n.message {\n  background-color: #1b1e22;\n  border-radius: 25px 25px 25px 0;\n  position: relative;\n  margin: 1rem 0;\n  height: min-content;\n  font-size: calc(5px + 8 * (100vw / 1280));\n  box-shadow: #1f1e1c 0px 0px 10px 0px;\n  padding: 1rem;\n  color: whitesmoke;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  transition: all 0.3s;\n  font-family: "Syne", "Syne Placeholder", sans-serif;\n}\n\n.message:hover {\n  transform: scale(1.05);\n  box-shadow: #1f1e1c 0px 0px 5px 2px;\n}\n\n.message img {\n  width: 4rem;\n  filter: drop-shadow(#1f1e1c 0px 0px 20px 20px);\n  margin-right: 1rem;\n  border-radius: 50%;\n}\n\n.message .text {\n  display: flex;\n  font-size: calc(10px + 5 * (100vw / 1280));\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.message .text h3 {\n  margin-bottom: 0.5rem;\n  color:#da2c60;\n  text-shadow: #da2c60 0px 0px 5px;\n  font-size: calc(8px + 4 * (100vw / 1280));\n}\n\n.circle {\n  flex: 1;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.circle span {\n  position: relative;\n  color:whitesmoke;\n  font-size: 8rem;\n}\n\n\n\n@media screen and (max-width: 768px) {\n  .message-list {\n    max-width: 100%;\n  }\n  .chat {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n}\n',
          "",
        ]);
        const i = o;
      },
      221: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(81),
          a = n.n(r),
          l = n(645),
          o = n.n(l)()(a());
        o.push([
          e.id,
          '.hero {\n  height: 70vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.5s;\n  align-items: center;\n  justify-content: center;\n  padding: 100px calc(10px + 200 * (100vw / 1080));\n  display: flex;\n  font-family: "Syne", sans-serif;\n}\n\n.columns {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: auto;\n}\n\n.rows {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.rows * {\n  margin-bottom: 1rem;\n}\n\n.unleash-imagination-in-code {\n  flex-shrink: 0;\n  width: 100%;\n  height: auto;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  word-break: break-word;\n  z-index: 1;\n  position: relative;\n  font-weight: 700;\n  font-style: normal;\n  font-family: "Syne", sans-serif;\n  color: whitesmoke;\n  font-size: calc(20px + 25 * (100vw / 1280));\n  letter-spacing: 0em;\n  line-height: 1.1;\n  text-align: left;\n}\n\n.frontend-developer {\n  flex-shrink: 0;\n  width: auto;\n  height: auto;\n  white-space: pre;\n  position: relative;\n  font-weight: 400;\n  font-style: normal;\n  font-family: "Syne", sans-serif;\n  color: whitesmoke;\n  font-size: 16px;\n  letter-spacing: 0em;\n  line-height: 1.2;\n  text-align: left;\n}\n\n.frontend-developer {\n  box-sizing: border-box;\n  flex-shrink: 0;\n  width: min-content;\n  height: min-content;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 20px 10px 20px;\n  overflow: hidden;\n  position: relative;\n  align-content: center;\n  flex-wrap: nowrap;\n  gap: 10;\n  border-radius: 100px;\n  border: 1px solid #da2c60;\n  transition: all 0.3s;\n  cursor: pointer;\n  box-shadow: 0 0 5px #da2c60, inset 0 0 5px #da2c60;\n}\n\n.frontend-developer:hover {\n  border: 1px solid whitesmoke;\n  box-shadow: 0 0 5px whitesmoke, inset 0 0 5px whitesmoke;\n}\n\n.frontend-developer p {\n  transition: all 0.3s;\n  margin: 0;\n}\n\n.frontend-developer:hover p {\n  color:#da2c60;\n  text-shadow: #da2c60 0 0 5px;\n}\n\n.contact-me {\n  box-sizing: border-box;\n  flex-shrink: 0;\n  width: max-content;\n  height: min-content;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 20px 10px 20px;\n  background-color: #da2c60;\n  overflow: hidden;\n  position: relative;\n  align-content: center;\n  flex-wrap: nowrap;\n  gap: 10;\n  border: none;\n  outline: none;\n  border-radius: 9999px;\n  transition: all 0.2s ease;\n  filter: drop-shadow(#23272d 0 0 5px);\n  font-family: "Syne", sans-serif;\n}\n\n.contact-me:hover {\n  filter: drop-shadow(#da2c60 0 0 5px);\n}\n\n.grid {\n  display: grid;\n  flex: 1;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n}\n\n.grid-item {\n  color: #fff;\n  text-align: center;\n  padding: 20px;\n  font-size: 24px;\n  border: 1px solid #ccc;\n  width: 100%;\n  padding-top: 0;\n  padding-bottom: 0;\n  height: 0;\n  transition: all 0.5s;\n  padding-bottom: 100%;\n}\n\n.grid-item:hover {\n  transform: rotate(90deg);\n}\n\n.grid :nth-child(1) {\n  background-color: white;\n  border-radius: 200px 200px 0px 0px;\n  transition: all 0.8s;\n}\n\n.grid :nth-child(1):hover {\n  background-color: white;\n  transform: rotate(0);\n  border-radius: 0px 0px 200px 200px;\n}\n\n.grid :nth-child(2) {\n  background-color: #4a505c;\n  border-radius: 200px 200px 200px 0px;\n}\n\n.grid :nth-child(3) {\n  border-radius: 0px 200px 200px 200px;\n}\n\n.grid :nth-child(4) {\n  background-color: #3c4a5e;\n  border-radius: 10px;\n}\n\n.grid :nth-child(4):hover {\n  border-radius: 100%;\n  transform: rotate(0);\n  transition: all 0.9s;\n}\n\n.grid :nth-child(5) {\n  background-color: white;\n  border-radius: 0px 0px 200px 0px;\n  transition: all 0.4s;\n}\n\n.grid :nth-child(5):hover {\n  background-color: white;\n  border-radius: 200px 0px 0px 0px;\n  transform: rotate(0);\n}\n\n.grid :nth-child(6) {\n  background-color: aliceblue;\n  border-radius: 100%;\n}\n\n.grid :nth-child(6):hover {\n  background-color: aliceblue;\n  border-radius: 100% 10px 10px 10px;\n  transform: rotate(0);\n}\n\n.grid :nth-child(7) {\n  border-radius: 200px 200px 200px 0px;\n}\n\n@media screen and (max-width: 768px) {\n  .hero {\n    padding: 2rem 10%;\n    height: 100vh;\n    justify-content: flex-start;\n  }\n  .columns {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .rows {\n    margin: 3rem 0;\n    width: 100%;\n  }\n  .grid {\n    width: 80%;\n  }\n}\n',
          "",
        ]);
        const i = o;
      },
      640: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(81),
          a = n.n(r),
          l = n(645),
          o = n.n(l)()(a());
        o.push([
          e.id,
          '.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  padding: 0 1.5rem;\n  padding: 2rem 5rem;\n  font-family: \'Syne\', sans-serif;\n}\n\n.navbar-left {\n  display: flex;\n}\n\n.navbar-left .navbar-left-items {\n  display: flex;\n  flex-direction: row;\n  column-gap: 1.2rem;\n}\n\n.nav-item {\n  margin: 0.5rem;\n  cursor: pointer;\n}\n\n.nav-item a {\n  text-decoration: none;\n  color: whitesmoke;\n  transition: all 0.5s ease;\n}\n\n.nav-item a:hover {\n  color: #da2c60;\n  text-shadow: #da2c60 0px 0px 10px;\n}\n\n.nav-item a::after,\n.nav-item a::before {\n  color: transparent;\n  transition: all 0.5s linear;\n  text-shadow: transparent 0px 0px 10px;\n}\n\n.nav-item a:hover::after,\n.nav-item a:hover::before {\n  color: #da2c60;\n  text-shadow: #da2c60 0px 0px 10px;\n}\n\n.nav-item a::before {\n  content: "< ";\n}\n\n.nav-item a::after {\n  content: " />";\n}\n\n.navbar-right {\n  display: flex;\n  align-items: center;\n}\n\n.name span {\n  transition: all 0.5s;\n  font-size: calc(15px + 5 * (100vw / 1280));\n}\n\n.name:hover :nth-child(1) {\n  margin-right: 0.5rem;\n}\n\n.name:hover :nth-child(3) {\n  margin-left: 0.5rem;\n}\n\n.menu-icon {\n  display: none;\n  flex-direction: column;\n  cursor: pointer;\n  padding: 10px;\n}\n\n.menu-icon.active .bar:nth-child(1) {\n  transform: translateY(0.8rem) rotate(45deg);\n}\n.menu-icon.active .bar:nth-child(2) {\n  opacity: 0;\n}\n.menu-icon.active .bar:nth-child(3) {\n  transform: translateY(-0.8rem) rotate(-45deg);\n}\n\n.bar {\n  width: 30px;\n  height: 3px;\n  background-color: white;\n  transition: all 0.3s;\n  margin: 3px 0;\n}\n\n@media (max-width: 768px) {\n  .navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column;\n    color: white;\n    padding: 0 1.5rem;\n    padding: 10px 20px;\n  }\n  .navbar-top {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    width: 100%;\n  }\n  .navbar-left {\n    display: none;\n    flex-direction: column;\n    text-align: center;\n    width: 100%;\n    z-index: 1;\n    transition: all 0.4s;\n    justify-content: center;\n  }\n\n  .navbar.open .navbar-left {\n    display: flex;\n    background-color: transparent;\n    color: whitesmoke;\n    border-radius: 16px;\n    align-self: center;\n  }\n\n  .navbar.open .navbar-left .navbar-left-items {\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n    background-color: #1b1e22;\n    color: whitesmoke;\n    border-radius: 16px;\n    align-self: center;\n  }\n\n  .menu-icon {\n    display: flex;\n  }\n}\n',
          "",
        ]);
        const i = o;
      },
      100: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(81),
          a = n.n(r),
          l = n(645),
          o = n.n(l)()(a());
        o.push([
          e.id,
          '* {\n  font-family: "Syne", "Syne Placeholder", sans-serif;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.portfolio {\n  text-align: center;\n  padding: 20px;\n}\n\n.portfolio h2 {\n  margin: 4rem 0;\n  color: whitesmoke;\n  transition: all 0.2s;\n  font-size: 2rem;\n  position: relative;\n  transform: translate(0);\n}\n\n.projects {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.project {\n  width: 300px;\n  height: 280px;\n  margin: 10px;\n  border-radius: 10px;\n  border: #da2c60cb solid;\n  box-shadow: 0 0 7px #ee3069, inset 0 0 7px #ee3069;\n}\n\n.project img {\n  width: 100%;\n  object-fit: cover;\n  border-radius: 6px;\n  box-shadow: 0 0 5px whitesmoke;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n\n.project img:hover {\n    transform: scale(1.05);\n}\n\n.project-info {\n  padding: 20px;\n  color: whitesmoke;\n  text-align: center;\n}\n\n.project h3 {\n  margin-top: 10px;\n  font-size: 1.2rem;\n  color: #da2c60;\n}\n\n.project p {\n  margin-top: 10px;\n  font-size: 1rem;\n}\n\n.project a {\n  display: block;\n  background-color: #007bff;\n  color: #fff;\n  padding: 10px 20px;\n  border-radius: 5px;\n  text-decoration: none;\n  transition: background-color 0.3s ease-in-out;\n}\n\n.project a:hover {\n  background-color: #0056b3;\n}\n\n@media (max-width: 768px) {\n  .projects {\n    flex-direction: column;\n  }\n  .project img {\n    order: 2;\n  }\n}\n',
          "",
        ]);
        const i = o;
      },
      424: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(81),
          a = n.n(r),
          l = n(645),
          o = n.n(l)()(a());
        o.push([
          e.id,
          "body {\n  margin: 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n",
          "",
        ]);
        const i = o;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, a, l) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var o = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var u = this[i][0];
                  null != u && (o[u] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var c = [].concat(e[s]);
                (r && o[c[0]]) ||
                  (void 0 !== l &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = l)),
                  n &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = n))
                      : (c[2] = n)),
                  a &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = a))
                      : (c[4] = "".concat(a))),
                  t.push(c));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      448: (e, t, n) => {
        var r = n(294),
          a = n(840);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          i = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, l, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          P = Symbol.for("react.context"),
          N = Symbol.for("react.forward_ref"),
          z = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          M = Symbol.for("react.memo"),
          I = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var j = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var O = Symbol.iterator;
        function L(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (O && e[O]) || e["@@iterator"])
            ? e
            : null;
        }
        var R,
          F = Object.assign;
        function A(e) {
          if (void 0 === R)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              R = (t && t[1]) || "";
            }
          return "\n" + R + e;
        }
        var D = !1;
        function U(e, t) {
          if (!e || D) return "";
          D = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (t) {
            if (t && r && "string" == typeof t.stack) {
              for (
                var a = t.stack.split("\n"),
                  l = r.stack.split("\n"),
                  o = a.length - 1,
                  i = l.length - 1;
                1 <= o && 0 <= i && a[o] !== l[i];

              )
                i--;
              for (; 1 <= o && 0 <= i; o--, i--)
                if (a[o] !== l[i]) {
                  if (1 !== o || 1 !== i)
                    do {
                      if ((o--, 0 > --i || a[o] !== l[i])) {
                        var u = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= o && 0 <= i);
                  break;
                }
            }
          } finally {
            (D = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? A(e) : "";
        }
        function V(e) {
          switch (e.tag) {
            case 5:
              return A(e.type);
            case 16:
              return A("Lazy");
            case 13:
              return A("Suspense");
            case 19:
              return A("SuspenseList");
            case 0:
            case 2:
            case 15:
              return U(e.type, !1);
            case 11:
              return U(e.type.render, !1);
            case 1:
              return U(e.type, !0);
            default:
              return "";
          }
        }
        function $(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case x:
              return "Portal";
            case E:
              return "Profiler";
            case _:
              return "StrictMode";
            case z:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case N:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case M:
                return null !== (t = e.displayName || null)
                  ? t
                  : $(e.type) || "Memo";
              case I:
                (t = e._payload), (e = e._init);
                try {
                  return $(e(t));
                } catch (e) {}
            }
          return null;
        }
        function Q(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return $(t);
            case 8:
              return t === _ ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" == typeof t)
                return t.displayName || t.name || null;
              if ("string" == typeof t) return t;
          }
          return null;
        }
        function B(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function H(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                "function" == typeof n.get &&
                "function" == typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Z(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function K(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = B(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function G(e, t) {
          X(e, t);
          var n = B(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, B(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Z(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + B(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: B(n) };
        }
        function le(e, t) {
          var n = B(t.value),
            r = B(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n ||
              "number" != typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" != typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" != typeof t.style)
              throw Error(l(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          Se = null,
          _e = null;
        function Ee(e) {
          if ((e = ba(e))) {
            if ("function" != typeof xe) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = ka(t)), xe(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          Se ? (_e ? _e.push(e) : (_e = [e])) : (Se = e);
        }
        function Pe() {
          if (Se) {
            var e = Se,
              t = _e;
            if (((_e = Se = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Ne(e, t) {
          return e(t);
        }
        function ze() {}
        var Te = !1;
        function Me(e, t, n) {
          if (Te) return e(t, n);
          Te = !0;
          try {
            return Ne(e, t, n);
          } finally {
            (Te = !1), (null !== Se || null !== _e) && (ze(), Pe());
          }
        }
        function Ie(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ka(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var je = !1;
        if (c)
          try {
            var Oe = {};
            Object.defineProperty(Oe, "passive", {
              get: function () {
                je = !0;
              },
            }),
              window.addEventListener("test", Oe, Oe),
              window.removeEventListener("test", Oe, Oe);
          } catch (ce) {
            je = !1;
          }
        function Le(e, t, n, r, a, l, o, i, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (e) {
            this.onError(e);
          }
        }
        var Re = !1,
          Fe = null,
          Ae = !1,
          De = null,
          Ue = {
            onError: function (e) {
              (Re = !0), (Fe = e);
            },
          };
        function Ve(e, t, n, r, a, l, o, i, u) {
          (Re = !1), (Fe = null), Le.apply(Ue, arguments);
        }
        function $e(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Qe(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Be(e) {
          if ($e(e) !== e) throw Error(l(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = $e(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return Be(a), e;
                    if (o === r) return Be(a), t;
                    o = o.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = o);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = o.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = o), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = o), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? He(e)
            : null;
        }
        function He(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = He(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ze = a.unstable_cancelCallback,
          Ke = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Ge = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null,
          ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
              },
          it = Math.log,
          ut = Math.LN2,
          st = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var i = o & ~a;
            0 !== i ? (r = dt(i)) : 0 != (l &= o) && (r = dt(l));
          } else 0 != (o = n & ~a) ? (r = dt(o)) : 0 !== l && (r = dt(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 == (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 != (4194240 & l)))
          )
            return t;
          if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 != (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = st;
          return 0 == (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 != (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          xt,
          St,
          _t,
          Et,
          Ct = !1,
          Pt = [],
          Nt = null,
          zt = null,
          Tt = null,
          Mt = new Map(),
          It = new Map(),
          jt = [],
          Ot =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Lt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Nt = null;
              break;
            case "dragenter":
            case "dragleave":
              zt = null;
              break;
            case "mouseover":
            case "mouseout":
              Tt = null;
              break;
            case "pointerover":
            case "pointerout":
              Mt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              It.delete(t.pointerId);
          }
        }
        function Rt(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ft(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = $e(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Qe(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function At(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Dt(e, t, n) {
          At(e) && n.delete(t);
        }
        function Ut() {
          (Ct = !1),
            null !== Nt && At(Nt) && (Nt = null),
            null !== zt && At(zt) && (zt = null),
            null !== Tt && At(Tt) && (Tt = null),
            Mt.forEach(Dt),
            It.forEach(Dt);
        }
        function Vt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function $t(e) {
          function t(t) {
            return Vt(t, e);
          }
          if (0 < Pt.length) {
            Vt(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
              var r = Pt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Nt && Vt(Nt, e),
              null !== zt && Vt(zt, e),
              null !== Tt && Vt(Tt, e),
              Mt.forEach(t),
              It.forEach(t),
              n = 0;
            n < jt.length;
            n++
          )
            (r = jt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < jt.length && null === (n = jt[0]).blockedOn; )
            Ft(n), null === n.blockedOn && jt.shift();
        }
        var Qt = w.ReactCurrentBatchConfig,
          Bt = !0;
        function Wt(e, t, n, r) {
          var a = bt,
            l = Qt.transition;
          Qt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Qt.transition = l);
          }
        }
        function Ht(e, t, n, r) {
          var a = bt,
            l = Qt.transition;
          Qt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Qt.transition = l);
          }
        }
        function qt(e, t, n, r) {
          if (Bt) {
            var a = Kt(e, t, n, r);
            if (null === a) Br(e, t, r, Zt, n), Lt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Nt = Rt(Nt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (zt = Rt(zt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Tt = Rt(Tt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return Mt.set(l, Rt(Mt.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      It.set(l, Rt(It.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Lt(e, r), 4 & t && -1 < Ot.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && kt(l),
                  null === (l = Kt(e, t, n, r)) && Br(e, t, r, Zt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Br(e, t, r, null, n);
          }
        }
        var Zt = null;
        function Kt(e, t, n, r) {
          if (((Zt = null), null !== (e = ya((e = ke(r))))))
            if (null === (t = $e(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Qe(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Zt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ge()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Gt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Gt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          dn = F({}, sn, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = F({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((ln = e.screenX - un.screenX),
                        (on = e.screenY - un.screenY))
                      : (on = ln = 0),
                    (un = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          hn = an(pn),
          mn = an(F({}, pn, { dataTransfer: 0 })),
          gn = an(F({}, dn, { relatedTarget: 0 })),
          vn = an(
            F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = F({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(F({}, sn, { data: 0 })),
          kn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          xn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function _n(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function En() {
          return _n;
        }
        var Cn = F({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? xn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pn = an(Cn),
          Nn = an(
            F({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          zn = an(
            F({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Tn = an(
            F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Mn = F({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          In = an(Mn),
          jn = [9, 13, 27, 32],
          On = c && "CompositionEvent" in window,
          Ln = null;
        c && "documentMode" in document && (Ln = document.documentMode);
        var Rn = c && "TextEvent" in window && !Ln,
          Fn = c && (!On || (Ln && 8 < Ln && 11 >= Ln)),
          An = String.fromCharCode(32),
          Dn = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== jn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var $n = !1,
          Qn = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function Bn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Qn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Ce(r),
            0 < (t = Hr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Hn = null,
          qn = null;
        function Zn(e) {
          Ar(e, 0);
        }
        function Kn(e) {
          if (q(wa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Gn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" == typeof er.oninput);
            }
            Gn = Jn;
          } else Gn = !1;
          Xn = Gn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Hn && (Hn.detachEvent("onpropertychange", nr), (qn = Hn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Kn(qn)) {
            var t = [];
            Wn(t, qn, e, ke(e)), Me(Zn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Hn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kn(qn);
        }
        function lr(e, t) {
          if ("click" === e) return Kn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Kn(t);
        }
        var ir =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              };
        function ur(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = Z((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" == typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== Z(r) ||
            ((r =
              "selectionStart" in (r = gr) && pr(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Hr(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          Sr = {},
          _r = {};
        function Er(e) {
          if (Sr[e]) return Sr[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in _r) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((_r = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var Cr = Er("animationend"),
          Pr = Er("animationiteration"),
          Nr = Er("animationstart"),
          zr = Er("transitionend"),
          Tr = new Map(),
          Mr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Ir(e, t) {
          Tr.set(e, t), u(t, [e]);
        }
        for (var jr = 0; jr < Mr.length; jr++) {
          var Or = Mr[jr];
          Ir(Or.toLowerCase(), "on" + (Or[0].toUpperCase() + Or.slice(1)));
        }
        Ir(Cr, "onAnimationEnd"),
          Ir(Pr, "onAnimationIteration"),
          Ir(Nr, "onAnimationStart"),
          Ir("dblclick", "onDoubleClick"),
          Ir("focusin", "onFocus"),
          Ir("focusout", "onBlur"),
          Ir(zr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Lr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Rr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Lr)
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, i, u, s) {
              if ((Ve.apply(this, arguments), Re)) {
                if (!Re) throw Error(l(198));
                var c = Fe;
                (Re = !1), (Fe = null), Ae || ((Ae = !0), (De = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ar(e, t) {
          t = 0 != (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== l && a.isPropagationStopped()))
                    break e;
                  Fr(a, i, s), (l = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (i = r[o]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== l && a.isPropagationStopped())
                  )
                    break e;
                  Fr(a, i, s), (l = u);
                }
            }
          }
          if (Ae) throw ((e = De), (Ae = !1), (De = null), e);
        }
        function Dr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Qr(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), Qr(n, e, r, t);
        }
        var Vr = "_reactListening" + Math.random().toString(36).slice(2);
        function $r(e) {
          if (!e[Vr]) {
            (e[Vr] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Rr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Vr] || ((t[Vr] = !0), Ur("selectionchange", !1, t));
          }
        }
        function Qr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = Ht;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !je ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Br(e, t, n, r, a) {
          var l = r;
          if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = ya(i))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = l = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Me(function () {
            var r = l,
              a = ke(n),
              o = [];
            e: {
              var i = Tr.get(e);
              if (void 0 !== i) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Pn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = gn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = zn;
                    break;
                  case Cr:
                  case Pr:
                  case Nr:
                    u = vn;
                    break;
                  case zr:
                    u = Tn;
                    break;
                  case "scroll":
                    u = fn;
                    break;
                  case "wheel":
                    u = In;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Nn;
                }
                var c = 0 != (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Ie(h, f)) &&
                        c.push(Wr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((i = new u(i, s, null, n, a)),
                  o.push({ event: i, listeners: c }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ya(s) && !s[ha])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ya(s)
                          : null) &&
                        (s !== (d = $e(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Nn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == u ? i : wa(u)),
                  (p = null == s ? i : wa(s)),
                  ((i = new c(m, h + "leave", u, n, a)).target = d),
                  (i.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(f, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  u && s)
                )
                  e: {
                    for (f = s, h = 0, p = c = u; p; p = qr(p)) h++;
                    for (p = 0, m = f; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (f = qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = qr(c)), (f = qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Zr(o, i, u, c, !1),
                  null !== s && null !== d && Zr(o, d, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? wa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var g = Yn;
              else if (Bn(i))
                if (Xn) g = or;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (g = lr);
              switch (
                (g && (g = g(e, r))
                  ? Wn(o, g, n, a)
                  : (v && v(e, i, r),
                    "focusout" === e &&
                      (v = i._wrapperState) &&
                      v.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (v = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Bn(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(o, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(o, n, a);
              }
              var y;
              if (On)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                $n
                  ? Un(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  ($n || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && $n && (y = en())
                    : ((Gt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      ($n = !0))),
                0 < (v = Hr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  o.push({ event: b, listeners: v }),
                  (y || null !== (y = Vn(n))) && (b.data = y))),
                (y = Rn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Vn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Dn = !0), An);
                        case "textInput":
                          return (e = t.data) === An && Dn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if ($n)
                        return "compositionend" === e || (!On && Un(e, t))
                          ? ((e = en()), (Jt = Gt = Xt = null), ($n = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Hr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Ar(o, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Hr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Ie(e, n)) && r.unshift(Wr(e, l, a)),
              null != (l = Ie(e, t)) && r.push(Wr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Zr(e, t, n, r, a) {
          for (var l = t._reactName, o = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== s &&
              ((i = s),
              a
                ? null != (u = Ie(n, l)) && o.unshift(Wr(n, u, i))
                : a || (null != (u = Ie(n, l)) && o.push(Wr(n, u, i)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Kr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" == typeof e ? e : "" + e)
            .replace(Kr, "\n")
            .replace(Yr, "");
        }
        function Gr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(l(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" == typeof setTimeout ? setTimeout : void 0,
          aa = "function" == typeof clearTimeout ? clearTimeout : void 0,
          la = "function" == typeof Promise ? Promise : void 0,
          oa =
            "function" == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== la
              ? function (e) {
                  return la.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void $t(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          $t(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          va = "__reactHandles$" + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function ka(e) {
          return e[pa] || null;
        }
        var xa = [],
          Sa = -1;
        function _a(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > Sa || ((e.current = xa[Sa]), (xa[Sa] = null), Sa--);
        }
        function Ca(e, t) {
          Sa++, (xa[Sa] = e.current), (e.current = t);
        }
        var Pa = {},
          Na = _a(Pa),
          za = _a(!1),
          Ta = Pa;
        function Ma(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Pa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function Ia(e) {
          return null != e.childContextTypes;
        }
        function ja() {
          Ea(za), Ea(Na);
        }
        function Oa(e, t, n) {
          if (Na.current !== Pa) throw Error(l(168));
          Ca(Na, t), Ca(za, n);
        }
        function La(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, Q(e) || "Unknown", a));
          return F({}, n, r);
        }
        function Ra(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Pa),
            (Ta = Na.current),
            Ca(Na, e),
            Ca(za, za.current),
            !0
          );
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = La(e, t, Ta)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(za),
              Ea(Na),
              Ca(Na, e))
            : Ea(za),
            Ca(za, n);
        }
        var Aa = null,
          Da = !1,
          Ua = !1;
        function Va(e) {
          null === Aa ? (Aa = [e]) : Aa.push(e);
        }
        function $a() {
          if (!Ua && null !== Aa) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = Aa;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Aa = null), (Da = !1);
            } catch (t) {
              throw (null !== Aa && (Aa = Aa.slice(e + 1)), qe(Je, $a), t);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var Qa = [],
          Ba = 0,
          Wa = null,
          Ha = 0,
          qa = [],
          Za = 0,
          Ka = null,
          Ya = 1,
          Xa = "";
        function Ga(e, t) {
          (Qa[Ba++] = Ha), (Qa[Ba++] = Wa), (Wa = e), (Ha = t);
        }
        function Ja(e, t, n) {
          (qa[Za++] = Ya), (qa[Za++] = Xa), (qa[Za++] = Ka), (Ka = e);
          var r = Ya;
          e = Xa;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - ot(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Ya = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Xa = l + e);
          } else (Ya = (1 << l) | (n << a) | r), (Xa = e);
        }
        function el(e) {
          null !== e.return && (Ga(e, 1), Ja(e, 1, 0));
        }
        function tl(e) {
          for (; e === Wa; )
            (Wa = Qa[--Ba]), (Qa[Ba] = null), (Ha = Qa[--Ba]), (Qa[Ba] = null);
          for (; e === Ka; )
            (Ka = qa[--Za]),
              (qa[Za] = null),
              (Xa = qa[--Za]),
              (qa[Za] = null),
              (Ya = qa[--Za]),
              (qa[Za] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function ol(e, t) {
          var n = Is(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function il(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ka ? { id: Ya, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Is(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ul(e) {
          return 0 != (1 & e.mode) && 0 == (128 & e.flags);
        }
        function sl(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!il(e, t)) {
                if (ul(e)) throw Error(l(418));
                t = sa(n.nextSibling);
                var r = nl;
                t && il(e, t)
                  ? ol(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (ul(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function dl(e) {
          if (e !== nl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (ul(e)) throw (fl(), Error(l(418)));
            for (; t; ) ol(e, t), (t = sa(t.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      rl = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fl() {
          for (var e = rl; e; ) e = sa(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = w.ReactCurrentBatchConfig;
        function gl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vl = _a(null),
          yl = null,
          bl = null,
          wl = null;
        function kl() {
          wl = bl = yl = null;
        }
        function xl(e) {
          var t = vl.current;
          Ea(vl), (e._currentValue = t);
        }
        function Sl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function _l(e, t) {
          (yl = e),
            (wl = bl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (wi = !0), (e.firstContext = null));
        }
        function El(e) {
          var t = e._currentValue;
          if (wl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bl)
            ) {
              if (null === yl) throw Error(l(308));
              (bl = e), (yl.dependencies = { lanes: 0, firstContext: e });
            } else bl = bl.next = e;
          return t;
        }
        var Cl = null;
        function Pl(e) {
          null === Cl ? (Cl = [e]) : Cl.push(e);
        }
        function Nl(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Pl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            zl(e, r)
          );
        }
        function zl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Tl = !1;
        function Ml(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Il(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function jl(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ol(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 != (2 & zu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              zl(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Pl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            zl(e, n)
          );
        }
        function Ll(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 != (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Rl(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Fl(e, t, n, r) {
          var a = e.updateQueue;
          Tl = !1;
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === o ? (l = s) : (o.next = s), (o = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== l) {
            var d = a.baseState;
            for (o = 0, c = s = u = null, i = l; ; ) {
              var f = i.lane,
                p = i.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" == typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (f =
                          "function" == typeof (h = m.payload)
                            ? h.call(p, d, f)
                            : h)
                      )
                        break e;
                      d = F({}, d, f);
                      break e;
                    case 2:
                      Tl = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = d)) : (c = c.next = p),
                  (o |= f);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (f = i).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = d),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Fu |= o), (e.lanes = o), (e.memoizedState = d);
          }
        }
        function Al(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" != typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Dl = new r.Component().refs;
        function Ul(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Vl = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && $e(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              l = jl(r, a);
            (l.payload = t),
              null != n && (l.callback = n),
              null !== (t = Ol(e, l, a)) && (rs(t, e, a, r), Ll(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              l = jl(r, a);
            (l.tag = 1),
              (l.payload = t),
              null != n && (l.callback = n),
              null !== (t = Ol(e, l, a)) && (rs(t, e, a, r), Ll(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ts(),
              r = ns(e),
              a = jl(n, r);
            (a.tag = 2),
              null != t && (a.callback = t),
              null !== (t = Ol(e, a, r)) && (rs(t, e, r, n), Ll(t, e, r));
          },
        };
        function $l(e, t, n, r, a, l, o) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !(
                t.prototype &&
                t.prototype.isPureReactComponent &&
                ur(n, r) &&
                ur(a, l)
              );
        }
        function Ql(e, t, n) {
          var r = !1,
            a = Pa,
            l = t.contextType;
          return (
            "object" == typeof l && null !== l
              ? (l = El(l))
              : ((a = Ia(t) ? Ta : Na.current),
                (l = (r = null != (r = t.contextTypes)) ? Ma(e, a) : Pa)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Vl),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function Bl(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Vl.enqueueReplaceState(t, t.state, null);
        }
        function Wl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Dl), Ml(e);
          var l = t.contextType;
          "object" == typeof l && null !== l
            ? (a.context = El(l))
            : ((l = Ia(t) ? Ta : Na.current), (a.context = Ma(e, l))),
            (a.state = e.memoizedState),
            "function" == typeof (l = t.getDerivedStateFromProps) &&
              (Ul(e, t, l, n), (a.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof a.getSnapshotBeforeUpdate ||
              ("function" != typeof a.UNSAFE_componentWillMount &&
                "function" != typeof a.componentWillMount) ||
              ((t = a.state),
              "function" == typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" == typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Vl.enqueueReplaceState(a, a.state, null),
              Fl(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" == typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Hl(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Dl && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" != typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function ql(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Zl(e) {
          return (0, e._init)(e._payload);
        }
        function Kl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Os(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = As(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var l = n.type;
            return l === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" == typeof l &&
                    null !== l &&
                    l.$$typeof === I &&
                    Zl(l) === t.type))
              ? (((r = a(t, n.props)).ref = Hl(e, t, n)), (r.return = e), r)
              : (((r = Ls(n.type, n.key, n.props, null, e.mode, r)).ref = Hl(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ds(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Rs(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" == typeof t && "" !== t) || "number" == typeof t)
              return ((t = As("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Ls(t.type, t.key, t.props, null, e.mode, n)).ref = Hl(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Ds(t, e.mode, n)).return = e), t;
                case I:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || L(t))
                return ((t = Rs(t, e.mode, n, null)).return = e), t;
              ql(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" == typeof n && "" !== n) || "number" == typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === a ? s(e, t, n, r) : null;
                case x:
                  return n.key === a ? c(e, t, n, r) : null;
                case I:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || L(n)) return null !== a ? null : d(e, t, n, r, null);
              ql(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" == typeof r && "" !== r) || "number" == typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case I:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || L(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              ql(t, r);
            }
            return null;
          }
          function m(a, l, i, u) {
            for (
              var s = null, c = null, d = l, m = (l = 0), g = null;
              null !== d && m < i.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var v = p(a, d, i[m], u);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(a, d),
                (l = o(v, l, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v),
                (d = g);
            }
            if (m === i.length) return n(a, d), al && Ga(a, m), s;
            if (null === d) {
              for (; m < i.length; m++)
                null !== (d = f(a, i[m], u)) &&
                  ((l = o(d, l, m)),
                  null === c ? (s = d) : (c.sibling = d),
                  (c = d));
              return al && Ga(a, m), s;
            }
            for (d = r(a, d); m < i.length; m++)
              null !== (g = h(d, a, m, i[m], u)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (l = o(g, l, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ga(a, m),
              s
            );
          }
          function g(a, i, u, s) {
            var c = L(u);
            if ("function" != typeof c) throw Error(l(150));
            if (null == (u = c.call(u))) throw Error(l(151));
            for (
              var d = (c = null), m = i, g = (i = 0), v = null, y = u.next();
              null !== m && !y.done;
              g++, y = u.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = p(a, m, y.value, s);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (i = o(b, i, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = v);
            }
            if (y.done) return n(a, m), al && Ga(a, g), c;
            if (null === m) {
              for (; !y.done; g++, y = u.next())
                null !== (y = f(a, y.value, s)) &&
                  ((i = o(y, i, g)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return al && Ga(a, g), c;
            }
            for (m = r(a, m); !y.done; g++, y = u.next())
              null !== (y = h(m, a, g, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (i = o(y, i, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ga(a, g),
              c
            );
          }
          return function e(r, l, o, u) {
            if (
              ("object" == typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" == typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case k:
                  e: {
                    for (var s = o.key, c = l; null !== c; ) {
                      if (c.key === s) {
                        if ((s = o.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, o.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" == typeof s &&
                            null !== s &&
                            s.$$typeof === I &&
                            Zl(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, o.props)).ref = Hl(r, c, o)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === S
                      ? (((l = Rs(o.props.children, r.mode, u, o.key)).return =
                          r),
                        (r = l))
                      : (((u = Ls(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          u
                        )).ref = Hl(r, l, o)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case x:
                  e: {
                    for (c = o.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === o.containerInfo &&
                          l.stateNode.implementation === o.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, o.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = Ds(o, r.mode, u)).return = r), (r = l);
                  }
                  return i(r);
                case I:
                  return e(r, l, (c = o._init)(o._payload), u);
              }
              if (te(o)) return m(r, l, o, u);
              if (L(o)) return g(r, l, o, u);
              ql(r, o);
            }
            return ("string" == typeof o && "" !== o) || "number" == typeof o
              ? ((o = "" + o),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, o)).return = r), (r = l))
                  : (n(r, l), ((l = As(o, r.mode, u)).return = r), (r = l)),
                i(r))
              : n(r, l);
          };
        }
        var Yl = Kl(!0),
          Xl = Kl(!1),
          Gl = {},
          Jl = _a(Gl),
          eo = _a(Gl),
          to = _a(Gl);
        function no(e) {
          if (e === Gl) throw Error(l(174));
          return e;
        }
        function ro(e, t) {
          switch ((Ca(to, t), Ca(eo, e), Ca(Jl, Gl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ea(Jl), Ca(Jl, t);
        }
        function ao() {
          Ea(Jl), Ea(eo), Ea(to);
        }
        function lo(e) {
          no(to.current);
          var t = no(Jl.current),
            n = ue(t, e.type);
          t !== n && (Ca(eo, e), Ca(Jl, n));
        }
        function oo(e) {
          eo.current === e && (Ea(Jl), Ea(eo));
        }
        var io = _a(0);
        function uo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var so = [];
        function co() {
          for (var e = 0; e < so.length; e++)
            so[e]._workInProgressVersionPrimary = null;
          so.length = 0;
        }
        var fo = w.ReactCurrentDispatcher,
          po = w.ReactCurrentBatchConfig,
          ho = 0,
          mo = null,
          go = null,
          vo = null,
          yo = !1,
          bo = !1,
          wo = 0,
          ko = 0;
        function xo() {
          throw Error(l(321));
        }
        function So(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function _o(e, t, n, r, a, o) {
          if (
            ((ho = o),
            (mo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ii : ui),
            (e = n(r, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (wo = 0), 25 <= o)) throw Error(l(301));
              (o += 1),
                (vo = go = null),
                (t.updateQueue = null),
                (fo.current = si),
                (e = n(r, a));
            } while (bo);
          }
          if (
            ((fo.current = oi),
            (t = null !== go && null !== go.next),
            (ho = 0),
            (vo = go = mo = null),
            (yo = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function Eo() {
          var e = 0 !== wo;
          return (wo = 0), e;
        }
        function Co() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === vo ? (mo.memoizedState = vo = e) : (vo = vo.next = e), vo
          );
        }
        function Po() {
          if (null === go) {
            var e = mo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = go.next;
          var t = null === vo ? mo.memoizedState : vo.next;
          if (null !== t) (vo = t), (go = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (go = e).memoizedState,
              baseState: go.baseState,
              baseQueue: go.baseQueue,
              queue: go.queue,
              next: null,
            }),
              null === vo ? (mo.memoizedState = vo = e) : (vo = vo.next = e);
          }
          return vo;
        }
        function No(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function zo(e) {
          var t = Po(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = go,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var i = a.next;
              (a.next = o.next), (o.next = i);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var u = (i = null),
              s = null,
              c = o;
            do {
              var d = c.lane;
              if ((ho & d) === d)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = f), (i = r)) : (s = s.next = f),
                  (mo.lanes |= d),
                  (Fu |= d);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === s ? (i = r) : (s.next = u),
              ir(r, t.memoizedState) || (wi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (mo.lanes |= o), (Fu |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function To(e) {
          var t = Po(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (o = e(o, i.action)), (i = i.next);
            } while (i !== a);
            ir(o, t.memoizedState) || (wi = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Mo() {}
        function Io(e, t) {
          var n = mo,
            r = Po(),
            a = t(),
            o = !ir(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (wi = !0)),
            (r = r.queue),
            Bo(Lo.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== vo && 1 & vo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Do(9, Oo.bind(null, n, r, a, t), void 0, null),
              null === Tu)
            )
              throw Error(l(349));
            0 != (30 & ho) || jo(n, t, a);
          }
          return a;
        }
        function jo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Oo(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ro(t) && Fo(e);
        }
        function Lo(e, t, n) {
          return n(function () {
            Ro(t) && Fo(e);
          });
        }
        function Ro(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (e) {
            return !0;
          }
        }
        function Fo(e) {
          var t = zl(e, 1);
          null !== t && rs(t, e, 1, -1);
        }
        function Ao(e) {
          var t = Co();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: No,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, mo, e)),
            [t.memoizedState, e]
          );
        }
        function Do(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Uo() {
          return Po().memoizedState;
        }
        function Vo(e, t, n, r) {
          var a = Co();
          (mo.flags |= e),
            (a.memoizedState = Do(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function $o(e, t, n, r) {
          var a = Po();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== go) {
            var o = go.memoizedState;
            if (((l = o.destroy), null !== r && So(r, o.deps)))
              return void (a.memoizedState = Do(t, n, l, r));
          }
          (mo.flags |= e), (a.memoizedState = Do(1 | t, n, l, r));
        }
        function Qo(e, t) {
          return Vo(8390656, 8, e, t);
        }
        function Bo(e, t) {
          return $o(2048, 8, e, t);
        }
        function Wo(e, t) {
          return $o(4, 2, e, t);
        }
        function Ho(e, t) {
          return $o(4, 4, e, t);
        }
        function qo(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Zo(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            $o(4, 4, qo.bind(null, t, e), n)
          );
        }
        function Ko() {}
        function Yo(e, t) {
          var n = Po();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xo(e, t) {
          var n = Po();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Go(e, t, n) {
          return 0 == (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (wi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = mt()), (mo.lanes |= n), (Fu |= n), (e.baseState = !0)),
              t);
        }
        function Jo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (po.transition = r);
          }
        }
        function ei() {
          return Po().memoizedState;
        }
        function ti(e, t, n) {
          var r = ns(e);
          (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            ri(e)
              ? ai(t, n)
              : null !== (n = Nl(e, t, n, r)) &&
                (rs(n, e, r, ts()), li(n, t, r));
        }
        function ni(e, t, n) {
          var r = ns(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ri(e)) ai(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, o))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Pl(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (e) {}
            null !== (n = Nl(e, t, a, r)) &&
              (rs(n, e, r, (a = ts())), li(n, t, r));
          }
        }
        function ri(e) {
          var t = e.alternate;
          return e === mo || (null !== t && t === mo);
        }
        function ai(e, t) {
          bo = yo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function li(e, t, n) {
          if (0 != (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var oi = {
            readContext: El,
            useCallback: xo,
            useContext: xo,
            useEffect: xo,
            useImperativeHandle: xo,
            useInsertionEffect: xo,
            useLayoutEffect: xo,
            useMemo: xo,
            useReducer: xo,
            useRef: xo,
            useState: xo,
            useDebugValue: xo,
            useDeferredValue: xo,
            useTransition: xo,
            useMutableSource: xo,
            useSyncExternalStore: xo,
            useId: xo,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: El,
            useCallback: function (e, t) {
              return (Co().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: El,
            useEffect: Qo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                Vo(4194308, 4, qo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Vo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Vo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Co();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Co();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ti.bind(null, mo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Co().memoizedState = e);
            },
            useState: Ao,
            useDebugValue: Ko,
            useDeferredValue: function (e) {
              return (Co().memoizedState = e);
            },
            useTransition: function () {
              var e = Ao(!1),
                t = e[0];
              return (
                (e = Jo.bind(null, e[1])), (Co().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mo,
                a = Co();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === Tu)) throw Error(l(349));
                0 != (30 & ho) || jo(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Qo(Lo.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Do(9, Oo.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Co(),
                t = Tu.identifierPrefix;
              if (al) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - ot(Ya) - 1))).toString(32) + n)),
                  0 < (n = wo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ko++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: El,
            useCallback: Yo,
            useContext: El,
            useEffect: Bo,
            useImperativeHandle: Zo,
            useInsertionEffect: Wo,
            useLayoutEffect: Ho,
            useMemo: Xo,
            useReducer: zo,
            useRef: Uo,
            useState: function () {
              return zo(No);
            },
            useDebugValue: Ko,
            useDeferredValue: function (e) {
              return Go(Po(), go.memoizedState, e);
            },
            useTransition: function () {
              return [zo(No)[0], Po().memoizedState];
            },
            useMutableSource: Mo,
            useSyncExternalStore: Io,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          si = {
            readContext: El,
            useCallback: Yo,
            useContext: El,
            useEffect: Bo,
            useImperativeHandle: Zo,
            useInsertionEffect: Wo,
            useLayoutEffect: Ho,
            useMemo: Xo,
            useReducer: To,
            useRef: Uo,
            useState: function () {
              return To(No);
            },
            useDebugValue: Ko,
            useDeferredValue: function (e) {
              var t = Po();
              return null === go
                ? (t.memoizedState = e)
                : Go(t, go.memoizedState, e);
            },
            useTransition: function () {
              return [To(No)[0], Po().memoizedState];
            },
            useMutableSource: Mo,
            useSyncExternalStore: Io,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function ci(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += V(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (e) {
            a = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function di(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fi(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        var pi = "function" == typeof WeakMap ? WeakMap : Map;
        function hi(e, t, n) {
          ((n = jl(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wu || ((Wu = !0), (Hu = r)), fi(0, t);
            }),
            n
          );
        }
        function mi(e, t, n) {
          (n = jl(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fi(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" == typeof l.componentDidCatch &&
              (n.callback = function () {
                fi(0, t),
                  "function" != typeof r &&
                    (null === qu ? (qu = new Set([this])) : qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cs.bind(null, e, t, n)), t.then(e, e));
        }
        function vi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yi(e, t, n, r, a) {
          return 0 == (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = jl(-1, 1)).tag = 2), Ol(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bi = w.ReactCurrentOwner,
          wi = !1;
        function ki(e, t, n, r) {
          t.child = null === e ? Xl(t, null, n, r) : Yl(t, e.child, n, r);
        }
        function xi(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            _l(t, a),
            (r = _o(e, t, n, r, l, a)),
            (n = Eo()),
            null === e || wi
              ? (al && n && el(t), (t.flags |= 1), ki(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, t, a))
          );
        }
        function Si(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" != typeof l ||
              js(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ls(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), _i(e, t, l, r, a));
          }
          if (((l = e.child), 0 == (e.lanes & a))) {
            var o = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(o, r) &&
              e.ref === t.ref
            )
              return Wi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Os(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function _i(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (ur(l, r) && e.ref === t.ref) {
              if (((wi = !1), (t.pendingProps = r = l), 0 == (e.lanes & a)))
                return (t.lanes = e.lanes), Wi(e, t, a);
              0 != (131072 & e.flags) && (wi = !0);
            }
          }
          return Pi(e, t, n, r, a);
        }
        function Ei(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 == (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Ou, ju),
                (ju |= n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(Ou, ju),
                  (ju |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ca(Ou, ju),
                (ju |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(Ou, ju),
              (ju |= r);
          return ki(e, t, a, n), t.child;
        }
        function Ci(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Pi(e, t, n, r, a) {
          var l = Ia(n) ? Ta : Na.current;
          return (
            (l = Ma(t, l)),
            _l(t, a),
            (n = _o(e, t, n, r, l, a)),
            (r = Eo()),
            null === e || wi
              ? (al && r && el(t), (t.flags |= 1), ki(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, t, a))
          );
        }
        function Ni(e, t, n, r, a) {
          if (Ia(n)) {
            var l = !0;
            Ra(t);
          } else l = !1;
          if ((_l(t, a), null === t.stateNode))
            Bi(e, t), Ql(t, n, r), Wl(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              i = t.memoizedProps;
            o.props = i;
            var u = o.context,
              s = n.contextType;
            s =
              "object" == typeof s && null !== s
                ? El(s)
                : Ma(t, (s = Ia(n) ? Ta : Na.current));
            var c = n.getDerivedStateFromProps,
              d =
                "function" == typeof c ||
                "function" == typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                "function" != typeof o.componentWillReceiveProps) ||
              ((i !== r || u !== s) && Bl(t, o, r, s)),
              (Tl = !1);
            var f = t.memoizedState;
            (o.state = f),
              Fl(t, r, o, a),
              (u = t.memoizedState),
              i !== r || f !== u || za.current || Tl
                ? ("function" == typeof c &&
                    (Ul(t, n, c, r), (u = t.memoizedState)),
                  (i = Tl || $l(t, n, i, r, f, u, s))
                    ? (d ||
                        ("function" != typeof o.UNSAFE_componentWillMount &&
                          "function" != typeof o.componentWillMount) ||
                        ("function" == typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" == typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" == typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" == typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = i))
                : ("function" == typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Il(e, t),
              (i = t.memoizedProps),
              (s = t.type === t.elementType ? i : gl(t.type, i)),
              (o.props = s),
              (d = t.pendingProps),
              (f = o.context),
              (u =
                "object" == typeof (u = n.contextType) && null !== u
                  ? El(u)
                  : Ma(t, (u = Ia(n) ? Ta : Na.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" == typeof p ||
              "function" == typeof o.getSnapshotBeforeUpdate) ||
              ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                "function" != typeof o.componentWillReceiveProps) ||
              ((i !== d || f !== u) && Bl(t, o, r, u)),
              (Tl = !1),
              (f = t.memoizedState),
              (o.state = f),
              Fl(t, r, o, a);
            var h = t.memoizedState;
            i !== d || f !== h || za.current || Tl
              ? ("function" == typeof p &&
                  (Ul(t, n, p, r), (h = t.memoizedState)),
                (s = Tl || $l(t, n, s, r, f, h, u) || !1)
                  ? (c ||
                      ("function" != typeof o.UNSAFE_componentWillUpdate &&
                        "function" != typeof o.componentWillUpdate) ||
                      ("function" == typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, u),
                      "function" == typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" == typeof o.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" != typeof o.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof o.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = u),
                (r = s))
              : ("function" != typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return zi(e, t, n, r, l, a);
        }
        function zi(e, t, n, r, a, l) {
          Ci(e, t);
          var o = 0 != (128 & t.flags);
          if (!r && !o) return a && Fa(t, n, !1), Wi(e, t, l);
          (r = t.stateNode), (bi.current = t);
          var i =
            o && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Yl(t, e.child, null, l)),
                (t.child = Yl(t, null, i, l)))
              : ki(e, t, i, l),
            (t.memoizedState = r.state),
            a && Fa(t, n, !0),
            t.child
          );
        }
        function Ti(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Oa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Oa(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Mi(e, t, n, r, a) {
          return pl(), hl(a), (t.flags |= 256), ki(e, t, n, r), t.child;
        }
        var Ii,
          ji,
          Oi,
          Li,
          Ri = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ai(e, t, n) {
          var r,
            a = t.pendingProps,
            o = io.current,
            i = !1,
            u = 0 != (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ca(io, 1 & o),
            null === e)
          )
            return (
              sl(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 == (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 == (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Fs(u, a, 0, null)),
                      (e = Rs(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Fi(n)),
                      (t.memoizedState = Ri),
                      e)
                    : Di(t, u))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ui(e, t, i, (r = di(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Fs(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Rs(o, a, i, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 != (1 & t.mode) && Yl(t, e.child, null, i),
                    (t.child.memoizedState = Fi(i)),
                    (t.memoizedState = Ri),
                    o);
              if (0 == (1 & t.mode)) return Ui(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Ui(e, t, i, (r = di((o = Error(l(419))), r, void 0)))
                );
              }
              if (((u = 0 != (i & e.childLanes)), wi || u)) {
                if (null !== (r = Tu)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 != (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), zl(e, a), rs(r, e, a, -1));
                }
                return gs(), Ui(e, t, i, (r = di(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ns.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (rl = sa(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((qa[Za++] = Ya),
                    (qa[Za++] = Xa),
                    (qa[Za++] = Ka),
                    (Ya = e.id),
                    (Xa = e.overflow),
                    (Ka = t)),
                  ((t = Di(t, r.children)).flags |= 4096),
                  t);
            })(e, t, u, a, r, o, n);
          if (i) {
            (i = a.fallback), (u = t.mode), (r = (o = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 == (1 & u) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = Os(o, s)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (i = Os(r, i))
                : ((i = Rs(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Fi(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ri),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Os(i, { mode: "visible", children: a.children })),
            0 == (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Di(e, t) {
          return (
            ((t = Fs(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ui(e, t, n, r) {
          return (
            null !== r && hl(r),
            Yl(t, e.child, null, n),
            ((e = Di(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Vi(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Sl(e.return, t, n);
        }
        function $i(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Qi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((ki(e, t, r.children, n), 0 != (2 & (r = io.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 != (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Vi(e, n, t);
                else if (19 === e.tag) Vi(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(io, r), 0 == (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === uo(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  $i(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === uo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                $i(t, !0, n, null, l);
                break;
              case "together":
                $i(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Bi(e, t) {
          0 == (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fu |= t.lanes),
            0 == (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Os((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Os(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Hi(e, t) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function qi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Zi(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return qi(t), null;
            case 1:
            case 17:
              return Ia(t.type) && ja(), qi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                Ea(za),
                Ea(Na),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (is(ll), (ll = null)))),
                ji(e, t),
                qi(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Oi(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return qi(t), null;
                }
                if (((e = no(Jl.current)), dl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = o), (e = 0 != (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Dr("cancel", r), Dr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Dr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Lr.length; a++) Dr(Lr[a], r);
                      break;
                    case "source":
                      Dr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Dr("error", r), Dr("load", r);
                      break;
                    case "details":
                      Dr("toggle", r);
                      break;
                    case "input":
                      Y(r, o), Dr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Dr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Dr("invalid", r);
                  }
                  for (var u in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(u)) {
                      var s = o[u];
                      "children" === u
                        ? "string" == typeof s
                          ? r.textContent !== s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Gr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" == typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Gr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : i.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Dr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      H(r), J(r, o, !0);
                      break;
                    case "textarea":
                      H(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof o.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Ii(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Dr("cancel", e), Dr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Dr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Lr.length; a++) Dr(Lr[a], e);
                        a = r;
                        break;
                      case "source":
                        Dr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Dr("error", e), Dr("load", e), (a = r);
                        break;
                      case "details":
                        Dr("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = K(e, r)), Dr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          Dr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Dr("invalid", e);
                    }
                    for (o in (ye(n, a), (s = a)))
                      if (s.hasOwnProperty(o)) {
                        var c = s[o];
                        "style" === o
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === o
                          ? "string" == typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" == typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (i.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Dr("scroll", e)
                              : null != c && b(e, o, c, u));
                      }
                    switch (n) {
                      case "input":
                        H(e), J(e, r, !1);
                        break;
                      case "textarea":
                        H(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + B(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" == typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return qi(t), null;
            case 6:
              if (e && null != t.stateNode) Li(e, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = no(to.current)), no(Jl.current), dl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (o = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Gr(r.nodeValue, n, 0 != (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Gr(r.nodeValue, n, 0 != (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return qi(t), null;
            case 13:
              if (
                (Ea(io),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 != (1 & t.mode) &&
                  0 == (128 & t.flags)
                )
                  fl(), pl(), (t.flags |= 98560), (o = !1);
                else if (((o = dl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(l(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(l(317));
                    o[fa] = t;
                  } else
                    pl(),
                      0 == (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  qi(t), (o = !1);
                } else null !== ll && (is(ll), (ll = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !=
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 != (1 & t.mode) &&
                      (null === e || 0 != (1 & io.current)
                        ? 0 === Lu && (Lu = 3)
                        : gs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  qi(t),
                  null);
            case 4:
              return (
                ao(),
                ji(e, t),
                null === e && $r(t.stateNode.containerInfo),
                qi(t),
                null
              );
            case 10:
              return xl(t.type._context), qi(t), null;
            case 19:
              if ((Ea(io), null === (o = t.memoizedState))) return qi(t), null;
              if (((r = 0 != (128 & t.flags)), null === (u = o.rendering)))
                if (r) Hi(o, !1);
                else {
                  if (0 !== Lu || (null !== e && 0 != (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = uo(e))) {
                        for (
                          t.flags |= 128,
                            Hi(o, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (u = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = u.childLanes),
                                (o.lanes = u.lanes),
                                (o.child = u.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = u.memoizedProps),
                                (o.memoizedState = u.memoizedState),
                                (o.updateQueue = u.updateQueue),
                                (o.type = u.type),
                                (e = u.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(io, (1 & io.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Xe() > Qu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Hi(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = uo(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Hi(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !u.alternate &&
                        !al)
                    )
                      return qi(t), null;
                  } else
                    2 * Xe() - o.renderingStartTime > Qu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Hi(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = o.last) ? (n.sibling = u) : (t.child = u),
                    (o.last = u));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = io.current),
                  Ca(io, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (qi(t), null);
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                  ? 0 != (1073741824 & ju) &&
                    (qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : qi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Ki(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                Ia(t.type) && ja(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                Ea(za),
                Ea(Na),
                co(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Ea(io),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ea(io), null;
            case 4:
              return ao(), null;
            case 10:
              return xl(t.type._context), null;
            case 22:
            case 23:
              return fs(), null;
            default:
              return null;
          }
        }
        (Ii = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (ji = function () {}),
          (Oi = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no(Jl.current);
              var l,
                o = null;
              switch (n) {
                case "input":
                  (a = K(e, a)), (r = K(e, r)), (o = []);
                  break;
                case "select":
                  (a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" != typeof a.onClick &&
                    "function" == typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (l in u)
                      u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (l in u)
                        !u.hasOwnProperty(l) ||
                          (s && s.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in s)
                        s.hasOwnProperty(l) &&
                          u[l] !== s[l] &&
                          (n || (n = {}), (n[l] = s[l]));
                    } else n || (o || (o = []), o.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (o = o || []).push(c, s))
                      : "children" === c
                      ? ("string" != typeof s && "number" != typeof s) ||
                        (o = o || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Dr("scroll", e),
                            o || u === s || (o = []))
                          : (o = o || []).push(c, s));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Li = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yi = !1,
          Xi = !1,
          Gi = "function" == typeof WeakSet ? WeakSet : Set,
          Ji = null;
        function eu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" == typeof n)
              try {
                n(null);
              } catch (n) {
                Es(e, t, n);
              }
            else n.current = null;
        }
        function tu(e, t, n) {
          try {
            n();
          } catch (n) {
            Es(e, t, n);
          }
        }
        var nu = !1;
        function ru(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && tu(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function au(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function lu(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
          }
        }
        function ou(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ou(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function iu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || iu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        var du = null,
          fu = !1;
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling);
        }
        function hu(e, t, n) {
          if (lt && "function" == typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (e) {}
          switch (n.tag) {
            case 5:
              Xi || eu(n, t);
            case 6:
              var r = du,
                a = fu;
              (du = null),
                pu(e, t, n),
                (fu = a),
                null !== (du = r) &&
                  (fu
                    ? ((e = du),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : du.removeChild(n.stateNode));
              break;
            case 18:
              null !== du &&
                (fu
                  ? ((e = du),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    $t(e))
                  : ua(du, n.stateNode));
              break;
            case 4:
              (r = du),
                (a = fu),
                (du = n.stateNode.containerInfo),
                (fu = !0),
                pu(e, t, n),
                (du = r),
                (fu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xi &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    o = l.destroy;
                  (l = l.tag),
                    void 0 !== o &&
                      (0 != (2 & l) || 0 != (4 & l)) &&
                      tu(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              pu(e, t, n);
              break;
            case 1:
              if (
                !Xi &&
                (eu(n, t),
                "function" == typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (e) {
                  Es(n, t, e);
                }
              pu(e, t, n);
              break;
            case 21:
              pu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xi = (r = Xi) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Xi = r))
                : pu(e, t, n);
              break;
            default:
              pu(e, t, n);
          }
        }
        function mu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gi()),
              t.forEach(function (t) {
                var r = zs.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  i = t,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (du = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (du = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === du) throw Error(l(160));
                hu(o, i, a), (du = null), (fu = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (e) {
                Es(a, t, e);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vu(t, e), (t = t.sibling);
        }
        function vu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gu(t, e), yu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), au(3, e);
                } catch (t) {
                  Es(e, e.return, t);
                }
                try {
                  ru(5, e, e.return);
                } catch (t) {
                  Es(e, e.return, t);
                }
              }
              break;
            case 1:
              gu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if (
                (gu(t, e),
                yu(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (t) {
                  Es(e, e.return, t);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : o,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === o.type &&
                      null != o.name &&
                      X(a, o),
                      be(u, i);
                    var c = be(u, o);
                    for (i = 0; i < s.length; i += 2) {
                      var d = s[i],
                        f = s[i + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (u) {
                      case "input":
                        G(a, o);
                        break;
                      case "textarea":
                        le(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (t) {
                    Es(e, e.return, t);
                  }
              }
              break;
            case 6:
              if ((gu(t, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (t) {
                  Es(e, e.return, t);
                }
              }
              break;
            case 3:
              if (
                (gu(t, e),
                yu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  $t(t.containerInfo);
                } catch (t) {
                  Es(e, e.return, t);
                }
              break;
            case 4:
            default:
              gu(t, e), yu(e);
              break;
            case 13:
              gu(t, e),
                yu(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    ($u = Xe())),
                4 & r && mu(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xi = (c = Xi) || d), gu(t, e), (Xi = c))
                  : gu(t, e),
                yu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 != (1 & e.mode))
                )
                  for (Ji = e, d = e.child; null !== d; ) {
                    for (f = Ji = d; null !== Ji; ) {
                      switch (((h = (p = Ji).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var m = p.stateNode;
                          if ("function" == typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (e) {
                              Es(r, n, e);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xu(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Ji = h)) : xu(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" == typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((u = f.stateNode),
                              (i =
                                null != (s = f.memoizedProps.style) &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = me("display", i)));
                      } catch (t) {
                        Es(e, e.return, t);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (t) {
                        Es(e, e.return, t);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              gu(t, e), yu(e), 4 & r && mu(e);
            case 21:
          }
        }
        function yu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (iu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    cu(e, uu(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  su(e, uu(e), o);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (t) {
              Es(e, e.return, t);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bu(e, t, n) {
          (Ji = e), wu(e, t, n);
        }
        function wu(e, t, n) {
          for (var r = 0 != (1 & e.mode); null !== Ji; ) {
            var a = Ji,
              l = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Yi;
              if (!o) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Xi;
                i = Yi;
                var s = Xi;
                if (((Yi = o), (Xi = u) && !s))
                  for (Ji = a; null !== Ji; )
                    (u = (o = Ji).child),
                      22 === o.tag && null !== o.memoizedState
                        ? Su(a)
                        : null !== u
                        ? ((u.return = o), (Ji = u))
                        : Su(a);
                for (; null !== l; ) (Ji = l), wu(l, t, n), (l = l.sibling);
                (Ji = a), (Yi = i), (Xi = s);
              }
              ku(e);
            } else
              0 != (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Ji = l))
                : ku(e);
          }
        }
        function ku(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (0 != (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 != (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi || au(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Al(t, o, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Al(t, i, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && $t(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Xi || (512 & t.flags && lu(t));
              } catch (e) {
                Es(t, t.return, e);
              }
            }
            if (t === e) {
              Ji = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function xu(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (t === e) {
              Ji = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function Su(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    au(4, t);
                  } catch (e) {
                    Es(t, n, e);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" == typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (e) {
                      Es(t, a, e);
                    }
                  }
                  var l = t.return;
                  try {
                    lu(t);
                  } catch (e) {
                    Es(t, l, e);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    lu(t);
                  } catch (e) {
                    Es(t, o, e);
                  }
              }
            } catch (e) {
              Es(t, t.return, e);
            }
            if (t === e) {
              Ji = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Ji = i);
              break;
            }
            Ji = t.return;
          }
        }
        var _u,
          Eu = Math.ceil,
          Cu = w.ReactCurrentDispatcher,
          Pu = w.ReactCurrentOwner,
          Nu = w.ReactCurrentBatchConfig,
          zu = 0,
          Tu = null,
          Mu = null,
          Iu = 0,
          ju = 0,
          Ou = _a(0),
          Lu = 0,
          Ru = null,
          Fu = 0,
          Au = 0,
          Du = 0,
          Uu = null,
          Vu = null,
          $u = 0,
          Qu = 1 / 0,
          Bu = null,
          Wu = !1,
          Hu = null,
          qu = null,
          Zu = !1,
          Ku = null,
          Yu = 0,
          Xu = 0,
          Gu = null,
          Ju = -1,
          es = 0;
        function ts() {
          return 0 != (6 & zu) ? Xe() : -1 !== Ju ? Ju : (Ju = Xe());
        }
        function ns(e) {
          return 0 == (1 & e.mode)
            ? 1
            : 0 != (2 & zu) && 0 !== Iu
            ? Iu & -Iu
            : null !== ml.transition
            ? (0 === es && (es = mt()), es)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function rs(e, t, n, r) {
          if (50 < Xu) throw ((Xu = 0), (Gu = null), Error(l(185)));
          vt(e, n, r),
            (0 != (2 & zu) && e === Tu) ||
              (e === Tu && (0 == (2 & zu) && (Au |= n), 4 === Lu && us(e, Iu)),
              as(e, r),
              1 === n &&
                0 === zu &&
                0 == (1 & t.mode) &&
                ((Qu = Xe() + 500), Da && $a()));
        }
        function as(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var o = 31 - ot(l),
                i = 1 << o,
                u = a[o];
              -1 === u
                ? (0 != (i & n) && 0 == (i & r)) || (a[o] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (l &= ~i);
            }
          })(e, t);
          var r = ft(e, e === Tu ? Iu : 0);
          if (0 === r)
            null !== n && Ze(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ze(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Da = !0), Va(e);
                  })(ss.bind(null, e))
                : Va(ss.bind(null, e)),
                oa(function () {
                  0 == (6 & zu) && $a();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ts(n, ls.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ls(e, t) {
          if (((Ju = -1), (es = 0), 0 != (6 & zu))) throw Error(l(327));
          var n = e.callbackNode;
          if (Ss() && e.callbackNode !== n) return null;
          var r = ft(e, e === Tu ? Iu : 0);
          if (0 === r) return null;
          if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = vs(e, r);
          else {
            t = r;
            var a = zu;
            zu |= 2;
            var o = ms();
            for (
              (Tu === e && Iu === t) ||
              ((Bu = null), (Qu = Xe() + 500), ps(e, t));
              ;

            )
              try {
                bs();
                break;
              } catch (t) {
                hs(e, t);
              }
            kl(),
              (Cu.current = o),
              (zu = a),
              null !== Mu ? (t = 0) : ((Tu = null), (Iu = 0), (t = Lu));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = os(e, a))),
              1 === t)
            )
              throw ((n = Ru), ps(e, 0), us(e, r), as(e, Xe()), n);
            if (6 === t) us(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 == (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(l(), a)) return !1;
                            } catch (e) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vs(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = os(e, o))),
                  1 === t))
              )
                throw ((n = Ru), ps(e, 0), us(e, r), as(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  xs(e, Vu, Bu);
                  break;
                case 3:
                  if (
                    (us(e, r),
                    (130023424 & r) === r && 10 < (t = $u + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xs.bind(null, e, Vu, Bu), t);
                    break;
                  }
                  xs(e, Vu, Bu);
                  break;
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - ot(r);
                    (o = 1 << i), (i = t[i]) > a && (a = i), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Eu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xs.bind(null, e, Vu, Bu), r);
                    break;
                  }
                  xs(e, Vu, Bu);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return as(e, Xe()), e.callbackNode === n ? ls.bind(null, e) : null;
        }
        function os(e, t) {
          var n = Uu;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = vs(e, t)) && ((t = Vu), (Vu = n), null !== t && is(t)),
            e
          );
        }
        function is(e) {
          null === Vu ? (Vu = e) : Vu.push.apply(Vu, e);
        }
        function us(e, t) {
          for (
            t &= ~Du,
              t &= ~Au,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ss(e) {
          if (0 != (6 & zu)) throw Error(l(327));
          Ss();
          var t = ft(e, 0);
          if (0 == (1 & t)) return as(e, Xe()), null;
          var n = vs(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = os(e, r)));
          }
          if (1 === n) throw ((n = Ru), ps(e, 0), us(e, t), as(e, Xe()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xs(e, Vu, Bu),
            as(e, Xe()),
            null
          );
        }
        function cs(e, t) {
          var n = zu;
          zu |= 1;
          try {
            return e(t);
          } finally {
            0 === (zu = n) && ((Qu = Xe() + 500), Da && $a());
          }
        }
        function ds(e) {
          null !== Ku && 0 === Ku.tag && 0 == (6 & zu) && Ss();
          var t = zu;
          zu |= 1;
          var n = Nu.transition,
            r = bt;
          try {
            if (((Nu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Nu.transition = n), 0 == (6 & (zu = t)) && $a();
          }
        }
        function fs() {
          (ju = Ou.current), Ea(Ou);
        }
        function ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Mu))
            for (n = Mu.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null != (r = r.type.childContextTypes) && ja();
                  break;
                case 3:
                  ao(), Ea(za), Ea(Na), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  Ea(io);
                  break;
                case 10:
                  xl(r.type._context);
                  break;
                case 22:
                case 23:
                  fs();
              }
              n = n.return;
            }
          if (
            ((Tu = e),
            (Mu = e = Os(e.current, null)),
            (Iu = ju = t),
            (Lu = 0),
            (Ru = null),
            (Du = Au = Fu = 0),
            (Vu = Uu = null),
            null !== Cl)
          ) {
            for (t = 0; t < Cl.length; t++)
              if (null !== (r = (n = Cl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var o = l.next;
                  (l.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Cl = null;
          }
          return e;
        }
        function hs(e, t) {
          for (;;) {
            var n = Mu;
            try {
              if ((kl(), (fo.current = oi), yo)) {
                for (var r = mo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yo = !1;
              }
              if (
                ((ho = 0),
                (vo = go = mo = null),
                (bo = !1),
                (wo = 0),
                (Pu.current = null),
                null === n || null === n.return)
              ) {
                (Lu = 1), (Ru = t), (Mu = null);
                break;
              }
              e: {
                var o = e,
                  i = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Iu),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" == typeof s &&
                    "function" == typeof s.then)
                ) {
                  var c = s,
                    d = u,
                    f = d.tag;
                  if (0 == (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = vi(i);
                  if (null !== h) {
                    (h.flags &= -257),
                      yi(h, i, u, 0, t),
                      1 & h.mode && gi(o, c, t),
                      (s = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(s), (t.updateQueue = g);
                    } else m.add(s);
                    break e;
                  }
                  if (0 == (1 & t)) {
                    gi(o, c, t), gs();
                    break e;
                  }
                  s = Error(l(426));
                } else if (al && 1 & u.mode) {
                  var v = vi(i);
                  if (null !== v) {
                    0 == (65536 & v.flags) && (v.flags |= 256),
                      yi(v, i, u, 0, t),
                      hl(ci(s, u));
                    break e;
                  }
                }
                (o = s = ci(s, u)),
                  4 !== Lu && (Lu = 2),
                  null === Uu ? (Uu = [o]) : Uu.push(o),
                  (o = i);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Rl(o, hi(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 == (128 & o.flags) &&
                        ("function" == typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" == typeof b.componentDidCatch &&
                            (null === qu || !qu.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Rl(o, mi(o, u, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              ks(n);
            } catch (e) {
              (t = e), Mu === n && null !== n && (Mu = n = n.return);
              continue;
            }
            break;
          }
        }
        function ms() {
          var e = Cu.current;
          return (Cu.current = oi), null === e ? oi : e;
        }
        function gs() {
          (0 !== Lu && 3 !== Lu && 2 !== Lu) || (Lu = 4),
            null === Tu ||
              (0 == (268435455 & Fu) && 0 == (268435455 & Au)) ||
              us(Tu, Iu);
        }
        function vs(e, t) {
          var n = zu;
          zu |= 2;
          var r = ms();
          for ((Tu === e && Iu === t) || ((Bu = null), ps(e, t)); ; )
            try {
              ys();
              break;
            } catch (t) {
              hs(e, t);
            }
          if ((kl(), (zu = n), (Cu.current = r), null !== Mu))
            throw Error(l(261));
          return (Tu = null), (Iu = 0), Lu;
        }
        function ys() {
          for (; null !== Mu; ) ws(Mu);
        }
        function bs() {
          for (; null !== Mu && !Ke(); ) ws(Mu);
        }
        function ws(e) {
          var t = _u(e.alternate, e, ju);
          (e.memoizedProps = e.pendingProps),
            null === t ? ks(e) : (Mu = t),
            (Pu.current = null);
        }
        function ks(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (32768 & t.flags))) {
              if (null !== (n = Zi(n, t, ju))) return void (Mu = n);
            } else {
              if (null !== (n = Ki(n, t)))
                return (n.flags &= 32767), void (Mu = n);
              if (null === e) return (Lu = 6), void (Mu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Mu = t);
            Mu = t = e;
          } while (null !== t);
          0 === Lu && (Lu = 5);
        }
        function xs(e, t, n) {
          var r = bt,
            a = Nu.transition;
          try {
            (Nu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Ss();
                } while (null !== Ku);
                if (0 != (6 & zu)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, o),
                  e === Tu && ((Mu = Tu = null), (Iu = 0)),
                  (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                    Zu ||
                    ((Zu = !0),
                    Ts(tt, function () {
                      return Ss(), null;
                    })),
                  (o = 0 != (15990 & n.flags)),
                  0 != (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Nu.transition), (Nu.transition = null);
                  var i = bt;
                  bt = 1;
                  var u = zu;
                  (zu |= 4),
                    (Pu.current = null),
                    (function (e, t) {
                      if (((ea = Bt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (e) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (u = i + a),
                                    f !== o ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (s = i + r),
                                    3 === f.nodeType &&
                                      (i += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = i),
                                    p === o && ++d === r && (s = i),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Bt = !1,
                          Ji = t;
                        null !== Ji;

                      )
                        if (
                          ((e = (t = Ji).child),
                          0 != (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Ji = e);
                        else
                          for (; null !== Ji; ) {
                            t = Ji;
                            try {
                              var m = t.alternate;
                              if (0 != (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : gl(t.type, g),
                                          v
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (e) {
                              Es(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Ji = e);
                              break;
                            }
                            Ji = t.return;
                          }
                      (m = nu), (nu = !1);
                    })(e, n),
                    vu(n, e),
                    hr(ta),
                    (Bt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bu(n, e, a),
                    Ye(),
                    (zu = u),
                    (bt = i),
                    (Nu.transition = o);
                } else e.current = n;
                if (
                  (Zu && ((Zu = !1), (Ku = e), (Yu = a)),
                  0 === (o = e.pendingLanes) && (qu = null),
                  (function (e) {
                    if (lt && "function" == typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 == (128 & e.current.flags)
                        );
                      } catch (e) {}
                  })(n.stateNode),
                  as(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if (Wu) throw ((Wu = !1), (e = Hu), (Hu = null), e);
                0 != (1 & Yu) && 0 !== e.tag && Ss(),
                  0 != (1 & (o = e.pendingLanes))
                    ? e === Gu
                      ? Xu++
                      : ((Xu = 0), (Gu = e))
                    : (Xu = 0),
                  $a();
              })(e, t, n, r);
          } finally {
            (Nu.transition = a), (bt = r);
          }
          return null;
        }
        function Ss() {
          if (null !== Ku) {
            var e = wt(Yu),
              t = Nu.transition,
              n = bt;
            try {
              if (((Nu.transition = null), (bt = 16 > e ? 16 : e), null === Ku))
                var r = !1;
              else {
                if (((e = Ku), (Ku = null), (Yu = 0), 0 != (6 & zu)))
                  throw Error(l(331));
                var a = zu;
                for (zu |= 4, Ji = e.current; null !== Ji; ) {
                  var o = Ji,
                    i = o.child;
                  if (0 != (16 & Ji.flags)) {
                    var u = o.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Ji = c; null !== Ji; ) {
                          var d = Ji;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, d, o);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Ji = f);
                          else
                            for (; null !== Ji; ) {
                              var p = (d = Ji).sibling,
                                h = d.return;
                              if ((ou(d), d === c)) {
                                Ji = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Ji = p);
                                break;
                              }
                              Ji = h;
                            }
                        }
                      }
                      var m = o.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Ji = o;
                    }
                  }
                  if (0 != (2064 & o.subtreeFlags) && null !== i)
                    (i.return = o), (Ji = i);
                  else
                    e: for (; null !== Ji; ) {
                      if (0 != (2048 & (o = Ji).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Ji = y);
                        break e;
                      }
                      Ji = o.return;
                    }
                }
                var b = e.current;
                for (Ji = b; null !== Ji; ) {
                  var w = (i = Ji).child;
                  if (0 != (2064 & i.subtreeFlags) && null !== w)
                    (w.return = i), (Ji = w);
                  else
                    e: for (i = b; null !== Ji; ) {
                      if (0 != (2048 & (u = Ji).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              au(9, u);
                          }
                        } catch (e) {
                          Es(u, u.return, e);
                        }
                      if (u === i) {
                        Ji = null;
                        break e;
                      }
                      var k = u.sibling;
                      if (null !== k) {
                        (k.return = u.return), (Ji = k);
                        break e;
                      }
                      Ji = u.return;
                    }
                }
                if (
                  ((zu = a),
                  $a(),
                  lt && "function" == typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (e) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Nu.transition = t);
            }
          }
          return !1;
        }
        function _s(e, t, n) {
          (e = Ol(e, (t = hi(0, (t = ci(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (vt(e, 1, t), as(e, t));
        }
        function Es(e, t, n) {
          if (3 === e.tag) _s(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                _s(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" == typeof t.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === qu || !qu.has(r)))
                ) {
                  (t = Ol(t, (e = mi(t, (e = ci(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (vt(t, 1, e), as(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cs(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Tu === e &&
              (Iu & n) === n &&
              (4 === Lu ||
              (3 === Lu && (130023424 & Iu) === Iu && 500 > Xe() - $u)
                ? ps(e, 0)
                : (Du |= n)),
            as(e, t);
        }
        function Ps(e, t) {
          0 === t &&
            (0 == (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 == (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = ts();
          null !== (e = zl(e, t)) && (vt(e, t, n), as(e, n));
        }
        function Ns(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ps(e, n);
        }
        function zs(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Ps(e, n);
        }
        function Ts(e, t) {
          return qe(e, t);
        }
        function Ms(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Is(e, t, n, r) {
          return new Ms(e, t, n, r);
        }
        function js(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Os(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Is(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ls(e, t, n, r, a, o) {
          var i = 2;
          if (((r = e), "function" == typeof e)) js(e) && (i = 1);
          else if ("string" == typeof e) i = 5;
          else
            e: switch (e) {
              case S:
                return Rs(n.children, a, o, t);
              case _:
                (i = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = Is(12, n, t, 2 | a)).elementType = E), (e.lanes = o), e
                );
              case z:
                return (
                  ((e = Is(13, n, t, a)).elementType = z), (e.lanes = o), e
                );
              case T:
                return (
                  ((e = Is(19, n, t, a)).elementType = T), (e.lanes = o), e
                );
              case j:
                return Fs(n, a, o, t);
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      i = 10;
                      break e;
                    case P:
                      i = 9;
                      break e;
                    case N:
                      i = 11;
                      break e;
                    case M:
                      i = 14;
                      break e;
                    case I:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Is(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Rs(e, t, n, r) {
          return ((e = Is(7, e, r, t)).lanes = n), e;
        }
        function Fs(e, t, n, r) {
          return (
            ((e = Is(22, e, r, t)).elementType = j),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function As(e, t, n) {
          return ((e = Is(6, e, null, t)).lanes = n), e;
        }
        function Ds(e, t, n) {
          return (
            ((t = Is(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Us(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Vs(e, t, n, r, a, l, o, i, u) {
          return (
            (e = new Us(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Is(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ml(l),
            e
          );
        }
        function $s(e) {
          if (!e) return Pa;
          e: {
            if ($e((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ia(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ia(n)) return La(e, n, t);
          }
          return t;
        }
        function Qs(e, t, n, r, a, l, o, i, u) {
          return (
            ((e = Vs(n, r, !0, e, 0, l, 0, i, u)).context = $s(null)),
            (n = e.current),
            ((l = jl((r = ts()), (a = ns(n)))).callback = null != t ? t : null),
            Ol(n, l, a),
            (e.current.lanes = a),
            vt(e, a, r),
            as(e, r),
            e
          );
        }
        function Bs(e, t, n, r) {
          var a = t.current,
            l = ts(),
            o = ns(a);
          return (
            (n = $s(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = jl(l, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ol(a, t, o)) && (rs(e, a, o, l), Ll(e, a, o)),
            o
          );
        }
        function Ws(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Hs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qs(e, t) {
          Hs(e, t), (e = e.alternate) && Hs(e, t);
        }
        _u = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || za.current) wi = !0;
            else {
              if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                  (wi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ti(t), pl();
                        break;
                      case 5:
                        lo(t);
                        break;
                      case 1:
                        Ia(t.type) && Ra(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(vl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(io, 1 & io.current), (t.flags |= 128), null)
                            : 0 != (n & t.child.childLanes)
                            ? Ai(e, t, n)
                            : (Ca(io, 1 & io.current),
                              null !== (e = Wi(e, t, n)) ? e.sibling : null);
                        Ca(io, 1 & io.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))
                        ) {
                          if (r) return Qi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(io, io.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ei(e, t, n);
                    }
                    return Wi(e, t, n);
                  })(e, t, n)
                );
              wi = 0 != (131072 & e.flags);
            }
          else (wi = !1), al && 0 != (1048576 & t.flags) && Ja(t, Ha, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Bi(e, t), (e = t.pendingProps);
              var a = Ma(t, Na.current);
              _l(t, n), (a = _o(null, t, r, e, a, n));
              var o = Eo();
              return (
                (t.flags |= 1),
                "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ia(r) ? ((o = !0), Ra(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ml(t),
                    (a.updater = Vl),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Wl(t, r, e, n),
                    (t = zi(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    al && o && el(t),
                    ki(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Bi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return js(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === N) return 11;
                        if (e === M) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Pi(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ni(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xi(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Si(null, t, r, gl(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pi(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ni(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 3:
              e: {
                if ((Ti(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Il(e, t),
                  Fl(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Mi(e, t, r, n, (a = ci(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Mi(e, t, r, n, (a = ci(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = sa(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Xl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Wi(e, t, n);
                    break e;
                  }
                  ki(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                lo(t),
                null === e && sl(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Ci(e, t),
                ki(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && sl(t), null;
            case 13:
              return Ai(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Yl(t, null, r, n)) : ki(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xi(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 7:
              return ki(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ki(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (i = a.value),
                  Ca(vl, r._currentValue),
                  (r._currentValue = i),
                  null !== o)
                )
                  if (ir(o.value, i)) {
                    if (o.children === a.children && !za.current) {
                      t = Wi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var u = o.dependencies;
                      if (null !== u) {
                        i = o.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === o.tag) {
                              (s = jl(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (s.next = s)
                                  : ((s.next = d.next), (d.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (o.lanes |= n),
                              null !== (s = o.alternate) && (s.lanes |= n),
                              Sl(o.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === o.tag)
                        i = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (i = o.return)) throw Error(l(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          Sl(i, n, t),
                          (i = o.sibling);
                      } else i = o.child;
                      if (null !== i) i.return = o;
                      else
                        for (i = o; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (o = i.sibling)) {
                            (o.return = i.return), (i = o);
                            break;
                          }
                          i = i.return;
                        }
                      o = i;
                    }
                ki(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                _l(t, n),
                (r = r((a = El(a)))),
                (t.flags |= 1),
                ki(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = gl((r = t.type), t.pendingProps)),
                Si(e, t, r, (a = gl(r.type, a)), n)
              );
            case 15:
              return _i(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : gl(r, a)),
                Bi(e, t),
                (t.tag = 1),
                Ia(r) ? ((e = !0), Ra(t)) : (e = !1),
                _l(t, n),
                Ql(t, r, a),
                Wl(t, r, a, n),
                zi(null, t, r, !0, e, n)
              );
            case 19:
              return Qi(e, t, n);
            case 22:
              return Ei(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Zs =
          "function" == typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ks(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          this._internalRoot = e;
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Gs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Js() {}
        function ec(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var o = l;
            if ("function" == typeof a) {
              var i = a;
              a = function () {
                var e = Ws(o);
                i.call(e);
              };
            }
            Bs(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" == typeof r) {
                  var l = r;
                  r = function () {
                    var e = Ws(o);
                    l.call(e);
                  };
                }
                var o = Qs(t, r, e, 0, null, !1, 0, "", Js);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  $r(8 === e.nodeType ? e.parentNode : e),
                  ds(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" == typeof r) {
                var i = r;
                r = function () {
                  var e = Ws(u);
                  i.call(e);
                };
              }
              var u = Vs(e, 0, !1, null, 0, !1, 0, "", Js);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                $r(8 === e.nodeType ? e.parentNode : e),
                ds(function () {
                  Bs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Ws(o);
        }
        (Ys.prototype.render = Ks.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Bs(e, t, null, null);
          }),
          (Ys.prototype.unmount = Ks.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                ds(function () {
                  Bs(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ys.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = _t();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < jt.length && 0 !== t && t < jt[n].priority;
                n++
              );
              jt.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    as(t, Xe()),
                    0 == (6 & zu) && ((Qu = Xe() + 500), $a()));
                }
                break;
              case 13:
                ds(function () {
                  var t = zl(e, 1);
                  if (null !== t) {
                    var n = ts();
                    rs(t, e, 1, n);
                  }
                }),
                  qs(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = zl(e, 134217728);
              null !== t && rs(t, e, 134217728, ts()), qs(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = zl(e, t);
              null !== n && rs(n, e, t, ts()), qs(e, t);
            }
          }),
          (_t = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((G(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = ka(r);
                      if (!a) throw Error(l(90));
                      q(r), G(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ne = cs),
          (ze = ds);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, ka, Ce, Pe, cs],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (lt = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xs(t)) throw Error(l(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: x,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xs(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = Zs;
            return (
              null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Vs(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              $r(8 === e.nodeType ? e.parentNode : e),
              new Ks(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return null === (e = We(t)) ? null : e.stateNode;
          }),
          (t.flushSync = function (e) {
            return ds(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Gs(t)) throw Error(l(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xs(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              i = Zs;
            if (
              (null != n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Qs(t, null, e, 1, null != n ? n : null, a, 0, o, i)),
              (e[ha] = t.current),
              $r(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ys(t);
          }),
          (t.render = function (e, t, n) {
            if (!Gs(t)) throw Error(l(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Gs(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (ds(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Gs(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      745: (e, t, n) => {
        var r = n(935);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      935: (e, t, n) => {
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(448));
      },
      251: (e, t, n) => {
        var r = n(294),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            l = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !u.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: l,
            _owner: i.current,
          };
        }
        (t.Fragment = l), (t.jsx = s), (t.jsxs = s);
      },
      408: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator,
          h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, v.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          S = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            l = {},
            o = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              x.call(t, a) && !_.hasOwnProperty(a) && (l[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) l.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            l.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === l[a] && (l[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: S.current,
          };
        }
        function C(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function N(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function z(e, t, a, l, o) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = "" === l ? "." + N(u, 0) : l),
              k(o)
                ? ((a = ""),
                  null != e && (a = e.replace(P, "$&/") + "/"),
                  z(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (C(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (u && u.key === o.key)
                          ? ""
                          : ("" + o.key).replace(P, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((u = 0), (l = "" === l ? "." : l + ":"), k(e)))
            for (var s = 0; s < e.length; s++) {
              var c = l + N((i = e[s]), s);
              u += z(i, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" == typeof c)
          )
            for (e = c.call(e), s = 0; !(i = e.next()).done; )
              u += z((i = i.value), t, a, (c = l + N(i, s++)), o);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            z(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function M(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var I = { current: null },
          j = { transition: null },
          O = {
            ReactCurrentDispatcher: I,
            ReactCurrentBatchConfig: j,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
          (t.cloneElement = function (e, t, r) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              l = e.key,
              o = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (i = S.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                x.call(t, s) &&
                  !_.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: o,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: M,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = j.transition;
            j.transition = {};
            try {
              e();
            } finally {
              j.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return I.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return I.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return I.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return I.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return I.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return I.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return I.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return I.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return I.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return I.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return I.current.useRef(e);
          }),
          (t.useState = function (e) {
            return I.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return I.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return I.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      294: (e, t, n) => {
        e.exports = n(408);
      },
      893: (e, t, n) => {
        e.exports = n(251);
      },
      53: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > l(u, n))
                s < a && 0 > l(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" == typeof performance &&
          "function" == typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = "function" == typeof setTimeout ? setTimeout : null,
          y = "function" == typeof clearTimeout ? clearTimeout : null,
          b = "undefined" != typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(s)) (m = !0), j(x);
            else {
              var t = r(c);
              null !== t && O(k, t.startTime - e);
            }
        }
        function x(e, n) {
          (m = !1), g && ((g = !1), y(C), (C = -1)), (h = !0);
          var l = p;
          try {
            for (
              w(n), f = r(s);
              null !== f && (!(f.expirationTime > n) || (e && !z()));

            ) {
              var o = f.callback;
              if ("function" == typeof o) {
                (f.callback = null), (p = f.priorityLevel);
                var i = o(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof i
                    ? (f.callback = i)
                    : f === r(s) && a(s),
                  w(n);
              } else a(s);
              f = r(s);
            }
            if (null !== f) var u = !0;
            else {
              var d = r(c);
              null !== d && O(k, d.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (f = null), (p = l), (h = !1);
          }
        }
        "undefined" != typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          _ = !1,
          E = null,
          C = -1,
          P = 5,
          N = -1;
        function z() {
          return !(t.unstable_now() - N < P);
        }
        function T() {
          if (null !== E) {
            var e = t.unstable_now();
            N = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? S() : ((_ = !1), (E = null));
            }
          } else _ = !1;
        }
        if ("function" == typeof b)
          S = function () {
            b(T);
          };
        else if ("undefined" != typeof MessageChannel) {
          var M = new MessageChannel(),
            I = M.port2;
          (M.port1.onmessage = T),
            (S = function () {
              I.postMessage(null);
            });
        } else
          S = function () {
            v(T, 0);
          };
        function j(e) {
          (E = e), _ || ((_ = !0), S());
        }
        function O(e, n) {
          C = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), j(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var o = t.unstable_now();
            switch (
              ((l =
                "object" == typeof l &&
                null !== l &&
                "number" == typeof (l = l.delay) &&
                0 < l
                  ? o + l
                  : o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (i = l + i),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (g ? (y(C), (C = -1)) : (g = !0), O(k, l - o)))
                : ((e.sortIndex = i), n(s, e), m || h || ((m = !0), j(x))),
              e
            );
          }),
          (t.unstable_shouldYield = z),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      840: (e, t, n) => {
        e.exports = n(53);
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var l = {}, o = [], i = 0; i < e.length; i++) {
            var u = e[i],
              s = r.base ? u[0] + r.base : u[0],
              c = l[s] || 0,
              d = "".concat(s, " ").concat(c);
            l[s] = c + 1;
            var f = n(d),
              p = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(p);
            else {
              var h = a(p, r);
              (r.byIndex = i),
                t.splice(i, 0, { identifier: d, updater: h, references: 1 });
            }
            o.push(d);
          }
          return o;
        }
        function a(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var l = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var o = 0; o < l.length; o++) {
              var i = n(l[o]);
              t[i].references--;
            }
            for (var u = r(e, a), s = 0; s < l.length; s++) {
              var c = n(l[s]);
              0 === t[c].references && (t[c].updater(), t.splice(c, 1));
            }
            l = u;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  a && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var l = n.sourceMap;
                l &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(l)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    r = {};
  function a(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var l = (r[e] = { id: e, exports: {} });
    return n[e](l, l.exports, a), l.exports;
  }
  (a.m = n),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) &&
          !a.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.f = {}),
    (a.e = (e) =>
      Promise.all(Object.keys(a.f).reduce((t, n) => (a.f[n](e, t), t), []))),
    (a.u = (e) => e + ".bundle.js"),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = "ivanchik-portfolio:"),
    (a.l = (n, r, l, o) => {
      if (e[n]) e[n].push(r);
      else {
        var i, u;
        if (void 0 !== l)
          for (
            var s = document.getElementsByTagName("script"), c = 0;
            c < s.length;
            c++
          ) {
            var d = s[c];
            if (
              d.getAttribute("src") == n ||
              d.getAttribute("data-webpack") == t + l
            ) {
              i = d;
              break;
            }
          }
        i ||
          ((u = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          a.nc && i.setAttribute("nonce", a.nc),
          i.setAttribute("data-webpack", t + l),
          (i.src = n)),
          (e[n] = [r]);
        var f = (t, r) => {
            (i.onerror = i.onload = null), clearTimeout(p);
            var a = e[n];
            if (
              (delete e[n],
              i.parentNode && i.parentNode.removeChild(i),
              a && a.forEach((e) => e(r)),
              t)
            )
              return t(r);
          },
          p = setTimeout(
            f.bind(null, void 0, { type: "timeout", target: i }),
            12e4
          );
        (i.onerror = f.bind(null, i.onerror)),
          (i.onload = f.bind(null, i.onload)),
          u && document.head.appendChild(i);
      }
    }),
    (a.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      a.g.importScripts && (e = a.g.location + "");
      var t = a.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length) for (var r = n.length - 1; r > -1 && !e; ) e = n[r--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (a.p = e);
    })(),
    (() => {
      var e = { 179: 0 };
      a.f.j = (t, n) => {
        var r = a.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var l = new Promise((n, a) => (r = e[t] = [n, a]));
            n.push((r[2] = l));
            var o = a.p + a.u(t),
              i = new Error();
            a.l(
              o,
              (n) => {
                if (a.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var l = n && ("load" === n.type ? "missing" : n.type),
                    o = n && n.target && n.target.src;
                  (i.message =
                    "Loading chunk " + t + " failed.\n(" + l + ": " + o + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = l),
                    (i.request = o),
                    r[1](i);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, n) => {
          var r,
            l,
            o = n[0],
            i = n[1],
            u = n[2],
            s = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (r in i) a.o(i, r) && (a.m[r] = i[r]);
            u && u(a);
          }
          for (t && t(n); s < o.length; s++)
            (l = o[s]), a.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
        },
        n = (self.webpackChunkivanchik_portfolio =
          self.webpackChunkivanchik_portfolio || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (a.nc = void 0),
    (() => {
      var e = a(294),
        t = a(745),
        n = a(379),
        r = a.n(n),
        l = a(795),
        o = a.n(l),
        i = a(569),
        u = a.n(i),
        s = a(565),
        c = a.n(s),
        d = a(216),
        f = a.n(d),
        p = a(589),
        h = a.n(p),
        m = a(424),
        g = {};
      (g.styleTagTransform = h()),
        (g.setAttributes = c()),
        (g.insert = u().bind(null, "head")),
        (g.domAPI = o()),
        (g.insertStyleElement = f()),
        r()(m.Z, g),
        m.Z && m.Z.locals && m.Z.locals;
      var v = a(87),
        y = {};
      (y.styleTagTransform = h()),
        (y.setAttributes = c()),
        (y.insert = u().bind(null, "head")),
        (y.domAPI = o()),
        (y.insertStyleElement = f()),
        r()(v.Z, y),
        v.Z && v.Z.locals && v.Z.locals;
      var b = a(370),
        w = {};
      (w.styleTagTransform = h()),
        (w.setAttributes = c()),
        (w.insert = u().bind(null, "head")),
        (w.domAPI = o()),
        (w.insertStyleElement = f()),
        r()(b.Z, w),
        b.Z && b.Z.locals && b.Z.locals;
      const k = a.p + "images/chat-avatar.jpg";
      var x = a(893);
      const S = () =>
        (0, x.jsx)("div", {
          className: "chat",
          id: "chat",
          children: (0, x.jsxs)("div", {
            className: "message-list",
            children: [
              (0, x.jsxs)("div", {
                className: "message",
                children: [
                  (0, x.jsx)("div", {
                    className: "logo",
                    children: (0, x.jsx)("img", { src: k, alt: "" }),
                  }),
                  (0, x.jsxs)("div", {
                    className: "text",
                    children: [
                      (0, x.jsx)("h3", { children: "< Ivanchik />" }),
                      (0, x.jsx)("p", {
                        children:
                          "I`m 16 years old, I`ve been putting me soul into a world of web-development for two whole years now",
                      }),
                    ],
                  }),
                ],
              }),
              (0, x.jsxs)("div", {
                className: "message",
                children: [
                  (0, x.jsx)("div", {
                    className: "logo",
                    children: (0, x.jsx)("img", { src: k, alt: "" }),
                  }),
                  (0, x.jsxs)("div", {
                    className: "text",
                    children: [
                      (0, x.jsx)("h3", { children: "< Ivanchik />" }),
                      (0, x.jsx)("p", {
                        children:
                          "I spent the first year learning to code with my friend, ready to explore the world of code further! 💻🚀",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      var _ = a(221),
        E = {};
      (E.styleTagTransform = h()),
        (E.setAttributes = c()),
        (E.insert = u().bind(null, "head")),
        (E.domAPI = o()),
        (E.insertStyleElement = f()),
        r()(_.Z, E),
        _.Z && _.Z.locals && _.Z.locals;
      const C = () =>
        (0, x.jsx)("div", {
          className: "hero",
          children: (0, x.jsxs)("div", {
            className: "columns",
            children: [
              (0, x.jsxs)("div", {
                className: "rows",
                children: [
                  (0, x.jsx)("div", {
                    className: "frontend-developer",
                    children: (0, x.jsx)("p", {
                      children: "Frontend Developer",
                    }),
                  }),
                  (0, x.jsx)("div", {
                    className: "unleash-imagination-in-code",
                    children: (0, x.jsx)("p", {
                      children: "Unleash Imagination in Code",
                    }),
                  }),
                  (0, x.jsx)("button", {
                    className: "contact-me",
                    children: "Contact Me",
                  }),
                ],
              }),
              (0, x.jsxs)("div", {
                className: "grid",
                children: [
                  (0, x.jsx)("div", { className: "grid-item" }),
                  (0, x.jsx)("div", { className: "grid-item" }),
                  (0, x.jsx)("div", { className: "grid-item" }),
                  (0, x.jsx)("div", { className: "grid-item" }),
                  (0, x.jsx)("div", { className: "grid-item" }),
                  (0, x.jsx)("div", { className: "grid-item" }),
                  (0, x.jsx)("div", { className: "grid-item" }),
                  (0, x.jsx)("div", { className: "grid-item" }),
                ],
              }),
            ],
          }),
        });
      var P = a(640),
        N = {};
      (N.styleTagTransform = h()),
        (N.setAttributes = c()),
        (N.insert = u().bind(null, "head")),
        (N.domAPI = o()),
        (N.insertStyleElement = f()),
        r()(P.Z, N),
        P.Z && P.Z.locals && P.Z.locals;
      const z = () => {
        const [t, n] = (0, e.useState)(!1);
        return (0, x.jsxs)("div", {
          className: "navbar ".concat(t ? "open" : ""),
          children: [
            (0, x.jsxs)("div", {
              className: "navbar-top",
              children: [
                (0, x.jsxs)("div", {
                  className: t ? "menu-icon active" : "menu-icon",
                  onClick: () => {
                    n(!t);
                  },
                  children: [
                    (0, x.jsx)("div", { className: "bar" }),
                    (0, x.jsx)("div", { className: "bar" }),
                    (0, x.jsx)("div", { className: "bar" }),
                  ],
                }),
                (0, x.jsx)("div", {
                  className: "navbar-right",
                  children: (0, x.jsxs)("div", {
                    className: "name",
                    children: [
                      (0, x.jsx)("span", { children: "< " }),
                      (0, x.jsx)("span", { children: "Ivanchik" }),
                      (0, x.jsx)("span", { children: " />" }),
                    ],
                  }),
                }),
              ],
            }),
            (0, x.jsx)("div", {
              className: "navbar-left",
              children: (0, x.jsxs)("div", {
                className: "navbar-left-items",
                children: [
                  (0, x.jsx)("div", {
                    className: "nav-item",
                    children: (0, x.jsx)("a", {
                      href: "#chat",
                      children: "About me",
                    }),
                  }),
                  (0, x.jsx)("div", {
                    className: "nav-item",
                    children: (0, x.jsx)("a", {
                      href: "#footer",
                      children: "Contact",
                    }),
                  }),
                  (0, x.jsx)("div", {
                    className: "nav-item",
                    children: (0, x.jsx)("a", {
                      href: "#projects",
                      children: "Projects",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var T = a(100),
        M = {};
      (M.styleTagTransform = h()),
        (M.setAttributes = c()),
        (M.insert = u().bind(null, "head")),
        (M.domAPI = o()),
        (M.insertStyleElement = f()),
        r()(T.Z, M),
        T.Z && T.Z.locals && T.Z.locals;
      const I = a.p + "images/standswiki.png",
        j = a.p + "images/gift-site.png";
      var O = Object.defineProperty,
        L = {};
      ((e, t) => {
        for (var n in t) O(e, n, { get: t[n], enumerable: !0 });
      })(L, {
        assign: () => he,
        colors: () => de,
        createStringInterpolator: () => ie,
        skipAnimation: () => fe,
        to: () => ue,
        willAdvance: () => pe,
      });
      var R = G(),
        F = (e) => Z(e, R),
        A = G();
      F.write = (e) => Z(e, A);
      var D = G();
      F.onStart = (e) => Z(e, D);
      var U = G();
      F.onFrame = (e) => Z(e, U);
      var V = G();
      F.onFinish = (e) => Z(e, V);
      var $ = [];
      F.setTimeout = (e, t) => {
        const n = F.now() + t,
          r = () => {
            const e = $.findIndex((e) => e.cancel == r);
            ~e && $.splice(e, 1), (H -= ~e ? 1 : 0);
          },
          a = { time: n, handler: e, cancel: r };
        return $.splice(Q(n), 0, a), (H += 1), K(), a;
      };
      var Q = (e) => ~(~$.findIndex((t) => t.time > e) || ~$.length);
      (F.cancel = (e) => {
        D.delete(e), U.delete(e), V.delete(e), R.delete(e), A.delete(e);
      }),
        (F.sync = (e) => {
          (q = !0), F.batchedUpdates(e), (q = !1);
        }),
        (F.throttle = (e) => {
          let t;
          function n() {
            try {
              e(...t);
            } finally {
              t = null;
            }
          }
          function r(...e) {
            (t = e), F.onStart(n);
          }
          return (
            (r.handler = e),
            (r.cancel = () => {
              D.delete(n), (t = null);
            }),
            r
          );
        });
      var B =
        "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      (F.use = (e) => (B = e)),
        (F.now =
          "undefined" != typeof performance
            ? () => performance.now()
            : Date.now),
        (F.batchedUpdates = (e) => e()),
        (F.catch = console.error),
        (F.frameLoop = "always"),
        (F.advance = () => {
          "demand" !== F.frameLoop
            ? console.warn(
                "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
              )
            : X();
        });
      var W = -1,
        H = 0,
        q = !1;
      function Z(e, t) {
        q ? (t.delete(e), e(0)) : (t.add(e), K());
      }
      function K() {
        W < 0 && ((W = 0), "demand" !== F.frameLoop && B(Y));
      }
      function Y() {
        ~W && (B(Y), F.batchedUpdates(X));
      }
      function X() {
        const e = W;
        W = F.now();
        const t = Q(W);
        t && (J($.splice(0, t), (e) => e.handler()), (H -= t)),
          H
            ? (D.flush(),
              R.flush(e ? Math.min(64, W - e) : 16.667),
              U.flush(),
              A.flush(),
              V.flush())
            : (W = -1);
      }
      function G() {
        let e = new Set(),
          t = e;
        return {
          add(n) {
            (H += t != e || e.has(n) ? 0 : 1), e.add(n);
          },
          delete: (n) => ((H -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
          flush(n) {
            t.size &&
              ((e = new Set()),
              (H -= t.size),
              J(t, (t) => t(n) && e.add(t)),
              (H += e.size),
              (t = e));
          },
        };
      }
      function J(e, t) {
        e.forEach((e) => {
          try {
            t(e);
          } catch (e) {
            F.catch(e);
          }
        });
      }
      function ee() {}
      var te = {
        arr: Array.isArray,
        obj: (e) => !!e && "Object" === e.constructor.name,
        fun: (e) => "function" == typeof e,
        str: (e) => "string" == typeof e,
        num: (e) => "number" == typeof e,
        und: (e) => void 0 === e,
      };
      function ne(e, t) {
        if (te.arr(e)) {
          if (!te.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
          return !0;
        }
        return e === t;
      }
      var re = (e, t) => e.forEach(t);
      function ae(e, t, n) {
        if (te.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
      }
      var le = (e) => (te.und(e) ? [] : te.arr(e) ? e : [e]);
      function oe(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), re(n, t);
        }
      }
      var ie,
        ue,
        se = (e, ...t) => oe(e, (e) => e(...t)),
        ce = () =>
          "undefined" == typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        de = null,
        fe = !1,
        pe = ee,
        he = (e) => {
          e.to && (ue = e.to),
            e.now && (F.now = e.now),
            void 0 !== e.colors && (de = e.colors),
            null != e.skipAnimation && (fe = e.skipAnimation),
            e.createStringInterpolator && (ie = e.createStringInterpolator),
            e.requestAnimationFrame && F.use(e.requestAnimationFrame),
            e.batchedUpdates && (F.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (pe = e.willAdvance),
            e.frameLoop && (F.frameLoop = e.frameLoop);
        },
        me = new Set(),
        ge = [],
        ve = [],
        ye = 0,
        be = {
          get idle() {
            return !me.size && !ge.length;
          },
          start(e) {
            ye > e.priority ? (me.add(e), F.onStart(we)) : (ke(e), F(Se));
          },
          advance: Se,
          sort(e) {
            if (ye) F.onFrame(() => be.sort(e));
            else {
              const t = ge.indexOf(e);
              ~t && (ge.splice(t, 1), xe(e));
            }
          },
          clear() {
            (ge = []), me.clear();
          },
        };
      function we() {
        me.forEach(ke), me.clear(), F(Se);
      }
      function ke(e) {
        ge.includes(e) || xe(e);
      }
      function xe(e) {
        ge.splice(
          (function (t, n) {
            const r = t.findIndex((t) => t.priority > e.priority);
            return r < 0 ? t.length : r;
          })(ge),
          0,
          e
        );
      }
      function Se(e) {
        const t = ve;
        for (let n = 0; n < ge.length; n++) {
          const r = ge[n];
          (ye = r.priority),
            r.idle || (pe(r), r.advance(e), r.idle || t.push(r));
        }
        return (ye = 0), ((ve = ge).length = 0), (ge = t).length > 0;
      }
      var _e = "[-+]?\\d*\\.?\\d+",
        Ee = _e + "%";
      function Ce(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
      }
      var Pe = new RegExp("rgb" + Ce(_e, _e, _e)),
        Ne = new RegExp("rgba" + Ce(_e, _e, _e, _e)),
        ze = new RegExp("hsl" + Ce(_e, Ee, Ee)),
        Te = new RegExp("hsla" + Ce(_e, Ee, Ee, _e)),
        Me = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ie =
          /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        je = /^#([0-9a-fA-F]{6})$/,
        Oe = /^#([0-9a-fA-F]{8})$/;
      function Le(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
        );
      }
      function Re(e, t, n) {
        const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
          a = 2 * n - r,
          l = Le(a, r, e + 1 / 3),
          o = Le(a, r, e),
          i = Le(a, r, e - 1 / 3);
        return (
          (Math.round(255 * l) << 24) |
          (Math.round(255 * o) << 16) |
          (Math.round(255 * i) << 8)
        );
      }
      function Fe(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
      }
      function Ae(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
      }
      function De(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
      }
      function Ue(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
      }
      function Ve(e) {
        let t = (function (e) {
          let t;
          return "number" == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
              ? e
              : null
            : (t = je.exec(e))
            ? parseInt(t[1] + "ff", 16) >>> 0
            : de && void 0 !== de[e]
            ? de[e]
            : (t = Pe.exec(e))
            ? ((Fe(t[1]) << 24) | (Fe(t[2]) << 16) | (Fe(t[3]) << 8) | 255) >>>
              0
            : (t = Ne.exec(e))
            ? ((Fe(t[1]) << 24) |
                (Fe(t[2]) << 16) |
                (Fe(t[3]) << 8) |
                De(t[4])) >>>
              0
            : (t = Me.exec(e))
            ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
            : (t = Oe.exec(e))
            ? parseInt(t[1], 16) >>> 0
            : (t = Ie.exec(e))
            ? parseInt(
                t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4],
                16
              ) >>> 0
            : (t = ze.exec(e))
            ? (255 | Re(Ae(t[1]), Ue(t[2]), Ue(t[3]))) >>> 0
            : (t = Te.exec(e))
            ? (Re(Ae(t[1]), Ue(t[2]), Ue(t[3])) | De(t[4])) >>> 0
            : null;
        })(e);
        return null === t
          ? e
          : ((t = t || 0),
            `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${
              (65280 & t) >>> 8
            }, ${(255 & t) / 255})`);
      }
      var $e = (e, t, n) => {
          if (te.fun(e)) return e;
          if (te.arr(e)) return $e({ range: e, output: t, extrapolate: n });
          if (te.str(e.output[0])) return ie(e);
          const r = e,
            a = r.output,
            l = r.range || [0, 1],
            o = r.extrapolateLeft || r.extrapolate || "extend",
            i = r.extrapolateRight || r.extrapolate || "extend",
            u = r.easing || ((e) => e);
          return (e) => {
            const t = (function (e, t) {
              for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1;
            })(e, l);
            return (function (e, t, n, r, a, l, o, i, u) {
              let s = u ? u(e) : e;
              if (s < t) {
                if ("identity" === o) return s;
                "clamp" === o && (s = t);
              }
              if (s > n) {
                if ("identity" === i) return s;
                "clamp" === i && (s = n);
              }
              return r === a
                ? r
                : t === n
                ? e <= t
                  ? r
                  : a
                : (t === -1 / 0
                    ? (s = -s)
                    : n === 1 / 0
                    ? (s -= t)
                    : (s = (s - t) / (n - t)),
                  (s = l(s)),
                  r === -1 / 0
                    ? (s = -s)
                    : a === 1 / 0
                    ? (s += r)
                    : (s = s * (a - r) + r),
                  s);
            })(e, l[t], l[t + 1], a[t], a[t + 1], u, o, i, r.map);
          };
        },
        Qe = 1.70158,
        Be = 1.525 * Qe,
        We = Qe + 1,
        He = (2 * Math.PI) / 3,
        qe = (2 * Math.PI) / 4.5,
        Ze = (e) => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n
            ? t * e * e
            : e < 2 / n
            ? t * (e -= 1.5 / n) * e + 0.75
            : e < 2.5 / n
            ? t * (e -= 2.25 / n) * e + 0.9375
            : t * (e -= 2.625 / n) * e + 0.984375;
        },
        Ke = {
          linear: (e) => e,
          easeInQuad: (e) => e * e,
          easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
          easeInOutQuad: (e) =>
            e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
          easeInCubic: (e) => e * e * e,
          easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
          easeInOutCubic: (e) =>
            e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
          easeInQuart: (e) => e * e * e * e,
          easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
          easeInOutQuart: (e) =>
            e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
          easeInQuint: (e) => e * e * e * e * e,
          easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
          easeInOutQuint: (e) =>
            e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
          easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
          easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
          easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
          easeInExpo: (e) => (0 === e ? 0 : Math.pow(2, 10 * e - 10)),
          easeOutExpo: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
          easeInOutExpo: (e) =>
            0 === e
              ? 0
              : 1 === e
              ? 1
              : e < 0.5
              ? Math.pow(2, 20 * e - 10) / 2
              : (2 - Math.pow(2, -20 * e + 10)) / 2,
          easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
          easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
          easeInOutCirc: (e) =>
            e < 0.5
              ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
              : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
          easeInBack: (e) => We * e * e * e - Qe * e * e,
          easeOutBack: (e) =>
            1 + We * Math.pow(e - 1, 3) + Qe * Math.pow(e - 1, 2),
          easeInOutBack: (e) =>
            e < 0.5
              ? (Math.pow(2 * e, 2) * (7.189819 * e - Be)) / 2
              : (Math.pow(2 * e - 2, 2) * ((Be + 1) * (2 * e - 2) + Be) + 2) /
                2,
          easeInElastic: (e) =>
            0 === e
              ? 0
              : 1 === e
              ? 1
              : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * He),
          easeOutElastic: (e) =>
            0 === e
              ? 0
              : 1 === e
              ? 1
              : Math.pow(2, -10 * e) * Math.sin((10 * e - 0.75) * He) + 1,
          easeInOutElastic: (e) =>
            0 === e
              ? 0
              : 1 === e
              ? 1
              : e < 0.5
              ? (-Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * qe)) /
                2
              : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * qe)) /
                  2 +
                1,
          easeInBounce: (e) => 1 - Ze(1 - e),
          easeOutBounce: Ze,
          easeInOutBounce: (e) =>
            e < 0.5 ? (1 - Ze(1 - 2 * e)) / 2 : (1 + Ze(2 * e - 1)) / 2,
          steps:
            (e, t = "end") =>
            (n) => {
              const r =
                (n = "end" === t ? Math.min(n, 0.999) : Math.max(n, 0.001)) * e;
              return (
                0,
                1,
                (a = ("end" === t ? Math.floor(r) : Math.ceil(r)) / e),
                Math.min(Math.max(a, 0), 1)
              );
              var a;
            },
        },
        Ye = Symbol.for("FluidValue.get"),
        Xe = Symbol.for("FluidValue.observers"),
        Ge = (e) => Boolean(e && e[Ye]),
        Je = (e) => (e && e[Ye] ? e[Ye]() : e),
        et = (e) => e[Xe] || null;
      function tt(e, t) {
        const n = e[Xe];
        n &&
          n.forEach((e) => {
            !(function (e, t) {
              e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
          });
      }
      var nt = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            rt(this, e);
          }
        },
        rt = (e, t) => it(e, Ye, t);
      function at(e, t) {
        if (e[Ye]) {
          let n = e[Xe];
          n || it(e, Xe, (n = new Set())),
            n.has(t) ||
              (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
        }
        return t;
      }
      function lt(e, t) {
        const n = e[Xe];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : (e[Xe] = null),
            e.observerRemoved && e.observerRemoved(r, t);
        }
      }
      var ot,
        it = (e, t, n) =>
          Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0,
          }),
        ut = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        st =
          /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        ct = new RegExp(`(${ut.source})(%|[a-z]+)`, "i"),
        dt = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        ft = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        pt = (e) => {
          const [t, n] = ht(e);
          if (!t || ce()) return e;
          const r = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return (
              window
                .getComputedStyle(document.documentElement)
                .getPropertyValue(n) || e
            );
          }
          return n && ft.test(n) ? pt(n) : n || e;
        },
        ht = (e) => {
          const t = ft.exec(e);
          if (!t) return [,];
          const [, n, r] = t;
          return [n, r];
        },
        mt = (e, t, n, r, a) =>
          `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${a})`,
        gt = (e) => {
          ot ||
            (ot = de
              ? new RegExp(`(${Object.keys(de).join("|")})(?!\\w)`, "g")
              : /^\b$/);
          const t = e.output.map((e) =>
              Je(e).replace(ft, pt).replace(st, Ve).replace(ot, Ve)
            ),
            n = t.map((e) => e.match(ut).map(Number)),
            r = n[0]
              .map((e, t) =>
                n.map((e) => {
                  if (!(t in e))
                    throw Error(
                      'The arity of each "output" value must be equal'
                    );
                  return e[t];
                })
              )
              .map((t) => $e({ ...e, output: t }));
          return (e) => {
            const n =
              !ct.test(t[0]) && t.find((e) => ct.test(e))?.replace(ut, "");
            let a = 0;
            return t[0]
              .replace(ut, () => `${r[a++](e)}${n || ""}`)
              .replace(dt, mt);
          };
        },
        vt = "react-spring: ",
        yt = (e) => {
          const t = e;
          let n = !1;
          if ("function" != typeof t)
            throw new TypeError(`${vt}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), (n = !0));
          };
        },
        bt = yt(console.warn),
        wt = yt(console.warn);
      function kt(e) {
        return (
          te.str(e) &&
          ("#" == e[0] ||
            /\d/.test(e) ||
            (!ce() && ft.test(e)) ||
            e in (de || {}))
        );
      }
      var xt = ce() ? e.useEffect : e.useLayoutEffect,
        St = () => {
          const t = (0, e.useRef)(!1);
          return (
            xt(
              () => (
                (t.current = !0),
                () => {
                  t.current = !1;
                }
              ),
              []
            ),
            t
          );
        };
      function _t() {
        const t = (0, e.useState)()[1],
          n = St();
        return () => {
          n.current && t(Math.random());
        };
      }
      var Et = (t) => (0, e.useEffect)(t, Ct),
        Ct = [];
      function Pt(t) {
        const n = (0, e.useRef)();
        return (
          (0, e.useEffect)(() => {
            n.current = t;
          }),
          n.current
        );
      }
      var Nt = Symbol.for("Animated:node"),
        zt = (e) => e && e[Nt],
        Tt = (e, t) => {
          return (
            (n = e),
            (r = Nt),
            (a = t),
            Object.defineProperty(n, r, {
              value: a,
              writable: !0,
              configurable: !0,
            })
          );
          var n, r, a;
        },
        Mt = (e) => e && e[Nt] && e[Nt].getPayload(),
        It = class {
          constructor() {
            Tt(this, this);
          }
          getPayload() {
            return this.payload || [];
          }
        },
        jt = class extends It {
          constructor(e) {
            super(),
              (this._value = e),
              (this.done = !0),
              (this.durationProgress = 0),
              te.num(this._value) && (this.lastPosition = this._value);
          }
          static create(e) {
            return new jt(e);
          }
          getPayload() {
            return [this];
          }
          getValue() {
            return this._value;
          }
          setValue(e, t) {
            return (
              te.num(e) &&
                ((this.lastPosition = e),
                t &&
                  ((e = Math.round(e / t) * t),
                  this.done && (this.lastPosition = e))),
              this._value !== e && ((this._value = e), !0)
            );
          }
          reset() {
            const { done: e } = this;
            (this.done = !1),
              te.num(this._value) &&
                ((this.elapsedTime = 0),
                (this.durationProgress = 0),
                (this.lastPosition = this._value),
                e && (this.lastVelocity = null),
                (this.v0 = null));
          }
        },
        Ot = class extends jt {
          constructor(e) {
            super(0),
              (this._string = null),
              (this._toString = $e({ output: [e, e] }));
          }
          static create(e) {
            return new Ot(e);
          }
          getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
          }
          setValue(e) {
            if (te.str(e)) {
              if (e == this._string) return !1;
              (this._string = e), (this._value = 1);
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null;
            }
            return !0;
          }
          reset(e) {
            e && (this._toString = $e({ output: [this.getValue(), e] })),
              (this._value = 0),
              super.reset();
          }
        },
        Lt = { dependencies: null },
        Rt = class extends It {
          constructor(e) {
            super(), (this.source = e), this.setValue(e);
          }
          getValue(e) {
            const t = {};
            return (
              ae(this.source, (n, r) => {
                var a;
                (a = n) && a[Nt] === a
                  ? (t[r] = n.getValue(e))
                  : Ge(n)
                  ? (t[r] = Je(n))
                  : e || (t[r] = n);
              }),
              t
            );
          }
          setValue(e) {
            (this.source = e), (this.payload = this._makePayload(e));
          }
          reset() {
            this.payload && re(this.payload, (e) => e.reset());
          }
          _makePayload(e) {
            if (e) {
              const t = new Set();
              return ae(e, this._addToPayload, t), Array.from(t);
            }
          }
          _addToPayload(e) {
            Lt.dependencies && Ge(e) && Lt.dependencies.add(e);
            const t = Mt(e);
            t && re(t, (e) => this.add(e));
          }
        },
        Ft = class extends Rt {
          constructor(e) {
            super(e);
          }
          static create(e) {
            return new Ft(e);
          }
          getValue() {
            return this.source.map((e) => e.getValue());
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
              ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
              : (super.setValue(e.map(At)), !0);
          }
        };
      function At(e) {
        return (kt(e) ? Ot : jt).create(e);
      }
      function Dt(e) {
        const t = zt(e);
        return t ? t.constructor : te.arr(e) ? Ft : kt(e) ? Ot : jt;
      }
      var Ut = (t, n) => {
          const r = !te.fun(t) || (t.prototype && t.prototype.isReactComponent);
          return (0, e.forwardRef)((a, l) => {
            const o = (0, e.useRef)(null),
              i =
                r &&
                (0, e.useCallback)(
                  (e) => {
                    o.current = (function (e, t) {
                      return e && (te.fun(e) ? e(t) : (e.current = t)), t;
                    })(l, e);
                  },
                  [l]
                ),
              [u, s] = (function (e, t) {
                const n = new Set();
                return (
                  (Lt.dependencies = n),
                  e.style &&
                    (e = { ...e, style: t.createAnimatedStyle(e.style) }),
                  (e = new Rt(e)),
                  (Lt.dependencies = null),
                  [e, n]
                );
              })(a, n),
              c = _t(),
              d = () => {
                const e = o.current;
                (r && !e) ||
                  (!1 === (!!e && n.applyAnimatedValues(e, u.getValue(!0))) &&
                    c());
              },
              f = new Vt(d, s),
              p = (0, e.useRef)();
            xt(
              () => (
                (p.current = f),
                re(s, (e) => at(e, f)),
                () => {
                  p.current &&
                    (re(p.current.deps, (e) => lt(e, p.current)),
                    F.cancel(p.current.update));
                }
              )
            ),
              (0, e.useEffect)(d, []),
              Et(() => () => {
                const e = p.current;
                re(e.deps, (t) => lt(t, e));
              });
            const h = n.getComponentProps(u.getValue());
            return e.createElement(t, { ...h, ref: i });
          });
        },
        Vt = class {
          constructor(e, t) {
            (this.update = e), (this.deps = t);
          }
          eventObserved(e) {
            "change" == e.type && F.write(this.update);
          }
        },
        $t = Symbol.for("AnimatedComponent"),
        Qt = (e) =>
          te.str(e)
            ? e
            : e && te.str(e.displayName)
            ? e.displayName
            : (te.fun(e) && e.name) || null;
      function Bt(e, ...t) {
        return te.fun(e) ? e(...t) : e;
      }
      var Wt = (e, t) =>
          !0 === e || !!(t && e && (te.fun(e) ? e(t) : le(e).includes(t))),
        Ht = (e, t) => (te.obj(e) ? t && e[t] : e),
        qt = (e, t) =>
          !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Zt = (e) => e,
        Kt = (e, t = Zt) => {
          let n = Yt;
          e.default &&
            !0 !== e.default &&
            ((e = e.default), (n = Object.keys(e)));
          const r = {};
          for (const a of n) {
            const n = t(e[a], a);
            te.und(n) || (r[a] = n);
          }
          return r;
        },
        Yt = [
          "config",
          "onProps",
          "onStart",
          "onChange",
          "onPause",
          "onResume",
          "onRest",
        ],
        Xt = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1,
        };
      function Gt(e) {
        const t = (function (e) {
          const t = {};
          let n = 0;
          if (
            (ae(e, (e, r) => {
              Xt[r] || ((t[r] = e), n++);
            }),
            n)
          )
            return t;
        })(e);
        if (t) {
          const n = { to: t };
          return ae(e, (e, r) => r in t || (n[r] = e)), n;
        }
        return { ...e };
      }
      function Jt(e) {
        return (
          (e = Je(e)),
          te.arr(e)
            ? e.map(Jt)
            : kt(e)
            ? L.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
            : e
        );
      }
      function en(e) {
        return te.fun(e) || (te.arr(e) && te.obj(e[0]));
      }
      var tn = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: Ke.linear,
          clamp: !1,
        },
        nn = class {
          constructor() {
            (this.velocity = 0), Object.assign(this, tn);
          }
        };
      function rn(e, t) {
        if (te.und(t.decay)) {
          const n = !te.und(t.tension) || !te.und(t.friction);
          (!n && te.und(t.frequency) && te.und(t.damping) && te.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0);
        } else e.duration = void 0;
      }
      var an = [],
        ln = class {
          constructor() {
            (this.changed = !1),
              (this.values = an),
              (this.toValues = null),
              (this.fromValues = an),
              (this.config = new nn()),
              (this.immediate = !1);
          }
        };
      function on(
        e,
        { key: t, props: n, defaultProps: r, state: a, actions: l }
      ) {
        return new Promise((o, i) => {
          let u,
            s,
            c = Wt(n.cancel ?? r?.cancel, t);
          if (c) p();
          else {
            te.und(n.pause) || (a.paused = Wt(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = a.paused || Wt(e, t)),
              (u = Bt(n.delay || 0, t)),
              e ? (a.resumeQueue.add(f), l.pause()) : (l.resume(), f());
          }
          function d() {
            a.resumeQueue.add(f),
              a.timeouts.delete(s),
              s.cancel(),
              (u = s.time - F.now());
          }
          function f() {
            u > 0 && !L.skipAnimation
              ? ((a.delayed = !0),
                (s = F.setTimeout(p, u)),
                a.pauseQueue.add(d),
                a.timeouts.add(s))
              : p();
          }
          function p() {
            a.delayed && (a.delayed = !1),
              a.pauseQueue.delete(d),
              a.timeouts.delete(s),
              e <= (a.cancelId || 0) && (c = !0);
            try {
              l.start({ ...n, callId: e, cancel: c }, o);
            } catch (e) {
              i(e);
            }
          }
        });
      }
      var un = (e, t) =>
          1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
            ? dn(e.get())
            : t.every((e) => e.noop)
            ? sn(e.get())
            : cn(
                e.get(),
                t.every((e) => e.finished)
              ),
        sn = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        cn = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
        dn = (e) => ({ value: e, cancelled: !0, finished: !1 });
      function fn(e, t, n, r) {
        const { callId: a, parentId: l, onRest: o } = t,
          { asyncTo: i, promise: u } = n;
        return l || e !== i || t.reset
          ? (n.promise = (async () => {
              (n.asyncId = a), (n.asyncTo = e);
              const s = Kt(t, (e, t) => ("onRest" === t ? void 0 : e));
              let c, d;
              const f = new Promise((e, t) => ((c = e), (d = t))),
                p = (e) => {
                  const t =
                    (a <= (n.cancelId || 0) && dn(r)) ||
                    (a !== n.asyncId && cn(r, !1));
                  if (t) throw ((e.result = t), d(e), e);
                },
                h = (e, t) => {
                  const l = new hn(),
                    o = new mn();
                  return (async () => {
                    if (L.skipAnimation)
                      throw (pn(n), (o.result = cn(r, !1)), d(o), o);
                    p(l);
                    const i = te.obj(e) ? { ...e } : { ...t, to: e };
                    (i.parentId = a),
                      ae(s, (e, t) => {
                        te.und(i[t]) && (i[t] = e);
                      });
                    const u = await r.start(i);
                    return (
                      p(l),
                      n.paused &&
                        (await new Promise((e) => {
                          n.resumeQueue.add(e);
                        })),
                      u
                    );
                  })();
                };
              let m;
              if (L.skipAnimation) return pn(n), cn(r, !1);
              try {
                let t;
                (t = te.arr(e)
                  ? (async (e) => {
                      for (const t of e) await h(t);
                    })(e)
                  : Promise.resolve(e(h, r.stop.bind(r)))),
                  await Promise.all([t.then(c), f]),
                  (m = cn(r.get(), !0, !1));
              } catch (e) {
                if (e instanceof hn) m = e.result;
                else {
                  if (!(e instanceof mn)) throw e;
                  m = e.result;
                }
              } finally {
                a == n.asyncId &&
                  ((n.asyncId = l),
                  (n.asyncTo = l ? i : void 0),
                  (n.promise = l ? u : void 0));
              }
              return (
                te.fun(o) &&
                  F.batchedUpdates(() => {
                    o(m, r, r.item);
                  }),
                m
              );
            })())
          : u;
      }
      function pn(e, t) {
        oe(e.timeouts, (e) => e.cancel()),
          e.pauseQueue.clear(),
          e.resumeQueue.clear(),
          (e.asyncId = e.asyncTo = e.promise = void 0),
          t && (e.cancelId = t);
      }
      var hn = class extends Error {
          constructor() {
            super(
              "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
            );
          }
        },
        mn = class extends Error {
          constructor() {
            super("SkipAnimationSignal");
          }
        },
        gn = (e) => e instanceof yn,
        vn = 1,
        yn = class extends nt {
          constructor() {
            super(...arguments), (this.id = vn++), (this._priority = 0);
          }
          get priority() {
            return this._priority;
          }
          set priority(e) {
            this._priority != e &&
              ((this._priority = e), this._onPriorityChange(e));
          }
          get() {
            const e = zt(this);
            return e && e.getValue();
          }
          to(...e) {
            return L.to(this, e);
          }
          interpolate(...e) {
            return (
              bt(
                `${vt}The "interpolate" function is deprecated in v9 (use "to" instead)`
              ),
              L.to(this, e)
            );
          }
          toJSON() {
            return this.get();
          }
          observerAdded(e) {
            1 == e && this._attach();
          }
          observerRemoved(e) {
            0 == e && this._detach();
          }
          _attach() {}
          _detach() {}
          _onChange(e, t = !1) {
            tt(this, { type: "change", parent: this, value: e, idle: t });
          }
          _onPriorityChange(e) {
            this.idle || be.sort(this),
              tt(this, { type: "priority", parent: this, priority: e });
          }
        },
        bn = Symbol.for("SpringPhase"),
        wn = (e) => (1 & e[bn]) > 0,
        kn = (e) => (2 & e[bn]) > 0,
        xn = (e) => (4 & e[bn]) > 0,
        Sn = (e, t) => (t ? (e[bn] |= 3) : (e[bn] &= -3)),
        _n = (e, t) => (t ? (e[bn] |= 4) : (e[bn] &= -5)),
        En = class extends yn {
          constructor(e, t) {
            if (
              (super(),
              (this.animation = new ln()),
              (this.defaultProps = {}),
              (this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set(),
                resumeQueue: new Set(),
                timeouts: new Set(),
              }),
              (this._pendingCalls = new Set()),
              (this._lastCallId = 0),
              (this._lastToId = 0),
              (this._memoizedDuration = 0),
              !te.und(e) || !te.und(t))
            ) {
              const n = te.obj(e) ? { ...e } : { ...t, from: e };
              te.und(n.default) && (n.default = !0), this.start(n);
            }
          }
          get idle() {
            return !(kn(this) || this._state.asyncTo) || xn(this);
          }
          get goal() {
            return Je(this.animation.to);
          }
          get velocity() {
            const e = zt(this);
            return e instanceof jt
              ? e.lastVelocity || 0
              : e.getPayload().map((e) => e.lastVelocity || 0);
          }
          get hasAnimated() {
            return wn(this);
          }
          get isAnimating() {
            return kn(this);
          }
          get isPaused() {
            return xn(this);
          }
          get isDelayed() {
            return this._state.delayed;
          }
          advance(e) {
            let t = !0,
              n = !1;
            const r = this.animation;
            let { toValues: a } = r;
            const { config: l } = r,
              o = Mt(r.to);
            !o && Ge(r.to) && (a = le(Je(r.to))),
              r.values.forEach((i, u) => {
                if (i.done) return;
                const s =
                  i.constructor == Ot ? 1 : o ? o[u].lastPosition : a[u];
                let c = r.immediate,
                  d = s;
                if (!c) {
                  if (((d = i.lastPosition), l.tension <= 0))
                    return void (i.done = !0);
                  let t = (i.elapsedTime += e);
                  const n = r.fromValues[u],
                    a =
                      null != i.v0
                        ? i.v0
                        : (i.v0 = te.arr(l.velocity)
                            ? l.velocity[u]
                            : l.velocity);
                  let o;
                  const f =
                    l.precision ||
                    (n == s ? 0.005 : Math.min(1, 0.001 * Math.abs(s - n)));
                  if (te.und(l.duration))
                    if (l.decay) {
                      const e = !0 === l.decay ? 0.998 : l.decay,
                        r = Math.exp(-(1 - e) * t);
                      (d = n + (a / (1 - e)) * (1 - r)),
                        (c = Math.abs(i.lastPosition - d) <= f),
                        (o = a * r);
                    } else {
                      o = null == i.lastVelocity ? a : i.lastVelocity;
                      const t = l.restVelocity || f / 10,
                        r = l.clamp ? 0 : l.bounce,
                        u = !te.und(r),
                        p = n == s ? i.v0 > 0 : n < s;
                      let h,
                        m = !1;
                      const g = 1,
                        v = Math.ceil(e / g);
                      for (
                        let e = 0;
                        e < v &&
                        ((h = Math.abs(o) > t),
                        h || ((c = Math.abs(s - d) <= f), !c));
                        ++e
                      )
                        u &&
                          ((m = d == s || d > s == p),
                          m && ((o = -o * r), (d = s))),
                          (o +=
                            ((1e-6 * -l.tension * (d - s) +
                              0.001 * -l.friction * o) /
                              l.mass) *
                            g),
                          (d += o * g);
                    }
                  else {
                    let r = 1;
                    l.duration > 0 &&
                      (this._memoizedDuration !== l.duration &&
                        ((this._memoizedDuration = l.duration),
                        i.durationProgress > 0 &&
                          ((i.elapsedTime = l.duration * i.durationProgress),
                          (t = i.elapsedTime += e))),
                      (r = (l.progress || 0) + t / this._memoizedDuration),
                      (r = r > 1 ? 1 : r < 0 ? 0 : r),
                      (i.durationProgress = r)),
                      (d = n + l.easing(r) * (s - n)),
                      (o = (d - i.lastPosition) / e),
                      (c = 1 == r);
                  }
                  (i.lastVelocity = o),
                    Number.isNaN(d) &&
                      (console.warn("Got NaN while animating:", this),
                      (c = !0));
                }
                o && !o[u].done && (c = !1),
                  c ? (i.done = !0) : (t = !1),
                  i.setValue(d, l.round) && (n = !0);
              });
            const i = zt(this),
              u = i.getValue();
            if (t) {
              const e = Je(r.to);
              (u === e && !n) || l.decay
                ? n && l.decay && this._onChange(u)
                : (i.setValue(e), this._onChange(e)),
                this._stop();
            } else n && this._onChange(u);
          }
          set(e) {
            return (
              F.batchedUpdates(() => {
                this._stop(), this._focus(e), this._set(e);
              }),
              this
            );
          }
          pause() {
            this._update({ pause: !0 });
          }
          resume() {
            this._update({ pause: !1 });
          }
          finish() {
            if (kn(this)) {
              const { to: e, config: t } = this.animation;
              F.batchedUpdates(() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop();
              });
            }
            return this;
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this;
          }
          start(e, t) {
            let n;
            return (
              te.und(e)
                ? ((n = this.queue || []), (this.queue = []))
                : (n = [te.obj(e) ? e : { ...t, to: e }]),
              Promise.all(n.map((e) => this._update(e))).then((e) =>
                un(this, e)
              )
            );
          }
          stop(e) {
            const { to: t } = this.animation;
            return (
              this._focus(this.get()),
              pn(this._state, e && this._lastCallId),
              F.batchedUpdates(() => this._stop(t, e)),
              this
            );
          }
          reset() {
            this._update({ reset: !0 });
          }
          eventObserved(e) {
            "change" == e.type
              ? this._start()
              : "priority" == e.type && (this.priority = e.priority + 1);
          }
          _prepareNode(e) {
            const t = this.key || "";
            let { to: n, from: r } = e;
            (n = te.obj(n) ? n[t] : n),
              (null == n || en(n)) && (n = void 0),
              (r = te.obj(r) ? r[t] : r),
              null == r && (r = void 0);
            const a = { to: n, from: r };
            return (
              wn(this) ||
                (e.reverse && ([n, r] = [r, n]),
                (r = Je(r)),
                te.und(r) ? zt(this) || this._set(n) : this._set(r)),
              a
            );
          }
          _update({ ...e }, t) {
            const { key: n, defaultProps: r } = this;
            e.default &&
              Object.assign(
                r,
                Kt(e, (e, t) => (/^on/.test(t) ? Ht(e, n) : e))
              ),
              In(this, e, "onProps"),
              jn(this, "onProps", e, this);
            const a = this._prepareNode(e);
            if (Object.isFrozen(this))
              throw Error(
                "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
              );
            const l = this._state;
            return on(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: l,
              actions: {
                pause: () => {
                  xn(this) ||
                    (_n(this, !0),
                    se(l.pauseQueue),
                    jn(
                      this,
                      "onPause",
                      cn(this, Cn(this, this.animation.to)),
                      this
                    ));
                },
                resume: () => {
                  xn(this) &&
                    (_n(this, !1),
                    kn(this) && this._resume(),
                    se(l.resumeQueue),
                    jn(
                      this,
                      "onResume",
                      cn(this, Cn(this, this.animation.to)),
                      this
                    ));
                },
                start: this._merge.bind(this, a),
              },
            }).then((n) => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = Pn(e);
                if (t) return this._update(t, !0);
              }
              return n;
            });
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(dn(this));
            const r = !te.und(e.to),
              a = !te.und(e.from);
            if (r || a) {
              if (!(t.callId > this._lastToId)) return n(dn(this));
              this._lastToId = t.callId;
            }
            const { key: l, defaultProps: o, animation: i } = this,
              { to: u, from: s } = i;
            let { to: c = u, from: d = s } = e;
            !a || r || (t.default && !te.und(c)) || (c = d),
              t.reverse && ([c, d] = [d, c]);
            const f = !ne(d, s);
            f && (i.from = d), (d = Je(d));
            const p = !ne(c, u);
            p && this._focus(c);
            const h = en(t.to),
              { config: m } = i,
              { decay: g, velocity: v } = m;
            (r || a) && (m.velocity = 0),
              t.config &&
                !h &&
                (function (e, t, n) {
                  n && (rn((n = { ...n }), t), (t = { ...n, ...t })),
                    rn(e, t),
                    Object.assign(e, t);
                  for (const t in tn) null == e[t] && (e[t] = tn[t]);
                  let { frequency: r, damping: a } = e;
                  const { mass: l } = e;
                  te.und(r) ||
                    (r < 0.01 && (r = 0.01),
                    a < 0 && (a = 0),
                    (e.tension = Math.pow((2 * Math.PI) / r, 2) * l),
                    (e.friction = (4 * Math.PI * a * l) / r));
                })(
                  m,
                  Bt(t.config, l),
                  t.config !== o.config ? Bt(o.config, l) : void 0
                );
            let y = zt(this);
            if (!y || te.und(c)) return n(cn(this, !0));
            const b = te.und(t.reset)
                ? a && !t.default
                : !te.und(d) && Wt(t.reset, l),
              w = b ? d : this.get(),
              k = Jt(c),
              x = te.num(k) || te.arr(k) || kt(k),
              S = !h && (!x || Wt(o.immediate || t.immediate, l));
            if (p) {
              const e = Dt(c);
              if (e !== y.constructor) {
                if (!S)
                  throw Error(
                    `Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`
                  );
                y = this._set(k);
              }
            }
            const _ = y.constructor;
            let E = Ge(c),
              C = !1;
            if (!E) {
              const e = b || (!wn(this) && f);
              (p || e) && ((C = ne(Jt(w), k)), (E = !C)),
                ((ne(i.immediate, S) || S) &&
                  ne(m.decay, g) &&
                  ne(m.velocity, v)) ||
                  (E = !0);
            }
            if (
              (C &&
                kn(this) &&
                (i.changed && !b ? (E = !0) : E || this._stop(u)),
              !h &&
                ((E || Ge(u)) &&
                  ((i.values = y.getPayload()),
                  (i.toValues = Ge(c) ? null : _ == Ot ? [1] : le(k))),
                i.immediate != S && ((i.immediate = S), S || b || this._set(u)),
                E))
            ) {
              const { onRest: e } = i;
              re(Mn, (e) => In(this, t, e));
              const r = cn(this, Cn(this, u));
              se(this._pendingCalls, r),
                this._pendingCalls.add(n),
                i.changed &&
                  F.batchedUpdates(() => {
                    (i.changed = !b),
                      e?.(r, this),
                      b ? Bt(o.onRest, r) : i.onStart?.(r, this);
                  });
            }
            b && this._set(w),
              h
                ? n(fn(t.to, t, this._state, this))
                : E
                ? this._start()
                : kn(this) && !p
                ? this._pendingCalls.add(n)
                : n(sn(w));
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to &&
              (et(this) && this._detach(),
              (t.to = e),
              et(this) && this._attach());
          }
          _attach() {
            let e = 0;
            const { to: t } = this.animation;
            Ge(t) && (at(t, this), gn(t) && (e = t.priority + 1)),
              (this.priority = e);
          }
          _detach() {
            const { to: e } = this.animation;
            Ge(e) && lt(e, this);
          }
          _set(e, t = !0) {
            const n = Je(e);
            if (!te.und(n)) {
              const e = zt(this);
              if (!e || !ne(n, e.getValue())) {
                const r = Dt(n);
                e && e.constructor == r ? e.setValue(n) : Tt(this, r.create(n)),
                  e &&
                    F.batchedUpdates(() => {
                      this._onChange(n, t);
                    });
              }
            }
            return zt(this);
          }
          _onStart() {
            const e = this.animation;
            e.changed ||
              ((e.changed = !0),
              jn(this, "onStart", cn(this, Cn(this, e.to)), this));
          }
          _onChange(e, t) {
            t || (this._onStart(), Bt(this.animation.onChange, e, this)),
              Bt(this.defaultProps.onChange, e, this),
              super._onChange(e, t);
          }
          _start() {
            const e = this.animation;
            zt(this).reset(Je(e.to)),
              e.immediate ||
                (e.fromValues = e.values.map((e) => e.lastPosition)),
              kn(this) || (Sn(this, !0), xn(this) || this._resume());
          }
          _resume() {
            L.skipAnimation ? this.finish() : be.start(this);
          }
          _stop(e, t) {
            if (kn(this)) {
              Sn(this, !1);
              const n = this.animation;
              re(n.values, (e) => {
                e.done = !0;
              }),
                n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                tt(this, { type: "idle", parent: this });
              const r = t
                ? dn(this.get())
                : cn(this.get(), Cn(this, e ?? n.to));
              se(this._pendingCalls, r),
                n.changed && ((n.changed = !1), jn(this, "onRest", r, this));
            }
          }
        };
      function Cn(e, t) {
        const n = Jt(t);
        return ne(Jt(e.get()), n);
      }
      function Pn(e, t = e.loop, n = e.to) {
        const r = Bt(t);
        if (r) {
          const a = !0 !== r && Gt(r),
            l = (a || e).reverse,
            o = !a || a.reset;
          return Nn({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !l || en(n) ? n : void 0,
            from: o ? e.from : void 0,
            reset: o,
            ...a,
          });
        }
      }
      function Nn(e) {
        const { to: t, from: n } = (e = Gt(e)),
          r = new Set();
        return (
          te.obj(t) && Tn(t, r),
          te.obj(n) && Tn(n, r),
          (e.keys = r.size ? Array.from(r) : null),
          e
        );
      }
      function zn(e) {
        const t = Nn(e);
        return te.und(t.default) && (t.default = Kt(t)), t;
      }
      function Tn(e, t) {
        ae(e, (e, n) => null != e && t.add(n));
      }
      var Mn = ["onStart", "onRest", "onChange", "onPause", "onResume"];
      function In(e, t, n) {
        e.animation[n] = t[n] !== qt(t, n) ? Ht(t[n], e.key) : void 0;
      }
      function jn(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n);
      }
      var On = ["onStart", "onChange", "onRest"],
        Ln = 1,
        Rn = class {
          constructor(e, t) {
            (this.id = Ln++),
              (this.springs = {}),
              (this.queue = []),
              (this._lastAsyncId = 0),
              (this._active = new Set()),
              (this._changed = new Set()),
              (this._started = !1),
              (this._state = {
                paused: !1,
                pauseQueue: new Set(),
                resumeQueue: new Set(),
                timeouts: new Set(),
              }),
              (this._events = {
                onStart: new Map(),
                onChange: new Map(),
                onRest: new Map(),
              }),
              (this._onFrame = this._onFrame.bind(this)),
              t && (this._flush = t),
              e && this.start({ default: !0, ...e });
          }
          get idle() {
            return (
              !this._state.asyncTo &&
              Object.values(this.springs).every(
                (e) => e.idle && !e.isDelayed && !e.isPaused
              )
            );
          }
          get item() {
            return this._item;
          }
          set item(e) {
            this._item = e;
          }
          get() {
            const e = {};
            return this.each((t, n) => (e[n] = t.get())), e;
          }
          set(e) {
            for (const t in e) {
              const n = e[t];
              te.und(n) || this.springs[t].set(n);
            }
          }
          update(e) {
            return e && this.queue.push(Nn(e)), this;
          }
          start(e) {
            let { queue: t } = this;
            return (
              e ? (t = le(e).map(Nn)) : (this.queue = []),
              this._flush ? this._flush(this, t) : (Qn(this, t), Fn(this, t))
            );
          }
          stop(e, t) {
            if ((e !== !!e && (t = e), t)) {
              const n = this.springs;
              re(le(t), (t) => n[t].stop(!!e));
            } else
              pn(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e));
            return this;
          }
          pause(e) {
            if (te.und(e)) this.start({ pause: !0 });
            else {
              const t = this.springs;
              re(le(e), (e) => t[e].pause());
            }
            return this;
          }
          resume(e) {
            if (te.und(e)) this.start({ pause: !1 });
            else {
              const t = this.springs;
              re(le(e), (e) => t[e].resume());
            }
            return this;
          }
          each(e) {
            ae(this.springs, e);
          }
          _onFrame() {
            const { onStart: e, onChange: t, onRest: n } = this._events,
              r = this._active.size > 0,
              a = this._changed.size > 0;
            ((r && !this._started) || (a && !this._started)) &&
              ((this._started = !0),
              oe(e, ([e, t]) => {
                (t.value = this.get()), e(t, this, this._item);
              }));
            const l = !r && this._started,
              o = a || (l && n.size) ? this.get() : null;
            a &&
              t.size &&
              oe(t, ([e, t]) => {
                (t.value = o), e(t, this, this._item);
              }),
              l &&
                ((this._started = !1),
                oe(n, ([e, t]) => {
                  (t.value = o), e(t, this, this._item);
                }));
          }
          eventObserved(e) {
            if ("change" == e.type)
              this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent);
            }
            F.onFrame(this._onFrame);
          }
        };
      function Fn(e, t) {
        return Promise.all(t.map((t) => An(e, t))).then((t) => un(e, t));
      }
      async function An(e, t, n) {
        const { keys: r, to: a, from: l, loop: o, onRest: i, onResolve: u } = t,
          s = te.obj(t.default) && t.default;
        o && (t.loop = !1),
          !1 === a && (t.to = null),
          !1 === l && (t.from = null);
        const c = te.arr(a) || te.fun(a) ? a : void 0;
        c
          ? ((t.to = void 0), (t.onRest = void 0), s && (s.onRest = void 0))
          : re(On, (n) => {
              const r = t[n];
              if (te.fun(r)) {
                const a = e._events[n];
                (t[n] = ({ finished: e, cancelled: t }) => {
                  const n = a.get(r);
                  n
                    ? (e || (n.finished = !1), t && (n.cancelled = !0))
                    : a.set(r, {
                        value: null,
                        finished: e || !1,
                        cancelled: t || !1,
                      });
                }),
                  s && (s[n] = t[n]);
              }
            });
        const d = e._state;
        t.pause === !d.paused
          ? ((d.paused = t.pause), se(t.pause ? d.pauseQueue : d.resumeQueue))
          : d.paused && (t.pause = !0);
        const f = (r || Object.keys(e.springs)).map((n) =>
            e.springs[n].start(t)
          ),
          p = !0 === t.cancel || !0 === qt(t, "cancel");
        (c || (p && d.asyncId)) &&
          f.push(
            on(++e._lastAsyncId, {
              props: t,
              state: d,
              actions: {
                pause: ee,
                resume: ee,
                start(t, n) {
                  p
                    ? (pn(d, e._lastAsyncId), n(dn(e)))
                    : ((t.onRest = i), n(fn(c, t, d, e)));
                },
              },
            })
          ),
          d.paused &&
            (await new Promise((e) => {
              d.resumeQueue.add(e);
            }));
        const h = un(e, await Promise.all(f));
        if (o && h.finished && (!n || !h.noop)) {
          const n = Pn(t, o, a);
          if (n) return Qn(e, [n]), An(e, n, !0);
        }
        return u && F.batchedUpdates(() => u(h, e, e.item)), h;
      }
      function Dn(e, t) {
        const n = { ...e.springs };
        return (
          t &&
            re(le(t), (e) => {
              te.und(e.keys) && (e = Nn(e)),
                te.obj(e.to) || (e = { ...e, to: void 0 }),
                $n(n, e, (e) => Vn(e));
            }),
          Un(e, n),
          n
        );
      }
      function Un(e, t) {
        ae(t, (t, n) => {
          e.springs[n] || ((e.springs[n] = t), at(t, e));
        });
      }
      function Vn(e, t) {
        const n = new En();
        return (n.key = e), t && at(n, t), n;
      }
      function $n(e, t, n) {
        t.keys &&
          re(t.keys, (r) => {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
          });
      }
      function Qn(e, t) {
        re(t, (t) => {
          $n(e.springs, t, (t) => Vn(t, e));
        });
      }
      var Bn,
        Wn,
        Hn = ({ children: t, ...n }) => {
          const r = (0, e.useContext)(qn),
            a = n.pause || !!r.pause,
            l = n.immediate || !!r.immediate;
          n = (function (t, n) {
            const [r] = (0, e.useState)(() => ({ inputs: n, result: t() })),
              a = (0, e.useRef)(),
              l = a.current;
            let o = l;
            return (
              o
                ? Boolean(
                    n &&
                      o.inputs &&
                      (function (e, t) {
                        if (e.length !== t.length) return !1;
                        for (let n = 0; n < e.length; n++)
                          if (e[n] !== t[n]) return !1;
                        return !0;
                      })(n, o.inputs)
                  ) || (o = { inputs: n, result: t() })
                : (o = r),
              (0, e.useEffect)(() => {
                (a.current = o), l == r && (r.inputs = r.result = void 0);
              }, [o]),
              o.result
            );
          })(() => ({ pause: a, immediate: l }), [a, l]);
          const { Provider: o } = qn;
          return e.createElement(o, { value: n }, t);
        },
        qn =
          ((Bn = Hn),
          (Wn = {}),
          Object.assign(Bn, e.createContext(Wn)),
          (Bn.Provider._context = Bn),
          (Bn.Consumer._context = Bn),
          Bn);
      (Hn.Provider = qn.Provider), (Hn.Consumer = qn.Consumer);
      var Zn = () => {
        const e = [],
          t = function (t) {
            wt(
              `${vt}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
            );
            const r = [];
            return (
              re(e, (e, a) => {
                if (te.und(t)) r.push(e.start());
                else {
                  const l = n(t, e, a);
                  l && r.push(e.start(l));
                }
              }),
              r
            );
          };
        (t.current = e),
          (t.add = function (t) {
            e.includes(t) || e.push(t);
          }),
          (t.delete = function (t) {
            const n = e.indexOf(t);
            ~n && e.splice(n, 1);
          }),
          (t.pause = function () {
            return re(e, (e) => e.pause(...arguments)), this;
          }),
          (t.resume = function () {
            return re(e, (e) => e.resume(...arguments)), this;
          }),
          (t.set = function (t) {
            re(e, (e, n) => {
              const r = te.fun(t) ? t(n, e) : t;
              r && e.set(r);
            });
          }),
          (t.start = function (t) {
            const n = [];
            return (
              re(e, (e, r) => {
                if (te.und(t)) n.push(e.start());
                else {
                  const a = this._getProps(t, e, r);
                  a && n.push(e.start(a));
                }
              }),
              n
            );
          }),
          (t.stop = function () {
            return re(e, (e) => e.stop(...arguments)), this;
          }),
          (t.update = function (t) {
            return re(e, (e, n) => e.update(this._getProps(t, e, n))), this;
          });
        const n = function (e, t, n) {
          return te.fun(e) ? e(n, t) : e;
        };
        return (t._getProps = n), t;
      };
      function Kn(t, n) {
        const r = te.fun(t),
          [[a], l] = (function (t, n, r) {
            const a = te.fun(n) && n;
            a && !r && (r = []);
            const l = (0, e.useMemo)(
                () => (a || 3 == arguments.length ? Zn() : void 0),
                []
              ),
              o = (0, e.useRef)(0),
              i = _t(),
              u = (0, e.useMemo)(
                () => ({
                  ctrls: [],
                  queue: [],
                  flush(e, t) {
                    const n = Dn(e, t);
                    return o.current > 0 &&
                      !u.queue.length &&
                      !Object.keys(n).some((t) => !e.springs[t])
                      ? Fn(e, t)
                      : new Promise((r) => {
                          Un(e, n),
                            u.queue.push(() => {
                              r(Fn(e, t));
                            }),
                            i();
                        });
                  },
                }),
                []
              ),
              s = (0, e.useRef)([...u.ctrls]),
              c = [],
              d = Pt(t) || 0;
            function f(e, t) {
              for (let r = e; r < t; r++) {
                const e =
                    s.current[r] || (s.current[r] = new Rn(null, u.flush)),
                  t = a ? a(r, e) : n[r];
                t && (c[r] = zn(t));
              }
            }
            (0, e.useMemo)(() => {
              re(s.current.slice(t, d), (e) => {
                (function (e, t) {
                  e.ref?.delete(e), t?.delete(e);
                })(e, l),
                  e.stop(!0);
              }),
                (s.current.length = t),
                f(d, t);
            }, [t]),
              (0, e.useMemo)(() => {
                f(0, Math.min(d, t));
              }, r);
            const p = s.current.map((e, t) => Dn(e, c[t])),
              h = (0, e.useContext)(Hn),
              m = Pt(h),
              g =
                h !== m &&
                (function (e) {
                  for (const t in e) return !0;
                  return !1;
                })(h);
            xt(() => {
              o.current++, (u.ctrls = s.current);
              const { queue: e } = u;
              e.length && ((u.queue = []), re(e, (e) => e())),
                re(s.current, (e, t) => {
                  l?.add(e), g && e.start({ default: h });
                  const n = c[t];
                  n &&
                    ((function (e, t) {
                      t &&
                        e.ref !== t &&
                        (e.ref?.delete(e), t.add(e), (e.ref = t));
                    })(e, n.ref),
                    e.ref ? e.queue.push(n) : e.start(n));
                });
            }),
              Et(() => () => {
                re(u.ctrls, (e) => e.stop(!0));
              });
            const v = p.map((e) => ({ ...e }));
            return l ? [v, l] : v;
          })(1, r ? t : [t], r ? n || [] : n);
        return r || 2 == arguments.length ? [a, l] : a;
      }
      var Yn = { any: 0, all: 1 };
      var Xn = class extends yn {
        constructor(e, t) {
          super(),
            (this.source = e),
            (this.idle = !0),
            (this._active = new Set()),
            (this.calc = $e(...t));
          const n = this._get(),
            r = Dt(n);
          Tt(this, r.create(n));
        }
        advance(e) {
          const t = this._get();
          ne(t, this.get()) ||
            (zt(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && Jn(this._active) && er(this);
        }
        _get() {
          const e = te.arr(this.source)
            ? this.source.map(Je)
            : le(Je(this.source));
          return this.calc(...e);
        }
        _start() {
          this.idle &&
            !Jn(this._active) &&
            ((this.idle = !1),
            re(Mt(this), (e) => {
              e.done = !1;
            }),
            L.skipAnimation
              ? (F.batchedUpdates(() => this.advance()), er(this))
              : be.start(this));
        }
        _attach() {
          let e = 1;
          re(le(this.source), (t) => {
            Ge(t) && at(t, this),
              gn(t) &&
                (t.idle || this._active.add(t),
                (e = Math.max(e, t.priority + 1)));
          }),
            (this.priority = e),
            this._start();
        }
        _detach() {
          re(le(this.source), (e) => {
            Ge(e) && lt(e, this);
          }),
            this._active.clear(),
            er(this);
        }
        eventObserved(e) {
          "change" == e.type
            ? e.idle
              ? this.advance()
              : (this._active.add(e.parent), this._start())
            : "idle" == e.type
            ? this._active.delete(e.parent)
            : "priority" == e.type &&
              (this.priority = le(this.source).reduce(
                (e, t) => Math.max(e, (gn(t) ? t.priority : 0) + 1),
                0
              ));
        }
      };
      function Gn(e) {
        return !1 !== e.idle;
      }
      function Jn(e) {
        return !e.size || Array.from(e).every(Gn);
      }
      function er(e) {
        e.idle ||
          ((e.idle = !0),
          re(Mt(e), (e) => {
            e.done = !0;
          }),
          tt(e, { type: "idle", parent: e }));
      }
      L.assign({ createStringInterpolator: gt, to: (e, t) => new Xn(e, t) }),
        be.advance;
      var tr = a(935),
        nr = /^--/;
      function rr(e, t) {
        return null == t || "boolean" == typeof t || "" === t
          ? ""
          : "number" != typeof t ||
            0 === t ||
            nr.test(e) ||
            (lr.hasOwnProperty(e) && lr[e])
          ? ("" + t).trim()
          : t + "px";
      }
      var ar = {},
        lr = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        or = ["Webkit", "Ms", "Moz", "O"];
      lr = Object.keys(lr).reduce(
        (e, t) => (
          or.forEach(
            (n) =>
              (e[
                ((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)
              ] = e[t])
          ),
          e
        ),
        lr
      );
      var ir = /^(matrix|translate|scale|rotate|skew)/,
        ur = /^(translate)/,
        sr = /^(rotate|skew)/,
        cr = (e, t) => (te.num(e) && 0 !== e ? e + t : e),
        dr = (e, t) =>
          te.arr(e)
            ? e.every((e) => dr(e, t))
            : te.num(e)
            ? e === t
            : parseFloat(e) === t,
        fr = class extends Rt {
          constructor({ x: e, y: t, z: n, ...r }) {
            const a = [],
              l = [];
            (e || t || n) &&
              (a.push([e || 0, t || 0, n || 0]),
              l.push((e) => [
                `translate3d(${e.map((e) => cr(e, "px")).join(",")})`,
                dr(e, 0),
              ])),
              ae(r, (e, t) => {
                if ("transform" === t)
                  a.push([e || ""]), l.push((e) => [e, "" === e]);
                else if (ir.test(t)) {
                  if ((delete r[t], te.und(e))) return;
                  const n = ur.test(t) ? "px" : sr.test(t) ? "deg" : "";
                  a.push(le(e)),
                    l.push(
                      "rotate3d" === t
                        ? ([e, t, r, a]) => [
                            `rotate3d(${e},${t},${r},${cr(a, n)})`,
                            dr(a, 0),
                          ]
                        : (e) => [
                            `${t}(${e.map((e) => cr(e, n)).join(",")})`,
                            dr(e, t.startsWith("scale") ? 1 : 0),
                          ]
                    );
                }
              }),
              a.length && (r.transform = new pr(a, l)),
              super(r);
          }
        },
        pr = class extends nt {
          constructor(e, t) {
            super(),
              (this.inputs = e),
              (this.transforms = t),
              (this._value = null);
          }
          get() {
            return this._value || (this._value = this._get());
          }
          _get() {
            let e = "",
              t = !0;
            return (
              re(this.inputs, (n, r) => {
                const a = Je(n[0]),
                  [l, o] = this.transforms[r](te.arr(a) ? a : n.map(Je));
                (e += " " + l), (t = t && o);
              }),
              t ? "none" : e
            );
          }
          observerAdded(e) {
            1 == e &&
              re(this.inputs, (e) => re(e, (e) => Ge(e) && at(e, this)));
          }
          observerRemoved(e) {
            0 == e &&
              re(this.inputs, (e) => re(e, (e) => Ge(e) && lt(e, this)));
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), tt(this, e);
          }
        };
      L.assign({
        batchedUpdates: tr.unstable_batchedUpdates,
        createStringInterpolator: gt,
        colors: {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199,
        },
      });
      var hr = ((
          e,
          {
            applyAnimatedValues: t = () => !1,
            createAnimatedStyle: n = (e) => new Rt(e),
            getComponentProps: r = (e) => e,
          } = {}
        ) => {
          const a = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r,
            },
            l = (e) => {
              const t = Qt(e) || "Anonymous";
              return (
                ((e = te.str(e)
                  ? l[e] || (l[e] = Ut(e, a))
                  : e[$t] ||
                    (e[$t] = Ut(e, a))).displayName = `Animated(${t})`),
                e
              );
            };
          return (
            ae(e, (t, n) => {
              te.arr(e) && (n = Qt(t)), (l[n] = l(t));
            }),
            { animated: l }
          );
        })(
          [
            "a",
            "abbr",
            "address",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "base",
            "bdi",
            "bdo",
            "big",
            "blockquote",
            "body",
            "br",
            "button",
            "canvas",
            "caption",
            "cite",
            "code",
            "col",
            "colgroup",
            "data",
            "datalist",
            "dd",
            "del",
            "details",
            "dfn",
            "dialog",
            "div",
            "dl",
            "dt",
            "em",
            "embed",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "i",
            "iframe",
            "img",
            "input",
            "ins",
            "kbd",
            "keygen",
            "label",
            "legend",
            "li",
            "link",
            "main",
            "map",
            "mark",
            "menu",
            "menuitem",
            "meta",
            "meter",
            "nav",
            "noscript",
            "object",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "param",
            "picture",
            "pre",
            "progress",
            "q",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "script",
            "section",
            "select",
            "small",
            "source",
            "span",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "table",
            "tbody",
            "td",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "time",
            "title",
            "tr",
            "track",
            "u",
            "ul",
            "var",
            "video",
            "wbr",
            "circle",
            "clipPath",
            "defs",
            "ellipse",
            "foreignObject",
            "g",
            "image",
            "line",
            "linearGradient",
            "mask",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialGradient",
            "rect",
            "stop",
            "svg",
            "text",
            "tspan",
          ],
          {
            applyAnimatedValues: function (e, t) {
              if (!e.nodeType || !e.setAttribute) return !1;
              const n =
                  "filter" === e.nodeName ||
                  (e.parentNode && "filter" === e.parentNode.nodeName),
                {
                  style: r,
                  children: a,
                  scrollTop: l,
                  scrollLeft: o,
                  viewBox: i,
                  ...u
                } = t,
                s = Object.values(u),
                c = Object.keys(u).map((t) =>
                  n || e.hasAttribute(t)
                    ? t
                    : ar[t] ||
                      (ar[t] = t.replace(
                        /([A-Z])/g,
                        (e) => "-" + e.toLowerCase()
                      ))
                );
              void 0 !== a && (e.textContent = a);
              for (const t in r)
                if (r.hasOwnProperty(t)) {
                  const n = rr(t, r[t]);
                  nr.test(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
                }
              c.forEach((t, n) => {
                e.setAttribute(t, s[n]);
              }),
                void 0 !== l && (e.scrollTop = l),
                void 0 !== o && (e.scrollLeft = o),
                void 0 !== i && e.setAttribute("viewBox", i);
            },
            createAnimatedStyle: (e) => new fr(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
          }
        ),
        mr = hr.animated;
      const gr = [
          {
            title: "Site-Gift for girlfriend",
            description: "",
            image: j,
            link: "https://example.com/project1",
          },
          {
            title: "Stands Wiki",
            description: "",
            image: I,
            link: "https://example.com/project2",
          },
        ],
        vr = () => {
          const [t, n] = (function (t, n) {
            const [r, a] = (0, e.useState)(!1),
              l = (0, e.useRef)(),
              o = te.fun(t) && t,
              i = o ? o() : {},
              { to: u = {}, from: s = {}, ...c } = i,
              d = o ? n : t,
              [f, p] = Kn(() => ({ from: s, ...c }), []);
            return (
              xt(() => {
                const e = l.current,
                  { root: t, once: n, amount: o = "any", ...i } = d ?? {};
                if (
                  !e ||
                  (n && r) ||
                  "undefined" == typeof IntersectionObserver
                )
                  return;
                const c = new WeakMap(),
                  f = new IntersectionObserver(
                    (e) => {
                      e.forEach((e) => {
                        const t = c.get(e.target);
                        if (e.isIntersecting !== Boolean(t))
                          if (e.isIntersecting) {
                            const t =
                              (u && p.start(u),
                              a(!0),
                              n
                                ? void 0
                                : () => {
                                    s && p.start(s), a(!1);
                                  });
                            te.fun(t)
                              ? c.set(e.target, t)
                              : f.unobserve(e.target);
                          } else t && (t(), c.delete(e.target));
                      });
                    },
                    {
                      root: (t && t.current) || void 0,
                      threshold:
                        "number" == typeof o || Array.isArray(o) ? o : Yn[o],
                      ...i,
                    }
                  );
                return f.observe(e), () => f.unobserve(e);
              }, [d]),
              o ? [l, f] : [l, r]
            );
          })(
            () => ({ from: { opacity: 0, x: -200 }, to: { opacity: 1, x: 0 } }),
            { rootMargin: "-20% 0%" }
          );
          return (0, x.jsxs)("div", {
            className: "portfolio",
            id: "projects",
            children: [
              (0, x.jsx)("h2", { children: "Projects" }),
              (0, x.jsx)("div", {
                className: "projects",
                children: gr.map((e, r) =>
                  (0, x.jsxs)(
                    mr.div,
                    {
                      className: "project",
                      style: n,
                      ref: t,
                      children: [
                        (0, x.jsx)("img", { src: e.image, alt: e.title }),
                        (0, x.jsxs)("div", {
                          className: "project-info",
                          children: [
                            (0, x.jsx)("h3", { children: e.title }),
                            (0, x.jsx)("p", { children: e.description }),
                          ],
                        }),
                      ],
                    },
                    r
                  )
                ),
              }),
            ],
          });
        },
        yr = function () {
          return (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsx)(z, {}),
              (0, x.jsx)(C, {}),
              (0, x.jsx)(S, {}),
              (0, x.jsx)(vr, {}),
            ],
          });
        };
      var br;
      t
        .createRoot(document.getElementById("root"))
        .render((0, x.jsx)(e.StrictMode, { children: (0, x.jsx)(yr, {}) })),
        br &&
          br instanceof Function &&
          a
            .e(131)
            .then(a.bind(a, 131))
            .then((e) => {
              let {
                getCLS: t,
                getFID: n,
                getFCP: r,
                getLCP: a,
                getTTFB: l,
              } = e;
              t(br), n(br), r(br), a(br), l(br);
            });
    })();
})();
