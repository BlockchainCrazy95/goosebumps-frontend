;(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    GOhO: function (e, t, n) {
      'use strict'
      var r = n('+DwS')
      n('tc+8')
      var i = n('m/cY')
      function o(e, ...t) {
        const n = () => e(...t.map((e) => e.value())),
          r = Object(i.a)(n()),
          o = () => r.setValue(n()),
          s = {}
        for (const i of t) i.subscribe(s, o)
        return (
          (r.destroy = () => {
            t.forEach((e) => e.unsubscribeAll(s))
          }),
          r
        )
      }
      n.d(t, 'b', function () {
        return r.a
      }),
        n.d(t, 'a', function () {
          return o
        })
    },
    HSjo: function (e, t, n) {
      'use strict'
      function r(e, t) {
        return Object.assign({ propType: 'checkable', properties: e }, t)
      }
      function i(e, t, n) {
        return Object.assign({ propType: 'checkableSet', properties: e, childrenDefinitions: n }, t)
      }
      function o(e, t) {
        return Object.assign({ propType: 'color', properties: e, noAlpha: !1 }, t)
      }
      var s = n('a7Ha'),
        u = n('8Uy/')
      const c = [u.LINESTYLE_SOLID, u.LINESTYLE_DOTTED, u.LINESTYLE_DASHED],
        a = [1, 2, 3, 4],
        p = [s.LineEnd.Normal, s.LineEnd.Arrow]
      function l(e, t) {
        const n = Object.assign({ propType: 'line', properties: e }, t)
        return (
          void 0 !== n.properties.style && (n.styleValues = c),
          void 0 !== n.properties.width && (n.widthValues = a),
          (void 0 === n.properties.leftEnd && void 0 === n.properties.rightEnd) ||
            void 0 !== n.endsValues ||
            (n.endsValues = p),
          void 0 !== n.properties.value && void 0 === n.valueType && (n.valueType = 1),
          n
        )
      }
      const d = [u.LINESTYLE_SOLID, u.LINESTYLE_DOTTED, u.LINESTYLE_DASHED],
        f = [1, 2, 3, 4]
      function b(e, t) {
        const n = Object.assign({ propType: 'leveledLine', properties: e }, t)
        return (
          void 0 !== n.properties.style && (n.styleValues = d), void 0 !== n.properties.width && (n.widthValues = f), n
        )
      }
      function v(e, t) {
        return Object.assign({ propType: 'number', properties: e, type: 1 }, t)
      }
      function g(e, t) {
        return Object.assign({ propType: 'options', properties: e }, t)
      }
      function y(e, t) {
        return Object.assign({ propType: 'twoOptions', properties: e }, t)
      }
      n('YFKU')
      const w = [
          { id: 'bottom', value: 'bottom', title: window.t('Top') },
          { id: 'middle', value: 'middle', title: window.t('Middle') },
          { id: 'top', value: 'top', title: window.t('Bottom') },
        ],
        T = [
          { id: 'left', value: 'left', title: window.t('Left') },
          { id: 'center', value: 'center', title: window.t('Center') },
          { id: 'right', value: 'right', title: window.t('Right') },
        ],
        m = [
          { id: 'horizontal', value: 'horizontal', title: window.t('Horizontal') },
          { id: 'vertical', value: 'vertical', title: window.t('Vertical') },
        ],
        O = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40].map((e) => ({ title: String(e), value: e })),
        h = [1, 2, 3, 4],
        j = window.t('Text alignment'),
        E = window.t('Text orientation')
      function V(e, t) {
        const n = Object.assign(Object.assign({ propType: 'text', properties: e }, t), {
          isEditable: t.isEditable || !1,
        })
        return (
          void 0 !== n.properties.size && void 0 === n.sizeItems && (n.sizeItems = O),
          void 0 !== n.properties.alignmentVertical &&
            void 0 === n.alignmentVerticalItems &&
            (n.alignmentVerticalItems = w),
          void 0 !== n.properties.alignmentHorizontal &&
            void 0 === n.alignmentHorizontalItems &&
            (n.alignmentHorizontalItems = T),
          (n.alignmentVerticalItems || n.alignmentHorizontalItems) &&
            void 0 === n.alignmentTitle &&
            (n.alignmentTitle = j),
          void 0 !== n.properties.orientation &&
            (void 0 === n.orientationItems && (n.orientationItems = m),
            void 0 === n.orientationTitle && (n.orientationTitle = E)),
          void 0 !== n.properties.borderWidth && void 0 === n.borderWidthItems && (n.borderWidthItems = h),
          n
        )
      }
      function S(e, t) {
        return Object.assign(
          {
            propType: 'twoColors',
            properties: e,
            noAlpha1: !1,
            noAlpha2: !1,
          },
          t,
        )
      }
      function I(e, t) {
        return Object.assign({ propType: 'coordinates', properties: e }, t)
      }
      function L(e, t) {
        return Object.assign({ propType: 'range', properties: e }, t)
      }
      function A(e, t) {
        return Object.assign({ propType: 'transparency', properties: e }, t)
      }
      function D(e, t) {
        return Object.assign({ propType: 'symbol', properties: e }, t)
      }
      function z(e, t) {
        return Object.assign({ propType: 'session', properties: e }, t)
      }
      function H(e, t) {
        return Object.assign({ propType: 'emoji', properties: e }, t)
      }
      var Y = n('hY0g'),
        k = n.n(Y)
      function M(e, t, n) {
        return { id: t, title: n, groupType: 'general', definitions: new k.a(e) }
      }
      function N(e, t, n) {
        return { id: t, title: n, groupType: 'leveledLines', definitions: new k.a(e) }
      }
      function P(e, t) {
        const n = new Map(),
          r = void 0 !== t ? t[0] : (e) => e,
          i = void 0 !== t ? (void 0 !== t[1] ? t[1] : t[0]) : (e) => e,
          o = {
            value: () => r(e.value()),
            setValue: (t) => {
              e.setValue(i(t))
            },
            subscribe: (t, r) => {
              const i = (e) => {
                r(o)
              }
              n.set(r, i), e.subscribe(t, i)
            },
            unsubscribe: (t, r) => {
              const i = n.get(r)
              i && (e.unsubscribe(t, i), n.delete(r))
            },
            unsubscribeAll: (t) => {
              e.unsubscribeAll(t), n.clear()
            },
          }
        return o
      }
      function _(e, t, n, r) {
        const i = P(t, r),
          o = void 0 !== r ? (void 0 !== r[1] ? r[1] : r[0]) : (e) => e
        return (i.setValue = (r) => e.setProperty(t, o(r), n)), i
      }
      function x(e, t, n, r) {
        const i = (function (e, t) {
            const n = new Map(),
              r = void 0 !== t ? t[0] : (e) => e,
              i = void 0 !== t ? (void 0 !== t[1] ? t[1] : t[0]) : (e) => e,
              o = {
                value: () => r(e.value()),
                setValue: (t) => {
                  e.setValue(i(t))
                },
                subscribe: (t, r) => {
                  const i = () => {
                    r(o)
                  }
                  let s = n.get(t)
                  void 0 === s ? ((s = new Map()), s.set(r, i), n.set(t, s)) : s.set(r, i), e.subscribe(i)
                },
                unsubscribe: (t, r) => {
                  const i = n.get(t)
                  if (void 0 !== i) {
                    const t = i.get(r)
                    void 0 !== t && (e.unsubscribe(t), i.delete(r))
                  }
                },
                unsubscribeAll: (t) => {
                  const r = n.get(t)
                  void 0 !== r &&
                    (r.forEach((t, n) => {
                      e.unsubscribe(t)
                    }),
                    r.clear())
                },
              }
            return o
          })(t, r),
          o = void 0 !== r ? (void 0 !== r[1] ? r[1] : r[0]) : (e) => e
        return (i.setValue = (r) => e.undoHistory().setWatchedValue(t, o(r), n)), i
      }
      function U(e, t) {
        const n = P(t)
        return (n.setValue = (t) => e.setPriceScaleSelectionStrategy(t)), n
      }
      function W(e, t, n, r) {
        const i = P(t)
        return (
          (i.setValue = (t) => {
            const i = { lockScale: t }
            e.setPriceScaleMode(i, n, r)
          }),
          i
        )
      }
      function C(e, t, n, r) {
        const i = P(t, r)
        return (
          (i.setValue = (r) => {
            e.setScaleRatioProperty(t, r, n)
          }),
          i
        )
      }
      var J = n('eJTA'),
        R = n('Tmoa'),
        G = n('GOhO')
      function q(e, t) {
        if (Object(R.isHexColor)(e)) {
          const n = Object(J.parseRgb)(e)
          return Object(J.rgbaToString)(Object(J.rgba)(n, (100 - t) / 100))
        }
        return e
      }
      function B(e, t, n, r, i) {
        let o
        if (null !== n) {
          o = (function (e) {
            const t = P(e)
            return (
              (t.destroy = () => {
                e.destroy()
              }),
              t
            )
          })(Object(G.a)(q, t, n))
        } else o = P(t, [() => q(t.value(), 0), (e) => e])
        return (
          (o.setValue = (n) => {
            i && e.beginUndoMacro(r), e.setProperty(t, n, r), i && e.endUndoMacro()
          }),
          o
        )
      }
      function F(e, t, n, r, i, o) {
        const s = [
          ((u = n),
          (c = t),
          (e) => {
            const t = u(c)
            if (e === c.value() && null !== t) {
              const e = t.ticker || t.full_name
              if (e) return e
            }
            return e
          }),
          (e) => e,
        ]
        var u, c
        const a = _(e, t, i, s)
        o && (a.setValue = o)
        const p = new Map()
        ;(a.subscribe = (e, n) => {
          const r = (e) => {
            n(a)
          }
          p.set(n, r), t.subscribe(e, r)
        }),
          (a.unsubscribe = (e, n) => {
            const r = p.get(n)
            r && (t.unsubscribe(e, r), p.delete(n))
          })
        const l = {}
        return (
          r.subscribe(l, () => {
            p.forEach((e, t) => {
              e(a)
            })
          }),
          (a.destroy = () => {
            r.unsubscribeAll(l), p.clear()
          }),
          a
        )
      }
      function K(e) {
        return e.hasOwnProperty('groupType')
      }
      function Q(e) {
        e.forEach((e) => {
          if (e.hasOwnProperty('propType')) {
            Object.keys(e.properties).forEach((t) => {
              const n = e.properties[t]
              void 0 !== n && void 0 !== n.destroy && n.destroy()
            })
          } else Q(e.definitions.value())
        })
      }
      n.d(t, 'A', function () {
        return K
      }),
        n.d(t, 'u', function () {
          return Q
        }),
        n.d(t, 'c', function () {
          return r
        }),
        n.d(t, 'd', function () {
          return i
        }),
        n.d(t, 'e', function () {
          return o
        }),
        n.d(t, 'i', function () {
          return l
        }),
        n.d(t, 'h', function () {
          return b
        }),
        n.d(t, 'j', function () {
          return v
        }),
        n.d(t, 'k', function () {
          return g
        }),
        n.d(t, 't', function () {
          return y
        }),
        n.d(t, 'q', function () {
          return V
        }),
        n.d(t, 's', function () {
          return S
        }),
        n.d(t, 'f', function () {
          return I
        }),
        n.d(t, 'n', function () {
          return L
        }),
        n.d(t, 'r', function () {
          return A
        }),
        n.d(t, 'p', function () {
          return D
        }),
        n.d(t, 'o', function () {
          return z
        }),
        n.d(t, 'g', function () {
          return H
        }),
        n.d(t, 'l', function () {
          return M
        }),
        n.d(t, 'm', function () {
          return N
        }),
        n.d(t, 'b', function () {
          return _
        }),
        n.d(t, 'a', function () {
          return x
        }),
        n.d(t, 'x', function () {
          return U
        }),
        n.d(t, 'w', function () {
          return W
        }),
        n.d(t, 'y', function () {
          return C
        }),
        n.d(t, 'v', function () {
          return B
        }),
        n.d(t, 'z', function () {
          return F
        })
    },
  },
])
