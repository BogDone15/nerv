!(function (e, t) {
	for (var i in t) e[i] = t[i];
})(
	window,
	(function (e) {
		function t(n) {
			if (i[n]) return i[n].exports;
			var r = (i[n] = { i: n, l: !1, exports: {} });
			return e[n].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
		}
		var i = {};
		return (
			(t.m = e),
			(t.c = i),
			(t.d = function (e, i, n) {
				t.o(e, i) || Object.defineProperty(e, i, { enumerable: !0, get: n });
			}),
			(t.r = function (e) {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
					Object.defineProperty(e, '__esModule', { value: !0 });
			}),
			(t.t = function (e, i) {
				var n, r;
				if ((1 & i && (e = t(e)), 8 & i)) return e;
				if (4 & i && 'object' == typeof e && e && e.__esModule) return e;
				if (
					(t.r((n = Object.create(null))),
					Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
					2 & i && 'string' != typeof e)
				)
					for (r in e)
						t.d(
							n,
							r,
							function (t) {
								return e[t];
							}.bind(null, r)
						);
				return n;
			}),
			(t.n = function (e) {
				var i =
					e && e.__esModule
						? function () {
								return e.default;
						  }
						: function () {
								return e;
						  };
				return t.d(i, 'a', i), i;
			}),
			(t.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}),
			(t.p = ''),
			t((t.s = 69))
		);
	})([
		function (e, t, i) {
			e.exports = i(88);
		},
		function (e, t, i) {
			e.exports = i(90);
		},
		function (e, t, i) {
			e.exports = i(79);
		},
		function (e, t, i) {
			e.exports = i(115);
		},
		function (e, t, i) {
			e.exports = i(120);
		},
		function (e, t, i) {
			e.exports = i(70);
		},
		function (e, t) {
			var i = (e.exports = { version: '2.6.10' });
			'number' == typeof __e && (__e = i);
		},
		function (e, t) {
			var i = (e.exports =
				'undefined' != typeof window && window.Math == Math
					? window
					: 'undefined' != typeof self && self.Math == Math
					? self
					: Function('return this')());
			'number' == typeof __g && (__g = i);
		},
		function (e, t, i) {
			e.exports = i(118);
		},
		function (e, t, i) {
			var n = i(7),
				r = i(6),
				o = i(23),
				s = i(16),
				a = i(18),
				l = 'prototype',
				h = function (e, t, i) {
					var c,
						u,
						_,
						d = e & h.F,
						f = e & h.G,
						p = e & h.S,
						m = e & h.P,
						v = e & h.B,
						g = e & h.W,
						A = f ? r : r[t] || (r[t] = {}),
						w = A[l],
						y = f ? n : p ? n[t] : (n[t] || {})[l];
					for (c in (f && (i = t), i))
						((u = !d && y && void 0 !== y[c]) && a(A, c)) ||
							((_ = u ? y[c] : i[c]),
							(A[c] =
								f && 'function' != typeof y[c]
									? i[c]
									: v && u
									? o(_, n)
									: g && y[c] == _
									? (function (e) {
											var t = function (t, i, n) {
												if (this instanceof e) {
													switch (arguments.length) {
														case 0:
															return new e();
														case 1:
															return new e(t);
														case 2:
															return new e(t, i);
													}
													return new e(t, i, n);
												}
												return e.apply(this, arguments);
											};
											return (t[l] = e[l]), t;
									  })(_)
									: m && 'function' == typeof _
									? o(Function.call, _)
									: _),
							m &&
								(((A.virtual || (A.virtual = {}))[c] = _),
								e & h.R && w && !w[c] && s(w, c, _)));
				};
			(h.F = 1),
				(h.G = 2),
				(h.S = 4),
				(h.P = 8),
				(h.B = 16),
				(h.W = 32),
				(h.U = 64),
				(h.R = 128),
				(e.exports = h);
		},
		function (e, t, i) {
			var n = i(40)('wks'),
				r = i(30),
				o = i(7).Symbol,
				s = 'function' == typeof o;
			(e.exports = function (e) {
				return n[e] || (n[e] = (s && o[e]) || (s ? o : r)('Symbol.' + e));
			}).store = n;
		},
		function (e, t, i) {
			var n = i(15);
			e.exports = function (e) {
				if (!n(e)) throw TypeError(e + ' is not an object!');
				return e;
			};
		},
		function (e, t, i) {
			e.exports = i(98);
		},
		function (e, t, i) {
			e.exports = !i(17)(function () {
				return (
					7 !=
					Object.defineProperty({}, 'a', {
						get: function () {
							return 7;
						},
					}).a
				);
			});
		},
		function (e, t, i) {
			var n = i(11),
				r = i(51),
				o = i(37),
				s = Object.defineProperty;
			t.f = i(13)
				? Object.defineProperty
				: function (e, t, i) {
						if ((n(e), (t = o(t, !0)), n(i), r))
							try {
								return s(e, t, i);
							} catch (e) {}
						if ('get' in i || 'set' in i)
							throw TypeError('Accessors not supported!');
						return 'value' in i && (e[t] = i.value), e;
				  };
		},
		function (e, t) {
			e.exports = function (e) {
				return 'object' == typeof e ? null !== e : 'function' == typeof e;
			};
		},
		function (e, t, i) {
			var n = i(14),
				r = i(28);
			e.exports = i(13)
				? function (e, t, i) {
						return n.f(e, t, r(1, i));
				  }
				: function (e, t, i) {
						return (e[t] = i), e;
				  };
		},
		function (e, t) {
			e.exports = function (e) {
				try {
					return !!e();
				} catch (e) {
					return !0;
				}
			};
		},
		function (e, t) {
			var i = {}.hasOwnProperty;
			e.exports = function (e, t) {
				return i.call(e, t);
			};
		},
		function (e, t, i) {
			var n = i(54),
				r = i(26);
			e.exports = function (e) {
				return n(r(e));
			};
		},
		function (e, t, i) {
			e.exports = i(112);
		},
		function (e, t, i) {
			'use strict';
			var n, r, o, s, a, l;
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(n = {
					fullscreenEnabled: 0,
					fullscreenElement: 1,
					requestFullscreen: 2,
					exitFullscreen: 3,
					fullscreenchange: 4,
					fullscreenerror: 5,
				}),
				(r = [
					'webkitFullscreenEnabled',
					'webkitFullscreenElement',
					'webkitRequestFullscreen',
					'webkitExitFullscreen',
					'webkitfullscreenchange',
					'webkitfullscreenerror',
				]),
				(o = [
					'mozFullScreenEnabled',
					'mozFullScreenElement',
					'mozRequestFullScreen',
					'mozCancelFullScreen',
					'mozfullscreenchange',
					'mozfullscreenerror',
				]),
				(s = [
					'msFullscreenEnabled',
					'msFullscreenElement',
					'msRequestFullscreen',
					'msExitFullscreen',
					'MSFullscreenChange',
					'MSFullscreenError',
				]),
				(a =
					'undefined' != typeof window && void 0 !== window.document
						? window.document
						: {}),
				(l =
					('fullscreenEnabled' in a && Object.keys(n)) ||
					(r[0] in a && r) ||
					(o[0] in a && o) ||
					(s[0] in a && s) ||
					[]),
				(t.default = {
					requestFullscreen: function (e) {
						return e[l[n.requestFullscreen]]();
					},
					requestFullscreenFunction: function (e) {
						return e[l[n.requestFullscreen]];
					},
					get exitFullscreen() {
						return a[l[n.exitFullscreen]].bind(a);
					},
					addEventListener: function (e, t, i) {
						return a.addEventListener(l[n[e]], t, i);
					},
					removeEventListener: function (e, t, i) {
						return a.removeEventListener(l[n[e]], t, i);
					},
					get fullscreenEnabled() {
						return !!a[l[n.fullscreenEnabled]];
					},
					set fullscreenEnabled(e) {},
					get fullscreenElement() {
						return a[l[n.fullscreenElement]];
					},
					set fullscreenElement(e) {},
					get onfullscreenchange() {
						return a[('on' + l[n.fullscreenchange]).toLowerCase()];
					},
					set onfullscreenchange(e) {
						return (a[('on' + l[n.fullscreenchange]).toLowerCase()] = e);
					},
					get onfullscreenerror() {
						return a[('on' + l[n.fullscreenerror]).toLowerCase()];
					},
					set onfullscreenerror(e) {
						return (a[('on' + l[n.fullscreenerror]).toLowerCase()] = e);
					},
				});
		},
		function (e, t) {
			e.exports = !0;
		},
		function (e, t, i) {
			var n = i(27);
			e.exports = function (e, t, i) {
				if ((n(e), void 0 === t)) return e;
				switch (i) {
					case 1:
						return function (i) {
							return e.call(t, i);
						};
					case 2:
						return function (i, n) {
							return e.call(t, i, n);
						};
					case 3:
						return function (i, n, r) {
							return e.call(t, i, n, r);
						};
				}
				return function () {
					return e.apply(t, arguments);
				};
			};
		},
		function (e, t) {
			e.exports = {};
		},
		function (e, t) {
			var i = {}.toString;
			e.exports = function (e) {
				return i.call(e).slice(8, -1);
			};
		},
		function (e, t) {
			e.exports = function (e) {
				if (null == e) throw TypeError("Can't call method on  " + e);
				return e;
			};
		},
		function (e, t) {
			e.exports = function (e) {
				if ('function' != typeof e) throw TypeError(e + ' is not a function!');
				return e;
			};
		},
		function (e, t) {
			e.exports = function (e, t) {
				return {
					enumerable: !(1 & e),
					configurable: !(2 & e),
					writable: !(4 & e),
					value: t,
				};
			};
		},
		function (e, t, i) {
			var n = i(53),
				r = i(41);
			e.exports =
				Object.keys ||
				function (e) {
					return n(e, r);
				};
		},
		function (e, t) {
			var i = 0,
				n = Math.random();
			e.exports = function (e) {
				return 'Symbol('.concat(
					void 0 === e ? '' : e,
					')_',
					(++i + n).toString(36)
				);
			};
		},
		function (e, t, i) {
			var n = i(14).f,
				r = i(18),
				o = i(10)('toStringTag');
			e.exports = function (e, t, i) {
				e &&
					!r((e = i ? e : e.prototype), o) &&
					n(e, o, { configurable: !0, value: t });
			};
		},
		function (e, t, i) {
			var n = i(26);
			e.exports = function (e) {
				return Object(n(e));
			};
		},
		function (e, t) {
			t.f = {}.propertyIsEnumerable;
		},
		function (e, t, i) {
			'use strict';
			var n = i(71)(!0);
			i(50)(
				String,
				'String',
				function (e) {
					(this._t = e + ''), (this._i = 0);
				},
				function () {
					var e,
						t = this._t,
						i = this._i;
					return i >= t.length
						? { value: void 0, done: !0 }
						: ((e = n(t, i)), (this._i += e.length), { value: e, done: !1 });
				}
			);
		},
		function (e, t) {
			var i = Math.ceil,
				n = Math.floor;
			e.exports = function (e) {
				return isNaN((e = +e)) ? 0 : (0 < e ? n : i)(e);
			};
		},
		function (e, t, i) {
			var n = i(15),
				r = i(7).document,
				o = n(r) && n(r.createElement);
			e.exports = function (e) {
				return o ? r.createElement(e) : {};
			};
		},
		function (e, t, i) {
			var n = i(15);
			e.exports = function (e, t) {
				if (!n(e)) return e;
				var i, r;
				if (t && 'function' == typeof (i = e.toString) && !n((r = i.call(e))))
					return r;
				if ('function' == typeof (i = e.valueOf) && !n((r = i.call(e))))
					return r;
				if (!t && 'function' == typeof (i = e.toString) && !n((r = i.call(e))))
					return r;
				throw TypeError("Can't convert object to primitive value");
			};
		},
		function (e, t, i) {
			var n = i(11),
				r = i(73),
				o = i(41),
				s = i(39)('IE_PROTO'),
				a = function () {},
				l = 'prototype',
				h = function () {
					var e,
						t = i(36)('iframe'),
						n = o.length;
					for (
						t.style.display = 'none',
							i(56).appendChild(t),
							t.src = 'javascript:',
							(e = t.contentWindow.document).open(),
							e.write('<script>document.F=Object</script>'),
							e.close(),
							h = e.F;
						n--;

					)
						delete h[l][o[n]];
					return h();
				};
			e.exports =
				Object.create ||
				function (e, t) {
					var i;
					return (
						null !== e
							? ((a[l] = n(e)), (i = new a()), (a[l] = null), (i[s] = e))
							: (i = h()),
						void 0 === t ? i : r(i, t)
					);
				};
		},
		function (e, t, i) {
			var n = i(40)('keys'),
				r = i(30);
			e.exports = function (e) {
				return n[e] || (n[e] = r(e));
			};
		},
		function (e, t, i) {
			var n = i(6),
				r = i(7),
				o = '__core-js_shared__',
				s = r[o] || (r[o] = {});
			(e.exports = function (e, t) {
				return s[e] || (s[e] = void 0 !== t ? t : {});
			})('versions', []).push({
				version: n.version,
				mode: i(22) ? 'pure' : 'global',
				copyright: 'В© 2019 Denis Pushkarev (zloirock.ru)',
			});
		},
		function (e, t) {
			e.exports =
				'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
					','
				);
		},
		function (e, t, i) {
			var n, r, o, s, a, l, h, c, u;
			for (
				i(76),
					n = i(7),
					r = i(16),
					o = i(24),
					s = i(10)('toStringTag'),
					a =
						'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
							','
						),
					l = 0;
				l < a.length;
				l++
			)
				(u = (c = n[(h = a[l])]) && c.prototype) && !u[s] && r(u, s, h),
					(o[h] = o.Array);
		},
		function (e, t, i) {
			t.f = i(10);
		},
		function (e, t, i) {
			var n = i(7),
				r = i(6),
				o = i(22),
				s = i(43),
				a = i(14).f;
			e.exports = function (e) {
				var t = r.Symbol || (r.Symbol = o ? {} : n.Symbol || {});
				'_' == e[0] || e in t || a(t, e, { value: s.f(e) });
			};
		},
		function (e, t) {
			t.f = Object.getOwnPropertySymbols;
		},
		function (e, t) {
			e.exports =
				'\t\n\v\f\r В бљЂб ЋвЂЂвЂЃвЂ‚вЂѓвЂ„вЂ…вЂ†вЂ‡вЂ€вЂ‰вЂЉвЂЇвЃџгЂЂ\u2028\u2029\ufeff';
		},
		function (e, t, i) {
			'use strict';
			function n(e) {
				var t, i;
				(this.promise = new e(function (e, n) {
					if (void 0 !== t || void 0 !== i)
						throw TypeError('Bad Promise constructor');
					(t = e), (i = n);
				})),
					(this.resolve = r(t)),
					(this.reject = r(i));
			}
			var r = i(27);
			e.exports.f = function (e) {
				return new n(e);
			};
		},
		function (e, t, i) {
			e.exports = i(93);
		},
		function (e, t, i) {
			e.exports = i(95);
		},
		function (e, t, i) {
			'use strict';
			var n = i(22),
				r = i(9),
				o = i(52),
				s = i(16),
				a = i(24),
				l = i(72),
				h = i(31),
				c = i(57),
				u = i(10)('iterator'),
				_ = !([].keys && 'next' in [].keys()),
				d = 'keys',
				f = 'values',
				p = function () {
					return this;
				};
			e.exports = function (e, t, i, m, v, g, A) {
				var w, y, b, E, x, k, B, T, M, O, R, Q;
				if (
					(l(i, t, m),
					(y = t + ' Iterator'),
					(b = v == f),
					(E = !(w = function (e) {
						if (!_ && e in x) return x[e];
						switch (e) {
							case d:
							case f:
								return function () {
									return new i(this, e);
								};
						}
						return function () {
							return new i(this, e);
						};
					})),
					(x = e.prototype),
					(B = (k = x[u] || x['@@iterator'] || (v && x[v])) || w(v)),
					(T = v ? (b ? w('entries') : B) : void 0),
					(M = ('Array' == t && x.entries) || k) &&
						(Q = c(M.call(new e()))) !== Object.prototype &&
						Q.next &&
						(h(Q, y, !0), n || 'function' == typeof Q[u] || s(Q, u, p)),
					b &&
						k &&
						k.name !== f &&
						((E = !0),
						(B = function () {
							return k.call(this);
						})),
					(n && !A) || (!_ && !E && x[u]) || s(x, u, B),
					(a[t] = B),
					(a[y] = p),
					v)
				)
					if (
						((O = { values: b ? B : w(f), keys: g ? B : w(d), entries: T }), A)
					)
						for (R in O) R in x || o(x, R, O[R]);
					else r(r.P + r.F * (_ || E), t, O);
				return O;
			};
		},
		function (e, t, i) {
			e.exports =
				!i(13) &&
				!i(17)(function () {
					return (
						7 !=
						Object.defineProperty(i(36)('div'), 'a', {
							get: function () {
								return 7;
							},
						}).a
					);
				});
		},
		function (e, t, i) {
			e.exports = i(16);
		},
		function (e, t, i) {
			var n = i(18),
				r = i(19),
				o = i(74)(!1),
				s = i(39)('IE_PROTO');
			e.exports = function (e, t) {
				var i,
					a = r(e),
					l = 0,
					h = [];
				for (i in a) i != s && n(a, i) && h.push(i);
				for (; t.length > l; ) n(a, (i = t[l++])) && (~o(h, i) || h.push(i));
				return h;
			};
		},
		function (e, t, i) {
			var n = i(25);
			e.exports = Object('z').propertyIsEnumerable(0)
				? Object
				: function (e) {
						return 'String' == n(e) ? e.split('') : Object(e);
				  };
		},
		function (e, t, i) {
			var n = i(35),
				r = Math.min;
			e.exports = function (e) {
				return 0 < e ? r(n(e), 9007199254740991) : 0;
			};
		},
		function (e, t, i) {
			var n = i(7).document;
			e.exports = n && n.documentElement;
		},
		function (e, t, i) {
			var n = i(18),
				r = i(32),
				o = i(39)('IE_PROTO'),
				s = Object.prototype;
			e.exports =
				Object.getPrototypeOf ||
				function (e) {
					return (
						(e = r(e)),
						n(e, o)
							? e[o]
							: 'function' == typeof e.constructor && e instanceof e.constructor
							? e.constructor.prototype
							: e instanceof Object
							? s
							: null
					);
				};
		},
		function (e, t, i) {
			var n = i(53),
				r = i(41).concat('length', 'prototype');
			t.f =
				Object.getOwnPropertyNames ||
				function (e) {
					return n(e, r);
				};
		},
		function (e, t, i) {
			var n = i(33),
				r = i(28),
				o = i(19),
				s = i(37),
				a = i(18),
				l = i(51),
				h = Object.getOwnPropertyDescriptor;
			t.f = i(13)
				? h
				: function (e, t) {
						if (((e = o(e)), (t = s(t, !0)), l))
							try {
								return h(e, t);
							} catch (e) {}
						if (a(e, t)) return r(!n.f.call(e, t), e[t]);
				  };
		},
		function (e, t) {},
		function (e, t, i) {
			var n = i(9),
				r = i(26),
				o = i(17),
				s = i(46),
				a = '[' + s + ']',
				l = RegExp('^' + a + a + '*'),
				h = RegExp(a + a + '*$'),
				c = function (e, t, i) {
					var r = {},
						a = o(function () {
							return !!s[e]() || 'вЂ‹В…' != 'вЂ‹В…'[e]();
						}),
						l = (r[e] = a ? t(u) : s[e]);
					i && (r[i] = l), n(n.P + n.F * a, 'String', r);
				},
				u = (c.trim = function (e, t) {
					return (
						(e = r(e) + ''),
						1 & t && (e = e.replace(l, '')),
						2 & t && (e = e.replace(h, '')),
						e
					);
				});
			e.exports = c;
		},
		function (e, t, i) {
			var n = i(25),
				r = i(10)('toStringTag'),
				o =
					'Arguments' ==
					n(
						(function () {
							return arguments;
						})()
					);
			e.exports = function (e) {
				var t, i, s;
				return void 0 === e
					? 'Undefined'
					: null === e
					? 'Null'
					: 'string' ==
					  typeof (i = (function (e, t) {
							try {
								return e[t];
							} catch (e) {}
					  })((t = Object(e)), r))
					? i
					: o
					? n(t)
					: 'Object' == (s = n(t)) && 'function' == typeof t.callee
					? 'Arguments'
					: s;
			};
		},
		function (e, t, i) {
			var n = i(62),
				r = i(10)('iterator'),
				o = i(24);
			e.exports = i(6).getIteratorMethod = function (e) {
				if (null != e) return e[r] || e['@@iterator'] || o[n(e)];
			};
		},
		function (e, t, i) {
			var n = i(11),
				r = i(27),
				o = i(10)('species');
			e.exports = function (e, t) {
				var i,
					s = n(e).constructor;
				return void 0 === s || null == (i = n(s)[o]) ? t : r(i);
			};
		},
		function (e, t, i) {
			var n,
				r,
				o,
				s = i(23),
				a = i(104),
				l = i(56),
				h = i(36),
				c = i(7),
				u = c.process,
				_ = c.setImmediate,
				d = c.clearImmediate,
				f = c.MessageChannel,
				p = c.Dispatch,
				m = 0,
				v = {},
				g = 'onreadystatechange',
				A = function () {
					var e,
						t = +this;
					v.hasOwnProperty(t) && ((e = v[t]), delete v[t], e());
				},
				w = function (e) {
					A.call(e.data);
				};
			(_ && d) ||
				((_ = function (e) {
					for (var t = [], i = 1; i < arguments.length; )
						t.push(arguments[i++]);
					return (
						(v[++m] = function () {
							a('function' == typeof e ? e : Function(e), t);
						}),
						n(m),
						m
					);
				}),
				(d = function (e) {
					delete v[e];
				}),
				'process' == i(25)(u)
					? (n = function (e) {
							u.nextTick(s(A, e, 1));
					  })
					: p && p.now
					? (n = function (e) {
							p.now(s(A, e, 1));
					  })
					: f
					? ((o = (r = new f()).port2),
					  (r.port1.onmessage = w),
					  (n = s(o.postMessage, o, 1)))
					: c.addEventListener &&
					  'function' == typeof postMessage &&
					  !c.importScripts
					? ((n = function (e) {
							c.postMessage(e + '', '*');
					  }),
					  c.addEventListener('message', w, !1))
					: (n =
							g in h('script')
								? function (e) {
										l.appendChild(h('script'))[g] = function () {
											l.removeChild(this), A.call(e);
										};
								  }
								: function (e) {
										setTimeout(s(A, e, 1), 0);
								  })),
				(e.exports = { set: _, clear: d });
		},
		function (e, t) {
			e.exports = function (e) {
				try {
					return { e: !1, v: e() };
				} catch (e) {
					return { e: !0, v: e };
				}
			};
		},
		function (e, t, i) {
			var n = i(11),
				r = i(15),
				o = i(47);
			e.exports = function (e, t) {
				var i;
				return (
					n(e),
					r(t) && t.constructor === e
						? t
						: ((0, (i = o.f(e)).resolve)(t), i.promise)
				);
			};
		},
		function (e, t, i) {
			e.exports = i(123);
		},
		function (e, t, i) {
			e.exports = i(125);
		},
		function (e, t, i) {
			i(34), i(42), (e.exports = i(43).f('iterator'));
		},
		function (e, t, i) {
			var n = i(35),
				r = i(26);
			e.exports = function (e) {
				return function (t, i) {
					var o,
						s,
						a = r(t) + '',
						l = n(i),
						h = a.length;
					return l < 0 || h <= l
						? e
							? ''
							: void 0
						: (o = a.charCodeAt(l)) < 55296 ||
						  56319 < o ||
						  l + 1 === h ||
						  (s = a.charCodeAt(l + 1)) < 56320 ||
						  57343 < s
						? e
							? a[0 | l]
							: o
						: e
						? a.slice(l, l + 2)
						: s - 56320 + ((o - 55296) << 10) + 65536;
				};
			};
		},
		function (e, t, i) {
			'use strict';
			var n = i(38),
				r = i(28),
				o = i(31),
				s = {};
			i(16)(s, i(10)('iterator'), function () {
				return this;
			}),
				(e.exports = function (e, t, i) {
					(e.prototype = n(s, { next: r(1, i) })), o(e, t + ' Iterator');
				});
		},
		function (e, t, i) {
			var n = i(14),
				r = i(11),
				o = i(29);
			e.exports = i(13)
				? Object.defineProperties
				: function (e, t) {
						var i, s, a, l;
						for (r(e), s = (i = o(t)).length, a = 0; a < s; )
							n.f(e, (l = i[a++]), t[l]);
						return e;
				  };
		},
		function (e, t, i) {
			var n = i(19),
				r = i(55),
				o = i(75);
			e.exports = function (e) {
				return function (t, i, s) {
					var a,
						l = n(t),
						h = r(l.length),
						c = o(s, h);
					if (e && i != i) {
						for (; c < h; ) if ((a = l[c++]) != a) return !0;
					} else
						for (; c < h; c++)
							if ((e || c in l) && l[c] === i) return e || c || 0;
					return !e && -1;
				};
			};
		},
		function (e, t, i) {
			var n = i(35),
				r = Math.max,
				o = Math.min;
			e.exports = function (e, t) {
				return (e = n(e)) < 0 ? r(e + t, 0) : o(e, t);
			};
		},
		function (e, t, i) {
			'use strict';
			var n = i(77),
				r = i(78),
				o = i(24),
				s = i(19);
			(e.exports = i(50)(
				Array,
				'Array',
				function (e, t) {
					(this._t = s(e)), (this._i = 0), (this._k = t);
				},
				function () {
					var e = this._t,
						t = this._k,
						i = this._i++;
					return !e || i >= e.length
						? ((this._t = void 0), r(1))
						: r(0, 'keys' == t ? i : 'values' == t ? e[i] : [i, e[i]]);
				},
				'values'
			)),
				(o.Arguments = o.Array),
				n('keys'),
				n('values'),
				n('entries');
		},
		function (e, t) {
			e.exports = function () {};
		},
		function (e, t) {
			e.exports = function (e, t) {
				return { value: t, done: !!e };
			};
		},
		function (e, t, i) {
			i(80), i(60), i(85), i(86), (e.exports = i(6).Symbol);
		},
		function (e, t, i) {
			'use strict';
			var n,
				r,
				o,
				s,
				a,
				l = i(7),
				h = i(18),
				c = i(13),
				u = i(9),
				_ = i(52),
				d = i(81).KEY,
				f = i(17),
				p = i(40),
				m = i(31),
				v = i(30),
				g = i(10),
				A = i(43),
				w = i(44),
				y = i(82),
				b = i(83),
				E = i(11),
				x = i(15),
				k = i(32),
				B = i(19),
				T = i(37),
				M = i(28),
				O = i(38),
				R = i(84),
				Q = i(59),
				C = i(45),
				I = i(14),
				D = i(29),
				z = Q.f,
				S = I.f,
				F = R.f,
				U = l.Symbol,
				L = l.JSON,
				P = L && L.stringify,
				N = 'prototype',
				j = g('_hidden'),
				q = g('toPrimitive'),
				H = {}.propertyIsEnumerable,
				G = p('symbol-registry'),
				Y = p('symbols'),
				V = p('op-symbols'),
				W = Object[N],
				X = 'function' == typeof U && !!C.f,
				J = l.QObject,
				Z = !J || !J[N] || !J[N].findChild,
				K =
					c &&
					f(function () {
						return (
							7 !=
							O(
								S({}, 'a', {
									get: function () {
										return S(this, 'a', { value: 7 }).a;
									},
								})
							).a
						);
					})
						? function (e, t, i) {
								var n = z(W, t);
								n && delete W[t], S(e, t, i), n && e !== W && S(W, t, n);
						  }
						: S,
				$ = function (e) {
					var t = (Y[e] = O(U[N]));
					return (t._k = e), t;
				},
				ee =
					X && 'symbol' == typeof U.iterator
						? function (e) {
								return 'symbol' == typeof e;
						  }
						: function (e) {
								return e instanceof U;
						  },
				te = function (e, t, i) {
					return (
						e === W && te(V, t, i),
						E(e),
						(t = T(t, !0)),
						E(i),
						h(Y, t)
							? (i.enumerable
									? (h(e, j) && e[j][t] && (e[j][t] = !1),
									  (i = O(i, { enumerable: M(0, !1) })))
									: (h(e, j) || S(e, j, M(1, {})), (e[j][t] = !0)),
							  K(e, t, i))
							: S(e, t, i)
					);
				},
				ie = function (e, t) {
					var i, n, r, o;
					for (E(e), n = 0, r = (i = y((t = B(t)))).length; n < r; )
						te(e, (o = i[n++]), t[o]);
					return e;
				},
				ne = function (e) {
					var t = H.call(this, (e = T(e, !0)));
					return (
						!(this === W && h(Y, e) && !h(V, e)) &&
						(!(t || !h(this, e) || !h(Y, e) || (h(this, j) && this[j][e])) || t)
					);
				},
				re = function (e, t) {
					if (((e = B(e)), (t = T(t, !0)), e !== W || !h(Y, t) || h(V, t))) {
						var i = z(e, t);
						return (
							!i || !h(Y, t) || (h(e, j) && e[j][t]) || (i.enumerable = !0), i
						);
					}
				},
				oe = function (e) {
					for (var t, i = F(B(e)), n = [], r = 0; i.length > r; )
						h(Y, (t = i[r++])) || t == j || t == d || n.push(t);
					return n;
				},
				se = function (e) {
					for (
						var t, i = e === W, n = F(i ? V : B(e)), r = [], o = 0;
						n.length > o;

					)
						!h(Y, (t = n[o++])) || (i && !h(W, t)) || r.push(Y[t]);
					return r;
				};
			for (
				X ||
					(_(
						(U = function (e) {
							var t, i;
							if (this instanceof U)
								throw TypeError('Symbol is not a constructor!');
							return (
								(t = v(0 < arguments.length ? e : void 0)),
								(i = function (e) {
									this === W && i.call(V, e),
										h(this, j) && h(this[j], t) && (this[j][t] = !1),
										K(this, t, M(1, e));
								}),
								c && Z && K(W, t, { configurable: !0, set: i }),
								$(t)
							);
						})[N],
						'toString',
						function () {
							return this._k;
						}
					),
					(Q.f = re),
					(I.f = te),
					(i(58).f = R.f = oe),
					(i(33).f = ne),
					(C.f = se),
					c && !i(22) && _(W, 'propertyIsEnumerable', ne, !0),
					(A.f = function (e) {
						return $(g(e));
					})),
					u(u.G + u.W + u.F * !X, { Symbol: U }),
					n =
						'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
							','
						),
					r = 0;
				n.length > r;

			)
				g(n[r++]);
			for (o = D(g.store), s = 0; o.length > s; ) w(o[s++]);
			u(u.S + u.F * !X, 'Symbol', {
				for: function (e) {
					return h(G, (e += '')) ? G[e] : (G[e] = U(e));
				},
				keyFor: function (e) {
					if (!ee(e)) throw TypeError(e + ' is not a symbol!');
					for (var t in G) if (G[t] === e) return t;
				},
				useSetter: function () {
					Z = !0;
				},
				useSimple: function () {
					Z = !1;
				},
			}),
				u(u.S + u.F * !X, 'Object', {
					create: function (e, t) {
						return void 0 === t ? O(e) : ie(O(e), t);
					},
					defineProperty: te,
					defineProperties: ie,
					getOwnPropertyDescriptor: re,
					getOwnPropertyNames: oe,
					getOwnPropertySymbols: se,
				}),
				(a = f(function () {
					C.f(1);
				})),
				u(u.S + u.F * a, 'Object', {
					getOwnPropertySymbols: function (e) {
						return C.f(k(e));
					},
				}),
				L &&
					u(
						u.S +
							u.F *
								(!X ||
									f(function () {
										var e = U();
										return (
											'[null]' != P([e]) ||
											'{}' != P({ a: e }) ||
											'{}' != P(Object(e))
										);
									})),
						'JSON',
						{
							stringify: function (e) {
								for (var t, i, n = [e], r = 1; r < arguments.length; )
									n.push(arguments[r++]);
								if (((i = t = n[1]), (x(t) || void 0 !== e) && !ee(e)))
									return (
										b(t) ||
											(t = function (e, t) {
												if (
													('function' == typeof i && (t = i.call(this, e, t)),
													!ee(t))
												)
													return t;
											}),
										(n[1] = t),
										P.apply(L, n)
									);
							},
						}
					),
				U[N][q] || i(16)(U[N], q, U[N].valueOf),
				m(U, 'Symbol'),
				m(Math, 'Math', !0),
				m(l.JSON, 'JSON', !0);
		},
		function (e, t, i) {
			var n = i(30)('meta'),
				r = i(15),
				o = i(18),
				s = i(14).f,
				a = 0,
				l =
					Object.isExtensible ||
					function () {
						return !0;
					},
				h = !i(17)(function () {
					return l(Object.preventExtensions({}));
				}),
				c = function (e) {
					s(e, n, { value: { i: 'O' + ++a, w: {} } });
				},
				u = (e.exports = {
					KEY: n,
					NEED: !1,
					fastKey: function (e, t) {
						if (!r(e))
							return 'symbol' == typeof e
								? e
								: ('string' == typeof e ? 'S' : 'P') + e;
						if (!o(e, n)) {
							if (!l(e)) return 'F';
							if (!t) return 'E';
							c(e);
						}
						return e[n].i;
					},
					getWeak: function (e, t) {
						if (!o(e, n)) {
							if (!l(e)) return !0;
							if (!t) return !1;
							c(e);
						}
						return e[n].w;
					},
					onFreeze: function (e) {
						return h && u.NEED && l(e) && !o(e, n) && c(e), e;
					},
				});
		},
		function (e, t, i) {
			var n = i(29),
				r = i(45),
				o = i(33);
			e.exports = function (e) {
				var t,
					i,
					s,
					a,
					l = n(e),
					h = r.f;
				if (h)
					for (t = h(e), i = o.f, s = 0; t.length > s; )
						i.call(e, (a = t[s++])) && l.push(a);
				return l;
			};
		},
		function (e, t, i) {
			var n = i(25);
			e.exports =
				Array.isArray ||
				function (e) {
					return 'Array' == n(e);
				};
		},
		function (e, t, i) {
			var n = i(19),
				r = i(58).f,
				o = {}.toString,
				s =
					'object' == typeof window && window && Object.getOwnPropertyNames
						? Object.getOwnPropertyNames(window)
						: [];
			e.exports.f = function (e) {
				return s && '[object Window]' == o.call(e)
					? (function (e) {
							try {
								return r(e);
							} catch (e) {
								return s.slice();
							}
					  })(e)
					: r(n(e));
			};
		},
		function (e, t, i) {
			i(44)('asyncIterator');
		},
		function (e, t, i) {
			i(44)('observable');
		},
		function (e, t, i) {},
		function (e, t, i) {
			i(89);
			var n = i(6).Object;
			e.exports = function (e, t, i) {
				return n.defineProperty(e, t, i);
			};
		},
		function (e, t, i) {
			var n = i(9);
			n(n.S + n.F * !i(13), 'Object', { defineProperty: i(14).f });
		},
		function (e, t, i) {
			i(91), (e.exports = i(6).parseInt);
		},
		function (e, t, i) {
			var n = i(9),
				r = i(92);
			n(n.G + n.F * (parseInt != r), { parseInt: r });
		},
		function (e, t, i) {
			var n = i(7).parseInt,
				r = i(61).trim,
				o = i(46),
				s = /^[-+]?0[xX]/;
			e.exports =
				8 !== n(o + '08') || 22 !== n(o + '0x16')
					? function (e, t) {
							var i = r(e + '', 3);
							return n(i, t >>> 0 || (s.test(i) ? 16 : 10));
					  }
					: n;
		},
		function (e, t, i) {
			i(94), (e.exports = i(6).Date.now);
		},
		function (e, t, i) {
			var n = i(9);
			n(n.S, 'Date', {
				now: function () {
					return new Date().getTime();
				},
			});
		},
		function (e, t, i) {
			i(96), (e.exports = i(6).parseFloat);
		},
		function (e, t, i) {
			var n = i(9),
				r = i(97);
			n(n.G + n.F * (parseFloat != r), { parseFloat: r });
		},
		function (e, t, i) {
			var n = i(7).parseFloat,
				r = i(61).trim;
			e.exports =
				1 / n(i(46) + '-0') != -1 / 0
					? function (e) {
							var t = r(e + '', 3),
								i = n(t);
							return 0 === i && '-' == t[0] ? -0 : i;
					  }
					: n;
		},
		function (e, t, i) {
			i(60), i(34), i(42), i(99), i(110), i(111), (e.exports = i(6).Promise);
		},
		function (e, t, i) {
			'use strict';
			var n,
				r,
				o,
				s,
				a = i(22),
				l = i(7),
				h = i(23),
				c = i(62),
				u = i(9),
				_ = i(15),
				d = i(27),
				f = i(100),
				p = i(101),
				m = i(64),
				v = i(65).set,
				g = i(105)(),
				A = i(47),
				w = i(66),
				y = i(106),
				b = i(67),
				E = 'Promise',
				x = l.TypeError,
				k = l.process,
				B = k && k.versions,
				T = (B && B.v8) || '',
				M = l[E],
				O = 'process' == c(k),
				R = function () {},
				Q = (r = A.f),
				C = !!(function () {
					var e, t;
					try {
						return (
							(t = ((e = M.resolve(1)).constructor = {})[i(10)('species')] =
								function (e) {
									e(R, R);
								}),
							(O || 'function' == typeof PromiseRejectionEvent) &&
								e.then(R) instanceof t &&
								T.indexOf('6.6') &&
								!~y.indexOf('Chrome/66')
						);
					} catch (e) {}
				})(),
				I = function (e) {
					var t;
					return !(!_(e) || 'function' != typeof (t = e.then)) && t;
				},
				D = function (e, t) {
					if (!e._n) {
						e._n = !0;
						var i = e._c;
						g(function () {
							for (
								var n = e._v,
									r = 1 == e._s,
									o = 0,
									s = function (t) {
										var i,
											o,
											s,
											a = r ? t.ok : t.fail,
											l = t.resolve,
											h = t.reject,
											c = t.domain;
										try {
											a
												? (r || (2 == e._h && F(e), (e._h = 1)),
												  !0 === a
														? (i = n)
														: (c && c.enter(),
														  (i = a(n)),
														  c && (c.exit(), (s = !0))),
												  i === t.promise
														? h(x('Promise-chain cycle'))
														: (o = I(i))
														? o.call(i, l, h)
														: l(i))
												: h(n);
										} catch (t) {
											c && !s && c.exit(), h(t);
										}
									};
								i.length > o;

							)
								s(i[o++]);
							(e._c = []), (e._n = !1), t && !e._h && z(e);
						});
					}
				},
				z = function (e) {
					v.call(l, function () {
						var t,
							i,
							n,
							r = e._v,
							o = S(e);
						if (
							(o &&
								((t = w(function () {
									O
										? k.emit('unhandledRejection', r, e)
										: (i = l.onunhandledrejection)
										? i({ promise: e, reason: r })
										: (n = l.console) &&
										  n.error &&
										  n.error('Unhandled promise rejection', r);
								})),
								(e._h = O || S(e) ? 2 : 1)),
							(e._a = void 0),
							o && t.e)
						)
							throw t.v;
					});
				},
				S = function (e) {
					return 1 !== e._h && 0 === (e._a || e._c).length;
				},
				F = function (e) {
					v.call(l, function () {
						var t;
						O
							? k.emit('rejectionHandled', e)
							: (t = l.onrejectionhandled) && t({ promise: e, reason: e._v });
					});
				},
				U = function (e) {
					var t = this;
					t._d ||
						((t._d = !0),
						((t = t._w || t)._v = e),
						(t._s = 2),
						t._a || (t._a = t._c.slice()),
						D(t, !0));
				},
				L = function (e) {
					var t,
						i = this;
					if (!i._d) {
						(i._d = !0), (i = i._w || i);
						try {
							if (i === e) throw x("Promise can't be resolved itself");
							(t = I(e))
								? g(function () {
										var n = { _w: i, _d: !1 };
										try {
											t.call(e, h(L, n, 1), h(U, n, 1));
										} catch (e) {
											U.call(n, e);
										}
								  })
								: ((i._v = e), (i._s = 1), D(i, !1));
						} catch (e) {
							U.call({ _w: i, _d: !1 }, e);
						}
					}
				};
			C ||
				((M = function e(t) {
					f(this, M, E, '_h'), d(t), n.call(this);
					try {
						t(h(L, this, 1), h(U, this, 1));
					} catch (e) {
						U.call(this, e);
					}
				}),
				((n = function (e) {
					(this._c = []),
						(this._a = void 0),
						(this._s = 0),
						(this._d = !1),
						(this._v = void 0),
						(this._h = 0),
						(this._n = !1);
				}).prototype = i(107)(M.prototype, {
					then: function (e, t) {
						var i = Q(m(this, M));
						return (
							(i.ok = 'function' != typeof e || e),
							(i.fail = 'function' == typeof t && t),
							(i.domain = O ? k.domain : void 0),
							this._c.push(i),
							this._a && this._a.push(i),
							this._s && D(this, !1),
							i.promise
						);
					},
					catch: function (e) {
						return this.then(void 0, e);
					},
				})),
				(o = function () {
					var e = new n();
					(this.promise = e),
						(this.resolve = h(L, e, 1)),
						(this.reject = h(U, e, 1));
				}),
				(A.f = Q =
					function (e) {
						return e === M || e === s ? new o(e) : r(e);
					})),
				u(u.G + u.W + u.F * !C, { Promise: M }),
				i(31)(M, E),
				i(108)(E),
				(s = i(6)[E]),
				u(u.S + u.F * !C, E, {
					reject: function (e) {
						var t = Q(this);
						return (0, t.reject)(e), t.promise;
					},
				}),
				u(u.S + u.F * (a || !C), E, {
					resolve: function (e) {
						return b(a && this === s ? M : this, e);
					},
				}),
				u(
					u.S +
						u.F *
							!(
								C &&
								i(109)(function (e) {
									M.all(e).catch(R);
								})
							),
					E,
					{
						all: function (e) {
							var t = this,
								i = Q(t),
								n = i.resolve,
								r = i.reject,
								o = w(function () {
									var i = [],
										o = 0,
										s = 1;
									p(e, !1, function (e) {
										var a = o++,
											l = !1;
										i.push(void 0),
											s++,
											t.resolve(e).then(function (e) {
												l || ((l = !0), (i[a] = e), --s || n(i));
											}, r);
									}),
										--s || n(i);
								});
							return o.e && r(o.v), i.promise;
						},
						race: function (e) {
							var t = this,
								i = Q(t),
								n = i.reject,
								r = w(function () {
									p(e, !1, function (e) {
										t.resolve(e).then(i.resolve, n);
									});
								});
							return r.e && n(r.v), i.promise;
						},
					}
				);
		},
		function (e, t) {
			e.exports = function (e, t, i, n) {
				if (!(e instanceof t) || (void 0 !== n && n in e))
					throw TypeError(i + ': incorrect invocation!');
				return e;
			};
		},
		function (e, t, i) {
			var n = i(23),
				r = i(102),
				o = i(103),
				s = i(11),
				a = i(55),
				l = i(63),
				h = {},
				c = {};
			((t = e.exports =
				function (e, t, i, u, _) {
					var d,
						f,
						p,
						m,
						v = _
							? function () {
									return e;
							  }
							: l(e),
						g = n(i, u, t ? 2 : 1),
						A = 0;
					if ('function' != typeof v) throw TypeError(e + ' is not iterable!');
					if (o(v)) {
						for (d = a(e.length); A < d; A++)
							if (
								(m = t ? g(s((f = e[A]))[0], f[1]) : g(e[A])) === h ||
								m === c
							)
								return m;
					} else
						for (p = v.call(e); !(f = p.next()).done; )
							if ((m = r(p, g, f.value, t)) === h || m === c) return m;
				}).BREAK = h),
				(t.RETURN = c);
		},
		function (e, t, i) {
			var n = i(11);
			e.exports = function (e, t, i, r) {
				try {
					return r ? t(n(i)[0], i[1]) : t(i);
				} catch (t) {
					var o = e.return;
					throw (void 0 !== o && n(o.call(e)), t);
				}
			};
		},
		function (e, t, i) {
			var n = i(24),
				r = i(10)('iterator'),
				o = Array.prototype;
			e.exports = function (e) {
				return void 0 !== e && (n.Array === e || o[r] === e);
			};
		},
		function (e, t) {
			e.exports = function (e, t, i) {
				var n = void 0 === i;
				switch (t.length) {
					case 0:
						return n ? e() : e.call(i);
					case 1:
						return n ? e(t[0]) : e.call(i, t[0]);
					case 2:
						return n ? e(t[0], t[1]) : e.call(i, t[0], t[1]);
					case 3:
						return n ? e(t[0], t[1], t[2]) : e.call(i, t[0], t[1], t[2]);
					case 4:
						return n
							? e(t[0], t[1], t[2], t[3])
							: e.call(i, t[0], t[1], t[2], t[3]);
				}
				return e.apply(i, t);
			};
		},
		function (e, t, i) {
			var n = i(7),
				r = i(65).set,
				o = n.MutationObserver || n.WebKitMutationObserver,
				s = n.process,
				a = n.Promise,
				l = 'process' == i(25)(s);
			e.exports = function () {
				var e,
					t,
					i,
					h,
					c,
					u,
					_ = function () {
						var n, r;
						for (l && (n = s.domain) && n.exit(); e; ) {
							(r = e.fn), (e = e.next);
							try {
								r();
							} catch (n) {
								throw (e ? i() : (t = void 0), n);
							}
						}
						(t = void 0), n && n.enter();
					};
				return (
					(i = l
						? function () {
								s.nextTick(_);
						  }
						: !o || (n.navigator && n.navigator.standalone)
						? a && a.resolve
							? ((u = a.resolve(void 0)),
							  function () {
									u.then(_);
							  })
							: function () {
									r.call(n, _);
							  }
						: ((h = !0),
						  (c = document.createTextNode('')),
						  new o(_).observe(c, { characterData: !0 }),
						  function () {
								c.data = h = !h;
						  })),
					function (n) {
						var r = { fn: n, next: void 0 };
						t && (t.next = r), e || ((e = r), i()), (t = r);
					}
				);
			};
		},
		function (e, t, i) {
			var n = i(7).navigator;
			e.exports = (n && n.userAgent) || '';
		},
		function (e, t, i) {
			var n = i(16);
			e.exports = function (e, t, i) {
				for (var r in t) i && e[r] ? (e[r] = t[r]) : n(e, r, t[r]);
				return e;
			};
		},
		function (e, t, i) {
			'use strict';
			var n = i(7),
				r = i(6),
				o = i(14),
				s = i(13),
				a = i(10)('species');
			e.exports = function (e) {
				var t = 'function' == typeof r[e] ? r[e] : n[e];
				s &&
					t &&
					!t[a] &&
					o.f(t, a, {
						configurable: !0,
						get: function () {
							return this;
						},
					});
			};
		},
		function (e, t, i) {
			var n,
				r = i(10)('iterator'),
				o = !1;
			try {
				((n = [7][r]()).return = function () {
					o = !0;
				}),
					Array.from(n, function () {
						throw 2;
					});
			} catch (e) {}
			e.exports = function (e, t) {
				var i, n, s;
				if (!t && !o) return !1;
				i = !1;
				try {
					((s = (n = [7])[r]()).next = function () {
						return { done: (i = !0) };
					}),
						(n[r] = function () {
							return s;
						}),
						e(n);
				} catch (e) {}
				return i;
			};
		},
		function (e, t, i) {
			'use strict';
			var n = i(9),
				r = i(6),
				o = i(7),
				s = i(64),
				a = i(67);
			n(n.P + n.R, 'Promise', {
				finally: function (e) {
					var t = s(this, r.Promise || o.Promise),
						i = 'function' == typeof e;
					return this.then(
						i
							? function (i) {
									return a(t, e()).then(function () {
										return i;
									});
							  }
							: e,
						i
							? function (i) {
									return a(t, e()).then(function () {
										throw i;
									});
							  }
							: e
					);
				},
			});
		},
		function (e, t, i) {
			'use strict';
			var n = i(9),
				r = i(47),
				o = i(66);
			n(n.S, 'Promise', {
				try: function (e) {
					var t = r.f(this),
						i = o(e);
					return (i.e ? t.reject : t.resolve)(i.v), t.promise;
				},
			});
		},
		function (e, t, i) {
			i(113), (e.exports = i(6).Object.assign);
		},
		function (e, t, i) {
			var n = i(9);
			n(n.S + n.F, 'Object', { assign: i(114) });
		},
		function (e, t, i) {
			'use strict';
			var n = i(13),
				r = i(29),
				o = i(45),
				s = i(33),
				a = i(32),
				l = i(54),
				h = Object.assign;
			e.exports =
				!h ||
				i(17)(function () {
					var e = {},
						t = {},
						i = Symbol(),
						n = 'abcdefghijklmnopqrst';
					return (
						(e[i] = 7),
						n.split('').forEach(function (e) {
							t[e] = e;
						}),
						7 != h({}, e)[i] || Object.keys(h({}, t)).join('') != n
					);
				})
					? function (e, t) {
							for (
								var i,
									h,
									c,
									u,
									_,
									d = a(e),
									f = arguments.length,
									p = 1,
									m = o.f,
									v = s.f;
								p < f;

							)
								for (
									i = l(arguments[p++]),
										c = (h = m ? r(i).concat(m(i)) : r(i)).length,
										u = 0;
									u < c;

								)
									(_ = h[u++]), (n && !v.call(i, _)) || (d[_] = i[_]);
							return d;
					  }
					: h;
		},
		function (e, t, i) {
			i(116), (e.exports = i(6).Object.getPrototypeOf);
		},
		function (e, t, i) {
			var n = i(32),
				r = i(57);
			i(117)('getPrototypeOf', function () {
				return function (e) {
					return r(n(e));
				};
			});
		},
		function (e, t, i) {
			var n = i(9),
				r = i(6),
				o = i(17);
			e.exports = function (e, t) {
				var i = (r.Object || {})[e] || Object[e],
					s = {};
				(s[e] = t(i)),
					n(
						n.S +
							n.F *
								o(function () {
									i(1);
								}),
						'Object',
						s
					);
			};
		},
		function (e, t, i) {
			i(119);
			var n = i(6).Object;
			e.exports = function (e, t) {
				return n.create(e, t);
			};
		},
		function (e, t, i) {
			var n = i(9);
			n(n.S, 'Object', { create: i(38) });
		},
		function (e, t, i) {
			i(121), (e.exports = i(6).Object.setPrototypeOf);
		},
		function (e, t, i) {
			var n = i(9);
			n(n.S, 'Object', { setPrototypeOf: i(122).set });
		},
		function (e, t, i) {
			var n = i(15),
				r = i(11),
				o = function (e, t) {
					if ((r(e), !n(t) && null !== t))
						throw TypeError(t + ": can't set as prototype!");
				};
			e.exports = {
				set:
					Object.setPrototypeOf ||
					('__proto__' in {}
						? (function (e, t, n) {
								try {
									(n = i(23)(
										Function.call,
										i(59).f(Object.prototype, '__proto__').set,
										2
									))(e, []),
										(t = !(e instanceof Array));
								} catch (e) {
									t = !0;
								}
								return function (e, i) {
									return o(e, i), t ? (e.__proto__ = i) : n(e, i), e;
								};
						  })({}, !1)
						: void 0),
				check: o,
			};
		},
		function (e, t, i) {
			i(42), i(34), (e.exports = i(124));
		},
		function (e, t, i) {
			var n = i(11),
				r = i(63);
			e.exports = i(6).getIterator = function (e) {
				var t = r(e);
				if ('function' != typeof t) throw TypeError(e + ' is not iterable!');
				return n(t.call(e));
			};
		},
		function (e, t, i) {
			'use strict';
			function n(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function r(e, t) {
				(e.prototype = Object.create(t.prototype)),
					((e.prototype.constructor = e).__proto__ = t);
			}
			/*!
			 * GSAP 3.0.1
			 * https://greensock.com
			 *
			 * @license Copyright 2008-2019, GreenSock. All rights reserved.
			 * Subject to the terms at https://greensock.com/standard-license or for
			 * Club GreenSock members, the agreement issued with that membership.
			 * @author: Jack Doyle, jack@greensock.com
			 */ function o(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function s(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function a(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function l(e) {
				return (l =
					'function' == typeof Ee.a && 'symbol' == typeof ye.a
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									'function' == typeof Ee.a &&
									e.constructor === Ee.a &&
									e !== Ee.a.prototype
									? 'symbol'
									: typeof e;
						  })(e);
			}
			function h(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function c(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function u(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function _(e) {
				return (_ =
					'function' == typeof Ee.a && 'symbol' == typeof ye.a
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									'function' == typeof Ee.a &&
									e.constructor === Ee.a &&
									e !== Ee.a.prototype
									? 'symbol'
									: typeof e;
						  })(e);
			}
			function d(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function f(e, t) {
				return !t || ('object' !== _(t) && 'function' != typeof t)
					? (function (e) {
							if (void 0 === e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								);
							return e;
					  })(e)
					: t;
			}
			function p(e) {
				return (p = eo.a
					? Jr.a
					: function (e) {
							return e.__proto__ || Jr()(e);
					  })(e);
			}
			function m(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Kr()(t && t.prototype, {
					constructor: { value: e, writable: !0, configurable: !0 },
				})),
					t &&
						(function (e, t) {
							(
								eo.a ||
								function (e, t) {
									return (e.__proto__ = t), e;
								}
							)(e, t);
						})(e, t);
			}
			function v(e) {
				return (v =
					'function' == typeof Ee.a && 'symbol' == typeof ye.a
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									'function' == typeof Ee.a &&
									e.constructor === Ee.a &&
									e !== Ee.a.prototype
									? 'symbol'
									: typeof e;
						  })(e);
			}
			function g(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function A(e, t) {
				return !t || ('object' !== v(t) && 'function' != typeof t)
					? (function (e) {
							if (void 0 === e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								);
							return e;
					  })(e)
					: t;
			}
			function w(e) {
				return (w = eo.a
					? Jr.a
					: function (e) {
							return e.__proto__ || Jr()(e);
					  })(e);
			}
			function y(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Kr()(t && t.prototype, {
					constructor: { value: e, writable: !0, configurable: !0 },
				})),
					t &&
						(function (e, t) {
							(
								eo.a ||
								function (e, t) {
									return (e.__proto__ = t), e;
								}
							)(e, t);
						})(e, t);
			}
			function b(e) {
				return (b =
					'function' == typeof Ee.a && 'symbol' == typeof ye.a
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									'function' == typeof Ee.a &&
									e.constructor === Ee.a &&
									e !== Ee.a.prototype
									? 'symbol'
									: typeof e;
						  })(e);
			}
			function E(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function x(e, t) {
				return !t || ('object' !== b(t) && 'function' != typeof t)
					? (function (e) {
							if (void 0 === e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								);
							return e;
					  })(e)
					: t;
			}
			function k(e) {
				return (k = eo.a
					? Jr.a
					: function (e) {
							return e.__proto__ || Jr()(e);
					  })(e);
			}
			function B(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Kr()(t && t.prototype, {
					constructor: { value: e, writable: !0, configurable: !0 },
				})),
					t &&
						(function (e, t) {
							(
								eo.a ||
								function (e, t) {
									return (e.__proto__ = t), e;
								}
							)(e, t);
						})(e, t);
			}
			function T(e) {
				return (T =
					'function' == typeof Ee.a && 'symbol' == typeof ye.a
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									'function' == typeof Ee.a &&
									e.constructor === Ee.a &&
									e !== Ee.a.prototype
									? 'symbol'
									: typeof e;
						  })(e);
			}
			function M(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function O(e, t) {
				return !t || ('object' !== T(t) && 'function' != typeof t)
					? (function (e) {
							if (void 0 === e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								);
							return e;
					  })(e)
					: t;
			}
			function R(e) {
				return (R = eo.a
					? Jr.a
					: function (e) {
							return e.__proto__ || Jr()(e);
					  })(e);
			}
			function Q(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Kr()(t && t.prototype, {
					constructor: { value: e, writable: !0, configurable: !0 },
				})),
					t &&
						(function (e, t) {
							(
								eo.a ||
								function (e, t) {
									return (e.__proto__ = t), e;
								}
							)(e, t);
						})(e, t);
			}
			function C(e) {
				return (C =
					'function' == typeof Ee.a && 'symbol' == typeof ye.a
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									'function' == typeof Ee.a &&
									e.constructor === Ee.a &&
									e !== Ee.a.prototype
									? 'symbol'
									: typeof e;
						  })(e);
			}
			function I(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function D(e, t) {
				return !t || ('object' !== C(t) && 'function' != typeof t)
					? (function (e) {
							if (void 0 === e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								);
							return e;
					  })(e)
					: t;
			}
			function z(e) {
				return (z = eo.a
					? Jr.a
					: function (e) {
							return e.__proto__ || Jr()(e);
					  })(e);
			}
			function S(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Kr()(t && t.prototype, {
					constructor: { value: e, writable: !0, configurable: !0 },
				})),
					t &&
						(function (e, t) {
							(
								eo.a ||
								function (e, t) {
									return (e.__proto__ = t), e;
								}
							)(e, t);
						})(e, t);
			}
			function F(e) {
				return (F =
					'function' == typeof Ee.a && 'symbol' == typeof ye.a
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									'function' == typeof Ee.a &&
									e.constructor === Ee.a &&
									e !== Ee.a.prototype
									? 'symbol'
									: typeof e;
						  })(e);
			}
			function U(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function L(e, t) {
				return !t || ('object' !== F(t) && 'function' != typeof t)
					? (function (e) {
							if (void 0 === e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								);
							return e;
					  })(e)
					: t;
			}
			function P(e) {
				return (P = eo.a
					? Jr.a
					: function (e) {
							return e.__proto__ || Jr()(e);
					  })(e);
			}
			function N(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Kr()(t && t.prototype, {
					constructor: { value: e, writable: !0, configurable: !0 },
				})),
					t &&
						(function (e, t) {
							(
								eo.a ||
								function (e, t) {
									return (e.__proto__ = t), e;
								}
							)(e, t);
						})(e, t);
			}
			function j(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function q(e) {
				return (q =
					'function' == typeof Ee.a && 'symbol' == typeof ye.a
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									'function' == typeof Ee.a &&
									e.constructor === Ee.a &&
									e !== Ee.a.prototype
									? 'symbol'
									: typeof e;
						  })(e);
			}
			function H(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function G(e, t) {
				return !t || ('object' !== q(t) && 'function' != typeof t)
					? (function (e) {
							if (void 0 === e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								);
							return e;
					  })(e)
					: t;
			}
			function Y(e) {
				return (Y = eo.a
					? Jr.a
					: function (e) {
							return e.__proto__ || Jr()(e);
					  })(e);
			}
			function V(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Kr()(t && t.prototype, {
					constructor: { value: e, writable: !0, configurable: !0 },
				})),
					t &&
						(function (e, t) {
							(
								eo.a ||
								function (e, t) {
									return (e.__proto__ = t), e;
								}
							)(e, t);
						})(e, t);
			}
			function W(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function X(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function J(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function Z(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function K(e, t) {
				var i,
					n,
					r,
					o = !0,
					s = !1,
					a = void 0;
				try {
					for (i = vo()(go); !(o = (n = i.next()).done); o = !0)
						(r = n.value),
							e.addEventListener(r[0], t.utils.stopEventPropagation, r[1]);
				} catch (e) {
					(s = !0), (a = e);
				} finally {
					try {
						o || null == i.return || i.return();
					} finally {
						if (s) throw a;
					}
				}
			}
			function $(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function ee(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function te(e) {
				return (te =
					'function' == typeof Ee.a && 'symbol' == typeof ye.a
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									'function' == typeof Ee.a &&
									e.constructor === Ee.a &&
									e !== Ee.a.prototype
									? 'symbol'
									: typeof e;
						  })(e);
			}
			function ie(e, t) {
				return !t || ('object' !== te(t) && 'function' != typeof t)
					? (function (e) {
							if (void 0 === e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								);
							return e;
					  })(e)
					: t;
			}
			function ne(e) {
				return (ne = eo.a
					? Jr.a
					: function (e) {
							return e.__proto__ || Jr()(e);
					  })(e);
			}
			function re(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Kr()(t && t.prototype, {
					constructor: { value: e, writable: !0, configurable: !0 },
				})),
					t &&
						(function (e, t) {
							(
								eo.a ||
								function (e, t) {
									return (e.__proto__ = t), e;
								}
							)(e, t);
						})(e, t);
			}
			function oe(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function se(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function ae(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function le(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function he(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function ce(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function ue() {
				return (function () {
					function e(t) {
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e),
							(this.renderer = t),
							(this.scene = null),
							(this.scalling_timeout = !1),
							(this.scene_center_complete = !0),
							(this.scene_zoom_complete = !0);
					}
					return (
						(function (e, t, i) {
							t && ce(e.prototype, t), i && ce(e, i);
						})(e, [
							{
								key: 'to_viewer_scale_range',
								value: function (e) {
									return void 0 !== e
										? e * (1 - this.renderer.min_scale) +
												this.renderer.min_scale
										: 0;
								},
							},
							{
								key: 'from_viewer_scale_range',
								value: function (e) {
									return 1 == this.renderer.min_scale
										? 1
										: (e - this.renderer.min_scale) /
												(1 - this.renderer.min_scale);
								},
							},
							{
								key: 'setScene',
								value: function (e) {
									var t,
										i,
										n,
										r,
										o,
										s = this;
									if (
										(this.renderer.dispatchEvent('set_scene'),
										(this.scene_center_complete = !0),
										(this.scene_zoom_complete = !0),
										!this.renderer.animating)
									) {
										for (t in ((this.scene = {}), e))
											e.hasOwnProperty(t) && (this.scene[t] = e[t]);
										if (
											((void 0 === this.scene.hangle &&
												void 0 === this.scene.vangle) ||
												((i = this.scene.hangle),
												(n = this.scene.vangle),
												void 0 === i && (i = this.renderer.hangle),
												void 0 === n && (n = this.renderer.vangle),
												(r = this.renderer.get_closest_frame(i, n)),
												(this.scene.hangle = r.hangle),
												(this.scene.vangle = r.vangle)),
											!(
												this.setSceneHanglInc(e) ||
												this.setScenePanInc(e) ||
												this.setSceneVanglInc(e) ||
												this.setSceneMode(e) ||
												this.setSceneFullscreen(e) ||
												this.setSceneZoomMul(e) ||
												this.setSceneAutorotate(e) ||
												this.setSceneScaleUp(e) ||
												this.setSceneResetPosition(e) ||
												this.setSceneScaleDown(e)
											))
										) {
											if (
												((o = this.getScene()),
												!(
													!(
														null == e.scale ||
														e.scale == o.scale ||
														(e.scale <= this.renderer.min_scale &&
															o.scale == this.renderer.min_scale) ||
														(e.scale >= this.renderer.max_scale &&
															o.scale == this.renderer.max_scale)
													) ||
													(null != e.centerX && e.centerx != o.centerx) ||
													(null != e.centerY && e.centery != o.centery) ||
													(null != e.centerx && e.centerx != o.centerx) ||
													(null != e.centery && e.centery != o.centery) ||
													(null != e.hangle && e.hangle != o.hangle) ||
													(null != e.vangle && e.vangle != o.vangle)
												))
											)
												return (
													(this.renderer.animating = !1),
													void this.renderer.dispatchEvent('set_scene_complete')
												);
											this.renderer.dispatchEvent('activity_start'),
												(e.hangle || e.vangle) &&
													void 0 === e.scale &&
													(this.scene.scale = o.scale),
												(this.animating_timeout = setTimeout(function () {
													(s.renderer.animating = !1),
														s.renderer.dispatchEvent('set_scene_complete');
												}, 2e3)),
												this.renderer.changeMode(this.renderer.MODE_ROTATE),
												(this.renderer.animating = !0),
												this.sequence_scene_zoom_out();
										}
									}
								},
							},
							{
								key: 'setSceneFullscreen',
								value: function (e) {
									return 'toggle' === e.fullscreen
										? (this.renderer.toggle_fullscreen_mode(), !0)
										: 'pre' === e.fullscreen
										? (this.renderer.pre_fullscreen_setup(), !0)
										: 'enter' === e.fullscreen
										? (this.renderer.on_fullscreen_enter(), !0)
										: 'cancel' === e.fullscreen &&
										  (this.renderer.on_fullscreen_cancel(), !0);
								},
							},
							{
								key: 'setSceneMode',
								value: function (e) {
									var t = !1;
									return (
										!!e.mode &&
										('rotate' === e.mode
											? ((t = this.renderer.mode != this.renderer.MODE_ROTATE),
											  this.renderer.changeMode(this.renderer.MODE_ROTATE),
											  this.renderer.set_forced_mode('rotate'),
											  this.renderer.control_panel.drag_rotate_button
													? this.renderer.control_panel.drag_rotate_button.switch_mode(
															'rotate'
													  )
													: t &&
													  this.renderer.dispatchEvent(
															'mode_changed',
															'rotate'
													  ))
											: 'move' === e.mode || 'drag' === e.mode
											? ((t = this.renderer.mode != this.renderer.MODE_DRAG),
											  this.renderer.changeMode(this.renderer.MODE_DRAG),
											  this.renderer.set_forced_mode('drag'),
											  this.renderer.control_panel.drag_rotate_button
													? this.renderer.control_panel.drag_rotate_button.switch_mode(
															'drag'
													  )
													: t &&
													  this.renderer.dispatchEvent('mode_changed', 'drag'))
											: 'onerotation' === e.mode
											? (this.renderer.changeMode(
													this.renderer.MODE_ONEROTATION
											  ),
											  this.renderer.dispatchEvent(
													'mode_changed',
													'onerotation'
											  ))
											: 'onerotationslow' === e.mode &&
											  (this.renderer.changeMode(
													this.renderer.MODE_ONEROTATION_SLOW
											  ),
											  this.renderer.dispatchEvent(
													'mode_changed',
													'onerotationslow'
											  )),
										!0)
									);
								},
							},
							{
								key: 'setSceneZoomMul',
								value: function (e) {
									if (!e.zoomMul || e.scaleUp || e.scaleDown) return !1;
									var t = +e.zoomMul;
									return (
										(t =
											0 < t
												? this.renderer.scale * t
												: this.renderer.scale / (-1 * t)),
										this.renderer.transform({ scale: t }),
										!0
									);
								},
							},
							{
								key: 'setSceneResetPosition',
								value: function (e) {
									var t, i, n;
									return (
										'yes' === e.reset_position &&
										((t =
											void 0 !== e.hangle
												? e.hangle
												: this.renderer.params.first_frame),
										(i =
											void 0 !== e.vangle
												? e.vangle
												: this.renderer.params.first_row),
										(n =
											void 0 !== e.scale ? e.scale : this.renderer.min_scale),
										this.renderer.transform({ scale: n, vangle: i, hangle: t }),
										this.renderer.dispatchEvent('set_scene_complete'),
										!0)
									);
								},
							},
							{
								key: 'setSceneScaleUp',
								value: function (e) {
									var t = this;
									return (
										!!e.scaleUp &&
										(this.scalling_timeout &&
											clearTimeout(this.scalling_timeout),
										(this.scalling_timeout = window.setTimeout(function () {
											(t.renderer.scalling = !1),
												clearTimeout(t.scalling_timeout);
										}, 500)),
										(this.renderer.scalling = !0),
										this.renderer.scaleUp(),
										!0)
									);
								},
							},
							{
								key: 'setSceneScaleDown',
								value: function (e) {
									var t = this;
									return (
										!!e.scaleDown &&
										(this.scalling_timeout &&
											clearTimeout(this.scalling_timeout),
										(this.scalling_timeout = window.setTimeout(function () {
											(t.renderer.scalling = !1),
												clearTimeout(t.scalling_timeout);
										}, 500)),
										(this.renderer.scalling = !0),
										this.renderer.scaleDown(),
										!0)
									);
								},
							},
							{
								key: 'setSceneAutorotate',
								value: function (e) {
									return (
										!!e.autorotate &&
										(e.autorotate_dir &&
											((this.renderer.params.auto_rotate_dir =
												e.autorotate_dir),
											(this.renderer.auto_rotate_dir =
												'left' === e.autorotate_dir ? 1 : -1)),
										'yes' === e.autorotate &&
										this.renderer.mode !== this.renderer.MODE_AUTOROTATE
											? this.renderer.changeMode(this.renderer.MODE_AUTOROTATE)
											: 'no' === e.autorotate &&
											  (this.renderer.changeMode(this.renderer.MODE_ROTATE),
											  this.renderer.refreshAnimationFrame()),
										!0)
									);
								},
							},
							{
								key: 'setSceneHanglInc',
								value: function (e) {
									var t,
										i,
										n,
										r = this;
									return (
										!!e.hangleInc &&
										(1 === Fr()(e.hangleInc)
											? ('right' === this.renderer.params.rotate_dir
													? this.renderer.prev_frame(!1, !0)
													: this.renderer.next_frame(!1, !0),
											  this.renderer.transform({ force_rebuild_tiles: !0 }))
											: -1 === Fr()(e.hangleInc)
											? ('right' === this.renderer.params.rotate_dir
													? this.renderer.next_frame(!1, !0)
													: this.renderer.prev_frame(!1, !0),
											  this.renderer.transform({ force_rebuild_tiles: !0 }))
											: ((t = this.renderer.hangle + Fr()(e.hangleInc)) < 0 &&
													(t = this.renderer.frames_no + t),
											  t >= this.renderer.frames_no &&
													(t %= this.renderer.frames_no),
											  (i = this.renderer.get_closest_frame(
													t,
													this.renderer.vangle
											  )),
											  (n = function e() {
													r.renderer.removeListener('animator_rotate', e),
														r.renderer.dispatchEvent('set_scene_complete');
											  }),
											  this.renderer.addListener('animator_rotate', n, this),
											  this.renderer.rotateTo(i.hangle, this.renderer.vangle)),
										!0)
									);
								},
							},
							{
								key: 'setSceneVanglInc',
								value: function (e) {
									var t, i;
									return (
										!!e.vangleInc &&
										((t = this.renderer.vangle + Fr()(e.vangleInc)) < 0 &&
											(t = 0),
										t >= this.renderer.vangles_no &&
											(t = this.renderer.vangles_no - 1),
										(i = this.renderer.get_closest_frame(
											this.renderer.hangle,
											t
										)),
										this.renderer.rotateTo(this.renderer.hangle, i.vangle),
										!0)
									);
								},
							},
							{
								key: 'setScenePanInc',
								value: function (e) {
									var t,
										i,
										n,
										r,
										o,
										s,
										a,
										l,
										h,
										c = e.panX ? e.panX : 0,
										u = e.panY ? e.panY : 0;
									return !(
										(!c && !u) ||
										((i = (t = this.getScene()).centerx || t.centerX),
										(n = t.centery || t.centerY),
										(r = this.to_viewer_scale_range(t.scale)),
										(o = Math.round(i * r)),
										(s = Math.round(n * r)),
										(a = {}),
										~('' + c).indexOf('%')
											? ((l = o + (1 * this.renderer.width * Fr()(c)) / 100),
											  (a.centerx = Fr()(l / r)))
											: ((a.centerx = o + Fr()(c)),
											  (a.centerx = Fr()(a.centerx / r))),
										~('' + u).indexOf('%')
											? ((h = s + (1 * this.renderer.height * Fr()(u)) / 100),
											  (a.centery = Fr()(h / r)))
											: ((a.centery = s + Fr()(u)),
											  (a.centery = Fr()(a.centery / r))),
										this.renderer.transform(a),
										0)
									);
								},
							},
							{
								key: 'sequence_scene_zoom_out',
								value: function () {
									this.scene_zoom_complete = !1;
									var e =
										(void 0 !== this.scene.vangle &&
											this.scene.vangle != this.renderer.vangle) ||
										(void 0 !== this.scene.hangle &&
											this.scene.hangle != this.renderer.hangle);
									void 0 !== this.scene.scale &&
									e &&
									this.renderer.get_transformed_value('scale') >
										this.renderer.min_scale
										? (this.renderer.addListener(
												'zoom_complete',
												this.sequence_scene_rotate,
												this
										  ),
										  this.renderer.transform({ scale: 0 }))
										: e
										? (this.renderer.addListener(
												'zoom_complete',
												this.sequence_scene_rotate,
												this
										  ),
										  (this.scene_zoom_complete = !0),
										  this.renderer.dispatchEvent('zoom_complete'))
										: ((this.scene_zoom_complete = !0),
										  this.sequence_scene_zoom_to());
								},
							},
							{
								key: 'sequence_scene_rotate',
								value: function (e) {
									this.renderer.removeListener(
										'zoom_complete',
										this.sequence_scene_rotate
									),
										this.renderer.addListener(
											'animator_rotate',
											this.sequence_scene_zoom_to,
											this
										),
										(this.scene_zoom_complete = !0),
										this.renderer.rotateTo(
											this.scene.hangle,
											this.scene.vangle
										);
								},
							},
							{
								key: 'sequence_scene_zoom_to',
								value: function () {
									var e,
										t,
										i,
										n = this.to_viewer_scale_range(this.scene.scale);
									(this.scene_zoom_complete = !1),
										this.renderer.removeListener(
											'animator_rotate',
											this.sequence_scene_zoom_to
										),
										this.renderer.addListener(
											'zoom_complete',
											this.sequence_set_scene_zoom_complete,
											this
										),
										(e = this.scene.centerx || this.scene.centerX),
										(t = this.scene.centery || this.scene.centerY),
										e || t
											? ((this.scene_center_complete = !1),
											  this.renderer.addListener(
													'center_change_complete',
													this.sequence_set_scene_center_complete,
													this
											  ))
											: (this.scene_center_complete = !0),
										(n && n != this.renderer.get_transformed_value('scale')) ||
											(this.scene_zoom_complete = !0),
										void 0 === (i = n) &&
											(i = this.renderer.get_transformed_value('scale')),
										this.renderer.transform({
											scale: i,
											centerx: e,
											centery: t,
										});
								},
							},
							{
								key: 'sequence_set_scene_center_complete',
								value: function () {
									this.renderer.removeListener(
										'center_change_complete',
										this.sequence_set_scene_center_complete
									),
										(this.scene_center_complete = !0),
										this.scene_zoom_complete &&
											(this.renderer.removeListener(
												'zoom_complete',
												this.sequence_set_scene_zoom_complete
											),
											this.sequence_set_scene_complete());
								},
							},
							{
								key: 'sequence_set_scene_zoom_complete',
								value: function () {
									(this.scene_zoom_complete = !0),
										this.renderer.removeListener(
											'zoom_complete',
											this.sequence_set_scene_zoom_complete
										),
										this.scene_center_complete &&
											(this.renderer.removeListener(
												'center_change_complete',
												this.sequence_set_scene_center_complete
											),
											this.sequence_set_scene_complete());
								},
							},
							{
								key: 'sequence_set_scene_complete',
								value: function () {
									(this.renderer.animating = !1),
										this.renderer.dispatchEvent('set_scene_complete'),
										clearTimeout(this.animating_timeout);
								},
							},
							{
								key: 'getScene',
								value: function () {
									return {
										scale: this.from_viewer_scale_range(
											this.renderer.get_transformed_value('scale')
										),
										centerX: this.renderer.get_transformed_value('centerx'),
										centerY: this.renderer.get_transformed_value('centery'),
										centerx: this.renderer.get_transformed_value('centerx'),
										centery: this.renderer.get_transformed_value('centery'),
										hangle: this.renderer.get_transformed_value('hangle'),
										vangle: this.renderer.get_transformed_value('vangle'),
									};
								},
							},
							{
								key: 'getLoadedFrames',
								value: function () {
									return this.renderer.get_loaded_frames();
								},
							},
							{
								key: 'addCallback',
								value: function (e, t) {
									switch (t) {
										case 'rotate':
										case 'zoom_in':
										case 'zoom_out':
										case 'zoom_in_started':
										case 'zoom_out_started':
										case 'zoom_started':
										case 'zoom_complete':
										case 'fullscreen_off':
										case 'fullscreen_on':
										case 'autorotate_start':
										case 'set_scene':
										case 'animator_rotate':
										case 'set_scene_complete':
										case 'center_change':
										case 'center_change_complete':
										case 'autorotate_stop':
										case 'resize':
										case 'info_dialog_opened':
										case 'info_dialog_closed':
										case 'move_start':
										case 'move':
										case 'move_end':
										case 'doubleclick':
										case 'loading':
										case 'partial_loading':
										case 'partially_initialized':
										case 'viewer_initialized':
										case 'mode_changed':
										case 'interaction_start':
										case 'activity_start':
										case 'activity_end':
											this.renderer.addListener(t, e);
									}
								},
							},
							{
								key: 'removeCallback',
								value: function (e, t) {
									switch (t) {
										case 'rotate':
										case 'zoom_in':
										case 'zoom_out':
										case 'zoom_in_started':
										case 'zoom_out_started':
										case 'zoom_started':
										case 'zoom_complete':
										case 'fullscreen_off':
										case 'fullscreen_on':
										case 'autorotate_start':
										case 'set_scene':
										case 'animator_rotate':
										case 'set_scene_complete':
										case 'center_change':
										case 'center_change_complete':
										case 'autorotate_stop':
										case 'resize':
										case 'info_dialog_opened':
										case 'info_dialog_closed':
										case 'move_start':
										case 'move':
										case 'move_end':
										case 'doubleclick':
										case 'loading':
										case 'partial_loading':
										case 'partially_initialized':
										case 'viewer_initialized':
										case 'mode_changed':
										case 'interaction_start':
										case 'activity_start':
										case 'activity_end':
											this.renderer.removeListener(t, e);
									}
								},
							},
							{
								key: 'handle_resize',
								value: function (e, t) {
									this.renderer.conditionally_resize_viewport(e, t);
								},
							},
							{
								key: 'calculate_position',
								value: function (e) {
									var t = this.renderer.get_local_scale(
											this.renderer.optimal_scale
										),
										i = this.renderer.calculate_position(
											this.renderer.optimal_scale_obj,
											e,
											t
										);
									return (i.x = Math.round(i.x)), (i.y = Math.round(i.y)), i;
								},
							},
							{
								key: 'calculate_reverse_position',
								value: function (e) {
									var t = this.renderer.get_local_scale(
											this.renderer.optimal_scale
										),
										i = this.renderer.calculate_reverse_position(
											this.renderer.optimal_scale_obj,
											e,
											t
										);
									return (i.x = Math.round(i.x)), (i.y = Math.round(i.y)), i;
								},
							},
							{
								key: 'get_presentation_info',
								value: function () {
									var e = this.renderer;
									return {
										hangles_no: e.frames_no,
										vangles_no: e.vangles_no,
										max_width: e.max_width,
										max_height: e.max_height,
										width: e.width,
										height: e.height,
										min_scale: e.min_scale,
										max_scale: e.max_scale,
										transition_time: e.current_transform_time,
										animating: e.animating,
										gesture_scalling: e.gesture_scalling,
									};
								},
							},
							{
								key: 'enable_mousewheel',
								value: function () {
									(this.renderer.event_mousewheel_enabled = !0),
										this.renderer.events.attachWheelEvents();
								},
							},
							{
								key: 'disable_mousewheel',
								value: function (e) {
									this.renderer.events.removeWheelEvents(),
										(this.renderer.event_mousewheel_enabled = !1);
								},
							},
							{
								key: 'destroy',
								value: function () {
									this.renderer.destroy();
								},
							},
							{
								key: 'set_panning',
								value: function (e) {
									this.renderer.set_panning(e);
								},
							},
							{
								key: 'set_forced_mode',
								value: function (e) {
									this.renderer.set_forced_mode(e);
								},
							},
							{
								key: 'get_orbitvu_gsap',
								value: function () {
									return { gsap: Ir };
								},
							},
						]),
						e
					);
				})();
			}
			function _e(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function de(e, t, i) {
				return (
					t in e
						? zr()(e, t, {
								value: i,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = i),
					e
				);
			}
			function fe(e, t) {
				var i, n;
				for (i = 0; i < t.length; i++)
					((n = t[i]).enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						zr()(e, n.key, n);
			}
			function pe(e) {
				return (pe =
					'function' == typeof Ee.a && 'symbol' == typeof ye.a
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									'function' == typeof Ee.a &&
									e.constructor === Ee.a &&
									e !== Ee.a.prototype
									? 'symbol'
									: typeof e;
						  })(e);
			}
			function me() {
				var e,
					t,
					i = '1.0.0',
					n = '0';
				void 0 !== window.orbitvu_revision && (i = window.orbitvu_revision),
					void 0 !== window.orbitvu_type && (n = window.orbitvu_type),
					(e = 1 * n < 1 * 'html5'),
					(t =
						(function (e, t) {
							var i,
								n,
								r = e.split('.'),
								o = t.split('.');
							for (i = 0; i < Math.min(r.length, o.length); i++)
								if (0 != (n = r[i] - o[i])) return n;
							return 0;
						})(i, '3.9.3') < 0),
					(void 0 === window._inject_orbitvu || e || t) &&
						((window.orbitvu_revision = '3.9.3'),
						(window.orbitvu_type = 'html5'),
						(window._inject_orbitvu = function (e, t, i, n) {
							var r = n;
							'undefined' == typeof orbituargs2 &&
								'object' ==
									('undefined' == typeof orbitvuargs1
										? 'undefined'
										: pe(orbitvuargs1)) &&
								(r = orbitvuargs1),
								new Fo(e, t, r).inject_orbitvu();
						}));
			}
			function ve(e, t, i, n) {
				me(), window._inject_orbitvu(e, t, i, n);
			}
			function ge(e, t) {
				new Fo(e, null, null, null).inject_viewer_html5(t);
			}
			function Ae() {
				return { gsap: Ir };
			}
			var we,
				ye,
				be,
				Ee,
				xe,
				ke,
				Be,
				Te,
				Me,
				Oe,
				Re,
				Qe,
				Ce,
				Ie,
				De,
				ze,
				Se,
				Fe,
				Ue,
				Le,
				Pe,
				Ne,
				je,
				qe,
				He,
				Ge,
				Ye,
				Ve,
				We,
				Xe,
				Je,
				Ze,
				Ke,
				$e,
				et,
				tt,
				it,
				nt,
				rt,
				ot,
				st,
				at,
				lt,
				ht,
				ct,
				ut,
				_t,
				dt,
				ft,
				pt,
				mt,
				vt,
				gt,
				At,
				wt,
				yt,
				bt,
				Et,
				xt,
				kt,
				Bt,
				Tt,
				Mt,
				Ot,
				Rt,
				Qt,
				Ct,
				It,
				Dt,
				zt,
				St,
				Ft,
				Ut,
				Lt,
				Pt,
				Nt,
				jt,
				qt,
				Ht,
				Gt,
				Yt,
				Vt,
				Wt,
				Xt,
				Jt,
				Zt,
				Kt,
				$t,
				ei,
				ti,
				ii,
				ni,
				ri,
				oi,
				si,
				ai,
				li,
				hi,
				ci,
				ui,
				_i,
				di,
				fi,
				pi,
				mi,
				vi,
				gi,
				Ai,
				wi,
				yi,
				bi,
				Ei,
				xi,
				ki,
				Bi,
				Ti,
				Mi,
				Oi,
				Ri,
				Qi,
				Ci,
				Ii,
				Di,
				zi,
				Si,
				Fi,
				Ui,
				Li,
				Pi,
				Ni,
				ji,
				qi,
				Hi,
				Gi,
				Yi,
				Vi,
				Wi,
				Xi,
				Ji,
				Zi,
				Ki,
				$i,
				en,
				tn,
				nn,
				rn,
				on,
				sn,
				an,
				ln,
				hn,
				cn,
				un,
				_n,
				dn,
				fn,
				pn,
				mn,
				vn,
				gn,
				An,
				wn,
				yn,
				bn,
				En,
				xn,
				kn,
				Bn,
				Tn,
				Mn,
				On,
				Rn,
				Qn,
				Cn,
				In,
				Dn,
				zn,
				Sn,
				Fn,
				Un,
				Ln,
				Pn,
				Nn,
				jn,
				qn,
				Hn,
				Gn,
				Yn,
				Vn,
				Wn,
				Xn,
				Jn,
				Zn,
				Kn,
				$n,
				er,
				tr,
				ir,
				nr,
				rr,
				or,
				sr,
				ar,
				lr,
				hr,
				cr,
				ur,
				_r,
				dr,
				fr,
				pr,
				mr,
				vr,
				gr,
				Ar,
				wr,
				yr,
				br,
				Er,
				xr,
				kr,
				Br,
				Tr,
				Mr,
				Or,
				Rr,
				Qr,
				Cr,
				Ir,
				Dr,
				zr,
				Sr,
				Fr,
				Ur,
				Lr,
				Pr,
				Nr,
				jr,
				qr,
				Hr,
				Gr,
				Yr,
				Vr,
				Wr,
				Xr,
				Jr,
				Zr,
				Kr,
				$r,
				eo,
				to,
				io,
				no,
				ro,
				oo,
				so,
				ao,
				lo,
				ho,
				co,
				uo,
				_o,
				fo,
				po,
				mo,
				vo,
				go,
				Ao,
				wo,
				yo,
				bo,
				Eo,
				xo,
				ko,
				Bo,
				To,
				Mo,
				Oo,
				Ro,
				Qo,
				Co,
				Io,
				Do,
				zo,
				So,
				Fo,
				Uo,
				Lo,
				Po,
				No,
				jo,
				qo,
				Ho,
				Go,
				Yo,
				Vo,
				Wo,
				Xo,
				Jo,
				Zo,
				Ko,
				$o,
				es,
				ts,
				is,
				ns;
			i.r(t),
				(we = i(5)),
				(ye = i.n(we)),
				(be = i(2)),
				(Ee = i.n(be)),
				i(87),
				(ke = {
					duration: 0.5,
					overwrite: !(xe = {
						autoSleep: 120,
						force3D: 'auto',
						nullTargetWarn: 1,
						units: { lineHeight: '' },
					}),
					delay: 0,
				}),
				(Te = 1 / (Be = 1e8)),
				(Oe = (Me = 2 * Math.PI) / 4),
				(Qe = Math.sqrt),
				(Ce = Math.cos),
				(Ie = Math.sin),
				(De = function (e) {
					return 'string' == typeof e;
				}),
				(ze = function (e) {
					return 'function' == typeof e;
				}),
				(Se = function (e) {
					return 'number' == typeof e;
				}),
				(Fe = function (e) {
					return void 0 === e;
				}),
				(Ue = function (e) {
					return 'object' == typeof e;
				}),
				(Le = function (e) {
					return !1 !== e;
				}),
				(Pe = function () {
					return 'undefined' != typeof window;
				}),
				(Ne = function (e) {
					return ze(e) || De(e);
				}),
				(je = Array.isArray),
				(qe = /(?:-?\.?\d|\.)+/gi),
				(He = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi),
				(Ge = /[-+=\.]*\d+(?:\.|e-|e)*\d*/gi),
				(Ye = /\(([^()]+)\)/i),
				(Ve = /[\+-]=-?[\.\d]+/),
				(We = /[#\-+\.]*\b[a-z\d-=+%.]+/gi),
				($e = {}),
				(et = {}),
				(it = function (e) {
					return (et = Tt(e, $e)) && mn;
				}),
				(nt = function (e, t) {
					return !t && void 0;
				}),
				(rt = function (e, t) {
					return (e && ($e[e] = t) && et && (et[e] = t)) || $e;
				}),
				(st = {}),
				(at = []),
				(lt = {}),
				(ht = {}),
				(ct = {}),
				(ut = 30),
				(_t = []),
				(dt =
					'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt'),
				(ft = function (e) {
					var t,
						i,
						n = e[0];
					if (!Ue(n) && !ze(n)) return je(e) ? e : [e];
					if (!(t = (n._gsap || {}).harness)) {
						for (i = _t.length; i-- && !_t[i].targetTest(n); );
						t = _t[i];
					}
					for (i = e.length; i--; )
						e[i]._gsap || (e[i]._gsap = new Ni(e[i], t));
					return e;
				}),
				(pt = function (e) {
					return e._gsap || ft(ei(e))[0]._gsap;
				}),
				(mt = function (e, t) {
					var i = e[t];
					return ze(i) ? e[t]() : (Fe(i) && e.getAttribute(t)) || i;
				}),
				(vt = function (e, t) {
					return (e = e.split(',')).forEach(t) || e;
				}),
				(gt = function (e) {
					return Math.round(1e4 * e) / 1e4;
				}),
				(At = function (e, t) {
					for (var i = t.length, n = 0; !~e.indexOf(t[n]) && ++n < i; );
					return n < i;
				}),
				(wt = function (e, t, i) {
					var n,
						r = Se(e[1]),
						o = (r ? 2 : 1) + (t < 2 ? 0 : 1),
						s = e[o];
					return (
						r && (s.duration = e[1]),
						1 === t
							? ((s.runBackwards = 1),
							  (s.immediateRender = Le(s.immediateRender)))
							: 2 === t &&
							  ((n = e[o - 1]),
							  (s.startAt = n),
							  (s.immediateRender = Le(s.immediateRender))),
						(s.parent = i),
						s
					);
				}),
				(yt = function () {
					var e,
						t,
						i = at.length,
						n = at.slice(0);
					for (lt = {}, e = at.length = 0; e < i; e++)
						(t = n[e]) &&
							t._lazy &&
							(t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
				}),
				(bt = function (e, t, i, n) {
					at.length && yt(), e.render(t, i, n), at.length && yt();
				}),
				(Et = function (e) {
					var t = parseFloat(e);
					return t || 0 === t ? t : e;
				}),
				(xt = function (e) {
					return e;
				}),
				(kt = function (e, t) {
					for (var i in t) i in e || (e[i] = t[i]);
					return e;
				}),
				(Bt = function (e, t) {
					for (var i in t)
						i in e || 'duration' === i || 'ease' === i || (e[i] = t[i]);
				}),
				(Tt = function (e, t) {
					for (var i in t) e[i] = t[i];
					return e;
				}),
				(Mt = function e(t, i) {
					for (var n in i)
						t[n] = Ue(i[n]) ? e(t[n] || (t[n] = {}), i[n]) : i[n];
					return t;
				}),
				(Ot = function (e, t) {
					var i,
						n = {};
					for (i in e) i in t || (n[i] = e[i]);
					return n;
				}),
				(Rt = function (e) {
					var t = e.parent || Xe,
						i = e.keyframes ? Bt : kt;
					if (Le(e.inherit)) for (; t; ) i(e, t.vars.defaults), (t = t.parent);
					return e;
				}),
				(Qt = function (e, t) {
					for (
						var i = e.length, n = i === t.length;
						n && i-- && e[i] === t[i];

					);
					return i < 0;
				}),
				(Ct = function (e, t, i, n, r) {
					void 0 === i && (i = '_first'), void 0 === n && (n = '_last');
					var o,
						s = e[n];
					if (r) for (o = t[r]; s && s[r] > o; ) s = s._prev;
					return (
						s
							? ((t._next = s._next), (s._next = t))
							: ((t._next = e[i]), (e[i] = t)),
						t._next ? (t._next._prev = t) : (e[n] = t),
						(t._prev = s),
						(t.parent = e),
						t
					);
				}),
				(It = function (e, t, i, n) {
					void 0 === i && (i = '_first'), void 0 === n && (n = '_last');
					var r = t._prev,
						o = t._next;
					r ? (r._next = o) : e[i] === t && (e[i] = o),
						o ? (o._prev = r) : e[n] === t && (e[n] = r),
						(t._dp = e),
						(t._next = t._prev = t.parent = null);
				}),
				(Dt = function (e, t) {
					!e.parent ||
						(t && !e.parent.autoRemoveChildren) ||
						e.parent.remove(e),
						(e._act = 0);
				}),
				(zt = function (e) {
					for (var t = e; t; ) (t._dirty = 1), (t = t.parent);
					return e;
				}),
				(St = function (e) {
					for (var t = e.parent; t && t.parent; )
						(t._dirty = 1), t.totalDuration(), (t = t.parent);
					return e;
				}),
				(Ft = function e(t) {
					return !t || (t._ts && e(t.parent));
				}),
				(Ut = function (e) {
					var t;
					return e._repeat
						? (t = e.duration() + e._rDelay) * ~~(e._tTime / t)
						: 0;
				}),
				(Lt = function (e, t) {
					return 0 < t._ts
						? (e - t._start) * t._ts
						: (t._dirty ? t.totalDuration() : t._tDur) + (e - t._start) * t._ts;
				}),
				(Pt = function (e, t, i) {
					var n, r;
					if (
						(t.parent && Dt(t),
						(t._start = i + t._delay),
						(t._end = t._start + (t.totalDuration() / t._ts || 0)),
						Ct(e, t, '_first', '_last', e._sort ? '_start' : 0),
						((e._recent = t)._time || (!t._dur && t._initted)) &&
							((n = (e.rawTime() - t._start) * t._ts),
							(!t._dur || Wt(0, t.totalDuration(), n) - t._tTime > Te) &&
								t.render(n, !0)),
						zt(e),
						e._dp && e._time >= e._dur && e._ts && e._dur < e.duration())
					)
						for (r = e; r._dp; ) r.totalTime(r._tTime, !0), (r = r._dp);
					return e;
				}),
				(Nt = function (e, t, i, n) {
					return (
						Xi(e, t),
						e._initted
							? !i && e._pt && e.vars.lazy
								? (at.push(e), (e._lazy = [t, n]), 1)
								: void 0
							: 1
					);
				}),
				(jt = function (e, t, i, n) {
					var r,
						o,
						s,
						a = e._zTime < 0 ? 0 : 1,
						l = t < 0 ? 0 : 1,
						h = e._rDelay,
						c = 0;
					if (
						(h &&
							e._repeat &&
							((o = ~~((c = Wt(0, e._tDur, t)) / h)) && o === c / h && o--,
							(s = ~~(e._tTime / h)) && s === e._tTime / h && s--,
							o !== s && ((a = 1 - l), e.vars.repeatRefresh && e.invalidate())),
						(e._initted || !Nt(e, t, n, i)) && (l !== a || n))
					) {
						for (
							(i && !t) || (e._zTime = t),
								e.ratio = l,
								e._from && (l = 1 - l),
								e._time = 0,
								e._tTime = c,
								i || pi(e, 'onStart'),
								r = e._pt;
							r;

						)
							r.r(l, r.d), (r = r._next);
						!l &&
							e._startAt &&
							!e._onUpdate &&
							e._start &&
							e._startAt.render(t, !0, n),
							e._onUpdate && !i && pi(e, 'onUpdate'),
							c && e._repeat && !i && e.parent && pi(e, 'onRepeat'),
							(t >= e._tDur || t < 0) &&
								e.ratio === l &&
								(e.ratio && Dt(e, 1),
								i ||
									(pi(e, e.ratio ? 'onComplete' : 'onReverseComplete', !0),
									e._prom && e.ratio && e._prom()));
					}
				}),
				(qt = function (e, t, i) {
					var n;
					if (t < i)
						for (n = e._first; n && n._start <= i; ) {
							if (!n._dur && 'isPause' === n.data && n._start > t) return n;
							n = n._next;
						}
					else
						for (n = e._last; n && n._start >= i; ) {
							if (!n._dur && 'isPause' === n.data && n._start < t) return n;
							n = n._prev;
						}
				}),
				(Ht = function (e) {
					if (e instanceof qi) return zt(e);
					var t = e._repeat;
					return (
						(e._tDur = t
							? t < 0
								? 1e20
								: gt(e._dur * (t + 1) + e._rDelay * t)
							: e._dur),
						zt(e.parent),
						e
					);
				}),
				(Gt = {
					_start: (Re = 0),
					endTime: (ot = function () {
						return 0;
					}),
				}),
				(Yt = function e(t, i, n) {
					var r,
						o,
						s = t.labels,
						a = t._recent || Gt,
						l = t.duration() >= Be ? a.endTime(!1) : t._dur;
					return De(i) && (isNaN(i) || i in s)
						? '<' === (r = i[0]) || '>' === r
							? ('<' === r ? a._start : a.endTime(0 <= a._repeat)) +
							  (parseFloat(i.substr(1)) || 0)
							: (r = i.indexOf('=')) < 0
							? (i in s || (s[i] = l), s[i])
							: ((o = +(i[0 | (r - 1)] + i.substr(r + 1))),
							  1 < r ? e(t, i.substr(0, r - 1)) + o : l + o)
						: null == i
						? l
						: +i;
				}),
				(Vt = function (e, t) {
					return e || 0 === e ? t(e) : t;
				}),
				(Wt = function (e, t, i) {
					return i < e ? e : t < i ? t : i;
				}),
				(Xt = function (e) {
					return (e + '').substr((parseFloat(e) + '').length);
				}),
				(Jt = function (e, t, i) {
					return Vt(i, function (i) {
						return Wt(e, t, i);
					});
				}),
				(Zt = [].slice),
				(Kt = function (e) {
					return (
						Ue(e) && 'length' in e && e.length - 1 in e && Ue(e[0]) && e !== Je
					);
				}),
				($t = function (e, t, i) {
					return (
						void 0 === i && (i = []),
						e.forEach(function (e) {
							var n;
							return (De(e) && !t) || Kt(e)
								? (n = i).push.apply(n, ei(e))
								: i.push(e);
						}) || i
					);
				}),
				(ei = function (e, t) {
					return !De(e) || t || (!Ze && Oi())
						? je(e)
							? $t(e, t)
							: Kt(e)
							? Zt.call(e, 0)
							: e
							? [e]
							: []
						: Zt.call(Ke.querySelectorAll(e), 0);
				}),
				(ti = function (e) {
					if (ze(e)) return e;
					var t = Ue(e) ? e : { each: e },
						i = Si(t.ease),
						n = t.from || 0,
						r = parseFloat(t.base) || 0,
						o = {},
						s = 0 < n && n < 1,
						a = isNaN(n) || s,
						l = t.axis,
						h = n,
						c = n;
					return (
						De(n)
							? (h = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
							: !s && a && ((h = n[0]), (c = n[1])),
						function (e, s, u) {
							var _,
								d,
								f,
								p,
								m,
								v,
								g,
								A,
								w,
								y = (u || t).length,
								b = o[y];
							if (!b) {
								if (!(w = 'auto' === t.grid ? 0 : (t.grid || [1, Be])[1])) {
									for (
										g = -Be;
										g < (g = u[w++].getBoundingClientRect().left) && w < y;

									);
									w--;
								}
								for (
									b = o[y] = [],
										_ = a ? Math.min(w, y) * h - 0.5 : n % w,
										d = a ? (y * c) / w - 0.5 : (n / w) | 0,
										A = Be,
										v = g = 0;
									v < y;
									v++
								)
									(f = (v % w) - _),
										(p = d - ((v / w) | 0)),
										(b[v] = m =
											l ? Math.abs('y' === l ? p : f) : Qe(f * f + p * p)),
										g < m && (g = m),
										m < A && (A = m);
								(b.max = g - A),
									(b.min = A),
									(b.v = y =
										(parseFloat(t.amount) ||
											parseFloat(t.each) *
												(y < w
													? y - 1
													: l
													? 'y' === l
														? y / w
														: w
													: Math.max(w, y / w)) ||
											0) * ('edges' === n ? -1 : 1)),
									(b.b = y < 0 ? r - y : r),
									(b.u = Xt(t.amount || t.each) || 0),
									(i = i && y < 0 ? zi(i) : i);
							}
							return (
								(y = (b[e] - b.min) / b.max || 0),
								gt(b.b + (i ? i(y) : y) * b.v) + b.u
							);
						}
					);
				}),
				(ii = function (e) {
					var t = e < 1 ? Math.pow(10, (e + '').length - 2) : 1;
					return function (i) {
						return (
							~~(Math.round(parseFloat(i) / e) * e * t) / t +
							(Se(i) ? 0 : Xt(i))
						);
					};
				}),
				(ni = function (e, t) {
					var i,
						n,
						r = je(e);
					return (
						!r &&
							Ue(e) &&
							((i = r = e.radius || Be),
							(e = ei(e.values)),
							(n = !Se(e[0])) && (i *= i)),
						Vt(
							t,
							r
								? function (t) {
										for (
											var r,
												o,
												s = parseFloat(n ? t.x : t),
												a = parseFloat(n ? t.y : 0),
												l = Be,
												h = 0,
												c = e.length;
											c--;

										)
											(r = n
												? (r = e[c].x - s) * r + (o = e[c].y - a) * o
												: Math.abs(e[c] - s)) < l && ((l = r), (h = c));
										return (
											(h = !i || l <= i ? e[h] : t),
											n || h === t || Se(t) ? h : h + Xt(t)
										);
								  }
								: ii(e)
						)
					);
				}),
				(ri = function (e, t, i, n) {
					return Vt(je(e) ? !t : !n, function () {
						return je(e)
							? e[~~(Math.random() * e.length)]
							: (i = i || 1e-5) &&
									(n = i < 1 ? Math.pow(10, (i + '').length - 2) : 1) &&
									~~(Math.round((e + Math.random() * (t - e)) / i) * i * n) / n;
					});
				}),
				(oi = function () {
					for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
						t[i] = arguments[i];
					return function (e) {
						return t.reduce(function (e, t) {
							return t(e);
						}, e);
					};
				}),
				(si = function (e, t) {
					return function (i) {
						return e(parseFloat(i)) + (t || Xt(i));
					};
				}),
				(ai = function (e, t, i) {
					return _i(e, t, 0, 1, i);
				}),
				(li = function (e, t, i) {
					return Vt(i, function (i) {
						return e[~~t(i)];
					});
				}),
				(hi = function e(t, i, n) {
					var r = i - t;
					return je(t)
						? li(t, e(0, t.length), i)
						: Vt(n, function (e) {
								return ((r + ((e - t) % r)) % r) + t;
						  });
				}),
				(ci = function e(t, i, n) {
					var r = i - t,
						o = 2 * r;
					return je(t)
						? li(t, e(0, t.length - 1), i)
						: Vt(n, function (e) {
								return t + (r < (e = (o + ((e - t) % o)) % o) ? o - e : e);
						  });
				}),
				(ui = function (e) {
					for (var t, i, n, r, o = 0, s = ''; ~(t = e.indexOf('random(', o)); )
						(n = e.indexOf(')', t)),
							(r = '[' == e[0 | (t + 7)]),
							(i = e.substr(t + 7, n - t - 7).match(r ? We : qe)),
							(s +=
								e.substr(o, t - o) + ri(r ? i : +i[0], +i[1], +i[2] || 1e-5)),
							(o = n + 1);
					return s + e.substr(o, e.length - o);
				}),
				(_i = function (e, t, i, n, r) {
					var o = t - e,
						s = n - i;
					return Vt(r, function (t) {
						return i + ((t - e) / o) * s;
					});
				}),
				(di = function e(t, i, n, r) {
					var o,
						s,
						a,
						l,
						h,
						c,
						u,
						_ = isNaN(t + i)
							? 0
							: function (e) {
									return (1 - e) * t + e * i;
							  };
					if (!_) {
						if (((o = De(t)), !(s = {}) === n && (r = 1) && (n = null), o))
							(t = { p: t }), (i = { p: i });
						else if (je(t) && !je(i)) {
							for (h = [], c = t.length, u = c - 2, l = 1; l < c; l++)
								h.push(e(t[l - 1], t[l]));
							c--,
								(_ = function (e) {
									var t = Math.min(u, ~~(e *= c));
									return h[t](e - t);
								}),
								(n = i);
						} else r || (t = Tt(je(t) ? [] : {}, t));
						if (!h) {
							for (a in i) Gi.call(s, t, a, 'get', i[a]);
							_ = function (e) {
								return cn(e, s) || (o ? t.p : t);
							};
						}
					}
					return Vt(n, _);
				}),
				(fi = function (e, t, i) {
					var n,
						r,
						o,
						s = e.labels,
						a = Be;
					for (n in s)
						(r = s[n] - t) < 0 == !!i &&
							r &&
							a > (r = Math.abs(r)) &&
							((o = n), (a = r));
					return o;
				}),
				(pi = function (e, t, i) {
					var n,
						r,
						o = e.vars,
						s = o[t];
					if (s)
						return (
							(n = o[t + 'Params']),
							(r = o.callbackScope || e),
							i && at.length && yt(),
							n ? s.apply(r, n) : s.call(r, e)
						);
				}),
				(mi = function (e) {
					return Dt(e), e.progress() < 1 && pi(e, 'onInterrupt'), e;
				}),
				(gi = function (e) {
					var t = (e = (!e.name && e.default) || e).name,
						i = ze(e),
						n =
							t && !i && e.init
								? function () {
										this._props = [];
								  }
								: e,
						r = {
							init: ot,
							render: cn,
							add: Gi,
							kill: _n,
							modifier: un,
							rawVars: 0,
						},
						o = {
							targetTest: 0,
							get: 0,
							getSetter: sn,
							aliases: {},
							register: 0,
						};
					if ((Oi(), e !== n)) {
						if (ht[t]) return;
						kt(n, kt(Ot(e, r), o)),
							Tt(n.prototype, Tt(r, Ot(e, o))),
							(ht[(n.prop = t)] = n),
							e.targetTest && (_t.push(n), (st[t] = 1)),
							(t =
								('css' === t ? 'CSS' : t[0].toUpperCase() + t.substr(1)) +
								'Plugin');
					}
					rt(t, n), e.register && e.register(mn, n, pn);
				}),
				(wi = {
					aqua: [0, (Ai = 255), Ai],
					lime: [0, Ai, 0],
					silver: [192, 192, 192],
					black: [0, 0, 0],
					maroon: [128, 0, 0],
					teal: [0, 128, 128],
					blue: [0, 0, Ai],
					navy: [0, 0, 128],
					white: [Ai, Ai, Ai],
					olive: [128, 128, 0],
					yellow: [Ai, Ai, 0],
					orange: [Ai, 165, 0],
					gray: [128, 128, 128],
					purple: [128, 0, 128],
					green: [0, 128, 0],
					red: [Ai, 0, 0],
					pink: [Ai, 192, 203],
					cyan: [0, Ai, Ai],
					transparent: [Ai, Ai, Ai, 0],
				}),
				(yi = function (e, t, i) {
					return (
						((6 * (e = e < 0 ? e + 1 : 1 < e ? e - 1 : e) < 1
							? t + (i - t) * e * 6
							: e < 0.5
							? i
							: 3 * e < 2
							? t + (i - t) * (2 / 3 - e) * 6
							: t) *
							Ai +
							0.5) |
						0
					);
				}),
				(bi = function (e, t) {
					var i,
						n,
						r,
						o,
						s,
						a,
						l,
						h,
						c,
						u,
						_ = e ? (Se(e) ? [e >> 16, (e >> 8) & Ai, e & Ai] : 0) : wi.black;
					if (!_) {
						if ((',' == e.substr(-1) && (e = e.substr(0, e.length - 1)), wi[e]))
							_ = wi[e];
						else if ('#' == e[0])
							4 === e.length &&
								(e = '#' + (i = e[1]) + i + (n = e[2]) + n + (r = e[3]) + r),
								(_ = [
									(e = parseInt(e.substr(1), 16)) >> 16,
									(e >> 8) & Ai,
									e & Ai,
								]);
						else if ('hsl' == e.substr(0, 3))
							if (((_ = u = e.match(qe)), t)) {
								if (~e.indexOf('=')) return e.match(He);
							} else
								(o = (+_[0] % 360) / 360),
									(s = +_[1] / 100),
									(i =
										2 * (a = +_[2] / 100) -
										(n = a <= 0.5 ? a * (s + 1) : a + s - a * s)),
									3 < _.length && (_[3] *= 1),
									(_[0] = yi(o + 1 / 3, i, n)),
									(_[1] = yi(o, i, n)),
									(_[2] = yi(o - 1 / 3, i, n));
						else _ = e.match(qe) || wi.transparent;
						_ = _.map(Number);
					}
					return (
						t &&
							!u &&
							((i = _[0] / Ai),
							(n = _[1] / Ai),
							(r = _[2] / Ai),
							(a = ((l = Math.max(i, n, r)) + (h = Math.min(i, n, r))) / 2),
							l == h
								? (o = s = 0)
								: ((c = l - h),
								  (s = 0.5 < a ? c / (2 - l - h) : c / (l + h)),
								  (o =
										l === i
											? (n - r) / c + (n < r ? 6 : 0)
											: l === n
											? (r - i) / c + 2
											: (i - n) / c + 4),
								  (o *= 60)),
							(_[0] = (o + 0.5) | 0),
							(_[1] = (100 * s + 0.5) | 0),
							(_[2] = (100 * a + 0.5) | 0)),
						_
					);
				}),
				(Ei = function (e, t) {
					var i,
						n,
						r,
						o = (e + '').match(xi),
						s = 0,
						a = '';
					if (!o) return e;
					for (i = 0; i < o.length; i++)
						(n = o[i]),
							(s += (r = e.substr(s, e.indexOf(n, s) - s)).length + n.length),
							3 === (n = bi(n, t)).length && n.push(1),
							(a +=
								r +
								(t
									? 'hsla(' + n[0] + ',' + n[1] + '%,' + n[2] + '%,' + n[3]
									: 'rgba(' + n.join(',')) +
								')');
					return a + e.substr(s);
				}),
				(xi = (function () {
					var e,
						t =
							'(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b';
					for (e in wi) t += '|' + e + '\\b';
					return RegExp(t + ')', 'gi');
				})()),
				(ki = /hsl[a]?\(/),
				(Bi = function (e) {
					var t,
						i = e.join(' ');
					(xi.lastIndex = 0),
						xi.test(i) &&
							((t = ki.test(i)), (e[0] = Ei(e[0], t)), (e[1] = Ei(e[1], t)));
				}),
				(Lo = 500),
				(Po = 33),
				(No = (Uo = Date.now)()),
				(jo = No),
				(Ho = qo = 1 / 60),
				(Jo = function e(t) {
					var i,
						n,
						r = Uo() - jo,
						o = !0 === t;
					Lo < r && (No += r - Po),
						(jo += r),
						(Xo.time = (jo - No) / 1e3),
						(0 < (i = Xo.time - Ho) || o) &&
							(Xo.frame++, (Ho += i + (qo <= i ? 0.004 : qo - i)), (n = 1)),
						o || (Yo = Vo(e)),
						n &&
							Go.forEach(function (e) {
								return e(Xo.time, r, Xo.frame, t);
							});
				}),
				(Mi = Xo =
					{
						time: 0,
						frame: 0,
						tick: function () {
							Jo(!0);
						},
						wake: function () {
							tt &&
								(!Ze &&
									Pe() &&
									((Je = Ze = window),
									(Ke = Je.document || {}),
									($e.gsap = mn),
									(Je.gsapVersions || (Je.gsapVersions = [])).push(mn.version),
									it(et || Je.GreenSockGlobals || (!Je.gsap && Je) || {}),
									(Wo = Je.requestAnimationFrame)),
								Yo && Xo.sleep(),
								(Vo =
									Wo ||
									function (e) {
										return setTimeout(e, (1e3 * (Ho - Xo.time) + 1) | 0);
									}),
								(Ti = 1),
								Jo(2));
						},
						sleep: function () {
							(Wo ? Je.cancelAnimationFrame : clearTimeout)(Yo),
								(Ti = 0),
								(Vo = ot);
						},
						lagSmoothing: function (e, t) {
							Po = Math.min(t, (Lo = e || 1 / Te), 0);
						},
						fps: function (e) {
							(qo = 1 / (e || 60)), (Ho = Xo.time + qo);
						},
						add: function (e) {
							!~Go.indexOf(e) && Go.push(e), Oi();
						},
						remove: function (e) {
							var t;
							~(t = Go.indexOf(e)) && Go.splice(t, 1);
						},
						_listeners: (Go = []),
					}),
				(Oi = function () {
					return !Ti && Mi.wake();
				}),
				(Ri = {}),
				(Qi = /^[\d.\-M][\d.\-,\s]/),
				(Ci = /["']/g),
				(Ii = function (e) {
					for (
						var t,
							i,
							n,
							r = {},
							o = e.substr(1, e.length - 3).split(':'),
							s = o[0],
							a = 1,
							l = o.length;
						a < l;
						a++
					)
						(i = o[a]),
							(t = a !== l - 1 ? i.lastIndexOf(',') : i.length),
							(n = i.substr(0, t)),
							(r[s] = isNaN(n) ? n.replace(Ci, '').trim() : +n),
							(s = i.substr(t + 1).trim());
					return r;
				}),
				(Di = function (e) {
					var t = (e + '').split('('),
						i = Ri[t[0]];
					return i && 1 < t.length && i.config
						? i.config.apply(
								null,
								~e.indexOf('{') ? [Ii(t[1])] : Ye.exec(e)[1].split(',').map(Et)
						  )
						: Ri._CE && Qi.test(e)
						? Ri._CE('', e)
						: i;
				}),
				(zi = function (e) {
					return function (t) {
						return 1 - e(1 - t);
					};
				}),
				(Si = function (e, t) {
					return (e && (ze(e) ? e : Ri[e] || Di(e))) || t;
				}),
				(Fi = function (e, t, i, n) {
					void 0 === i &&
						(i = function (e) {
							return 1 - t(1 - e);
						}),
						void 0 === n &&
							(n = function (e) {
								return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
							});
					var r,
						o = { easeIn: t, easeOut: i, easeInOut: n };
					return (
						vt(e, function (e) {
							for (var t in ((Ri[e] = $e[e] = o),
							(Ri[(r = e.toLowerCase())] = i),
							o))
								Ri[
									r +
										('easeIn' === t
											? '.in'
											: 'easeOut' === t
											? '.out'
											: '.inOut')
								] = Ri[e + '.' + t] = o[t];
						}),
						o
					);
				}),
				(Ui = function (e) {
					return function (t) {
						return t < 0.5
							? (1 - e(1 - 2 * t)) / 2
							: 0.5 + e(2 * (t - 0.5)) / 2;
					};
				}),
				(Li = function e(t, i, n) {
					var r = 1 <= i ? i : 1,
						o = (n || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1),
						s = (o / Me) * (Math.asin(1 / r) || 0),
						a = function (e) {
							return 1 === e
								? 1
								: r * Math.pow(2, -10 * e) * Ie((e - s) * o) + 1;
						},
						l =
							'out' === t
								? a
								: 'in' === t
								? function (e) {
										return 1 - a(1 - e);
								  }
								: Ui(a);
					return (
						(o = Me / o),
						(l.config = function (i, n) {
							return e(t, i, n);
						}),
						l
					);
				}),
				(Pi = function e(t, i) {
					void 0 === i && (i = 1.70158);
					var n = function (e) {
							return --e * e * ((i + 1) * e + i) + 1;
						},
						r =
							'out' === t
								? n
								: 'in' === t
								? function (e) {
										return 1 - n(1 - e);
								  }
								: Ui(n);
					return (
						(r.config = function (i) {
							return e(t, i);
						}),
						r
					);
				}),
				vt('Linear,Quad,Cubic,Quart,Quint,Strong', function (e, t) {
					var i = t < 5 ? t + 1 : t;
					Fi(
						e + ',Power' + (i - 1),
						t
							? function (e) {
									return Math.pow(e, i);
							  }
							: function (e) {
									return e;
							  },
						function (e) {
							return 1 - Math.pow(1 - e, i);
						},
						function (e) {
							return e < 0.5
								? Math.pow(2 * e, i) / 2
								: 1 - Math.pow(2 * (1 - e), i) / 2;
						}
					);
				}),
				(Ri.Linear.easeNone = Ri.none = Ri.Linear.easeIn),
				Fi('Elastic', Li('in'), Li('out'), Li()),
				(Zo = 7.5625),
				($o = 2 * (Ko = 1 / 2.75)),
				(es = 2.5 * Ko),
				Fi(
					'Bounce',
					function (e) {
						return 1 - ts(1 - e);
					},
					(ts = function (e) {
						return e < Ko
							? Zo * e * e
							: e < $o
							? Zo * Math.pow(e - 1.5 / 2.75, 2) + 0.75
							: e < es
							? Zo * (e -= 2.25 / 2.75) * e + 0.9375
							: Zo * Math.pow(e - 2.625 / 2.75, 2) + 0.984375;
					})
				),
				Fi('Expo', function (e) {
					return e ? Math.pow(2, 10 * (e - 1)) : 0;
				}),
				Fi('Circ', function (e) {
					return -(Qe(1 - e * e) - 1);
				}),
				Fi('Sine', function (e) {
					return 1 - Ce(e * Oe);
				}),
				Fi('Back', Pi('in'), Pi('out'), Pi()),
				(Ri.SteppedEase =
					Ri.steps =
					$e.SteppedEase =
						{
							config: function (e, t) {
								void 0 === e && (e = 1);
								var i = 1 / e,
									n = e + (t ? 0 : 1),
									r = t ? 1 : 0,
									o = 1 - Te;
								return function (e) {
									return (((n * Wt(0, o, e)) | 0) + r) * i;
								};
							},
						}),
				(ke.ease = Ri['quad.out']),
				(Ni = function (e, t) {
					(this.id = Re++),
						((e._gsap = this).target = e),
						(this.harness = t),
						(this.get = t ? t.get : mt),
						(this.set = t ? t.getSetter : sn);
				}),
				kt(
					(ji = (function () {
						function e(e, t) {
							var i = e.parent || Xe;
							(this.vars = e),
								(this._dur = this._tDur = +e.duration || 0),
								(this._delay = +e.delay || 0),
								(this._repeat = e.repeat || 0) &&
									((this._rDelay = e.repeatDelay || 0),
									(this._yoyo = !!e.yoyo || !!e.yoyoEase),
									Ht(this)),
								(this._ts = 1),
								(this.data = e.data),
								Ti || Mi.wake(),
								i && Pt(i, this, t || 0 === t ? t : i._time),
								e.reversed && this.reversed(!0),
								e.paused && this.paused(!0);
						}
						var t = e.prototype;
						return (
							(t.delay = function (e) {
								return e || 0 === e ? ((this._delay = e), this) : this._delay;
							}),
							(t.duration = function (e) {
								var t = arguments.length,
									i = this._repeat,
									n = 0 < i ? i * ((t ? e : this._dur) + this._rDelay) : 0;
								return t
									? this.totalDuration(i < 0 ? e : e + n)
									: this.totalDuration() && this._dur;
							}),
							(t.totalDuration = function (e) {
								if (!arguments.length) return this._tDur;
								var t = this._repeat,
									i = (e || this._rDelay) && t < 0;
								return (
									(this._tDur = i ? 1e20 : e),
									(this._dur = i ? e : (e - t * this._rDelay) / (t + 1)),
									(this._dirty = 0),
									zt(this.parent),
									this
								);
							}),
							(t.totalTime = function (e, t) {
								if ((Oi(), !arguments.length)) return this._tTime;
								var i,
									n = this.parent || this._dp;
								if (n && n.smoothChildTiming && this._ts) {
									for (
										i = this._start,
											this._start =
												n._time -
												(0 < this._ts
													? e / this._ts
													: ((this._dirty ? this.totalDuration() : this._tDur) -
															e) /
													  -this._ts),
											this._end += this._start - i,
											n._dirty || zt(n);
										n.parent;

									)
										n.parent._time !==
											n._start +
												(0 < n._ts
													? n._tTime / n._ts
													: (n.totalDuration() - n._tTime) / -n._ts) &&
											n.totalTime(n._tTime, !0),
											(n = n.parent);
									this.parent || Pt(this._dp, this, this._start - this._delay);
								}
								return (this._tTime === e && this._dur) || bt(this, e, t), this;
							}),
							(t.time = function (e, t) {
								return arguments.length
									? this.totalTime(e + Ut(this), t)
									: this._time;
							}),
							(t.totalProgress = function (e, t) {
								return arguments.length
									? this.totalTime(this.totalDuration() * e, t)
									: this._tTime / this.totalDuration();
							}),
							(t.progress = function (e, t) {
								return arguments.length
									? this.totalTime(this.duration() * e + Ut(this), t)
									: this.duration()
									? this._time / this._dur
									: this.ratio;
							}),
							(t.iteration = function (e, t) {
								var i = this.duration() + this._rDelay;
								return arguments.length
									? this.totalTime(this._time + (e - 1) * i, t)
									: this._repeat
									? 1 + ~~(this._tTime / i)
									: 1;
							}),
							(t.timeScale = function (e) {
								var t = this._ts;
								return arguments.length
									? t
										? ((this._end =
												this._start + this._tDur / (this._ts = e || Te)),
										  St(this).totalTime(this._tTime, !0))
										: ((this._pauseTS = e), this)
									: t || this._pauseTS;
							}),
							(t.paused = function (e) {
								var t = !this._ts;
								return arguments.length
									? (t !== e &&
											(e
												? ((this._pauseTS = this._ts),
												  (this._pTime =
														this._tTime ||
														Math.max(-this._delay, this.rawTime())),
												  (this._ts = this._act = 0))
												: ((this._ts = this._pauseTS),
												  (e = this._tTime || this._pTime),
												  1 === this.progress() && (this._tTime -= Te),
												  this.totalTime(e, !0))),
									  this)
									: t;
							}),
							(t.startTime = function (e) {
								return arguments.length
									? (this.parent &&
											this.parent._sort &&
											Pt(this.parent, this, e - this._delay),
									  this)
									: this._start;
							}),
							(t.endTime = function (e) {
								return (
									this._start +
									(Le(e) ? this.totalDuration() : this.duration()) /
										Math.abs(this._ts)
								);
							}),
							(t.rawTime = function (e) {
								var t = this.parent || this._dp;
								return t
									? e &&
									  (!this._ts ||
											(this._repeat && this._time && this.totalProgress() < 1))
										? this._tTime % (this._dur + this._rDelay)
										: this._ts
										? Lt(t.rawTime(e), this)
										: this._tTime
									: this._tTime;
							}),
							(t.repeat = function (e) {
								return arguments.length
									? ((this._repeat = e), Ht(this))
									: this._repeat;
							}),
							(t.repeatDelay = function (e) {
								return arguments.length
									? ((this._rDelay = e), Ht(this))
									: this._rDelay;
							}),
							(t.yoyo = function (e) {
								return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
							}),
							(t.seek = function (e, t) {
								return this.totalTime(Yt(this, e), Le(t));
							}),
							(t.restart = function (e, t) {
								return this.play().totalTime(e ? -this._delay : 0, Le(t));
							}),
							(t.play = function (e, t) {
								return (
									null != e && this.seek(e, t), this.reversed(!1).paused(!1)
								);
							}),
							(t.reverse = function (e, t) {
								return (
									null != e && this.seek(e || this.totalDuration(), t),
									this.reversed(!0).paused(!1)
								);
							}),
							(t.pause = function (e, t) {
								return null != e && this.seek(e, t), this.paused(!0);
							}),
							(t.resume = function () {
								return this.paused(!1);
							}),
							(t.reversed = function (e) {
								var t = this._ts || this._pauseTS;
								return arguments.length
									? (e !== this.reversed() &&
											((this[this._ts ? '_ts' : '_pauseTS'] =
												Math.abs(t) * (e ? -1 : 1)),
											this.totalTime(this._tTime, !0)),
									  this)
									: t < 0;
							}),
							(t.invalidate = function () {
								return (this._initted = 0), this;
							}),
							(t.isActive = function () {
								var e,
									t = this.parent || this._dp,
									i = this._start;
								return (
									!t ||
									(this._ts &&
										this._initted &&
										t.isActive() &&
										(e = t.rawTime(!0)) >= i &&
										e < this.endTime(!0) - Te)
								);
							}),
							(t.eventCallback = function (e, t, i) {
								var n = this.vars;
								return 1 < arguments.length
									? (t
											? ((n[e] = t),
											  i && (n[e + 'Params'] = i),
											  'onUpdate' === e && (this._onUpdate = t))
											: delete n[e],
									  this)
									: n[e];
							}),
							(t.then = function (e) {
								var t = this;
								return (
									void 0 === e && (e = ot),
									new Promise(function (i) {
										t._prom = function () {
											e(t), i();
										};
									})
								);
							}),
							(t.kill = function () {
								mi(this);
							}),
							e
						);
					})()).prototype,
					{
						_time: 0,
						_start: 0,
						_end: 0,
						_tTime: 0,
						_tDur: 0,
						_dirty: 0,
						_repeat: 0,
						_yoyo: !1,
						parent: 0,
						_rDelay: 0,
						_ts: 1,
						_dp: 0,
						ratio: 0,
						_zTime: -Te,
						_prom: 0,
					}
				),
				kt(
					(qi = (function (e) {
						function t(t, i) {
							var n;
							return (
								void 0 === t && (t = {}),
								((n = e.call(this, t, i) || this).labels = {}),
								(n.smoothChildTiming = Le(t.smoothChildTiming)),
								(n.autoRemoveChildren = !!t.autoRemoveChildren),
								(n._sort = Le(t.sortChildren)),
								n
							);
						}
						r(t, e);
						var i = t.prototype;
						return (
							(i.to = function (e, t, i, n) {
								return (
									new en(e, wt(arguments, 0, this), Yt(this, Se(t) ? n : i)),
									this
								);
							}),
							(i.from = function (e, t, i, n) {
								return (
									new en(e, wt(arguments, 1, this), Yt(this, Se(t) ? n : i)),
									this
								);
							}),
							(i.fromTo = function (e, t, i, n, r) {
								return (
									new en(e, wt(arguments, 2, this), Yt(this, Se(t) ? r : n)),
									this
								);
							}),
							(i.set = function (e, t, i) {
								return (
									(t.duration = 0),
									(t.parent = this),
									t.repeatDelay || (t.repeat = 0),
									(t.immediateRender = !!t.immediateRender),
									new en(e, t, Yt(this, i)),
									this
								);
							}),
							(i.call = function (e, t, i) {
								return Pt(this, en.delayedCall(0, e, t), Yt(this, i));
							}),
							(i.staggerTo = function (e, t, i, n, r, o, s) {
								return (
									(i.duration = t),
									(i.stagger = i.stagger || n),
									(i.onComplete = o),
									(i.onCompleteParams = s),
									(i.parent = this),
									new en(e, i, Yt(this, r)),
									this
								);
							}),
							(i.staggerFrom = function (e, t, i, n, r, o, s) {
								return (
									(i.runBackwards = 1),
									(i.immediateRender = Le(i.immediateRender)),
									this.staggerTo(e, t, i, n, r, o, s)
								);
							}),
							(i.staggerFromTo = function (e, t, i, n, r, o, s, a) {
								return (
									(n.startAt = i),
									(n.immediateRender = Le(n.immediateRender)),
									this.staggerTo(e, t, n, r, o, s, a)
								);
							}),
							(i.render = function (e, t, i) {
								var n,
									r,
									o,
									s,
									a,
									l,
									h,
									c,
									u,
									_,
									d,
									f,
									p,
									m,
									v = this._time,
									g = this._dirty ? this.totalDuration() : this._tDur,
									A = this._dur,
									w = g - Te < e && 0 <= e && this !== Xe ? g : e < Te ? 0 : e,
									y = this._zTime < 0 != e < 0 && this._initted;
								if (w !== this._tTime || i || y) {
									if (
										(y &&
											(A || (v = this._zTime), (!e && t) || (this._zTime = e)),
										(n = w),
										(u = this._start),
										(l = 0 === (c = this._ts)),
										v !== this._time && A && (n += this._time - v),
										this._repeat &&
											((d = this._yoyo),
											(a = A + this._rDelay),
											(A < (n = gt(w % a)) || g === w) && (n = A),
											(s = ~~(w / a)) && s === w / a && ((n = A), s--),
											(_ = ~~(this._tTime / a)) && _ === this._tTime / a && _--,
											d && 1 & s && ((n = A - n), 1),
											s !== _ && !this._lock))
									) {
										if (
											((p = (f = d && 1 & _) === (d && 1 & s)),
											s < _ && (f = !f),
											(v = f ? 0 : A),
											(this._lock = 1),
											(this.render(v, t, !A)._lock = 0),
											!t && this.parent && pi(this, 'onRepeat'),
											v !== this._time || l != !this._ts)
										)
											return this;
										if (
											(p &&
												((this._lock = 2),
												(v = f ? A + 1e-4 : -1e-4),
												this.render(v, !0)),
											(this._lock = 0),
											!this._ts && !l)
										)
											return this;
									}
									if (
										(this._hasPause &&
											!this._forcing &&
											this._lock < 2 &&
											(h = qt(this, gt(v), gt(n))) &&
											(w -= n - (n = h._start)),
										(this._tTime = w),
										(this._time = n),
										(this._act = !c),
										this._initted ||
											((this._onUpdate = this.vars.onUpdate),
											(this._initted = 1)),
										v || !n || t || pi(this, 'onStart'),
										v <= n && 0 <= e)
									)
										for (r = this._first; r; ) {
											if (
												((o = r._next),
												(r._act || n >= r._start) && r._ts && h !== r)
											) {
												if (r.parent !== this) return this.render(e, t, i);
												if (
													(r.render(
														0 < r._ts
															? (n - r._start) * r._ts
															: (r._dirty ? r.totalDuration() : r._tDur) +
																	(n - r._start) * r._ts,
														t,
														i
													),
													n !== this._time || (!this._ts && !l))
												) {
													h = 0;
													break;
												}
											}
											r = o;
										}
									else
										for (r = this._last, m = e < 0 ? e : n; r; ) {
											if (
												((o = r._prev),
												(r._act || m <= r._end) && r._ts && h !== r)
											) {
												if (r.parent !== this) return this.render(e, t, i);
												if (
													(r.render(
														0 < r._ts
															? (m - r._start) * r._ts
															: (r._dirty ? r.totalDuration() : r._tDur) +
																	(m - r._start) * r._ts,
														t,
														i
													),
													n !== this._time || (!this._ts && !l))
												) {
													h = 0;
													break;
												}
											}
											r = o;
										}
									if (
										h &&
										!t &&
										(this.pause(),
										(h.render(v <= n ? 0 : -Te)._zTime = v <= n ? 1 : -1),
										this._ts)
									)
										return (this._start = u), this.render(e, t, i);
									this._onUpdate && !t && pi(this, 'onUpdate', !0),
										(w === g || (!w && this._ts < 0)) &&
											((u !== this._start &&
												Math.abs(c) == Math.abs(this._ts)) ||
												((!n || g >= this.totalDuration()) &&
													((!e && A) || Dt(this, 1),
													t ||
														(e < 0 && !v) ||
														(pi(
															this,
															w === g ? 'onComplete' : 'onReverseComplete',
															!0
														),
														this._prom && w === g && this._prom()))));
								}
								return this;
							}),
							(i.add = function (e, t) {
								var i = this;
								if ((Se(t) || (t = Yt(this, t)), !(e instanceof ji))) {
									if (je(e))
										return (
											e.forEach(function (e) {
												return i.add(e, t);
											}),
											zt(this)
										);
									if (De(e)) return this.addLabel(e, t);
									if (!ze(e)) return this;
									e = en.delayedCall(0, e);
								}
								return this !== e ? Pt(this, e, t) : this;
							}),
							(i.getChildren = function (e, t, i, n) {
								void 0 === e && (e = !0),
									void 0 === t && (t = !0),
									void 0 === i && (i = !0),
									void 0 === n && (n = -Be);
								for (var r = [], o = this._first; o; )
									o._start >= n &&
										(o instanceof en
											? t && r.push(o)
											: (i && r.push(o),
											  e && r.push.apply(r, o.getChildren(!0, t, i)))),
										(o = o._next);
								return r;
							}),
							(i.getById = function (e) {
								for (var t = this.getChildren(1, 1, 1), i = t.length; i--; )
									if (t[i].vars.id === e) return t[i];
							}),
							(i.remove = function (e) {
								return De(e)
									? this.removeLabel(e)
									: ze(e)
									? this.killTweensOf(e)
									: (It(this, e),
									  e === this._recent && (this._recent = this._last),
									  zt(this));
							}),
							(i.totalTime = function (t, i) {
								return arguments.length
									? ((this._forcing = 1),
									  this.parent ||
											this._dp ||
											!this._ts ||
											(this._start =
												Mi.time -
												(0 < this._ts
													? t / this._ts
													: (this.totalDuration() - t) / -this._ts)),
									  e.prototype.totalTime.call(this, t, i),
									  (this._forcing = 0),
									  this)
									: this._tTime;
							}),
							(i.addLabel = function (e, t) {
								return (this.labels[e] = Yt(this, t)), this;
							}),
							(i.removeLabel = function (e) {
								return delete this.labels[e], this;
							}),
							(i.addPause = function (e, t, i) {
								var n = en.delayedCall(0, t || ot, i);
								return (
									(n.data = 'isPause'),
									(this._hasPause = 1),
									Pt(this, n, Yt(this, e))
								);
							}),
							(i.removePause = function (e) {
								var t = this._first;
								for (e = Yt(this, e); t; )
									t._start === e && 'isPause' === t.data && Dt(t),
										(t = t._next);
							}),
							(i.killTweensOf = function (e, t, i) {
								for (var n = this.getTweensOf(e, i), r = n.length; r--; )
									n[r].kill(e, t);
								return this;
							}),
							(i.getTweensOf = function (e, t) {
								for (var i, n = [], r = ei(e), o = this._first; o; )
									o instanceof en
										? !At(o._targets, r) || (t && !o.isActive()) || n.push(o)
										: (i = o.getTweensOf(r, t)).length && n.push.apply(n, i),
										(o = o._next);
								return n;
							}),
							(i.tweenTo = function (e, t) {
								var i = this,
									n = Yt(i, e),
									r = t && t.startAt,
									o = en.to(
										i,
										kt(
											{
												ease: 'none',
												lazy: !1,
												time: n,
												duration:
													Math.abs(n - (r && 'time' in r ? r.time : i._time)) /
														i.timeScale() || Te,
												onStart: function () {
													i.pause();
													var e = Math.abs(n - i._time) / i.timeScale();
													o._dur !== e &&
														((o._dur = e), o.render(o._time, !0, !0)),
														t &&
															t.onStart &&
															t.onStart.apply(o, t.onStartParams || []);
												},
											},
											t
										)
									);
								return o;
							}),
							(i.tweenFromTo = function (e, t, i) {
								return this.tweenTo(
									t,
									kt({ startAt: { time: Yt(this, e) } }, i)
								);
							}),
							(i.recent = function () {
								return this._recent;
							}),
							(i.nextLabel = function (e) {
								return void 0 === e && (e = this._time), fi(this, Yt(this, e));
							}),
							(i.previousLabel = function (e) {
								return (
									void 0 === e && (e = this._time), fi(this, Yt(this, e), 1)
								);
							}),
							(i.currentLabel = function (e) {
								return arguments.length
									? this.seek(e, !0)
									: this.previousLabel(this._time + Te);
							}),
							(i.shiftChildren = function (e, t, i) {
								void 0 === i && (i = 0);
								for (var n, r = this._first, o = this.labels; r; )
									r._start >= i && (r._start += e), (r = r._next);
								if (t) for (n in o) o[n] >= i && (o[n] += e);
								return zt(this);
							}),
							(i.invalidate = function () {
								var t = this._first;
								for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
								return e.prototype.invalidate.call(this);
							}),
							(i.clear = function (e) {
								void 0 === e && (e = !0);
								for (var t, i = this._first; i; )
									(t = i._next), this.remove(i), (i = t);
								return (
									(this._time = this._tTime = 0),
									e && (this.labels = {}),
									zt(this)
								);
							}),
							(i.totalDuration = function (e) {
								var t,
									i,
									n = 0,
									r = this,
									o = r._last,
									s = Be,
									a = r._repeat,
									l = a * r._rDelay || 0,
									h = a < 0;
								if (arguments.length)
									return h ? r : r.timeScale(r.totalDuration() / e);
								if (r._dirty) {
									for (; o; )
										(t = o._prev),
											o._dirty && o.totalDuration(),
											o._start > s && r._sort && o._ts && !r._lock
												? ((r._lock = 1),
												  Pt(r, o, o._start - o._delay),
												  (r._lock = 0))
												: (s = o._start),
											o._start < 0 &&
												o._ts &&
												((n -= o._start),
												((!r.parent && !r._dp) ||
													(r.parent && r.parent.smoothChildTiming)) &&
													((r._start += o._start / r._ts),
													(r._time -= o._start),
													(r._tTime -= o._start)),
												r.shiftChildren(-o._start, !1, -Be),
												(s = 0)),
											n <
												(i = o._end =
													o._start + o._tDur / Math.abs(o._ts || o._pauseTS)) &&
												o._ts &&
												(n = gt(i)),
											(o = t);
									(r._dur =
										r === Xe && r._time > n ? r._time : Math.min(Be, n)),
										(r._tDur =
											h && (r._dur || l)
												? 1e20
												: Math.min(Be, n * (a + 1) + l)),
										(r._end =
											r._start +
											(r._tDur / Math.abs(r._ts || r._pauseTS) || 0)),
										(r._dirty = 0);
								}
								return r._tDur;
							}),
							(t.updateRoot = function (e) {
								if ((Xe._ts && bt(Xe, Lt(e, Xe)), Mi.frame >= ut)) {
									ut += xe.autoSleep || 120;
									var t = Xe._first;
									if (
										(!t || !t._ts) &&
										xe.autoSleep &&
										Mi._listeners.length < 2
									) {
										for (; t && !t._ts; ) t = t._next;
										t || Mi.sleep();
									}
								}
							}),
							t
						);
					})(ji)).prototype,
					{ _lock: 0, _hasPause: 0, _forcing: 0 }
				),
				(Hi = function (e, t, i, n, r, o, s) {
					var a,
						l,
						h,
						c,
						u,
						_,
						d,
						f,
						p = new pn(this._pt, e, t, 0, 1, hn, null, r),
						m = 0,
						v = 0;
					for (
						p.b = i,
							p.e = n,
							i += '',
							(d = ~(n += '').indexOf('random(')) && (n = ui(n)),
							o && (o((f = [i, n]), e, t), (i = f[0]), (n = f[1])),
							l = i.match(Ge) || [];
						(a = Ge.exec(n));

					)
						(c = a[0]),
							(u = n.substring(m, a.index)),
							h ? (h = (h + 1) % 5) : 'rgba(' == u.substr(-5) && (h = 1),
							c !== l[v++] &&
								((_ = parseFloat(l[v - 1])),
								(p._pt = {
									_next: p._pt,
									p: u || 1 === v ? u : ',',
									s: _,
									c:
										'=' == c[1]
											? parseFloat(c.substr(2)) * ('-' == c[0] ? -1 : 1)
											: parseFloat(c) - _,
									m: h && h < 4 ? Math.round : 0,
								}),
								(m = Ge.lastIndex));
					return (
						(p.c = m < n.length ? n.substring(m, n.length) : ''),
						(p.fp = s),
						(Ve.test(n) || d) && (p.e = 0),
						(this._pt = p)
					);
				}),
				(Gi = function (e, t, i, n, r, o, s, a, l) {
					ze(n) && (n = n(r || 0, e, o));
					var h,
						c = e[t],
						u =
							'get' !== i
								? i
								: ze(c)
								? l
									? e[
											t.indexOf('set') || !ze(e['get' + t.substr(3)])
												? t
												: 'get' + t.substr(3)
									  ](l)
									: e[t]()
								: c,
						_ = ze(c) ? (l ? rn : nn) : tn;
					if (
						(De(n) &&
							(~n.indexOf('random(') && (n = ui(n)),
							'=' == n[1] &&
								(n =
									parseFloat(u) +
									parseFloat(n.substr(2)) * ('-' == n[0] ? -1 : 1) +
									Xt(u))),
						u !== n)
					)
						return isNaN(u + n)
							? Hi.call(this, e, t, u, n, _, a || xe.stringFilter, l)
							: ((h = new pn(
									this._pt,
									e,
									t,
									+u || 0,
									n - (u || 0),
									'boolean' == typeof c ? ln : an,
									0,
									_
							  )),
							  l && (h.fp = l),
							  s && h.modifier(s, this, e),
							  (this._pt = h));
				}),
				(Yi = function (e, t, i, n, r) {
					if (
						(ze(e) && (e = Zi(e, r, t, i, n)),
						!Ue(e) || (e.style && e.nodeType) || je(e))
					)
						return De(e) ? Zi(e, r, t, i, n) : e;
					var o,
						s = {};
					for (o in e) s[o] = Zi(e[o], r, t, i, n);
					return s;
				}),
				(Vi = function (e, t, i, n, r, o) {
					var s, a, l, h;
					if (
						ht[e] &&
						!1 !==
							(s = new ht[e]()).init(
								r,
								s.rawVars ? t[e] : Yi(t[e], n, r, o, i),
								i,
								n,
								o
							) &&
						((i._pt = a =
							new pn(i._pt, r, e, 0, 1, s.render, s, 0, s.priority)),
						i !== vi)
					)
						for (
							l = i._ptLookup[i._targets.indexOf(r)], h = s._props.length;
							h--;

						)
							l[s._props[h]] = a;
					return s;
				}),
				(Xi = function e(t, i) {
					var n,
						r,
						o,
						s,
						a,
						l,
						h,
						c,
						u,
						_,
						d,
						f,
						p = t.vars,
						m = p.ease,
						v = p.startAt,
						g = p.immediateRender,
						A = p.lazy,
						w = p.onUpdate,
						y = p.onUpdateParams,
						b = p.callbackScope,
						E = p.runBackwards,
						x = p.yoyoEase,
						k = p.keyframes,
						B = p.autoRevert,
						T = t._dur,
						M = t._startAt,
						O = t._targets,
						R = t.parent,
						Q = R && 'nested' === R.data ? R.parent._targets : O,
						C = 'auto' === t._overwrite,
						I = t.timeline;
					if (
						(!I || (k && m) || (m = 'none'),
						(t._ease = Si(m, ke.ease)),
						(t._yEase = x ? zi(Si(!0 === x ? m : x, ke.ease)) : 0),
						x &&
							t._yoyo &&
							!t._repeat &&
							((x = t._yEase), (t._yEase = t._ease), (t._ease = x)),
						!I)
					) {
						if ((M && M.render(-1, !0).kill(), v)) {
							if (
								(Dt(
									(t._startAt = en.set(
										O,
										kt(
											{
												data: 'isStart',
												overwrite: !1,
												parent: R,
												immediateRender: !0,
												lazy: Le(A),
												startAt: null,
												delay: 0,
												onUpdate: w,
												onUpdateParams: y,
												callbackScope: b,
												stagger: 0,
											},
											v
										)
									))
								),
								g)
							)
								if (0 < i) !B && (t._startAt = 0);
								else if (T) return;
						} else if (E && T)
							if (M) !B && (t._startAt = 0);
							else if (
								(i && (g = !1),
								Dt(
									(t._startAt = en.set(
										O,
										Tt(Ot(p, st), {
											overwrite: !1,
											data: 'isFromStart',
											lazy: g && Le(A),
											immediateRender: g,
											stagger: 0,
											parent: R,
										})
									))
								),
								g)
							) {
								if (!i) return;
							} else e(t._startAt, i), g && !B && (t._startAt = 0);
						for (
							n = Ot(p, st),
								f = (c = O[(t._pt = 0)] ? pt(O[0]).harness : 0) && p[c.prop],
								r = 0;
							r < O.length;
							r++
						) {
							if (
								((h = (a = O[r])._gsap || ft(O)[r]._gsap),
								(t._ptLookup[r] = _ = {}),
								lt[h.id] && yt(),
								(d = Q === O ? r : Q.indexOf(a)),
								c &&
									!1 !== (u = new c()).init(a, f || n, t, d, Q) &&
									((t._pt = s =
										new pn(t._pt, a, u.name, 0, 1, u.render, u, 0, u.priority)),
									u._props.forEach(function (e) {
										_[e] = s;
									}),
									u.priority && (l = 1)),
								!c || f)
							)
								for (o in n)
									ht[o] && (u = Vi(o, n, t, d, a, Q))
										? u.priority && (l = 1)
										: (_[o] = s =
												Gi.call(t, a, o, 'get', n[o], d, Q, 0, p.stringFilter));
							t._op && t._op[r] && t.kill(a, t._op[r]),
								C && ((Wi = t), Xe.killTweensOf(a, _, !0), (Wi = 0)),
								t._pt && ((Le(A) && T) || (A && !T)) && (lt[h.id] = 1);
						}
						l && fn(t), t._onInit && t._onInit(t);
					}
					(t._from = !I && !!p.runBackwards),
						(t._onUpdate = w),
						(t._initted = 1);
				}),
				(Ji = function (e, t) {
					var i,
						n,
						r,
						o,
						s = e[0] ? pt(e[0]).harness : 0,
						a = s && s.aliases;
					if (!a) return t;
					for (n in ((i = Tt({}, t)), a))
						if (n in i)
							for (r = (o = a[n].split(',')).length; r--; ) i[o[r]] = i[n];
					return i;
				}),
				(Zi = function (e, t, i, n, r) {
					return ze(e)
						? e.call(t, i, n, r)
						: De(e) && ~e.indexOf('random(')
						? ui(e)
						: e;
				}),
				($i = (
					(Ki = dt + ',repeat,repeatDelay,yoyo,yoyoEase') +
					',id,stagger,delay,duration'
				).split(',')),
				kt(
					(en = (function (e) {
						function t(t, i, r) {
							var o, s, a, l, h, c, u, _, d, f, p, m, v, g, A, w, y, b;
							if (
								('number' == typeof i &&
									((r.duration = i), (i = r), (r = null)),
								(a = (s = (o = e.call(this, Rt(i), r) || this).vars).duration),
								(l = s.delay),
								(h = s.immediateRender),
								(c = s.stagger),
								(u = s.overwrite),
								(_ = s.keyframes),
								(d = s.defaults),
								(f = ei(t)),
								(o._targets = f.length
									? ft(f)
									: nt(
											'GSAP target ' + t + ' not found. https://greensock.com',
											!xe.nullTargetWarn
									  ) || [{}]),
								(o._ptLookup = []),
								(o._overwrite = u),
								_ || c || Ne(a) || Ne(l))
							) {
								if (
									((i = o.vars),
									(p = o.timeline =
										new qi({ data: 'nested', defaults: d || {} })).kill(),
									(p.parent = n(o)),
									_)
								)
									kt(p.vars.defaults, { ease: 'none' }),
										_.forEach(function (e) {
											return p.to(f, e, '>');
										});
								else {
									if (((g = f.length), (y = c ? ti(c) : ot), Ue(c)))
										for (A in c) ~Ki.indexOf(A) && ((b = b || {})[A] = c[A]);
									for (m = 0; m < g; m++) {
										for (A in ((v = {}), i)) ~$i.indexOf(A) || (v[A] = i[A]);
										(v.stagger = 0),
											b && Tt(v, b),
											i.yoyoEase && !i.repeat && (v.yoyoEase = i.yoyoEase),
											(w = f[m]),
											(v.duration = +Zi(a, n(o), m, w, f)),
											(v.delay = (+Zi(l, n(o), m, w, f) || 0) - o._delay),
											!c &&
												1 === g &&
												v.delay &&
												((o._delay = l = v.delay),
												(o._start += l),
												(v.delay = 0)),
											p.to(w, v, y(m, w, f));
									}
									a = l = 0;
								}
								a || o.duration((a = p.duration()));
							} else o.timeline = 0;
							return (
								!0 === u && ((Wi = n(o)), Xe.killTweensOf(f), (Wi = 0)),
								(h ||
									(!a &&
										!_ &&
										o._start === o.parent._time &&
										Le(h) &&
										Ft(n(o)) &&
										'nested' !== o.parent.data)) &&
									((o._tTime = -Te), o.render(Math.max(0, -l))),
								o
							);
						}
						r(t, e);
						var i = t.prototype;
						return (
							(i.render = function (e, t, i) {
								var n,
									r,
									o,
									s,
									a,
									l,
									h,
									c,
									u,
									_ = this._time,
									d = this._tDur,
									f = this._dur,
									p = d - Te < e && 0 <= e ? d : e < Te ? 0 : e;
								if (f) {
									if (
										p !== this._tTime ||
										i ||
										(this._startAt && this._zTime < 0 != e < 0)
									) {
										if (((n = p), (c = this.timeline), this._repeat)) {
											if (
												((s = f + this._rDelay),
												f < (n = gt(p % s)) && (n = f),
												(o = ~~(p / s)) && o === p / s && ((n = f), o--),
												(l = this._yoyo && 1 & o) &&
													((u = this._yEase), (n = f - n)),
												(a = ~~(this._tTime / s)) &&
													a === this._tTime / s &&
													a--,
												n === _ && !i)
											)
												return this;
											o !== a &&
												this.vars.repeatRefresh &&
												!this._lock &&
												((this._lock = 1),
												(this.render(s * o, !0).invalidate()._lock = 0));
										}
										if (!this._initted && Nt(this, n, i, t)) return this;
										for (
											this._tTime = p,
												this._time = n,
												!this._act &&
													this._ts &&
													((this._act = 1), (this._lazy = 0)),
												this.ratio = h = (u || this._ease)(n / f),
												this._from && (this.ratio = h = 1 - h),
												_ || !n || t || pi(this, 'onStart'),
												r = this._pt;
											r;

										)
											r.r(h, r.d), (r = r._next);
										(c &&
											c.render(e < 0 ? e : !n && l ? -Te : c._dur * h, t, i)) ||
											(this._startAt && (this._zTime = e)),
											this._onUpdate &&
												!t &&
												(e < 0 &&
													this._startAt &&
													this._startAt.render(e, !0, i),
												pi(this, 'onUpdate')),
											this._repeat &&
												o !== a &&
												this.vars.onRepeat &&
												!t &&
												this.parent &&
												pi(this, 'onRepeat'),
											(p !== d && p) ||
												this._tTime !== p ||
												(e < 0 &&
													this._startAt &&
													!this._onUpdate &&
													this._startAt.render(e, !0, i),
												(!e && f) || !(p || this._ts < 0) || Dt(this, 1),
												t ||
													(e < 0 && !_) ||
													(pi(
														this,
														p === d ? 'onComplete' : 'onReverseComplete',
														!0
													),
													this._prom && p === d && this._prom()));
									}
								} else jt(this, e, t, i);
								return this;
							}),
							(i.targets = function () {
								return this._targets;
							}),
							(i.invalidate = function () {
								return (
									(this._pt =
										this._op =
										this._startAt =
										this._onUpdate =
										this._act =
										this._lazy =
											0),
									(this._ptLookup = []),
									this.timeline && this.timeline.invalidate(),
									e.prototype.invalidate.call(this)
								);
							}),
							(i.kill = function (e, t) {
								if ((void 0 === t && (t = 'all'), Wi === this)) return Wi;
								if (!(e || (t && 'all' !== t)) && this.parent)
									return (this._lazy = 0), mi(this);
								if (this.timeline)
									return this.timeline.killTweensOf(e, t), this;
								var i,
									n,
									r,
									o,
									s,
									a,
									l,
									h = this._targets,
									c = e ? ei(e) : h,
									u = this._ptLookup,
									_ = this._pt;
								if ((!t || 'all' === t) && Qt(h, c)) return mi(this);
								for (
									i = this._op = this._op || [],
										'all' !== t &&
											(De(t) &&
												((s = {}),
												vt(t, function (e) {
													return (s[e] = 1);
												}),
												(t = s)),
											(t = Ji(h, t))),
										l = h.length;
									l--;

								)
									if (~c.indexOf(h[l]))
										for (s in ((n = u[l]),
										'all' === t
											? ((i[l] = t), (o = n), (r = {}))
											: ((r = i[l] = i[l] || {}), (o = t)),
										o))
											(a = n && n[s]) &&
												(('kill' in a.d && !0 !== a.d.kill(s)) ||
													(It(this, a, '_pt'), delete n[s])),
												'all' !== r && (r[s] = 1);
								return this._initted && !this._pt && _ && mi(this), this;
							}),
							(t.to = function (e, i, n) {
								return new t(e, i, n);
							}),
							(t.from = function (e, i) {
								return new t(e, wt(arguments, 1));
							}),
							(t.delayedCall = function (e, i, n, r) {
								return new t(i, 0, {
									immediateRender: !1,
									lazy: !1,
									overwrite: !1,
									delay: e,
									onComplete: i,
									onReverseComplete: i,
									onCompleteParams: n,
									onReverseCompleteParams: n,
									callbackScope: r,
								});
							}),
							(t.fromTo = function (e, i, n) {
								return new t(e, wt(arguments, 2));
							}),
							(t.set = function (e, i) {
								return (
									(i.duration = 0), i.repeatDelay || (i.repeat = 0), new t(e, i)
								);
							}),
							(t.killTweensOf = function (e, t, i) {
								return Xe.killTweensOf(e, t, i);
							}),
							t
						);
					})(ji)).prototype,
					{
						_targets: [],
						_initted: 0,
						_lazy: 0,
						_startAt: 0,
						_op: 0,
						_onInit: 0,
					}
				),
				vt('staggerTo,staggerFrom,staggerFromTo', function (e) {
					en[e] = function () {
						var t = new qi(),
							i = ei(arguments);
						return (
							i.splice('staggerFromTo' === e ? 5 : 4, 0, 0), t[e].apply(t, i)
						);
					};
				}),
				(tn = function (e, t, i) {
					return (e[t] = i);
				}),
				(nn = function (e, t, i) {
					return e[t](i);
				}),
				(rn = function (e, t, i, n) {
					return e[t](n.fp, i);
				}),
				(on = function (e, t, i) {
					return e.setAttribute(t, i);
				}),
				(sn = function (e, t) {
					return ze(e[t]) ? nn : Fe(e[t]) && e.setAttribute ? on : tn;
				}),
				(an = function (e, t) {
					return t.set(t.t, t.p, ~~(1e4 * (t.s + t.c * e)) / 1e4, t);
				}),
				(ln = function (e, t) {
					return t.set(t.t, t.p, !!(t.s + t.c * e), t);
				}),
				(hn = function (e, t) {
					var i = t._pt,
						n = '';
					if (!e && t.b) n = t.b;
					else if (1 === e && t.e) n = t.e;
					else {
						for (; i; )
							(n =
								i.p +
								(i.m ? i.m(i.s + i.c * e) : ~~(1e4 * (i.s + i.c * e)) / 1e4) +
								n),
								(i = i._next);
						n += t.c;
					}
					t.set(t.t, t.p, n, t);
				}),
				(cn = function (e, t) {
					for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
				}),
				(un = function (e, t, i, n) {
					for (var r, o = this._pt; o; )
						(r = o._next), o.p === n && o.modifier(e, t, i), (o = r);
				}),
				(_n = function (e) {
					for (var t, i, n = this._pt; n; )
						(i = n._next),
							(n.p === e && !n.op) || n.op === e
								? It(this, n, '_pt')
								: n.dep || (t = 1),
							(n = i);
					return !t;
				}),
				(dn = function (e, t, i, n) {
					n.mSet(e, t, n.m.call(n.tween, i, n.mt), n);
				}),
				(fn = function (e) {
					for (var t, i, n, r, o = e._pt; o; ) {
						for (t = o._next, i = n; i && i.pr > o.pr; ) i = i._next;
						(o._prev = i ? i._prev : r) ? (o._prev._next = o) : (n = o),
							(o._next = i) ? (i._prev = o) : (r = o),
							(o = t);
					}
					e._pt = n;
				}),
				(pn = (function () {
					function e(e, t, i, n, r, o, s, a, l) {
						(this.t = t),
							(this.s = n),
							(this.c = r),
							(this.p = i),
							(this.r = o || an),
							(this.d = s || this),
							(this.set = a || tn),
							(this.pr = l || 0),
							(this._next = e) && (e._prev = this);
					}
					return (
						(e.prototype.modifier = function (e, t, i) {
							(this.mSet = this.mSet || this.set),
								(this.set = dn),
								(this.m = e),
								(this.mt = i),
								(this.tween = t);
						}),
						e
					);
				})()),
				vt(
					dt +
						',parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert',
					function (e) {
						(st[e] = 1), 'on' == e.substr(0, 2) && (st[e + 'Params'] = 1);
					}
				),
				($e.TweenMax = $e.TweenLite = en),
				($e.TimelineLite = $e.TimelineMax = qi),
				(Xe = new qi({
					sortChildren: !1,
					defaults: ke,
					autoRemoveChildren: !0,
					id: 'root',
				})),
				(xe.stringFilter = Bi),
				(mn = {
					registerPlugin: function () {
						for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
							t[i] = arguments[i];
						t.forEach(function (e) {
							return gi(e);
						});
					},
					timeline: function (e) {
						return new qi(e);
					},
					getTweensOf: function (e, t) {
						return Xe.getTweensOf(e, t);
					},
					getProperty: function (e, t, i, n) {
						De(e) && (e = ei(e)[0]);
						var r = pt(e || {}).get,
							o = i ? xt : Et;
						return (
							'native' === i && (i = ''),
							e
								? t
									? o(((ht[t] && ht[t].get) || r)(e, t, i, n))
									: function (t, i, n) {
											return o(((ht[t] && ht[t].get) || r)(e, t, i, n));
									  }
								: e
						);
					},
					quickSetter: function (e, t, i) {
						var n, r, o, s, a;
						return 1 < (e = ei(e)).length
							? ((n = e.map(function (e) {
									return mn.quickSetter(e, t, i);
							  })),
							  (r = n.length),
							  function (e) {
									for (var t = r; t--; ) n[t](e);
							  })
							: ((e = e[0] || {}),
							  (o = ht[t]),
							  (s = pt(e)),
							  (a = o
									? function (t) {
											var n = new o();
											(vi._pt = 0),
												n.init(e, i ? t + i : t, vi, 0, [e]),
												n.render(1, n),
												vi._pt && cn(1, vi);
									  }
									: s.set(e, t)),
							  o
									? a
									: function (n) {
											return a(e, t, i ? n + i : n, s, 1);
									  });
					},
					isTweening: function (e) {
						return 0 < Xe.getTweensOf(e, !0).length;
					},
					defaults: function (e) {
						return (
							e && e.ease && (e.ease = Si(e.ease, ke.ease)), Mt(ke, e || {})
						);
					},
					config: function (e) {
						return Mt(xe, e || {});
					},
					registerEffect: function (e) {
						var t = e.name,
							i = e.effect,
							n = e.plugins,
							r = e.defaults,
							o = e.extendTimeline;
						(n || '').split(',').forEach(function (e) {
							return (
								e &&
								!ht[e] &&
								!$e[e] &&
								nt(t + ' effect requires ' + e + ' plugin.')
							);
						}),
							(ct[t] = function (e, t) {
								return i(ei(e), kt(t || {}, r));
							}),
							o &&
								(qi.prototype[t] = function (e, i, n) {
									return this.add(ct[t](e, Ue(i) ? i : (n = i) && {}), n);
								});
					},
					registerEase: function (e, t) {
						Ri[e] = Si(t);
					},
					parseEase: function (e, t) {
						return arguments.length ? Si(e, t) : Ri;
					},
					getById: function (e) {
						return Xe.getById(e);
					},
					exportRoot: function (e, t) {
						void 0 === e && (e = {});
						var i,
							n,
							r = new qi(e);
						for (
							r.smoothChildTiming = Le(e.smoothChildTiming),
								Xe.remove(r),
								r._dp = 0,
								r._time = r._tTime = Xe._time,
								i = Xe._first;
							i;

						)
							(n = i._next),
								(!t &&
									!i._dur &&
									i instanceof en &&
									i.vars.onComplete === i._targets[0]) ||
									Pt(r, i, i._start - i._delay),
								(i = n);
						return Pt(Xe, r, 0), r;
					},
					utils: {
						wrap: hi,
						wrapYoyo: ci,
						distribute: ti,
						random: ri,
						snap: ni,
						normalize: ai,
						getUnit: Xt,
						clamp: Jt,
						splitColor: bi,
						toArray: ei,
						mapRange: _i,
						pipe: oi,
						unitize: si,
						interpolate: di,
					},
					install: it,
					effects: ct,
					ticker: Mi,
					updateRoot: qi.updateRoot,
					plugins: ht,
					globalTimeline: Xe,
					core: {
						PropTween: pn,
						globals: rt,
						Tween: en,
						Timeline: qi,
						Animation: ji,
						getCache: pt,
					},
				}),
				vt('to,from,fromTo,delayedCall,set,killTweensOf', function (e) {
					return (mn[e] = en[e]);
				}),
				Mi.add(qi.updateRoot),
				(vi = mn.to({}, { duration: 0 })),
				(vn = function (e, t) {
					var i,
						n,
						r,
						o = e._targets;
					for (i in t)
						for (n = o.length; n--; )
							(r = e._ptLookup[n][i]) &&
								r.d.modifier &&
								r.d.modifier(t[i], e, o[n], i);
				}),
				(gn = function (e, t) {
					return {
						name: e,
						rawVars: 1,
						init: function (e, i, n) {
							n._onInit = function (e) {
								var n, r;
								if (
									(De(i) &&
										((n = {}),
										vt(i, function (e) {
											return (n[e] = 1);
										}),
										(i = n)),
									t)
								) {
									for (r in ((n = {}), i)) n[r] = t(i[r]);
									i = n;
								}
								vn(e, i);
							};
						},
					};
				}),
				mn.registerPlugin(
					{
						name: 'attr',
						init: function (e, t, i, n, r) {
							for (var o in t)
								this.add(
									e,
									'setAttribute',
									(e.getAttribute(o) || 0) + '',
									t[o],
									n,
									r,
									0,
									0,
									o
								),
									this._props.push(o);
						},
					},
					{
						name: 'endArray',
						init: function (e, t) {
							for (var i = t.length; i--; ) this.add(e, i, e[i], t[i]);
						},
					},
					gn('roundProps', ii),
					gn('modifiers'),
					gn('snap', ni)
				),
				(en.version = qi.version = mn.version = '3.0.1'),
				(tt = 1),
				Pe() && Oi(),
				Ri.Power0,
				Ri.Power1,
				Ri.Power2,
				Ri.Power3,
				Ri.Power4,
				Ri.Linear,
				Ri.Quad,
				Ri.Cubic,
				Ri.Quart,
				Ri.Quint,
				Ri.Strong,
				Ri.Elastic,
				Ri.Back,
				Ri.SteppedEase,
				Ri.Bounce,
				Ri.Sine,
				Ri.Expo,
				Ri.Circ,
				(Bn = function () {
					return 'undefined' != typeof window;
				}),
				(Tn = {}),
				(Mn = 180 / Math.PI),
				(On = Math.PI / 180),
				(Rn = Math.atan2),
				(Qn = /([A-Z])/g),
				(Cn = /[-+=\.]*\d+[\.e-]*\d*[a-z%]*/g),
				(In = /(?:left|right|width|margin|padding|x)/i),
				(Dn = /[\s,\(]\S/),
				(Sn = function (e, t) {
					return t.set(t.t, t.p, ~~(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
				}),
				(Fn = function (e, t) {
					return t.set(
						t.t,
						t.p,
						1 === e ? t.e : ~~(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
						t
					);
				}),
				(Un = function (e, t) {
					return t.set(
						t.t,
						t.p,
						e ? ~~(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
						t
					);
				}),
				(Ln = function (e, t) {
					var i = t.s + t.c * e;
					t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
				}),
				(Pn = function (e, t) {
					return t.set(t.t, t.p, e ? t.e : t.b, t);
				}),
				(Nn = function (e, t) {
					return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
				}),
				(jn = function (e, t, i) {
					return (e.style[t] = i);
				}),
				(qn = function (e, t, i) {
					return e.style.setProperty(t, i);
				}),
				(Hn = function (e, t, i) {
					return (e._gsap[t] = i);
				}),
				(Gn = function (e, t, i) {
					return (e._gsap.scaleX = e._gsap.scaleY = i);
				}),
				(Yn = function (e, t, i, n, r) {
					var o = e._gsap;
					(o.scaleX = o.scaleY = i), o.renderTransform(r, o);
				}),
				(Vn = function (e, t, i, n, r) {
					var o = e._gsap;
					(o[t] = i), o.renderTransform(r, o);
				}),
				(Xn = (Wn = 'transform') + 'Origin'),
				(Zn = function (e, t) {
					var i = wn.createElementNS
						? wn.createElementNS(
								(t || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
								e
						  )
						: wn.createElement(e);
					return i.style ? i : wn.createElement(e);
				}),
				(Kn = function (e, t) {
					var i = getComputedStyle(e);
					return (
						i[t] ||
						i.getPropertyValue(t.replace(Qn, '-$1').toLowerCase()) ||
						i.getPropertyValue(t)
					);
				}),
				($n = function (e, t) {
					var i = (t || En).style,
						n = 5,
						r = 'O,Moz,ms,Ms,Webkit'.split(',');
					if (e in i) return e;
					for (e = e[0].toUpperCase() + e.substr(1); n-- && !(r[n] + e in i); );
					return n < 0 ? null : (3 === n ? 'ms' : 0 <= n ? r[n] : '') + e;
				}),
				(tr = function e(t) {
					var i,
						n = Zn(
							'svg',
							(this.ownerSVGElement &&
								this.ownerSVGElement.getAttribute('xmlns')) ||
								'http://www.w3.org/2000/svg'
						),
						r = this.parentNode,
						o = this.nextSibling,
						s = this.style.cssText;
					if (
						(yn.appendChild(n),
						n.appendChild(this),
						(this.style.display = 'block'),
						t)
					)
						try {
							(i = this.getBBox()),
								(this._gsapBBox = this.getBBox),
								(this.getBBox = e);
						} catch (e) {}
					else this._gsapBBox && (i = this._gsapBBox());
					return (
						o ? r.insertBefore(this, o) : r.appendChild(this),
						yn.removeChild(n),
						(this.style.cssText = s),
						i
					);
				}),
				(ir = function (e, t) {
					for (var i = t.length; i--; )
						if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
				}),
				(nr = function (e) {
					var t;
					try {
						t = e.getBBox();
					} catch (i) {
						t = tr.call(e, !0);
					}
					return !t || t.width || t.x || t.y
						? t
						: {
								x: +ir(e, ['x', 'cx', 'x1']),
								y: +ir(e, ['y', 'cy', 'y1']),
								width: 0,
								height: 0,
						  };
				}),
				(rr = function (e) {
					return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !nr(e));
				}),
				(or = function (e, t) {
					if (t) {
						var i = e.style;
						t in Tn && (t = Wn),
							i.removeProperty
								? (('ms' != t.substr(0, 2) && 'webkit' != t.substr(0, 6)) ||
										(t = '-' + t),
								  i.removeProperty(t.replace(Qn, '-$1').toLowerCase()))
								: i.removeAttribute(t);
					}
				}),
				(sr = function (e, t, i, n, r, o) {
					var s = new pn(e._pt, t, i, 0, 1, o ? Nn : Pn);
					return ((e._pt = s).b = n), (s.e = r), e._props.push(i), s;
				}),
				(ar = { deg: 1, rad: 1, turn: 1 }),
				(lr = function (e, t, i, n) {
					var r,
						o,
						s,
						a,
						l = parseFloat(i),
						h = (i + '').substr((l + '').length) || 'px',
						c = En.style,
						u = In.test(t),
						_ = 'svg' == e.tagName.toLowerCase(),
						d = (_ ? 'client' : 'offset') + (u ? 'Width' : 'Height'),
						f = 100,
						p = 'px' === n;
					return n === h || ar[n] || ar[h]
						? l
						: ((a = e.getCTM && rr(e)),
						  '%' === n && Tn[t]
								? gt((l / (a ? e.getBBox()[u ? 'width' : 'height'] : e[d])) * f)
								: ((c[u ? 'width' : 'height'] = f + (p ? h : n)),
								  (o = 'em' === n && e.appendChild && !_ ? e : e.parentNode),
								  a && (o = (e.ownerSVGElement || {}).parentNode),
								  (o && o !== wn && o.appendChild) || (o = wn.body),
								  (s = o._gsap) &&
								  '%' === n &&
								  s.width &&
								  u &&
								  s.time === Mi.time
										? (r = (s.width * l) / f)
										: (o.appendChild(En),
										  (r = En[d]),
										  o.removeChild(En),
										  u &&
												'%' === n &&
												(((s = pt(o)).time = Mi.time),
												(s.width = (r / l) * f))),
								  gt(p ? (r * l) / f : (f / r) * l)));
				}),
				(hr = function (e, t, i, n) {
					var r;
					return (
						bn || er(),
						t in zn && ~(t = zn[t]).indexOf(',') && (t = t.split(',')[0]),
						Tn[t]
							? ((r = yr(e, n)),
							  (r =
									'transformOrigin' !== t
										? r[t]
										: br(Kn(e, Xn)) + r.zOrigin + 'px'))
							: ((r = e.style[t]) && 'auto' !== r && !n) ||
							  (r = Kn(e, t) || mt(e, t)),
						i ? lr(e, t, r, i) + i : r
					);
				}),
				(cr = function (e, t, i, n) {
					var r,
						o,
						s,
						a,
						l,
						h,
						c,
						u,
						_,
						d,
						f,
						p,
						m = new pn(this._pt, e.style, t, 0, 1, hn),
						v = 0,
						g = 0;
					if (
						((m.b = i),
						(m.e = n),
						(i += ''),
						'auto' == (n += '') &&
							((e.style[t] = n), (n = Kn(e, t) || n), (e.style[t] = i)),
						Bi((r = [i, n])),
						(n = r[1]),
						(s = (i = r[0]).match(Cn) || []),
						(n.match(Cn) || []).length)
					) {
						for (; (o = Cn.exec(n)); )
							(c = o[0]),
								(_ = n.substring(v, o.index)),
								l ? (l = (l + 1) % 5) : 'rgba(' == _.substr(-5) && (l = 1),
								c !== (h = s[g++] || '') &&
									((a = parseFloat(h) || 0),
									(f = h.substr((a + '').length)),
									(p = '=' == c[1] ? +(c[0] + '1') : 0) && (c = c.substr(2)),
									(u = parseFloat(c)),
									(d = c.substr((u + '').length)),
									(v = Cn.lastIndex - d.length),
									d ||
										((d = d || xe.units[t] || f),
										v === n.length && ((n += d), (m.e += d))),
									f !== d && (a = lr(e, t, h, d)),
									(m._pt = {
										_next: m._pt,
										p: _ || 1 === g ? _ : ',',
										s: a,
										c: p ? p * u : u - a,
										m: l && l < 4 ? Math.round : 0,
									}));
						m.c = v < n.length ? n.substring(v, n.length) : '';
					} else m.r = 'display' === t ? Nn : Pn;
					return Ve.test(n) && (m.e = 0), (this._pt = m);
				}),
				(ur = {
					top: '0%',
					bottom: '100%',
					left: '0%',
					right: '100%',
					center: '50%',
				}),
				(_r = function (e) {
					var t = e.split(' '),
						i = t[0],
						n = t[1] || '50%';
					return (
						('top' !== i && 'bottom' !== i && 'left' !== n && 'right' !== n) ||
							((t = i), (i = n), (n = t)),
						(t[0] = ur[i] || i),
						(t[1] = ur[n] || n),
						t.join(' ')
					);
				}),
				(dr = function (e, t) {
					if (t.tween && t.tween._time === t.tween._dur) {
						var i,
							n,
							r,
							o = t.t,
							s = o.style,
							a = t.u;
						if ('all' === a || !0 === a) (s.cssText = ''), (n = 1);
						else
							for (r = (a = a.split(',')).length; -1 < --r; )
								(i = a[r]),
									Tn[i] && ((n = 1), (i = 'transformOrigin' === i ? Xn : Wn)),
									or(o, i);
						n &&
							(or(o, Wn),
							(n = o._gsap) &&
								(n.svg && o.removeAttribute('transform'), delete n.x));
					}
				}),
				(fr = {
					clearProps: function (e, t, i, n, r) {
						var o = (e._pt = new pn(e._pt, t, i, 0, 0, dr));
						return (o.u = n), (o.pr = -10), (o.tween = r), e._props.push(i), 1;
					},
				}),
				(pr = [1, 0, 0, 1, 0, 0]),
				(mr = {}),
				(vr = function (e) {
					return 'matrix(1, 0, 0, 1, 0, 0)' === e || 'none' === e || !e;
				}),
				(gr = function (e) {
					var t = Kn(e, Wn);
					return vr(t) ? pr : t.substr(7).match(He).map(gt);
				}),
				(Ar = function (e, t) {
					var i,
						n,
						r,
						o,
						s = e._gsap,
						a = e.style,
						l = gr(e);
					return s.svg && e.getAttribute('transform')
						? '1,0,0,1,0,0' ===
						  (l = [
								(r = e.transform.baseVal.consolidate().matrix).a,
								r.b,
								r.c,
								r.d,
								r.e,
								r.f,
						  ]).join(',')
							? pr
							: l
						: (l !== pr ||
								e.offsetParent ||
								e === yn ||
								s.svg ||
								((r = a.display),
								(a.display = 'block'),
								((i = e.parentNode) && e.offsetParent) ||
									((o = 1), (n = e.nextSibling), yn.appendChild(e)),
								(l = gr(e)),
								r ? (a.display = r) : or(e, 'display'),
								o &&
									(n
										? i.insertBefore(e, n)
										: i
										? i.appendChild(e)
										: yn.removeChild(e))),
						  t && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
				}),
				(wr = function (e, t, i, n, r, o) {
					var s,
						a,
						l,
						h = e._gsap,
						c = r || Ar(e, !0),
						u = h.xOrigin || 0,
						_ = h.yOrigin || 0,
						d = h.xOffset || 0,
						f = h.yOffset || 0,
						p = c[0],
						m = c[1],
						v = c[2],
						g = c[3],
						A = c[4],
						w = c[5],
						y = t.split(' '),
						b = parseFloat(y[0]) || 0,
						E = parseFloat(y[1]) || 0;
					i
						? c !== pr &&
						  (a = p * g - m * v) &&
						  ((l = b * (-m / a) + E * (p / a) - (p * w - m * A) / a),
						  (b = b * (g / a) + E * (-v / a) + (v * w - g * A) / a),
						  (E = l))
						: ((b =
								(s = nr(e)).x + (~y[0].indexOf('%') ? (b / 100) * s.width : b)),
						  (E =
								s.y +
								(~(y[1] || y[0]).indexOf('%') ? (E / 100) * s.height : E))),
						n || (!1 !== n && h.smooth)
							? ((A = b - u),
							  (w = E - _),
							  (h.xOffset += A * p + w * v - A),
							  (h.yOffset += A * m + w * g - w))
							: (h.xOffset = h.yOffset = 0),
						(h.xOrigin = b),
						(h.yOrigin = E),
						(h.smooth = !!n),
						(h.origin = t),
						(h.originIsAbsolute = !!i),
						o &&
							(sr(o, h, 'xOrigin', u, b),
							sr(o, h, 'yOrigin', _, E),
							sr(o, h, 'xOffset', d, h.xOffset),
							sr(o, h, 'yOffset', f, h.yOffset));
				}),
				(yr = function (e, t) {
					var i,
						n,
						r,
						o,
						s,
						a,
						l,
						h,
						c,
						u,
						_,
						d,
						f,
						p,
						m,
						v,
						g,
						A,
						w,
						y,
						b,
						E,
						x,
						k,
						B,
						T,
						M,
						O,
						R,
						Q,
						C,
						I,
						D,
						z,
						S,
						F,
						U,
						L = e._gsap || new Ni(e);
					return (
						('x' in L && !t) ||
							((i = e.style),
							(n = L.scaleX < 0),
							(r = L.xOrigin || 0),
							(o = L.yOrigin || 0),
							(s = 'px'),
							(a = 'deg'),
							(l = Kn(e, Xn) || '0'),
							(h = c = u = f = p = m = v = g = A = 0),
							(_ = d = 1),
							(L.svg = !(!e.getCTM || !rr(e))),
							(w = Ar(e, L.svg)),
							L.svg && wr(e, l, L.originIsAbsolute, !1 !== L.smooth, w),
							w !== pr &&
								((x = w[0]),
								(k = w[1]),
								(B = w[2]),
								(T = w[3]),
								(h = M = w[4]),
								(c = O = w[5]),
								6 === w.length
									? ((_ = Math.sqrt(x * x + k * k)),
									  (d = Math.sqrt(T * T + B * B)),
									  (f = x || k ? Rn(k, x) * Mn : L.rotation || 0),
									  (v = B || T ? Rn(B, T) * Mn + f : L.skewX || 0),
									  L.svg &&
											((h -= r - (r * x + o * B)), (c -= o - (r * k + o * T))))
									: ((U = w[6]),
									  (S = w[7]),
									  (I = w[8]),
									  (D = w[9]),
									  (z = w[10]),
									  (F = w[11]),
									  (h = w[12]),
									  (c = w[13]),
									  (u = w[14]),
									  (p = (y = Rn(U, z)) * Mn),
									  y &&
											((R = M * (b = Math.cos(-y)) + I * (E = Math.sin(-y))),
											(Q = O * b + D * E),
											(C = U * b + z * E),
											(I = M * -E + I * b),
											(D = O * -E + D * b),
											(z = U * -E + z * b),
											(F = S * -E + F * b),
											(M = R),
											(O = Q),
											(U = C)),
									  (m = (y = Rn(-B, z)) * Mn),
									  y &&
											((b = Math.cos(-y)),
											(F = T * (E = Math.sin(-y)) + F * b),
											(x = R = x * b - I * E),
											(k = Q = k * b - D * E),
											(B = C = B * b - z * E)),
									  (f = (y = Rn(k, x)) * Mn),
									  y &&
											((R = x * (b = Math.cos(y)) + k * (E = Math.sin(y))),
											(Q = M * b + O * E),
											(k = k * b - x * E),
											(O = O * b - M * E),
											(x = R),
											(M = Q)),
									  p &&
											359.9 < Math.abs(p) + Math.abs(f) &&
											((p = f = 0), (m = 180 - m)),
									  (_ = gt(Math.sqrt(x * x + k * k + B * B))),
									  (d = gt(Math.sqrt(O * O + U * U))),
									  (y = Rn(M, O)),
									  (v = 2e-4 < Math.abs(y) ? y * Mn : 0),
									  (A = F ? 1 / (F < 0 ? -F : F) : 0)),
								L.svg &&
									((w = e.getAttribute('transform')),
									(L.forceCSS =
										e.setAttribute('transform', '') || !vr(Kn(e, Wn))),
									w && e.setAttribute('transform', w))),
							90 < Math.abs(v) &&
								Math.abs(v) < 270 &&
								(n
									? ((_ *= -1),
									  (v += f <= 0 ? 180 : -180),
									  (f += f <= 0 ? 180 : -180))
									: ((d *= -1), (v += v <= 0 ? 180 : -180))),
							(L.x =
								((L.xPercent =
									h && Math.round(e.offsetWidth / 2) == Math.round(-h)
										? -50
										: 0)
									? 0
									: h) + s),
							(L.y =
								((L.yPercent =
									c && Math.round(e.offsetHeight / 2) == Math.round(-c)
										? -50
										: 0)
									? 0
									: c) + s),
							(L.z = u + s),
							(L.scaleX = gt(_)),
							(L.scaleY = gt(d)),
							(L.rotation = gt(f) + a),
							(L.rotationX = gt(p) + a),
							(L.rotationY = gt(m) + a),
							(L.skewX = v + a),
							(L.skewY = g + a),
							(L.transformPerspective = A + s),
							(L.zOrigin = parseFloat(l.split(' ')[2]) || 0) && (i[Xn] = br(l)),
							(L.xOffset = L.yOffset = 0),
							(L.force3D = xe.force3D),
							(L.renderTransform = L.svg ? Or : Jn ? Mr : xr)),
						L
					);
				}),
				(br = function (e) {
					return (e = e.split(' '))[0] + ' ' + e[1];
				}),
				(Er = function (e, t, i) {
					var n = Xt(t);
					return gt(parseFloat(t) + parseFloat(lr(e, 'x', i + 'px', n))) + n;
				}),
				(xr = function (e, t) {
					(t.z = '0px'),
						(t.rotationY = t.rotationX = '0deg'),
						(t.force3D = 0),
						Mr(e, t);
				}),
				(kr = '0deg'),
				(Br = '0px'),
				(Tr = ') '),
				(Mr = function (e, t) {
					var i,
						n,
						r,
						o,
						s = t || this,
						a = s.xPercent,
						l = s.yPercent,
						h = s.x,
						c = s.y,
						u = s.z,
						_ = s.rotation,
						d = s.rotationY,
						f = s.rotationX,
						p = s.skewX,
						m = s.skewY,
						v = s.scaleX,
						g = s.scaleY,
						A = s.transformPerspective,
						w = s.force3D,
						y = s.target,
						b = s.zOrigin,
						E = '',
						x = ('auto' === w && e && 1 !== e) || !0 === w;
					!b ||
						(f === kr && d === kr) ||
						((n = Math.sin((i = parseFloat(d) * On))),
						(r = Math.cos(i)),
						(h = Er(y, h, n * (o = Math.cos((i = parseFloat(f) * On))) * -b)),
						(c = Er(y, c, -Math.sin(i) * -b)),
						(u = Er(y, u, r * o * -b + b))),
						(a || l) && (E = 'translate(' + a + '%, ' + l + '%) '),
						(!x && h === Br && c === Br && u === Br) ||
							(E +=
								u !== Br || x
									? 'translate3d(' + h + ', ' + c + ', ' + u + ') '
									: 'translate(' + h + ', ' + c + Tr),
						A !== Br && (E += 'perspective(' + A + Tr),
						_ !== kr && (E += 'rotate(' + _ + Tr),
						d !== kr && (E += 'rotateY(' + d + Tr),
						f !== kr && (E += 'rotateX(' + f + Tr),
						(p === kr && m === kr) || (E += 'skew(' + p + ', ' + m + Tr),
						(1 === v && 1 === g) || (E += 'scale(' + v + ', ' + g + Tr),
						(y.style[Wn] = E || 'translate(0, 0)');
				}),
				(Or = function (e, t) {
					var i,
						n,
						r,
						o,
						s,
						a = t || this,
						l = a.xPercent,
						h = a.yPercent,
						c = a.x,
						u = a.y,
						_ = a.rotation,
						d = a.skewX,
						f = a.skewY,
						p = a.scaleX,
						m = a.scaleY,
						v = a.target,
						g = a.xOrigin,
						A = a.yOrigin,
						w = a.xOffset,
						y = a.yOffset,
						b = a.forceCSS,
						E = parseFloat(c),
						x = parseFloat(u);
					(_ = parseFloat(_)),
						(d = parseFloat(d)),
						(f = parseFloat(f)) && ((d += f = parseFloat(f)), (_ += f)),
						_ || d
							? ((d *= On),
							  (i = Math.cos((_ *= On)) * p),
							  (n = Math.sin(_) * p),
							  (r = Math.sin(_ - d) * -m),
							  (o = Math.cos(_ - d) * m),
							  d &&
									((r *= s = Math.sqrt(1 + (s = Math.tan(d - (f *= On))) * s)),
									(o *= s),
									f &&
										((i *= s = Math.sqrt(1 + (s = Math.tan(f)) * s)),
										(n *= s))),
							  (i = gt(i)),
							  (n = gt(n)),
							  (r = gt(r)),
							  (o = gt(o)))
							: ((i = p), (o = m), (n = r = 0)),
						((E && !~(c + '').indexOf('px')) ||
							(x && !~(u + '').indexOf('px'))) &&
							((E = lr(v, 'x', c, 'px')), (x = lr(v, 'y', u, 'px'))),
						(g || A || w || y) &&
							((E = gt(E + g - (g * i + A * r) + w)),
							(x = gt(x + A - (g * n + A * o) + y))),
						(l || h) &&
							((s = v.getBBox()),
							(E = gt(E + (l / 100) * s.width)),
							(x = gt(x + (h / 100) * s.height))),
						(s =
							'matrix(' +
							i +
							',' +
							n +
							',' +
							r +
							',' +
							o +
							',' +
							E +
							',' +
							x +
							')'),
						v.setAttribute('transform', s),
						b && (v.style[Wn] = s);
				}),
				(Rr = function (e, t, i, n, r, o) {
					var s,
						a,
						l = 360,
						h = De(r),
						c = parseFloat(r) * (h && ~r.indexOf('rad') ? Mn : 1),
						u = o ? c * o : c - n,
						_ = n + u + 'deg';
					return (
						h &&
							('short' === (s = r.split('_')[1]) &&
								(u %= l) != u % 180 &&
								(u += u < 0 ? l : -l),
							'cw' === s && u < 0
								? (u = ((u + 36e9) % l) - ~~(u / l) * l)
								: 'ccw' === s &&
								  0 < u &&
								  (u = ((u - 36e9) % l) - ~~(u / l) * l)),
						(e._pt = a = new pn(e._pt, t, i, n, u, Fn)),
						(a.e = _),
						(a.u = 'deg'),
						e._props.push(i),
						a
					);
				}),
				(Qr = function (e, t, i) {
					var n,
						r,
						o,
						s,
						a,
						l,
						h,
						c = xn.style,
						u = i._gsap;
					for (r in ((c.cssText =
						getComputedStyle(i).cssText + ';position:absolute;display:block;'),
					(c[Wn] = t),
					wn.body.appendChild(xn),
					(n = yr(xn, 1)),
					Tn))
						(o = u[r]) !== (s = n[r]) &&
							'perspective' !== r &&
							((a = Xt(o) !== (h = Xt(s)) ? lr(i, r, o, h) : parseFloat(o)),
							(l = parseFloat(s)),
							(e._pt = new pn(e._pt, u, r, a, l - a, Sn)),
							(e._pt.u = h),
							e._props.push(r));
					wn.body.removeChild(xn);
				}),
				(Cr = {
					name: 'css',
					register: (er = function () {
						Bn() &&
							((An = window),
							(wn = An.document),
							(yn = wn.documentElement),
							(En = Zn('div') || { style: {} }),
							(xn = Zn('div')),
							(Wn = $n(Wn)),
							(Xn = $n(Xn)),
							(En.style.cssText =
								'border-width:0;line-height:0;position:absolute;padding:0'),
							(Jn = !!$n('perspective')),
							(bn = 1));
					}),
					targetTest: function (e) {
						return e.style && e.nodeType;
					},
					init: function (e, t, i, n, r) {
						var o,
							s,
							a,
							l,
							h,
							c,
							u,
							_,
							d,
							f,
							p,
							m,
							v,
							g,
							A,
							w = this._props,
							y = e.style;
						for (u in (bn || er(), t))
							if (
								'autoRound' !== u &&
								((s = t[u]), !ht[u] || !Vi(u, t, i, n, e, r))
							)
								if (
									((c = fr[u]),
									'function' === (h = typeof s) &&
										(h = typeof (s = s.call(i, n, e, r))),
									'string' === h && ~s.indexOf('random(') && (s = ui(s)),
									c)
								)
									c(this, e, u, s, i) && (A = 1);
								else if ('--' == u.substr(0, 2))
									this.add(
										y,
										'setProperty',
										getComputedStyle(e).getPropertyValue(u) + '',
										s + '',
										n,
										r,
										0,
										0,
										u
									);
								else {
									if (
										((o = hr(e, u)),
										(l = parseFloat(o)),
										(f = 'string' === h && '=' == s[1] ? +(s[0] + '1') : 0) &&
											(s = s.substr(2)),
										(a = parseFloat(s)),
										u in zn &&
											('autoAlpha' === u &&
												(1 === l &&
													'hidden' === hr(e, 'visibility') &&
													a &&
													(l = 0),
												sr(
													this,
													y,
													'visibility',
													l ? 'inherit' : 'hidden',
													a ? 'inherit' : 'hidden',
													!a
												)),
											'scale' !== u &&
												~(u = zn[u]).indexOf(',') &&
												(u = u.split(',')[0])),
										(p = u in Tn))
									) {
										if (
											(m ||
												((v = e._gsap),
												(g = !1 !== t.smoothOrigin && v.smooth),
												((m = this._pt =
													new pn(
														this._pt,
														y,
														Wn,
														0,
														1,
														v.renderTransform,
														v
													)).dep = 1)),
											'scale' === u)
										) {
											(this._pt = new pn(
												this._pt,
												e,
												'scale',
												l,
												f ? f * a : a - l,
												0,
												0,
												Gn
											)),
												w.push('scale');
											continue;
										}
										if ('transformOrigin' === u) {
											(s = _r(s)),
												v.svg
													? wr(e, s, 0, g, 0, this)
													: ((d = parseFloat(s.split(' ')[2])) !== v.zOrigin &&
															sr(this, v, 'zOrigin', v.zOrigin, d),
													  sr(this, y, u, br(o), br(s)));
											continue;
										}
										if ('svgOrigin' === u) {
											wr(e, s, 1, g, 0, this);
											continue;
										}
										if (u in mr) {
											Rr(this, v, u, l, s, f);
											continue;
										}
										if ('smoothOrigin' === u) {
											sr(this, v, 'smooth', v.smooth, s);
											continue;
										}
										if ('force3D' === u) {
											v[u] = s;
											continue;
										}
										if ('transform' === u) {
											Qr(this, s, e);
											continue;
										}
									}
									if (
										p ||
										((a || 0 === a) && (l || 0 === l) && !Dn.test(s) && u in y)
									)
										(_ = (o + '').substr((l + '').length)) !==
											(d =
												(s + '').substr((a + '').length) ||
												(u in xe.units ? xe.units[u] : _)) &&
											(l = lr(e, u, o, d)),
											(this._pt = new pn(
												this._pt,
												p ? v : y,
												u,
												l,
												f ? f * a : a - l,
												'px' !== d || !1 === t.autoRound || p ? Sn : Ln
											)),
											(this._pt.u = d || 0),
											_ !== d && ((this._pt.b = o), (this._pt.r = Un));
									else if (u in y) cr.call(this, e, u, o, s);
									else {
										if (!(u in e)) continue;
										this.add(e, u, e[u], s, n, r);
									}
									w.push(u);
								}
						A && fn(this);
					},
					get: hr,
					aliases: (zn = {
						autoAlpha: 'opacity,visibility',
						scale: 'scaleX,scaleY',
						alpha: 'opacity',
					}),
					getSetter: function (e, t, i) {
						return t in Tn && t !== Xn && (e._gsap.x || hr(e, 'x'))
							? i && kn === i
								? 'scale' === t
									? Gn
									: Hn
								: (kn = i || {}) && ('scale' === t ? Yn : Vn)
							: e.style && !Fe(e.style[t])
							? jn
							: ~t.indexOf('-')
							? qn
							: sn(e, t);
					},
				}),
				(mn.utils.checkPrefix = $n),
				(ns = vt(
					'x,y,z,scale,scaleX,scaleY,xPercent,yPercent' +
						',' +
						(is = 'rotation,rotationX,rotationY,skewX,skewY') +
						',' +
						'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
					function (e) {
						Tn[e] = 1;
					}
				)),
				vt(is, function (e) {
					(xe.units[e] = 'deg'), (mr[e] = 1);
				}),
				(zn[ns[13]] = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' + is),
				vt(
					'0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,9:rotateX,10:rotateY',
					function (e) {
						var t = e.split(':');
						zn[t[1]] = ns[t[0]];
					}
				),
				vt(
					'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
					function (e) {
						xe.units[e] = 'px';
					}
				),
				mn.registerPlugin(Cr),
				(Ir = mn.registerPlugin(Cr) || mn),
				(Dr = i(0)),
				(zr = i.n(Dr)),
				(Sr = i(1)),
				(Fr = i.n(Sr)),
				(Ur = i(48)),
				(Lr = i.n(Ur)),
				(Pr = (function () {
					function e() {
						!(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e);
					}
					return (
						(function (e, t, i) {
							t && o(e.prototype, t), i && o(e, i);
						})(e, [
							{
								key: 'stopEventPropagation',
								value: function (e) {
									e.stopPropagation();
								},
							},
							{
								key: 'isIOS',
								value: function () {
									var e = navigator.userAgent.toLowerCase();
									return (
										!!~e.indexOf('iphone') ||
										!!~e.indexOf('ipad') ||
										!!~e.indexOf('ipod')
									);
								},
							},
							{
								key: 'isAndroid',
								value: function () {
									return !!~navigator.userAgent
										.toLowerCase()
										.indexOf('android');
								},
							},
							{
								key: 'isSafari',
								value: function () {
									return (
										!!~navigator.userAgent.indexOf('Safari') &&
										!~navigator.userAgent.indexOf('Chrome')
									);
								},
							},
							{
								key: 'isOrbitvu',
								value: function () {
									return navigator.userAgent
										.toLowerCase()
										.startsWith('orbitvu');
								},
							},
							{
								key: 'supports_pointer_events',
								value: function () {
									return (
										window.PointerEvent ||
										window.MSPointerEvent ||
										window.navigator.msPointerEnabled ||
										window.navigator.pointerEnabled
									);
								},
							},
							{
								key: '_set_svg_color',
								value: function (e, t, i, n, r) {
									var o, s, a;
									if ('function' == typeof e.getElementById)
										for (o in i)
											if (
												i.hasOwnProperty(o) &&
												((s = i[o]), (a = e.getElementById(s)))
											) {
												if (a.style.setProperty)
													try {
														a.style.setProperty(t + '-opacity', r, null);
													} catch (e) {
														a.style.setProperty(t + '-opacity', '' + r, null);
													}
												else a.style[t + '-opacity'] = r;
												a.style[t] = '#' + n;
											}
								},
							},
							{
								key: 'colorize_svg',
								value: function (e, t, i, n, r) {
									var o,
										s,
										a = t.substr(6, 2);
									(s = '' === a || i ? 1 : Fr()(a, 16) / 255),
										(o = t.substr(0, 6)),
										this._set_svg_color(e, 'fill', n, o, s),
										this._set_svg_color(e, 'stroke', r, o, s);
								},
							},
							{
								key: 'is_same_domain',
								value: function (e) {
									return (
										0 ==
										e
											.replace('http://', '')
											.replace('https//', '')
											.replace('file://', '')
											.replace('//', '')
											.indexOf(window.location.host)
									);
								},
							},
							{
								key: 'do_nothing_handler',
								value: function (e) {
									return e.preventDefault(), e.stopPropagation(), !1;
								},
							},
							{
								key: 'add_button_click_handler',
								value: function (e, t, i) {
									if (
										((this.sub_touch_callback = function (i) {
											i.target.removeEventListener('mousedown', t, !1),
												e.removeEventListener('mousedown', t, !1),
												t(i),
												e.addEventListener('mousedown', t, !1);
										}),
										this.supports_pointer_events())
									)
										e.addEventListener('click', t, !1),
											window.PointerEvent
												? e.addEventListener(
														'pointerdown',
														this.do_nothing_handler,
														!1
												  )
												: window.MSPointerEvent &&
												  e.addEventListener(
														'MSPointerDown',
														this.do_nothing_handler,
														!1
												  );
									else {
										e.addEventListener('mousedown', t, !1),
											i ||
												e.addEventListener(
													'click',
													this.do_nothing_handler,
													!1
												);
										try {
											e.addEventListener(
												'touchstart',
												this.sub_touch_callback,
												!1
											),
												e.addEventListener(
													'touchend',
													this.do_nothing_handler,
													!1
												),
												e.addEventListener(
													'touchmove',
													this.do_nothing_handler,
													!1
												);
										} catch (e) {}
									}
								},
							},
							{
								key: 'remove_button_click_handler',
								value: function (e, t) {
									if (this.supports_pointer_events())
										e.removeEventListener('click', t, !1),
											window.PointerEvent
												? e.removeEventListener(
														'pointerdown',
														this.do_nothing_handler,
														!1
												  )
												: e.removeEventListener(
														'MSPointerDown',
														this.do_nothing_handler,
														!1
												  );
									else {
										e.removeEventListener('mousedown', t, !1),
											e.removeEventListener(
												'click',
												this.do_nothing_handler,
												!1
											);
										try {
											e.removeEventListener(
												'touchstart',
												this.sub_touch_callback,
												!1
											),
												e.removeEventListener(
													'touchend',
													this.do_nothing_handler,
													!1
												),
												e.removeEventListener(
													'touchmove',
													this.do_nothing_handler,
													!1
												);
										} catch (e) {}
									}
									self.sub_touch_callback = null;
								},
							},
							{
								key: 'handle_beacon',
								value: function (e) {
									var t,
										i,
										n = !1;
									e &&
										((t = this.hash(e)),
										(n = !0),
										void 0 === (i = window.orbitvu_beacons) && (i = {}),
										i[t] && (new Date().getTime() - i[t]) / 1e3 < 5 && (n = !1),
										(i[t] = new Date()),
										(window.orbitvu_beacons = i),
										n && this.beacon({ url: e }));
								},
							},
							{
								key: 'beacon',
								value: function (e) {
									var t, i, n, r;
									for (i in (((e = e || {}).url = e.url || null),
									(e.vars = e.vars || {}),
									(e.error = e.error || function () {}),
									(e.success = e.success || function () {}),
									(e.vars.cb = Math.floor(1e13 * Math.random())),
									parent !== window && (e.vars.referrer = document.referrer),
									(t = []),
									e.vars))
										e.vars.hasOwnProperty(i) &&
											t.push(
												encodeURIComponent(i) +
													'=' +
													encodeURIComponent(e.vars[i])
											);
									(n = t.join('&')),
										e.url &&
											((r = new Image()),
											r.onerror && (r.onerror = e.error),
											r.onload && (r.onload = e.success),
											(r.src = e.url + '?' + n));
								},
							},
							{
								key: 'hash',
								value: function (e) {
									var t, i, n;
									if (Array.prototype.reduce)
										t = e.split('').reduce(function (e, t) {
											return (e = (e << 5) - e + t.charCodeAt(0)) & e;
										}, 0);
									else {
										if ((i = 0) === e.length) return i;
										for (n = 0; n < e.length; n++)
											(i = (i << 5) - i + e.charCodeAt(n)), (i &= i);
									}
									return (t = '' + t), t.replace('-', 'a');
								},
							},
							{
								key: 'has_webp_support',
								value: function (e, t) {
									var i = new Image();
									(i.onload = function () {
										var n = 0 < i.width && 0 < i.height;
										t(e, n);
									}),
										(i.onerror = function () {
											t(e, !1);
										}),
										(i.src =
											'data:image/webp;base64,' +
											{
												lossy:
													'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
												lossless:
													'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
												alpha:
													'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
												animation:
													'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
											}[e]);
								},
							},
							{
								key: 'request_interval',
								value: function (e, t) {
									var i,
										n = Lr.a,
										r = window.requestAnimationFrame,
										o = n();
									return (
										r(function s() {
											!i && n() - o >= t && ((o = n()), e()), i || r(s);
										}),
										{
											clear: function () {
												i = 1;
											},
										}
									);
								},
							},
							{
								key: 'request_timeout',
								value: function (e, t) {
									var i,
										n = Lr.a,
										r = window.requestAnimationFrame,
										o = n();
									return (
										r(function s() {
											!i && n() - o >= t && ((i = 1), e()), i || r(s);
										}),
										{
											clear: function () {
												i = 1;
											},
										}
									);
								},
							},
						]),
						e
					);
				})()),
				(Nr = i(49)),
				(jr = i.n(Nr)),
				(qr = i(12)),
				(Hr = i.n(qr)),
				(Gr = i(20)),
				(Yr = i.n(Gr)),
				(Vr = (function () {
					function e() {
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e),
							(this.locales = this.get_locales());
					}
					return (
						(function (e, t, i) {
							t && s(e.prototype, t), i && s(e, i);
						})(
							e,
							[
								{
									key: 'init',
									value: function (e) {
										return (
											(this.locale = this.locales[e]),
											this.locale || (this.locale = this.locales.en),
											this.locale
										);
									},
								},
								{
									key: 'get_locales',
									value: function () {
										var e = {
												autorotation: 'AUTOOTГЃДЊENГЌ',
												move: 'POSUЕ‡',
												zoomin: 'ZVДљTЕ I',
												zoomout: 'ZMENЕ I',
												fullscreen: 'CELГЃ OBRAZOVKA',
												info: 'INFO',
												manualrotation: 'MANUГЃLNГЌ OTГЃДЊENГЌ',
												url: 'https://orbitvu.cz',
											},
											t = {
												autorotation: 'AUTO ORBIT',
												move: 'FLYT',
												zoomin: 'ZOOM IND',
												zoomout: 'ZOOM UD',
												fullscreen: 'FULD SKГ†RM',
												info: 'INFO',
												manualrotation: 'MANUAL ORBIT',
												url: 'https://orbitvu.com',
											};
										return {
											ru: {
												autorotation:
													'РђР’РўРћРњРђРўРР§Р•РЎРљРћР• Р’Р РђР©Р•РќРР•',
												move: 'Р‘РћР›Р¬РЁР•',
												zoomin: 'Р—РЈРњРњРР РћР’РђРўР¬',
												zoomout: 'РЈРњР•РќР¬РЁРРўР¬',
												fullscreen: 'РџРћР›РќРћР­РљР РђРќРќР«Р™',
												info: 'РРќР¤РћР РњРђР¦РРЇ',
												manualrotation: 'Р РЈР§РќРћР™ Р’Р РђР©Р•РќРР™',
												url: 'https://orbitvu.com',
											},
											fr: {
												autorotation: 'AUTOROTATION',
												move: 'DГ‰PLACER',
												zoomin: 'AGRANDIR',
												zoomout: 'DIMINUER',
												fullscreen: 'PLEIN Г‰CRAN',
												info: 'INFO',
												manualrotation: 'ROTATION MANUELLE',
												url: 'https://orbitvu.com',
											},
											nl: {
												autorotation: 'ROTEREN',
												move: 'VERPLAATSEN',
												zoomin: 'INZOOMEN',
												zoomout: 'UITZOOMEN',
												fullscreen: 'VOLLEDIG SCHERM',
												info: 'INFO',
												manualrotation: 'MANUAL ORBIT',
												url: 'https://orbitvu.com',
											},
											cn: {
												autorotation: 'и‡ЄеЉЁж—‹иЅ¬',
												move: 'з§»еЉЁ',
												zoomin: 'ж”ѕе¤§',
												zoomout: 'зј©е°Џ',
												fullscreen: 'е…Ёе±Џе№•',
												info: 'и®ЇжЃЇ',
												manualrotation: 'ж‰‹еЉЁж—‹иЅ¬',
												url: 'https://orbitvu.com',
											},
											fi: {
												autorotation: 'AUTOMAATTINEN PYГ–RITYS',
												move: 'SIIRTO',
												zoomin: 'ZOOMAUS SUUREMMAKSI',
												zoomout: 'ZOOMAUS PIENEMMГ„KSI',
												fullscreen: 'KOKO NГ„YTTГ–',
												info: 'INFO',
												manualrotation: 'MANUAALINEN PYГ–RITYS',
												url: 'https://orbitvu.com',
											},
											dk: t,
											da: t,
											no: {
												autorotation: 'AUTO ORBIT',
												move: 'FLYTT',
												zoomin: 'ZOOM INN',
												zoomout: 'ZOOM UT',
												fullscreen: 'FULLSKJERM',
												info: 'INFORMASJON',
												manualrotation: 'MANUAL ORBIT',
												url: 'https://orbitvu.com',
											},
											se: {
												autorotation: 'AUTO ORBIT',
												move: 'FLYTTA',
												zoomin: 'ZOOMA IN',
												zoomout: 'ZOOMA UT',
												fullscreen: 'FULL SKГ„RM',
												info: 'INFO',
												manualrotation: 'MANUAL ORBIT',
												url: 'https://orbitvu.com',
											},
											it: {
												autorotation: 'AUTO ORBIT',
												move: 'SPOSTA',
												zoomin: 'AUMENTA ZOOM',
												zoomout: 'RIDUCI ZOOM',
												fullscreen: 'A TUTTO SCHERMO',
												info: 'INFO',
												manualrotation: 'ORBIT MANUALE',
												url: 'https://orbitvu.it',
											},
											es: {
												autorotation: 'AUTOGIRO',
												move: 'MOVER',
												zoomin: 'ACERCAR',
												zoomout: 'ALEJAR',
												fullscreen: 'PANTALLA COMPLETA',
												info: 'INFO',
												manualrotation: 'GIRO MANUAL',
												url: 'https://orbitvu.es',
											},
											en: {
												autorotation: 'AUTO ORBIT',
												move: 'MOVE',
												zoomin: 'ZOOM IN',
												zoomout: 'ZOOM OUT',
												fullscreen: 'FULLSCREEN',
												info: 'INFO',
												manualrotation: 'STEP ORBIT',
												url: 'https://orbitvu.com',
											},
											ro: {
												autorotation: 'AUTOROTATIE',
												move: 'MISCA',
												zoomin: 'ZOOM IN',
												zoomout: 'ZOOM OUT',
												fullscreen: 'ECRAN COMPLET',
												info: 'INFO',
												manualrotation: 'ROTATIE MANUALA',
												url: 'https://orbitvu.com',
											},
											sk: {
												autorotation: 'AUTOOTГЃДЊANIE',
												move: 'POSUЕ‡',
												zoomin: 'ZVГ„ДЊЕ I',
												zoomout: 'ZMENЕ I',
												fullscreen: 'CELГЃ OBRAZOVKA',
												info: 'INFO',
												manualrotation: 'MANUГЃLNE OTГЃДЊANIE',
												url: 'https://orbitvu.com',
											},
											cz: e,
											cs: e,
											de: {
												autorotation: 'AUTO DREHEN',
												move: 'VERSCHIEBEN',
												zoomin: 'VERGRГ–ГџERN',
												zoomout: 'VERKLEINERN',
												fullscreen: 'VOLLBILDMODUS',
												info: 'INFO',
												manualrotation: 'MANUELL DREHEN',
												url: 'https://orbitvu.de',
											},
											pl: {
												autorotation: 'AUTOROTACJA',
												move: 'PRZESUЕѓ',
												zoomin: 'POWIДKSZ',
												zoomout: 'POMNIEJSZ',
												fullscreen: 'PEЕЃNY EKRAN',
												info: 'INFO',
												manualrotation: 'MANUALNA ROTACJA',
												url: 'https://orbitvu.pl',
											},
											pt: {
												autorotation: 'AUTO-ROTAГ‡ГѓO',
												move: 'MOVER',
												zoomin: 'ZOOM IN',
												zoomout: 'ZOOM OUT',
												fullscreen: 'ECRГѓ COMPLETO',
												info: 'INFO',
												manualrotation: 'ROTAГ‡ГѓO MANUAL',
												url: 'https://orbitvu.com',
											},
											lt: {
												autorotation: 'AUTOMATINIS PASUKIMAS',
												move: 'PERKELTI',
												zoomin: 'PADIDINTI',
												zoomout: 'SUMAЕЅINTI',
												fullscreen: 'VISAS EKRANAS',
												info: 'INFO',
												manualrotation: 'VADOVAS ROTACIJOS',
												url: 'https://orbitvu.com',
											},
											hu: {
												autorotation: 'FORGATГЃS',
												move: 'MOZGATГЃS',
												zoomin: 'NAGYГЌTГЃS',
												zoomout: 'KICSINYГЌTГ‰S',
												fullscreen: 'TELJES KГ‰PERNYЕђ',
												info: 'INFO',
												manualrotation: 'KГ‰ZI FORGATГЃS',
												url: 'https://orbitvu.com',
											},
											fy: {
												autorotation: 'ROTEARJE',
												move: 'FERPLEATSE',
												zoomin: 'YNZOOME',
												zoomout: 'UTZOOME',
												fullscreen: 'FOLSLEIN SKERM',
												info: 'YNFO',
												manualrotation: 'HГ‚NSMJITTICH DRAAIE',
												url: 'https://orbitvu.com',
											},
											sl: {
												autorotation: 'SAMODEJNO VRTENJE',
												move: 'PREMAKNI',
												zoomin: 'PRIBLIЕЅAJ',
												zoomout: 'ODDALJI',
												fullscreen: 'CELI EKRAN',
												info: 'INFO',
												manualrotation: 'ROДЊNO VRTENJE',
												url: 'https://orbitvu.com',
											},
											sr: {
												autorotation: 'AUTO ROTACIJA',
												move: 'POMERI',
												zoomin: 'PRIBLIЕЅI',
												zoomout: 'ODALJI',
												fullscreen: 'CEO EKRAN',
												info: 'INFO',
												manualrotation: 'RUДЊNA ROTACIJA',
												url: 'https://orbitvu.com',
											},
											ja: {
												autorotation: 'и‡Єе‹•е›ћи»ў',
												move: 'з§»е‹•',
												zoomin: 'г‚єгѓјгѓ г‚¤гѓі',
												zoomout: 'г‚єгѓјгѓ г‚ўг‚¦гѓ€',
												fullscreen: 'гѓ•гѓ«г‚№г‚ЇгѓЄгѓјгѓі',
												info: 'жѓ…е ±',
												manualrotation: 'ж‰‹е‹•е›ћи»ў',
												url: 'https://orbitvu.jp',
											},
											_: {
												autorotation: '',
												move: '',
												zoomin: '',
												zoomout: '',
												fullscreen: '',
												info: '',
												manualrotation: '',
												url: 'http://www.orbitvu.com',
											},
										};
									},
								},
								{
									key: 'trans',
									value: function (e) {
										return this.locale ? this.locale[e] : '';
									},
								},
							],
							[
								{
									key: 'info_translation',
									value: function (e, t) {
										var i = {
											en: {
												center_view: 'CENTER VIEW',
												zoom_in_out: 'ZOOM IN/OUT',
												rotate: 'ROTATE',
												fullscreen: 'FULL SCREEN',
												maxzoom: 'MAX ZOOM',
											},
											pl: {
												center_view: 'CENTROWANIE',
												zoom_in_out: 'POWIДKSZENIE',
												rotate: 'OBRГ“T',
												fullscreen: 'PEЕЃNY EKRAN',
												maxzoom: 'PRZYBLIЕ»ENIE',
											},
											de: {
												center_view: 'ZENTRIEREN',
												zoom_in_out: 'ZOOM IN/OUT',
												rotate: 'DREHEN',
												fullscreen: 'FULL SCREEN',
												maxzoom: 'MAX ZOOM',
											},
											es: {
												center_view: 'CENTRAR VISTA',
												zoom_in_out: 'ZOOM IN/OUT',
												rotate: 'ROTAR',
												fullscreen: 'PANTALLA COMP.',
												maxzoom: 'ZOOM MAX',
											},
											ja: {
												center_view: 'г‚»гѓіг‚їгѓјгѓ“гѓҐгѓј',
												zoom_in_out: 'г‚єгѓјгѓ г‚¤гѓі/г‚ўг‚¦гѓ€',
												rotate: 'е›ћи»ў',
												fullscreen: 'гѓ•гѓ«г‚№г‚ЇгѓЄгѓјгѓі',
												maxzoom: 'жњЂе¤§г‚єгѓјгѓ ',
											},
										};
										return i[e] || (e = 'en'), i[e][t];
									},
								},
							]
						),
						e
					);
				})()),
				(Wr = (function () {
					function e(t) {
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e),
							(this.images = []),
							(this.scales = []),
							(this.scales_map = {}),
							(this.base_url = null),
							(this.ovus_cache_modifier = t);
					}
					return (
						(function (e, t, i) {
							t && a(e.prototype, t), i && a(e, i);
						})(e, [
							{
								key: 'get_image_url',
								value: function (e, t, i, n, r) {
									var o,
										s = this.images[e].name;
									return (
										null == r && (r = 0),
										this.images[e].new_name &&
											(s = this.images[e].new_name + r + '_' + e),
										(o =
											this.base_url +
											s +
											'_' +
											this.scales_map[t] +
											'_' +
											i +
											'_' +
											n +
											'.' +
											this.images[e].ext),
										this.ovus_cache_modifier &&
											(o += '?ocm=' + this.ovus_cache_modifier),
										o
									);
								},
							},
							{
								key: 'add_scale',
								value: function (e, t, i, n, r, o, s, a) {
									(this.scales_map[e] = a.replace('%', '').replace('.', '')),
										this.scales.push({
											value: 1 * e,
											width: 1 * t,
											height: 1 * i,
											tile_width: 1 * n,
											tile_height: 1 * r,
											cols: 1 * o,
											rows: 1 * s,
										}),
										this.scales.sort(function (e, t) {
											return e.value - t.value;
										});
								},
							},
							{
								key: 'find_optimal_scale_index',
								value: function (e, t) {
									var i,
										n,
										r = 0;
									for (
										void 0 === t && (t = !1), i = 0, n = this.scales.length;
										i < n;
										i++
									)
										if (t) {
											if (
												1 == this.scales[i].cols &&
												1 == this.scales[i].rows &&
												(r < i && (r = i), this.scales[i].value >= e)
											)
												break;
										} else if ((r < i && (r = i), this.scales[i].value >= e))
											break;
									return r;
								},
							},
						]),
						e
					);
				})()),
				(Xr = i(3)),
				(Jr = i.n(Xr)),
				(Zr = i(8)),
				(Kr = i.n(Zr)),
				($r = i(4)),
				(eo = i.n($r)),
				(to = (function () {
					function e(t, i, n, r) {
						var o = this;
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e),
							(this.onMouseDown = function (e) {
								return e.preventDefault(), e.stopPropagation(), o.destroy(), !1;
							}),
							(this.on_destroy_callback = r),
							(this.utils = new Pr()),
							(this.container = t),
							(this.dialog = t.appendChild(document.createElement('div'))),
							(this.dialog.className = 'ovvdialog zindexer'),
							'object' === l(i)
								? ((this.dialog.className += ' ovvdialog_orbitvu_skin'),
								  this.dialog.appendChild(i))
								: ((this.dialog.className += ' ovvdialog_orbitvu_skin'),
								  (this.dialog.innerHTML = i)),
							n && (this.dialog.className += ' ' + n),
							this.utils.add_button_click_handler(
								this.dialog,
								this.onMouseDown,
								!0
							);
					}
					return (
						(function (e, t, i) {
							t && h(e.prototype, t), i && h(e, i);
						})(e, [
							{
								key: 'destroy',
								value: function () {
									var e,
										t = this;
									this.utils.isAndroid() ||
										this.dialog.removeEventListener(
											'mousedown',
											this.onMouseDown,
											!1
										),
										this.dialog.removeEventListener(
											'touchstart',
											this.onMouseDown,
											!1
										),
										(e = function (e) {
											t.dialog &&
												t.dialog.parentNode &&
												t.dialog.parentNode.removeChild(t.dialog);
										}),
										window.setTimeout(e, 500),
										(this.dialog.style.opacity = '0'),
										this.on_destroy_callback && this.on_destroy_callback();
								},
							},
						]),
						e
					);
				})()),
				(io = (function () {
					function e(t, i, n, r, o, s) {
						switch (
							((function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, e),
							(this.about = null),
							(this.dialog_content = n),
							(this.VERSION = '3.9.3'),
							(this.LICENSED_FOR = '<small>Licensed for Brand Service</small>'),
							(this.viewer = t),
							(this.open_callback = o),
							(this.close_callback = s),
							(this.container = i),
							(this.opened = !1),
							(this.extra_css = r),
							(this.is_mobile = t.is_mobile),
							(this.TYPE = '6'),
							this.TYPE)
						) {
							case '0':
								this.TYPE = 'Free360';
								break;
							case '1':
								this.TYPE = 'BASIC';
								break;
							case '2':
								this.TYPE = 'STANDARD';
								break;
							case '3':
								this.TYPE = 'CORPORATE';
								break;
							case '4':
								this.TYPE = 'RFL';
								break;
							case '5':
								this.TYPE = 'SUN';
								break;
							case '6':
								this.TYPE = 'My360';
								break;
							case '7':
								this.TYPE = 'Infinity360';
						}
					}
					return (
						(function (e, t, i) {
							t && c(e.prototype, t), i && c(e, i);
						})(e, [
							{
								key: 'render_info_popup',
								value: function (e) {
									var t,
										i,
										n,
										r,
										o,
										s,
										a,
										l,
										h,
										c,
										u,
										_ = this;
									(this.canvas_context.fillStyle = '#009bb0'),
										this.canvas_context.arc(9, 9, 9, 0, 360, !1),
										this.canvas_context.fill(),
										this.canvas_context.arc(151, 9, 9, 0, 360, !1),
										this.canvas_context.fill(),
										this.canvas_context.fillRect(0, 9, 160, 32),
										this.canvas_context.fillRect(9, 0, 151, 9),
										(this.canvas_context.fillStyle = '#ffffff'),
										this.canvas_context.fillRect(0, 32, 160, 203),
										this.canvas_context.beginPath(),
										(this.canvas_context.fillStyle = '#009bb0'),
										this.canvas_context.arc(9, 227, 9, 0, 360, !1),
										this.canvas_context.fill(),
										this.canvas_context.arc(151, 227, 9, 0, 360, !1),
										this.canvas_context.fill(),
										this.canvas_context.fillRect(0, 203, 160, 227),
										this.canvas_context.fillRect(9, 203, 151, 236),
										e
											? (this.canvas_context.beginPath(),
											  this.canvas_context.moveTo(8, 32),
											  this.canvas_context.quadraticCurveTo(30, 36, 53, 42),
											  this.canvas_context.quadraticCurveTo(82, 46, 107, 42),
											  this.canvas_context.quadraticCurveTo(130, 36, 152, 32),
											  this.canvas_context.fill(),
											  ((t = new Image()).onload = function () {
													_.canvas_context.drawImage(t, 58, 4);
											  }),
											  (t.src =
													'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAlAC4DAREAAhEBAxEB/8QAGwABAAEFAQAAAAAAAAAAAAAABQYAAQMEBwL/xAAbAQACAwEBAQAAAAAAAAAAAAADBAACBQEGB//aAAwDAQACEAMQAAABI9j8VYE2gM+at4q1mY+19ydCQ3OdP4e9Qs7R3+baPm6klyuqOVNEbIZ0tSwpEu/bvHAOkmTx94SRZUbVpVAbEfYQQGxq2D//xAAfEAACAwACAgMAAAAAAAAAAAACBAEDBQAUBhARExX/2gAIAQEAAQUC5m5/eKdNRcqQS2JsrKmzgx8larX93ETqrc8wpXWu9Z7/AGlGcptQlMchhm/sXcpxStEcYjXDP0UouSNlccO+WJVKE6tma4/cY6h+S2lJOkSxbd88bfhij//EADARAAEDAQUFBwQDAAAAAAAAAAECAxEABBIhMUETUWGBoRAUI2JxkfAFIjPRQrHB/9oACAEDAQE/Aas9n25JJupGZ+a7hXeWW1eEyI80k/2B0500li1+GBcXpuPDGSPelJKTdVn2GltIvusBvBAOOM4TBOn3emuHY3cvjaiU6+lfWW2mnMDKlYzwiPTEye1l/atGyurwMROQI/w9M4p2zPM/kTHzflTdkUkbW0C6jqeAHHfkNacXfVPwDdy7E2RSrovAFWQxx6RjpjSLIpaL4UMpjGYHKOtJYtbUIbdj7gMCoYnkOk0ppbrZtDjg53p1wy4b67m5fueYJ1zOWmWvpRbUGw5oTHtH7pNrUm6bolOR3dYw0woWt3ZbD+OUc5nPOj9RdwMDMHXTnW1VcLehM+0/uu9ueH5MukTyAHoKcevoSgJgCd+sbyd1f//EACgRAAIBAwIFAwUAAAAAAAAAAAECAAMREhMhECIxQWEEFKEycZGx8P/aAAgBAgEBPwGVKmHTcmabt9T/AIjF6XN1HzAbi44hjZamW5/vjg98Tj1no2Zh4HF0xbVQfeLUR+hjVQeWnuYoxFuBrAX22ENUA2t4hqUn3Ze1+0DhTgq/qay2v4vMhljDRBvvsZorln3ntlmAyymivN5ipiSxN5//xAAuEAACAQMCAwYFBQAAAAAAAAABAgMEERIAIRMxURAiQWFxgQUyobHBQlKR0eH/2gAIAQEABj8C1IzycGniGUkpHL/dWpvh0Tp+6qu7H62GuEsQoas/IVYmNz035aZHGLqbEHw7ACbDrqvohRcKCGNmE1zl3Rsx8Df89kLTrnDl3x5aXG0lTPaRn6C1vrv2yfDqqoZI3sYpHPdjYeB8tWkgcdCBcH30KiuBpqNeeWzP5KNM24X9Ks2WK+A7Ihx4knmGUcLXu30trMTR58IzcLfLH+LaSOGvKgyrFijOoBb2+2mqp69HKtwzxMy2XTl5aeIsilZlhub2Ynlb76WpuMC5jt43AB/OoSYI3nhXGOY3uOm3LbRpT3oDHw8D63y9dKREt81kN2Yju+V9tSQ2GLy8Unz3/vVFst6U5A2+Y7Wv7ADSQxwJBErF8VJNyfX01//EACAQAQACAgEFAQEAAAAAAAAAAAERIQAxQRBRYXGBsZH/2gAIAQEAAT8hyBC5QHgDlcGLjQibyKA9BhCs/cDCS9BcY01LfI2dCniYVxlSCKckWrB2x4dIUMNvtrnJwIA1CTHFpfOtmwUug7D143l/9+IhTjh8lH2ZavfRjbWwx5S8BXRPTW4O4uhYqXKp+bjDMs+BqcYGn1ZtgfNsgngUKCk593MYaxTvHKmoPiMpoM7gPxmr77TfJJlUn9wSJtUwJAL5fHnCqDOaVJCh8Y/41zAAj1bA6IOEoLvj0BmgQqQhbPAz/9oADAMBAAIAAwAAABD278X4fh4fDQOZgP8A/8QAHhEBAQEAAgIDAQAAAAAAAAAAAREhADFBURBhgXH/2gAIAQMBAT8Q4kLNUUPATKnKC7OnhrCJUjXWAUmGHy5FGvgq6sQk9AiH0ZxGECiPYnY/z4SCnMx2S9DraOkATcm8ZXQI3a2RGzre+6Zwz1d9AAEmpI9kPDvw7cUNOpB9ExdHOh4jFrzKOXBV/RThBw9qTp1RX8CqyNskOgqw6C7BA+j4NgKrDShHFRAi06pdMt7aCL+CzX7nBdRCMVS4JmvoZG8TCSDStEVYupo9pzU0EocKoh8gazolUFQyj7UJ/MeffKghRhsKjNFPbELQAG2iwpYSAggfPSQRnFoUNCyqkFgXsIzBDgGaBe6ATetePW+7hhscSp4EsA8+Tt5CRigqsF+gA9bqrz//xAAlEQEBAAEDBAIBBQAAAAAAAAABESEAMUFRYXGBEJGhscHR4fD/2gAIAQIBAT8Q1CA2Adf6OXjUmYfADtkV9vrWTPXwR3xB74vfQElH5v1IEhMpQ5PbjPwGDkY86T3FAO9vnBD5n0pYN0enc/O10ZTf19m5705YX6O68B03djUTlyyV5ffwyqcCkhtebjmGqupSsSvu/jSDbFSLB7X7mg7S5xBMZ379LplI5XDAb3O/E66GXMB+6ftqAoSpiPXil5z9acPircdJNtv8OgRFZE4MO+Zn3qA5BPufxo6ji9rbPKr5dXQTDM2L0Drr/8QAHhABAQEBAQACAwEAAAAAAAAAAREhADFBURBhcYH/2gAIAQEAAT8Q7VK/m2AenKVj9d8xAEW7KJMGbr27ykBWOIaBJ+KnCXyCJIh9iJ+BwB+AF1f51dWiJZYJQBIcTeNLp0K2MUMCpvoc8BjDhwGpq+4/38E8HSYAFxtejCPUge6XKlG0Z9L1+0PqIk7xfgVXJxJ2HsChOrEP0fgvVXEU5p2SNp5TkzaECKLNi3qzlbu4TbweKki354pF1GqgDRRITU5f5KUtAdbUhpeoLKj8WEBJJJb7c4uwlZSkgqKsIXBySmFThAEC/gAHoY1xym0CmwMYJwZQIGRxsx+7DeiwTH0YpQZ9+SvOsSxzYVABA8329//Z'))
											: (((i = new Image()).onload = function () {
													_.canvas_context.drawImage(i, 4, 4);
											  }),
											  (i.src =
													'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAbABsDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAABAUGBwj/xAAZAQACAwEAAAAAAAAAAAAAAAAEBQMGBwL/2gAMAwEAAhADEAAAAZRYc4spXaQJB6If57pisaogIXWCusmcbLmE3BftYS5SK3zPZ8rD7heDnq5hB+ov/8QAHRAAAgMAAwEBAAAAAAAAAAAABAUCAwYAARUTMf/aAAgBAQABBQLM5v1u2PlIR2+TGOonHuuWchGtJpHdoFvX5pq4Qe457X8HSk052eyrUBllTMJ5U7PpheRaTPn/xAApEQAABQMCBAcBAAAAAAAAAAAAAQIDBAUREhQhEDJRYSMxQXGhscHw/9oACAEDAQE/AaVS9Z4jnKXyJOhpyCybLfsJtHZkIzYLFQMjSdjFMSSYbdugqk9yOpKEt3v1/CBdxVUpTNct/bCiVBGGmcPf0E+HIkTG3G+VPX3EiUiG1m8e/wBh51T7inFeZ8ET5SCxS4YccW6eSzufD//EAB4RAAICAgMBAQAAAAAAAAAAAAECAAMEERATITEi/9oACAECAQE/AcrJ6vyv2V92QfGlOW6HT+iA79mSd2tuY1C2AktxikmlZm0HfYsotrrqZW+mV1G5tJEUIoUcGis+lYqhfF4//8QAKBAAAgEEAQIEBwAAAAAAAAAAAQIDAAQREiETMRAiUWEyM0FCUoGh/9oACAEBAAY/AjPPlbZTjj7jUfUs48MdQBGCaMtoggnxkAcBqKsMMOCKtAvbTNQxJaI+zeVpecn2H7rnvV2F/IH+ULGZtGX5ZP19qtJolTowgHLnjOa6lzIC2Ow7salnf4pG28NUu5QvptW8sjSN6sc+H//EACAQAQACAgIBBQAAAAAAAAAAAAEAESFBMXFREGGRobH/2gAIAQEAAT8hsBgDB8XUDiL6F5tZjoJXSTUW42xpnKIs7W2aZbcBXA3pll64YZqUgUo7Qv2srHU3aA/qM2gMIGtnxKbHhg9kRmcxVq5xKrcUWtdREr769P/aAAwDAQACAAMAAAAQPyo1jFmn/8QAIhEBAAECBgMBAQAAAAAAAAAAAREAITFBUWFxgRCRodHw/9oACAEDAQE/EJLbaN1pxrUzjKAAvt/aW2xIFh2TLrunBwlmijDd23aF/JZvlIwGcy7GxUoM1GGse0L9aiIwxOY5czhrQVEAyrSJZMdKuMg4Vsf0VjlK+/EDM5alr1Fl++P/xAAjEQEAAgIABAcAAAAAAAAAAAABABEhMRBBUbFhcYGhwdHw/9oACAECAQE/EKfM+0vbsZ3Utf3CAAaYiuqMEKMh8vpqNXiKD+yy3Kx39xSHJrpUotjsTSgHBuhflA6APDh//8QAHxABAQACAgMAAwAAAAAAAAAAAREAMSFBUWGBEHGh/9oACAEBAAE/EDnEjROUPQ4r7hnAA8RCoKoHl7zxsxUr1W6EkdmKQCDEGI/cAkAMds/ouJgXBwAsxIDFbBOcrGJRpe5hqCRZ+AuqhF1beiqebOs1Pg6ETy64m5nBA8hL1dgvwN5wEBdErD0ED9YKhGJpMFcSyB8Us+ZtIso/Vfx//9k=')),
										this.viewer.is_android || this.viewer.ios
											? (((n = new Image()).onload = function () {
													_.canvas_context.drawImage(n, 18, 51);
											  }),
											  (n.src =
													'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAvADUDAREAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAYEBQcDAQj/xAAbAQACAwEBAQAAAAAAAAAAAAAABQMEBgIBB//aAAwDAQACEAMQAAAB+qQU7iEPWym9AAAAzdpj4UlddsLduRfQ5PE4ETuuk384yVXCzbR3ddp4DTUdZK6wl5Wa5y0yWgrdPdwMbOG5H6it4WHH3hKv52wjsuNHQgITPIvqzXAAUFhXG7h6+ez4rn//xAAgEAADAAICAwADAAAAAAAAAAADBAUBAgAGEBEUEhUg/9oACAEBAAEFAudjyUSfXdDrrfz2p3dQtGllOTkL8gKxsMr+GiEECZXYZsVZutMZF/zh47Algf78frjtXLLlPGsXrWkY2wIzW+WRpl0R+L2eKXO8/AR6kcUG8sKI3HzGBMMbw7V0g0/L8jRsg339NfkfZ4tNXV5//8QANBEAAQIEBAMECQUBAAAAAAAAAQIDAAQRIQUxQVESE2EycZGhEBQVICNCgcHSIjNSsdHx/9oACAEDAQE/AYxcuoZ40OFPQZknK+fhpGFB1ttTDt+HXQ1vnrevvY3MLYWArskW6KBz3yPW8Tc76tKNy8qCmtqkU2v9Sc++OCakktzTZ7V889bi2lTr4ww7z2kuj5gD4+mYW422VNJ4lbVpEnPuvTvKmKagU3Tn1yN9NonpQTiQAaKTcGFs8zD3JdQqWjauwuMt02j2rKhKQ3U1yASb020tHtRFCrlqoM7Zf81pW3omZ1TrolJhRTwqN6XP8KZ+BHnEylMjho5IuMqi4rmeh/qEyTym3Hx8hve9syNKVvXOMPfJdbccI+Mk/UoP4wlh0S6UpF21W6itPNHnHq1XHeLsLA8cj5UjDXCuWCFdpH6T3i0BpCVlwJudYmGETLSml5GEYdMyHxZZXFTTKo27xp/low9rD3Fl6XTRQ02Pdptbu9M3iSMJm1hQJC6HS2h8aD3JqQS+rmoPAsaj77iEzM2kctTNV9CAO/fyj1ecf/ed4ReyPyP2EMybLNaCpOpufOP/xAAvEQABAwIDBAkFAQAAAAAAAAABAAIDERIEITEQEyKxFCBBQlFxodHwMlJhkeHx/9oACAECAQE/AVhbS+hbVYm1zg9vb1sHGHjLXt8lFFvJXPkzVYpiYyNE9tji3w2sAc6jjRSwtbFcz5VQy7o/goOpM1/3fOa6NJU3c10Y6XDPTZHDa3esGo/1Rkz4jjRmaCGeP6U7Ba4N7p5/1F7byT3h89VvMm01CxApJUaHNXEilUx5jcHBGeObhkFPdTunAsecue2OA4mMU7OpHMWC05hGOI8Qdl6q+Jn0tr5+ydK56//EADMQAAIBAgQDBAgHAQAAAAAAAAECAwQRABITQSEiMSMyUXEQIGGBkZKhsRQzQlJTstHh/9oACAEBAAY/AsGRKp4ABl04xzSMe6L7YemnJkMZuJdmBF+u/G/rIrWMcidiSO5KD3vgcUlJQCSn1G0hJImU2FrsPO/3xT10UsnajPzSZg3C/MLeF/HEUwFhIoa3n6WaGLWk2TNlv78NDVrFkuyRGMdHXvD4H6YjXPpzRMJI262OKmly55KF+UNuBxHxXhhBFqSZuEaRxNzeW2Hb8NU6cf5rlLafn/z0LQ1UjR6ErO5ReL/xgDCmnXnjAyO68yk9T7DxOKiqU5jTyWeRXOrcdWG1t8UskxUtWwkEr+pkPX5TiFFS0lLN2ftS9v6HFVm4wVCi6+21j9LYRHN5YCYX814YaQIokbqwHE4kglF43FjgT0koqWXlMbcuonh5jY4eppYtOdbho2uDGd+Xb0z5lZ0qAsll2PQ/YeoJ4nNNVr0mj+x8RjSkotWpHVkkAjI8fH6Y7erWnX9lKvH5j/mGKqXZu88hzMfecf/EACQQAQABAwMEAgMAAAAAAAAAAAERACExQVFhcYGRoRAgscHh/9oACAEBAAE/IaWtQDwQZXbaTQe73aacbCHj7Dvx4JuL2t5uUKXkdFIGbsoppgTUt0gRMmcG9OwJVpCfmP5xOMm7FZtM0ACC35MaKKAhVsHU1GmekufP0932qaX2AcjQUddKxCcCA+EywXYNkoZJKQcyyxshDORhNCt0rxDhf6FASVcIBuEnkhmjWv8AWfju9FMEsCS0vZDrWggc17zd4e1FkgEzcu7gPeo3axpDiXWsD4zJycmatQTeQ4T+ItbFqlQ6TjwkxLFtvkhNLERz5j2/TmE5nh9TQDehNalh0pqwyP7DfAqyScnFxMlf/9oADAMBAAIAAwAAABCPySR3yRJPc0zBspSQyTbr/8QAIREBAQEBAAICAgMBAAAAAAAAAREhMQBBUWEQIHGBoZH/2gAIAQMBAT8Q8QnASA4k1EdTTX0jY0hIYGouhBT65+0wmn57lmJlPRDHyImksaGjNysF9AZ5fXNNJj0usFWO4fAHQgfEDP8AfzFvSQqoOuEN+5PfiwZsqhJIp9gxZ7aN9xAMj7Mo/wA9B2Reifxat0jpBj3wHL0WPBKBfLYechztjfpLWNhCH34N08sSKgYuCAenAkbHi7IStB8HdHM1OE8YIR6E2B4EF2MJTvjXCBhqgK3NRENJnB1h7gIrrTRNn8HnYURL8HCYM+9HDq4ooybr7O6A/wB+FCJUBWcr1nq+cA2fZ8JaUdKOnPEgLwr5cTU4DyGcXcH0VRbumfZgBEifkgSmECL8T0b7v6Bl8XZ+h9Bj8SyiPi+qks0qM9a/7BFAaENjx1RD4N8oshUUmFU/5Dz/xAAkEQEAAgICAQQDAQEAAAAAAAABESEAMUFRYXGRocEQIPCB4f/aAAgBAgEBPxDBC3KVoDcmmu+Yx1D05IYs4kj9kzof9I11aeK5yUZAmBm2YHig16ZE9aNRFxTLzBo9sRDknt+RkB3E/GH1ZpZ608bKN94jKSEJr+cM1gNxwtO+rYqkCNqKnu5v0y0saJ36VF6JiX8A4mABaKstdbH4xgKmZBpDRWyj1xL8aEKOh5mK68YQpgkngJX0/nFMVZ4Un4HtlOYsPiRPZn3wU4kejf8AzERqDRwZujMNqGxLjt6PJ35vBcpaSIBq+e79X8taBaSzZSe0v6ODn4frpxCj5iy66+c70q19PtcjhYDQUHtn/8QAHhABAQACAgIDAAAAAAAAAAAAAREAITFBUWEQIHH/2gAIAQEAAT8QytoAeBH+ma8hMdc+iih8nSPXl9jMwb0xSRS+Bhzj+YrK0A4F1OoLHEq2IKqqL8LSAxxTReVAgfZfku84VaR6IFfchtxpC5YtDtoOidG3JwfjXmkYolNg9TBptgjGNI0H2uJDtenhhJjUkFvL3lNgii74MERW4AIIlE7zvrxCGs25BGW5GMDPLE2qaNRjgmFqVf2NwAgGMac4drLaCunCxSGyQSFNSGCGRWXcJt1k7rDqhFSQebl63j3gFKdZecHILAMIADLAAV1Maq0cHYIjEAM0hgwWIojv0dJ7BoJayLPJMGNjEQOk+X4f+Anz2V7T6AwfDEtTh6D8IIWlN8MOAr1O6NsxChNsYLqjQO24oiadytioVgQK63n/2Q=='),
											  this.canvas_context.beginPath(),
											  (this.canvas_context.fillStyle = '#000000'),
											  this.canvas_context.fillText(
													Vr.info_translation(
														this.viewer.params.lang,
														'zoom_in_out'
													),
													14,
													114
											  ),
											  ((r = new Image()).onload = function () {
													_.canvas_context.drawImage(r, 92, 59);
											  }),
											  (r.src =
													'data:image/jpeg;base64,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'),
											  this.canvas_context.fillText(
													Vr.info_translation(
														this.viewer.params.lang,
														'rotate'
													),
													106,
													114
											  ),
											  ((o = new Image()).onload = function () {
													_.canvas_context.drawImage(o, 25, 130);
											  }),
											  (o.src =
													'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAnACEDAREAAhEBAxEB/8QAGwABAAICAwAAAAAAAAAAAAAABgMFAQQAAgf/xAAbAQACAwEBAQAAAAAAAAAAAAAEBQABAwIGB//aAAwDAQACEAMQAAABdP8A5woEdXw7GK6XBPQTHy89d72RMfXCwJ/oaCUZCzY51xdJBHXJDpSdEK4pt1xI7zfoyr2p0pR1lZktMTP/xAAhEAABBAEEAwEAAAAAAAAAAAAEAQIDBQAGEBIVExQkFv/aAAgBAQABBQJrytTHaXPI84VmRPZnwol9j6zprBso1RbrqITig4VyTh4qHBDyONY4GRw5fzWu1f8AOflxCs1d+2H2s+QpCFnGJ1Dp89AbP//EADYRAAECAwIJCQkAAAAAAAAAAAEDBAACESExBRASQVFhcZGhExQiIzJTgbHRFRY0QlKissHx/9oACAEDAQE/AZFFsMrm2zMK0oOOkbdVIwM6XKhar1uqK7aEb4bPF1XUyE8tAK20NtuvRn13Q5THtBvPn6XlinZlg5DlM9AzXaMq/jkxKW+D3qpUFDPQiw1tvG8Vg4Xb0ypRMRpEpodW2ORaYRVJVTInl01FngaYnaAdITonOP5CSkzmVu6Aqbj5H7hEzVQprIjTWXbf+UOOoeJLn5ugfOXjXG06lwshm7Qt+q/iOOLCCZUaz5JoRaNotj3oQ7s8MT2qCkjuUVyag3XeOsQHDtwKoJiUWWzH9D1jmEyvxSpn1dkbh6xzNt3Y3CP/xAAuEQABAwEDCQkBAAAAAAAAAAACAAEDERASEwQhIjFBUnGR8BQVIzIzUYGhsdH/2gAIAQIBAT8BdgyQFlcYUaQFJEAxsbPnUb+AbcP2xpccMN9dPzp07HPEN3YuynqenNXpIB0SzPZGeGbEiZo3OPrqiaQbwlz64INOIg9s/wDbZdIBP45WQFdkaq7vPesioYvE+1XIg8714LGYfTGn2sU95f/EADcQAAECBAEGCwgDAAAAAAAAAAECAwAEERIhEBMiMTJBBSNCUXGBkaGiscEkMzRSU2FikrLR4f/aAAgBAQAGPwJzjF5vSsZS5mwAN5wPPDslMKW5am9CnNoY0IPXD0u40ENIutctVp4+kcFuVVcSsa8Ng7siZxtZzC3qKb+W/A99kTedokvUcbISSo12hh9xXri9Iecb1BxDRtUebphSnpZ1uZaA0XCUkDccD05HmDy00rzGODZ2yq8UOYaq6/EBE6wNEFecYVXUdr+UScwaAOgy68etPke3LOy3JuD6MdytfeD25HrTRxAziD+ScR5R7hzIxOoQVhsKQ6E0rYf9AisvLIYbOpyYVXwp/uPbJp2ZH0xxaOwesfDtfoI//8QAJBABAAEDAwQCAwAAAAAAAAAAAREAITEQUYFBYXGRocGx8PH/2gAIAQEAAT8hWyM4ee5ks6b3AKSTcsQT7rEjjxWDqXLQWkjKHdiKvfFi4Bgw0CCjgAG4naK7RUWR8ToGCtIaT90ehL6eavFpGSYLcPUbaRjE5XA8MNCVHDLoot7cKauQmyxY+BXmvewkfuDVd9lJbi3maB/xQU/NT+saCIjhEEzdMew0dgQyJO0nyK6nEisps3Xk1+/fVf/aAAwDAQACAAMAAAAQMkmnEWVkMTg0/wD/xAAiEQEBAQEAAgEDBQAAAAAAAAABESExAEEQUWFxgcHR8PH/2gAIAQMBAT8Q1Iyo4ki4LhgqugW4hEmkgoqoJCzjwQBFYsMgCIDGOoo41Lvqe4B6nDuzvvnwi1AJgDCXqBgOBI98OJQBFrkL9B9981GzKA8KhrkZvU8l/ARLVRNxaUbTfXxGvYKUH2n2Y/p41zTOSikdAD6wryviepa7xQ8FAK6OM0zxEIBaL15HHAuO/IV+ktTPQegbmfAoYViUxS4VJ+Hz/T/l8VlACaWW6OBg+38+BEGihR7L6HKN8NnSI1FpdGc1ef079vP/xAAjEQEAAgAFBQADAAAAAAAAAAABESEAMUFhgRBRcZGhsdHx/9oACAECAQE/EBNE1LEyvJ2da3XAoolhjKyR5M/OJSSiSSpNYu9Ns7wrozoSI0kN3mDzGAUpJCSBWTezHGCWQOoiQ7u2I8JmyhszGSe3Rg9H++zDjYKThk9p5wBdwQNrPsDFS2a4+EeOu7olXD4nroEFI0+Gn842n3pMSGCTMSeJzFwthVdDXy/rGkt2b25cBjde3H//xAAgEAEBAAICAgIDAAAAAAAAAAABEQAhEDFBYVFxgZHh/9oACAEBAAE/EBSU6BiQi0+6u9Q1wL0LXjpg+7oQI3pAIFDINFqJ01woo/G1myFXaFYb0cNukcE+8mDwR7x4JBihEAAIDW7l2RHafDlSgGHRRuArdas1I0BRah6OFhhVoh+8PsMP3c7BX8gE9U6uTHIU00sqVdOhLikFhUgTMm5b11/HFhHZEUQB4DXf3knSilIUXRoF+F5XQbBYaAkV6WyGFMU3d7UVrrFKxwKWbohPgT54Zf/Z'),
											  (this.canvas_context.textAlign = 'center'),
											  'es' === this.viewer.params.lang
													? ((s = Vr.info_translation(
															this.viewer.params.lang,
															'center_view'
													  )),
													  this.canvas_context.fillText(
															s.split(' ')[0],
															38,
															186
													  ),
													  this.canvas_context.fillText(
															s.split(' ')[1],
															38,
															198
													  ))
													: this.canvas_context.fillText(
															Vr.info_translation(
																this.viewer.params.lang,
																'center_view'
															),
															38,
															190
													  ),
											  ((a = new Image()).onload = function () {
													_.canvas_context.drawImage(a, 95, 126);
											  }),
											  (a.src =
													'data:image/jpeg;base64,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'),
											  this.canvas_context.fillText(
													Vr.info_translation(
														this.viewer.params.lang,
														'fullscreen'
													),
													115,
													186
											  ),
											  this.canvas_context.fillText(
													Vr.info_translation(
														this.viewer.params.lang,
														'maxzoom'
													),
													115,
													198
											  ))
											: (((l = new Image()).onload = function () {
													_.canvas_context.drawImage(l, 48, 121);
											  }),
											  (l.src =
													'data:image/jpeg;base64,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'),
											  this.canvas_context.beginPath(),
											  (this.canvas_context.fillStyle = '#000000'),
											  (h = this.canvas_context.measureText(
													Vr.info_translation(
														this.viewer.params.lang,
														'center_view'
													)
											  )),
											  this.canvas_context.fillText(
													Vr.info_translation(
														this.viewer.params.lang,
														'center_view'
													),
													80 - h.width / 2,
													180
											  ),
											  ((c = new Image()).onload = function () {
													_.canvas_context.drawImage(c, 94, 54);
											  }),
											  (c.src =
													'data:image/jpeg;base64,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'),
											  this.canvas_context.fillText(
													Vr.info_translation(
														this.viewer.params.lang,
														'rotate'
													),
													101,
													114
											  ),
											  ((u = new Image()).onload = function () {
													_.canvas_context.drawImage(u, 28, 50);
											  }),
											  (u.src =
													'data:image/jpeg;base64,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'),
											  this.canvas_context.fillText(
													Vr.info_translation(
														this.viewer.params.lang,
														'zoom_in_out'
													),
													6,
													114
											  ));
								},
							},
							{
								key: 'open',
								value: function () {
									var e,
										t,
										i,
										n,
										r,
										o = this;
									if (!this.opened) {
										for (
											this.dialog_content ||
												((this.dialog_content = document.createElement('p')),
												(this.dialog_content.className =
													'orbitvu-viewer-infobox'),
												(this.canvas = document.createElement('canvas')),
												(this.canvas.width = 160),
												(this.canvas.height = 236),
												this.dialog_content.appendChild(this.canvas),
												((e = document.createElement('p')).innerHTML =
													'<div>ORBITVU VIEWER ' +
													this.TYPE +
													' v.' +
													this.VERSION +
													'</div>' +
													this.LICENSED_FOR),
												(e.style.position = 'absolute'),
												(e.style.left = '0'),
												(e.style.right = '0'),
												(e.style.top = '208px'),
												(e.style.lineHeight = '12px'),
												(e.style.fontSize = '8px'),
												(e.style.textAlign = 'center'),
												(e.style.color = '#ffffff'),
												(e.style.fontFamily = 'sans-serif'),
												(e.style.marginTop = 'auto'),
												(e.style.marginBottom = 'auto'),
												(e.style.marginLeft = 'auto'),
												(e.style.marginRight = 'auto'),
												this.dialog_content.appendChild(e),
												(this.canvas_context = this.canvas.getContext('2d')),
												this.render_info_popup(!0)),
												t = function () {
													var e,
														t,
														i = o.about.dialog.getElementsByTagName('a');
													for (e = 0; e < i.length; e++)
														(t = i[e]),
															o.viewer.utils.remove_button_click_handler(
																t,
																o.viewer.utils.do_nothing_handler
															);
													(o.opened = !1),
														o.viewer.dispatchEvent('info_dialog_closed'),
														o.close_callback && o.close_callback();
												},
												this.about = new to(
													this.container,
													this.dialog_content,
													this.extra_css,
													t
												),
												this.viewer.dispatchEvent('info_dialog_opened'),
												i = this.about.dialog.getElementsByTagName('a'),
												n = 0;
											n < i.length;
											n++
										)
											(r = i[n]),
												this.viewer.utils.add_button_click_handler(
													r,
													this.viewer.utils.do_nothing_handler,
													!0
												);
										(this.opened = !0),
											this.open_callback && this.open_callback();
									}
								},
							},
							{
								key: 'close',
								value: function () {
									this.about && this.opened && this.about.destroy();
								},
							},
						]),
						e
					);
				})()),
				(ro = (function (e) {
					function t(e, i, n, r) {
						var o, s, a, l, h;
						if (
							((function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, t),
							(o = f(this, p(t).call(this))),
							(s = function () {
								(o.zindex = o.info.style.zIndex),
									(o.info.style.zIndex = '9999999999'),
									o.viewer.utils.colorize_svg(
										o.svg_element,
										o.viewer.params.gui_foreground_active,
										!1,
										o.paths_fill,
										o.paths_stroke
									),
									(o.opened = !0);
							}),
							(a = function () {
								o.viewer.utils.colorize_svg(
									o.svg_element,
									o.viewer.params.gui_foreground,
									!1,
									o.paths_fill,
									o.paths_stroke
								),
									(o.info.style.zIndex = o.zindex),
									(o.opened = !1);
							}),
							(o.onMouseDown = function (e) {
								return (
									0 == r.is_loaded ||
										(e.preventDefault(),
										e.stopPropagation(),
										o.info_window ||
											(o.info_window = new io(r, i, n, '', s, a)),
										o.opened
											? o.opened && o.info_window.close()
											: o.info_window.open()),
									!1
								);
							}),
							(o.TYPE = '6'),
							(o.info_window = null),
							(o.opened = !1),
							(o.viewer = r),
							(o.container = e),
							(o.info = e.appendChild(document.createElement('div'))),
							(o.button = document.createElement('div')),
							o.info.appendChild(o.button),
							(o.is_mobile = r.use_mobile_buttons),
							o.is_mobile)
						) {
							o.info.style.backgroundColor = r.hexToRgb(
								r.params.gui_background
							);
							try {
								o.info.style.backgroundColor = r.hexToRgba(
									r.params.gui_background
								);
							} catch (e) {}
							(o.info.className = 'ovviosinfo zindexer'),
								(o.button.innerHTML =
									'<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg id="svg3107" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="27" width="12.053" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata id="metadata3112"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><g id="layer1" transform="translate(-304.29142,-431.89705)"><g id="text3105" style="letter-spacing:0px;word-spacing:0px;" font-weight="normal" font-size="52.28489304px" line-height="125%" fill="#FFF"><path id="path3175" d="m315.81,435.03,0.0351-0.17544c0.2807-1.4035-0.8772-2.4561-2.5614-2.4561s-3.1228,0.94737-3.4386,2.4561l-0.0351,0.17544c-0.2807,1.4035,0.87719,2.4561,2.5614,2.4561s3.1228-0.94737,3.4386-2.4561m-2.386,7.6491c0.5965-2.2105-0.35087-3.5088-2.1404-3.5088-1.4035,0-2.5263,0.98246-2.9824,2.7018l-3.5088,13.018c-0.59649,2.2105,0.35088,3.5088,2.1404,3.5088,1.4035,0,2.5263-0.98246,2.9824-2.7018l3.5088-13.018"/></g></g></svg>'),
								(o.svg_element = o.button.children[0]),
								(o.button.style.position = 'absolute'),
								(o.button.style.bottom = '1px'),
								(o.button.style.left = '12px'),
								(o.paths_fill = ['path3175']),
								(o.paths_stroke = []);
						} else
							(o.button.className = 'ovviosbutton'),
								(o.info.className =
									'ovviosbuttonwrapper zindexer ovviosinfodesktop style-' +
									o.viewer.params.style),
								(l = ''),
								(h = r.container.id),
								(l =
									'1' == o.viewer.params.style || '3' == o.viewer.params.style
										? '<svg id="svg4409" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 20 20" width="20" preserveAspectRatio="none"><g id="background"><path id="path_background" fill="#f2f2f2" d="M20 2.65q0-1.1-.8-1.9Q18.45 0 17.3 0H2.65q-1.1 0-1.9.75-.75.8-.75 1.9V17.3q0 1.15.75 1.9.8.8 1.9.8H17.3q1.15 0 1.9-.8.8-.75.8-1.9V2.65z"/></g><g id="foreground"><g id="layer1"><g id="text3105" font-size="52.285" fill="#748f9b" letter-spacing="0" word-spacing="0"><path id="path_foreground" d="M12.42 7.244l.015-.09c.12-.71-.38-1.242-1.11-1.242s-1.35.48-1.488 1.243l-.017.09c-.122.71.38 1.244 1.11 1.244s1.35-.48 1.488-1.244m-1.034 3.87c.26-1.118-.152-1.775-.926-1.775-.608 0-1.094.498-1.292 1.368l-1.52 6.587c-.257 1.12.153 1.776.928 1.776.607 0 1.094-.496 1.29-1.366l1.52-6.588"/></g></g></g></svg>'
										: '<svg id="svg3116" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" height="25.2" viewBox="0 0 25.200001 25.200001" width="25.2"><g id="background"><path id="path_background" d="M0 12.56q0 5.25 3.7 8.95 3.65 3.65 8.9 3.65 5.2 0 8.9-3.65 3.7-3.7 3.7-8.95 0-5.2-3.7-8.9t-8.9-3.7q-5.25 0-8.9 3.7Q0 7.36 0 12.56z"/></g><g id="foreground"><g id="layer1"><g id="text3105" font-size="52.285" fill="#FFF" letter-spacing="0" word-spacing="0"><path id="path_foreground" d="M14.93 7.76l.015-.087c.122-.71-.38-1.243-1.11-1.243s-1.35.48-1.488 1.243l-.017.09c-.122.71.38 1.243 1.11 1.243s1.35-.48 1.488-1.242m-1.033 3.87c.258-1.118-.152-1.775-.927-1.775-.608 0-1.094.496-1.29 1.366l-1.52 6.587c-.26 1.12.15 1.776.926 1.776.608 0 1.094-.498 1.29-1.368l1.52-6.588"/></g></g></g></svg>'),
								(l = o.setup_svg_ids(l, h, [
									'path_background',
									'path_foreground',
								])),
								o.set_button_content(l),
								o.setup_tooltip('info'),
								o.colorize_tooltip(o.viewer.params),
								(o.svg_element = o.button.children[0]),
								r.utils.colorize_svg(
									o.svg_element,
									r.params.gui_background,
									!1,
									['path_background' + h],
									[]
								),
								(o.paths_stroke = []),
								(o.paths_fill = ['path_foreground' + h]);
						return (
							o.viewer.utils.add_button_click_handler(
								o.info,
								o.onMouseDown,
								!1
							),
							r.utils.colorize_svg(
								o.svg_element,
								r.params.gui_foreground,
								!1,
								o.paths_fill,
								o.paths_stroke
							),
							o
						);
					}
					return (
						m(t, e),
						(function (e, t, i) {
							t && d(e.prototype, t), i && d(e, i);
						})(t, [
							{
								key: 'close',
								value: function () {
									this.info_window && this.info_window.close();
								},
							},
							{
								key: 'destroy',
								value: function () {
									this.close(),
										this.viewer.utils.remove_button_click_handler(
											this.info,
											this.onMouseDown
										),
										this.destroy_tooltip(),
										this.container &&
											this.container.contains(this.info) &&
											this.container.removeChild(this.info),
										(this.info_window = null),
										(this.viewer = null),
										(this.container = null);
								},
							},
						]),
						t
					);
				})(
					(no = (function () {
						function e() {
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, e),
								(this.touchend_event = !1),
								(this.touchend_event_timeout = null),
								(this.viewer = null),
								(this.button = null);
						}
						return (
							(function (e, t, i) {
								t && u(e.prototype, t), i && u(e, i);
							})(e, [
								{
									key: 'handle_tooltip_on_action',
									value: function () {
										this.tooltip_timeout &&
											(window.clearTimeout(this.tooltip_timeout),
											(this.tooltip_timeout = null)),
											self.tooltip_hide_timeout &&
												(window.clearTimeout(self.tooltip_hide_timeout),
												(self.tooltip_hide_timeout = null)),
											this.button.classList.remove('hovered');
									},
								},
								{
									key: 'set_button_content',
									value: function (e) {
										this.button.innerHTML =
											e +
											'<span class="ovbuttonbefore"></span><span class="ovbuttonafter" style="visibility: hidden;"></span>';
									},
								},
								{
									key: 'colorize_tooltip',
									value: function (e) {
										var t = this.button.getElementsByClassName('ovbuttonafter');
										0 < t.length &&
											((t[0].style.backgroundColor =
												'#' + e.gui_background.substr(0, 6)),
											(t[0].style.color = '#' + e.gui_foreground.substr(0, 6))),
											0 <
												(t =
													this.button.getElementsByClassName('ovbuttonbefore'))
													.length &&
												(t[0].style.borderTopColor =
													'#' + e.gui_background.substr(0, 6));
									},
								},
								{
									key: 'set_label',
									value: function (e) {
										var t = this.button.getElementsByClassName('ovbuttonafter');
										0 < t.length && (t[0].innerHTML = e);
									},
								},
								{
									key: 'setup_svg_ids',
									value: function (e, t, i) {
										var n, r, o;
										for (n in i)
											i.hasOwnProperty(n) &&
												((r = i[n]),
												(o = RegExp(r, 'g')),
												(e = e.replace(o, r + t)));
										return e;
									},
								},
								{
									key: 'setup_tooltip',
									value: function (e) {
										var t,
											i = this;
										(this.button.className += ' button-hint'),
											(t = this.viewer.ovlang.trans(e)) &&
												(this.set_label(t),
												(this.tooltip_timeout = null),
												(this.handle_mouseover = function (e) {
													if (!~i.button.className.indexOf('hovered')) {
														var t =
															i.button.getElementsByClassName('ovbuttonafter');
														t && (t[0].style.visibility = null),
															(i.tooltip_timeout = window.setTimeout(
																function () {
																	(i.tooltip_timeout = null),
																		i.viewer &&
																			!i.viewer.is_destroyed &&
																			(i.button.classList.add('hovered'),
																			i.touchend_event &&
																				(i.tooltip_hide_timeout =
																					window.setTimeout(function () {
																						i.handle_tooltip_on_action();
																					}, 1e3)));
																},
																200
															));
													}
												}),
												(this.handle_mouseout = function () {
													i.handle_tooltip_on_action();
												}),
												this.button.addEventListener(
													'mouseover',
													this.handle_mouseover,
													!1
												),
												this.button.addEventListener(
													'mouseout',
													this.handle_mouseout,
													!1
												));
									},
								},
								{
									key: 'destroy_tooltip',
									value: function () {
										this.handle_mouseout &&
											(this.button.removeEventListener(
												'mouseover',
												this.handle_mouseover,
												!1
											),
											this.button.removeEventListener(
												'mouseout',
												this.handle_mouseout,
												!1
											),
											(this.handle_mouseout = null),
											(this.handle_mouseover = null));
									},
								},
								{
									key: 'do_nothing_handler',
									value: function (e) {
										return e.preventDefault(), e.stopPropagation(), !1;
									},
								},
								{
									key: 'attach_handlers',
									value: function (e, t, i, n, r) {
										var o = this;
										if (
											((this.touchend_handler = function (e) {
												i(e),
													e.pointerType &&
														'touch' === e.pointerType &&
														((o.touchend_event = !0),
														(o.touchend_event_timeout = window.setTimeout(
															function () {
																o.touchend_event = !1;
															},
															400
														)));
											}),
											window.PointerEvent)
										)
											t && e.addEventListener('pointerdown', t, !1),
												i &&
													e.addEventListener(
														'pointerup',
														this.touchend_handler,
														!1
													),
												n && e.addEventListener('pointerout', n, !1),
												r && e.addEventListener('pointermove', r, !1);
										else if (window.MSPointerEvent)
											t && e.addEventListener('MSPointerDown', t, !1),
												i &&
													e.addEventListener(
														'MSPointerUp',
														this.touchend_handler,
														!1
													),
												n && e.addEventListener('MSPointerOut', n, !1),
												r && e.addEventListener('MSPointerMove', r, !1);
										else {
											if (
												(e.addEventListener(
													'click',
													this.do_nothing_handler,
													!1
												),
												t)
											) {
												e.addEventListener('mousedown', t, !1),
													(this.sub_touchstart_callback = function (i) {
														i.target.removeEventListener('mousedown', t, !1),
															e.removeEventListener('mousedown', t, !1),
															t(i),
															e.addEventListener('mousedown', t, !1);
													});
												try {
													e.addEventListener(
														'touchstart',
														this.sub_touchstart_callback,
														!1
													);
												} catch (e) {}
											}
											if (i) {
												(this.sub_touchend_callback = function (t) {
													t.target.removeEventListener('mouseup', i, !1),
														e.removeEventListener('mouseup', i, !1),
														i(t),
														e.addEventListener('mouseup', i, !1),
														(o.touchend_event = !0),
														(o.touchend_event_timeout = window.setTimeout(
															function () {
																o.touchend_event = !1;
															},
															400
														));
												}),
													e.addEventListener('mouseup', i, !1);
												try {
													e.addEventListener(
														'touchend',
														this.sub_touchend_callback,
														!1
													);
												} catch (e) {}
											}
											if ((n && e.addEventListener('mouseout', n, !1), r)) {
												(this.sub_touchmove_callback = function (t) {
													t.target.removeEventListener('mousemove', r, !1),
														e.removeEventListener('mousemove', r, !1),
														r(t),
														e.addEventListener('mousemove', r, !1);
												}),
													e.addEventListener('mousemove', r, !1);
												try {
													e.addEventListener(
														'touchmove',
														this.sub_touchmove_callback,
														!1
													);
												} catch (e) {}
											}
										}
										e.addEventListener(
											'dblclick',
											function (e) {
												return e.preventDefault(), e.stopPropagation(), !1;
											},
											!1
										);
									},
								},
								{
									key: 'detach_handlers',
									value: function (e, t, i, n, r) {
										if (window.PointerEvent)
											t && e.removeEventListener('pointerdown', t, !1),
												i &&
													e.removeEventListener(
														'pointerup',
														this.touchend_handler,
														!1
													),
												n && e.removeEventListener('pointerout', n, !1),
												r && e.removeEventListener('pointermove', r, !1);
										else if (window.MSPointerEvent)
											t && e.removeEventListener('MSPointerDown', t, !1),
												i &&
													e.removeEventListener(
														'MSPointerUp',
														this.touchend_handler,
														!1
													),
												n && e.removeEventListener('MSPointerOut', n, !1),
												r && e.removeEventListener('MSPointerMove', r, !1);
										else {
											if (
												(e.removeEventListener(
													'click',
													this.do_nothing_handler,
													!1
												),
												t)
											) {
												e.removeEventListener('mousedown', t, !1);
												try {
													e.removeEventListener(
														'touchstart',
														this.sub_touchstart_callback,
														!1
													);
												} catch (e) {}
											}
											if (i) {
												e.removeEventListener('mouseup', i, !1);
												try {
													e.removeEventListener(
														'touchend',
														this.sub_touchend_callback,
														!1
													);
												} catch (e) {}
											}
											if ((n && e.removeEventListener('mouseout', n, !1), r)) {
												e.removeEventListener('mousemove', r, !1);
												try {
													e.removeEventListener(
														'touchmove',
														this.sub_touchmove_callback,
														!1
													);
												} catch (e) {}
											}
										}
										(this.sub_touchstart_callback = null),
											(this.sub_touchend_callback = null),
											(this.sub_touchmove_callback = null);
									},
								},
							]),
							e
						);
					})())
				)),
				(oo = (function (e) {
					function t(e, i, n) {
						var r, o, s;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, t),
							((r = A(this, w(t).call(this))).zoomAnimationRefresh = 50),
							(r.interval_dict = n),
							(r.onMouseDown = function (e) {
								e.preventDefault(),
									e.stopPropagation(),
									e.pointerType && 'touch' === e.pointerType
										? r.handle_tooltip_on_action(!0)
										: r.handle_tooltip_on_action(!1),
									r.viewer.scale !== r.viewer.min_scale &&
										(r.zoomOut(),
										(r.interval_dict.timeoutId = setTimeout(function () {
											r.zoomOut(),
												(r.interval_dict.intervalId = setInterval(function () {
													r.zoomOut();
												}, r.zoomAnimationRefresh));
										}, 250))),
									r.viewer.utils.colorize_svg(
										r.svg_element,
										r.viewer.params.gui_foreground_active,
										!1,
										r.paths_fill,
										r.paths_stroke
									);
							}),
							(r.onMouseUp = function (e) {
								r.interval_dict.intervalId &&
									(e.preventDefault(), e.stopPropagation()),
									r.handle_tooltip_on_action(),
									r.stop();
							}),
							(r.viewer = e),
							(r.container = i),
							(r.zoom_out = i.appendChild(document.createElement('div'))),
							(r.button = document.createElement('div')),
							r.zoom_out.appendChild(r.button),
							(r.button.className = 'ovviosbutton'),
							(r.zoom_out.className =
								'ovviosbuttonwrapper ovvioszoomout zindexer style-' +
								r.viewer.params.style),
							(o = ''),
							(s = e.container.id),
							(o =
								'1' == r.viewer.params.style || '3' == r.viewer.params.style
									? '<svg id="svg4846" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 20 20" width="20" preserveAspectRatio="none"><g id="background"><path id="path_background" fill="#f2f2f2" d="M20 2.65q0-1.1-.8-1.9Q18.45 0 17.3 0H2.65q-1.1 0-1.9.75-.75.8-.75 1.9V17.3q0 1.15.75 1.9.8.8 1.9.8H17.3q1.15 0 1.9-.8.8-.75.8-1.9V2.65z"/></g><g id="foreground_FL"><path id="path_foreground" fill="gray" d="M3.8 9.75v.85q0 .5.5.5h12.15q.5 0 .5-.5v-.85q0-.5-.5-.5H4.3q-.5 0-.5.5z"/></g></svg>'
									: '<svg id="svg2" xmlns="http://www.w3.org/2000/svg" height="25.2" viewBox="0 0 25.200001 25.200001" width="25.2" preserveAspectRatio="none"><g id="Layer1_0_OUT_FILL"><path id="path_background" fill-opacity=".706" d="M12.6 0Q7.4 0 3.7 3.7T0 12.6q0 5.25 3.7 8.95 3.7 3.65 8.9 3.65t8.9-3.65q3.7-3.7 3.7-8.95 0-5.2-3.7-8.9T12.6 0z"/></g><g id="Layer1_1_OUT_FILL"><path id="path_foreground" fill="#FFF" d="M8.2 12.6q0 .85.85.85h7.25q.85 0 .85-.85t-.85-.85H9.05q-.85 0-.85.85zm12.4 3q.5-1.395.5-3 0-3.5-2.5-6-2.45-2.5-6-2.5T6.55 6.6t-2.5 6q0 3.55 2.5 6.05t6.05 2.5q2.807 0 4.9-1.6l3.35 2.6q1.95-1.7 3.05-4l-3.3-2.55m-8-9.8q2.9 0 4.8 2 2 2 2 4.8 0 2.85-2 4.85-1.9 2-4.8 2-2.85 0-4.85-2t-2-4.85q0-2.8 2-4.8t4.85-2z"/></g></svg>'),
							(o = r.setup_svg_ids(o, s, [
								'Layer1_0_OUT_FILL',
								'Layer1_1_OUT_FILL',
								'path_background',
								'path_foreground',
							])),
							r.set_button_content(o),
							r.setup_tooltip('zoomout'),
							r.colorize_tooltip(r.viewer.params),
							(r.svg_element = r.button.children[0]),
							(r.paths_fill = ['path_foreground' + s]),
							(r.paths_stroke = []),
							e.utils.colorize_svg(
								r.svg_element,
								e.params.gui_foreground,
								!1,
								r.paths_fill,
								r.paths_stroke
							),
							e.utils.colorize_svg(
								r.svg_element,
								e.params.gui_background,
								!1,
								['path_background' + s],
								[]
							),
							r.attach_handlers(
								r.zoom_out,
								r.onMouseDown,
								r.onMouseUp,
								r.onMouseUp
							),
							r
						);
					}
					return (
						y(t, e),
						(function (e, t, i) {
							t && g(e.prototype, t), i && g(e, i);
						})(t, [
							{
								key: 'destroy',
								value: function () {
									this.detach_handlers(
										this.zoom_out,
										this.onMouseDown,
										this.onMouseUp,
										this.onMouseUp
									),
										this.destroy_tooltip(),
										(this.viewer = null),
										this.container &&
											this.container.contains(this.zoom_out) &&
											this.container.removeChild(this.zoom_out),
										(this.button = null),
										(this.zoom_out = null),
										(this.container = null);
								},
							},
							{
								key: 'zoomOut',
								value: function () {
									this.viewer.scale != this.viewer.min_scale &&
										this.viewer.scaleDown();
								},
							},
							{
								key: 'stop',
								value: function () {
									this.interval_dict.intervalId &&
										(clearInterval(this.interval_dict.intervalId),
										(this.interval_dict.intervalId = null)),
										this.interval_dict.timeoutId &&
											(clearTimeout(this.interval_dict.timeoutId),
											(this.interval_dict.timeoutId = null)),
										this.viewer.utils.colorize_svg(
											this.svg_element,
											this.viewer.params.gui_foreground,
											!1,
											this.paths_fill,
											this.paths_stroke
										);
								},
							},
							{
								key: 'hide',
								value: function () {
									this.zoom_out && (this.zoom_out.style.display = 'none');
								},
							},
							{
								key: 'show',
								value: function () {
									this.zoom_out &&
										(this.zoom_out.style.display = 'inline-block');
								},
							},
						]),
						t
					);
				})(no)),
				(so = (function (e) {
					function t(e, i, n) {
						var r, o, s;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, t),
							((r = x(this, k(t).call(this))).interval_dict = n),
							(r.zoomAnimationRefresh = 50),
							(r.viewer = e),
							(r.onMouseDown = function (e) {
								e.preventDefault(),
									e.stopPropagation(),
									r.handle_tooltip_on_action(),
									r.viewer.scale !== r.viewer.max_scale &&
										(r.zoomIn(),
										(r.interval_dict.timeoutId = setTimeout(function () {
											r.zoomIn(),
												(r.interval_dict.intervalId = setInterval(function () {
													r.zoomIn();
												}, r.zoomAnimationRefresh));
										}, 250))),
									r.viewer.utils.colorize_svg(
										r.svg_element,
										r.viewer.params.gui_foreground_active,
										!1,
										r.paths_fill,
										r.paths_stroke
									);
							}),
							(r.onMouseUp = function (e) {
								r.interval_dict.intervalId &&
									(e.preventDefault(), e.stopPropagation()),
									r.handle_tooltip_on_action(),
									r.stop();
							}),
							(r.container = i),
							(r.zoom_in = i.appendChild(document.createElement('div'))),
							(r.button = document.createElement('div')),
							r.zoom_in.appendChild(r.button),
							(r.button.className = 'ovviosbutton'),
							(r.zoom_in.className =
								'ovviosbuttonwrapper ovvioszoomin zindexer style-' +
								r.viewer.params.style),
							(o = ''),
							(s = e.container.id),
							(o =
								'1' == r.viewer.params.style || '3' == r.viewer.params.style
									? '<svg id="svg4704" xmlns="http://www.w3.org/2000/svg" height="19.7" viewBox="0 0 20 19.700001" width="20" preserveAspectRatio="none"><g id="background"><path id="path_background" fill="#f2f2f2" d="M20 2.65q0-1.1-.8-1.9Q18.45 0 17.3 0H2.65q-1.1 0-1.9.75-.75.8-.75 1.9V17.3q0 1.15.75 1.9.8.8 1.9.8H17.3q1.15 0 1.9-.8.8-.75.8-1.9V2.65z"/></g><g id="foreground"><path id="path_foreground" fill="gray" d="M16.1 10.6q.15 0 .15-.15V9.6q0-.15-.15-.15h-5.5v-5.5q0-.15-.15-.15H9.6q-.15 0-.15.15v5.5h-5.5q-.15 0-.15.15v.85q0 .15.15.15h5.5v5.5q0 .15.15.15h.85q.15 0 .15-.15v-5.5h5.5z"/></g></svg>'
									: '<svg id="svg3336" xmlns="http://www.w3.org/2000/svg" height="25.2" viewBox="0 0 25.200001 25.200001" width="25.2" preserveAspectRatio="none"><g id="Layer1_0_FILL"><path id="path_background" fill-opacity=".706" d="M3.7 21.55q3.7 3.65 8.9 3.65t8.9-3.65q3.7-3.7 3.7-8.95 0-5.2-3.7-8.9T12.6 0 3.7 3.7 0 12.6q0 5.25 3.7 8.95z"/></g><g id="Layer1_1_FILL"><path id="path_foreground" fill="#FFF" d="M13.55 9q0-.85-.85-.85t-.85.85v2.75H9.1q-.85 0-.85.85t.85.85h2.75v2.8q0 .85.85.85t.85-.85v-2.8h2.75q.85 0 .85-.85t-.85-.85h-2.75V9zm7.05 6.6q.55-1.377.55-3 0-3.5-2.5-6T12.6 4.1q-3.5 0-6 2.5t-2.5 6q0 3.55 2.5 6.05 2.45 2.5 6 2.5 2.797 0 4.95-1.55l3.3 2.55q1.9-1.6 3.05-4l-3.3-2.55m-8-9.8q2.85 0 4.85 2t2 4.8q0 2.85-2 4.85t-4.85 2q-2.9 0-4.8-2-2-2-2-4.85 0-2.8 2-4.8 1.9-2 4.8-2z"/></g></svg>'),
							(o = r.setup_svg_ids(o, s, [
								'Layer1_0_FILL',
								'Layer1_1_FILL',
								'path_background',
								'path_foreground',
							])),
							r.set_button_content(o),
							r.setup_tooltip('zoomin'),
							r.colorize_tooltip(r.viewer.params),
							(r.svg_element = r.button.children[0]),
							(r.paths_fill = ['path_foreground' + s]),
							(r.paths_stroke = []),
							e.utils.colorize_svg(
								r.svg_element,
								e.params.gui_foreground,
								!1,
								r.paths_fill,
								r.paths_stroke
							),
							e.utils.colorize_svg(
								r.svg_element,
								e.params.gui_background,
								!1,
								['path_background' + s],
								[]
							),
							r.attach_handlers(
								r.zoom_in,
								r.onMouseDown,
								r.onMouseUp,
								r.onMouseUp
							),
							r
						);
					}
					return (
						B(t, e),
						(function (e, t, i) {
							t && E(e.prototype, t), i && E(e, i);
						})(t, [
							{
								key: 'destroy',
								value: function () {
									this.detach_handlers(
										this.zoom_in,
										this.onMouseDown,
										this.onMouseUp,
										this.onMouseUp
									),
										this.destroy_tooltip(),
										(this.viewer = null),
										this.container &&
											this.container.contains(this.zoom_in) &&
											this.container.removeChild(this.zoom_in),
										(this.button = null),
										(this.zoom_in = null),
										(this.container = null);
								},
							},
							{
								key: 'zoomIn',
								value: function () {
									this.viewer.scale != this.viewer.max_scale &&
										this.viewer.scaleUp();
								},
							},
							{
								key: 'hide',
								value: function () {
									this.zoom_in && (this.zoom_in.style.display = 'none');
								},
							},
							{
								key: 'show',
								value: function () {
									this.zoom_in && (this.zoom_in.style.display = 'inline-block');
								},
							},
							{
								key: 'stop',
								value: function () {
									this.interval_dict.intervalId &&
										(clearInterval(this.interval_dict.intervalId),
										(this.interval_dict.intervalId = null)),
										this.interval_dict.timeoutId &&
											(clearTimeout(this.interval_dict.timeoutId),
											(this.interval_dict.timeoutId = null)),
										this.viewer.utils.colorize_svg(
											this.svg_element,
											this.viewer.params.gui_foreground,
											!1,
											this.paths_fill,
											this.paths_stroke
										);
								},
							},
						]),
						t
					);
				})(no)),
				(ao = (function (e) {
					function t(e, i) {
						var n, r, o;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, t),
							((n = O(this, R(t).call(this))).viewer = e),
							(n.onMouseDown = function (t) {
								return (
									e.is_loaded &&
										(e.dispatchEvent('interaction_start'),
										e.dispatchEvent('activity_start'),
										n.handle_tooltip_on_action(),
										n.viewer.mode == n.viewer.MODE_AUTOROTATE
											? n.viewer.changeMode(n.viewer.MODE_ROTATE)
											: n.viewer.changeMode(n.viewer.MODE_AUTOROTATE),
										t.preventDefault(),
										t.stopPropagation()),
									!1
								);
							}),
							(n.container = i),
							(n.wrapper = i.appendChild(document.createElement('div'))),
							(n.wrapper.className =
								'ovviosbuttonwrapper ovviosautorotate zindexer style-' +
								n.viewer.params.style),
							(n.button = document.createElement('div')),
							(n.button.className = 'ovviosbutton'),
							n.wrapper.appendChild(n.button),
							(r = ''),
							(r =
								'1' == n.viewer.params.style || '3' == n.viewer.params.style
									? '<svg id="svg3164" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 20 20" width="20" preserveAspectRatio="none"><g id="background"><path id="path_background" fill="#f2f2f2" d="M20 2.65q0-1.1-.8-1.9Q18.45 0 17.3 0H2.65q-1.1 0-1.9.75-.75.8-.75 1.9V17.3q0 1.15.75 1.9.8.8 1.9.8H17.3q1.15 0 1.9-.8.8-.75.8-1.9V2.65z"/></g><g id="foreground"><path id="path_foreground" fill="gray" d="M11.9 5.55l.1-.05.6-.6.05-.1v-.1L9.9 1.85l-.1-.05-.1.05-.65.6q-.1.1 0 .25l2.7 2.8.15.05zm-2.2 2.1l.1-.05 2.8-2.7q.15-.1.05-.2L12 4.05 11.9 4l-.1.05-2.85 2.7-.05.1.05.1.6.65.15.05zm-4.2.25Q6.7 6 8.8 5.45q.7-.15 1.35-.15.6 0 .9.05l.3-1.15-1.2-.1q-.9 0-1.65.2-2.6.7-4 3-1.45 2.4-.75 5 .55 2.2 2.35 3.55 1.75 1.4 4.05 1.4.85 0 1.6-.2 2.6-.7 4-3 1.45-2.4.75-5-.3-1.25-1.15-2.35l-.1-.05-.1.05-.7.5q-.1.15-.05.2.65.85.95 1.95.55 2.2-.6 4.1-1.2 1.95-3.3 2.45-.65.15-1.3.15-1.9 0-3.35-1.1Q5.35 13.8 4.9 12q-.55-2.2.6-4.1z"/></g></svg>'
									: '<svg id="svg2" xmlns="http://www.w3.org/2000/svg" height="25.2" viewBox="0 0 25.200001 25.200001" width="25.2" preserveAspectRatio="none"><g id="background"><path id="path_background" d="M.042 12.623q0 5.25 3.7 8.95 3.65 3.65 8.9 3.65 5.2 0 8.9-3.65 3.7-3.7 3.7-8.95 0-5.2-3.7-8.9t-8.9-3.7q-5.25 0-8.9 3.7-3.7 3.7-3.7 8.9z"/></g><g id="foreground"><path id="path_foreground" fill="#FFF" d="M22.792 9.273q-.85-.35-1.1.45l-.45 1q-.5-2.45-2.4-4.3-2.55-2.6-6.2-2.6t-6.25 2.6q-2.6 2.55-2.6 6.2 0 3.7 2.6 6.25 2.6 2.6 6.25 2.6t6.25-2.6q.55-.55 0-1.2-.65-.55-1.2 0-2.1 2.1-5.05 2.1t-5.05-2.1-2.1-5.05 2.1-5.05q2.15-2.05 5.05-2.05t5.05 2.05q1.65 1.7 2 3.9l-.95-1.65q-.35-.8-1.15-.35-.7.35-.35 1.15l2.25 4.1q0 .1.05.2.05.3.4.45.15.15.45.1h.2q.35-.05.55-.4.1-.15.1-.4l1.95-4.25q.35-.8-.4-1.15z"/></g></svg>'),
							(o = e.container.id),
							(r = n.setup_svg_ids(r, o, [
								'path_background',
								'path_foreground',
							])),
							n.set_button_content(r),
							(n.svg_element = n.button.children[0]),
							(n.paths_fill = ['path_foreground' + o]),
							(n.paths_stroke = []),
							e.utils.colorize_svg(
								n.svg_element,
								e.params.gui_foreground,
								!1,
								n.paths_fill,
								n.paths_stroke
							),
							e.utils.colorize_svg(
								n.svg_element,
								e.params.gui_background,
								!1,
								['path_background' + o],
								[]
							),
							n.viewer.utils.add_button_click_handler(
								n.wrapper,
								n.onMouseDown,
								!1
							),
							n.setup_tooltip('autorotation'),
							n.colorize_tooltip(n.viewer.params),
							n
						);
					}
					return (
						Q(t, e),
						(function (e, t, i) {
							t && M(e.prototype, t), i && M(e, i);
						})(t, [
							{
								key: 'destroy',
								value: function () {
									this.viewer.utils.remove_button_click_handler(
										this.wrapper,
										this.onMouseDown
									),
										this.destroy_tooltip(),
										(this.viewer = null),
										this.container &&
											this.container.contains(this.wrapper) &&
											this.container.removeChild(this.wrapper),
										(this.button = null),
										(this.wrapper = null),
										(this.container = null);
								},
							},
							{
								key: 'on',
								value: function () {
									this.viewer.utils.colorize_svg(
										this.svg_element,
										this.viewer.params.gui_foreground_active,
										!1,
										this.paths_fill,
										this.paths_stroke
									);
								},
							},
							{
								key: 'off',
								value: function () {
									this.viewer.utils.colorize_svg(
										this.svg_element,
										this.viewer.params.gui_foreground,
										!1,
										this.paths_fill,
										this.paths_stroke
									);
								},
							},
						]),
						t
					);
				})(no)),
				(lo = (function (e) {
					function t(e, i, n) {
						var r, o, s, a;
						if (
							((function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, t),
							((r = D(this, z(t).call(this))).is_rotate = n),
							(r.viewer = e),
							(r.diff = 0),
							(r.pos = 0),
							(r.is_dragging = !1),
							(r.container = i),
							(r.container_id = e.container.id),
							(r.has_dragger =
								'2' == r.viewer.params.style || '3' == r.viewer.params.style),
							(r.current_hangle = 0),
							(r.frame_no = null),
							r.setup_handlers(),
							(r.wrapper = i.appendChild(document.createElement('div'))),
							(r.wrapper.className =
								'ovviosbuttonwrapper ovviosmoverotate zindexer style-' +
								r.viewer.params.style),
							(r.button = document.createElement('div')),
							(r.button.className = 'ovviosbutton'),
							r.has_dragger
								? ((r.dragger1 = document.createElement('div')),
								  (r.dragger1.className =
										'ovviosmoverotatedragger ovviosmoverotatedragger1 zindexer'),
								  (r.dragger2 = document.createElement('div')),
								  (r.dragger2.className =
										'ovviosmoverotatedragger ovviosmoverotatedragger2 zindexer'),
								  r.wrapper.appendChild(r.dragger1),
								  r.wrapper.appendChild(r.dragger2),
								  r.wrapper.appendChild(r.button),
								  (r.rotate_handler = function (e) {
										var t, i;
										(r.current_hangle = e),
											r.is_dragging ||
												((t = r.panel_width / (r.viewer.frames_no - 1)),
												0 === e ||
													e ||
													(e = r.viewer.get_transformed_value('hangle')),
												(i = Fr()(e * t)),
												(r.pos = i),
												(r.button.style.transform = 'translateX('.concat(
													i,
													'px'
												)),
												(r.dragger1.style.transform =
													'scaleX(' +
													i / (r.panel_width + r.button_width) +
													') translateY(-50%)'),
												(r.dragger2.style.transform =
													'scaleX(' +
													(r.panel_width - i) /
														(r.panel_width + r.button_width) +
													') translateY(-50%)'));
								  }),
								  0 === (o = r.wrapper.getBoundingClientRect().width) &&
										(o = 150),
								  (r.button_width = r.button.getBoundingClientRect().width),
								  0 === r.button_width && (r.button_width = 26),
								  (r.panel_width = o - r.button_width),
								  r.rotate_handler(Fr()(e.params.first_frame)),
								  r.attach_handlers(
										r.button,
										r.on_mousedown_drag,
										null,
										null,
										null
								  ),
								  r.viewer.addListener('rotate', r.rotate_handler))
								: (r.wrapper.appendChild(r.button),
								  (r.zoom_complete_handler = function () {
										r.viewer.get_mode() == r.viewer.MODE_DRAG
											? r.switch_mode('drag')
											: r.switch_mode('rotate');
								  }),
								  r.viewer.addListener(
										'zoom_complete',
										r.zoom_complete_handler
								  )),
							(s = ''),
							(s =
								'1' == r.viewer.params.style || '3' == r.viewer.params.style
									? '<svg id="svg5255" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 20 20" width="20" preserveAspectRatio="none"><g id="background"><path id="path_background" fill="#f2f2f2" d="M20 2.65q0-1.1-.8-1.9Q18.45 0 17.3 0H2.65q-1.1 0-1.9.75-.75.8-.75 1.9V17.3q0 1.15.75 1.9.8.8 1.9.8H17.3q1.15 0 1.9-.8.8-.75.8-1.9V2.65z"/></g><g id="foreground_FL"><path id="path_rotate" fill="gray" d="M14.427 15.816q.714-.556.16-1.27t-1.27-.2q-.716.557-.16 1.27t1.27.2M4.15 14.268q.555.754 1.27.2.713-.517.197-1.232-.555-.793-1.27-.198-.714.516-.198 1.23m6.507 1.19q-.913.08-.754.993.08.874.992.794.873-.158.794-1.03-.16-.874-1.033-.755m-3.532 1.23q.794.356 1.19-.477.358-.834-.475-1.19-.834-.398-1.19.475-.398.834.475 1.19M3.792 11.53q.913-.08.833-.992-.158-.873-.992-.794-.912.08-.833.992.16.873.992.794m.873-5q-.833-.357-1.19.437-.397.833.436 1.19.834.397 1.192-.436t-.437-1.19m2.302-.992q.754-.516.198-1.23-.476-.754-1.23-.238T5.697 5.3q.476.754 1.27.238m2.698-.913q.913-.08.833-.992-.08-.833-.952-.833-.913.08-.833.992 0 .833.952.833m6.468 5.476l-1.23-2.3q-.357-.635-.913-.278-.595.318-.277.913l1.785 3.293q.04.2.16.318.197.317.515.278.357.04.555-.318.12-.12.12-.278l1.587-3.452q.277-.635-.318-.913-.635-.277-.912.358l-1.072 2.38m-3.69-4.92q.833.358 1.23-.396.357-.833-.397-1.23-.833-.357-1.23.397-.357.834.397 1.23m3.373 2.183q.793-.476.277-1.27-.515-.753-1.23-.237-.793.436-.277 1.23.515.714 1.23.277z"/></g><g id="foreground"><path id="path_move" fill="gray" d="M11.226 9.332q0-.35-.35-.35h-1.95q-.35 0-.35.35v1.95q0 .35.35.35h1.95q.35 0 .35-.35v-1.95zm-1.45 8.798q.05.1.15 0l.7-.7v-.15l-3.1-3.15h-.15l-.75.75v.15l3.15 3.1zm3.3-3.1v-.15l-.7-.75h-.2l-3.1 3.15-.05.1.75.75q.05.1.15 0l3.15-3.1zm-2.45-11.696v-.15l-.7-.75h-.15l-3.15 3.15v.15l.75.75h.15l3.1-3.15zm1.75 3.15l.7-.75v-.15l-3.15-3.15h-.15l-.75.8.05.1 3.1 3.15h.2zm-3.15-2.45v3.9q0 .1.15.1h1l.1-.1v-3.9l-.1-.1h-1q-.15 0-.15.1zm0 8.648v3.9q0 .098.15.098h1l.1-.1v-3.898l-.1-.1h-1q-.15 0-.15.1zM8.85 9q-.35 0-.35.35v1.95q0 .35.35.35h1.95q.35 0 .35-.35V9.35q0-.35-.35-.35H8.85zm8.8 1.45q.1-.05 0-.15l-.7-.7h-.15l-3.15 3.1v.15l.75.75h.15l3.1-3.15zm-3.1-3.3h-.15l-.75.7v.2l3.15 3.1.1.05.75-.75q.1-.05 0-.15l-3.1-3.15zM2.85 9.6H2.7l-.75.7v.15L5.1 13.6h.15l.75-.75v-.15L2.85 9.6zM6 7.85l-.75-.7H5.1L1.95 10.3v.15l.8.75.1-.05L6 8.05v-.2zM3.55 11h3.9q.1 0 .1-.15v-1l-.1-.1h-3.9l-.1.1v1q0 .15.1.15zm8.65 0h3.9q.1 0 .1-.15v-1l-.1-.1h-3.9l-.1.1v1q0 .15.1.15z"/></g></svg>'
									: '<svg id="svg2" xmlns="http://www.w3.org/2000/svg" height="25.2" viewBox="0 0 25.200001 25.200001" width="25.2" preserveAspectRatio="none"><g id="background"><path id="path_background" d="M.02 12.638q0 5.25 3.7 8.95 3.65 3.65 8.9 3.65 5.2 0 8.9-3.65 3.7-3.7 3.7-8.95 0-5.2-3.7-8.9t-8.9-3.7q-5.25 0-8.9 3.7-3.7 3.7-3.7 8.9z"/></g><g id="foreground" fill="#FFF"><path id="path_move" d="M12.62 14.738q-.85 0-.85.85v3.2l-1.2-1.25q-.65-.65-1.2 0-.6.6 0 1.2l2.5 2.55q.1.3.5.4.2.05.4.05h.05q.05-.05.1-.05.35-.1.5-.4l2.5-2.55q.6-.6 0-1.2t-1.2 0l-1.25 1.25v-3.2q0-.85-.85-.85m-4.85-5.35q-.6-.6-1.2 0l-2.5 2.5q-.35.1-.4.5-.1.2-.05.4v.05l.05.05v.05q.05.35.4.5l2.5 2.5q.6.6 1.2 0 .65-.55 0-1.2l-1.25-1.25h3.15q.85 0 .85-.85t-.85-.85h-3.1l1.2-1.2q.65-.65 0-1.2m10.95 0q-.65-.65-1.2 0-.65.55 0 1.2l1.25 1.2h-3.2q-.85 0-.85.85t.85.85h3.2l-1.25 1.25q-.65.65 0 1.2.55.65 1.2 0l2.55-2.5q.3-.15.4-.5v-.15q.05-.2 0-.4-.1-.4-.4-.5l-2.55-2.5m-2.8-1.6q.6-.6 0-1.2l-2.5-2.5q-.15-.35-.5-.4-.3-.15-.55 0-.4.05-.5.4l-2.5 2.5q-.6.6 0 1.2.55.65 1.2 0l1.2-1.2v3.1q0 .85.85.85t.85-.85v-3.15l1.25 1.25q.6.6 1.2 0z"/><path id="path_rotate" d="M16.67 19.738q.7.9 1.6.25.9-.7.2-1.6-.7-.9-1.6-.25-.9.7-.2 1.6m-11.1-3.25q-.9.65-.25 1.55.7.95 1.6.25.9-.65.25-1.55-.7-1-1.6-.25m7.95 3.05q-1.15.1-.95 1.25.1 1.1 1.25 1 1.1-.2 1-1.3-.2-1.1-1.3-.95m-2.95.95q.45-1.05-.6-1.5-1.05-.5-1.5.6-.5 1.05.6 1.5 1 .45 1.5-.6m-6.95-6.9q.2 1.1 1.25 1 1.15-.1 1.05-1.25-.2-1.1-1.25-1-1.15.1-1.05 1.25m2.35-5.3q-1.05-.45-1.5.55-.5 1.05.55 1.5 1.05.5 1.5-.55.45-1.05-.55-1.5m2.9-1.25q.95-.65.25-1.55-.6-.95-1.55-.3-.95.65-.3 1.55.6.95 1.6.3m2.2-2.2q0 1.05 1.2 1.05 1.15-.1 1.05-1.25-.1-1.05-1.2-1.05-1.15.1-1.05 1.25m10.7 4.95l-1.35 3-1.55-2.9q-.45-.8-1.15-.35-.75.4-.35 1.15l2.25 4.15q.05.25.2.4.25.4.65.35.45.05.7-.4.15-.15.15-.35l2-4.35q.35-.8-.4-1.15-.8-.35-1.15.45m-6.5-4.75q-.45 1.05.5 1.55 1.05.45 1.55-.5.45-1.05-.5-1.55-1.05-.45-1.55.5m5.1 2.7q-.65-.95-1.55-.3-1 .55-.35 1.55.65.9 1.55.35 1-.6.35-1.6z"/></g></svg>'),
							(s = r.setup_svg_ids(s, r.container_id, [
								'path_background',
								'path_move',
								'path_rotate',
							])),
							r.set_button_content(s),
							r.dragger1)
						) {
							(r.dragger1.style.backgroundColor = e.hexToRgb(
								e.params.gui_background
							)),
								(r.dragger2.style.backgroundColor = e.hexToRgb(
									e.params.gui_background
								));
							try {
								(r.dragger1.style.backgroundColor = e.hexToRgba(
									e.params.gui_background
								)),
									(r.dragger2.style.backgroundColor = e.hexToRgba(
										e.params.gui_background
									));
							} catch (e) {}
						}
						return (
							(a = r.button.children[0]),
							e.utils.colorize_svg(
								a,
								e.params.gui_foreground,
								!1,
								['path_move' + r.container_id, 'path_rotate' + r.container_id],
								[]
							),
							e.utils.colorize_svg(
								a,
								e.params.gui_background,
								!1,
								['path_background' + r.container_id],
								[]
							),
							r.has_dragger ||
								(r.setup_tooltip('move'),
								r.colorize_tooltip(r.viewer.params),
								r.viewer.utils.add_button_click_handler(
									r.wrapper,
									r.onMouseDown,
									!1
								)),
							r.render(),
							r
						);
					}
					return (
						S(t, e),
						(function (e, t, i) {
							t && I(e.prototype, t), i && I(e, i);
						})(t, [
							{
								key: 'refresh_dragger',
								value: function () {
									if (this.has_dragger) {
										var e = this.wrapper.getBoundingClientRect().width;
										(this.button_width =
											this.button.getBoundingClientRect().width),
											(this.panel_width = e - this.button_width),
											this.rotate_handler(this.current_hangle);
									}
								},
							},
							{
								key: 'setup_handlers',
								value: function () {
									var e = this;
									(this.onMouseDown = function (t) {
										return (
											e.viewer.is_loaded &&
												(e.viewer.dispatchEvent('interaction_start'),
												e.viewer.dispatchEvent('activity_start'),
												e.handle_tooltip_on_action(),
												e.is_rotate
													? (e.viewer.set_forced_mode('drag'),
													  e.switch_mode('drag'))
													: (e.viewer.set_forced_mode('rotate'),
													  e.switch_mode('rotate')),
												e.viewer.mode == e.viewer.MODE_AUTOROTATE &&
													(e.is_rotate
														? e.viewer.changeMode(e.viewer.MODE_ROTATE)
														: e.viewer.changeMode(e.viewer.MODE_DRAG)),
												t.preventDefault(),
												t.stopPropagation()),
											!1
										);
									}),
										(this.on_mousemove = function (t) {
											var i,
												n,
												r,
												o,
												s = e.getRelativeX(t) - e.diff;
											if (
												(s < 0 && (s = 0),
												s > e.panel_width && (s = e.panel_width),
												(e.pos = s),
												(e.button.style.transform = 'translateX('.concat(
													s,
													'px'
												)),
												(e.dragger1.style.transform =
													'scaleX(' +
													s / (e.panel_width + e.button_width) +
													') translateY(-50%)'),
												(e.dragger2.style.transform =
													'scaleX(' +
													(e.panel_width - s) /
														(e.panel_width + e.button_width) +
													') translateY(-50%)'),
												(i = e.viewer.get_transformed_value('hangle')),
												(n = e.viewer.get_transformed_value('vangle')),
												(r = Fr()(
													(s * (e.viewer.frames_no - 1)) / e.panel_width
												)) != i)
											)
												if (e.viewer.is_partial_load)
													if (~e.viewer.pl_get_loaded_hangles(null).indexOf(r))
														e.viewer.rotateTo(r, n);
													else {
														if (null === e.frame_no)
															return void (e.frame_no = r);
														(o = e.viewer.pl_find_loaded_frame(r)),
															e.frame_no <= r
																? e.viewer.rotateTo(o.prev, n)
																: e.viewer.rotateTo(o.next, n);
													}
												else e.viewer.rotateTo(r, n);
											t.preventDefault(), t.stopPropagation();
										}),
										(this.on_mousedown_drag = function (t) {
											return (
												e.viewer.mode == e.viewer.MODE_AUTOROTATE &&
													e.viewer.changeMode(e.viewer.MODE_ROTATE),
												e.viewer.events.removeEvents(),
												e.viewer.dispatchEvent('interaction_start'),
												e.viewer.dispatchEvent('activity_start'),
												e.attach_handlers(
													e.viewer.container,
													null,
													e.on_mouseup,
													null,
													e.on_mousemove
												),
												e.pos
													? (e.diff = e.getRelativeX(t) - Fr()(e.pos))
													: (e.diff = e.getRelativeX(t)),
												(e.is_dragging = !0),
												t.preventDefault(),
												t.stopPropagation(),
												!1
											);
										}),
										(this.on_mouseup = function (t) {
											e.detach_handlers(
												e.viewer.container,
												null,
												e.on_mouseup,
												null,
												e.on_mousemove
											),
												e.viewer.events.attachEvents(),
												(e.is_dragging = !1),
												t.preventDefault(),
												t.stopPropagation();
										});
								},
							},
							{
								key: 'detach_mousemove',
								value: function (e, t) {
									window.PointerEvent
										? e.removeEventListener('pointermove', t, !1)
										: window.MSPointerEvent
										? e.removeEventListener('MSPointerMove', t, !1)
										: e.removeEventListener('mousemove', t, !1);
								},
							},
							{
								key: 'render',
								value: function () {
									var e,
										t,
										i = this.button.children[0];
									'function' == typeof i.getElementById &&
										((e = i.getElementById('path_move' + this.container_id)),
										(t = i.getElementById('path_rotate' + this.container_id)),
										this.has_dragger
											? ((t.style.opacity = '1'),
											  (e.style.opacity = '0'),
											  this.set_label(''))
											: this.is_rotate
											? ((t.style.opacity = '0'),
											  (e.style.opacity = '1'),
											  this.set_label(this.viewer.ovlang.trans('move')))
											: ((t.style.opacity = '1'),
											  (e.style.opacity = '0'),
											  this.set_label(
													this.viewer.ovlang.trans('manualrotation')
											  )));
								},
							},
							{
								key: 'destroy',
								value: function () {
									this.has_dragger
										? (this.detach_handlers(
												this.button,
												this.on_mousedown_drag,
												null,
												null,
												this.on_mousemove
										  ),
										  this.viewer.removeListener('rotate', this.rotate_handler))
										: this.viewer.utils.remove_button_click_handler(
												this.wrapper,
												this.onMouseDown
										  ),
										(this.rotate_handler = null),
										this.destroy_tooltip(),
										(this.viewer = null),
										this.container &&
											this.container.contains(this.wrapper) &&
											this.container.removeChild(this.wrapper),
										(this.button = null),
										(this.wrapper = null),
										(this.container = null);
								},
							},
							{
								key: 'switch_mode',
								value: function (e) {
									var t = 'rotate' === e;
									this.is_rotate != t &&
										((this.is_rotate = t),
										this.render(),
										this.viewer.dispatchEvent('mode_changed', e));
								},
							},
							{
								key: 'getRelativeX',
								value: function (e) {
									var t = this.wrapper.getBoundingClientRect(),
										i = e.clientX;
									return e.touches && (i = e.touches[0].clientX), i - t.left;
								},
							},
							{
								key: 'getRelativeY',
								value: function (e) {
									var t = this.wrapper.getBoundingClientRect();
									return e.clientY - t.top;
								},
							},
						]),
						t
					);
				})(no)),
				(ho = (function (e) {
					function t(e, i) {
						var n, r, o;
						if (
							((function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, t),
							((n = L(this, P(t).call(this))).onMouseDown = function (e) {
								return (
									i.is_loaded &&
										(n.handle_tooltip_on_action(),
										n.viewer.toggle_fullscreen_mode(),
										e.preventDefault(),
										e.stopPropagation()),
									!1
								);
							}),
							(n.is_mobile = i.use_mobile_buttons),
							(n.display_style = 'inline-block'),
							n.is_mobile && (n.display_style = 'block'),
							(n.container = e),
							(n.viewer = i),
							(n.fullscreen = e.appendChild(document.createElement('div'))),
							(n.button = document.createElement('div')),
							n.fullscreen.appendChild(n.button),
							n.is_mobile)
						) {
							n.fullscreen.style.backgroundColor = i.hexToRgb(
								i.params.gui_background
							);
							try {
								n.fullscreen.style.backgroundColor = i.hexToRgba(
									i.params.gui_background
								);
							} catch (e) {}
							(n.button.innerHTML =
								'<svg id="svg3117" xmlns="http://www.w3.org/2000/svg" height="27" width="27"><g id="layer1" stroke="#FFF" stroke-linecap="round" fill="none"><path id="path34" d="M10.304 16.694l-4.74 4.74" stroke-width="2.188"/><path id="path36" d="M1.784 19.494v5.725" stroke-width="2.566"/><path id="path38" d="M7.514 25.214H1.787" stroke-width="2.566"/><path id="path40" d="M10.304 10.304l-4.74-4.74" stroke-width="2.188"/><path id="path42" d="M7.514 1.784H1.787" stroke-width="2.566"/><path id="path44" d="M1.784 7.514V1.787" stroke-width="2.566"/><path id="path46" d="M16.694 10.304l4.74-4.74" stroke-width="2.188"/><path id="path48" d="M25.214 7.514V1.787" stroke-width="2.566"/><path id="path50" d="M19.494 1.784h5.726" stroke-width="2.566"/><path id="path52" d="M16.694 16.694l4.74 4.74" stroke-width="2.188"/><path id="path54" d="M19.494 25.214h5.726" stroke-width="2.566"/><path id="path56" d="M25.214 19.494v5.725" stroke-width="2.566"/></g></svg>'),
								(n.svg_element = n.button.children[0]),
								(n.button.style.position = 'absolute'),
								(n.button.style.width = '26px'),
								(n.button.style.top = '17px'),
								(n.button.style.left = '16px'),
								(n.paths_fill = []),
								(n.paths_stroke = [
									'path56',
									'path54',
									'path52',
									'path50',
									'path48',
									'path46',
									'path44',
									'path42',
									'path40',
									'path38',
									'path36',
									'path34',
								]),
								(n.fullscreen.className = 'zindexer ovviosfullscreen');
						} else
							(n.button.className = 'ovviosbutton'),
								(n.fullscreen.className =
									'ovviosbuttonwrapper zindexer ovviosfullscreendesktop style-' +
									n.viewer.params.style),
								(r = ''),
								(o = i.container.id),
								(r =
									'1' == n.viewer.params.style || '3' == n.viewer.params.style
										? '<svg id="svg3479" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 20 20" width="20" preserveAspectRatio="none"><g id="background"><path id="path_background" fill="#f2f2f2" d="M20 2.65q0-1.1-.8-1.9Q18.45 0 17.3 0H2.65q-1.1 0-1.9.75-.75.8-.75 1.9V17.3q0 1.15.75 1.9.8.8 1.9.8H17.3q1.15 0 1.9-.8.8-.75.8-1.9V2.65z"/></g><g id="foreground"><path id="path_foreground" fill="gray" d="M17.75 5.25q0-1-1-1h-13q-1 0-1 1v10q0 1 1 1h13q.4 0 .7-.3t.3-.7v-10M16.5 9.4h-.9V7.35L13.45 9.5l-1-1 2.15-2.15h-2.05v-.9h3.95V9.4M3.55 14.85v-4.1q0-.5.5-.5h5.7q.5 0 .5.5v4.1q0 .5-.5.5h-5.7q-.5 0-.5-.5z"/></g></svg>'
										: '<svg id="svg2" xmlns="http://www.w3.org/2000/svg" height="25.2" viewBox="0 0 25.200001 25.200001" width="25.2" preserveAspectRatio="none"><g id="background"><path id="path_background" d="M.018 12.633q0 5.25 3.7 8.95 3.65 3.65 8.9 3.65 5.2 0 8.9-3.65 3.7-3.7 3.7-8.95 0-5.2-3.7-8.9t-8.9-3.7q-5.25 0-8.9 3.7-3.7 3.7-3.7 8.9z"/></g><g id="foreground"><path id="path_foreground" d="M15.518 5.783h3.8v3.8m-8.85.85l-1.7-1.65m1.7 5.85l-1.7 1.65m-3-6.7v-3.8h3.8m0 13.5h-3.8v-3.75m8.85-.9l1.7 1.65m3-.75v3.75h-3.8m-.9-8.85l1.7-1.65" stroke="#FFF" stroke-linecap="round" stroke-width="1.7" fill="none"/></g></svg>'),
								(r = n.setup_svg_ids(r, o, [
									'path_background',
									'path_foreground',
								])),
								n.set_button_content(r),
								n.setup_tooltip('fullscreen'),
								n.colorize_tooltip(n.viewer.params),
								(n.svg_element = n.button.children[0]),
								i.utils.colorize_svg(
									n.svg_element,
									i.params.gui_background,
									!1,
									['path_background' + o],
									[]
								),
								'1' == n.viewer.params.style || '3' == n.viewer.params.style
									? ((n.paths_stroke = []),
									  (n.paths_fill = ['path_foreground' + o]))
									: ((n.paths_stroke = ['path_foreground' + o]),
									  (n.paths_fill = []));
						return (
							'yes' == i.params.fullscreen &&
								(n.fullscreen.style.display = 'none'),
							n.viewer.utils.add_button_click_handler(
								n.fullscreen,
								n.onMouseDown,
								!1
							),
							i.utils.colorize_svg(
								n.svg_element,
								i.params.gui_foreground,
								!1,
								n.paths_fill,
								n.paths_stroke
							),
							n
						);
					}
					return (
						N(t, e),
						(function (e, t, i) {
							t && U(e.prototype, t), i && U(e, i);
						})(t, [
							{
								key: 'remove',
								value: function () {
									this.container.removeChild(this.fullscreen);
								},
							},
							{
								key: 'destroy',
								value: function () {
									this.viewer.utils.remove_button_click_handler(
										this.fullscreen,
										this.onMouseDown
									),
										this.destroy_tooltip(),
										this.container &&
											this.container.contains(this.fullscreen) &&
											this.container.removeChild(this.fullscreen),
										(this.viewer = null),
										(this.container = null);
								},
							},
							{
								key: 'on',
								value: function () {
									this.viewer.utils.colorize_svg(
										this.svg_element,
										this.viewer.params.gui_foreground_active,
										!1,
										this.paths_fill,
										this.paths_stroke
									);
								},
							},
							{
								key: 'off',
								value: function () {
									this.viewer.utils.colorize_svg(
										this.svg_element,
										this.viewer.params.gui_foreground,
										!1,
										this.paths_fill,
										this.paths_stroke
									);
								},
							},
							{
								key: 'hide',
								value: function () {
									this.fullscreen.style.display = 'none';
								},
							},
							{
								key: 'show',
								value: function () {
									this.fullscreen.style.display = this.display_style;
								},
							},
						]),
						t
					);
				})(no)),
				(co = (function () {
					function e(t) {
						var i,
							n,
							r = this;
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e),
							(this.control_panel = t.vport.appendChild(
								document.createElement('div')
							)),
							(this.control_panel.className = 'ov-control-panel zindexer'),
							(this.control_panel_inner = this.control_panel.appendChild(
								document.createElement('div')
							)),
							(this.interval_dict = { intervalId: null }),
							(this.current_mode = t.get_mode()),
							(i = t.use_mobile_buttons ? t.vport : this.control_panel_inner),
							'0' == '6'
								? (this.infoButton = new ro(
										i,
										t.vport,
										t.params.dialog_content,
										t
								  ))
								: 'yes' === t.params.ovskin &&
								  ('4' == t.params.style ||
										('no' !== t.params.btn_info &&
											(this.infoButton = new ro(
												i,
												t.vport,
												t.params.dialog_content,
												t
											)))),
							(this.mode_changed_handler = function (e) {
								r.current_mode = e;
							}),
							t.addListener('mode_changed', this.mode_changed_handler),
							(this.zoom_complete_handler = function () {
								var e = t.get_mode();
								e !== r.current_mode &&
									(e === t.MODE_DRAG
										? t.dispatchEvent('mode_changed', 'drag')
										: t.dispatchEvent('mode_changed', 'rotate'));
							}),
							t.addListener('zoom_complete', this.zoom_complete_handler),
							(n = 1 == t.frames_no),
							'4' != t.params.style &&
								(t.use_mobile_buttons ||
									(n ||
										'no' === t.params.btn_autorotate ||
										(this.autorotate_button = new ao(
											t,
											this.control_panel_inner
										)),
									'no' !== t.params.btn_zoom_in &&
										(this.zoomin_button = new so(
											t,
											this.control_panel_inner,
											this.interval_dict
										)),
									'no' !== t.params.btn_zoom_out &&
										(this.zoomout_button = new oo(
											t,
											this.control_panel_inner,
											this.interval_dict
										)),
									n ||
										('no' !== t.params.btn_drag_rotate &&
											(this.drag_rotate_button = new lo(
												t,
												this.control_panel_inner,
												t.mode != t.MODE_DRAG
											)))),
								'no' !== t.params.btn_fullscreen &&
									(this.fullscreen_button = new ho(i, t)));
					}
					return (
						(function (e, t, i) {
							t && j(e.prototype, t), i && j(e, i);
						})(e, [
							{
								key: 'show_zoom_buttons',
								value: function () {
									this.zoomin_button && this.zoomin_button.show(),
										this.zoomout_button && this.zoomout_button.show();
								},
							},
							{
								key: 'hide_zoom_buttons',
								value: function () {
									this.zoomin_button && this.zoomin_button.hide(),
										this.zoomout_button && this.zoomout_button.hide();
								},
							},
							{
								key: 'handle_resize',
								value: function () {
									this.drag_rotate_button &&
										this.drag_rotate_button.refresh_dragger();
								},
							},
							{
								key: 'destroy',
								value: function () {
									this.zoomin_button && this.zoomin_button.destroy(),
										this.zoomout_button && this.zoomout_button.destroy(),
										this.fullscreen_button && this.fullscreen_button.destroy(),
										this.autorotate_button && this.autorotate_button.destroy(),
										this.drag_rotate_button &&
											this.drag_rotate_button.destroy(),
										delete this.zoomin_button,
										delete this.zoomout_button,
										delete this.fullscreen_button;
								},
							},
							{
								key: 'hide_fullscreen',
								value: function () {
									this.fullscreen_button && this.fullscreen_button.hide();
								},
							},
							{
								key: 'show_fullscreen',
								value: function () {
									this.fullscreen_button && this.fullscreen_button.show();
								},
							},
							{
								key: 'fullscreen_on',
								value: function () {
									this.fullscreen_button &&
										(this.fullscreen_button.show(),
										this.fullscreen_button.on());
								},
							},
							{
								key: 'fullscreen_off',
								value: function () {
									this.fullscreen_button &&
										(this.fullscreen_button.show(),
										this.fullscreen_button.off());
								},
							},
							{
								key: 'autorotate_on',
								value: function () {
									this.autorotate_button && this.autorotate_button.on();
								},
							},
							{
								key: 'autorotate_off',
								value: function () {
									this.autorotate_button && this.autorotate_button.off();
								},
							},
							{
								key: 'switch_drag_rotate',
								value: function (e) {
									this.drag_rotate_button &&
										this.drag_rotate_button.switch_mode(e);
								},
							},
							{
								key: 'stop',
								value: function () {
									this.zoomin_button && this.zoomin_button.stop(),
										this.zoomout_button && this.zoomout_button.stop();
								},
							},
						]),
						e
					);
				})()),
				(uo = (function (e) {
					function t() {
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, t),
							G(this, Y(t).apply(this, arguments))
						);
					}
					return (
						V(t, e),
						(function (e, t, i) {
							t && H(e.prototype, t), i && H(e, i);
						})(t, [
							{
								key: 'open',
								value: function () {
									var e,
										t = this;
									this.opened ||
										(this.dialog_content ||
											((this.dialog_content = document.createElement('p')),
											(this.dialog_content.className =
												'orbitvu-viewer-infobox'),
											(this.canvas = document.createElement('canvas')),
											(this.canvas.width = 160),
											(this.canvas.height = 236),
											this.dialog_content.appendChild(this.canvas),
											(this.canvas_context = this.canvas.getContext('2d')),
											this.render_info_popup(!1)),
										(e = function () {
											(t.opened = !1),
												t.viewer.dispatchEvent('initial_info_dialog_closed'),
												t.close_callback && t.close_callback();
										}),
										(this.about = new to(
											this.container,
											this.dialog_content,
											this.extra_css,
											e
										)),
										this.viewer.dispatchEvent('initial_info_dialog_opened'),
										(this.opened = !0),
										this.open_callback && this.open_callback());
								},
							},
						]),
						t
					);
				})(io)),
				(_o = function e(t, i) {
					(function (e, t) {
						if (!(e instanceof t))
							throw new TypeError('Cannot call a class as a function');
					})(this, e),
						(this.container = t),
						(this.brandingLogo = t.appendChild(document.createElement('a'))),
						(this.brandingLogo.className = 'branding-logo zindexer');
					var n = document.createElement('img');
					(n.src = i.params.logo_src),
						this.brandingLogo.appendChild(n),
						i.params.logo_url &&
							((this.onMouseDown = function (e) {
								(document.location.href = i.params.logo_url),
									e.preventDefault(),
									e.stopPropagation();
							}),
							(this.brandingLogo.target = '_blank'),
							(this.brandingLogo.href = i.params.logo_url),
							this.brandingLogo.addEventListener(
								'mousedown',
								i.utils.stopEventPropagation,
								!1
							),
							this.brandingLogo.addEventListener(
								'mouseup',
								i.utils.stopEventPropagation,
								!1
							),
							this.brandingLogo.addEventListener(
								'touchstart',
								i.utils.stopEventPropagation,
								!0
							),
							this.brandingLogo.addEventListener(
								'touchmove',
								i.utils.stopEventPropagation,
								!0
							),
							this.brandingLogo.addEventListener(
								'touchend',
								i.utils.stopEventPropagation,
								!0
							));
				}),
				(fo = (function () {
					function e(t, i) {
						var n = this;
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e),
							(this.orbitvu_viewer = i),
							(this.container = t),
							(this.brandingButton = t.appendChild(
								document.createElement('a')
							)),
							(this.brandingButton.className = 'branding-button zindexer'),
							(this.brandingButton.innerHTML = i.params.branding),
							(this.brandingButton.style.backgroundColor = i.hexToRgb(
								i.params.gui_background
							));
						try {
							this.brandingButton.style.backgroundColor = i.hexToRgba(
								i.params.gui_background
							);
						} catch (t) {}
						this.brandingButton.style.color = i.hexToRgb(
							i.params.gui_foreground
						);
						try {
							this.brandingButton.style.color = i.hexToRgba(
								i.params.gui_foreground
							);
						} catch (t) {}
						'yes' === i.params.social &&
							(this.brandingButton.style.top = '46px'),
							i.params.branding_url &&
								((this.brandingButton.target = '_blank'),
								(this.brandingButton.href = i.params.branding_url),
								(this.onMouseDown = function () {
									document.location.href = i.params.branding_url;
								}),
								(this.onMouseOver = function () {
									n.brandingButton.style.color = i.hexToRgb(
										i.params.gui_foreground_active
									);
									try {
										n.brandingButton.style.color = i.hexToRgba(
											i.params.gui_foreground_active
										);
									} catch (e) {}
								}),
								(this.onMouseOut = function () {
									n.brandingButton.style.color = i.hexToRgb(
										i.params.gui_foreground
									);
									try {
										n.brandingButton.style.color = i.hexToRgba(
											i.params.gui_foreground
										);
									} catch (e) {}
								}),
								this.brandingButton.addEventListener(
									'mouseover',
									this.onMouseOver,
									!1
								),
								this.brandingButton.addEventListener(
									'mouseout',
									this.onMouseOut,
									!1
								),
								this.brandingButton.addEventListener(
									'mousedown',
									i.utils.stopEventPropagation,
									!1
								),
								this.brandingButton.addEventListener(
									'mouseup',
									i.utils.stopEventPropagation,
									!1
								),
								this.brandingButton.addEventListener(
									'touchstart',
									i.utils.stopEventPropagation,
									!0
								),
								this.brandingButton.addEventListener(
									'touchmove',
									i.utils.stopEventPropagation,
									!0
								),
								this.brandingButton.addEventListener(
									'touchend',
									i.utils.stopEventPropagation,
									!0
								));
					}
					return (
						(function (e, t, i) {
							t && W(e.prototype, t), i && W(e, i);
						})(e, [
							{
								key: 'destroy',
								value: function () {
									this.brandingButton.removeEventListener(
										'mouseover',
										this.onMouseOver,
										!1
									),
										this.brandingButton.removeEventListener(
											'mouseout',
											this.onMouseOut,
											!1
										),
										this.brandingButton.removeEventListener(
											'mousedown',
											this.orbitvu_viewer.utils.stopEventPropagation,
											!1
										),
										this.brandingButton.removeEventListener(
											'mouseup',
											this.orbitvu_viewer.utils.stopEventPropagation,
											!1
										),
										this.brandingButton.removeEventListener(
											'touchstart',
											this.orbitvu_viewer.utils.stopEventPropagation,
											!0
										),
										this.brandingButton.removeEventListener(
											'touchmove',
											this.orbitvu_viewer.utils.stopEventPropagation,
											!0
										),
										this.brandingButton.removeEventListener(
											'touchend',
											this.orbitvu_viewer.utils.stopEventPropagation,
											!0
										);
								},
							},
						]),
						e
					);
				})()),
				(po = (function () {
					function e(t, i) {
						var n, r, o, s, a, l, h;
						for (s in ((function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e),
						(this.container = t),
						(this.viewer = i),
						(this.show_timeout = null),
						(this.timeout_time = 500),
						(this.is_enabled = 'yes' === i.params.html5_hint),
						(this.el_hint = t.appendChild(document.createElement('div'))),
						(this.el_hint.className = 'zindexer ovvioshint'),
						this.is_enabled || (this.el_hint.style.display = 'none'),
						(n = ['hint_flood_color', 'defs3051', 'filter4247']),
						(r =
							1 == this.viewer.vangles_no
								? (function (e) {
										var t =
											'<svg version="1.1" viewBox="0 0 440 440" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs><filter id="filter4247" color-interpolation-filters="sRGB"><feFlood flood-color="rgb(255,255,255)" flood-opacity=".7" result="flood" id="hint_flood_color"/><feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1"/><feGaussianBlur result="blur" stdDeviation="11"/><feOffset dx="-2.41474e-15" dy="-2.41474e-15" result="offset"/><feComposite in="SourceGraphic" in2="offset" result="composite2"/></filter></defs><g><g transform="translate(33.214 35.244)" filter="url(#filter4247)"><g style=""><g style=""><path d="m111.2 85.9s-0.9 0.4-2.6 1.2c-0.9 0.4-1.9 0.9-3.2 1.4-1.2 0.6-2.6 1.3-4.2 2-3.2 1.5-6.9 3.5-11.2 5.8-4.2 2.4-9 5.1-13.9 8.5-4.9 3.3-10 7.2-14.7 11.7s-9.1 9.9-11.5 15.7c-1.2 2.9-1.9 5.9-1.9 8.8s0.6 5.6 1.9 8.3c2.5 5.3 7.3 10.1 13.1 14s12.4 7.2 19.1 9.7c6.8 2.6 13.8 4.6 20.7 6.3 13.8 3.2 27.1 4.9 38.5 5.8 5.7 0.4 11 0.7 15.6 0.8 4.7 0.1 8.7 0.2 12.1 0.1 3.4 0 6-0.1 7.8-0.1s2.8-0.1 2.8-0.1l-1.6 37.8s-1-0.1-3-0.4c-2-0.2-4.8-0.6-8.5-1.1-3.6-0.5-8.1-1.2-13.1-2.1-5.1-0.9-10.7-2-16.9-3.4-12.3-2.8-26.6-6.8-41.5-12.7-7.4-3-15-6.4-22.5-10.7-7.4-4.2-14.8-9.2-21.5-15.4-3.3-3.1-6.5-6.6-9.2-10.5s-5-8.3-6.4-13.1-1.7-10-0.9-14.8 2.7-9.2 4.9-12.9c4.6-7.5 10.7-12.7 16.6-16.9s11.8-7.4 17.4-10.1c5.5-2.7 10.7-4.7 15.3-6.5 4.6-1.7 8.7-3.1 12.1-4.1 1.7-0.5 3.2-1 4.5-1.4s2.4-0.7 3.3-1c1.7-0.4 2.6-0.6 2.6-0.6z" style=""/><g style=""><polygon points="172.2 252.7 220.2 204.6 172.1 156.5" style=""/></g></g></g><g style=""><path d="m227.5 192.2s0.9 0.1 2.6 0.2c0.4 0 0.9 0.1 1.4 0.1 0.4 0 0.9 0 1.5 0.1 0.5 0 1.1 0.1 1.7 0.1h2c5.8 0.1 14.2-0.1 24.2-1.3 10.1-1.2 21.9-3.4 34.1-7.1 6.1-1.9 12.3-4.1 18.4-6.8 3-1.3 6.1-2.8 9-4.4s5.8-3.3 8.5-5.2c5.4-3.7 10.4-8.1 14-13s5.6-10.5 5.3-16.1c-0.1-2.8-0.8-5.6-1.9-8.2-1-2.7-2.6-5.2-4.2-7.5-3.4-4.7-7.4-8.7-11.5-12-4-3.4-8.1-6.1-11.7-8.5-1.8-1.2-3.5-2.3-5.2-3.2-1.6-1-3.1-1.8-4.5-2.6s-2.6-1.4-3.7-2-2-1-2.8-1.4c-1.5-0.8-2.3-1.2-2.3-1.2l2.4 0.9c0.8 0.3 1.8 0.6 2.9 1.1 1.1 0.4 2.4 1 3.9 1.5 1.5 0.6 3.1 1.3 4.8 2 1.8 0.7 3.6 1.6 5.6 2.6 4 1.9 8.4 4.2 13.1 7.2 4.6 3 9.5 6.6 14 11.4 2.2 2.4 4.4 5.1 6.2 8.3 1.8 3.1 3.2 6.7 3.9 10.6s0.7 8-0.2 12c-0.8 4-2.3 7.8-4.2 11.4-3.9 7.1-9.3 13-15 18.2-2.9 2.6-5.9 5-9 7.2s-6.3 4.3-9.5 6.3c-6.4 3.9-12.9 7.2-19.4 10.1-12.9 5.8-25.6 9.9-36.6 12.7-11.1 2.8-20.6 4.2-27.4 4.9l-2.4 0.3c-0.8 0.1-1.5 0.1-2.2 0.2s-1.3 0.1-1.9 0.2c-0.5 0-1 0.1-1.4 0.1-1.7 0.1-2.6 0.2-2.6 0.2l0.1-29.4z" style=""/></g><g style=""><path d="m114.9 130.3c-1.2-1.4-2.3-3.9-2.3-6.4 0-4.7 3-8.7 6.5-8.7 1.9 0 3.3 1.1 4.3 2.2 3.5 4 7.2 6.1 12.1 6.1 5.1 0 8.7-3.9 8.7-10v-0.2c0-6.7-4.5-10.4-12.1-10.4h-2.1c-3.2 0-5.8-3.5-5.8-7.7 0-2.5 0.8-4.6 2.9-7.4l12-16h-18.9c-3.2 0-5.8-3.5-5.8-7.7s2.6-7.7 5.8-7.7h30c4 0 6.9 3 6.9 8 0 4.5-1.6 6.9-4.1 10.1l-12.1 15.3c8.4 1.9 16.6 7.7 16.6 23v0.2c0 15.5-8.5 26.8-22.2 26.8-8.8-0.1-15.4-3.8-20.4-9.5z" style=""/><path d="m174.7 130.9c-4.5-6-7.3-14.8-7.3-31v-0.2c0-25.3 8.6-44.7 27-44.7 6.2 0 11.2 2 14.9 4.9 2.1 1.6 3.5 4.1 3.5 7.7 0 4.7-2.9 8.3-6.4 8.3-1.1 0-2.4-0.6-3.3-1.3-2.8-2.1-5.4-3.3-9.1-3.3-7.7 0-11.5 8.2-12.4 19 3.1-2.7 6.7-5.3 12.8-5.3 12.2 0 21.7 9 21.7 26.1v0.2c0 16.7-10.1 28.3-23.5 28.3-8.2 0.1-13.6-3-17.9-8.7zm27.8-18.8v-0.2c0-6.9-4.1-11.9-10.7-11.9s-10.6 4.9-10.6 11.8v0.2c0 6.9 4.1 12.2 10.7 12.2 6.7 0 10.6-5 10.6-12.1z" style=""/><path d="m225.7 97.5v-0.2c0-23.8 11.1-42.4 27.5-42.4 16.3 0 27.3 18.4 27.3 42.2v0.2c0 23.8-11 42.4-27.5 42.4s-27.3-18.4-27.3-42.2zm40.8 0v-0.2c0-14.9-5.5-26.1-13.6-26.1s-13.4 10.9-13.4 25.9v0.2c0 15 5.4 26.1 13.6 26.1s13.4-11 13.4-25.9z" style=""/></g><g style=""><path d="m280.7 66.2c0-6.8 5.2-12.3 12.2-12.3 6.9 0 12.1 5.4 12.1 12.1v0.1c0 6.7-5.2 12.2-12.2 12.2s-12.1-5.4-12.1-12.1zm18 0c0-3.5-2.4-6.6-5.9-6.6-3.6 0-5.8 2.9-5.8 6.4v0.1c0 3.5 2.4 6.5 5.9 6.5 3.6-0.1 5.8-3 5.8-6.4z" style=""/></g></g></g></svg>';
										return e ? 'data:image/svg+xml;' + t : t;
								  })(!1)
								: (function (e) {
										var t =
											'<svg version="1.1" viewBox="0 0 440 440" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><metadata><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><defs><filter id="filter4247" color-interpolation-filters="sRGB"><feFlood flood-color="rgb(255,255,255)" flood-opacity=".7" result="flood" id="hint_flood_color"/><feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1"/><feGaussianBlur result="blur" stdDeviation="11"/><feOffset dx="-2.41474e-15" dy="-2.41474e-15" result="offset"/><feComposite in="SourceGraphic" in2="offset" result="composite2"/></filter></defs><g><g transform="translate(14.696 222.28)" filter="url(#filter4247)"><g transform="matrix(.7596 -.65039 .65039 .7596 -43.088 15.638)"><path d="m111.2 85.9s-0.9 0.4-2.6 1.2c-0.9 0.4-1.9 0.9-3.2 1.4-1.2 0.6-2.6 1.3-4.2 2-3.2 1.5-6.9 3.5-11.2 5.8-4.2 2.4-9 5.1-13.9 8.5-4.9 3.3-10 7.2-14.7 11.7s-9.1 9.9-11.5 15.7c-1.2 2.9-1.9 5.9-1.9 8.8s0.6 5.6 1.9 8.3c2.5 5.3 7.3 10.1 13.1 14s12.4 7.2 19.1 9.7c6.8 2.6 13.8 4.6 20.7 6.3 13.8 3.2 27.1 4.9 38.5 5.8 5.7 0.4 11 0.7 15.6 0.8 4.7 0.1 8.7 0.2 12.1 0.1 3.4 0 6-0.1 7.8-0.1s2.8-0.1 2.8-0.1l-1.6 37.8s-1-0.1-3-0.4c-2-0.2-4.8-0.6-8.5-1.1-3.6-0.5-8.1-1.2-13.1-2.1-5.1-0.9-10.7-2-16.9-3.4-12.3-2.8-26.6-6.8-41.5-12.7-7.4-3-15-6.4-22.5-10.7-7.4-4.2-14.8-9.2-21.5-15.4-3.3-3.1-6.5-6.6-9.2-10.5s-5-8.3-6.4-13.1-1.7-10-0.9-14.8 2.7-9.2 4.9-12.9c4.6-7.5 10.7-12.7 16.6-16.9s11.8-7.4 17.4-10.1c5.5-2.7 10.7-4.7 15.3-6.5 4.6-1.7 8.7-3.1 12.1-4.1 1.7-0.5 3.2-1 4.5-1.4s2.4-0.7 3.3-1c1.7-0.4 2.6-0.6 2.6-0.6z"/><polygon points="172.2 252.7 220.2 204.6 172.1 156.5"/></g><g transform="matrix(.7596 -.65039 .65039 .7596 -37.206 11.716)"><path d="m227.5 192.2s0.9 0.1 2.6 0.2c0.4 0 0.9 0.1 1.4 0.1 0.4 0 0.9 0 1.5 0.1 0.5 0 1.1 0.1 1.7 0.1h2c5.8 0.1 14.2-0.1 24.2-1.3 10.1-1.2 21.9-3.4 34.1-7.1 6.1-1.9 12.3-4.1 18.4-6.8 3-1.3 6.1-2.8 9-4.4s5.8-3.3 8.5-5.2c5.4-3.7 10.4-8.1 14-13s5.6-10.5 5.3-16.1c-0.1-2.8-0.8-5.6-1.9-8.2-1-2.7-2.6-5.2-4.2-7.5-3.4-4.7-7.4-8.7-11.5-12-4-3.4-8.1-6.1-11.7-8.5-1.8-1.2-3.5-2.3-5.2-3.2-1.6-1-3.1-1.8-4.5-2.6s-2.6-1.4-3.7-2-2-1-2.8-1.4c-1.5-0.8-2.3-1.2-2.3-1.2l2.4 0.9c0.8 0.3 1.8 0.6 2.9 1.1 1.1 0.4 2.4 1 3.9 1.5 1.5 0.6 3.1 1.3 4.8 2 1.8 0.7 3.6 1.6 5.6 2.6 4 1.9 8.4 4.2 13.1 7.2 4.6 3 9.5 6.6 14 11.4 2.2 2.4 4.4 5.1 6.2 8.3 1.8 3.1 3.2 6.7 3.9 10.6s0.7 8-0.2 12c-0.8 4-2.3 7.8-4.2 11.4-3.9 7.1-9.3 13-15 18.2-2.9 2.6-5.9 5-9 7.2s-6.3 4.3-9.5 6.3c-6.4 3.9-12.9 7.2-19.4 10.1-12.9 5.8-25.6 9.9-36.6 12.7-11.1 2.8-20.6 4.2-27.4 4.9l-2.4 0.3c-0.8 0.1-1.5 0.1-2.2 0.2s-1.3 0.1-1.9 0.2c-0.5 0-1 0.1-1.4 0.1-1.7 0.1-2.6 0.2-2.6 0.2l0.1-29.4z"/></g><g transform="translate(-35.374 -198.27)"><path d="m166.41 184.63c18.72 0 30.24-11.64 30.24-27.48v-0.24c0-15.6-11.16-21.6-22.56-23.52l16.44-15.72c3.36-3.24 5.52-5.76 5.52-10.32 0-5.04-3.96-8.16-9.36-8.16h-40.92c-4.32 0-7.92 3.6-7.92 7.92 0 4.32 3.6 7.92 7.92 7.92h25.8l-16.32 16.44c-2.88 2.88-3.96 5.04-3.96 7.56 0 4.32 3.6 7.92 7.92 7.92h2.88c10.32 0 16.44 3.84 16.44 10.68v0.24c0 6.24-4.92 10.2-11.88 10.2-6.6 0-11.64-2.16-16.44-6.24-1.44-1.2-3.24-2.28-5.88-2.28-4.8 0-8.88 4.08-8.88 8.88 0 2.64 1.44 5.16 3.12 6.6 6.84 5.88 15.84 9.6 27.84 9.6"/><path d="m213.7 173.95c0 5.16 4.08 9.24 9.24 9.24h23.52c26.4 0 44.64-18.36 44.64-42v-0.24c0-23.64-18.24-41.76-44.64-41.76h-23.52c-5.16 0-9.24 4.08-9.24 9.24v65.52m18.48-7.44v-50.64h14.28c15.12 0 25.32 10.44 25.32 25.32v0.24c0 14.88-10.2 25.08-25.32 25.08h-14.28"/></g></g></g></svg>';
										return e ? 'data:image/svg+xml;' + t : t;
								  })(!1)),
						(o = i.container.id),
						n))
							n.hasOwnProperty(s) &&
								((a = n[s]), (l = RegExp(a, 'g')), (r = r.replace(l, a + o)));
						(this.el_hint.innerHTML = r),
							(this.el_hint.style.position = 'absolute'),
							(this.el_hint.style.bottom = '0'),
							(this.el_hint.style.top = '0'),
							(this.el_hint.style.left = '0'),
							(this.el_hint.style.right = '0'),
							(this.el_hint.style.margin = 'auto'),
							(this.el_hint.style.opacity = 0),
							(this.el_hint.style.fill = '#666666'),
							(this.el_hint.style.borderRadius = '50%'),
							(this.el_hint.style.pointerEvents = 'none'),
							(this.el_hint.children[0].style.height = '100%'),
							(this.el_hint.children[0].style.width = '100%'),
							(this.el_hint.children[0].style.pointerEvents = 'none'),
							this.resize(),
							(h = document.getElementById('hint_flood_color' + o)) &&
								(h.style.floodColor = i.hexToRgb(i.params.gui_background)),
							(this.el_hint.style.fill = i.hexToRgb(i.params.gui_foreground));
					}
					return (
						(function (e, t, i) {
							t && X(e.prototype, t), i && X(e, i);
						})(e, [
							{
								key: 'resize',
								value: function () {
									var e = 1 * this.viewer.height,
										t = 1 * this.viewer.width,
										i = e;
									t < i && (i = t),
										(i = (25 * i) / 100),
										(this.el_hint.style.width = i + 'px'),
										(this.el_hint.style.height = i + 'px');
								},
							},
							{
								key: 'hide',
								value: function () {
									var e = this;
									this.is_enabled &&
										(this.viewer.dimensions_changed &&
											(this.timeout_time = 400),
										'' + this.el_hint.style.opacity != '0' &&
											(this.el_hint.style.opacity = '0'),
										this.show_timeout && window.clearTimeout(this.show_timeout),
										(this.show_timeout = window.setTimeout(function () {
											e.show();
										}, this.timeout_time)));
								},
							},
							{
								key: 'show',
								value: function () {
									this.is_enabled &&
										(this.resize(),
										this.viewer.min_scale >= this.viewer.scale &&
											((this.el_hint.style.opacity = '1'),
											(this.show_timeout = null),
											(this.timeout_time = 5e3)));
								},
							},
							{
								key: 'destroy',
								value: function () {
									this.show_timeout && window.clearTimeout(this.show_timeout),
										(this.show_timeout = null),
										this.container.removeChild(this.el_hint),
										(this.viewer = null),
										(this.container = null),
										(this.el_hint = null);
								},
							},
						]),
						e
					);
				})()),
				(mo = i(68)),
				(vo = i.n(mo)),
				(go = [
					['mousedown', !1],
					['mouseup', !1],
					['touchstart', !0],
					['touchmove', !0],
					['touchend', !0],
					['MSPointerDown', !1],
				]),
				(Ao = function e(t, i) {
					var n = this;
					Z(this, e),
						(this.element = t.appendChild(document.createElement('div'))),
						(this.element.className =
							'ov-social-share-button ov-social-share-main-button zindexer'),
						(this.button = document.createElement('div')),
						(this.button.innerHTML =
							'<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg id="svg17539" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="15.078" width="21.005" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata id="metadata17544"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><g id="layer1" transform="translate(0.50000003,-1037.7842)"><g id="g7724" transform="matrix(0.74074074,0,0,-0.74074074,14.818235,1048.6488)"><path id="path7726" fill-rule="nonzero" fill="#231f20" d="m0,0c0.068624-1.889-1.9374-3.4429-3.7498-2.9056-1.8357,0.40593-2.8426,2.7147-1.8882,4.3356,0.83594,1.6792,3.3121,2.1011,4.6551,0.79066,0.62112-0.5587,0.98821-1.385,0.9829-2.2207z"/></g><g id="g7728" transform="matrix(0.74074074,0,0,-0.74074074,9.6330493,1043.4636)"><path id="path7730" fill-rule="nonzero" fill="#231f20" d="m0,0c0.068624-1.889-1.9374-3.4429-3.7498-2.9056-1.8357,0.40593-2.8426,2.7147-1.8882,4.3356,0.83594,1.6792,3.3121,2.1011,4.6551,0.79066,0.62112-0.5587,0.98821-1.385,0.9829-2.2207z"/></g><g id="g7732" transform="matrix(0.74074074,0,0,-0.74074074,4.4478641,1050.1303)"><path id="path7734" fill-rule="nonzero" fill="#231f20" d="m0,0c0.068624-1.889-1.9374-3.4429-3.7498-2.9056-1.8357,0.40593-2.8426,2.7147-1.8882,4.3356,0.83594,1.6792,3.3121,2.1011,4.6551,0.79066,0.62112-0.5587,0.98821-1.385,0.9829-2.2207z"/></g><path id="path7738" d="m20.003,1040.5c0.05083,1.3993-1.4351,2.5503-2.7776,2.1523-1.3598-0.3007-2.1056-2.0109-1.3986-3.2116,0.61922-1.2439,2.4534-1.5564,3.4482-0.5857,0.46002,0.4139,0.73194,1.0259,0.72801,1.645z" fill-rule="nonzero" fill="#231f20"/><g id="g7740" transform="matrix(0.74074074,0,0,-0.74074074,2.2256419,1050.2236)"><path id="path7742" stroke-linejoin="miter" d="m0,0c2.3333,3.042,4.6667,6.084,7,9.126,2.3333-2.3333,4.6667-4.6667,7-7,2.3333,3.6667,4.6667,7.3333,7,11" stroke="#231f20" stroke-linecap="butt" stroke-miterlimit="4" stroke-dasharray="none" stroke-width="2" fill="none"/></g></g></svg>'),
						(this.button.style.styleFloat = this.button.style.cssFloat =
							'right'),
						(this.viewer = i),
						(this.paths_fill = [
							'path7738',
							'path7730',
							'path7726',
							'path7734',
						]),
						(this.paths_stroke = ['path7742']),
						this.viewer.utils.colorize_svg(
							this.button.children[0],
							this.viewer.params.gui_foreground,
							!1,
							this.paths_fill,
							this.paths_stroke
						),
						this.element.addEventListener('mouseout', function () {
							n.viewer.utils.colorize_svg(
								n.button.children[0],
								n.viewer.params.gui_foreground,
								!1,
								n.paths_fill,
								n.paths_stroke
							);
						}),
						this.element.addEventListener('mouseover', function () {
							n.viewer.utils.colorize_svg(
								n.button.children[0],
								n.viewer.params.gui_foreground_active,
								!1,
								n.paths_fill,
								n.paths_stroke
							);
						}),
						this.element.appendChild(this.button);
				}),
				(wo = function e(t, i) {
					var n,
						r = this;
					Z(this, e),
						(this.viewer = i),
						(this.element = t.appendChild(document.createElement('a'))),
						(this.element.className =
							'ov-social-share-button ov-social-share-facebook zindexer'),
						(n =
							(n = i.params.social_url) ||
							encodeURIComponent(window.location.href)),
						(this.url = 'http://www.facebook.com/sharer/sharer.php?u=' + n),
						(this.element.href = this.url),
						(this.element.target = '_blank'),
						(this.button = document.createElement('div')),
						(this.button.innerHTML =
							'<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg id="svg10289" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="22.427" width="11.391" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata id="metadata10294"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><g id="layer1" transform="translate(-374.07938,-521.64965)"><path id="path10306" fill="#000" d="m377.23,538.53,0-5.0508-1.3258,0-1.3258,0,0-1.7678,0-1.7678,1.3097,0,1.3097,0,0.0617-2.115c0.0744-2.5529,0.26724-3.2066,1.2404-4.2057,1.1296-1.1597,2.6958-1.5976,5.1384-1.4368l1.2943,0.0852-0.00076,0.5847c-0.00041,0.32158-0.0373,1.0535-0.0819,1.6264l-0.0811,1.0417h-1.3112c-1.5036,0-2.1197,0.18545-2.314,0.69659-0.069,0.1815-0.12546,1.0934-0.12546,2.0264v1.6964h1.9759,1.9759l-0.0811,1.0417c-0.0446,0.57294-0.0814,1.3684-0.0818,1.7678l-0.00076,0.72604h-1.894-1.894v5.0508,5.0508h-1.894-1.894v-5.0508z"/></g></svg>'),
						K(this.element, i),
						(this.button.style.position = 'absolute'),
						(this.button.style.top = '2.3px'),
						(this.button.style.left = '7.8px'),
						(this.paths_fill = ['path10306']),
						(this.paths_stroke = []),
						this.viewer.utils.colorize_svg(
							this.button.children[0],
							this.viewer.params.gui_foreground,
							!1,
							this.paths_fill,
							this.paths_stroke
						),
						this.element.addEventListener('mouseout', function () {
							r.viewer.utils.colorize_svg(
								r.button.children[0],
								r.viewer.params.gui_foreground,
								!1,
								r.paths_fill,
								r.paths_stroke
							);
						}),
						this.element.addEventListener('mouseover', function () {
							r.viewer.utils.colorize_svg(
								r.button.children[0],
								r.viewer.params.gui_foreground_active,
								!1,
								r.paths_fill,
								r.paths_stroke
							);
						}),
						this.element.appendChild(this.button);
				}),
				(yo = function e(t, i) {
					var n,
						r = this;
					Z(this, e),
						(this.viewer = i),
						(this.element = t.appendChild(document.createElement('a'))),
						(this.element.className =
							'ov-social-share-button ov-social-share-twitter zindexer'),
						(n =
							(n = i.params.social_url) ||
							encodeURIComponent(window.location.href)),
						(this.url = 'http://twitter.com/home?status=See this: ' + n),
						(this.element.href = this.url),
						(this.element.target = '_blank'),
						(this.button = document.createElement('div')),
						(this.button.innerHTML =
							'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\x3c!-- Created with Inkscape (http://www.inkscape.org/) --\x3e<svg id="svg10203" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="19.617" width="14.872" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata id="metadata10208"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><g id="layer1" transform="translate(-239.03503,-590.48953)"><path id="path10250" fill="#000" d="m245.55,609.58c-0.0982-0.0205-0.38988-0.0801-0.64814-0.13233-1.922-0.38881-3.929-2.0382-4.7994-3.9442-0.53559-1.1728-0.52622-1.054-0.55789-7.0744-0.0325-6.1781-0.0512-5.9653,0.58784-6.6727,0.41345-0.45763,0.91041-0.7031,1.5388-0.76008,0.89489-0.0811,1.8421,0.50869,2.2566,1.4053,0.16573,0.35842,0.18966,0.61081,0.22171,2.3382l0.0359,1.9364,3.5394,0.0278c3.0122,0.0237,3.5859,0.0491,3.8519,0.17055,1.0973,0.50112,1.6357,1.789,1.1722,2.8037-0.21349,0.46739-0.8854,1.0776-1.3191,1.1981-0.21719,0.0603-1.6238,0.0957-3.8124,0.0961l-3.4682,0.0005,0.0316,1.2723c0.0297,1.1954,0.0457,1.2939,0.26555,1.6295,0.42919,0.65508,0.89743,0.97137,1.6417,1.109,0.29338,0.0542,1.6371,0.0973,3.072,0.0983,2.8639,0.002,2.9566,0.0194,3.5938,0.66488,0.50101,0.50761,0.65379,0.88616,0.64975,1.61-0.004,0.71324-0.19163,1.1597-0.68065,1.6195-0.66,0.62053-0.60088,0.61117-3.9587,0.62681-1.6696,0.008-3.1161-0.003-3.2143-0.0232z"/></g></svg>'),
						(this.button.style.position = 'absolute'),
						(this.button.style.top = '3.7px'),
						(this.button.style.left = '6.0px'),
						K(this.element, i),
						(this.paths_fill = ['path10250']),
						(this.paths_stroke = []),
						this.viewer.utils.colorize_svg(
							this.button.children[0],
							this.viewer.params.gui_foreground,
							!1,
							this.paths_fill,
							this.paths_stroke
						),
						this.element.addEventListener('mouseout', function () {
							r.viewer.utils.colorize_svg(
								r.button.children[0],
								r.viewer.params.gui_foreground,
								!1,
								r.paths_fill,
								r.paths_stroke
							);
						}),
						this.element.addEventListener('mouseover', function () {
							r.viewer.utils.colorize_svg(
								r.button.children[0],
								r.viewer.params.gui_foreground_active,
								!1,
								r.paths_fill,
								r.paths_stroke
							);
						}),
						this.element.appendChild(this.button);
				}),
				(bo = function e(t, i) {
					var n,
						r = this;
					Z(this, e),
						(this.viewer = i),
						(this.element = t.appendChild(document.createElement('a'))),
						(this.element.className =
							'ov-social-share-button ov-social-share-email zindexer'),
						(n =
							(n = i.params.social_url) ||
							encodeURIComponent(window.location.href)),
						(this.url = 'mailto:friend@email?subject=See this&body=' + n),
						(this.element.href = this.url),
						(this.element.target = '_blank'),
						(this.button = document.createElement('div')),
						(this.button.innerHTML =
							'<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg id="svg17677" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="13.334" width="20" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata id="metadata17682"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><g id="layer1" transform="translate(-359.99969,-529.029)"><g id="g5782" transform="matrix(0.83331611,0,0,-0.83331611,369.9999,536.81967)"><path id="path5784" fill-rule="nonzero" fill="#000" d="M0,0,11.178,9.313c-0.058,0.011-0.113,0.036-0.178,0.036h-22c-0.06,0-0.115-0.025-0.176-0.036l11.176-9.313z"/></g><g id="g5786" transform="matrix(0.83331611,0,0,-0.83331611,379.99969,529.86265)"><path id="path5788" fill-rule="nonzero" fill="#000" d="m0,0c0,0.105-0.029,0.202-0.059,0.298l-7.925-6.604,7.937-7.937c0.021,0.08,0.047,0.157,0.047,0.243v14z"/></g><g id="g5790" transform="matrix(0.83331611,0,0,-0.83331611,360.05219,529.61366)"><path id="path5792" fill-rule="nonzero" fill="#000" d="m0,0c-0.03-0.096-0.063-0.192-0.063-0.299v-14c0-0.087,0.03-0.164,0.051-0.244l7.938,7.938-7.926,6.605z"/></g><g id="g5794" transform="matrix(0.83331611,0,0,-0.83331611,372.70409,535.65353)"><path id="path5796" fill-rule="nonzero" fill="#000" d="m0,0-2.925-2.435c-0.092-0.078-0.205-0.116-0.32-0.116-0.113,0-0.227,0.038-0.318,0.116l-2.922,2.434-8.002-8c0.08-0.021,0.158-0.05,0.242-0.05h22c0.088,0,0.166,0.029,0.246,0.05l-8.001,8.001z"/></g></g></svg>'),
						(this.button.style.position = 'absolute'),
						(this.button.style.left = '3px'),
						(this.button.style.top = '5px'),
						(this.paths_stroke = []),
						(this.paths_fill = [
							'path5784',
							'path5788',
							'path5792',
							'path5796',
						]),
						K(this.element, i),
						this.viewer.utils.colorize_svg(
							this.button.children[0],
							this.viewer.params.gui_foreground,
							!1,
							this.paths_fill,
							this.paths_stroke
						),
						this.element.addEventListener('mouseout', function () {
							r.viewer.utils.colorize_svg(
								r.button.children[0],
								r.viewer.params.gui_foreground,
								!1,
								r.paths_fill,
								r.paths_stroke
							);
						}),
						this.element.addEventListener('mouseover', function () {
							r.viewer.utils.colorize_svg(
								r.button.children[0],
								r.viewer.params.gui_foreground_active,
								!1,
								r.paths_fill,
								r.paths_stroke
							);
						}),
						this.element.appendChild(this.button);
				}),
				(Eo = (function () {
					function e(t, i) {
						var n = this;
						Z(this, e),
							(this.open = !1),
							(this.mouseClick = function (e) {
								if ((e.preventDefault(), e.stopPropagation(), !i.is_loaded))
									return !1;
								n.open
									? ((n.open = !1),
									  Ir.to(n.socialShareButtonWrapper, 0.2, {
											opacity: 0,
											onComplete: function () {
												(n.socialShareButtonWrapper.style.display = 'none'),
													(n.socialShare.className =
														'ov-social-share zindexer');
											},
									  }))
									: ((n.socialShare.className = 'ov-social-share zindexer on'),
									  (n.socialShareButtonWrapper.style.display = 'block'),
									  (n.open = !0),
									  Ir.to(n.socialShareButtonWrapper, 0.2, { opacity: 1 }));
							}),
							(this.orbitvu_viewer = i),
							(this.container = t),
							(this.socialShare = t.appendChild(document.createElement('div'))),
							(this.socialShare.className = 'ov-social-share zindexer'),
							(this.socialShareButton = new Ao(this.socialShare, i)),
							(this.socialShareButtonWrapper = this.socialShare.appendChild(
								document.createElement('div')
							)),
							(this.socialShareButtonWrapper.style.opacity = '0'),
							(this.socialShareButtonWrapper.style.display = 'none'),
							(this.socialShareButtonWrapper.style.styleFloat =
								this.socialShareButtonWrapper.style.cssFloat =
									'right'),
							(this.socialShareEmail = new bo(
								this.socialShareButtonWrapper,
								i
							)),
							(this.socialShareTwitter = new yo(
								this.socialShareButtonWrapper,
								i
							)),
							(this.socialShareFacebook = new wo(
								this.socialShareButtonWrapper,
								i
							)),
							i.utils.add_button_click_handler(
								this.socialShareButton.element,
								this.mouseClick,
								!1
							),
							this.colorize(this.socialShareFacebook.element),
							this.colorize(this.socialShareTwitter.element),
							this.colorize(this.socialShareEmail.element),
							this.colorize(this.socialShareButton.element);
					}
					return (
						(function (e, t, i) {
							t && J(e.prototype, t), i && J(e, i);
						})(e, [
							{
								key: 'colorize',
								value: function (e) {
									e.style.backgroundColor = this.orbitvu_viewer.hexToRgb(
										this.orbitvu_viewer.params.gui_background
									);
									try {
										e.style.backgroundColor = this.orbitvu_viewer.hexToRgba(
											this.orbitvu_viewer.params.gui_background
										);
									} catch (e) {}
								},
							},
						]),
						e
					);
				})()),
				(xo = (function () {
					function e(t, i, n, r, o) {
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e),
							(this.container = t),
							(this.loader_container = t.appendChild(
								document.createElement('div')
							)),
							(this.loader_container.style.width = '89px'),
							(this.loader_container.style.height = '31px'),
							(this.loader_container.className = 'ovvloader zindexer'),
							(this.loader_container.style.left = '0'),
							(this.loader_container.style.right = '0'),
							(this.loader_container.style.bottom = '0'),
							(this.loader_container.style.top = '0'),
							(this.loader_container.style.margin = 'auto'),
							(this.loader_container.innerHTML =
								'<div id="ovvloader_logo-' +
								i +
								'" class="ovvloader_logo zindexer"></div><div class="ovloader_background zindexer"></div><div class="ovvloader_text zindexer" id="olt' +
								i +
								'"><p id="ovvloader_text_percent_' +
								i +
								'">0%</p></div>');
						var s = document.getElementById('ovvloader_logo-' + i);
						(this.button = s.appendChild(document.createElement('div'))),
							(this.button.innerHTML =
								'<svg id="svg3106" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="29.001" width="28.99" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata id="metadata3111"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><g id="layer1" transform="translate(-360.50687,-517.86131)"><path id="path230" fill-rule="nonzero" fill="#FFF" d="m362.81,532.34,0-0.004,0-0.005,0-0.005,0-0.005c0-0.305,0.055-0.59,0.15375-0.8475,0.1-0.25745,0.24625-0.4862,0.4275-0.67745s0.39875-0.34375,0.64375-0.45c0.245-0.105,0.51625-0.1625,0.80625-0.1625,0.1425,0,0.28125,0.015,0.41625,0.0425s0.26625,0.0675,0.39,0.12125c0.125,0.0537,0.24375,0.11875,0.355,0.1975,0.11,0.0775,0.21375,0.16875,0.30875,0.27,0.0937,0.1,0.17625,0.20875,0.2475,0.325,0.0713,0.11625,0.1325,0.24,0.18125,0.36875,0.0487,0.13,0.0875,0.265,0.1125,0.40375s0.0375,0.28125,0.0375,0.4275c0,0.30875-0.0537,0.59625-0.155,0.85625-0.0987,0.25875-0.24375,0.48875-0.425,0.68-0.1825,0.19125-0.4,0.34375-0.645,0.44875-0.24375,0.105-0.515,0.1625-0.805,0.1625-0.29125,0-0.56625-0.0588-0.8125-0.16375-0.2475-0.10625-0.4675-0.26-0.65-0.45125-0.18375-0.19125-0.33125-0.42125-0.43125-0.68-0.10125-0.25875-0.15625-0.54625-0.15625-0.8525m-1.74,0,0,0.005,0,0.005,0,0.005,0,0.005c0,0.50625,0.0937,0.9825,0.26875,1.4138,0.17375,0.4325,0.42625,0.81875,0.74125,1.1462,0.31625,0.32625,0.695,0.59375,1.1225,0.78625,0.42625,0.1925,0.9,0.31,1.4062,0.34,0.395,1.1325,0.955,2.1725,1.6488,3.0938,0.69375,0.9225,1.52,1.7288,2.4488,2.3925,0.9275,0.6625,1.955,1.185,3.0512,1.5412,1.0962,0.35625,2.2612,0.54625,3.4612,0.54625,1.0125,0,2.0075-0.13625,2.96-0.3975,0.95375-0.26,1.8662-0.645,2.7138-1.14,0.8475-0.495,1.6312-1.1,2.3275-1.8025,0.6975-0.7025,1.3062-1.5012,1.805-2.3838,0,0,0.005-0.0437,0.0138-0.1075,0.007-0.065,0.0175-0.15,0.0275-0.23625,0.0112-0.0862,0.0225-0.17125,0.03-0.23625,0.007-0.0638,0.0125-0.10625,0.0125-0.10625l-0.10625-0.13625-0.10625-0.13625-0.10625-0.13625-0.10625-0.13625c-0.1075-0.06-0.22375-0.0975-0.34-0.11-0.11625-0.0138-0.2325-0.004-0.345,0.0275-0.11125,0.03-0.21625,0.0825-0.31,0.155-0.0925,0.0712-0.1725,0.16125-0.235,0.27-0.41874,0.74125-0.93125,1.4125-1.515,2.0025-0.585,0.59-1.2438,1.0975-1.955,1.5138-0.7125,0.415-1.4788,0.7375-2.2788,0.9575-0.80125,0.21875-1.6362,0.33375-2.4862,0.33375-0.97625,0-1.9262-0.1525-2.8238-0.44-0.89875-0.28625-1.745-0.70625-2.5125-1.2412-0.7675-0.53375-1.4575-1.1812-2.0425-1.925-0.585-0.7425-1.065-1.5788-1.415-2.49,0.33375-0.14875,0.63875-0.34,0.90875-0.56625,0.26875-0.2275,0.5025-0.49,0.695-0.78125s0.3425-0.61125,0.445-0.95125c0.1025-0.34125,0.1575-0.70375,0.1575-1.08,0-0.535-0.1025-1.0362-0.2875-1.4875-0.185-0.45125-0.455-0.8525-0.7925-1.1862-0.33625-0.33375-0.74125-0.6-1.195-0.78375-0.455-0.18375-0.95875-0.28375-1.4962-0.28375-0.53125,0-1.0338,0.1025-1.4888,0.29-0.455,0.18625-0.8625,0.4575-1.2038,0.795-0.34,0.33625-0.615,0.7375-0.80375,1.1862-0.19,0.45-0.29375,0.94625-0.29375,1.47m4.2775-5.4038c-0.06,0.11-0.095,0.22625-0.10625,0.3425-0.0125,0.11625-0.001,0.23375,0.0312,0.345,0.0312,0.11125,0.085,0.21625,0.1575,0.3075,0.0712,0.0925,0.1625,0.17125,0.2725,0.23125,0.10875,0.06,0.225,0.095,0.34125,0.1075,0.11625,0.0112,0.23375,0,0.345-0.0325s0.215-0.085,0.3075-0.1575,0.17125-0.165,0.2325-0.27375c0.41625-0.75625,0.92625-1.44,1.5125-2.0412,0.585-0.60125,1.2475-1.12,1.9638-1.5438,0.71625-0.4225,1.4888-0.7525,2.2975-0.97625,0.80875-0.22375,1.6538-0.34,2.5162-0.34,1.18,0,2.3088,0.2175,3.3475,0.61625,1.04,0.3975,1.9912,0.975,2.8162,1.695,0.825,0.71875,1.525,1.58,2.0612,2.545,0.5375,0.96375,0.91125,2.0312,1.085,3.1638-0.0875-0.2175-0.17375-0.435-0.255-0.64-0.0825-0.20375-0.15875-0.395-0.22375-0.55875-0.0663-0.16375-0.12125-0.30125-0.15875-0.39625-0.0387-0.0962-0.0613-0.15125-0.0613-0.15125-0.035-0.0912-0.08-0.1725-0.135-0.245-0.055-0.0712-0.1175-0.1325-0.19-0.1825-0.0713-0.05-0.15-0.0875-0.23625-0.1125-0.085-0.0263-0.17875-0.04-0.275-0.04-0.11625,0-0.22875,0.0238-0.32875,0.0663-0.10125,0.0412-0.19375,0.10125-0.27,0.17625-0.0762,0.075-0.13875,0.16375-0.18125,0.2625-0.0425,0.0988-0.0663,0.2075-0.0663,0.32125l0.0225,0.0962,0.0225,0.095,0.0225,0.0963,0.0238,0.0962,0.59,1.3875,0.59125,1.3888,0.59,1.3888,0.59,1.3888c0.0437,0.10125,0.0962,0.1925,0.15625,0.27,0.06,0.0788,0.12875,0.14625,0.205,0.19875,0.0775,0.0537,0.16,0.095,0.25125,0.1225,0.09,0.0275,0.1875,0.0412,0.29125,0.0412,0.12125,0,0.2325-0.0137,0.33375-0.0412s0.1925-0.0688,0.27375-0.1225c0.0813-0.0538,0.1525-0.12,0.215-0.19875,0.0625-0.0788,0.115-0.16875,0.1575-0.27125l0.59375-1.4,0.59375-1.4,0.59375-1.3988,0.59375-1.3988c0-0.001,0.005-0.0225,0.0113-0.055,0.007-0.0325,0.0175-0.0762,0.0275-0.12,0.01-0.0437,0.0188-0.0862,0.0263-0.11875,0.007-0.0337,0.0125-0.055,0.0125-0.055,0-0.11375-0.0237-0.2225-0.065-0.32-0.0425-0.0975-0.1025-0.18625-0.1775-0.25875-0.075-0.0738-0.165-0.13375-0.265-0.17375-0.1-0.0412-0.21125-0.0638-0.32875-0.0638-0.1025,0-0.19625,0.0175-0.2825,0.0475-0.0875,0.03-0.16375,0.0725-0.2325,0.12375-0.0675,0.0512-0.125,0.11-0.17375,0.175-0.0475,0.0625-0.085,0.13125-0.11125,0.19875,0,0-0.0337,0.0838-0.09,0.2225-0.0562,0.13875-0.135,0.335-0.225,0.56-0.0913,0.225-0.19375,0.48-0.2975,0.73875-0.10375,0.2575-0.21,0.51875-0.305,0.75625-0.12125-1.4412-0.51125-2.8075-1.1212-4.045-0.61-1.2375-1.4388-2.3475-2.435-3.2775-0.9975-0.93-2.1638-1.68-3.4488-2.1975s-2.6875-0.8025-4.1588-0.8025c-1.0275,0-2.0325,0.14-2.9962,0.40625-0.9625,0.265-1.8825,0.6575-2.7362,1.1625-0.85375,0.505-1.64,1.1212-2.3375,1.8375-0.6975,0.71625-1.305,1.5312-1.8012,2.4312"/></g></svg>'),
							(this.paths_stroke = []),
							(this.viewer = o),
							(this.paths_fill = ['path230']),
							this.viewer.utils.colorize_svg(
								this.button.children[0],
								o.params.gui_foreground,
								!1,
								this.paths_fill,
								this.paths_stroke
							),
							(this.ovvloader_text_percent = document.getElementById(
								'ovvloader_text_percent_' + i
							)),
							(this.loader_container.style.backgroundColor = o.hexToRgb(
								o.params.gui_background
							));
						try {
							this.loader_container.style.backgroundColor = o.hexToRgba(
								o.params.gui_background
							);
						} catch (t) {}
						(this.loader_container.style.color = o.hexToRgb(
							o.params.gui_foreground
						)),
							(this.ovvloader_text_percent.style.color = o.hexToRgb(
								o.params.gui_foreground
							));
						try {
							(this.loader_container.style.color = o.hexToRgba(
								o.params.gui_foreground
							)),
								(this.ovvloader_text_percent.style.color = o.hexToRgba(
									o.params.gui_foreground
								));
						} catch (t) {}
						this.loader_container.style.opacity = '0';
					}
					return (
						(function (e, t, i) {
							t && $(e.prototype, t), i && $(e, i);
						})(e, [
							{
								key: 'destroy',
								value: function () {
									var e = this;
									this.loader_container &&
										(window.setTimeout(function () {
											e.loader_container.style.display = 'none';
										}, 300),
										(this.loader_container.style.opacity = '0'));
								},
							},
							{
								key: 'setText',
								value: function (e) {
									this.ovvloader_text_percent.innerHTML = e;
								},
							},
							{
								key: 'hide',
								value: function () {
									this.loader_container.style.opacity = '0';
								},
							},
							{
								key: 'show',
								value: function () {
									(this.loader_container.style.display = 'block'),
										(this.loader_container.style.opacity = '1');
								},
							},
						]),
						e
					);
				})()),
				(ko = (function () {
					function e(t, i) {
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e),
							(this.is_loading = !0),
							(this.container = t),
							(this.loader_container = t.appendChild(
								document.createElement('div')
							)),
							(this.loader_container.style.display = 'none'),
							(this.loader_container.style.width = '0%'),
							(this.loader_container.style.height = '4px'),
							(this.loader_container.style.boxSizing = 'border-box'),
							(this.loader_container.style.position = 'absolute'),
							(this.loader_container.style.top = '0px'),
							(this.loader_container.style.left = '0px'),
							(this.loader_container.style.backgroundColor = i),
							(this.loader_container.style.zIndex = '99');
					}
					return (
						(function (e, t, i) {
							t && ee(e.prototype, t), i && ee(e, i);
						})(e, [
							{
								key: 'hide',
								value: function () {
									(this.loader_container.style.display = 'none'),
										(this.is_loading = !1);
								},
							},
							{
								key: 'show',
								value: function () {
									this.is_loading &&
										(this.loader_container.style.display = 'block');
								},
							},
							{
								key: 'isLoading',
								value: function () {
									return this.is_loading;
								},
							},
							{
								key: 'setProgress',
								value: function (e) {
									this.loader_container.style.width = e;
								},
							},
						]),
						e
					);
				})()),
				(Bo = (function (e) {
					function t(e, i) {
						var n, r, o, s, a, l, h, c, u, _, d;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, t),
							(r = ((n = ie(this, ne(t).call(this))).viewer = e).id),
							(n.viewer.vport.style.touchAction = 'auto'),
							(n.element = document.createElement('DIV')),
							(n.element.className = 'ovvteaserplay'),
							e.vport.appendChild(n.element),
							(n.background = document.createElement('DIV')),
							(n.background.className = 'ovvteaserplaybackground'),
							null,
							(o =
								'' === (s = e.params.teaserplay_overlay_color.substr(6, 2))
									? 1
									: Fr()(s, 16) / 255),
							(n.background.style.background =
								'#' + e.params.teaserplay_overlay_color.substr(0, 6)),
							(n.background.style.opacity = o),
							n.element.appendChild(n.background),
							(n.button = document.createElement('DIV')),
							(n.button.className = 'ovvteaserplayplay'),
							(a = (function (e) {
								return '1' == e || '3' == e
									? '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="60" height="60" viewBox="0 0 59.999999 60" id="svg2"><g id="gforeground"><path d="M48.026 40.15V19.184H4.17V40.15h43.856z" id="foreground_2" fill="#f2f2f2"/></g><g id="gbackground"><g id="gbackground2" fill="gray"><path d="M32.842 27.42l-1.507 5.1H34.2l-1.358-5.1z" id="background_1"/><path d="M5.71 2.37q-2.262 2.4-2.262 5.7v43.95q0 3.45 2.26 5.7 2.413 2.4 5.73 2.4h18.24l26.077-26.1q1.357-1.2 1.508-2.85.753-2.85-1.508-5.1L29.677.12h-18.24Q8.12.12 5.71 2.37m3.767 19.65h3.015q1.658 0 2.864 1.2t1.206 2.85v1.35q0 1.65-1.206 2.85-1.206 1.2-2.864 1.2h-1.81v5.55q0 1.2-1.205 1.2-1.055 0-1.055-1.2v-13.8q0-1.2 1.055-1.2m33.314 16.2q-1.054 0-1.054-1.2v-6.9l-3.316-6.45q-.452-.9.603-1.5.904-.6 1.507.45l2.26 4.65 2.413-4.65q.603-1.05 1.508-.45 1.056.6.604 1.5l-3.317 6.45v6.9q0 1.2-1.206 1.2m-17.635-2.4q1.205 0 1.205 1.2 0 1.05-1.205 1.05H20.33q-1.054 0-1.054-1.05v-13.8q0-1.2 1.055-1.2 1.207 0 1.207 1.2v12.6h3.618m3.467 2.4q-1.056-.3-.754-1.5l3.768-13.95q.302-.75 1.206-.75.754 0 1.056.75l3.92 13.95q.3 1.2-.906 1.5-1.055.3-1.356-.9l-.754-2.4h-4.07l-.452 1.8-.302.6q-.3 1.2-1.356.9z" id="background_2"/><path d="M14.15 26.07q0-1.65-1.658-1.65h-1.81v4.8h1.81q1.658 0 1.658-1.8v-1.35z" id="background_3"/></g></g></svg>'
									: '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="60" height="60" viewBox="0 0 60 60" id="svg2"><g id="gbackground"><path d="M60 30q0-12.45-8.8-21.2Q42.4 0 30 0 17.55 0 8.8 8.8 0 17.55 0 30q0 12.4 8.8 21.2Q17.55 60 30 60q12.4 0 21.2-8.8Q60 42.4 60 30z" id="path_background" fill-opacity=".706"/></g><g id="gforeground"><path id="foreground_1" d="M46.2 46.2q-3.15 3.2-7.3 4.95-4.25 1.8-8.9 1.8-9.5 0-16.25-6.75Q7 39.5 7 30t6.75-16.25Q20.5 7 30 7t16.2 6.75Q52.95 20.5 52.95 30q0 2-.4 4.15" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/><path d="M23.05 39.65l16.7-9.7-16.7-9.65v19.35z" id="foreground_2" fill="#fff"/><path id="foreground_3" d="M52.85 35.6l-3.9-7.7" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/><path id="foreground_4" d="M52.85 35.6l3.75-7.75" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/><path id="foreground_5" d="M23.05 39.65V20.3l16.7 9.65-16.7 9.7z" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
							})(e.params.style)),
							(a = n.setup_svg_ids(a, r, [
								'path_background',
								'foreground_1',
								'foreground_2',
								'foreground_3',
								'foreground_4',
								'foreground_5',
								'gbackground',
								'gbackground2',
								'background_1',
								'background_2',
								'background_3',
								'gforeground',
							])),
							(n.button.innerHTML = '' + a),
							(l = n.button.children[0]),
							(h = [
								'path_background' + r,
								'background_1' + r,
								'background_2' + r,
								'background_3' + r,
							]),
							(c = []),
							(u = ['foreground_2' + r]),
							(d = !(_ = [
								'foreground_1' + r,
								'foreground_3' + r,
								'foreground_4' + r,
								'foreground_5' + r,
							])),
							('1' != e.params.style && '3' != e.params.style) ||
								((h = ['foreground_2' + r]),
								(c = []),
								(u = [
									'background_1' + r,
									'background_2' + r,
									'background_3' + r,
								]),
								(d = !(_ = []))),
							n.element.appendChild(n.button),
							(n.handle_mouseover = function (t) {
								return (
									t.preventDefault(),
									t.stopPropagation(),
									e.utils.colorize_svg(
										l,
										e.params.gui_foreground_active,
										d,
										u,
										_
									),
									!1
								);
							}),
							(n.handle_mouseout = function (t) {
								return (
									t.preventDefault(),
									t.stopPropagation(),
									e.utils.colorize_svg(l, e.params.gui_foreground, d, u, _),
									!1
								);
							}),
							n.button.addEventListener('mouseover', n.handle_mouseover, !1),
							n.button.addEventListener('mouseout', n.handle_mouseout, !1),
							e.utils.colorize_svg(l, e.params.gui_foreground, d, u, _),
							e.utils.colorize_svg(l, e.params.gui_background, !1, h, c),
							n.element.addEventListener(
								'click',
								function () {
									(n.element.style.opacity = '0'),
										window.setTimeout(function () {
											(n.viewer.vport.style.touchAction = 'none'),
												e.vport.removeChild(n.element);
										}, 200),
										i();
								},
								!1
							),
							n
						);
					}
					return re(t, e), t;
				})(no)),
				(To = (function () {
					function e(t, i, n, r) {
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e),
							(this.url = t),
							(this.responseType = i),
							(this.xhr = new XMLHttpRequest()),
							(this.retry_count = n || 10),
							(this.load_failures = 0),
							(this.headers = r);
					}
					return (
						(function (e, t, i) {
							t && oe(e.prototype, t), i && oe(e, i);
						})(e, [
							{
								key: '_load',
								value: function (e, t) {
									var i,
										n = this;
									(this.xhr.onload = function () {
										e(this);
									}),
										(this.xhr.onerror = function (i) {
											(n.load_failures += 1),
												n.load_failures <= self.retry_count
													? ((n.xhr = null), n._load(e, t))
													: t();
										}),
										(i = this.url),
										0 < this.load_failures &&
											(i = this.url + '?lf=' + this.load_failures),
										this.xhr.open('GET', i, !0),
										this.responseType &&
											(this.xhr.responseType = this.responseType),
										void 0 !== this.headers &&
											this.headers.length &&
											this.headers.map(function (e) {
												n.xhr.setRequestHeader(e.name, e.value);
											}),
										this.xhr.send();
								},
							},
							{
								key: 'load',
								value: function () {
									var e = this;
									return (
										this.xhr || (this.xhr = new XMLHttpRequest()),
										new Hr.a(function (t, i) {
											e._load(t, i);
										})
									);
								},
							},
							{
								key: 'abort',
								value: function () {
									this.xhr && this.xhr.abort();
								},
							},
						]),
						e
					);
				})()),
				(Mo = (function () {
					function e(t, i, n) {
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e),
							(this.webp_support = n),
							(this.url = t),
							(this.winURL = window.URL),
							(this.target_image = i);
					}
					return (
						(function (e, t, i) {
							t && se(e.prototype, t), i && se(e, i);
						})(e, [
							{
								key: 'load',
								value: function () {
									var e = this,
										t = this;
									return new Hr.a(function (i, n) {
										var r = [
											{
												name: 'Accept',
												value:
													'image/*' + (e.webp_support ? ', image/webp' : ''),
											},
										];
										new To(e.url, 'arraybuffer', 10, r)
											.load()
											.then(function (r) {
												var o = new Blob([r.response]),
													s = e.target_image ? e.target_image : new Image();
												(s.onload = function (e) {
													i(this);
												}),
													(s.onerror = function (e) {
														n();
													}),
													(s.src = t.winURL.createObjectURL(o));
											})
											.catch(function (e) {
												var t = new Image();
												(t.onload = function (e) {
													i(this);
												}),
													(t.src =
														'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
											});
									});
								},
							},
						]),
						e
					);
				})()),
				(Oo = (function () {
					function e(t, i, n, r) {
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e),
							(this.frame_divider = t),
							(this.base_scale = i),
							(this.sequence = n),
							(this.is_ios = r.ios),
							(this.webp_support = r.webp_support),
							(this.is_partial_load = r.is_partial_load),
							(this.load_queue = []),
							(this.currently_loading = 0),
							(this.is_destroyed = !1);
					}
					return (
						(function (e, t, i) {
							t && ae(e.prototype, t), i && ae(e, i);
						})(e, [
							{
								key: 'preload_frame',
								value: function (e, t) {
									var i = this,
										n = this.sequence.get_image_url(
											this.frame_divider * t,
											this.base_scale,
											0,
											0,
											e
										);
									return new Hr.a(function (r, o) {
										var s = new Mo(n, null, i.webp_support);
										(i.currently_loading += 1),
											s.load().then(
												function (s) {
													i.is_destroyed && o(),
														(i.currently_loading -= 1),
														r({ image_data: s, url: n, vangle: e, hangle: t });
												},
												function (e) {
													(i.currently_loading -= 1), o(e);
												}
											);
									});
								},
							},
							{
								key: 'init_frames_preload',
								value: function (e, t) {
									(this.load_queue = e), (this.frame_callback = t);
								},
							},
							{
								key: 'preload_frames',
								value: function () {
									var e,
										t = this;
									if (!this.is_destroyed)
										for (
											;
											(this.currently_loading < 8 || this.is_partial_load) &&
											0 < this.load_queue.length;

										)
											(e = this.load_queue.pop())
												? e.should_load
													? this.preload_frame(e.vangle, e.hangle).then(
															function (e) {
																t.preload_frames(), t.frame_callback(e);
															},
															function (e) {}
													  )
													: this.frame_callback(e)
												: (this.preload_frames(), this.frame_callback());
								},
							},
							{
								key: 'destroy',
								value: function () {
									this.is_destroyed = !0;
								},
							},
						]),
						e
					);
				})()),
				(Ro = (function () {
					function e(t, i, n, r, o) {
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e),
							(this.width = t),
							(this.height = i),
							(this.scale_no = 0),
							(this.scales = []),
							(this.sequence = n),
							(this.container = r),
							(this.frame_divider = 1),
							(this.devicePixelRatio = o),
							(this.inMemory = []),
							(this._optimal_scale_cache = {}),
							(this.max_single_image_width = 0),
							(this.max_single_image_height = 0);
					}
					return (
						(function (e, t, i) {
							t && le(e.prototype, t), i && le(e, i);
						})(e, [
							{
								key: 'addTiledScale',
								value: function (e, t, i, n, r, o, s) {
									var a,
										l,
										h,
										c,
										u,
										_,
										d,
										f = {};
									for (
										f.cols = i,
											f.rows = n,
											f.tile_width = r,
											f.tile_height = o,
											f.width = e,
											f.height = t,
											f.scale = s,
											a = (e / this.width) * 1e3,
											(l = (t / this.height) * 1e3) < (h = a) && (h = l),
											f.real_scale = h,
											f.is_tiled = 1 < i || 1 < n,
											c = Math.round(r),
											u = Math.round(o),
											f.is_tiled ||
												((this.max_single_image_width = Math.max(
													this.max_single_image_width,
													e
												)),
												(this.max_single_image_height = Math.max(
													this.max_single_image_height,
													t
												))),
											f.images = Array(i),
											_ = 0;
										_ < i;
										_++
									)
										for (f.images[_] = Array(n), d = 0; d < n; d++)
											(f.images[_][d] = {}),
												(f.images[_][d].imageElement = new Image()),
												(f.images[_][d].x = c * _),
												(f.images[_][d].y = u * d),
												(f.images[_][d].w = c),
												(f.images[_][d].h = u),
												(f.images[_][d].cc = _),
												(f.images[_][d].rr = d);
									(this.scales[this.scale_no] = f), this.scale_no++;
								},
							},
							{
								key: 'sort_by_scale',
								value: function () {
									this.scales.sort(function (e, t) {
										return e.scale < t.scale ? -1 : e.scale > t.scale ? 1 : 0;
									});
								},
							},
							{
								key: 'find_optimal_scale_index',
								value: function (e, t) {
									var i,
										n,
										r,
										o = 0;
									if (
										(void 0 === t && (t = !1),
										0 === e && t && (e = 9999),
										(i = (e *= this.devicePixelRatio) + '_' + t),
										this._optimal_scale_cache[i])
									)
										return this._optimal_scale_cache[i];
									for (n = 0, r = this.scales.length; n < r; n++)
										if (t) {
											if (
												1 * this.scales[n].cols == 1 &&
												1 * this.scales[n].rows == 1 &&
												(o < n && (o = n), this.scales[n].real_scale >= e)
											)
												break;
										} else if (
											(o < n && (o = n), this.scales[n].real_scale >= e)
										)
											break;
									return (this._optimal_scale_cache[i] = o);
								},
							},
							{
								key: 'destroy',
								value: function () {
									var e, t, i, n, r;
									if (this.container)
										for (e = 0; e < this.scale_no; e++)
											for (t = this.scales[e], i = 0; i < t.images.length; i++)
												for (n = t.images[i], 0; 0 < n.length; n++)
													(r = n[0]).image &&
														(this.container.removeChild(r.image),
														delete r.image);
									this.container = null;
								},
							},
						]),
						e
					);
				})()),
				(Qo = (function () {
					function e(t, i, n) {
						function r(e, t) {
							return (
								(t = t || g.viewer.container.getBoundingClientRect()),
								e.clientX - t.left
							);
						}
						function o(e, t) {
							return (
								(t = t || g.viewer.container.getBoundingClientRect()),
								e.clientY - t.top
							);
						}
						function s(e, t) {
							(g.viewer.pointer_down_pressed = !0),
								g.viewer.dispatchEvent('interaction_start'),
								g.viewer.dispatchEvent('activity_start'),
								(g.initial_mode = null),
								(f = c = _ = e),
								(p = u = d = t),
								g.reset_viewer_mode();
						}
						function a(e, t) {
							var i;
							if (
								((g.viewer.pointer_down_pressed = !1),
								(g.initial_mode = null),
								g.viewer.scale != g.viewer.min_scale || 1 < g.viewer.vangles_no
									? ((g.viewer.vport.style.touchAction = 'none'),
									  (g.viewer.tiles_obj.style.touchAction = 'none'))
									: ((g.viewer.vport.style.touchAction = 'pan-y'),
									  (g.viewer.tiles_obj.style.touchAction = 'pan-y')),
								w)
							)
								return (g.viewer.rotating = !1), void (w = !1);
							Math.abs(f - e) <= g.CLICK_TOLERANCE &&
							Math.abs(p - t) <= g.CLICK_TOLERANCE &&
							!g.viewer.rotating
								? g.viewer.panning_enabled &&
								  ((g.viewer.is_panning = !0),
								  (g.viewer.rotating = !1),
								  (i = g.viewer.get_transformed_value('scale')),
								  (g.pan_center_x = Math.round(
										g.viewer.get_transformed_value('centerx') +
											(e - g.viewer.width / 2) / i
								  )),
								  (g.pan_center_y = Math.round(
										g.viewer.get_transformed_value('centery') +
											(t - g.viewer.height / 2) / i
								  )),
								  g.viewer.transform({
										centerx: g.pan_center_x,
										centery: g.pan_center_y,
								  }))
								: g.viewer.mode != g.viewer.MODE_DRAG
								? g.rotation_speed >= g.ROTATION_DISTANCE && g.viewer.rotating
									? ((g.viewer.auto_rotate_physics_speed = Math.round(
											g.rotation_speed / g.ROTATION_DISTANCE
									  )),
									  g.viewer.changeMode(g.viewer.MODE_AUTOROTATE_PHYSICS))
									: ((g.viewer.rotating = !1),
									  g.viewer.transform({ force_rebuild_tiles: !0 }))
								: g.viewer.on_activity_end();
						}
						function l(e, t, i, n) {
							var r,
								o = e - _,
								s = t - d,
								a = e - c,
								l = t - u,
								h = i,
								f = i;
							g.viewer.mode == g.viewer.MODE_DRAG &&
								((f = 0), g.initial_mode != g.viewer.MODE_ROTATE && (h = 0)),
								g.initial_mode == g.viewer.MODE_ROTATE && (f = 0),
								g.viewer.min_scale >= g.viewer.scale && (f = 10),
								g.viewer.is_partial_load &&
									g.viewer.partialLoader.isLoading() &&
									g.viewer.frames_no < 70 &&
									((r = g.viewer.pl_get_loaded_hangles_count()),
									(h = Math.max(h, (h * g.viewer.frames_no) / (1.7 * r)))),
								Math.abs(o) < h ? (o = 0) : (_ = e),
								Math.abs(s) < f ? (s = 0) : (d = t),
								g.viewer.scale != g.viewer.min_scale || 1 < g.viewer.vangles_no
									? (n.preventDefault(),
									  (g.viewer.vport.style.touchAction = 'none'),
									  (g.viewer.tiles_obj.style.touchAction = 'none'))
									: n && n.touches && 1 < n.touches.length
									? (n.preventDefault(),
									  (g.viewer.vport.style.touchAction = 'none'),
									  (g.viewer.tiles_obj.style.touchAction = 'none'))
									: Math.abs(l) < Math.abs(a) &&
									  (n.preventDefault(),
									  (g.viewer.vport.style.touchAction = 'none'),
									  (g.viewer.tiles_obj.style.touchAction = 'none')),
								(0 === o && 0 === s) ||
									(function (e, t, i) {
										var n,
											r,
											o,
											s,
											a,
											l,
											h,
											c,
											u = g.viewer.get_mode(e, g.initial_mode);
										if (
											(g.initial_mode || (g.initial_mode = u),
											g.viewer.mode != u && g.viewer.changeMode(u),
											u == g.viewer.MODE_ROTATE)
										) {
											if (
												((g.rotation_speed = Math.abs(e.dx)),
												setTimeout(function () {
													g.rotation_speed = 0;
												}, 300),
												(r =
													(Math.abs(e.dx) <= g.DRAG_DISTANCE ||
														!g.viewer.ios) &&
													g.viewer.frames_no < 70),
												e.dx < 0)
											)
												if (
													((g.viewer.rotating = !0),
													(g.viewer.auto_rotate_physics_dir = 'left'),
													r)
												)
													g.viewer.prev_frame();
												else {
													if (
														((n = g.viewer.get_transformed_value('hangle')),
														'yes' !== g.viewer.continous &&
															!g.viewer.can_rotate(
																n,
																Math.round(e.dx / g.DRAG_DISTANCE),
																g.viewer.rotate_dir
															))
													)
														return;
													(n +=
														g.viewer.rotate_dir *
														Math.round(e.dx / g.DRAG_DISTANCE)),
														g.viewer.is_partial_load
															? g.viewer.partialLoader.isLoading()
																? (o = g.viewer.pl_find_loaded_frame(n)) &&
																  (80 <
																		(s = g.viewer.pl_get_frames_distance()) &&
																		(s = 80),
																  1 < s &&
																		((g.ROTATION_DISTANCE = Math.round(
																			(s / g.viewer.frames_no) *
																				g.viewer.frames_no
																		)),
																		g.ROTATION_DISTANCE <
																			g.PL_ROTATION_DISTANCE_CACHE &&
																			(g.ROTATION_DISTANCE =
																				g.PL_ROTATION_DISTANCE_CACHE)),
																  g.viewer.transform(
																		-1 == g.viewer.rotate_dir
																			? { hangle: o.next }
																			: { hangle: o.prev }
																  ))
																: (g.ROTATION_DISTANCE !=
																		g.PL_ROTATION_DISTANCE_CACHE &&
																		(g.ROTATION_DISTANCE =
																			g.PL_ROTATION_DISTANCE_CACHE),
																  g.viewer.transform({ hangle: n }))
															: g.viewer.transform({ hangle: n });
												}
											else if (0 < e.dx)
												if (
													((g.viewer.rotating = !0),
													(g.viewer.auto_rotate_physics_dir = 'right'),
													r)
												)
													g.viewer.next_frame();
												else {
													if (
														((n = g.viewer.get_transformed_value('hangle')),
														'yes' !== g.viewer.continous &&
															!g.viewer.can_rotate(
																n,
																Math.round(e.dx / g.DRAG_DISTANCE),
																g.viewer.rotate_dir
															))
													)
														return;
													(n +=
														g.viewer.rotate_dir *
														Math.round(e.dx / g.DRAG_DISTANCE)),
														g.viewer.is_partial_load
															? g.viewer.partialLoader.isLoading()
																? (a = g.viewer.pl_find_loaded_frame(n)) &&
																  (80 <
																		(l = g.viewer.pl_get_frames_distance()) &&
																		(l = 80),
																  1 < l &&
																		((g.ROTATION_DISTANCE = Math.round(
																			(l / g.viewer.frames_no) *
																				g.viewer.frames_no
																		)),
																		g.ROTATION_DISTANCE <
																			g.PL_ROTATION_DISTANCE_CACHE &&
																			(g.ROTATION_DISTANCE =
																				g.PL_ROTATION_DISTANCE_CACHE)),
																  g.viewer.transform(
																		-1 == g.viewer.rotate_dir
																			? { hangle: a.prev }
																			: { hangle: a.next }
																  ))
																: (g.ROTATION_DISTANCE !=
																		g.PL_ROTATION_DISTANCE_CACHE &&
																		(g.ROTATION_DISTANCE =
																			g.PL_ROTATION_DISTANCE_CACHE),
																  g.viewer.transform({ hangle: n }))
															: g.viewer.transform({ hangle: n });
												}
											(h = (h = g.viewer.min_scale) >= g.viewer.scale),
												0 != e.dy && g.viewer.vmove && !h
													? g.viewer.transform({
															centery:
																g.viewer.get_transformed_value('centery') -
																e.dy / g.viewer.get_transformed_value('scale'),
													  })
													: 0 != e.dy &&
													  h &&
													  (e.dy >= i
															? g.viewer.transform({
																	vangle:
																		g.viewer.get_transformed_value('vangle') -
																		1 * g.viewer.vmove_dir,
															  })
															: e.dy <= i &&
															  g.viewer.transform({
																	vangle:
																		g.viewer.get_transformed_value('vangle') +
																		1 * g.viewer.vmove_dir,
															  }));
										} else
											u == g.viewer.MODE_DRAG &&
												((c = g.viewer.get_transformed_value('scale')),
												(g.pan_center_x =
													g.viewer.get_transformed_value('centerx') - e.dx / c),
												(g.pan_center_y =
													g.viewer.get_transformed_value('centery') - e.dy / c),
												g.viewer.transform({
													centerx: g.pan_center_x,
													centery: g.pan_center_y,
												}));
									})({ x: e, y: t, dx: o, dy: s }, 0, f);
						}
						var h, c, u, _, d, f, p, m, v, g, A, w;
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e),
							(A = !(v = p = 0)),
							(w = !300),
							((g = this).pan_center_x = 0),
							(this.pan_center_y = 0),
							(this.CLICK_TOLERANCE = 10),
							(this.doubletap_timer = null),
							(this.container = t),
							(this.viewer = i),
							(this.wheel_delay_timer = null),
							(this.android_gesture = !1),
							(this.android_gesture_scale = 1),
							(this.android_gesture_distance = 0),
							(this.ie_pointers = []),
							(this.ie_first_pointer_position = []),
							(this.ie_second_pointer_position = []),
							(this.ie_gesture_distance = 0),
							(this.ie_gesture = !1),
							(this.ie_gesture_scale = 1),
							(this.ie_gesture_finishing = !1),
							(this.ie_initial_scale = 0),
							(this.ie_rotate_starter = 20),
							(this.ie_rotate_ender = 60),
							(this.initial_mode = null),
							this.viewer.ios
								? 70 < i.frames_no
									? (this.DRAG_DISTANCE = 10)
									: (this.DRAG_DISTANCE =
											24 < this.viewer.frames_no
												? Math.round((24 / this.viewer.frames_no) * 50)
												: 50)
								: 'ms' === this.viewer.rendering_engine
								? (this.DRAG_DISTANCE =
										24 < this.viewer.frames_no
											? Math.round((24 / this.viewer.frames_no) * 2)
											: 2)
								: ((this.DRAG_DISTANCE =
										24 < this.viewer.frames_no
											? Math.round((24 / this.viewer.frames_no) * 20)
											: 20),
								  this.DRAG_DISTANCE < 10 && (this.DRAG_DISTANCE = 10)),
							(this.ROTATION_DISTANCE = this.DRAG_DISTANCE),
							'ms' === this.viewer.rendering_engine &&
								(this.ROTATION_DISTANCE = 20),
							(this.PL_ROTATION_DISTANCE_CACHE = this.ROTATION_DISTANCE),
							(this.zoom_and_center = function (e, t, i) {
								var n,
									s,
									a,
									l,
									h,
									c,
									u,
									_ = this,
									d = null,
									f = _.viewer.container.getBoundingClientRect();
								t > _.viewer.max_scale && (t = _.viewer.max_scale),
									t < _.viewer.min_scale && (t = _.viewer.min_scale),
									(u = i
										? ((d = _.pan_center_x), _.pan_center_y)
										: ((n = _.viewer.width / 2),
										  (a = (s = r(e, f) - n) / t - s / _.viewer.scale),
										  (d = _.viewer.centerx - a),
										  (l = _.viewer.height / 2),
										  (c = (h = o(e, f) - l) / t - h / _.viewer.scale),
										  _.viewer.centery - c)),
									_.viewer.dispatchEvent('interaction_start'),
									_.viewer.dispatchEvent('activity_start'),
									d
										? _.viewer.transform({ scale: t, centerx: d, centery: u })
										: _.viewer.transform({ scale: t });
							}),
							(this.onMouseWheel = function (e) {
								var t,
									i,
									n,
									r,
									o = e || window.event;
								return (
									g.viewer.control_panel.stop(),
									(t = 225 - 1),
									(i = o.deltaY),
									o.deltaMode == WheelEvent.DOM_DELTA_LINE
										? (i = 40 * o.deltaY)
										: o.deltaMode == WheelEvent.DOM_DELTA_PAGE &&
										  (i = 800 * o.deltaY),
									(n =
										Math.abs(
											Math.min(
												Math.max(
													(i =
														(i /= 120) < 1
															? i < -1
																? (-Math.pow(i, 2) - t) / 225
																: i
															: (Math.pow(i, 2) + t) / 225) / 2,
													-1
												),
												1
											)
										) / 2),
									o.stopPropagation && o.stopPropagation(),
									o.preventDefault && o.preventDefault(),
									(o.cancelBubble = !0),
									(o.cancel = !0),
									(o.returnValue = !1),
									g.wheel_flag ||
										(g.wheel_delay_timer ||
											(g.viewer.refresh_position(),
											(g.wheel_delay_timer = window.setTimeout(function () {
												(g.wheel_flag = !1),
													clearTimeout(g.wheel_delay_timer),
													(g.wheel_delay_timer = null);
											}, 10)),
											(g.wheel_flag = !0)),
										(g.viewer.scalling = !0),
										0 <= o.deltaY
											? g.viewer.scale == g.viewer.min_scale
												? (g.viewer.scalling = !1)
												: g.viewer.scaleDown(
														n + g.viewer.MOUSE_WHEEL_SCALE_FACTOR
												  )
											: ((r =
													Math.round(
														g.viewer.scale *
															(n + g.viewer.MOUSE_WHEEL_SCALE_FACTOR) *
															1e4
													) / 1e4),
											  g.zoom_and_center(o, r))),
									!1
								);
							}),
							(this.reset_viewer_mode = function () {
								var e = this;
								e.viewer.MODE_DRAG != e.viewer.mode &&
									(~[e.viewer.MODE_ROTATE, e.viewer.MODE_DRAG].indexOf(
										e.viewer.mode
									) ||
										(1 < e.viewer.frames_no
											? e.viewer.changeMode(e.viewer.MODE_ROTATE)
											: e.viewer.changeMode(e.viewer.MODE_DRAG)));
							}),
							(this.onGestureStart = function (e) {
								return (
									e.preventDefault(),
									g.viewer.refresh_position(),
									(this.start_scale = g.viewer.scale),
									g.viewer.dispatchEvent('interaction_start'),
									g.viewer.dispatchEvent('activity_start'),
									g.container.removeEventListener('touchend', g.onTouchEnd, !1),
									g.reset_viewer_mode(),
									(h = g.viewer.scale),
									g.viewer.optimal_scale,
									(g.viewer.scalling = !0),
									!(g.viewer.gesture_scalling = !0)
								);
							}),
							(this.onGestureChange = function (e) {
								return (
									e.preventDefault(),
									(g.viewer.rotating = !1),
									(g.viewer.scalling = !0),
									(g.viewer.gesture_scalling = !0),
									g.viewer.transform({
										scale: (h * Math.round(1e3 * e.scale)) / 1e3,
									}),
									!1
								);
							}),
							(this.onGestureEnd = function (e) {
								return (
									e.preventDefault(),
									g.container.removeEventListener(
										'touchmove',
										g.onTouchMove,
										!1
									),
									(g.viewer.scalling = !1),
									(g.viewer.rotating = !1),
									(g.viewer.gesture_scalling = !1),
									g.viewer.transform({ force_rebuild_tiles: !0 }),
									!1
								);
							}),
							(this.onTouchStartAndroid = function (e) {
								var t, i, n, s;
								g.viewer.ios ||
									(2 === e.touches.length &&
										((g.android_gesture = !0),
										(g.android_gesture_scale = 1),
										(t = r(e.touches[0])),
										(n = o(e.touches[0])),
										(i = r(e.touches[1])),
										(s = o(e.touches[1])),
										(g.android_gesture_distance = Math.sqrt(
											Math.pow(t - i, 2) + Math.pow(n - s, 2)
										)),
										0 == g.android_gesture_distance
											? ((g.android_gesture = !1),
											  (g.android_gesture_scale = 1),
											  (g.android_gesture_distance = 0))
											: g.onGestureStartAndroid()));
							}),
							(this.onTouchMoveAndroid = function (e) {
								var t, i, n, s, a;
								g.android_gesture &&
									!g.viewer.ios &&
									2 == e.touches.length &&
									((t = r(e.touches[0])),
									(n = o(e.touches[0])),
									(i = r(e.touches[1])),
									(s = o(e.touches[1])),
									(a =
										Math.sqrt(Math.pow(t - i, 2) + Math.pow(n - s, 2)) /
										g.android_gesture_distance) != g.android_gesture_scale &&
										((g.android_gesture_scale = a),
										g.onGestureChangeAndroid()));
							}),
							(this.onTouchEndAndroid = function (e) {
								e.touches.length < 2 &&
									!g.viewer.ios &&
									g.android_gesture &&
									((g.android_gesture = !1),
									(g.android_gesture_scale = 1),
									(g.android_gesture_distance = 0),
									g.onGestureEndAndroid());
							}),
							(this.onGestureStartAndroid = function (e) {
								g.viewer.ios ||
									((this.start_scale = g.viewer.scale),
									g.container.removeEventListener('touchend', g.onTouchEnd, !1),
									g.reset_viewer_mode(),
									(h = g.viewer.scale),
									g.viewer.optimal_scale,
									(g.viewer.scalling = !0),
									(g.viewer.gesture_scalling = !0));
							}),
							(this.onGestureChangeAndroid = function (e) {
								g.viewer.ios ||
									((g.viewer.rotating = !1),
									(g.viewer.scalling = !0),
									(g.viewer.gesture_scalling = !0),
									g.viewer.transform({
										scale:
											(h * Math.round(1e5 * g.android_gesture_scale)) / 1e5,
									}));
							}),
							(this.onGestureEndAndroid = function (e) {
								g.viewer.ios ||
									(g.container.removeEventListener(
										'touchmove',
										g.onTouchMove,
										!1
									),
									(g.viewer.scalling = !1),
									(g.viewer.gesture_scalling = !1),
									(g.viewer.rotating = !1),
									g.viewer.transform({ force_rebuild_tiles: !0 }),
									(g.android_gesture = !1));
							}),
							(this.onTouchStart = function (e) {
								return (
									e.stopPropagation(),
									g.viewer.refresh_position(),
									g.onTouchStartAndroid(e),
									g.reset_viewer_mode(),
									g.container.addEventListener('touchend', g.onTouchEnd, !1),
									g.container.addEventListener('touchmove', g.onTouchMove, !1),
									s(r(e.touches[0]), o(e.touches[0])),
									g.handle_doubletap(e.touches[0], e.touches.length, !1),
									!1
								);
							}),
							(this.handle_doubletap = function (e, t, i) {
								var n = this,
									s = r(e),
									a = o(e);
								1 !== t || i
									? ((w = !(A = !1)),
									  n.doubletap_timer && clearTimeout(n.doubletap_timer))
									: A
									? (Math.abs(s - m) < 20 &&
											Math.abs(a - v) < 20 &&
											('fullscreen' === n.viewer.doubletap_mode
												? n.viewer.toggle_fullscreen_mode()
												: 'zoom' === n.viewer.doubletap_mode &&
												  (n.viewer.get_transformed_value('scale') <
												  n.viewer.max_scale
														? n.zoom_and_center(e, n.viewer.max_scale, !0)
														: n.viewer.transform({
																scale: n.viewer.min_scale,
														  }))),
									  (A = !(w = !0)),
									  n.doubletap_timer && clearTimeout(n.doubletap_timer))
									: ((A = !0),
									  (m = s),
									  (v = a),
									  (n.doubletap_timer = setTimeout(function () {
											A = !1;
									  }, 300)));
							}),
							(this.onTouchMove = function (e) {
								if ((g.onTouchMoveAndroid(e), g.onTouchMoveLock)) return !1;
								var t = 10;
								return (
									(g.viewer.is_android || g.viewer.ios) && (t = 1),
									g.viewer.rotating &&
										((t =
											24 < g.viewer.frames_no
												? 5
												: Fr()(250 / g.viewer.frames_no)),
										g.viewer.is_android ||
											g.viewer.ios ||
											((g.onTouchMoveLock = !0),
											setTimeout(function () {
												g.onTouchMoveLock = !1;
											}, 20))),
									l(r(e.touches[0]), o(e.touches[0]), t, e),
									!1
								);
							}),
							(this.onTouchEnd = function (e) {
								return e.preventDefault(), g.onTouchEndAndroid(e), a(_, d), !1;
							}),
							(this.focus_container = function () {
								void 0 !== window.pageXOffset
									? (window.pageXOffset, window.pageYOffset)
									: void 0 !== window.scrollX
									? (window.scrollX, window.scrollY)
									: document.documentElement &&
									  void 0 !== document.documentElement.scrollLeft
									? (document.documentElement.scrollLeft,
									  document.documentElement.scrollTop)
									: (document.body.scrollLeft, document.body.scrollTop),
									this.container.focus();
							}),
							(this.onMouseDown = function (e) {
								e.preventDefault(),
									e.stopPropagation(),
									g.focus_container(),
									g.viewer.refresh_position(),
									this.onMouseOut ||
										(this.onMouseOut = function (e) {
											var t =
												(e = e || window.event).relatedTarget || e.toElement;
											(null !== t &&
												t !== document.getElementsByTagName('html')[0]) ||
												g.onMouseUp(e);
										}),
									s(r(e), o(e)),
									document.body.addEventListener(
										'mousemove',
										g.onMouseMove,
										!1
									),
									document.addEventListener('mouseup', g.onMouseUp, !1),
									document.body.addEventListener('mouseout', g.onMouseOut, !1);
							}),
							(this.onMouseDblClick = function (e) {
								g.viewer.panning_enabled ||
									(e.preventDefault(),
									e.stopPropagation(),
									g.viewer.dispatchEvent('interaction_start'),
									g.viewer.dispatchEvent('activity_start'),
									g.viewer.dispatchEvent('doubleclick', [r(e), o(e)]));
							}),
							(this.onMouseMove = function (e) {
								e.preventDefault(),
									e.stopPropagation(),
									l(r(e), o(e), g.DRAG_DISTANCE, e);
							}),
							(this.onMouseUp = function (e) {
								e.preventDefault(),
									e.stopPropagation(),
									document.body.removeEventListener(
										'mousemove',
										g.onMouseMove,
										!1
									),
									document.removeEventListener('mouseup', g.onMouseUp, !1),
									document.body.removeEventListener(
										'mouseout',
										g.onMouseOut,
										!1
									),
									a(r(e), o(e));
							}),
							(this.ie_gesture_start = function () {
								var e, t, i, n;
								(g.ie_gesture = !0),
									(g.ie_gesture_scale = 1),
									(e = g.ie_first_pointer_position[0]),
									(t = g.ie_first_pointer_position[1]),
									(i = g.ie_second_pointer_position[0]),
									(n = g.ie_second_pointer_position[1]),
									(g.ie_gesture_distance = Math.sqrt(
										Math.pow(e - i, 2) + Math.pow(t - n, 2)
									)),
									0 == g.ie_gesture_distance
										? ((g.ie_gesture = !1),
										  (g.ie_gesture_scale = 1),
										  (g.ie_gesture_distance = 0))
										: ((this.start_scale = g.viewer.scale),
										  (g.viewer.scalling = !0),
										  (g.viewer.gesture_scalling = !0));
							}),
							(this.ie_gesture_move = function () {
								var e,
									t = g.ie_first_pointer_position[0],
									i = g.ie_first_pointer_position[1],
									n = g.ie_second_pointer_position[0],
									r = g.ie_second_pointer_position[1],
									o =
										Math.sqrt(Math.pow(t - n, 2) + Math.pow(i - r, 2)) /
										g.ie_gesture_distance,
									s = 100 * Math.abs(g.ie_gesture_scale - o);
								o != g.ie_gesture_scale &&
									1 < s &&
									((g.ie_gesture_scale = Math.round(1e3 * o) / 1e3),
									(g.viewer.rotating = !1),
									(g.viewer.scalling = !0),
									(g.viewer.gesture_scalling = !0),
									(e = { clientX: (t + n) / 2, clientY: (i + r) / 2 }),
									g.zoom_and_center(e, g.start_scale * g.ie_gesture_scale),
									g.ie_gesture_timer && clearTimeout(g.ie_gesture_timer),
									(g.ie_gesture_timer = window.setTimeout(function () {
										(g.viewer.scalling = !1),
											(g.viewer.gesture_scalling = !1),
											(g.viewer.rotating = !1),
											clearTimeout(g.ie_gesture_timer),
											(g.ie_gesture_timer = void 0);
									}, 1e3)));
							}),
							(this.ie_gesture_end = function () {
								(g.ie_gesture = !1),
									(g.ie_gesture_scale = 1),
									(g.ie_gesture_distance = 0),
									(g.viewer.scalling = !1),
									(g.viewer.gesture_scalling = !1),
									(g.viewer.rotating = !1),
									g.viewer.transform({ force_rebuild_tiles: !0 }),
									(g.ie_gesture_finishing = !0),
									setTimeout(function () {
										g.ie_gesture_finishing = !1;
									}, 100);
							}),
							(this.onMSPointerDown = function (e) {
								var t, i, n, a;
								e.orbitvu_handled ||
									(e.preventDefault(),
									e.stopPropagation(),
									g.viewer.refresh_position(),
									g.ie_initial_scale || (g.ie_initial_scale = g.viewer.scale),
									g.ie_gesture_finishing ||
										(g.reset_viewer_mode(),
										(t = 0 === g.ie_pointers.length),
										~g.ie_pointers.indexOf(e.pointerId) ||
											g.ie_pointers.push(e.pointerId),
										(i = g.ie_pointers.indexOf(e.pointerId)),
										(n = r(e)),
										(a = o(e)),
										0 == i
											? ((g.ie_first_pointer_position = [e.clientX, e.clientY]),
											  s(n, a))
											: 1 == i &&
											  (g.ie_second_pointer_position = [e.clientX, e.clientY]),
										1 < g.ie_pointers.length && g.ie_gesture_start(e),
										t &&
											(window.PointerEvent
												? (document.body.addEventListener(
														'pointermove',
														g.onMSPointerMove,
														!1
												  ),
												  document.addEventListener(
														'pointerup',
														g.onMSPointerUp,
														!1
												  ),
												  document.body.addEventListener(
														'pointercancel',
														g.onMSPointerUp,
														!1
												  ))
												: window.MSPointerEvent &&
												  (document.body.addEventListener(
														'MSPointerMove',
														g.onMSPointerMove,
														!1
												  ),
												  document.addEventListener(
														'MSPointerUp',
														g.onMSPointerUp,
														!1
												  ),
												  document.body.addEventListener(
														'MSPointerCancel',
														g.onMSPointerUp,
														!1
												  )))));
							}),
							(this.onMSPointerMove = function (e) {
								var t, i, n, s;
								if ((e.stopPropagation(), !g.ie_gesture_finishing)) {
									if (g.onTouchMoveLock) return !1;
									0 == (t = g.ie_pointers.indexOf(e.pointerId))
										? ((i = r(e)),
										  (n = o(e)),
										  (g.ie_first_pointer_position = [e.clientX, e.clientY]),
										  (s = g.ROTATION_DISTANCE),
										  g.viewer.MODE_ROTATE &&
												g.viewer.scalling &&
												(s = g.DRAG_DISTANCE),
										  g.ie_gesture && (s = 0),
										  (e.touches = g.ie_pointers),
										  l(i, n, s, e))
										: 1 == t &&
										  (g.ie_second_pointer_position = [e.clientX, e.clientY]),
										g.ie_gesture &&
											!g.on_zoom_lock &&
											((g.on_zoom_lock = !0),
											window.setTimeout(function () {
												g.on_zoom_lock = !1;
											}, 10),
											g.ie_gesture_move());
								}
							}),
							(this.onMSPointerUp = function (e) {
								var t, i, n;
								e.preventDefault(),
									e.stopPropagation(),
									(t = g.ie_pointers.indexOf(e.pointerId)),
									(i = r(e)),
									(n = o(e)),
									g.handle_doubletap(e, g.ie_pointers.length, g.ie_gesture),
									0 != t || g.ie_gesture || a(i, n),
									g.ie_pointers.splice(t, 1),
									1 === g.ie_pointers.length &&
										g.ie_gesture &&
										g.ie_gesture_end(),
									0 === g.ie_pointers.length &&
										(window.PointerEvent
											? (document.body.removeEventListener(
													'pointermove',
													g.onMSPointerMove,
													!1
											  ),
											  document.removeEventListener(
													'pointerup',
													g.onMSPointerUp,
													!1
											  ),
											  document.body.removeEventListener(
													'pointercancel',
													g.onMSPointerUp,
													!1
											  ))
											: window.MSPointerEvent &&
											  (document.body.removeEventListener(
													'MSPointerMove',
													g.onMSPointerMove,
													!1
											  ),
											  document.removeEventListener(
													'MSPointerUp',
													g.onMSPointerUp,
													!1
											  ),
											  document.body.removeEventListener(
													'MSPointerCancel',
													g.onMSPointerUp,
													!1
											  )));
							}),
							(this.doKeyDown = function (e) {
								switch ((g.viewer.refresh_position(), e.keyCode)) {
									case 39:
									case 34:
										g.viewer.dispatchEvent('interaction_start'),
											g.viewer.dispatchEvent('activity_start'),
											g.viewer.next_frame(),
											g.viewer.transform({ force_rebuild_tiles: !0 }),
											e.preventDefault();
										break;
									case 33:
									case 37:
										g.viewer.dispatchEvent('interaction_start'),
											g.viewer.dispatchEvent('activity_start'),
											g.viewer.prev_frame(),
											g.viewer.transform({ force_rebuild_tiles: !0 }),
											e.preventDefault();
										break;
									case 61:
									case 187:
										!0 === e.shiftKey && g.viewer.scaleUp();
										break;
									case 109:
									case 173:
									case 189:
										g.viewer.dispatchEvent('interaction_start'),
											g.viewer.dispatchEvent('activity_start'),
											g.viewer.scaleDown();
										break;
									case 32:
										g.viewer.dispatchEvent('interaction_start'),
											g.viewer.dispatchEvent('activity_start'),
											g.viewer.transform({ scale: 0 }),
											e.preventDefault();
										break;
									case 27:
										g.viewer.dispatchEvent('interaction_start'),
											g.viewer.dispatchEvent('activity_start'),
											g.viewer.fullscreen && g.viewer.toggle_fullscreen_mode(),
											e.preventDefault();
								}
							});
					}
					return (
						(function (e, t, i) {
							t && he(e.prototype, t), i && he(e, i);
						})(e, [
							{
								key: 'attachWheelEvents',
								value: function () {
									this.viewer.mousewheel_enabled &&
										this.container.addEventListener(
											'wheel',
											this.onMouseWheel,
											!1
										);
								},
							},
							{
								key: 'attachEvents',
								value: function () {
									this.attachWheelEvents(),
										this.viewer.ios ||
											this.container.addEventListener(
												'keydown',
												this.doKeyDown,
												!1
											),
										window.PointerEvent
											? this.container.addEventListener(
													'pointerdown',
													this.onMSPointerDown,
													!1
											  )
											: window.MSPointerEvent
											? this.container.addEventListener(
													'MSPointerDown',
													this.onMSPointerDown,
													!1
											  )
											: (this.viewer.is_android ||
													this.container.addEventListener(
														'mousedown',
														this.onMouseDown,
														!1
													),
											  this.container.addEventListener(
													'gesturestart',
													this.onGestureStart,
													!1
											  ),
											  this.container.addEventListener(
													'gesturechange',
													this.onGestureChange,
													!1
											  ),
											  this.container.addEventListener(
													'gestureend',
													this.onGestureEnd,
													!1
											  ),
											  this.container.addEventListener(
													'touchstart',
													this.onTouchStart,
													!1
											  )),
										this.viewer.is_android ||
											this.container.addEventListener(
												'dblclick',
												this.onMouseDblClick,
												!1
											);
								},
							},
							{
								key: 'removeWheelEvents',
								value: function () {
									this.viewer.mousewheel_enabled &&
										this.container.removeEventListener(
											'wheel',
											this.onMouseWheel,
											!1
										);
								},
							},
							{
								key: 'removeEvents',
								value: function () {
									var e = this;
									this.removeWheelEvents(),
										this.viewer.ios ||
											this.container.removeEventListener(
												'keydown',
												this.doKeyDown,
												!0
											),
										window.PointerEvent
											? this.container.removeEventListener(
													'pointerdown',
													e.onMSPointerDown,
													!1
											  )
											: window.MSPointerEvent
											? this.container.removeEventListener(
													'MSPointerDown',
													e.onMSPointerDown,
													!1
											  )
											: (this.viewer.is_android ||
													this.container.removeEventListener(
														'mousedown',
														this.onMouseDown,
														!1
													),
											  document.body.removeEventListener(
													'mousemove',
													e.onMouseMove,
													!1
											  ),
											  document.removeEventListener(
													'mouseup',
													e.onMouseUp,
													!1
											  ),
											  document.body.removeEventListener(
													'mouseout',
													e.onMouseOut,
													!1
											  ),
											  this.container.removeEventListener(
													'gesturestart',
													this.onGestureStart,
													!1
											  ),
											  this.container.removeEventListener(
													'gesturechange',
													this.onGestureChange,
													!1
											  ),
											  this.container.removeEventListener(
													'gestureend',
													this.onGestureEnd,
													!1
											  ),
											  this.container.removeEventListener(
													'touchstart',
													this.onTouchStart,
													!1
											  ),
											  this.container.removeEventListener(
													'touchmove',
													this.onTouchMove,
													!1
											  ),
											  this.container.removeEventListener(
													'touchend',
													this.onTouchEnd,
													!1
											  )),
										this.viewer.is_android ||
											this.container.removeEventListener(
												'dblclick',
												this.onMouseDblClick,
												!1
											);
								},
							},
						]),
						e
					);
				})()),
				(Co = i(21)),
				(Io = i.n(Co)),
				(Do = (function () {
					function e(t, i) {
						var n = this;
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e),
							de(this, 'tween_onstart', function (e, t) {
								e && (n.scalling = !0), t && (n.rotating = !0);
							}),
							de(this, 'tween_onupdate', function (e, t, i, r) {
								var o, s, a, l, h, c, u, _, d;
								if (
									!n.compare_tweens(n.current_frame_coords, n.frameObj) ||
									e
								) {
									if (
										((s = (o = n.tiles_scale_obj).scale),
										n.canvas_context.clearRect(
											0,
											0,
											n.canvas.width,
											n.canvas.height
										),
										n.drawOnCanvas(
											n.frameObj.image,
											Math.round(n.frameObj.x),
											Math.round(n.frameObj.y),
											t.width * n.frameObj.scale,
											t.height * n.frameObj.scale,
											Ir.isTweening(n.frameObj)
										),
										n.tiles_buffer)
									)
										for (a = 0; a < i; a++)
											for (l = 0; l < r; l++)
												void 0 !== o.images &&
													o.images.length &&
													void 0 !== o.images[a] &&
													void 0 !== o.images[a][l] &&
													(h = o.images[a][l]) &&
													h.buffered &&
													((c = Math.round(
														n.frameObj[s + '_' + a + '_' + l + '_x']
													)),
													(u = Math.round(
														n.frameObj[s + '_' + a + '_' + l + '_y']
													)),
													(_ = Math.round(
														h.imageElement.width *
															n.frameObj[s + '_' + a + '_' + l + '_scale']
													)),
													(d = Math.round(
														h.imageElement.height *
															n.frameObj[s + '_' + a + '_' + l + '_scale']
													)),
													n.tiles_fade_in_effect ||
														n.canvas_context.clearRect(
															c * n.devicePixelRatio,
															u * n.devicePixelRatio,
															_ * n.devicePixelRatio,
															d * n.devicePixelRatio
														),
													n.canvas_context.drawImage(
														h.imageElement,
														c * n.devicePixelRatio,
														u * n.devicePixelRatio,
														_ * n.devicePixelRatio,
														d * n.devicePixelRatio
													));
									Yr()(n.current_frame_coords, n.frameObj),
										delete n.current_frame_coords.image,
										delete n.current_frame_coords.ease,
										delete n.current_frame_coords._gsap;
								}
							}),
							de(this, 'tween_oncomplete', function (e, t) {
								n.clear_rebuild_tiles_timeout(),
									e &&
										((n.scalling = !1),
										(n.is_button_scalling = !1),
										n.on_activity_end()),
									t && (n.rotating = !1),
									n.rebuild_tiles();
							}),
							(this.initial_params = i),
							(this.params = {
								frame_rate: '14',
								background_color_opacity: !1,
								background_color: '0xffffff',
								border_color: '0xffffff',
								lang: 'en',
								auto_rotate_dir: 'right',
								rotate_dir: 'right',
								vmove_dir: 'down',
								auto_rotate: 'yes',
								teaser: 'no',
								vmove: 'yes',
								continous: 'yes',
								first_frame: 1,
								first_row: 1,
								border_frame: 1,
								partial_load: 'no',
								ovskin: 'no',
								loader: 'yes',
								branding: null,
								branding_url: null,
								logo_src: null,
								logo_url: null,
								social: 'no',
								social_url: null,
								gui_background: '0x000000B0',
								gui_foreground: '0xFFFFFFFF',
								gui_foreground_active: '0x00b6a8ff',
								teaserplay_overlay_color: '0x00000099',
								btn_zoom_in: 'yes',
								btn_zoom_out: 'yes',
								btn_fullscreen: 'yes',
								btn_drag_rotate: 'yes',
								btn_info: 'yes',
								btn_autorotate: 'yes',
								border: 'no',
								fullscreen_enabled: 'yes',
								fullscreen_eventname_bound: !1,
								fullscreen_supported: void 0,
								auto_drag_switch: !1,
								doubletap_mode: 'fullscreen',
								ovus_cache_modifier: null,
								transform_vpos: !1,
								transform_hpos: !1,
								hires_support: 'yes',
								hires_forced_zoom: 'no',
							}),
							(this.translates_cache = {}),
							(this.scale = -1),
							(this.hangle = 0),
							(this.vangle = 0),
							(this.centerx = 0),
							(this.centery = 0),
							(this.devicePixelRatio = window.devicePixelRatio),
							(this.frame_divider = 1),
							(this.SCALE_MIN = 0.01),
							(this.SCALE_MAX = 1),
							(this.max_scale = 0),
							(this.min_scale = 0.01),
							(this.SCALE_FACTOR = 1.2),
							(this.MOUSE_WHEEL_SCALE_FACTOR = 1.2),
							this.is_safari && (this.MOUSE_WHEEL_SCALE_FACTOR = 1),
							this.supports_ms_pointer && (this.SCALE_FACTOR = 1.06),
							(this.queue_obj = {
								scale: this.scale,
								centerx: this.centerx,
								centery: this.centery,
								hangle: this.hangle,
								vangle: this.vangle,
							}),
							(this.utils = new Pr()),
							(this.ovlang = new Vr()),
							(this.ios = this.utils.isIOS()),
							(this.is_android = this.utils.isAndroid()),
							(this.is_mobile = this.ios || this.is_android),
							(this.use_mobile_buttons = this.is_mobile),
							(this.supports_ms_pointer = this.utils.supports_pointer_events()),
							(this.is_safari = this.utils.isSafari()),
							(this.webp_support = this.initial_params.webp_support),
							(this.html_element = document.getElementsByTagName('html')[0]),
							(this.container = document.getElementById(t)),
							(this.nosize = document.getElementById(t + '-obj-nosize')),
							(this.vport = document.getElementById(t + '-obj-ovvvport')),
							this.vport.setAttribute('tabindex', '999999'),
							(this.canvas = document.getElementById(t + '-obj-canvas')),
							(this.tiles_obj = document.getElementById(t + '-obj-tiles')),
							(this.style_animation = null),
							(this.id = t),
							(this.canvas_context = this.canvas.getContext('2d')),
							(this.tiles_obj_context = this.tiles_obj.getContext('2d')),
							(this.tiles_buffer = !1),
							(this.tiles_cache = {}),
							(this.tiles_fade_in_effect = !0),
							(this.fading_tiles = []),
							(this.vport.style.width = '100%'),
							(this.vport.style.height = '100%'),
							(this.is_loaded = !1),
							(this._events = {}),
							(this.sizer_object_data_set = !1),
							(this.pl_frames_pack = []),
							(this.pl_base_frames_to_load = 0),
							(this.pl_base_frames_loaded = 0),
							(this.doubletap_mode = this.params.doubletap_mode),
							(this._rotation_hangle = this.hangle),
							(this.base_frames = []),
							(this.base_scale_obj = {}),
							(this.base_scales_upsized = {}),
							(this.current_frame_coords = {}),
							(this.frameObj = {}),
							(this.partial_loader_timeout = null),
							(this.is_partial_load = !1),
							(this.lazy_partial_load = !1),
							(this.tween = null),
							(this.frames_no = 0),
							(this.rotation_speed = 0),
							(this.rebuild_tiles_time = 120),
							(this.rebuild_tiles_timeout = null),
							(this.is_doing_fullscreen = !1),
							(this.is_doing_html5_fullscreen = !1),
							(this.max_width = this.max_height = 0),
							(this.refresh = !1),
							(this.panning_enabled = !0),
							(this.is_rotate_to = !1),
							(this.animating = !1),
							(this.is_button_scalling = !1),
							(this.forced_mode = null),
							(this.emperor_timeout = null),
							(this.is_destroyed = !1),
							(this.auto_drag_switch = !1),
							(this.rotate_rate = 1),
							(this.rotating = !1),
							(this.scalling = !1),
							(this.gesture_scalling = !1),
							(this.fullscreen = !1),
							(this.force_size = !0),
							(this.SLOWDOWN_FACTOR = 1.1),
							(this.MODE_AUTOROTATE = 1),
							(this.MODE_ROTATE = 2),
							(this.MODE_AUTOROTATE_PHYSICS = 4),
							(this.MODE_ONEROTATION = 5),
							(this.MODE_ONEROTATION_SLOW = 6),
							(this.MODE_DRAG = 7),
							(this.auto_rotate_physics_dir = 'left'),
							(this.auto_rotate_timer = null),
							(this.auto_rotate_physics_timer = null),
							(this.auto_rotate_physics_speed = 0),
							(this.auto_rotate_frame_period = 0),
							(this._position_cache = {}),
							(this.viewer_action_stopped_timeout = null),
							(this.viewer_action_stopped_timeout_time = 400),
							(this.pointer_down_pressed = !1),
							(this.resize_observer = null),
							(this.resize_obj = null),
							(this.resize_handler = null),
							(this.orientation_change_handler = null),
							this.emperor(),
							this.initialize_params(this.initial_params),
							(this.params.config_url || this.params.xml_url) &&
								((this.sequence = new Wr(this.params.ovus_cache_modifier)),
								Hr.a
									.all([this.load_config_xml(), this.load_content_xml()])
									.then(
										function (e) {
											if (e[0] && e[1]) {
												if (
													(n.parse_params(n.initial_params),
													n.parseGuiColors(),
													!0 === e[1])
												)
													n._parse_content_data();
												else {
													var t = 'no' !== n.params.content2;
													(t = t && n._parse_content2_xml(e[1])) ||
														n._parse_content_xml(e[1]);
												}
												(n.mode = n.changeMode(n.MODE_ROTATE)),
													n.setup_viewer();
											}
										},
										function (e) {}
									));
					}
					return (
						(function (e, t, i) {
							t && _e(e.prototype, t), i && _e(e, i);
						})(e, [
							{
								key: 'on_activity_end',
								value: function () {
									var e = this;
									this.viewer_action_stopped_timeout &&
										window.clearTimeout(this.viewer_action_stopped_timeout),
										(this.viewer_action_stopped_timeout = window.setTimeout(
											function () {
												e.viewer_activity_end();
											},
											this.viewer_action_stopped_timeout_time
										));
								},
							},
							{
								key: 'viewer_activity_end',
								value: function () {
									(this.viewer_action_stopped_timeout = null),
										this.is_destroyed ||
											this.is_panning ||
											this.rotating ||
											this.scalling ||
											this.pointer_down_pressed ||
											this.dispatchEvent('activity_end');
								},
							},
							{
								key: 'get_base_scale_obj',
								value: function (e, t) {
									var i = e + '_' + t;
									return void 0 !== this.base_scales_upsized[i]
										? this.base_scales_upsized[i]
										: this.base_scale_obj;
								},
							},
							{
								key: 'pl_get_vangle_pack_index',
								value: function () {
									var e,
										t,
										i = 0,
										n = 0,
										r = !1;
									if (
										(this.pl_vangles_loaded.push(
											this.pl_current_vangle_pack_index
										),
										this.pl_vangles_loaded.length !== this.vangles_no)
									) {
										for (
											e = this.pl_initial_vangle_pack_index,
												t = this.pl_initial_vangle_pack_index;
											0 < t &&
											(t--,
											n++,
											~this.pl_vangles_loaded.indexOf(t) || !(0 <= t));

										);
										for (
											;
											e < this.vangles_no &&
											(e++,
											i++,
											~this.pl_vangles_loaded.indexOf(e) ||
												!(e < this.vangles_no));

										);
										r =
											i <= n
												? !~this.pl_vangles_loaded.indexOf(e) &&
												  e < this.vangles_no
													? e
													: t
												: !~this.pl_vangles_loaded.indexOf(t) && 0 <= t
												? t
												: e;
									}
									return !1 !== r && (this.pl_current_pack_index = 0), r;
								},
							},
							{
								key: 'initialize_params',
								value: function (e) {
									var t, i;
									e.ovus_folder &&
										('/' === e.ovus_folder[e.ovus_folder.length - 1] &&
											(e.ovus_folder = e.ovus_folder.replace(/\/$/g, '')),
										(this.params.ovus_folder = e.ovus_folder)),
										(this.params.use_config_url = 'no' !== e.use_config_url),
										e.content_data &&
											(this.params.content_data = e.content_data),
										e.config_url
											? (this.params.config_url = e.config_url)
											: (this.params.config_url = this.join_path(
													e.ovus_folder,
													'config.xml'
											  )),
										!(t = e.ovus_folder) && e.base && (t = e.base),
										(this.params.folder_path = t),
										(i = 'content.xml'),
										(this.params.content2 = 'no'),
										e.content2 &&
											'yes' === e.content2 &&
											((i = 'content2.xml'), (this.params.content2 = 'yes')),
										this.params.xml_url ||
											(this.params.xml_url = this.join_path(t, i)),
										(this.params.dialog_content = e.dialog_content),
										e.ovus_cache_modifier &&
											((this.params.ovus_cache_modifier =
												e.ovus_cache_modifier),
											e.webp_support &&
												'yes' === e.ovus_cache_modifier_webp &&
												(this.params.ovus_cache_modifier += '1')),
										0 === e.border_frame ||
											e.border_frame ||
											(e.border_frame = e.first_frame);
								},
							},
							{
								key: 'join_path',
								value: function (e, t) {
									if (!e) return t;
									var i = '/';
									return (
										('/' != e[0 | (e.length - 1)] && '/' != t[0]) || (i = ''),
										e + i + t
									);
								},
							},
							{
								key: 'parse_params',
								value: function (e) {
									var t,
										i,
										n,
										r,
										o = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8})$/i,
										s = this.params.background_color;
									for (t in e) e.hasOwnProperty(t) && (this.params[t] = e[t]);
									'get-from-config' === e.hotspot_images_background_color &&
										(this.params.hotspot_images_background_color = s),
										(i = this.params.folder_path),
										this.params.image_folder ||
											(this.params.image_folder = this.join_path(i, 'images')),
										'/' !=
											this.params.image_folder[
												0 | (this.params.image_folder.length - 1)
											] && (this.params.image_folder += '/'),
										void 0 !== this.params.rotate_dir &&
											void 0 === this.params.auto_rotate_dir &&
											(this.params.auto_rotate_dir = this.params.rotate_dir),
										(this.params.background_color =
											this.params.background_color.replace('0x', '#')),
										o.test(this.params.background_color) ||
											((n = Fr()(this.params.background_color)),
											(this.params.background_color = isNaN(n)
												? '#FFFFFF'
												: '#' + ('00000' + (0 | n).toString(16)).substr(-6))),
										this.params.hotspot_images_background_color
											? ((this.params.hotspot_images_background_color =
													this.params.hotspot_images_background_color.replace(
														'0x',
														'#'
													)),
											  o.test(this.params.hotspot_images_background_color) ||
													(this.params.hotspot_images_background_color =
														'#00000000'))
											: (this.params.hotspot_images_background_color =
													this.params.background_color),
										9 === this.params.background_color.length &&
											((this.params.background_color_opacity =
												this.params.background_color.substr(7, 9)),
											(this.params.background_color =
												this.params.background_color.substr(0, 7))),
										'yes' === this.params.border &&
											((this.params.border_color =
												this.params.border_color.replace('0x', '#')),
											o.test(this.params.border_color) ||
												(this.params.border_color = '#FFFFFF')),
										'yes' !== this.params.auto_rotate ||
											('no' !== this.params.teaser && this.params.teaser) ||
											(this.params.teaser = 'autorotate'),
										'autorotate' === this.params.teaser
											? (this.params.auto_rotate = 'yes')
											: ('play' === this.params.teaser ||
													'playonerotation' === this.params.teaser ||
													this.params.teaser,
											  (this.params.auto_rotate = 'no')),
										(this.viewer_base = this.params.viewer_base),
										(this.auto_rotate_dir =
											'left' === this.params.auto_rotate_dir ? 1 : -1),
										(this.rotate_dir =
											'left' === this.params.rotate_dir ? 1 : -1),
										(this.vmove_dir =
											'down' === this.params.vmove_dir ? -1 : 1),
										(this.vmove = 'yes' === this.params.vmove),
										(this.auto_drag_switch = !0),
										(this.auto_drag_switch = !this.is_mobile),
										(this.auto_drag_switch = !(
											'no' === this.params.auto_drag_switch
										)),
										(this.auto_rotate_speed = 1 * this.params.frame_rate),
										(this.mousewheel_enabled = 'no' !== this.params.mousewheel),
										(this.canvas.style.backgroundColor =
											this.params.background_color),
										'zoomin' === this.params.teaser &&
											(this.vport.style.backgroundColor =
												this.params.background_color),
										this.params.lang &&
										'auto' === this.params.lang &&
										'undefined' != typeof navigator &&
										navigator.languages
											? (2 < (r = navigator.languages[0]).length &&
													(r = r.substr(0, 2)),
											  this.ovlang.init(r))
											: this.ovlang.init(this.params.lang),
										this.params.background_color_opacity &&
											((this.canvas.style.backgroundColor = this.hexToRgba(
												this.params.background_color.substr(1, 6) +
													this.params.background_color_opacity
											)),
											'zoomin' === this.params.teaser &&
												(this.vport.style.backgroundColor = this.hexToRgba(
													this.params.background_color.substr(1, 6) +
														this.params.background_color_opacity
												))),
										'yes' === this.params.border
											? (this.border_style = this.vport.style.border =
													'1px solid ' + this.params.border_color)
											: (this.border_style = this.vport.style.border = 'none'),
										'desktop' === this.params.buttons_type
											? (this.use_mobile_buttons = !1)
											: 'mobile' === this.params.buttons_type
											? (this.use_mobile_buttons = !0)
											: (this.use_mobile_buttons = this.is_mobile),
										'no' === this.params.hires_support &&
											(this.devicePixelRatio = 1),
										this.params.teaser &&
											'yes' === this.params.lazy_partial_load &&
											'autorotate' === this.params.teaser &&
											(this.params.lazy_partial_load = 'no'),
										this.params.teaser &&
											'yes' === this.params.partial_load &&
											~[
												'onerotation',
												'onerotationslow',
												'playonerotation',
												'playonerotationslow',
											].indexOf(this.params.teaser) &&
											(this.params.partial_load = 'no');
								},
							},
							{
								key: 'load_config_xml',
								value: function () {
									var e = this;
									return (
										this.params.use_config_url,
										new To(this.params.config_url, null, 0)
											.load()
											.then(function (t) {
												var i,
													n,
													r,
													o,
													s,
													a = t.responseXML,
													l = null;
												if (
													(a &&
														1 ===
															(i = a.getElementsByTagName('sequence-config'))
																.length &&
														1 !==
															(l = i[0].getElementsByTagName('viewer-params'))
																.length &&
														(l = null),
													l)
												)
													for (r = l[(n = 0)].childNodes.length; n < r; n++)
														'image_folder' !== l[0].childNodes[n].nodeName &&
															'xml_url' !== l[0].childNodes[n].nodeName &&
															(void 0 ===
																(s = (o = l[0].childNodes[n]).textContent) &&
																(s = o.text),
															'continuous' === o.nodeName
																? (e.params.continous = s)
																: 'gui_background' === o.nodeName ||
																  'gui_foreground' === o.nodeName ||
																  'gui_foreground_active' === o.nodeName
																? s.length && (e.params[o.nodeName] = s)
																: (e.params[o.nodeName] = s));
												return e.is_in_page(e.container);
											})
									);
								},
							},
							{
								key: 'load_content_xml',
								value: function () {
									var e = this;
									return (
										this.params.content_data,
										new To(this.params.xml_url, null, 0)
											.load()
											.then(function (t) {
												var i = t.responseXML;
												return !!e.is_in_page(e.container) && i;
											})
									);
								},
							},
							{
								key: '_parse_content_data',
								value: function () {
									var e,
										t,
										i,
										n,
										r,
										o,
										s,
										a = this.params.content_data;
									for (
										this.max_width = a.max_width,
											this.max_height = a.max_height,
											this.vangles_no = 1 * a.vangles,
											this.tiled_image = new Ro(
												this.max_width,
												this.max_height,
												this.sequence,
												this.tiles_obj,
												this.devicePixelRatio
											),
											t = 0,
											i = (e = a.scales).length;
										t < i;
										t++
									)
										(n = e[t]),
											this.sequence.add_scale(
												10 * n.value,
												n.width,
												n.height,
												n.tile_width,
												n.tile_height,
												n.cols,
												n.rows,
												'' + n.value
											),
											this.tiled_image.addTiledScale(
												n.width,
												n.height,
												n.cols,
												n.rows,
												n.tile_width,
												n.tile_height,
												10 * n.value
											);
									for (
										this.tiled_image.sort_by_scale(),
											r = a.images.length,
											o = 0;
										o < r;
										o++
									)
										(s = a.images[o]),
											this.sequence.images.push(s),
											this.frames_no++;
								},
							},
							{
								key: '_parse_content_xml',
								value: function (e) {
									var t,
										i,
										n,
										r,
										o,
										s,
										a,
										l,
										h,
										c,
										u,
										_,
										d,
										f,
										p,
										m,
										v,
										g = e.getElementsByTagName('sequence');
									if (1 !== g.length) return !1;
									if (
										((this.max_width = 1 * g[0].getAttribute('maxWidth')),
										(this.max_height = 1 * g[0].getAttribute('maxHeight')),
										0 === (t = g[0].getElementsByTagName('img')).length)
									)
										return !1;
									if (1 !== (i = t[0].getElementsByTagName('scales')).length)
										return !1;
									if (0 === (n = i[0].getElementsByTagName('scale')).length)
										return !1;
									for (
										this.tiled_image = new Ro(
											this.max_width,
											this.max_height,
											this.sequence,
											this.tiles_obj,
											this.devicePixelRatio
										),
											r = 0,
											o = n.length;
										r < o;
										r++
									)
										(s = n[r].getAttribute('width')),
											(a = n[r].getAttribute('height')),
											(l = n[r].getAttribute('name')),
											(h = n[r].getAttribute('value')),
											(c = n[r].getAttribute('tile_width')),
											(u = n[r].getAttribute('tile_height')),
											(_ = n[r].getAttribute('rows')),
											(d = n[r].getAttribute('cols')),
											this.sequence.add_scale(
												10 * h,
												1 * s,
												1 * a,
												1 * c,
												1 * u,
												1 * d,
												1 * _,
												l
											),
											this.tiled_image.addTiledScale(
												1 * s,
												1 * a,
												1 * d,
												1 * _,
												1 * c,
												1 * u,
												10 * h
											);
									for (
										this.tiled_image.sort_by_scale(), f = 0, p = t.length;
										f < p;
										f++
									)
										(m = t[f].getAttribute('name')),
											(v = t[f].getAttribute('ext')),
											(this.sequence.images[f] = { name: m, ext: v }),
											this.frames_no++;
									return !(this.vangles_no = 1);
								},
							},
							{
								key: '_parse_content2_xml',
								value: function e(t) {
									function i(e) {
										if (0 === e.length) throw y;
										return e[0];
									}
									var n,
										r,
										o,
										s,
										a,
										l,
										h,
										c,
										u,
										_,
										d,
										f,
										p,
										m,
										v,
										g,
										A,
										w,
										y = {};
									try {
										for (
											r = i(
												(n = i(
													i(
														t.getElementsByTagName('orbitvu')
													).getElementsByTagName('sequence3d')
												)).getElementsByTagName('images')
											),
												o = i(
													n.getElementsByTagName('scales')
												).getElementsByTagName('scale'),
												s = r.getAttribute('name'),
												a = r.getAttribute('ext'),
												l = 1 * n.getAttribute('hangles'),
												i(o),
												this.max_width = 1 * r.getAttribute('maxWidth'),
												this.max_height = 1 * r.getAttribute('maxHeight'),
												this.vangles_no = 1 * n.getAttribute('vangles'),
												this.tiled_image = new Ro(
													this.max_width,
													this.max_height,
													this.sequence,
													this.tiles_obj,
													this.devicePixelRatio
												),
												h = 0,
												c = o.length;
											h < c;
											h++
										)
											(u = o[h].getAttribute('width')),
												(_ = o[h].getAttribute('height')),
												(f = '' + (d = o[h].getAttribute('value'))),
												(p = o[h].getAttribute('tile_width')),
												(m = o[h].getAttribute('tile_height')),
												(v = o[h].getAttribute('rows')),
												(g = o[h].getAttribute('cols')),
												this.sequence.add_scale(
													10 * d,
													1 * u,
													1 * _,
													1 * p,
													1 * m,
													1 * g,
													1 * v,
													f
												),
												this.tiled_image.addTiledScale(
													1 * u,
													1 * _,
													1 * g,
													1 * v,
													1 * p,
													1 * m,
													10 * d
												);
										for (this.tiled_image.sort_by_scale(), A = 0; A < l; A++)
											(w = s + '0_' + A),
												this.sequence.images.push({
													new_name: s,
													num: A,
													name: w,
													ext: a,
												}),
												this.frames_no++;
									} catch (e) {
										if (e !== y) throw e;
										return !1;
									}
									return !0;
								},
							},
							{
								key: 'setup_viewer',
								value: function () {
									var e, t, i, n, r;
									(this.sequence.base_url = this.params.image_folder),
										(this.viewer_api = null),
										(e = ue()) && (this.viewer_api = new e(this)),
										this.create_sizer_object(this.container),
										(i = t = null),
										'%' !== (n = this.params.width)[n.length - 1] &&
											(t = Fr()(n)),
										'%' !== (r = this.params.height)[r.length - 1] &&
											(i = Fr()(r)),
										(this.init_width = t),
										(this.init_height = i),
										this.run_viewer_delayed();
								},
							},
							{
								key: 'create_sizer_object',
								value: function (e) {
									var t = this,
										i = this;
									(this.resize_listener = function (e) {
										var i = e.target || e.srcElement;
										i.__resizeRAF__ && cancelAnimationFrame(i.__resizeRAF__),
											(i.__resizeRAF__ = requestAnimationFrame(function () {
												t.is_loaded &&
													!t.is_doing_fullscreen &&
													(!t.has_html5_fullscreen() &&
													null !== t.resize_handler &&
													t.fullscreen
														? t.resize_handler()
														: t.resizeViewport());
											}));
									}),
										'undefined' == typeof ResizeObserver
											? ((this.resize_obj = document.createElement('object')),
											  this.resize_obj.setAttribute(
													'style',
													'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;'
											  ),
											  (this.resize_obj.__resizeElement__ = e),
											  (this.resize_obj.onload = function (e) {
													i.sizer_object_data_set &&
														((this.contentDocument.defaultView.__resizeTrigger__ =
															this.__resizeElement__),
														this.contentDocument.defaultView.removeEventListener(
															'resize',
															i.resize_listener
														),
														this.contentDocument.defaultView.addEventListener(
															'resize',
															i.resize_listener
														));
											  }),
											  (this.resize_obj.type = 'text/html'),
											  e.appendChild(this.resize_obj),
											  (this.resize_obj.data = 'about:blank'),
											  (this.sizer_object_data_set = !0))
											: ((this.resize_observer = new ResizeObserver(function (
													e
											  ) {
													t.resize_listener(e[0]);
											  })),
											  this.resize_observer.observe(e));
								},
							},
							{
								key: 'switch_sizer_object',
								value: function (e) {
									this.resize_observer
										? (this.resize_observer.disconnect(),
										  this.resize_observer.observe(e))
										: this.resize_obj &&
										  (this.resize_obj.parentNode.removeChild(this.resize_obj),
										  e.appendChild(this.resize_obj));
								},
							},
							{
								key: 'conditionally_resize_viewport',
								value: function (e, t) {
									this.is_doing_fullscreen ||
										this.is_doing_html5_fullscreen ||
										this.resizeViewport(e, t);
								},
							},
							{
								key: 'setup_fullscreen',
								value: function (e, t) {
									var i = this.has_html5_fullscreen();
									'' + this.params.style == '4' ||
									'no' === this.params.fullscreen_enabled ||
									(!i && window !== window.top)
										? (this.control_panel.hide_fullscreen(),
										  'fullscreen' === this.doubletap_mode &&
												(this.doubletap_mode = 'zoom'))
										: (this.control_panel.show_fullscreen(),
										  'fullscreen' !== this.doubletap_mode &&
												(this.params.doubletap_mode
													? (this.doubletap_mode = this.params.doubletap_mode)
													: (this.doubletap_mode = 'fullscreen')));
								},
							},
							{
								key: 'handle_first_frame_preloaded',
								value: function () {
									(this.queue_obj.hangle = this.hangle =
										this.params.first_frame),
										(this.queue_obj.vangle = this.vangle =
											this.params.first_row),
										(this.container.style.backgroundImage = ''),
										this.render_frame(
											this.params.first_row,
											this.params.first_frame,
											!0,
											!0
										),
										'play' === this.params.teaser ||
										'playonerotation' === this.params.teaser ||
										'playonerotationslow' === this.params.teaser
											? (this.loader && this.loader.destroy(),
											  (this.teaser_play = new Bo(this, this.preloader_start)))
											: this.preloader_start();
								},
							},
							{
								key: 'handle_all_frames_preloaded',
								value: function () {
									var e,
										t,
										i,
										n,
										r,
										o,
										s,
										a,
										l,
										h = this;
									if (
										this.is_in_page(this.container) &&
										((e = this.base_frames.counter),
										(t = this.frames_no),
										e === this.vangles_no * t && !this.is_loaded)
									) {
										for (
											this.changeMode(this.MODE_ROTATE), i = 0;
											i < this.vangles_no;
											i++
										)
											for (n = 0; n < this.frames_no; n++)
												(i === 1 * this.params.first_row &&
													n === 1 * this.params.first_frame) ||
													this.render_frame(i, n, !1, !1);
										if (
											('yes' === this.params.loader && this.loader.destroy(),
											this.events.attachEvents(),
											window.setTimeout(function () {
												var e, t;
												h.is_destroyed ||
													('yes' === h.params.auto_rotate &&
														1 < h.frames_no &&
														h.changeMode(h.MODE_AUTOROTATE),
													'onerotation' === h.params.teaser && 1 < h.frames_no
														? h.changeMode(h.MODE_ONEROTATION)
														: 'onerotationslow' === h.params.teaser &&
														  1 < h.frames_no
														? h.changeMode(h.MODE_ONEROTATION_SLOW)
														: 'play' === h.params.teaser
														? 1 < h.frames_no && h.changeMode(h.MODE_AUTOROTATE)
														: 'playonerotation' === h.params.teaser
														? 1 < h.frames_no &&
														  h.changeMode(h.MODE_ONEROTATION)
														: 'playonerotationslow' === h.params.teaser
														? 1 < h.frames_no &&
														  h.changeMode(h.MODE_ONEROTATION_SLOW)
														: 'zoomin' === h.params.teaser &&
														  (h.vport.classList.add('zoomin'),
														  (e = null),
														  (e = function () {
																h.vport.classList.remove('zoomin'),
																	(h.vport.style.backgroundColor = ''),
																	h.removeListener('interaction_start', e);
														  }),
														  h.addListener('interaction_start', e)),
													('all' === (t = h.params.html5_initial_info) ||
														('touch' === t && (h.ios || h.is_android)) ||
														('desktop' === t && !h.ios && !h.is_android)) &&
														((h.initial_info_window = new uo(
															h,
															h.vport,
															h.params.dialog_content,
															'initial',
															null,
															function () {
																h.initial_info_window = null;
															}
														)),
														h.initial_info_window.open()));
											}, 300),
											(this.is_loaded = !0),
											this.transform({ scale: 0 }),
											this.utils.handle_beacon(this.params.beacon_url),
											this.params.external_access_init &&
												this.viewer_api &&
												((r = this.params.external_access_init),
												window[r] && window[r](this.viewer_api)),
											this.dispatchEvent('initialized'),
											this.resizeViewport(),
											this.is_partial_load)
										) {
											for (o in ((this.pl_frames_count = 0),
											(this.pl_progress_bar = 0),
											(this.pl_initial_vangle_pack_index =
												this.params.first_row),
											(this.pl_current_vangle_pack_index =
												this.pl_initial_vangle_pack_index),
											(this.pl_current_pack_index = 0),
											(this.pl_frames_renderer = []),
											(this.pl_vangles_loaded = []),
											this.pl_frames_pack))
												if (this.pl_frames_pack.hasOwnProperty(o))
													for (s in this.pl_frames_pack[o])
														if (this.pl_frames_pack[o].hasOwnProperty(s))
															for (a in this.pl_frames_pack[o][s])
																this.pl_frames_pack[o][s].hasOwnProperty(a) &&
																	((this.pl_frames_pack[o][s][a] = {
																		vangle: o,
																		hangle: this.pl_frames_pack[o][s][a],
																		should_load: !0,
																	}),
																	this.pl_frames_count++);
											this.dispatchEvent('partial_loading', 0),
												(this.partialLoader = new ko(
													this.vport,
													this.hexToRgb(this.params.gui_background)
												)),
												(this.partial_loader_timeout =
													this.utils.request_timeout(function () {
														h.partialLoader.show();
													}, 1e3)),
												this.lazy_partial_load
													? ((l = function e() {
															h.pl_set_frames_pack_load(),
																h.removeListener('interaction_start', e);
													  }),
													  this.addListener('interaction_start', l))
													: this.pl_set_frames_pack_load();
										} else
											this.dispatchEvent('viewer_initialized', this.viewer_api);
									}
								},
							},
							{
								key: 'setup_handlers',
								value: function () {
									var e = this;
									(this.handle_image_data_loaded = function (t) {
										var i,
											n,
											r = t.image_data,
											o = t.vangle,
											s = t.hangle;
										if (e.container && e.is_in_page(e.container)) {
											if (
												(e.base_frames[o] || (e.base_frames[o] = []),
												e.base_frames[o][s])
											)
												return void (r = null);
											(e.base_frames[o][s] = r),
												0 === e.base_frames.counter &&
													e.dispatchEvent('loading', 0),
												(e.base_frames.counter += 1),
												(i = Math.round(
													(e.base_frames.counter /
														(e.frames_no * e.vangles_no)) *
														100
												)),
												1 === e.base_frames.counter
													? (0 < i && e.dispatchEvent('loading', i),
													  e.handle_first_frame_preloaded())
													: e.is_partial_load
													? r &&
													  (e.pl_base_frames_loaded++,
													  (i = Math.round(
															(e.pl_base_frames_loaded /
																e.pl_base_frames_to_load) *
																100
													  )),
													  'yes' === e.params.loader &&
															e.loader.setText(i + '%'),
													  e.dispatchEvent('loading', i))
													: ('yes' === e.params.loader &&
															e.loader.setText(i + '%'),
													  e.dispatchEvent('loading', i)),
												(n = e.frames_no * e.vangles_no),
												e.base_frames.counter === n &&
													(e.is_partial_load &&
														e.dispatchEvent(
															'partially_initialized',
															e.viewer_api
														),
													e.handle_all_frames_preloaded());
										}
									}),
										(this.handle_partial_frames_image_data_loaded = function (
											t
										) {
											var i,
												n,
												r = t.image_data,
												o = t.vangle,
												s = t.hangle;
											if (
												(e.base_frames[o] || (e.base_frames[o] = []),
												e.base_frames[o][s])
											)
												r = null;
											else {
												if (
													((e.base_frames.counter += 1),
													e.pl_frames_renderer.push({
														hangle: s,
														vangle: o,
														image: r,
													}),
													e.pl_progress_bar++,
													(i = Math.round(
														(100 * e.pl_progress_bar) / e.pl_frames_count
													)),
													e.base_frames.counter == e.pl_current_pack_length)
												) {
													for (n in (e.pl_current_pack_index++,
													e.pl_frames_renderer))
														e.pl_frames_renderer.hasOwnProperty(n) &&
															(e.base_frames[e.pl_frames_renderer[n].vangle][
																e.pl_frames_renderer[n].hangle
															] = e.pl_frames_renderer[n].image);
													(e.pl_frames_renderer = []),
														e.pl_set_frames_pack_load();
												}
												e.dispatchEvent('partial_loading', i),
													e.partialLoader.setProgress(i + '%'),
													null === e.pl_frames_renderer &&
														e.dispatchEvent('viewer_initialized', e.viewer_api);
											}
										}),
										(this.preloader_start = function () {
											var t, i, n, r, o, s, a, l, h, c, u;
											for (
												'yes' !== e.params.loader ||
													e.is_loaded ||
													e.loader.show(),
													e.vangle_loop = 0,
													e.hangle_loop = 0,
													'yes' === e.params.partial_load &&
														5 < e.frames_no &&
														((e.is_partial_load = !0),
														'yes' === e.params.lazy_partial_load &&
															(e.lazy_partial_load = !0)),
													t = [],
													i = 0;
												i < e.vangles_no;
												i++
											)
												for (n = 0; n < e.frames_no; n++)
													e.base_frames[i] && e.base_frames[i][n]
														? t.push({ vangle: i, hangle: n, should_load: !1 })
														: t.push({
																vangle: i,
																hangle: n,
																should_load: !e.is_partial_load,
														  });
											if (e.is_partial_load)
												for (o = 0; o < e.vangles_no; o++) {
													if (
														((e.pl_frames_tree = [
															{ level: 0, value: e.frames_no },
														]),
														e.pl_get_frames_tree(e.pl_frames_tree),
														(r = e.pl_get_frames_pack()),
														o === 1 * e.params.first_row)
													)
														for (s in t)
															t.hasOwnProperty(s) &&
																(void 0 !== r[0] &&
																	~r[0].indexOf(t[s].hangle) &&
																	t[s].vangle === o &&
																	((t[s].should_load = !0),
																	(a = r[0].indexOf(t[s].hangle)),
																	r[0].splice(a, 1),
																	0 === r[0].length && (r[0] = [])),
																void 0 !== r[1] &&
																	~r[1].indexOf(t[s].hangle) &&
																	t[s].vangle === o &&
																	((t[s].should_load = !0),
																	(l = r[1].indexOf(t[s].hangle)),
																	r[1].splice(l, 1),
																	0 === r[1].length && (r[1] = [])),
																void 0 !== r[2] &&
																	~r[2].indexOf(t[s].hangle) &&
																	t[s].vangle === o &&
																	((t[s].should_load = !0),
																	(h = r[2].indexOf(t[s].hangle)),
																	r[2].splice(h, 1),
																	0 === r[2].length && (r[2] = [])));
													for (u in ((c = []), r))
														r.hasOwnProperty(u) &&
															(r[u].length
																? c.push(r[u])
																: e.pl_base_frames_to_load++);
													c.length && e.pl_frames_pack.push(c);
												}
											e.orbitvu_img_loader.init_frames_preload(
												t,
												e.handle_image_data_loaded
											),
												e.orbitvu_img_loader.preload_frames();
										});
								},
							},
							{
								key: 'pl_set_frames_pack_load',
								value: function () {
									var e,
										t = this,
										i = this.getAutoRotateFramePeriod();
									if (
										(i !== this.auto_rotate_frame_period &&
											null != this.auto_rotate_timer &&
											(this.auto_rotate_timer.clear(),
											(this.auto_rotate_frame_period = i),
											(this.auto_rotate_timer = this.utils.request_interval(
												function () {
													t.autorotate_frame();
												},
												i
											))),
										(this.base_frames.counter = 0),
										this.pl_current_pack_index ===
											this.pl_frames_pack[this.pl_current_vangle_pack_index]
												.length &&
											((e = this.pl_current_vangle_pack_index),
											(this.pl_current_vangle_pack_index =
												this.pl_get_vangle_pack_index())),
										!1 === this.pl_current_vangle_pack_index &&
											this.pl_current_pack_index ===
												this.pl_frames_pack[e].length)
									)
										return (
											setTimeout(function () {
												t.is_destroyed ||
													(t.partialLoader &&
														(t.partial_loader_timeout &&
															t.partial_loader_timeout.clear(),
														t.partialLoader.hide()));
											}, 200),
											(this.pl_frames_count = null),
											(this.pl_progress_bar = null),
											(this.pl_initial_vangle_pack_index = null),
											(this.pl_current_vangle_pack_index = null),
											(this.pl_current_pack_index = null),
											(this.pl_frames_renderer = null),
											void (this.pl_vangles_loaded = null)
										);
									(this.pl_current_pack_length =
										this.pl_frames_pack[this.pl_current_vangle_pack_index][
											this.pl_current_pack_index
										].length),
										this.orbitvu_img_loader.init_frames_preload(
											this.pl_frames_pack[this.pl_current_vangle_pack_index][
												this.pl_current_pack_index
											],
											this.handle_partial_frames_image_data_loaded
										),
										this.orbitvu_img_loader.preload_frames();
								},
							},
							{
								key: 'pl_get_frames_tree',
								value: function (e) {
									var t, i;
									for (i in e)
										e.hasOwnProperty(i) &&
											1 <= e[i].value / 2 &&
											((t = [
												{
													value:
														(t = e[i].value / 2) % 1 == 0 ? t : Math.floor(t),
													level: e[i].level + 1,
												},
												{
													value: t % 1 == 0 ? t : Math.ceil(t),
													level: e[i].level + 1,
												},
											]),
											(this.pl_frames_tree = this.pl_frames_tree.concat(t)),
											this.pl_get_frames_tree(t));
								},
							},
							{
								key: 'pl_get_frames_pack',
								value: function () {
									var e,
										t,
										i,
										n,
										r = [];
									for (n in this.pl_frames_tree)
										this.pl_frames_tree.hasOwnProperty(n) &&
											(void 0 === r[(e = this.pl_frames_tree[n].level)] &&
												(r[e] = []),
											(t = this.pl_frames_tree[n].value),
											0 != (i = r[e].length) &&
												(0 != this.params.first_frame
													? (t += r[e][i - 1] - this.params.first_frame)
													: (t += r[e][i - 1])),
											0 != this.params.first_frame &&
												(t += this.params.first_frame),
											t > this.frames_no - 1 && (t -= this.frames_no),
											~r[e].indexOf(t) || r[e].push(t));
									return (
										(r = this.pl_check_frames_pack_length(r)),
										this.pl_remove_duplicates(r)
									);
								},
							},
							{
								key: 'pl_check_frames_pack_length',
								value: function (e) {
									var t, i;
									for (t = 0; t < e.length; t++)
										if (Math.pow(2, t) != e[t].length)
											for (e[t] = [], i = 0; i < this.frames_no; i++)
												e[t].push(i);
									return e;
								},
							},
							{
								key: 'pl_remove_duplicates',
								value: function (e) {
									var t,
										i,
										n,
										r,
										o = [],
										s = 0;
									for (t = e.length - 1; 0 < t; t--)
										for (i = 0; i < e[t].length; i++)
											~e[t - 1].indexOf(e[t][i]) && (e[t][i] = null);
									for (n = 0; n < e.length; n++) {
										for (r = 0; r < e[n].length; r++)
											null !== e[n][r] &&
												(void 0 === o[s] && (o[s] = []), o[s].push(e[n][r]));
										void 0 !== o[s] && s++;
									}
									return o;
								},
							},
							{
								key: 'render_frame',
								value: function (e, t, i, n) {
									var r,
										o,
										s,
										a,
										l,
										h,
										c = this.base_frames[e][t];
									if (c) {
										if (
											((r = c.naturalWidth),
											(o = c.naturalHeight),
											(s = this.get_base_scale_obj(e, t)),
											(a = this.get_translate(s, s.images[0][0], {})),
											n)
										) {
											if ((i && (this.is_initializing = !0), this.is_destroyed))
												return;
											(l = r * a.scale),
												(h = o * a.scale),
												this.canvas_context.drawImage(
													c,
													a.coords.x * this.devicePixelRatio,
													a.coords.y * this.devicePixelRatio,
													Math.round(l * this.devicePixelRatio),
													Math.round(h * this.devicePixelRatio)
												),
												i && this.should_tiles_fade_in(c),
												(this.base_frames[e][t] = c),
												(this.current_frame_coords = {
													x: a.coords.x,
													y: a.coords.y,
													scale: a.scale,
												});
										}
										return c;
									}
									this.base_frames[e][t] = null;
								},
							},
							{
								key: 'init_ui',
								value: function () {
									var e, t, i;
									(this.params.first_frame = Fr()(this.params.first_frame)),
										isNaN(this.params.first_frame) &&
											(this.params.first_frame = 0),
										0 < this.params.first_frame &&
											(this.params.first_frame -= 1),
										this.params.first_frame >= this.frames_no &&
											(this.params.first_frame = 0),
										0 < this.params.border_frame &&
											(this.params.border_frame -= 1),
										this.params.border_frame >= this.frames_no &&
											(this.params.border_frame = 0),
										(this.params.first_row = Fr()(this.params.first_row)),
										isNaN(this.params.first_row) && (this.params.first_row = 0),
										0 < this.params.first_row && (this.params.first_row -= 1),
										this.params.first_row >= this.vangles_no &&
											(this.params.first_row = 0),
										(this.doubletap_mode = this.params.doubletap_mode),
										1 < this.vangles_no &&
											((this.vport.style.touchAction = 'none'),
											(this.tiles_obj.style.touchAction = 'none')),
										(this.events = new Qo(this.vport, this, {
											doubletap_mode: this.doubletap_mode,
										})),
										'yes' === this.params.loader &&
											(this.loader = new xo(
												this.vport,
												this.id,
												this.width / 2,
												this.height / 2,
												this
											)),
										this.params.branding &&
											(this.brandingButton = new fo(this.vport, this)),
										'yes' === this.params.social &&
											(this.social = new Eo(this.vport, this)),
										this.params.logo_src &&
											(this.brandingLogo = new _o(this.vport, this)),
										(this.html5_hint = new po(this.vport, this)),
										(this.control_panel = new co(this)),
										this.update_zoom_buttons(),
										this.setup_fullscreen(),
										'undefined' != typeof OVDebugger &&
											(this.ov_debugger = new OVDebugger(
												this.vport,
												this.params.dialog_content,
												this
											)),
										(this.base_frames.counter = 0),
										(this.tiled_image.frame_divider = this.frame_divider),
										(this.tiled_image.blank_url =
											this.viewer_base + 'blank.gif'),
										this.params.viewer_api_init &&
											this.viewer_api &&
											((e = this.params.viewer_api_init),
											window[e] && window[e](this.viewer_api)),
										this.nosize &&
											((t = this.vport.clientWidth * this.devicePixelRatio),
											(i = this.vport.clientHeight * this.devicePixelRatio),
											(1 * this.canvas.width === t &&
												1 * this.canvas.height === i) ||
												((this.canvas.width = t), (this.canvas.height = i))),
										(this.orbitvu_img_loader = new Oo(
											this.frame_divider,
											this.base_scale,
											this.sequence,
											this
										)),
										this.orbitvu_img_loader
											.preload_frame(
												this.params.first_row,
												this.params.first_frame
											)
											.then(this.handle_image_data_loaded, function (e) {});
								},
							},
							{
								key: 'run_viewer',
								value: function () {
									this.init_viewer(this.init_width, this.init_height),
										this.setup_handlers(),
										this.init_ui(),
										this.refreshAnimationFrame();
								},
							},
							{
								key: 'run_viewer_delayed',
								value: function () {
									var e,
										t,
										i = this,
										n = this.container;
									this.init_width && this.init_height
										? this.run_viewer()
										: 0 === n.offsetWidth &&
										  0 === n.offsetHeight &&
										  void 0 !== n.style.animationName
										? ((this.style_animation = document.createElement('style')),
										  (e =
												'ov_display_detector_' +
												Fr()(99999999 * Math.random())),
										  (this.style_animation.innerHTML =
												'@keyframes ' +
												e +
												' {  from {  outline: 1px solid transparent  } to {  outline: 0px solid transparent }  }\n#' +
												this.id +
												' { animation-duration: 0.001s; animation-name: ' +
												e +
												';}'),
										  (t = function t(n) {
												n.animationName === e &&
													(n.target.removeEventListener(
														'animationstart',
														t,
														!1
													),
													document.head.removeChild(i.style_animation),
													(i.style_animation = null),
													i.run_viewer());
										  }),
										  n.addEventListener('animationstart', t, !1),
										  document.head.appendChild(this.style_animation))
										: this.run_viewer();
								},
							},
							{
								key: 'emperor',
								value: function () {
									var e = this;
									this.emperor_timeout &&
										(this.emperor_timeout.clear(),
										(this.emperor_timeout = null)),
										(
											document.contains
												? document.contains(this.container)
												: document.body.contains(this.container)
										)
											? (this.emperor_timeout = this.utils.request_timeout(
													function () {
														e.emperor();
													},
													5e3
											  ))
											: this.destroy();
								},
							},
							{
								key: 'destroy',
								value: function () {
									this.viewer_action_stopped_timeout &&
										window.clearTimeout(this.viewer_action_stopped_timeout),
										this.emperor_timeout && this.emperor_timeout.clear(),
										this.auto_rotate_timer && this.auto_rotate_timer.clear(),
										this.partial_loader_timeout &&
											this.partial_loader_timeout.clear(),
										this.auto_rotate_physics_timer &&
											this.auto_rotate_physics_timer.clear(),
										this.rebuild_tiles_timeout &&
											window.clearTimeout(this.rebuild_tiles_timeout),
										this.scalling_timeout &&
											window.clearTimeout(this.scalling_timeout),
										this.centering_timeout &&
											window.clearTimeout(this.centering_timeout),
										this.orbitvu_img_loader &&
											(this.orbitvu_img_loader.destroy(),
											(this.orbitvu_img_loader = null)),
										this.is_destroyed ||
											((this.is_destroyed = !0),
											this.events && this.events.removeEvents(),
											this.resize_observer &&
												(this.resize_observer.disconnect(),
												(this.resize_observer = null)),
											this.resize_obj && (this.resize_obj = null),
											(this.resize_handler = null),
											(this.orientation_change_handler = null),
											this.rotation_obj && Ir.killTweensOf(this.rotation_obj),
											this.frameObj && Ir.killTweensOf(this.frameObj),
											this.fullscreen_event_handler &&
												Io.a.removeEventListener(
													'fullscreenchange',
													this.fullscreen_event_handler
												),
											delete this.viewer_api,
											this.tiled_image &&
												(this.tiled_image.destroy(), delete this.tiled_image),
											this.control_panel && this.control_panel.destroy(),
											this.container && (this.container.innerHTML = ''),
											(this.base_frames = null),
											(this.container = null),
											(this.canvas = null),
											(this.canvas_context = null),
											(this.tiles_obj = null),
											(this.tiles_obj_context = null));
								},
							},
							{
								key: 'is_in_page',
								value: function (e) {
									return e !== document.body && document.body.contains(e);
								},
							},
							{
								key: 'parseGuiColors',
								value: function () {
									(this.params.gui_background =
										this.params.gui_background.substr(2, 8)),
										(this.params.gui_foreground =
											this.params.gui_foreground.substr(2, 8)),
										(this.params.gui_foreground_active =
											this.params.gui_foreground_active.substr(2, 8)),
										(this.params.teaserplay_overlay_color =
											this.params.teaserplay_overlay_color.substr(2, 8));
								},
							},
							{
								key: 'getAutoRotateFramePeriod',
								value: function () {
									if (this.is_partial_load && this.partialLoader.isLoading()) {
										var e,
											t = this.pl_get_loaded_hangles();
										return (
											1e3 <
												(e =
													(1 /
														((this.auto_rotate_speed * t.length) /
															this.frames_no)) *
													1e3) && (e = 1e3),
											e
										);
									}
									return (1 / this.auto_rotate_speed) * 1e3;
								},
							},
							{
								key: 'changeMode',
								value: function (e) {
									var t = this;
									e === this.MODE_AUTOROTATE
										? (null !== this.auto_rotate_physics_timer &&
												(this.auto_rotate_physics_timer.clear(),
												(this.auto_rotate_physics_timer = null)),
										  (this.auto_rotate_frame_period =
												this.getAutoRotateFramePeriod()),
										  (this.auto_rotate_timer = this.utils.request_interval(
												function () {
													t.autorotate_frame();
												},
												this.auto_rotate_frame_period
										  )),
										  (this.rotating = !0))
										: e === this.MODE_AUTOROTATE_PHYSICS
										? ((this.rotating = !0),
										  (this.auto_rotate_physics_timer =
												this.utils.request_timeout(function e() {
													var i, n, r, o, s;
													t.is_destroyed ||
														(0 ===
															(i = Math.round(t.auto_rotate_physics_speed)) &&
															(i = 1),
														(n = null),
														1,
														(r =
															'left' === t.auto_rotate_physics_dir
																? ((n =
																		t.get_transformed_value('hangle') -
																		i * t.rotate_dir),
																  -1 * t.rotate_dir)
																: ((n =
																		t.get_transformed_value('hangle') +
																		i * t.rotate_dir),
																  t.rotate_dir)),
														(o = !1),
														'yes' !== t.params.continous &&
															((s = t.get_closest_frame(n, t.vangle)),
															t.get_rotate_to_dir(
																t.get_transformed_value('hangle'),
																s.hangle,
																'no',
																t.params.border_frame,
																t.frames_no
															) !== r && (o = !0)),
														o
															? (t.changeMode(t.MODE_ROTATE),
															  (t.rotating = !1),
															  t.transform({}))
															: (t.transform({ hangle: n }),
															  (t.auto_rotate_physics_speed /=
																	t.SLOWDOWN_FACTOR),
															  (t.auto_rotate_physics_speed /= 1.01),
															  t.auto_rotate_physics_speed < 1
																	? 0.05 < t.auto_rotate_physics_speed
																		? (t.auto_rotate_physics_timer =
																				t.utils.request_timeout(
																					e,
																					(1 / t.auto_rotate_physics_speed) * 10
																				))
																		: (t.changeMode(t.MODE_ROTATE),
																		  (t.rotating = !1),
																		  t.transform({}))
																	: (t.auto_rotate_physics_timer =
																			t.utils.request_timeout(e, 10))));
												}, 10)))
										: e === this.MODE_ONEROTATION
										? ((this.rotating = !0), this.oneRotation())
										: e === this.MODE_ONEROTATION_SLOW
										? ((this.rotating = !0), this.oneRotationSlow())
										: e === this.MODE_ROTATE
										? (null !== this.auto_rotate_physics_timer &&
												(this.auto_rotate_physics_timer.clear(),
												(this.auto_rotate_physics_timer = null)),
										  null !== this.auto_rotate_timer &&
												(this.auto_rotate_timer.clear(),
												(this.auto_rotate_timer = null)))
										: e === this.MODE_DRAG &&
										  (null !== this.auto_rotate_physics_timer &&
												(this.auto_rotate_physics_timer.clear(),
												(this.auto_rotate_physics_timer = null)),
										  null !== this.auto_rotate_timer &&
												(this.auto_rotate_timer.clear(),
												(this.auto_rotate_timer = null)),
										  (this.rotating = !1)),
										e === this.MODE_AUTOROTATE
											? ((this.rotating = !0),
											  this.dispatchEvent('autorotate_start'),
											  this.control_panel &&
													this.control_panel.autorotate_on())
											: this.mode === this.MODE_AUTOROTATE &&
											  e !== this.MODE_AUTOROTATE &&
											  ((this.rotating = !1),
											  this.control_panel &&
													this.control_panel.autorotate_off(),
											  this.dispatchEvent('autorotate_stop'),
											  this.on_activity_end()),
										(this.mode = e);
								},
							},
							{
								key: 'autorotate_frame',
								value: function () {
									var e, t, i;
									this.is_destroyed ||
										((t =
											(e = this.get_transformed_value('hangle')) +
											1 * this.auto_rotate_dir),
										'no' === this.params.continous &&
											((t >= this.frames_no || t < 0) &&
												(t =
													-1 === this.auto_rotate_dir ? this.frames_no - 1 : 0),
											(t = this.get_closest_frame(t, this.vangle).hangle),
											(i = this.get_closest_frame(
												this.params.border_frame,
												this.vangle
											).hangle),
											0 < this.auto_rotate_dir
												? i === t &&
												  ((this.auto_rotate_dir = -1 * this.auto_rotate_dir),
												  (t = e))
												: i === e &&
												  ((this.auto_rotate_dir = -1 * this.auto_rotate_dir),
												  (t = e))),
										this.transform({ hangle: t }));
								},
							},
							{
								key: 'pl_find_loaded_frame',
								value: function (e) {
									var t,
										i,
										n,
										r,
										o,
										s,
										a,
										l,
										h = { prev: -1, next: -1 },
										c = this.pl_get_loaded_hangles(e);
									if (3 <= c.length) {
										for (t = e + 1; t < this.frames_no; t++)
											if (-1 !== (i = c.indexOf(t))) {
												c.splice(i, 1), (h.next = t);
												break;
											}
										if (-1 === h.next)
											for (n = 0; n < e; n++)
												if (-1 !== (r = c.indexOf(n))) {
													c.splice(r, 1), (h.next = n);
													break;
												}
										for (o = e - 1; 0 <= o; o--)
											if (-1 !== (s = c.indexOf(o))) {
												c.splice(s, 1), (h.prev = o);
												break;
											}
										if (-1 === h.prev)
											for (a = this.frames_no - 1; e < a; a--)
												if (-1 !== (l = c.indexOf(a))) {
													c.splice(l, 1), (h.prev = a);
													break;
												}
										if (-1 !== h.prev && -1 !== h.next) return h;
									}
									return !1;
								},
							},
							{
								key: 'find_frame',
								value: function (e, t, i, n) {
									var r = t + i,
										o = t - i;
									return (
										r >= this.frames_no && (r -= this.frames_no),
										o < 0 && (o = this.frames_no + o),
										('next' !== n && 'both' !== n) || !this.base_frames[e][r]
											? ('prev' !== n && 'both' !== n) ||
											  !this.base_frames[e][o]
												? null
												: { hangle: o, vangle: e }
											: { hangle: r, vangle: e }
									);
								},
							},
							{
								key: 'is_vangle_loaded',
								value: function (e) {
									return (
										!!this.base_frames[e] &&
										0 <
											this.base_frames[e].filter(function (e) {
												return null !== e;
											}).length
									);
								},
							},
							{
								key: 'get_closest_frame',
								value: function (e, t) {
									var i,
										n,
										r,
										o,
										s,
										a = t,
										l = e;
									for (
										l >= this.frames_no && (l -= this.frames_no),
											a >= this.vangles_no && (a -= this.vangles_no);
										!this.is_vangle_loaded(a);

									)
										(a += 1) >= this.vangles_no && (a = 0);
									if (this.base_frames[a][l]) return { hangle: l, vangle: a };
									for (
										i = 1,
											o =
												(n = Math.max(l, this.hangle)) -
													(r = Math.min(l, this.hangle)) <
												this.frames_no - n + r
													? 'next'
													: 'prev',
											l === r && 'next' === o && (o = 'prev'),
											s = this.find_frame(a, l, i, o);
										!s && i < this.frames_no;

									)
										(i += 1), (s = this.find_frame(a, l, i, o));
									return s;
								},
							},
							{
								key: 'pl_get_loaded_hangles_count',
								value: function () {
									var e;
									return null !== this.pl_frames_count
										? (e = this.base_frames[this.vangle])
											? e.filter(function (e) {
													return null != e;
											  }).length
											: 0
										: this.frames_no;
								},
							},
							{
								key: 'pl_get_last_loaded_frame_no',
								value: function () {
									if (null === this.pl_frames_count) return this.frames_no - 1;
									for (var e = this.frames_no - 1; 0 <= e; e--)
										if (
											this.base_frames[this.vangle] &&
											null !== this.base_frames[this.vangle][e]
										)
											return e;
									return 0;
								},
							},
							{
								key: 'pl_get_first_loaded_frame_no',
								value: function () {
									if (null === this.pl_frames_count) return 0;
									for (var e = 0; e < this.frames_no; e++)
										if (
											this.base_frames[this.vangle] &&
											null !== this.base_frames[this.vangle][e]
										)
											return e;
									return 0;
								},
							},
							{
								key: 'pl_get_loaded_hangles',
								value: function (e) {
									var t,
										i = [],
										n = this.base_frames,
										r = this.vangle;
									for (t = 0; t < this.frames_no; t++)
										t !== e && n[r][t] && i.push(t);
									return i;
								},
							},
							{
								key: 'pl_get_frames_distance',
								value: function () {
									var e = this.pl_get_loaded_hangles(null);
									return e && 1 < e.length ? e[1] - e[0] : 1;
								},
							},
							{
								key: 'get_transformed_value',
								value: function (e) {
									return this.queue_obj[e];
								},
							},
							{
								key: 'addListener',
								value: function (e, t, i) {
									var n = this._events;
									(n[e] = n[e] || []).push([t, i]);
								},
							},
							{
								key: 'removeListener',
								value: function (e, t) {
									var i,
										n,
										r = this._events[e];
									if (r)
										for (i = 0, n = r.length; i < n; i++)
											r[i] && r[i][0] === t && this._events[e].splice(i, 1);
								},
							},
							{
								key: 'dispatchEvent',
								value: function (e, t) {
									var i,
										n,
										r = this._events[e];
									if (r)
										for (i = 0, n = r.length; i < n; i++)
											r[i] &&
												('string' == typeof r[i][0]
													? window[r[i][0]](t)
													: r[i][0].call(r[i][1]));
								},
							},
							{
								key: 'transform',
								value: function (e) {
									var t,
										i,
										n,
										r = this;
									this.is_loaded &&
										-1 !== this.scale &&
										((t = !1),
										(void 0 === e.centerx && void 0 === e.centery) || (t = !0),
										(i = {
											scale:
												void 0 !== e.scale ? e.scale : this.queue_obj.scale,
											centerx:
												void 0 !== e.centerx
													? e.centerx
													: this.queue_obj.centerx,
											centery:
												void 0 !== e.centery
													? e.centery
													: this.queue_obj.centery,
											hangle:
												void 0 !== e.hangle ? e.hangle : this.queue_obj.hangle,
											vangle:
												void 0 !== e.vangle ? e.vangle : this.queue_obj.vangle,
											force_zoom_complete: void 0 !== e.scale,
										}),
										this.apply_constraints(i),
										(n = this.get_closest_frame(i.hangle, i.vangle)) &&
											((i.hangle = n.hangle),
											(i.vangle = n.vangle),
											(i.is_centering = t),
											(this.queue_obj = i),
											(this.refresh = !0),
											this.html5_hint.hide(),
											window.requestAnimationFrame(function () {
												r.on_refresh();
											})));
								},
							},
							{
								key: 'init_viewer',
								value: function (e, t) {
									var i, n, r;
									this.setup_width_and_height(e, t),
										(this.canvas.width = this.width * this.devicePixelRatio),
										(this.canvas.height = this.height * this.devicePixelRatio),
										(this.tiles_obj.width = this.width * this.devicePixelRatio),
										(this.tiles_obj.height =
											this.height * this.devicePixelRatio),
										this.calculate_min_max_scales(this.width, this.height, !1),
										(this.scale = this.queue_obj.scale = this.min_scale),
										(this.centerx = this.queue_obj.centerx =
											this.max_width / 2),
										(this.centery = this.queue_obj.centery =
											this.max_height / 2),
										(i = this.scale),
										(Fr()(this.params.preload_width) ||
											Fr()(this.params.preload_height)) &&
											((n = Fr()(this.params.preload_width)
												? Fr()(this.params.preload_width)
												: 0),
											(r = Fr()(this.params.preload_height)
												? Fr()(this.params.preload_height)
												: 0),
											(n = Math.min(
												n,
												this.tiled_image.max_single_image_width
											)),
											(r = Math.min(
												r,
												this.tiled_image.max_single_image_height
											)),
											isNaN(n) && (n = this.width),
											isNaN(r) && (r = this.height),
											this.calculate_min_max_scales(
												Math.max(this.width, n),
												Math.max(this.height, r),
												!0
											),
											(i = this.min_scale)),
										this.calculate_optimal_scale(!0, i),
										(this.base_scale_obj = this.optimal_scale_obj),
										(this.base_scale = this.optimal_scale),
										(this.base_scale_index = this.optimal_scale_index),
										this.calculate_optimal_scale(!1, i),
										(this.tiles_scale = this.optimal_scale),
										(this.tiles_scale_obj = this.optimal_scale_obj),
										(this.tiles_scale_index = this.optimal_scale_index);
								},
							},
							{
								key: 'setup_width_and_height',
								value: function (e, t) {
									var i = this.vport;
									'auto' === e &&
										null != this.params.width &&
										((e = ''), (this.params.width = '' + i.clientWidth)),
										(e =
											e ||
											((e = i.style.width) && ~('' + e).indexOf('px')
												? e.replace('px', '')
												: this.params.width && this.force_size
												? ~(e = this.params.width).indexOf('%')
													? i.clientWidth
													: e.replace('px', '')
												: i.clientWidth)),
										this.width !== e && (this.dimensions_changed = !0),
										(this.base_width = this.width = e),
										'auto' === t &&
											null != this.params.height &&
											((t = null), (this.params.height = '' + i.clientHeight)),
										(t =
											t ||
											((t = i.style.height) && ~('' + t).indexOf('px')
												? t.replace('px', '')
												: this.params.height && this.force_size
												? ~(t = this.params.height).indexOf('%')
													? i.clientHeight
													: t.replace('px', '')
												: i.clientHeight)),
										this.height != t && (this.dimensions_changed = !0),
										(this.base_height = this.height = t);
								},
							},
							{
								key: 'resizeViewport',
								value: function (e, t) {
									this.is_in_page(this.container) &&
										(this.control_panel && this.control_panel.handle_resize(),
										this.setup_width_and_height(e, t),
										this.setup_fullscreen(e, t),
										this.calculate_min_max_scales(this.width, this.height, !1),
										(this.x = 0),
										(this.y = 0),
										this.dimensions_changed &&
											(-1 !== this.scale &&
												this.transform({
													scale: this.min_scale,
													centerx: this.max_width / 2,
													centery: this.max_height / 2,
												}),
											this.dispatchEvent('resize')));
								},
							},
							{
								key: 'calculate_optimal_scale',
								value: function (e, t) {
									if (this.tiled_image) {
										var i = this.tiled_image.find_optimal_scale_index(
											1e3 * t,
											e
										);
										this.base_scale_index &&
											i < this.base_scale_index &&
											(i = this.base_scale_index),
											(this.optimal_scale_index = i),
											(this.optimal_scale_obj =
												this.tiled_image.scales[this.optimal_scale_index]),
											(this.optimal_scale = this.optimal_scale_obj.scale);
									}
								},
							},
							{
								key: 'calculate_min_max_scales',
								value: function (e, t, i) {
									var n,
										r,
										o,
										s,
										a,
										l = e / this.max_width,
										h = t / this.max_height,
										c = this.params.max_scale;
									return (
										void 0 === c && (c = this.SCALE_MAX),
										'' != '' &&
											((n = Math.max(this.max_width, this.max_height)),
											(r = Math.min(1024, n)),
											(c = Math.min(c, (r /= n)))),
										(o = h < l),
										i && (o = e < t),
										(a = o ? h : l),
										1 * c == 0
											? 0 == this.max_scale
												? ((c = a), (this.max_scale = c))
												: (c = 1 * c == 0 ? a : this.max_scale)
											: (this.max_scale = c),
										(s =
											'no' === this.params.hires_forced_zoom
												? this.devicePixelRatio
												: 1),
										(this.max_scale = c = c === a ? c : c / s),
										(this.min_scale = Math.min(a, c)),
										this.update_zoom_buttons(),
										{ min: this.min_scale, max: c }
									);
								},
							},
							{
								key: 'update_zoom_buttons',
								value: function (e) {
									this.control_panel &&
										(this.min_scale < this.max_scale
											? this.control_panel.show_zoom_buttons()
											: this.control_panel.hide_zoom_buttons());
								},
							},
							{
								key: 'hexToRgba',
								value: function (e) {
									var t = [];
									return (
										t.push(Fr()(e.substr(0, 2), 16)),
										t.push(Fr()(e.substr(2, 2), 16)),
										t.push(Fr()(e.substr(4, 2), 16)),
										e.substr(6, 2)
											? t.push(Fr()(e.substr(6, 2), 16) / 255)
											: t.push(1),
										'rgba(' + t[0] + ',' + t[1] + ',' + t[2] + ',' + t[3] + ')'
									);
								},
							},
							{
								key: 'hexToRgb',
								value: function (e) {
									var t = [];
									return (
										t.push(Fr()(e.substr(0, 2), 16)),
										t.push(Fr()(e.substr(2, 2), 16)),
										t.push(Fr()(e.substr(4, 2), 16)),
										'rgb(' + t[0] + ',' + t[1] + ',' + t[2] + ')'
									);
								},
							},
							{
								key: 'get_translate',
								value: function (e, t, i) {
									var n,
										r,
										o =
											'c_' +
											e.real_scale +
											'_' +
											this.scale +
											'_' +
											this.centerx +
											'_' +
											this.centery +
											'_';
									return (
										(o +=
											t.cc +
											'_' +
											t.rr +
											'_' +
											t.w +
											'_' +
											t.h +
											'_' +
											this.base_width +
											'_' +
											this.base_height),
										this.translates_cache[o]
											? this.translates_cache[o]
											: ((r = {
													scale: (n = this.get_local_scale(e.real_scale)),
													coords: this.get_tile_position(e, t, n, i),
													cache_key: o,
											  }),
											  (this.translates_cache[o] = r))
									);
								},
							},
							{
								key: 'calculate_position',
								value: function (e, t, i) {
									var n,
										r,
										o,
										s,
										a,
										l,
										h = e.width,
										c = e.height,
										u = e.real_scale,
										_ = h + '_' + c + '_' + u + '_' + t.x + '_' + t.y + '_' + i;
									return (
										(_ +=
											'_' +
											this.centerx +
											'_' +
											this.centery +
											'_' +
											this.width +
											'_' +
											this.height),
										this._position_cache[_]
											? this._position_cache[_]
											: ((n = this.get_offsets(u, i)),
											  (r = h * i),
											  (o = c * i),
											  (s = (this.width - r) / 2),
											  (a = (this.height - o) / 2),
											  (s -= n.x),
											  (a -= n.y),
											  t.x && (s += t.x * (u / 1e3) * i),
											  t.y && (a += t.y * (u / 1e3) * i),
											  (l = { x: s, y: a }),
											  (this._position_cache[_] = l))
									);
								},
							},
							{
								key: 'calculate_reverse_position',
								value: function (e, t, i) {
									var n,
										r,
										o,
										s,
										a,
										l,
										h,
										c,
										u = e.width,
										_ = e.height,
										d = e.real_scale,
										f = u + '_' + _ + '_' + d + '_' + t.x + '_' + t.y + '_' + i;
									return (
										(f +=
											'_' +
											this.centerx +
											'_' +
											this.centery +
											'_' +
											this.width +
											'_' +
											this.height),
										this._position_cache[f]
											? this._position_cache[f]
											: ((o = this.get_offsets(d, i)),
											  (s = u * i),
											  (a = _ * i),
											  (l = (this.width - s) / 2),
											  (h = (this.height - a) / 2),
											  (l -= o.x),
											  (h -= o.y),
											  t.x && (n = (t.x - l) / ((d / 1e3) * i)),
											  t.y && (r = (t.y - h) / ((d / 1e3) * i)),
											  (c = { x: n, y: r }),
											  (this._position_cache[f] = c))
									);
								},
							},
							{
								key: 'get_local_scale',
								value: function (e) {
									return Math.round((this.scale / (e / 1e3)) * 1e5) / 1e5;
								},
							},
							{
								key: 'get_tile_position',
								value: function (e, t, i, n) {
									var r, o, s, a, l, h, c, u, _;
									return (
										n.has_cache
											? ((r = n.trans_x), (o = n.trans_y))
											: ((s = e.width),
											  (a = e.height),
											  (l = e.real_scale),
											  (h = this.get_offsets(l, i)),
											  (c = s * i),
											  (u = a * i),
											  (r = (this.width - c) / 2),
											  (o = (this.height - u) / 2),
											  (r -= h.x),
											  (o -= h.y),
											  (n.trans_x = r),
											  (n.trans_y = o),
											  (n.has_cache = !0)),
										(_ = this.get_tile_coords(t, i)).x && (r += _.x),
										_.y && (o += _.y),
										{ x: Math.round(r), y: Math.round(o), w: _.w, h: _.h }
									);
								},
							},
							{
								key: 'get_offsets',
								value: function (e, t) {
									return {
										x:
											(this.params.transform_hpos &&
											this.scale === this.min_scale
												? (this.params.transform_hpos < -1 &&
														(this.params.transform_hpos = -1),
												  1 < this.params.transform_hpos &&
														(this.params.transform_hpos = 1),
												  this.centerx -
														(this.max_width / 2) *
															(1 + this.params.transform_hpos))
												: this.centerx - this.max_width / 2) *
											(e / 1e3) *
											t,
										y:
											(this.params.transform_vpos &&
											this.scale === this.min_scale
												? (this.params.transform_vpos < -1 &&
														(this.params.transform_vpos = -1),
												  1 < this.params.transform_vpos &&
														(this.params.transform_vpos = 1),
												  this.centery -
														(this.max_height / 2) *
															(1 - this.params.transform_vpos))
												: this.centery - this.max_height / 2) *
											(e / 1e3) *
											t,
									};
								},
							},
							{
								key: 'get_tile_coords',
								value: function (e, t) {
									var i = Math.round(e.w * t),
										n = Math.round(e.h * t);
									return { x: i * e.cc, y: n * e.rr, w: i, h: n };
								},
							},
							{
								key: 'pre_fullscreen_setup',
								value: function () {
									void 0 === this.container_width_style &&
										(this.container_width_style = this.container.style.width),
										void 0 === this.container_height_style &&
											(this.container_height_style =
												this.container.style.height),
										void 0 === this.canvas_width &&
											(this.canvas_width = this.canvas.width),
										void 0 === this.canvas_height &&
											(this.canvas_height = this.canvas.height),
										void 0 === this.document_body_overflow &&
											(this.document_body_overflow =
												document.body.style.overflow),
										void 0 === this.document_html_overflow &&
											(this.document_html_overflow =
												this.html_element.style.overflow),
										this.nosize &&
											(void 0 === this.nosize_position &&
												(this.nosize_position = this.nosize.style.position),
											void 0 === this.nosize_padding_bottom &&
												(this.nosize_padding_bottom =
													this.nosize.style.paddingBottom));
								},
							},
							{
								key: 'on_fullscreen_enter',
								value: function () {
									var e = this;
									this.control_panel &&
										this.control_panel.infoButton &&
										this.control_panel.infoButton.close(),
										(this.force_size = !1),
										(this.canvas.style.opacity = '0'),
										(this.tiles_obj.style.opacity = '0'),
										this.fullscreen &&
											'4' != this.params.style &&
											'no' != this.params.fullscreen_enabled &&
											this.control_panel.fullscreen_on(),
										this.has_html5_fullscreen()
											? ((this.container.style.backgroundColor =
													this.canvas.style.backgroundColor),
											  (this.container.style.width = '100%'),
											  (this.container.style.height = '100%'))
											: (this.handle_fullscreen_resize_viewport(),
											  (this.is_doing_fullscreen = !1)),
										this.nosize &&
											((this.nosize.style.position = 'static'),
											(this.nosize.style.paddingBottom = '0')),
										(this.vport.style.border = 'none'),
										window.setTimeout(function () {
											e.is_destroyed ||
												(e.has_html5_fullscreen() && e.resizeViewport(),
												e.dispatchEvent('fullscreen_on'));
										}, 300),
										window.setTimeout(function () {
											e.is_destroyed ||
												(e.has_html5_fullscreen()
													? (e.is_doing_html5_fullscreen = !1)
													: (e.is_doing_fullscreen = !1),
												(e.tiles_obj.style.opacity = '1'),
												e.fade_in(e.canvas));
										}, 350);
								},
							},
							{
								key: 'on_fullscreen_cancel',
								value: function () {
									var e = this;
									(this.canvas.style.opacity = '0'),
										(this.tiles_obj.style.opacity = '0'),
										(this.force_size = !0),
										this.fullscreen ||
											'4' == this.params.style ||
											'no' == this.params.fullscreen_enabled ||
											this.control_panel.fullscreen_off(),
										this.has_html5_fullscreen()
											? (this.is_doing_html5_fullscreen = !0)
											: (this.is_doing_fullscreen = !0),
										(this.vport.style.border = this.border_style),
										(this.container.style.width = this.container_width_style),
										(this.container.style.height = this.container_height_style),
										this.has_html5_fullscreen() &&
											(this.container.style.backgroundColor = 'transparent'),
										this.nosize &&
											((this.nosize.style.position = this.nosize_position),
											(this.nosize.style.paddingBottom =
												this.nosize_padding_bottom)),
										window.setTimeout(function () {
											e.is_destroyed ||
												(e.resizeViewport(), e.dispatchEvent('fullscreen_off'));
										}, 300),
										window.setTimeout(function () {
											e.is_destroyed ||
												(e.has_html5_fullscreen()
													? (e.is_doing_html5_fullscreen = !1)
													: (e.is_doing_fullscreen = !1),
												(e.tiles_obj.style.opacity = 1),
												e.fade_in(e.canvas));
										}, 350);
								},
							},
							{
								key: 'toggle_fullscreen_mode',
								value: function () {
									var e = this;
									this.is_doing_fullscreen ||
										'no' === this.params.fullscreen_enabled ||
										(this.pre_fullscreen_setup(),
										this.has_html5_fullscreen()
											? (this.fullscreen_eventname_bound ||
													((this.fullscreen_eventname_bound = !0),
													(this.fullscreen_event_handler = function (t) {
														e.handle_html5_fullscreen_event(t);
													}),
													Io.a.addEventListener(
														'fullscreenchange',
														this.fullscreen_event_handler
													)),
											  this.fullscreen
													? this.cancel_html5_fullscreen()
													: ((this.is_doing_html5_fullscreen = !0),
													  this.enable_html5_fullscreen(this.container)))
											: ((this.is_doing_fullscreen = !0),
											  this.switch_no_html5_fullscreen()));
								},
							},
							{
								key: 'switch_no_html5_fullscreen',
								value: function () {
									var e,
										t,
										i,
										n,
										r,
										o,
										s,
										a,
										l = this,
										h = document.querySelector('meta[name="viewport"]');
									for (
										null === this.resize_handler &&
											(this.resize_handler = function (e) {
												l.handle_fullscreen_resize_viewport();
											}),
											null === this.orientation_change_handler &&
												(this.orientation_change_handler = function (e) {
													l.fullscreen &&
														!l.is_doing_fullscreen &&
														l.switch_no_html5_fullscreen();
												}),
											this.fullscreen = !this.fullscreen,
											t = 0,
											i = (e =
												this.container.getElementsByClassName('zindexer'))
												.length;
										t < i;
										t++
									)
										this.changeElementZIndex(e[t], this.fullscreen);
									this.changeElementZIndex(this.vport, this.fullscreen),
										this.fullscreen
											? (h
													? ((this.viewport_content = h.content),
													  (h.content =
															'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'))
													: ((n = document.createElement('meta')),
													  (r = document.getElementsByTagName('head')),
													  (n.name = 'viewport'),
													  (n.content =
															'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'),
													  r && r[0] && r[0].appendChild(n)),
											  (o = this.container.getBoundingClientRect()),
											  (this.container_top = o.top),
											  (this.container_left = o.left),
											  (this.container_zindex = this.container.style.zIndex),
											  (this.document_body_position =
													document.body.style.position),
											  (this.document_body_left = document.body.style.left),
											  (this.document_body_right = document.body.style.right),
											  (this.document_body_top = document.body.style.top),
											  (this.document_body_bottom =
													document.body.style.bottom),
											  (this.document_body_padding =
													document.body.style.padding),
											  (this.document_body_margin =
													document.body.style.margin),
											  (this.document_body_scroll_top =
													document.body.scrollTop),
											  (this.document_body_scroll_left =
													document.body.scrollLeft),
											  (this.document_body_width = document.body.clientWidth),
											  (this.document_body_height =
													document.body.clientHeight),
											  (this.window_width = window.innerWidth),
											  (this.window_height = window.innerHeight),
											  (document.body.style.position = 'fixed'),
											  (document.body.style.left = '0'),
											  (document.body.style.right = '0'),
											  (document.body.style.top = '0'),
											  (document.body.style.bottom = '0'),
											  (document.body.style.margin = '0'),
											  (document.body.style.padding = '0'),
											  (this.container_parent = this.container.parentNode),
											  (this.container.style.position = 'fixed'),
											  (this.container.style.left = o.left + 'px'),
											  (this.container.style.top = o.top + 'px'),
											  (this.container.style.zIndex = '9999999'),
											  this.container_parent.removeChild(this.container),
											  document.body.insertBefore(
													this.container,
													document.body.firstChild
											  ),
											  this.events.removeEvents(),
											  this.events.attachEvents(),
											  this.switch_sizer_object(document.body),
											  window.addEventListener(
													'orientationchange',
													this.orientation_change_handler
											  ),
											  (this.container.style.left = '0'),
											  (this.container.style.top = '0'),
											  void 0 === this.container_parent_style_width &&
													(this.container_parent_style_width =
														this.container_parent.style.width),
											  void 0 === this.container_parent_style_height &&
													(this.container_parent_style_height =
														this.container_parent.style.height),
											  (this.container_parent.style.width = '0'),
											  (this.container_parent.style.height = '0'),
											  this.on_fullscreen_enter())
											: (this.viewport_content
													? h && (h.content = this.viewport_content)
													: ((h.content = ''), h.parentNode.removeChild(h)),
											  window.removeEventListener(
													'orientationchange',
													this.orientation_change_handler
											  ),
											  (document.body.style.overflow =
													this.document_body_overflow),
											  (this.html_element.style.overflow =
													this.document_html_overflow),
											  (document.body.style.position =
													this.document_body_position),
											  (document.body.style.left = this.document_body_left),
											  (document.body.style.right = this.document_body_right),
											  (document.body.style.top = this.document_body_top),
											  (document.body.style.bottom =
													this.document_body_bottom),
											  (document.body.style.padding =
													this.document_body_padding),
											  (document.body.style.margin =
													this.document_body_margin),
											  (window.innerWidth === this.window_width &&
													window.innerHeight === this.window_height) ||
													((a = s = 1),
													0 !== this.document_body_scroll_left &&
														((s =
															document.body.clientWidth /
															this.document_body_width),
														(this.document_body_scroll_left = Fr()(
															s * this.document_body_scroll_left
														))),
													0 !== this.document_body_scroll_top &&
														((a =
															document.body.clientHeight /
															this.document_body_height),
														(this.document_body_scroll_top = Fr()(
															a * this.document_body_scroll_top
														)))),
											  (document.body.scrollLeft =
													this.document_body_scroll_left),
											  (document.body.scrollTop =
													this.document_body_scroll_top),
											  (this.container.style.top = this.container_top + 'px'),
											  (this.container.style.left =
													this.container_left + 'px'),
											  (this.container.style.zIndex = this.container_zindex),
											  document.body.removeChild(this.container),
											  this.switch_sizer_object(this.container),
											  (this.container_parent.style.width =
													this.container_parent_style_width),
											  (this.container_parent.style.height =
													this.container_parent_style_height),
											  this.container_parent.appendChild(this.container),
											  (this.container.style.top = '0px'),
											  (this.container.style.left = '0px'),
											  (this.container.style.position = 'relative'),
											  (this.canvas.style.backgroundColor =
													this.params.background_color),
											  this.params.background_color_opacity &&
													(this.canvas.style.backgroundColor = this.hexToRgba(
														this.params.background_color.substr(1, 6) +
															this.params.background_color_opacity
													)),
											  this.resizeViewport(),
											  this.on_fullscreen_cancel());
								},
							},
							{
								key: 'handle_fullscreen_resize_viewport',
								value: function () {
									var e = this.width,
										t = this.height;
									document.body &&
										document.body.scrollWidth &&
										((e = document.body.scrollWidth),
										(t = document.body.scrollHeight)),
										'CSS1Compat' === document.compatMode &&
											document.documentElement &&
											document.documentElement.scrollWidth &&
											((e = document.documentElement.scrollWidth),
											(t = document.documentElement.scrollHeight)),
										window.innerWidth &&
											window.innerHeight &&
											((e = window.innerWidth), (t = window.innerHeight)),
										(this.container.style.width = e + 'px'),
										(this.container.style.height = t + 'px'),
										this.resizeViewport(e, t),
										this.events.removeEvents(),
										this.events.attachEvents();
								},
							},
							{
								key: 'cancel_html5_fullscreen',
								value: function () {
									Io.a.exitFullscreen();
								},
							},
							{
								key: 'enable_html5_fullscreen',
								value: function (e) {
									Io.a.requestFullscreen(e);
								},
							},
							{
								key: 'has_html5_fullscreen',
								value: function () {
									return (
										void 0 === this.fullscreen_supported &&
											(this.fullscreen_supported = Io.a.fullscreenEnabled),
										this.fullscreen_supported
									);
								},
							},
							{
								key: 'handle_html5_fullscreen_event',
								value: function (e) {
									(this.fullscreen = !this.fullscreen),
										this.fullscreen
											? this.on_fullscreen_enter()
											: this.on_fullscreen_cancel();
								},
							},
							{
								key: 'changeElementZIndex',
								value: function (e, t) {
									var i = e.style.zIndex
										? e.style.zIndex
										: document.defaultView
												.getComputedStyle(e)
												.getPropertyValue('z-index');
									t ? (i *= 1e3) : (i /= 1e3), (e.style.zIndex = i);
								},
							},
							{
								key: 'apply_constraints',
								value: function (e) {
									var t, i, n, r;
									(e.scale = Math.max(this.min_scale, e.scale)),
										(e.scale = Math.min(this.max_scale, e.scale)),
										(n = (t = this.width / e.scale) / 2),
										(r = (i = this.height / e.scale) / 2),
										(e.centerx = Math.max(e.centerx, n)),
										this.max_width - e.centerx < n &&
											(e.centerx = this.max_width - n),
										this.max_width < t && (e.centerx = this.max_width / 2),
										(e.centery = Math.max(e.centery, r)),
										this.max_height - e.centery < r &&
											(e.centery = this.max_height - r),
										this.max_height < i && (e.centery = this.max_height / 2),
										e.hangle < 0
											? (e.hangle = this.pl_get_last_loaded_frame_no())
											: e.hangle >= this.frames_no &&
											  (e.hangle = this.pl_get_first_loaded_frame_no()),
										null !== e.vangle &&
											(e.vangle >= this.vangles_no
												? (e.vangle = this.vangles_no - 1)
												: e.vangle < 0 && (e.vangle = 0));
								},
							},
							{
								key: 'on_refresh',
								value: function () {
									this.refresh &&
										((this.refresh = !1), this.refresh_view_task());
								},
							},
							{
								key: 'rebuild_tiles',
								value: function () {
									var e = this;
									this.rebuild_tiles_timeout = window.setTimeout(function () {
										e.is_destroyed ||
											(e.scalling &&
												((e.scalling = !1), (e.is_button_scalling = !1)),
											e.rebuild_tiles_task());
									}, this.rebuild_tiles_time);
								},
							},
							{
								key: 'clear_rebuild_tiles_timeout',
								value: function () {
									this.rebuild_tiles_timeout &&
										(window.clearTimeout(this.rebuild_tiles_timeout),
										(this.rebuild_tiles_timeout = null));
								},
							},
							{
								key: 'refresh_view_task',
								value: function () {
									var e,
										t,
										i,
										n,
										r,
										o,
										s,
										a,
										l,
										h,
										c,
										u,
										_,
										d,
										f,
										p,
										m,
										v,
										g,
										A,
										w,
										y,
										b,
										E,
										x,
										k,
										B,
										T,
										M,
										O,
										R,
										Q,
										C,
										I,
										D,
										z;
									if (this.container) {
										if (
											((e = this.queue_obj),
											(t = this.scale != e.scale || this.scalling),
											(n =
												(i =
													this.hangle != e.hangle || this.vangle != e.vangle) ||
												this.rotating),
											(r =
												(this.centerx != e.centerx ||
													this.centery != e.centery) &&
												e.scale > this.min_scale),
											(o = this.dimensions_changed),
											(a = !(s = 0.4)),
											(l = {
												scale: this.scale,
												centerx: this.centerx,
												centery: this.centery,
												hangle: this.hangle,
												vangle: this.vangle,
												mode: this.mode,
											}),
											!(t || i || r || this.is_rotate_to || o))
										)
											return (
												this.dispatch_events(l, i, t, r, 1e3 * s),
												(this.is_panning = !1),
												void this.on_activity_end()
											);
										for (h in this.fading_tiles)
											this.fading_tiles.hasOwnProperty(h) &&
												(this.fading_tiles[h] = null);
										if (
											((this.request_rebuild_tiles = !0),
											l.scale !== this.max_scale ||
												e.scale !== l.scale ||
												Ir.isTweening(this.frameObj) ||
												this.is_mobile ||
												this.is_panning ||
												(t = !1),
											(c = this.vport.clientWidth),
											(u = this.vport.clientHeight),
											0 !== c &&
												0 !== u &&
												((_ = c * this.devicePixelRatio),
												(d = u * this.devicePixelRatio),
												(this.canvas.width == _ && this.canvas.height == d) ||
													((this.canvas.width = _),
													(this.canvas.height = d),
													Ir.killTweensOf(this.frameObj),
													(a = !0)),
												(this.tiles_obj.width = this.canvas.width),
												(this.tiles_obj.height = this.canvas.height)),
											(f = {}),
											(m = (p = this.tiles_scale_obj).scale),
											(v = p.cols),
											(g = p.rows),
											(this.scale = e.scale),
											(this.centerx = e.centerx),
											(this.centery = e.centery),
											(this.hangle = e.hangle),
											(this.vangle = e.vangle),
											(this.curr_scale = this.scale),
											(this.prev_scale = l.scale),
											(A = this.base_frames[this.vangle][this.hangle]) ||
												(i && !this.rotating && (n = i = !1),
												(!~this.pl_vangles_loaded.indexOf(this.vangle) &&
													this.base_frames[l.vangle][this.hangle]) ||
													(this.hangle = l.hangle),
												(this.vangle = l.vangle),
												(A = this.base_frames[this.vangle][this.hangle])),
											(n || o || this.is_rotate_to) &&
												this.clear_tiles_buffer(v, g),
											t && this.calculate_optimal_scale(!1, this.scale),
											this.tiles_scale != this.optimal_scale &&
												(this.clear_tiles_buffer(v, g),
												(this.tiles_scale = this.optimal_scale),
												(this.tiles_scale_index = this.optimal_scale_index),
												(this.tiles_scale_obj =
													this.tiled_image.scales[this.tiles_scale_index])),
											(w = this.should_tween(t, r, n, o)),
											this.dispatch_events(l, i, t, r, 1e3 * s),
											(this.is_panning = !1),
											(this.dimensions_changed = !1),
											(y = this.get_base_scale_obj(this.vangle, this.hangle)),
											this.set_transform(A, y, y.images[0][0], {}),
											this.tiles_buffer)
										)
											for (b = p.scale, E = {}, x = 0; x < v; x++)
												for (k = 0; k < g; k++)
													(B = p.images[x][k]).buffered &&
														((T = this.set_transform(
															B.imageElement,
															p,
															p.images[x][k],
															E
														)),
														(f[b + '_' + x + '_' + k + '_x'] = T.coords.x),
														(f[b + '_' + x + '_' + k + '_y'] = T.coords.y),
														(f[b + '_' + x + '_' + k + '_scale'] = T.scale));
										if (
											(w &&
												this.scale == l.scale &&
												Ir.isTweening(this.frameObj) &&
												(void 0 === this.tween_speed
													? (this.tween_speed = s)
													: ((this.tween_speed -= 0.005),
													  (s = this.tween_speed)),
												this.tween_speed <= 0 &&
													(Ir.killTweensOf(this.frameObj),
													(w = !1),
													(this.tween_speed = void 0),
													(this.scalling = !1),
													(this.is_button_scalling = !1),
													this.on_activity_end())),
											w)
										)
											Ir.isTweening(this.frameObj) && this.tween.kill(),
												Yr()(this.frameObj, this.current_frame_coords),
												(this.frameObj.image = A),
												((M = Yr()(
													{
														x: A.current_translates.coords.x,
														y: A.current_translates.coords.y,
														scale: A.current_translates.scale,
														ease: this.animating ? 'sine.inOut' : 'sine.out',
													},
													f
												)).onStart = this.tween_onstart),
												(M.onStartParams = [t, n]),
												(M.onUpdate = this.tween_onupdate),
												(M.onUpdateParams = [a, A, v, g]),
												(M.onComplete = this.tween_oncomplete),
												(M.onCompleteParams = [t, n]),
												(M.immediateRender = !0),
												(M.duration = s),
												(this.tween = Ir.to(this.frameObj, M));
										else {
											if (
												(this.frameObj && Ir.killTweensOf(this.frameObj),
												this.canvas_context.clearRect(
													0,
													0,
													this.canvas.width,
													this.canvas.height
												),
												this.drawOnCanvas(
													A,
													A.current_translates.coords.x,
													A.current_translates.coords.y,
													A.width * A.current_translates.scale,
													A.height * A.current_translates.scale,
													Ir.isTweening(this.frameObj)
												),
												this.tiles_buffer)
											)
												for (O = 0; O < v; O++)
													for (R = 0; R < g; R++)
														(Q = p.images[O][R]).buffered &&
															((C = f[m + '_' + O + '_' + R + '_x']),
															(I = f[m + '_' + O + '_' + R + '_y']),
															(D = Math.round(
																Q.imageElement.width *
																	f[m + '_' + O + '_' + R + '_scale']
															)),
															(z = Math.round(
																Q.imageElement.height *
																	f[m + '_' + O + '_' + R + '_scale']
															)),
															this.tiles_fade_in_effect ||
																this.canvas_context.clearRect(
																	C * this.devicePixelRatio,
																	I * this.devicePixelRatio,
																	D * this.devicePixelRatio,
																	z * this.devicePixelRatio
																),
															this.canvas_context.drawImage(
																Q.imageElement,
																C * this.devicePixelRatio,
																I * this.devicePixelRatio,
																D * this.devicePixelRatio,
																z * this.devicePixelRatio
															));
											this.current_frame_coords = Yr()(
												{
													x: A.current_translates.coords.x,
													y: A.current_translates.coords.y,
													scale: A.current_translates.scale,
												},
												f
											);
										}
										this.rotate_to(n), this.on_activity_end();
									}
								},
							},
							{
								key: 'compare_tweens',
								value: function (e, t) {
									for (var i in e)
										if (e.hasOwnProperty(i)) {
											if ('duration' === i || 'ease' === i || 'image' === i)
												continue;
											if (null != e[i] && (void 0 === t[i] || t[i] !== e[i]))
												return !1;
										}
									return !0;
								},
							},
							{
								key: 'set_animation_data',
								value: function (e, t) {
									Yr()(e, t), delete e.image;
								},
							},
							{
								key: 'rebuild_tiles_task',
								value: function () {
									var e,
										t,
										i,
										n,
										r,
										o,
										s,
										a,
										l,
										h,
										c,
										u = this,
										_ = {};
									if (this.tiles_scale_obj.scale != this.base_scale_obj.scale)
										for (
											this.request_rebuild_tiles = !1,
												0,
												l = this.width * this.devicePixelRatio,
												0,
												h = this.height * this.devicePixelRatio,
												s = this.tiles_scale_obj,
												a = s.images,
												o = s.scale,
												e = s.cols,
												t = s.rows,
												this.tiles_buffer ||
													((this.tiles_buffer = !0),
													(this.tiles_obj.style.opacity = '1')),
												n = 0;
											n < e;
											n++
										)
											for (
												c = function () {
													var c, d, f, p;
													(i = a[n][r]),
														(d = (c = u.set_transform(i.imageElement, s, i, _))
															.coords),
														(f = u.optimal_scale_index),
														(p =
															'tc_' +
															o +
															'_' +
															n +
															'_' +
															r +
															'_' +
															u.vangle +
															'_' +
															u.hangle),
														d.x + d.w > 0 &&
															d.x < l &&
															d.y + d.h > 0 &&
															d.y < h &&
															(u.tiles_cache[p] ||
																u.load_tile(i, o, f, function (i, n, r) {
																	var s,
																		a,
																		l,
																		h,
																		_,
																		d,
																		f,
																		p = i.imageElement;
																	(0 === p.naturalWidth &&
																		0 === p.naturalHeight) ||
																		(1 === e &&
																			1 === t &&
																			((s = u.vangle + '_' + u.hangle),
																			(a = u.base_scale_obj),
																			u.base_scales_upsized[s] &&
																				(a = u.base_scales_upsized[s]),
																			(l = u.tiled_image.scales[r]),
																			a.scale < o &&
																				((u.base_scales_upsized[s] = l),
																				(u.base_frames[u.vangle][u.hangle] =
																					i.imageElement),
																				(h = u.get_translate(
																					l,
																					l.images[0][0],
																					{}
																				)),
																				(u.current_frame_coords = {
																					x: h.coords.x,
																					y: h.coords.y,
																					scale: h.scale,
																				}))),
																		(c = i.imageElement.current_translates),
																		u.tiles_buffer &&
																			(u.refresh ||
																				u.request_rebuild_tiles ||
																				((u.tiles_cache[
																					'tc_' +
																						n +
																						'_' +
																						i.cc +
																						'_' +
																						i.rr +
																						'_' +
																						u.vangle +
																						'_' +
																						u.hangle
																				] = !0),
																				(u.current_frame_coords[
																					n + '_' + i.cc + '_' + i.rr + '_x'
																				] = c.coords.x),
																				(u.current_frame_coords[
																					n + '_' + i.cc + '_' + i.rr + '_y'
																				] = c.coords.y),
																				(u.current_frame_coords[
																					n + '_' + i.cc + '_' + i.rr + '_scale'
																				] = c.scale),
																				(i.buffered = !0),
																				u.tiles_fade_in_effect
																					? ((_ =
																							u.fading_tiles.push({
																								opacity: 0,
																								img: p,
																								canvas:
																									document.createElement(
																										'canvas'
																									),
																							}) - 1),
																					  u.tile_fade_in(
																							_,
																							c.coords.x,
																							c.coords.y,
																							p.naturalWidth * c.scale,
																							p.naturalHeight * c.scale
																					  ))
																					: ((d = Math.round(
																							p.naturalWidth * c.scale
																					  )),
																					  (f = Math.round(
																							p.naturalHeight * c.scale
																					  )),
																					  u.canvas_context.clearRect(
																							c.coords.x * u.devicePixelRatio,
																							c.coords.y * u.devicePixelRatio,
																							d * u.devicePixelRatio,
																							f * u.devicePixelRatio
																					  ),
																					  u.canvas_context.drawImage(
																							i.imageElement,
																							c.coords.x * u.devicePixelRatio,
																							c.coords.y * u.devicePixelRatio,
																							d * u.devicePixelRatio,
																							f * u.devicePixelRatio
																					  )))));
																}));
												},
													r = 0;
												r < t;
												r++
											)
												c();
								},
							},
							{
								key: 'should_tiles_fade_in',
								value: function (e) {
									var t,
										i,
										n,
										r = document.createElement('canvas'),
										o = r.getContext('2d'),
										s = 0,
										a = e.width,
										l = e.height;
									for (
										r.width = a,
											r.height = l,
											o.drawImage(
												e,
												0,
												0,
												a * this.devicePixelRatio,
												l * this.devicePixelRatio
											),
											t = o.getImageData(0, 0, a, l).data,
											i = 0;
										i < l;
										++i
									)
										for (
											n = 0;
											n < a &&
											(t[4 * (i * a + n) + 3] < 255 && s++, !(100 < s));
											++n
										);
									100 < s && (this.tiles_fade_in_effect = !1);
								},
							},
							{
								key: 'tile_fade_in',
								value: function (e, t, i, n, r, o) {
									var s,
										a,
										l = this;
									if (this.fading_tiles && this.fading_tiles[e]) {
										if (
											1 <= (a = this.fading_tiles[e]).opacity ||
											this.is_destroyed
										)
											return (
												(a.opacity = 1), void (this.fading_tiles[e] = null)
											);
										0 == a.opacity &&
											((a.canvas.width = n * this.devicePixelRatio),
											(a.canvas.height = r * this.devicePixelRatio),
											(a.time = { start: performance.now(), total: 50 })),
											void 0 !== o &&
												((a.time.elapsed = o - a.time.start),
												200 < a.time.elapsed && (a.opacity = 1)),
											window.requestAnimationFrame(function (o) {
												l.tile_fade_in(e, t, i, n, r, o);
											}),
											(s = a.canvas.getContext('2d')).clearRect(
												0,
												0,
												n * this.devicePixelRatio,
												r * this.devicePixelRatio
											),
											s.save(),
											(s.globalAlpha = a.opacity),
											s.drawImage(
												a.img,
												0,
												0,
												Math.round(n) * this.devicePixelRatio,
												Math.round(r) * this.devicePixelRatio
											),
											s.restore(),
											this.tiles_obj_context.clearRect(
												t * this.devicePixelRatio,
												i * this.devicePixelRatio,
												n * this.devicePixelRatio,
												r * this.devicePixelRatio
											),
											this.tiles_obj_context.drawImage(
												a.canvas,
												t * this.devicePixelRatio,
												i * this.devicePixelRatio,
												Math.round(n) * this.devicePixelRatio,
												Math.round(r) * this.devicePixelRatio
											),
											(a.opacity += 0.5 < a.opacity ? 0.125 : 0.1);
									}
								},
							},
							{
								key: 'fade_in',
								value: function (e) {
									var t = this;
									1 < jr()(e.style.opacity)
										? (e.style.opacity = 1)
										: (window.requestAnimationFrame(function () {
												t.fade_in(e);
										  }),
										  (e.style.opacity = '' + (jr()(e.style.opacity) + 0.1)));
								},
							},
							{
								key: 'refresh_position',
								value: function () {
									var e = this.container;
									if (((this.x = 0), (this.y = 0), e.offsetParent))
										for (
											;
											(this.x += e.offsetLeft),
												(this.y += e.offsetTop),
												(e = e.offsetParent);

										);
								},
							},
							{
								key: 'get_mode',
								value: function (e, t) {
									var i, n, r, o, s;
									if (1 == this.frames_no || this.gesture_scalling)
										return this.MODE_DRAG;
									if ('drag' === this.forced_mode) return this.MODE_DRAG;
									if (((i = this.mode), this.auto_drag_switch)) {
										if (
											((i = this.MODE_ROTATE),
											t && (i = t),
											e &&
												((n = (n = this.min_scale) >= this.scale),
												t
													? t === this.MODE_ROTATE &&
													  0 !== e.dy &&
													  this.vmove &&
													  !n &&
													  0 === e.dx &&
													  (i = this.MODE_DRAG)
													: (i =
															0 !== e.dy &&
															this.vmove &&
															!n &&
															Math.abs(e.dy) > Math.abs(e.dx)
																? this.MODE_DRAG
																: this.MODE_ROTATE)),
											'rotate' === this.forced_mode)
										)
											return i;
										if (((r = this.scale - this.min_scale), !this.forced_mode))
											if (
												'2' == this.params.style ||
												'3' == this.params.style
											) {
												if (this.scale > this.min_scale) return this.MODE_DRAG;
											} else if (this.max_width * r > 2 * this.width)
												return this.MODE_DRAG;
									} else if (
										('rotate' === this.forced_mode &&
											((i = this.MODE_ROTATE), t && (i = t)),
										this.forced_mode || (this.forced_mode = 'rotate'),
										e &&
											((o = (o = this.min_scale) >= this.scale),
											t
												? t == this.MODE_ROTATE &&
												  0 != e.dy &&
												  this.vmove &&
												  !o &&
												  0 == e.dx &&
												  (i = this.MODE_DRAG)
												: ((s = Math.abs(e.dy) > Math.abs(e.dx)),
												  (i =
														0 != e.dy && this.vmove && !o && s
															? this.MODE_DRAG
															: this.MODE_ROTATE))),
										'rotate' === this.forced_mode)
									)
										return i;
									return i;
								},
							},
							{
								key: 'next_frame',
								value: function (e, t) {
									var i,
										n = this.rotate_dir;
									e && (n = this.auto_rotate_dir),
										(i = this.hangle),
										t || (i = this.get_transformed_value('hangle')),
										this.can_rotate(i, 1, n) &&
											this.transform({ hangle: i + 1 * n });
								},
							},
							{
								key: 'prev_frame',
								value: function (e, t) {
									var i,
										n = this.rotate_dir;
									e && (n = this.auto_rotate_dir),
										(i = this.hangle),
										t || (i = this.get_transformed_value('hangle')),
										this.can_rotate(i, -1, n) &&
											this.transform({ hangle: i - 1 * n });
								},
							},
							{
								key: 'can_rotate',
								value: function (e, t, i) {
									var n, r;
									if ('yes' !== this.params.continous)
										if (
											((n = this.get_closest_frame(e + t * i, this.vangle)),
											(r = this.get_rotate_to_dir(
												e,
												n.hangle,
												this.params.continous,
												this.params.border_frame,
												this.frames_no
											)),
											t < 0)
										) {
											if (this.rotate_dir < 0) {
												if (r <= 0) return !1;
											} else if (0 <= r) return !1;
										} else if (this.rotate_dir < 0) {
											if (0 <= r) return;
										} else if (r <= 0) return;
									return !0;
								},
							},
							{
								key: 'should_tween',
								value: function (e, t, i, n) {
									return this.is_initializing
										? (this.is_initializing = !1)
										: !(
												(this.is_mobile &&
													!this.is_panning &&
													!this.animating &&
													!this.is_button_scalling) ||
												this.is_doing_html5_fullscreen ||
												this.is_doing_fullscreen ||
												!(e || t || n) ||
												i ||
												this.gesture_scalling ||
												(this.mode == this.MODE_DRAG &&
													!e &&
													!this.is_panning) ||
												this.is_doing_html5_fullscreen ||
												(this.supports_ms_pointer && this.gesture_scalling, 0)
										  );
								},
							},
							{
								key: 'dispatch_events',
								value: function (e, t, i, n, r) {
									var o,
										s,
										a = this,
										l = this.queue_obj,
										h = e.scale < l.scale;
									t && this.dispatchEvent('rotate'),
										((l.scale == e.scale &&
											e.centerx == l.centerx &&
											e.centery == l.centery) ||
											(l.scale == this.min_scale && l.scale == e.scale)) &&
											l.force_zoom_complete &&
											(this.dispatchEvent('zoom_started'),
											this.dispatchEvent('zoom_complete')),
										i &&
											(this.dispatchEvent('zoom_started'),
											h
												? this.dispatchEvent('zoom_in_started')
												: this.dispatchEvent('zoom_out_started'),
											this.auto_drag_switch &&
												this.forced_mode &&
												(this.forced_mode = null),
											(l.scale == e.scale &&
												e.centerx == l.centerx &&
												e.centery == l.centery) ||
											(l.scale == this.min_scale && l.scale == e.scale)
												? this.dispatchEvent('zoom_complete')
												: ((o = function (e) {
														e
															? a.dispatchEvent('zoom_in')
															: a.dispatchEvent('zoom_out'),
															a.dispatchEvent('zoom_complete');
												  }),
												  this.scalling_timeout &&
														(window.clearTimeout(this.scalling_timeout),
														(this.scalling_timeout = null)),
												  (this.scalling_timeout = window.setTimeout(
														function () {
															a.is_destroyed || o(h);
														},
														r
												  )))),
										(n || this.queue_obj.is_centering) &&
											((s = function () {
												e.mode == a.MODE_DRAG
													? a.dispatchEvent('move_end')
													: a.dispatchEvent('center_change_complete');
											}),
											this.centering_timeout &&
												(window.clearTimeout(this.centering_timeout),
												(this.centering_timeout = null)),
											!n && this.queue_obj.is_centering && (r = 0),
											(this.centering_timeout = window.setTimeout(function () {
												a.is_destroyed || s();
											}, r)),
											this.is_panning || this.animating
												? this.dispatchEvent('center_change')
												: i || this.dispatchEvent('move'));
								},
							},
							{
								key: 'set_transform',
								value: function (e, t, i, n) {
									var r = this.get_translate(t, i, n);
									return (e.current_translates = r);
								},
							},
							{
								key: 'scaleUp',
								value: function () {
									this.dispatchEvent('interaction_start'),
										this.dispatchEvent('activity_start'),
										(this.is_button_scalling = !0),
										this.transform({
											scale:
												Math.round(this.scale * this.SCALE_FACTOR * 1e5) / 1e5,
										});
								},
							},
							{
								key: 'scaleDown',
								value: function (e) {
									(e = e || this.SCALE_FACTOR),
										this.dispatchEvent('interaction_start'),
										this.dispatchEvent('activity_start'),
										(this.is_button_scalling = !0),
										this.transform({
											scale: Math.round((this.scale / e) * 1e5) / 1e5,
										});
								},
							},
							{
								key: 'clear_tiles_buffer',
								value: function (e, t) {
									var i,
										n,
										r = this.tiles_scale_obj;
									for (
										this.tiles_obj.style.opacity = '0',
											this.tiles_buffer = !1,
											this.tiles_cache = {},
											i = 0;
										i < e;
										i++
									)
										for (n = 0; n < t; n++)
											(r.images[i][n].buffered = !1),
												delete r.images[i][n].imageElement,
												(r.images[i][n].imageElement = new Image());
								},
							},
							{
								key: 'load_tile',
								value: function (e, t, i, n) {
									var r = this,
										o = this.sequence.get_image_url(
											this.frame_divider * this.hangle,
											this.optimal_scale,
											e.cc,
											e.rr,
											this.vangle
										);
									new Mo(o, e.imageElement, this.webp_support)
										.load()
										.then(function (o) {
											r.is_destroyed || n(e, t, i);
										});
								},
							},
							{
								key: 'resize_canvas',
								value: function (e, t, i) {
									var n, r, o;
									return (
										(r = e.width / 2),
										(o = e.height / 2),
										r < t || o < i || t < 1 || i < 1
											? e
											: (((n = document.createElement('canvas')).width = r),
											  (n.height = o),
											  n.getContext('2d').drawImage(e, 0, 0, r, o),
											  this.resize_canvas(n, t, i))
									);
								},
							},
							{
								key: 'drawOnCanvas',
								value: function (e, t, i, n, r, o) {
									var s, a, l, h;
									this.clear_rebuild_tiles_timeout(),
										(h =
											e[
												(l =
													'resized_image_' +
													(s = Math.round(n * this.devicePixelRatio)) +
													'_' +
													(a = Math.round(r * this.devicePixelRatio)))
											]) ||
											((h = this.resize_canvas(e, s, a)).width === e.width &&
												h.height === e.height) ||
											(e[l] = h),
										this.canvas_context.drawImage(
											h,
											t * this.devicePixelRatio,
											i * this.devicePixelRatio,
											s,
											a
										),
										o || this.rebuild_tiles();
								},
							},
							{
								key: 'set_panning',
								value: function (e) {
									this.panning_enabled = e;
								},
							},
							{
								key: 'set_forced_mode',
								value: function (e) {
									this.forced_mode = e;
								},
							},
							{
								key: 'get_loaded_frames',
								value: function () {
									var e,
										t,
										i = [];
									for (e = 0; e < this.base_frames.length; e++)
										if (this.base_frames[e])
											for (t = 0; t < this.base_frames[e].length; t++)
												this.base_frames[e][t] && i.push(e + '_' + t);
									return i;
								},
							},
							{
								key: 'frames_distance',
								value: function (e, t, i, n, r) {
									var o = Math.max(e, t),
										s = Math.min(e, t),
										a = o - s,
										l = r - o + s;
									return 'yes' === i ? Math.min(a, l) : n <= o && s < n ? l : a;
								},
							},
							{
								key: 'rotate_to',
								value: function (e) {
									if (this.rotating && this.is_rotate_to) {
										if (
											this.hangle === this.rotate_to_hangle &&
											this.vangle === this.rotate_to_vangle
										)
											return (
												(this.rotate_to_hangle = null),
												(this.rotate_to_vangle = null),
												(this.is_rotate_to = !1),
												(this.rotating = !1),
												this.dispatchEvent('animator_rotate'),
												!1
											);
										this.hangle === this.rotate_to_hangle &&
											(this.rotate_to_dir = 0),
											this.vangle === this.rotate_to_vangle &&
												(this.rotate_to_vdir = 0),
											this.transform({
												hangle: this.find_rotate_to_frame(),
												vangle: this.vangle + this.rotate_to_vdir,
											});
									}
									return e;
								},
							},
							{
								key: 'rotateTo',
								value: function (e, t) {
									var i = 0,
										n = this.get_transformed_value('hangle'),
										r = this.get_transformed_value('vangle');
									(this.rotate_to_hangle = void 0 !== e ? e : n),
										(this.rotate_to_vangle = void 0 !== t ? t : r),
										(void 0 !== e && e !== n) || (void 0 !== t && t !== r)
											? ((this.is_rotate_to = !0),
											  (this.rotating = !0),
											  (this.rotate_rate = 1),
											  70 < this.frames_no &&
													36 <
														(i = this.frames_distance(
															this.hangle,
															this.rotate_to_hangle,
															this.params.continous,
															this.params.border_frame,
															this.frames_no
														)) &&
													(this.rotate_rate = Math.round(i / 36)),
											  (this.rotate_to_dir = this.get_rotate_to_dir(
													n,
													this.rotate_to_hangle,
													this.params.continous,
													this.params.border_frame,
													this.frames_no
											  )),
											  (this.rotate_to_vdir = 0),
											  this.rotate_to_vangle > r
													? (this.rotate_to_vdir = 1)
													: this.rotate_to_vangle < r &&
													  (this.rotate_to_vdir = -1),
											  this.transform({
													hangle: this.find_rotate_to_frame(),
													vangle: r + this.rotate_to_vdir,
											  }))
											: this.dispatchEvent('animator_rotate');
								},
							},
							{
								key: 'find_rotate_to_frame',
								value: function () {
									var e = this.get_transformed_value('hangle'),
										t = e + this.rotate_to_dir * Math.ceil(this.rotate_rate);
									return (
										e < this.rotate_to_hangle && this.rotate_to_hangle < t
											? (t = this.rotate_to_hangle)
											: e > this.rotate_to_hangle &&
											  this.rotate_to_hangle > t &&
											  (t = this.rotate_to_hangle),
										t
									);
								},
							},
							{
								key: 'get_rotate_to_dir',
								value: function (e, t, i, n, r) {
									var o;
									return t === e
										? 0
										: ((o = 1),
										  'yes' !== i
												? e < t
													? e < n && n <= t && (o = -1)
													: ((o = -1), t < n && n <= e && (o = 1))
												: e < t
												? r / 2 < t - e && (o = -1)
												: e - t < r / 2 && (o = -1),
										  o);
								},
							},
							{
								key: 'get_rotation_hangle',
								value: function () {
									return this._rotation_hangle;
								},
							},
							{
								key: 'set_rotation_hangle',
								value: function (e) {
									var t, i, n;
									if (
										this.mode === this.MODE_ONEROTATION ||
										this.mode === this.MODE_ONEROTATION_SLOW
									) {
										if (
											((t = Math.round(e)),
											(i =
												this.rotation_start_hangle +
												t * this.auto_rotate_dir) >= this.frames_no
												? (i -= this.frames_no)
												: i < 0 && (i += this.frames_no),
											i !== (n = this.get_closest_frame(i, this.vangle).hangle))
										)
											return;
										this.transform({ hangle: n });
									}
								},
							},
							{
								key: 'oneRotation',
								value: function (e) {
									var t = this;
									(this.rotation_start_hangle =
										this.get_transformed_value('hangle')),
										(this._rotation_hangle = 0),
										(e = e || 1),
										(this.rotation_obj = {
											rotation_hangle: this._rotation_hangle,
										}),
										Ir.to(this.rotation_obj, {
											rotation_hangle: this.frames_no,
											ease: 'sine.inOut',
											duration: e,
											onUpdate: function () {
												t.set_rotation_hangle(t.rotation_obj.rotation_hangle);
											},
											onComplete: function () {
												t.dispatchEvent('animator_rotate'),
													(t.rotating = !1),
													t.transform({});
											},
										});
								},
							},
							{
								key: 'oneRotationSlow',
								value: function () {
									this.oneRotation(4);
								},
							},
							{
								key: 'refreshAnimationFrame',
								value: function () {
									var e = this;
									window.requestAnimationFrame(function () {
										e.on_refresh();
									});
								},
							},
							{
								key: 'ovlog',
								value: function (e) {
									this.ov_debugger && this.ov_debugger.log(e);
								},
							},
						]),
						e
					);
				})()),
				(zo = (function () {
					var e,
						t,
						i,
						n,
						r,
						o,
						s,
						a,
						l,
						h,
						c,
						u,
						_ =
							((e = Math),
							(n = (i = {}).lib = {}),
							(r = function () {}),
							(o = n.Base =
								{
									extend: function (e) {
										r.prototype = this;
										var t = new r();
										return (
											e && t.mixIn(e),
											t.hasOwnProperty('init') ||
												(t.init = function () {
													t.$super.init.apply(this, arguments);
												}),
											((t.init.prototype = t).$super = this),
											t
										);
									},
									create: function () {
										var e = this.extend();
										return e.init.apply(e, arguments), e;
									},
									init: function () {},
									mixIn: function (e) {
										for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
										e.hasOwnProperty('toString') &&
											(this.toString = e.toString);
									},
									clone: function () {
										return this.init.prototype.extend(this);
									},
								}),
							(s = n.WordArray =
								o.extend({
									init: function (e, t) {
										(e = this.words = e || []),
											(this.sigBytes = null != t ? t : 4 * e.length);
									},
									toString: function (e) {
										return (e || l).stringify(this);
									},
									concat: function (e) {
										var t,
											i = this.words,
											n = e.words,
											r = this.sigBytes;
										if (((e = e.sigBytes), this.clamp(), r % 4))
											for (t = 0; t < e; t++)
												i[(r + t) >>> 2] |=
													((n[t >>> 2] >>> (24 - (t % 4) * 8)) & 255) <<
													(24 - ((r + t) % 4) * 8);
										else if (65535 < n.length)
											for (t = 0; t < e; t += 4) i[(r + t) >>> 2] = n[t >>> 2];
										else i.push.apply(i, n);
										return (this.sigBytes += e), this;
									},
									clamp: function () {
										var t = this.words,
											i = this.sigBytes;
										(t[i >>> 2] &= 4294967295 << (32 - (i % 4) * 8)),
											(t.length = e.ceil(i / 4));
									},
									clone: function () {
										var e = o.clone.call(this);
										return (e.words = this.words.slice(0)), e;
									},
									random: function (t) {
										for (var i = [], n = 0; n < t; n += 4)
											i.push((4294967296 * e.random()) | 0);
										return new s.init(i, t);
									},
								})),
							(a = i.enc = {}),
							(l = a.Hex =
								{
									stringify: function (e) {
										var t,
											i,
											n,
											r = e.words;
										for (e = e.sigBytes, t = [], i = 0; i < e; i++)
											(n = (r[i >>> 2] >>> (24 - (i % 4) * 8)) & 255),
												t.push((n >>> 4).toString(16)),
												t.push((15 & n).toString(16));
										return t.join('');
									},
									parse: function (e) {
										for (var t = e.length, i = [], n = 0; n < t; n += 2)
											i[n >>> 3] |=
												Fr()(e.substr(n, 2), 16) << (24 - (n % 8) * 4);
										return new s.init(i, t / 2);
									},
								}),
							(h = a.Latin1 =
								{
									stringify: function (e) {
										var t,
											i,
											n = e.words;
										for (e = e.sigBytes, t = [], i = 0; i < e; i++)
											t.push(
												String.fromCharCode(
													(n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255
												)
											);
										return t.join('');
									},
									parse: function (e) {
										for (var t = e.length, i = [], n = 0; n < t; n++)
											i[n >>> 2] |=
												(255 & e.charCodeAt(n)) << (24 - (n % 4) * 8);
										return new s.init(i, t);
									},
								}),
							(c = a.Utf8 =
								{
									stringify: function (e) {
										try {
											return decodeURIComponent(escape(h.stringify(e)));
										} catch (e) {
											throw Error('Malformed UTF-8 data');
										}
									},
									parse: function (e) {
										return h.parse(unescape(encodeURIComponent(e)));
									},
								}),
							(u = n.BufferedBlockAlgorithm =
								o.extend({
									reset: function () {
										(this._data = new s.init()), (this._nDataBytes = 0);
									},
									_append: function (e) {
										'string' == typeof e && (e = c.parse(e)),
											this._data.concat(e),
											(this._nDataBytes += e.sigBytes);
									},
									_process: function (t) {
										var i,
											n = this._data,
											r = n.words,
											o = n.sigBytes,
											a = this.blockSize,
											l = o / (4 * a);
										if (
											((t =
												(l = t
													? e.ceil(l)
													: e.max((0 | l) - this._minBufferSize, 0)) * a),
											(o = e.min(4 * t, o)),
											t)
										) {
											for (i = 0; i < t; i += a) this._doProcessBlock(r, i);
											(i = r.splice(0, t)), (n.sigBytes -= o);
										}
										return new s.init(i, o);
									},
									clone: function () {
										var e = o.clone.call(this);
										return (e._data = this._data.clone()), e;
									},
									_minBufferSize: 0,
								})),
							(n.Hasher = u.extend({
								cfg: o.extend(),
								init: function (e) {
									(this.cfg = this.cfg.extend(e)), this.reset();
								},
								reset: function () {
									u.reset.call(this), this._doReset();
								},
								update: function (e) {
									return this._append(e), this._process(), this;
								},
								finalize: function (e) {
									return e && this._append(e), this._doFinalize();
								},
								blockSize: 16,
								_createHelper: function (e) {
									return function (t, i) {
										return new e.init(i).finalize(t);
									};
								},
								_createHmacHelper: function (e) {
									return function (i, n) {
										return new t.HMAC.init(e, n).finalize(i);
									};
								},
							})),
							(t = i.algo = {}),
							i);
					return (
						(function (e) {
							var t, i, n, r, o, s, a, l, h, c, u, d, f;
							for (
								i = (t = _).lib,
									n = i.WordArray,
									r = i.Hasher,
									i = t.algo,
									o = [],
									s = [],
									a = function (e) {
										return (4294967296 * (e - (0 | e))) | 0;
									},
									l = 2,
									h = 0;
								h < 64;

							) {
								e: {
									for (c = l, u = e.sqrt(c), d = 2; d <= u; d++)
										if (!(c % d)) {
											c = !1;
											break e;
										}
									c = !0;
								}
								c &&
									(h < 8 && (o[h] = a(e.pow(l, 0.5))),
									(s[h] = a(e.pow(l, 1 / 3))),
									h++),
									l++;
							}
							(f = []),
								(i = i.ORBITHASH =
									r.extend({
										_doReset: function () {
											this._hash = new n.init(o.slice(0));
										},
										_doProcessBlock: function (e, t) {
											var i, n, r, o, a, l, h, c, u, _, d, p;
											for (
												n = (i = this._hash.words)[0],
													r = i[1],
													o = i[2],
													a = i[3],
													l = i[4],
													h = i[5],
													c = i[6],
													u = i[7],
													_ = 0;
												_ < 64;
												_++
											)
												_ < 16
													? (f[_] = 0 | e[t + _])
													: ((d = f[_ - 15]),
													  (p = f[_ - 2]),
													  (f[_] =
															(((d << 25) | (d >>> 7)) ^
																((d << 14) | (d >>> 18)) ^
																(d >>> 3)) +
															f[_ - 7] +
															(((p << 15) | (p >>> 17)) ^
																((p << 13) | (p >>> 19)) ^
																(p >>> 10)) +
															f[_ - 16])),
													(d =
														u +
														(((l << 26) | (l >>> 6)) ^
															((l << 21) | (l >>> 11)) ^
															((l << 7) | (l >>> 25))) +
														((l & h) ^ (~l & c)) +
														s[_] +
														f[_]),
													(p =
														(((n << 30) | (n >>> 2)) ^
															((n << 19) | (n >>> 13)) ^
															((n << 10) | (n >>> 22))) +
														((n & r) ^ (n & o) ^ (r & o))),
													(u = c),
													(c = h),
													(h = l),
													(l = (a + d) | 0),
													(a = o),
													(o = r),
													(r = n),
													(n = (d + p) | 0);
											(i[0] = (i[0] + n) | 0),
												(i[1] = (i[1] + r) | 0),
												(i[2] = (i[2] + o) | 0),
												(i[3] = (i[3] + a) | 0),
												(i[4] = (i[4] + l) | 0),
												(i[5] = (i[5] + h) | 0),
												(i[6] = (i[6] + c) | 0),
												(i[7] = (i[7] + u) | 0);
										},
										_doFinalize: function () {
											var t = this._data,
												i = t.words,
												n = 8 * this._nDataBytes,
												r = 8 * t.sigBytes;
											return (
												(i[r >>> 5] |= 128 << (24 - (r % 32))),
												(i[14 + (((r + 64) >>> 9) << 4)] = e.floor(
													n / 4294967296
												)),
												(i[15 + (((r + 64) >>> 9) << 4)] = n),
												(t.sigBytes = 4 * i.length),
												this._process(),
												this._hash
											);
										},
										clone: function () {
											var e = r.clone.call(this);
											return (e._hash = this._hash.clone()), e;
										},
									})),
								(t.ORBITHASH = r._createHelper(i)),
								(t.HmacORBITHASH = r._createHmacHelper(i));
						})(Math),
						_
					);
				})()),
				(So = function (e, t) {
					var i,
						n,
						r = [];
					return !(
						0 < r.length &&
						((i = zo.ORBITHASH(window.location.host).toString(zo.enc.Hex)),
						!~r.indexOf(i) &&
							((n = window.location.host.split(':')[0]),
							'file:' !== window.location.protocol &&
								'localhost' !== window.location.host.split(':')[0] &&
								'127.0.0.1' !== n &&
								'' !== n)) &&
						('yes' === e.report_bugs &&
							alert(
								'[ORBITVU VIEWER] not licensed for domain: ' +
									window.location.host
							),
						(document.getElementById(t).innerHTML =
							'[ORBITVU VIEWER] not licensed for domain: ' +
							window.location.host),
						1)
					);
				}),
				(Fo = (function () {
					function e(t, i, n) {
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, e),
							(this.container_id = t),
							(this.orbitvu_path = i),
							(this.orbitvuargs = n),
							this
						);
					}
					return (
						(function (e, t, i) {
							t && fe(e.prototype, t), i && fe(e, i);
						})(e, [
							{
								key: 'parse_size',
								value: function (e, t) {
									return 'auto' == (e = '' + e)
										? '100%'
										: void 0 === e
										? t
										: ~e.indexOf('%') || ~e.indexOf('px')
										? e
										: Fr()(e) + 'px';
								},
							},
							{
								key: 'cleanup_container',
								value: function (e) {
									var t = 1;
									if (e && e.hasChildNodes())
										for (; e.childNodes.length >= t; )
											'script' != e.firstChild.nodeName.toLowerCase()
												? e.removeChild(e.firstChild)
												: t++;
								},
							},
							{
								key: 'setup_container_element',
								value: function (e, t, i) {
									var n, r;
									return (
										e.classList.add('orbitvu-container'),
										(e.style.width = t.width),
										(e.style.height = t.height),
										(e.style.margin = '0 auto'),
										'static' === getComputedStyle(e).position &&
											(e.style.position = 'relative'),
										'yes' !== t.disable_nosize &&
										0 === e.scrollHeight &&
										0 < e.scrollWidth &&
										~('' + e.style.height).indexOf('%')
											? (((n = document.createElement('div')).className =
													'ov-nosize ov-sixteen-nine'),
											  (n.style.position = 'relative'),
											  (n.style.height = '0'),
											  t.nosize_ratio
													? 2 === (r = t.nosize_ratio.split('/')).length &&
													  (n.style.paddingBottom =
															(100 * Fr()(r[1], 10)) / Fr()(r[0], 10) + '%')
													: (n.style.paddingBottom = '56.25%'),
											  e.appendChild(n),
											  { elem: n, nosize: !0 })
											: { elem: e, nosize: !1 }
									);
								},
							},
							{
								key: 'apply_sizing_css',
								value: function (e, t) {
									var i = e.style;
									(i.margin = '0'),
										(i.padding = '0'),
										(i.boxSizing = 'border-box'),
										(i.lineHeight = '0'),
										t &&
											((i.position = 'absolute'),
											(i.top = '0'),
											(i.left = '0'),
											(i.height = '100%'),
											(i.width = '100%'));
								},
							},
							{
								key: 'inject_viewer_html5',
								value: function (e) {
									var t,
										i,
										n,
										r,
										o,
										s,
										a,
										l,
										h,
										c,
										u,
										_,
										d,
										f,
										p,
										m = document.getElementById(this.container_id);
									if (
										((p = m.dataset
											? m.dataset.objuid
											: m.getAttribute('data-objuid')) &&
											window[p] &&
											window[p].destroy(),
										(t = e.container_parameters),
										(e.container_parameters = null),
										delete e.container_parameters,
										this.cleanup_container(m),
										(n = (i = this.setup_container_element(m, e, t)).elem),
										(r = i.nosize),
										(o = document.getElementById(this.container_id + '-info')),
										m)
									)
										return (
											r && (n.id = this.container_id + '-obj-nosize'),
											(s = this.container_id + '-obj-ovvvport'),
											(a = this.container_id + '-obj-canvas'),
											(l = this.container_id + '-obj-tiles'),
											(h = document.createElement('div')),
											(c = document.createElement('canvas')),
											(u = document.createElement('canvas')),
											(c.width = 0),
											(c.height = 0),
											(u.width = 0),
											(u.height = 0),
											this.apply_sizing_css(h, r),
											this.apply_sizing_css(c, r),
											this.apply_sizing_css(u, r),
											(c.style.width = '100%'),
											(u.style.width = '100%'),
											(c.style.height = '100%'),
											(u.style.height = '100%'),
											(c.style.display = 'block'),
											(u.style.display = 'block'),
											(u.style.position = 'absolute'),
											(u.style.zIndex = '30'),
											(u.style.top = '0'),
											(u.style.left = '0'),
											(h.id = s),
											(h.style.overflow = 'hidden'),
											(h.className = 'ovvvport'),
											(c.id = a),
											(c.className = 'orbitvu-viewer-object-canvas zindexer'),
											(u.id = l),
											(u.className = 'ovvtiles zindexer'),
											n.appendChild(h),
											h.appendChild(c),
											h.appendChild(u),
											(e.dialog_content = o || null),
											window.orbitvu_global_styles ||
												(window.orbitvu_global_styles = []),
											window.orbitvu_global_images ||
												(window.orbitvu_global_images = []),
											e.viewer_base &&
												((_ = (_ = (_ = e.viewer_base + 'viewer5.css').replace(
													'http:',
													''
												)).replace('https:', '')),
												~window.orbitvu_global_styles.indexOf(_) ||
													(window.orbitvu_global_styles.push(_),
													((d = document.createElement('link')).rel =
														'stylesheet'),
													(d.type = 'text/css'),
													(d.href = _),
													document.body.appendChild(d))),
											m.setAttribute('tabindex', '999999'),
											(f = 'ovc' + Fr()(99999999 * Math.random())),
											m.dataset
												? (m.dataset.objuid = f)
												: m.setAttribute('data-objuid', f),
											(window[f] = new Do(this.container_id, e)),
											window[f]
										);
								},
							},
							{
								key: 'inject_orbitvu',
								value: function () {
									var e,
										t,
										i,
										n = this,
										r = {};
									for (e in this.orbitvuargs)
										this.orbitvuargs.hasOwnProperty(e) &&
											(r[e] = this.orbitvuargs[e]);
									return (
										!1 !== So(r, this.container_id) &&
										((r.width = this.parse_size(r.width, '400px')),
										(r.height = this.parse_size(r.height, '300px')),
										void 0 === r.iecachefix && (r.iecachefix = 'no'),
										(t = this.orbitvu_path),
										'yes' === r.iecachefix &&
											(t += '?un=' + Math.round(1e4 * Math.random())),
										void 0 === r.viewer_base &&
											~t.lastIndexOf('/') &&
											(r.viewer_base = t.slice(0, t.lastIndexOf('/') + 1)),
										'yes' !== r.social ||
											r.social_url ||
											(r.social_url = encodeURIComponent(window.location.href)),
										(i = new Pr()),
										void ('file:' !== window.location.protocol ||
										'' !== window.location.host.split(':')[0] ||
										i.isIOS() ||
										i.isOrbitvu()
											? (i.has_webp_support('lossy', function (e, t) {
													(r.webp_support = !!t), n.inject_viewer_html5(r);
											  }),
											  (i = null))
											: ('yes' === r.report_bugs &&
													alert(
														"[ORBITVU VIEWER] Your web browser blocked ORBITVU VIEWER because you're using file:// protocol. Please upload presentation to ORBITVU SUN or some HTTP server."
													),
											  (document.getElementById(this.container_id).innerHTML =
													'<div style="max-width: 100%; max-height: 100%; overflow: auto; padding: 5px; color: #444444; font-family: sans-serif; text-align: center; line-height: 2em;"><div style="font-size: 0.8em;">[ORBITVU VIEWER]</div><div style="font-weight: bold;">Your web browser blocked ORBITVU VIEWER because you\'re running it directly from your hard drive (using <strong>file://</strong> protocol).</div><div style="font-size: 0.9em; color: #666666;">Please upload 360&deg; presentation to <a style="color: #00B6A7; text-decoration: none;" href="https://orbitvu.co">ORBITVU SUN</a> or use some HTTP server.</div></div>'))))
									);
								},
							},
						]),
						e
					);
				})()),
				i.d(t, 'inject_orbitvu', function () {
					return ve;
				}),
				i.d(t, 'inject_viewer_html5', function () {
					return ge;
				}),
				i.d(t, 'get_orbitvu_gsap', function () {
					return Ae;
				});
		},
	])
);
