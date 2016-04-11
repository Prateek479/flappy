! function(t, e) {
  "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.Phaser = e()
}(this, function() {
  function t() {
    return e.Matrix = "undefined" != typeof Float32Array ? Float32Array : Array, e.Matrix
  }
  var e = e || {},
    i = i || {
      VERSION: "1.1.4",
      DEV_VERSION: "1.1.4",
      GAMES: [],
      AUTO: 0,
      CANVAS: 1,
      WEBGL: 2,
      HEADLESS: 3,
      SPRITE: 0,
      BUTTON: 1,
      BULLET: 2,
      GRAPHICS: 3,
      TEXT: 4,
      TILESPRITE: 5,
      BITMAPTEXT: 6,
      GROUP: 7,
      RENDERTEXTURE: 8,
      TILEMAP: 9,
      TILEMAPLAYER: 10,
      EMITTER: 11,
      POLYGON: 12,
      BITMAPDATA: 13,
      CANVAS_FILTER: 14,
      WEBGL_FILTER: 15,
      NONE: 0,
      LEFT: 1,
      RIGHT: 2,
      UP: 3,
      DOWN: 4,
      CANVAS_PX_ROUND: !1,
      CANVAS_CLEAR_RECT: !0
    };
  e.InteractionManager = function() {}, i.Utils = {
    shuffle: function(t) {
      for (var e = t.length - 1; e > 0; e--) {
        var i = Math.floor(Math.random() * (e + 1)),
          s = t[e];
        t[e] = t[i], t[i] = s
      }
      return t
    },
    pad: function(t, e, i, s) {
      if ("undefined" == typeof e) var e = 0;
      if ("undefined" == typeof i) var i = " ";
      if ("undefined" == typeof s) var s = 3;
      var n = 0;
      if (e + 1 >= t.length) switch (s) {
        case 1:
          t = Array(e + 1 - t.length).join(i) + t;
          break;
        case 3:
          var r = Math.ceil((n = e - t.length) / 2),
            o = n - r;
          t = Array(o + 1).join(i) + t + Array(r + 1).join(i);
          break;
        default:
          t += Array(e + 1 - t.length).join(i)
      }
      return t
    },
    isPlainObject: function(t) {
      if ("object" != typeof t || t.nodeType || t === t.window) return !1;
      try {
        if (t.constructor && !hasOwn.call(t.constructor.prototype, "isPrototypeOf")) return !1
      } catch (e) {
        return !1
      }
      return !0
    },
    extend: function() {
      var t, e, s, n, r, o, a = arguments[0] || {},
        h = 1,
        l = arguments.length,
        c = !1;
      for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, h = 2), l === h && (a = this, --h); l > h; h++)
        if (null != (t = arguments[h]))
          for (e in t) s = a[e], n = t[e], a !== n && (c && n && (i.Utils.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, o = s && Array.isArray(s) ? s : []) : o = s && i.Utils.isPlainObject(s) ? s : {}, a[e] = i.Utils.extend(c, o, n)) : void 0 !== n && (a[e] = n));
      return a
    }
  }, e.hex2rgb = function(t) {
    return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255]
  }, "function" != typeof Function.prototype.bind && (Function.prototype.bind = function() {
    var t = Array.prototype.slice;
    return function(e) {
      function i() {
        var r = n.concat(t.call(arguments));
        s.apply(this instanceof i ? this : e, r)
      }
      var s = this,
        n = t.call(arguments, 1);
      if ("function" != typeof s) throw new TypeError;
      return i.prototype = function r(t) {
        return t && (r.prototype = t), this instanceof r ? void 0 : new r
      }(s.prototype), i
    }
  }()), Array.isArray || (Array.isArray = function(t) {
    return "[object Array]" == Object.prototype.toString.call(t)
  }), t(), e.mat3 = {}, e.mat3.create = function() {
    var t = new e.Matrix(9);
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
  }, e.mat3.identity = function(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
  }, e.mat4 = {}, e.mat4.create = function() {
    var t = new e.Matrix(16);
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
  }, e.mat3.multiply = function(t, e, i) {
    i || (i = t);
    var s = t[0],
      n = t[1],
      r = t[2],
      o = t[3],
      a = t[4],
      h = t[5],
      l = t[6],
      c = t[7],
      u = t[8],
      d = e[0],
      p = e[1],
      f = e[2],
      g = e[3],
      m = e[4],
      y = e[5],
      _ = e[6],
      x = e[7],
      v = e[8];
    return i[0] = d * s + p * o + f * l, i[1] = d * n + p * a + f * c, i[2] = d * r + p * h + f * u, i[3] = g * s + m * o + y * l, i[4] = g * n + m * a + y * c, i[5] = g * r + m * h + y * u, i[6] = _ * s + x * o + v * l, i[7] = _ * n + x * a + v * c, i[8] = _ * r + x * h + v * u, i
  }, e.mat3.clone = function(t) {
    var i = new e.Matrix(9);
    return i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[4] = t[4], i[5] = t[5], i[6] = t[6], i[7] = t[7], i[8] = t[8], i
  }, e.mat3.transpose = function(t, e) {
    if (!e || t === e) {
      var i = t[1],
        s = t[2],
        n = t[5];
      return t[1] = t[3], t[2] = t[6], t[3] = i, t[5] = t[7], t[6] = s, t[7] = n, t
    }
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], e
  }, e.mat3.toMat4 = function(t, i) {
    return i || (i = e.mat4.create()), i[15] = 1, i[14] = 0, i[13] = 0, i[12] = 0, i[11] = 0, i[10] = t[8], i[9] = t[7], i[8] = t[6], i[7] = 0, i[6] = t[5], i[5] = t[4], i[4] = t[3], i[3] = 0, i[2] = t[2], i[1] = t[1], i[0] = t[0], i
  }, e.mat4.create = function() {
    var t = new e.Matrix(16);
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
  }, e.mat4.transpose = function(t, e) {
    if (!e || t === e) {
      var i = t[1],
        s = t[2],
        n = t[3],
        r = t[6],
        o = t[7],
        a = t[11];
      return t[1] = t[4], t[2] = t[8], t[3] = t[12], t[4] = i, t[6] = t[9], t[7] = t[13], t[8] = s, t[9] = r, t[11] = t[14], t[12] = n, t[13] = o, t[14] = a, t
    }
    return e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15], e
  }, e.mat4.multiply = function(t, e, i) {
    i || (i = t);
    var s = t[0],
      n = t[1],
      r = t[2],
      o = t[3],
      a = t[4],
      h = t[5],
      l = t[6],
      c = t[7],
      u = t[8],
      d = t[9],
      p = t[10],
      f = t[11],
      g = t[12],
      m = t[13],
      y = t[14],
      _ = t[15],
      x = e[0],
      v = e[1],
      b = e[2],
      w = e[3];
    return i[0] = x * s + v * a + b * u + w * g, i[1] = x * n + v * h + b * d + w * m, i[2] = x * r + v * l + b * p + w * y, i[3] = x * o + v * c + b * f + w * _, x = e[4], v = e[5], b = e[6], w = e[7], i[4] = x * s + v * a + b * u + w * g, i[5] = x * n + v * h + b * d + w * m, i[6] = x * r + v * l + b * p + w * y, i[7] = x * o + v * c + b * f + w * _, x = e[8], v = e[9], b = e[10], w = e[11], i[8] = x * s + v * a + b * u + w * g, i[9] = x * n + v * h + b * d + w * m, i[10] = x * r + v * l + b * p + w * y, i[11] = x * o + v * c + b * f + w * _, x = e[12], v = e[13], b = e[14], w = e[15], i[12] = x * s + v * a + b * u + w * g, i[13] = x * n + v * h + b * d + w * m, i[14] = x * r + v * l + b * p + w * y, i[15] = x * o + v * c + b * f + w * _, i
  }, e.Point = function(t, e) {
    this.x = t || 0, this.y = e || 0
  }, e.Point.prototype.clone = function() {
    return new e.Point(this.x, this.y)
  }, e.Point.prototype.constructor = e.Point, e.Rectangle = function(t, e, i, s) {
    this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = s || 0
  }, e.Rectangle.prototype.clone = function() {
    return new e.Rectangle(this.x, this.y, this.width, this.height)
  }, e.Rectangle.prototype.contains = function(t, e) {
    if (this.width <= 0 || this.height <= 0) return !1;
    var i = this.x;
    if (t >= i && t <= i + this.width) {
      var s = this.y;
      if (e >= s && e <= s + this.height) return !0
    }
    return !1
  }, e.Rectangle.prototype.constructor = e.Rectangle, e.Polygon = function(t) {
    if (t instanceof Array || (t = Array.prototype.slice.call(arguments)), "number" == typeof t[0]) {
      for (var i = [], s = 0, n = t.length; n > s; s += 2) i.push(new e.Point(t[s], t[s + 1]));
      t = i
    }
    this.points = t
  }, e.Polygon.prototype.clone = function() {
    for (var t = [], i = 0; i < this.points.length; i++) t.push(this.points[i].clone());
    return new e.Polygon(t)
  }, e.Polygon.prototype.contains = function(t, e) {
    for (var i = !1, s = 0, n = this.points.length - 1; s < this.points.length; n = s++) {
      var r = this.points[s].x,
        o = this.points[s].y,
        a = this.points[n].x,
        h = this.points[n].y,
        l = o > e != h > e && (a - r) * (e - o) / (h - o) + r > t;
      l && (i = !i)
    }
    return i
  }, e.Polygon.prototype.constructor = e.Polygon, e.DisplayObject = function() {
    this.last = this, this.first = this, this.position = new e.Point, this.scale = new e.Point(1, 1), this.pivot = new e.Point(0, 0), this.rotation = 0, this.alpha = 1, this.visible = !0, this.hitArea = null, this.buttonMode = !1, this.renderable = !1, this.parent = null, this.stage = null, this.worldAlpha = 1, this._interactive = !1, this.defaultCursor = "pointer", this.worldTransform = e.mat3.create(), this.localTransform = e.mat3.create(), this.color = [], this.dynamic = !0, this._sr = 0, this._cr = 1, this.filterArea = new e.Rectangle(0, 0, 1, 1)
  }, e.DisplayObject.prototype.constructor = e.DisplayObject, e.DisplayObject.prototype.setInteractive = function(t) {
    this.interactive = t
  }, Object.defineProperty(e.DisplayObject.prototype, "interactive", {
    get: function() {
      return this._interactive
    },
    set: function(t) {
      this._interactive = t, this.stage && (this.stage.dirty = !0)
    }
  }), Object.defineProperty(e.DisplayObject.prototype, "mask", {
    get: function() {
      return this._mask
    },
    set: function(t) {
      t ? this._mask ? (t.start = this._mask.start, t.end = this._mask.end) : (this.addFilter(t), t.renderable = !1) : (this.removeFilter(this._mask), this._mask.renderable = !0), this._mask = t
    }
  }), Object.defineProperty(e.DisplayObject.prototype, "filters", {
    get: function() {
      return this._filters
    },
    set: function(t) {
      if (t) {
        this._filters && this.removeFilter(this._filters), this.addFilter(t);
        for (var e = [], i = 0; i < t.length; i++)
          for (var s = t[i].passes, n = 0; n < s.length; n++) e.push(s[n]);
        t.start.filterPasses = e
      } else this._filters && this.removeFilter(this._filters);
      this._filters = t
    }
  }), e.DisplayObject.prototype.addFilter = function(t) {
    var i = new e.FilterBlock,
      s = new e.FilterBlock;
    t.start = i, t.end = s, i.data = t, s.data = t, i.first = i.last = this, s.first = s.last = this, i.open = !0, i.target = this;
    var n, r, o = i,
      a = i;
    r = this.first._iPrev, r ? (n = r._iNext, o._iPrev = r, r._iNext = o) : n = this, n && (n._iPrev = a, a._iNext = n), o = s, a = s, n = null, r = null, r = this.last, n = r._iNext, n && (n._iPrev = a, a._iNext = n), o._iPrev = r, r._iNext = o;
    for (var h = this, l = this.last; h;) h.last === l && (h.last = s), h = h.parent;
    this.first = i, this.__renderGroup && this.__renderGroup.addFilterBlocks(i, s)
  }, e.DisplayObject.prototype.removeFilter = function(t) {
    var e = t.start,
      i = e._iNext,
      s = e._iPrev;
    i && (i._iPrev = s), s && (s._iNext = i), this.first = e._iNext;
    var n = t.end;
    i = n._iNext, s = n._iPrev, i && (i._iPrev = s), s._iNext = i;
    for (var r = n._iPrev, o = this; o.last === n && (o.last = r, o = o.parent););
    this.__renderGroup && this.__renderGroup.removeFilterBlocks(e, n)
  }, e.DisplayObject.prototype.updateTransform = function() {
    this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation));
    var t = this.localTransform,
      i = this.parent.worldTransform,
      s = this.worldTransform;
    t[0] = this._cr * this.scale.x, t[1] = -this._sr * this.scale.y, t[3] = this._sr * this.scale.x, t[4] = this._cr * this.scale.y;
    var n = this.pivot.x,
      r = this.pivot.y,
      o = t[0],
      a = t[1],
      h = this.position.x - t[0] * n - r * t[1],
      l = t[3],
      c = t[4],
      u = this.position.y - t[4] * r - n * t[3],
      d = i[0],
      p = i[1],
      f = i[2],
      g = i[3],
      m = i[4],
      y = i[5];
    t[2] = h, t[5] = u, s[0] = d * o + p * l, s[1] = d * a + p * c, s[2] = d * h + p * u + f, s[3] = g * o + m * l, s[4] = g * a + m * c, s[5] = g * h + m * u + y, this.worldAlpha = this.alpha * this.parent.worldAlpha, this.vcount = e.visibleCount
  }, e.visibleCount = 0, e.DisplayObjectContainer = function() {
    e.DisplayObject.call(this), this.children = []
  }, e.DisplayObjectContainer.prototype = Object.create(e.DisplayObject.prototype), e.DisplayObjectContainer.prototype.constructor = e.DisplayObjectContainer, e.DisplayObjectContainer.prototype.addChild = function(t) {
    if (t.parent && t.parent !== this && t.parent.removeChild(t), t.parent = this, this.children.push(t), this.stage) {
      var e = t;
      do e.interactive && (this.stage.dirty = !0), e.stage = this.stage, e = e._iNext; while (e)
    }
    var i, s, n = t.first,
      r = t.last;
    s = this._filters || this._mask ? this.last._iPrev : this.last, i = s._iNext;
    for (var o = this, a = s; o;) o.last === a && (o.last = t.last), o = o.parent;
    i && (i._iPrev = r, r._iNext = i), n._iPrev = s, s._iNext = n, this.__renderGroup && (t.__renderGroup && t.__renderGroup.removeDisplayObjectAndChildren(t), this.__renderGroup.addDisplayObjectAndChildren(t))
  }, e.DisplayObjectContainer.prototype.addChildAt = function(t, e) {
    if (!(e >= 0 && e <= this.children.length)) throw new Error(t + " The index " + e + " supplied is out of bounds " + this.children.length);
    if (void 0 !== t.parent && t.parent.removeChild(t), t.parent = this, this.stage) {
      var i = t;
      do i.interactive && (this.stage.dirty = !0), i.stage = this.stage, i = i._iNext; while (i)
    }
    var s, n, r = t.first,
      o = t.last;
    if (e === this.children.length) {
      n = this.last;
      for (var a = this, h = this.last; a;) a.last === h && (a.last = t.last), a = a.parent
    } else n = 0 === e ? this : this.children[e - 1].last;
    s = n._iNext, s && (s._iPrev = o, o._iNext = s), r._iPrev = n, n._iNext = r, this.children.splice(e, 0, t), this.__renderGroup && (t.__renderGroup && t.__renderGroup.removeDisplayObjectAndChildren(t), this.__renderGroup.addDisplayObjectAndChildren(t))
  }, e.DisplayObjectContainer.prototype.swapChildren = function(t, e) {
    if (t !== e) {
      var i = this.children.indexOf(t),
        s = this.children.indexOf(e);
      if (0 > i || 0 > s) throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");
      this.removeChild(t), this.removeChild(e), s > i ? (this.addChildAt(e, i), this.addChildAt(t, s)) : (this.addChildAt(t, s), this.addChildAt(e, i))
    }
  }, e.DisplayObjectContainer.prototype.getChildAt = function(t) {
    if (t >= 0 && t < this.children.length) return this.children[t];
    throw new Error("Both the supplied DisplayObjects must be a child of the caller " + this)
  }, e.DisplayObjectContainer.prototype.removeChild = function(t) {
    var e = this.children.indexOf(t);
    if (-1 === e) throw new Error(t + " The supplied DisplayObject must be a child of the caller " + this);
    var i = t.first,
      s = t.last,
      n = s._iNext,
      r = i._iPrev;
    if (n && (n._iPrev = r), r._iNext = n, this.last === s)
      for (var o = i._iPrev, a = this; a.last === s && (a.last = o, a = a.parent););
    if (s._iNext = null, i._iPrev = null, this.stage) {
      var h = t;
      do h.interactive && (this.stage.dirty = !0), h.stage = null, h = h._iNext; while (h)
    }
    t.__renderGroup && t.__renderGroup.removeDisplayObjectAndChildren(t), t.parent = void 0, this.children.splice(e, 1)
  }, e.DisplayObjectContainer.prototype.updateTransform = function() {
    if (this.visible) {
      e.DisplayObject.prototype.updateTransform.call(this);
      for (var t = 0, i = this.children.length; i > t; t++) this.children[t].updateTransform()
    }
  }, e.blendModes = {}, e.blendModes.NORMAL = 0, e.blendModes.SCREEN = 1, e.Sprite = function(t) {
    e.DisplayObjectContainer.call(this), this.anchor = new e.Point, this.texture = t, this.blendMode = e.blendModes.NORMAL, this._width = 0, this._height = 0, t.baseTexture.hasLoaded ? this.updateFrame = !0 : (this.onTextureUpdateBind = this.onTextureUpdate.bind(this), this.texture.addEventListener("update", this.onTextureUpdateBind)), this.renderable = !0
  }, e.Sprite.prototype = Object.create(e.DisplayObjectContainer.prototype), e.Sprite.prototype.constructor = e.Sprite, Object.defineProperty(e.Sprite.prototype, "width", {
    get: function() {
      return this.scale.x * this.texture.frame.width
    },
    set: function(t) {
      this.scale.x = t / this.texture.frame.width, this._width = t
    }
  }), Object.defineProperty(e.Sprite.prototype, "height", {
    get: function() {
      return this.scale.y * this.texture.frame.height
    },
    set: function(t) {
      this.scale.y = t / this.texture.frame.height, this._height = t
    }
  }), e.Sprite.prototype.setTexture = function(t) {
    this.texture.baseTexture !== t.baseTexture ? (this.textureChange = !0, this.texture = t, this.__renderGroup && this.__renderGroup.updateTexture(this)) : this.texture = t, this.updateFrame = !0
  }, e.Sprite.prototype.onTextureUpdate = function() {
    this._width && (this.scale.x = this._width / this.texture.frame.width), this._height && (this.scale.y = this._height / this.texture.frame.height), this.updateFrame = !0
  }, e.Sprite.fromFrame = function(t) {
    var i = e.TextureCache[t];
    if (!i) throw new Error('The frameId "' + t + '" does not exist in the texture cache' + this);
    return new e.Sprite(i)
  }, e.Sprite.fromImage = function(t) {
    var i = e.Texture.fromImage(t);
    return new e.Sprite(i)
  }, e.Stage = function(t) {
    e.DisplayObjectContainer.call(this), this.worldTransform = e.mat3.create(), this.interactive = !0, this.interactionManager = new e.InteractionManager(this), this.dirty = !0, this.__childrenAdded = [], this.__childrenRemoved = [], this.stage = this, this.stage.hitArea = new e.Rectangle(0, 0, 1e5, 1e5), this.setBackgroundColor(t), this.worldVisible = !0
  }, e.Stage.prototype = Object.create(e.DisplayObjectContainer.prototype), e.Stage.prototype.constructor = e.Stage, e.Stage.prototype.setInteractionDelegate = function(t) {
    this.interactionManager.setTargetDomElement(t)
  }, e.Stage.prototype.updateTransform = function() {
    this.worldAlpha = 1, this.vcount = e.visibleCount;
    for (var t = 0, i = this.children.length; i > t; t++) this.children[t].updateTransform();
    this.dirty && (this.dirty = !1, this.interactionManager.dirty = !0), this.interactive && this.interactionManager.update()
  }, e.Stage.prototype.setBackgroundColor = function(t) {
    this.backgroundColor = t || 0, this.backgroundColorSplit = e.hex2rgb(this.backgroundColor);
    var i = this.backgroundColor.toString(16);
    i = "000000".substr(0, 6 - i.length) + i, this.backgroundColorString = "#" + i
  }, e.Stage.prototype.getMousePosition = function() {
    return this.interactionManager.mouse.global
  }, e.CustomRenderable = function() {
    e.DisplayObject.call(this), this.renderable = !0
  }, e.CustomRenderable.prototype = Object.create(e.DisplayObject.prototype), e.CustomRenderable.prototype.constructor = e.CustomRenderable, e.CustomRenderable.prototype.renderCanvas = function() {}, e.CustomRenderable.prototype.initWebGL = function() {}, e.CustomRenderable.prototype.renderWebGL = function() {}, e.Strip = function(t, i, s) {
    e.DisplayObjectContainer.call(this), this.texture = t, this.blendMode = e.blendModes.NORMAL;
    try {
      this.uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1]), this.verticies = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0]), this.colors = new Float32Array([1, 1, 1, 1]), this.indices = new Uint16Array([0, 1, 2, 3])
    } catch (n) {
      this.uvs = [0, 1, 1, 1, 1, 0, 0, 1], this.verticies = [0, 0, 0, 0, 0, 0, 0, 0, 0], this.colors = [1, 1, 1, 1], this.indices = [0, 1, 2, 3]
    }
    this.width = i, this.height = s, t.baseTexture.hasLoaded ? (this.width = this.texture.frame.width, this.height = this.texture.frame.height, this.updateFrame = !0) : (this.onTextureUpdateBind = this.onTextureUpdate.bind(this), this.texture.addEventListener("update", this.onTextureUpdateBind)), this.renderable = !0
  }, e.Strip.prototype = Object.create(e.DisplayObjectContainer.prototype), e.Strip.prototype.constructor = e.Strip, e.Strip.prototype.setTexture = function(t) {
    this.texture = t, this.width = t.frame.width, this.height = t.frame.height, this.updateFrame = !0
  }, e.Strip.prototype.onTextureUpdate = function() {
    this.updateFrame = !0
  }, e.Rope = function(t, i) {
    e.Strip.call(this, t), this.points = i;
    try {
      this.verticies = new Float32Array(4 * i.length), this.uvs = new Float32Array(4 * i.length), this.colors = new Float32Array(2 * i.length), this.indices = new Uint16Array(2 * i.length)
    } catch (s) {
      this.verticies = new Array(4 * i.length), this.uvs = new Array(4 * i.length), this.colors = new Array(2 * i.length), this.indices = new Array(2 * i.length)
    }
    this.refresh()
  }, e.Rope.prototype = Object.create(e.Strip.prototype), e.Rope.prototype.constructor = e.Rope, e.Rope.prototype.refresh = function() {
    var t = this.points;
    if (!(t.length < 1)) {
      var e = this.uvs,
        i = t[0],
        s = this.indices,
        n = this.colors;
      this.count -= .2, e[0] = 0, e[1] = 1, e[2] = 0, e[3] = 1, n[0] = 1, n[1] = 1, s[0] = 0, s[1] = 1;
      for (var r, o, a, h = t.length, l = 1; h > l; l++) r = t[l], o = 4 * l, a = l / (h - 1), l % 2 ? (e[o] = a, e[o + 1] = 0, e[o + 2] = a, e[o + 3] = 1) : (e[o] = a, e[o + 1] = 0, e[o + 2] = a, e[o + 3] = 1), o = 2 * l, n[o] = 1, n[o + 1] = 1, o = 2 * l, s[o] = o, s[o + 1] = o + 1, i = r
    }
  }, e.Rope.prototype.updateTransform = function() {
    var t = this.points;
    if (!(t.length < 1)) {
      var i, s = t[0],
        n = {
          x: 0,
          y: 0
        };
      this.count -= .2;
      var r = this.verticies;
      r[0] = s.x + n.x, r[1] = s.y + n.y, r[2] = s.x - n.x, r[3] = s.y - n.y;
      for (var o, a, h, l, c, u = t.length, d = 1; u > d; d++) o = t[d], a = 4 * d, i = d < t.length - 1 ? t[d + 1] : o, n.y = -(i.x - s.x), n.x = i.y - s.y, h = 10 * (1 - d / (u - 1)), h > 1 && (h = 1), l = Math.sqrt(n.x * n.x + n.y * n.y), c = this.texture.height / 2, n.x /= l, n.y /= l, n.x *= c, n.y *= c, r[a] = o.x + n.x, r[a + 1] = o.y + n.y, r[a + 2] = o.x - n.x, r[a + 3] = o.y - n.y, s = o;
      e.DisplayObjectContainer.prototype.updateTransform.call(this)
    }
  }, e.Rope.prototype.setTexture = function(t) {
    this.texture = t, this.updateFrame = !0
  }, e.TilingSprite = function(t, i, s) {
    e.DisplayObjectContainer.call(this), this.texture = t, this.width = i, this.height = s, this.tileScale = new e.Point(1, 1), this.tilePosition = new e.Point(0, 0), this.renderable = !0, this.blendMode = e.blendModes.NORMAL
  }, e.TilingSprite.prototype = Object.create(e.DisplayObjectContainer.prototype), e.TilingSprite.prototype.constructor = e.TilingSprite, e.TilingSprite.prototype.setTexture = function(t) {
    this.texture = t, this.updateFrame = !0
  }, e.TilingSprite.prototype.onTextureUpdate = function() {
    this.updateFrame = !0
  }, e.AbstractFilter = function(t, e) {
    this.passes = [this], this.dirty = !0, this.padding = 0, this.uniforms = e || {}, this.fragmentSrc = t || []
  }, e.FilterBlock = function() {
    this.visible = !0, this.renderable = !0
  }, e.Graphics = function() {
    e.DisplayObjectContainer.call(this), this.renderable = !0, this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = "black", this.graphicsData = [], this.currentPath = {
      points: []
    }
  }, e.Graphics.prototype = Object.create(e.DisplayObjectContainer.prototype), e.Graphics.prototype.constructor = e.Graphics, e.Graphics.prototype.lineStyle = function(t, i, s) {
    this.currentPath.points.length || this.graphicsData.pop(), this.lineWidth = t || 0, this.lineColor = i || 0, this.lineAlpha = arguments.length < 3 ? 1 : s, this.currentPath = {
      lineWidth: this.lineWidth,
      lineColor: this.lineColor,
      lineAlpha: this.lineAlpha,
      fillColor: this.fillColor,
      fillAlpha: this.fillAlpha,
      fill: this.filling,
      points: [],
      type: e.Graphics.POLY
    }, this.graphicsData.push(this.currentPath)
  }, e.Graphics.prototype.moveTo = function(t, i) {
    this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = this.currentPath = {
      lineWidth: this.lineWidth,
      lineColor: this.lineColor,
      lineAlpha: this.lineAlpha,
      fillColor: this.fillColor,
      fillAlpha: this.fillAlpha,
      fill: this.filling,
      points: [],
      type: e.Graphics.POLY
    }, this.currentPath.points.push(t, i), this.graphicsData.push(this.currentPath)
  }, e.Graphics.prototype.lineTo = function(t, e) {
    this.currentPath.points.push(t, e), this.dirty = !0
  }, e.Graphics.prototype.beginFill = function(t, e) {
    this.filling = !0, this.fillColor = t || 0, this.fillAlpha = arguments.length < 2 ? 1 : e
  }, e.Graphics.prototype.endFill = function() {
    this.filling = !1, this.fillColor = null, this.fillAlpha = 1
  }, e.Graphics.prototype.drawRect = function(t, i, s, n) {
    this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = {
      lineWidth: this.lineWidth,
      lineColor: this.lineColor,
      lineAlpha: this.lineAlpha,
      fillColor: this.fillColor,
      fillAlpha: this.fillAlpha,
      fill: this.filling,
      points: [t, i, s, n],
      type: e.Graphics.RECT
    }, this.graphicsData.push(this.currentPath), this.dirty = !0
  }, e.Graphics.prototype.drawCircle = function(t, i, s) {
    this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = {
      lineWidth: this.lineWidth,
      lineColor: this.lineColor,
      lineAlpha: this.lineAlpha,
      fillColor: this.fillColor,
      fillAlpha: this.fillAlpha,
      fill: this.filling,
      points: [t, i, s, s],
      type: e.Graphics.CIRC
    }, this.graphicsData.push(this.currentPath), this.dirty = !0
  }, e.Graphics.prototype.drawEllipse = function(t, i, s, n) {
    this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = {
      lineWidth: this.lineWidth,
      lineColor: this.lineColor,
      lineAlpha: this.lineAlpha,
      fillColor: this.fillColor,
      fillAlpha: this.fillAlpha,
      fill: this.filling,
      points: [t, i, s, n],
      type: e.Graphics.ELIP
    }, this.graphicsData.push(this.currentPath), this.dirty = !0
  }, e.Graphics.prototype.clear = function() {
    this.lineWidth = 0, this.filling = !1, this.dirty = !0, this.clearDirty = !0, this.graphicsData = [], this.bounds = null
  }, e.Graphics.prototype.updateFilterBounds = function() {
    if (!this.bounds) {
      for (var t, i, s, n = 1 / 0, r = -1 / 0, o = 1 / 0, a = -1 / 0, h = 0; h < this.graphicsData.length; h++) {
        var l = this.graphicsData[h],
          c = l.type,
          u = l.lineWidth;
        if (t = l.points, c === e.Graphics.RECT) {
          i = t.x - u / 2, s = t.y - u / 2;
          var d = t.width + u,
            p = t.height + u;
          n = n > i ? i : n, r = i + d > r ? i + d : r, o = o > s ? i : o, a = s + p > a ? s + p : a
        } else if (c === e.Graphics.CIRC || c === e.Graphics.ELIP) {
          i = t.x, s = t.y;
          var f = t.radius + u / 2;
          n = n > i - f ? i - f : n, r = i + f > r ? i + f : r, o = o > s - f ? s - f : o, a = s + f > a ? s + f : a
        } else
          for (var g = 0; g < t.length; g += 2) i = t[g], s = t[g + 1], n = n > i - u ? i - u : n, r = i + u > r ? i + u : r, o = o > s - u ? s - u : o, a = s + u > a ? s + u : a
      }
      this.bounds = new e.Rectangle(n, o, r - n, a - o)
    }
  }, e.Graphics.POLY = 0, e.Graphics.RECT = 1, e.Graphics.CIRC = 2, e.Graphics.ELIP = 3, e.CanvasGraphics = function() {}, e.CanvasGraphics.renderGraphics = function(t, i) {
    for (var s = t.worldAlpha, n = "", r = 0; r < t.graphicsData.length; r++) {
      var o = t.graphicsData[r],
        a = o.points;
      if (i.strokeStyle = n = "#" + ("00000" + (0 | o.lineColor).toString(16)).substr(-6), i.lineWidth = o.lineWidth, o.type === e.Graphics.POLY) {
        i.beginPath(), i.moveTo(a[0], a[1]);
        for (var h = 1; h < a.length / 2; h++) i.lineTo(a[2 * h], a[2 * h + 1]);
        a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && i.closePath(), o.fill && (i.globalAlpha = o.fillAlpha * s, i.fillStyle = n = "#" + ("00000" + (0 | o.fillColor).toString(16)).substr(-6), i.fill()), o.lineWidth && (i.globalAlpha = o.lineAlpha * s, i.stroke())
      } else if (o.type === e.Graphics.RECT)(o.fillColor || 0 === o.fillColor) && (i.globalAlpha = o.fillAlpha * s, i.fillStyle = n = "#" + ("00000" + (0 | o.fillColor).toString(16)).substr(-6), i.fillRect(a[0], a[1], a[2], a[3])), o.lineWidth && (i.globalAlpha = o.lineAlpha * s, i.strokeRect(a[0], a[1], a[2], a[3]));
      else if (o.type === e.Graphics.CIRC) i.beginPath(), i.arc(a[0], a[1], a[2], 0, 2 * Math.PI), i.closePath(), o.fill && (i.globalAlpha = o.fillAlpha * s, i.fillStyle = n = "#" + ("00000" + (0 | o.fillColor).toString(16)).substr(-6), i.fill()), o.lineWidth && (i.globalAlpha = o.lineAlpha * s, i.stroke());
      else if (o.type === e.Graphics.ELIP) {
        var l = o.points,
          c = 2 * l[2],
          u = 2 * l[3],
          d = l[0] - c / 2,
          p = l[1] - u / 2;
        i.beginPath();
        var f = .5522848,
          g = c / 2 * f,
          m = u / 2 * f,
          y = d + c,
          _ = p + u,
          x = d + c / 2,
          v = p + u / 2;
        i.moveTo(d, v), i.bezierCurveTo(d, v - m, x - g, p, x, p), i.bezierCurveTo(x + g, p, y, v - m, y, v), i.bezierCurveTo(y, v + m, x + g, _, x, _), i.bezierCurveTo(x - g, _, d, v + m, d, v), i.closePath(), o.fill && (i.globalAlpha = o.fillAlpha * s, i.fillStyle = n = "#" + ("00000" + (0 | o.fillColor).toString(16)).substr(-6), i.fill()), o.lineWidth && (i.globalAlpha = o.lineAlpha * s, i.stroke())
      }
    }
  }, e.CanvasGraphics.renderGraphicsMask = function(t, i) {
    var s = t.graphicsData.length;
    if (0 !== s) {
      s > 1 && (s = 1, window.console.log());
      for (var n = 0; 1 > n; n++) {
        var r = t.graphicsData[n],
          o = r.points;
        if (r.type === e.Graphics.POLY) {
          i.beginPath(), i.moveTo(o[0], o[1]);
          for (var a = 1; a < o.length / 2; a++) i.lineTo(o[2 * a], o[2 * a + 1]);
          o[0] === o[o.length - 2] && o[1] === o[o.length - 1] && i.closePath()
        } else if (r.type === e.Graphics.RECT) i.beginPath(), i.rect(o[0], o[1], o[2], o[3]), i.closePath();
        else if (r.type === e.Graphics.CIRC) i.beginPath(), i.arc(o[0], o[1], o[2], 0, 2 * Math.PI), i.closePath();
        else if (r.type === e.Graphics.ELIP) {
          var h = r.points,
            l = 2 * h[2],
            c = 2 * h[3],
            u = h[0] - l / 2,
            d = h[1] - c / 2;
          i.beginPath();
          var p = .5522848,
            f = l / 2 * p,
            g = c / 2 * p,
            m = u + l,
            y = d + c,
            _ = u + l / 2,
            x = d + c / 2;
          i.moveTo(u, x), i.bezierCurveTo(u, x - g, _ - f, d, _, d), i.bezierCurveTo(_ + f, d, m, x - g, m, x), i.bezierCurveTo(m, x + g, _ + f, y, _, y), i.bezierCurveTo(_ - f, y, u, x + g, u, x), i.closePath()
        }
      }
    }
  }, e.CanvasRenderer = function(t, e, i, s) {
    this.transparent = s, this.width = t || 800, this.height = e || 600, this.view = i || document.createElement("canvas"), this.context = this.view.getContext("2d"), this.smoothProperty = null, "imageSmoothingEnabled" in this.context ? this.smoothProperty = "imageSmoothingEnabled" : "webkitImageSmoothingEnabled" in this.context ? this.smoothProperty = "webkitImageSmoothingEnabled" : "mozImageSmoothingEnabled" in this.context ? this.smoothProperty = "mozImageSmoothingEnabled" : "oImageSmoothingEnabled" in this.context && (this.smoothProperty = "oImageSmoothingEnabled"), this.scaleMode = null, this.refresh = !0, this.view.width = this.width, this.view.height = this.height, this.count = 0
  }, e.CanvasRenderer.prototype.constructor = e.CanvasRenderer, e.CanvasRenderer.prototype.render = function(t) {
    e.texturesToUpdate = [], e.texturesToDestroy = [], e.visibleCount++, t.updateTransform(), this.view.style.backgroundColor === t.backgroundColorString || this.transparent || (this.view.style.backgroundColor = t.backgroundColorString), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.width, this.height), this.renderDisplayObject(t), t.interactive && (t._interactiveEventsAdded || (t._interactiveEventsAdded = !0, t.interactionManager.setTarget(this))), e.Texture.frameUpdates.length > 0 && (e.Texture.frameUpdates = [])
  }, e.CanvasRenderer.prototype.resize = function(t, e) {
    this.width = t, this.height = e, this.view.width = t, this.view.height = e
  }, e.CanvasRenderer.prototype.renderDisplayObject = function(t) {
    var i, s = this.context;
    s.globalCompositeOperation = "source-over";
    var n = t.last._iNext;
    t = t.first;
    do
      if (i = t.worldTransform, t.visible)
        if (t.renderable) {
          if (t instanceof e.Sprite) {
            var r = t.texture.frame;
            r && r.width && r.height && t.texture.baseTexture.source && (s.globalAlpha = t.worldAlpha, s.setTransform(i[0], i[3], i[1], i[4], i[2], i[5]), this.smoothProperty && this.scaleMode !== t.texture.baseTexture.scaleMode && (this.scaleMode = t.texture.baseTexture.scaleMode, s[this.smoothProperty] = this.scaleMode === e.BaseTexture.SCALE_MODE.LINEAR), s.drawImage(t.texture.baseTexture.source, r.x, r.y, r.width, r.height, t.anchor.x * -r.width, t.anchor.y * -r.height, r.width, r.height))
          } else if (t instanceof e.Strip) s.setTransform(i[0], i[3], i[1], i[4], i[2], i[5]), this.renderStrip(t);
          else if (t instanceof e.TilingSprite) s.setTransform(i[0], i[3], i[1], i[4], i[2], i[5]), this.renderTilingSprite(t);
          else if (t instanceof e.CustomRenderable) s.setTransform(i[0], i[3], i[1], i[4], i[2], i[5]), t.renderCanvas(this);
          else if (t instanceof e.Graphics) s.setTransform(i[0], i[3], i[1], i[4], i[2], i[5]), e.CanvasGraphics.renderGraphics(t, s);
          else if (t instanceof e.FilterBlock && t.data instanceof e.Graphics) {
            var o = t.data;
            if (t.open) {
              s.save();
              var a = o.alpha,
                h = o.worldTransform;
              s.setTransform(h[0], h[3], h[1], h[4], h[2], h[5]), o.worldAlpha = .5, s.worldAlpha = 0, e.CanvasGraphics.renderGraphicsMask(o, s), s.clip(), o.worldAlpha = a
            } else s.restore()
          }
          t = t._iNext
        } else t = t._iNext;
    else t = t.last._iNext; while (t !== n)
  }, e.CanvasRenderer.prototype.renderStripFlat = function(t) {
    var e = this.context,
      i = t.verticies,
      s = i.length / 2;
    this.count++, e.beginPath();
    for (var n = 1; s - 2 > n; n++) {
      var r = 2 * n,
        o = i[r],
        a = i[r + 2],
        h = i[r + 4],
        l = i[r + 1],
        c = i[r + 3],
        u = i[r + 5];
      e.moveTo(o, l), e.lineTo(a, c), e.lineTo(h, u)
    }
    e.fillStyle = "#FF0000", e.fill(), e.closePath()
  }, e.CanvasRenderer.prototype.renderTilingSprite = function(t) {
    var e = this.context;
    e.globalAlpha = t.worldAlpha, t.__tilePattern || (t.__tilePattern = e.createPattern(t.texture.baseTexture.source, "repeat")), e.beginPath();
    var i = t.tilePosition,
      s = t.tileScale;
    e.scale(s.x, s.y), e.translate(i.x, i.y), e.fillStyle = t.__tilePattern, e.fillRect(-i.x, -i.y, t.width / s.x, t.height / s.y), e.scale(1 / s.x, 1 / s.y), e.translate(-i.x, -i.y), e.closePath()
  }, e.CanvasRenderer.prototype.renderStrip = function(t) {
    var e = this.context,
      i = t.verticies,
      s = t.uvs,
      n = i.length / 2;
    this.count++;
    for (var r = 1; n - 2 > r; r++) {
      var o = 2 * r,
        a = i[o],
        h = i[o + 2],
        l = i[o + 4],
        c = i[o + 1],
        u = i[o + 3],
        d = i[o + 5],
        p = s[o] * t.texture.width,
        f = s[o + 2] * t.texture.width,
        g = s[o + 4] * t.texture.width,
        m = s[o + 1] * t.texture.height,
        y = s[o + 3] * t.texture.height,
        _ = s[o + 5] * t.texture.height;
      e.save(), e.beginPath(), e.moveTo(a, c), e.lineTo(h, u), e.lineTo(l, d), e.closePath(), e.clip();
      var x = p * y + m * g + f * _ - y * g - m * f - p * _,
        v = a * y + m * l + h * _ - y * l - m * h - a * _,
        b = p * h + a * g + f * l - h * g - a * f - p * l,
        w = p * y * l + m * h * g + a * f * _ - a * y * g - m * f * l - p * h * _,
        T = c * y + m * d + u * _ - y * d - m * u - c * _,
        S = p * u + c * g + f * d - u * g - c * f - p * d,
        C = p * y * d + m * u * g + c * f * _ - c * y * g - m * f * d - p * u * _;
      e.transform(v / x, T / x, b / x, S / x, w / x, C / x), e.drawImage(t.texture.baseTexture.source, 0, 0), e.restore()
    }
  }, e.PixiShader = function() {
    this.program = null, this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor;", "}"], this.textureCount = 0
  }, e.PixiShader.prototype.init = function() {
    var t = e.compileProgram(this.vertexSrc || e.PixiShader.defaultVertexSrc, this.fragmentSrc),
      i = e.gl;
    i.useProgram(t), this.uSampler = i.getUniformLocation(t, "uSampler"), this.projectionVector = i.getUniformLocation(t, "projectionVector"), this.offsetVector = i.getUniformLocation(t, "offsetVector"), this.dimensions = i.getUniformLocation(t, "dimensions"), this.aVertexPosition = i.getAttribLocation(t, "aVertexPosition"), this.colorAttribute = i.getAttribLocation(t, "aColor"), this.aTextureCoord = i.getAttribLocation(t, "aTextureCoord");
    for (var s in this.uniforms) this.uniforms[s].uniformLocation = i.getUniformLocation(t, s);
    this.initUniforms(), this.program = t
  }, e.PixiShader.prototype.initUniforms = function() {
    this.textureCount = 1;
    var t;
    for (var i in this.uniforms) {
      t = this.uniforms[i];
      var s = t.type;
      "sampler2D" === s ? (t._init = !1, null !== t.value && this.initSampler2D(t)) : "mat2" === s || "mat3" === s || "mat4" === s ? (t.glMatrix = !0, t.glValueLength = 1, "mat2" === s ? t.glFunc = e.gl.uniformMatrix2fv : "mat3" === s ? t.glFunc = e.gl.uniformMatrix3fv : "mat4" === s && (t.glFunc = e.gl.uniformMatrix4fv)) : (t.glFunc = e.gl["uniform" + s], t.glValueLength = "2f" === s || "2i" === s ? 2 : "3f" === s || "3i" === s ? 3 : "4f" === s || "4i" === s ? 4 : 1)
    }
  }, e.PixiShader.prototype.initSampler2D = function(t) {
    if (t.value && t.value.baseTexture && t.value.baseTexture.hasLoaded) {
      if (e.gl.activeTexture(e.gl["TEXTURE" + this.textureCount]), e.gl.bindTexture(e.gl.TEXTURE_2D, t.value.baseTexture._glTexture), t.textureData) {
        var i = t.textureData,
          s = i.magFilter ? i.magFilter : e.gl.LINEAR,
          n = i.minFilter ? i.minFilter : e.gl.LINEAR,
          r = i.wrapS ? i.wrapS : e.gl.CLAMP_TO_EDGE,
          o = i.wrapT ? i.wrapT : e.gl.CLAMP_TO_EDGE,
          a = i.luminance ? e.gl.LUMINANCE : e.gl.RGBA;
        if (i.repeat && (r = e.gl.REPEAT, o = e.gl.REPEAT), e.gl.pixelStorei(e.gl.UNPACK_FLIP_Y_WEBGL, !1), i.width) {
          var h = i.width ? i.width : 512,
            l = i.height ? i.height : 2,
            c = i.border ? i.border : 0;
          e.gl.texImage2D(e.gl.TEXTURE_2D, 0, a, h, l, c, a, e.gl.UNSIGNED_BYTE, null)
        } else e.gl.texImage2D(e.gl.TEXTURE_2D, 0, a, e.gl.RGBA, e.gl.UNSIGNED_BYTE, t.value.baseTexture.source);
        e.gl.texParameteri(e.gl.TEXTURE_2D, e.gl.TEXTURE_MAG_FILTER, s), e.gl.texParameteri(e.gl.TEXTURE_2D, e.gl.TEXTURE_MIN_FILTER, n), e.gl.texParameteri(e.gl.TEXTURE_2D, e.gl.TEXTURE_WRAP_S, r), e.gl.texParameteri(e.gl.TEXTURE_2D, e.gl.TEXTURE_WRAP_T, o)
      }
      e.gl.uniform1i(t.uniformLocation, this.textureCount), t._init = !0, this.textureCount++
    }
  }, e.PixiShader.prototype.syncUniforms = function() {
    this.textureCount = 1;
    var t;
    for (var i in this.uniforms) t = this.uniforms[i], 1 === t.glValueLength ? t.glMatrix === !0 ? t.glFunc.call(e.gl, t.uniformLocation, t.transpose, t.value) : t.glFunc.call(e.gl, t.uniformLocation, t.value) : 2 === t.glValueLength ? t.glFunc.call(e.gl, t.uniformLocation, t.value.x, t.value.y) : 3 === t.glValueLength ? t.glFunc.call(e.gl, t.uniformLocation, t.value.x, t.value.y, t.value.z) : 4 === t.glValueLength ? t.glFunc.call(e.gl, t.uniformLocation, t.value.x, t.value.y, t.value.z, t.value.w) : "sampler2D" === t.type && (t._init ? (e.gl.activeTexture(e.gl["TEXTURE" + this.textureCount]), e.gl.bindTexture(e.gl.TEXTURE_2D, t.value.baseTexture._glTexture), e.gl.uniform1i(t.uniformLocation, this.textureCount), this.textureCount++) : this.initSampler2D(t))
  }, e.PixiShader.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "varying float vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"], e.PrimitiveShader = function() {
    this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform float alpha;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vColor = aColor  * alpha;", "}"]
  }, e.PrimitiveShader.prototype.init = function() {
    var t = e.compileProgram(this.vertexSrc, this.fragmentSrc),
      i = e.gl;
    i.useProgram(t), this.projectionVector = i.getUniformLocation(t, "projectionVector"), this.offsetVector = i.getUniformLocation(t, "offsetVector"), this.aVertexPosition = i.getAttribLocation(t, "aVertexPosition"), this.colorAttribute = i.getAttribLocation(t, "aColor"), this.translationMatrix = i.getUniformLocation(t, "translationMatrix"), this.alpha = i.getUniformLocation(t, "alpha"), this.program = t
  }, e.StripShader = function() {
    this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));", "   gl_FragColor = gl_FragColor * alpha;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition, 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / projectionVector.y + 1.0 , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"]
  }, e.StripShader.prototype.init = function() {
    var t = e.compileProgram(this.vertexSrc, this.fragmentSrc),
      i = e.gl;
    i.useProgram(t), this.uSampler = i.getUniformLocation(t, "uSampler"), this.projectionVector = i.getUniformLocation(t, "projectionVector"), this.offsetVector = i.getUniformLocation(t, "offsetVector"), this.colorAttribute = i.getAttribLocation(t, "aColor"), this.aVertexPosition = i.getAttribLocation(t, "aVertexPosition"), this.aTextureCoord = i.getAttribLocation(t, "aTextureCoord"), this.translationMatrix = i.getUniformLocation(t, "translationMatrix"), this.alpha = i.getUniformLocation(t, "alpha"), this.program = t
  }, e._batchs = [], e._getBatch = function(t) {
    return 0 === e._batchs.length ? new e.WebGLBatch(t) : e._batchs.pop()
  }, e._returnBatch = function(t) {
    t.clean(), e._batchs.push(t)
  }, e._restoreBatchs = function(t) {
    for (var i = 0; i < e._batchs.length; i++) e._batchs[i].restoreLostContext(t)
  }, e.WebGLBatch = function(t) {
    this.gl = t, this.size = 0, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.uvBuffer = t.createBuffer(), this.colorBuffer = t.createBuffer(), this.blendMode = e.blendModes.NORMAL, this.dynamicSize = 1
  }, e.WebGLBatch.prototype.constructor = e.WebGLBatch, e.WebGLBatch.prototype.clean = function() {
    this.verticies = [], this.uvs = [], this.indices = [], this.colors = [], this.dynamicSize = 1, this.texture = null, this.last = null, this.size = 0, this.head = null, this.tail = null
  }, e.WebGLBatch.prototype.restoreLostContext = function(t) {
    this.gl = t, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.uvBuffer = t.createBuffer(), this.colorBuffer = t.createBuffer()
  }, e.WebGLBatch.prototype.init = function(t) {
    t.batch = this, this.dirty = !0, this.blendMode = t.blendMode, this.texture = t.texture.baseTexture, this.head = t, this.tail = t, this.size = 1, this.growBatch()
  }, e.WebGLBatch.prototype.insertBefore = function(t, e) {
    this.size++, t.batch = this, this.dirty = !0;
    var i = e.__prev;
    e.__prev = t, t.__next = e, i ? (t.__prev = i, i.__next = t) : this.head = t
  }, e.WebGLBatch.prototype.insertAfter = function(t, e) {
    this.size++, t.batch = this, this.dirty = !0;
    var i = e.__next;
    e.__next = t, t.__prev = e, i ? (t.__next = i, i.__prev = t) : this.tail = t
  }, e.WebGLBatch.prototype.remove = function(t) {
    return this.size--, 0 === this.size ? (t.batch = null, t.__prev = null, void(t.__next = null)) : (t.__prev ? t.__prev.__next = t.__next : (this.head = t.__next, this.head.__prev = null), t.__next ? t.__next.__prev = t.__prev : (this.tail = t.__prev, this.tail.__next = null), t.batch = null, t.__next = null, t.__prev = null, void(this.dirty = !0))
  }, e.WebGLBatch.prototype.split = function(t) {
    this.dirty = !0;
    var i = new e.WebGLBatch(this.gl);
    i.init(t), i.texture = this.texture, i.tail = this.tail, this.tail = t.__prev, this.tail.__next = null, t.__prev = null;
    for (var s = 0; t;) s++, t.batch = i, t = t.__next;
    return i.size = s, this.size -= s, i
  }, e.WebGLBatch.prototype.merge = function(t) {
    this.dirty = !0, this.tail.__next = t.head, t.head.__prev = this.tail, this.size += t.size, this.tail = t.tail;
    for (var e = t.head; e;) e.batch = this, e = e.__next
  }, e.WebGLBatch.prototype.growBatch = function() {
    var t = this.gl;
    this.dynamicSize = 1 === this.size ? 1 : 1.5 * this.size, this.verticies = new Float32Array(8 * this.dynamicSize), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.verticies, t.DYNAMIC_DRAW), this.uvs = new Float32Array(8 * this.dynamicSize), t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer), t.bufferData(t.ARRAY_BUFFER, this.uvs, t.DYNAMIC_DRAW), this.dirtyUVS = !0, this.colors = new Float32Array(4 * this.dynamicSize), t.bindBuffer(t.ARRAY_BUFFER, this.colorBuffer), t.bufferData(t.ARRAY_BUFFER, this.colors, t.DYNAMIC_DRAW), this.dirtyColors = !0, this.indices = new Uint16Array(6 * this.dynamicSize);
    for (var e = this.indices.length / 6, i = 0; e > i; i++) {
      var s = 6 * i,
        n = 4 * i;
      this.indices[s + 0] = n + 0, this.indices[s + 1] = n + 1, this.indices[s + 2] = n + 2, this.indices[s + 3] = n + 0, this.indices[s + 4] = n + 2, this.indices[s + 5] = n + 3
    }
    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW)
  }, e.WebGLBatch.prototype.refresh = function() {
    this.dynamicSize < this.size && this.growBatch();
    for (var t, e, i = 0, s = this.head; s;) {
      t = 8 * i;
      var n = s.texture,
        r = n.frame,
        o = n.baseTexture.width,
        a = n.baseTexture.height;
      this.uvs[t + 0] = r.x / o, this.uvs[t + 1] = r.y / a, this.uvs[t + 2] = (r.x + r.width) / o, this.uvs[t + 3] = r.y / a, this.uvs[t + 4] = (r.x + r.width) / o, this.uvs[t + 5] = (r.y + r.height) / a, this.uvs[t + 6] = r.x / o, this.uvs[t + 7] = (r.y + r.height) / a, s.updateFrame = !1, e = 4 * i, this.colors[e] = this.colors[e + 1] = this.colors[e + 2] = this.colors[e + 3] = s.worldAlpha, s = s.__next, i++
    }
    this.dirtyUVS = !0, this.dirtyColors = !0
  }, e.WebGLBatch.prototype.update = function() {
    for (var t, i, s, n, r, o, a, h, l, c, u, d, p, f, g, m, y = 0, _ = this.head, x = this.verticies, v = this.uvs, b = this.colors; _;) {
      if (_.vcount === e.visibleCount) {
        if (i = _.texture.frame.width, s = _.texture.frame.height, n = _.anchor.x, r = _.anchor.y, o = i * (1 - n), a = i * -n, h = s * (1 - r), l = s * -r, c = 8 * y, t = _.worldTransform, u = t[0], d = t[3], p = t[1], f = t[4], g = t[2], m = t[5], x[c + 0] = u * a + p * l + g, x[c + 1] = f * l + d * a + m, x[c + 2] = u * o + p * l + g, x[c + 3] = f * l + d * o + m, x[c + 4] = u * o + p * h + g, x[c + 5] = f * h + d * o + m, x[c + 6] = u * a + p * h + g, x[c + 7] = f * h + d * a + m, _.updateFrame || _.texture.updateFrame) {
          this.dirtyUVS = !0;
          var w = _.texture,
            T = w.frame,
            S = w.baseTexture.width,
            C = w.baseTexture.height;
          v[c + 0] = T.x / S, v[c + 1] = T.y / C, v[c + 2] = (T.x + T.width) / S, v[c + 3] = T.y / C, v[c + 4] = (T.x + T.width) / S, v[c + 5] = (T.y + T.height) / C, v[c + 6] = T.x / S, v[c + 7] = (T.y + T.height) / C, _.updateFrame = !1
        }
        if (_.cacheAlpha !== _.worldAlpha) {
          _.cacheAlpha = _.worldAlpha;
          var A = 4 * y;
          b[A] = b[A + 1] = b[A + 2] = b[A + 3] = _.worldAlpha, this.dirtyColors = !0
        }
      } else c = 8 * y, x[c + 0] = x[c + 1] = x[c + 2] = x[c + 3] = x[c + 4] = x[c + 5] = x[c + 6] = x[c + 7] = 0;
      y++, _ = _.__next
    }
  }, e.WebGLBatch.prototype.render = function(t, i) {
    if (t = t || 0, void 0 === i && (i = this.size), this.dirty && (this.refresh(), this.dirty = !1), 0 !== this.size) {
      this.update();
      var s = this.gl,
        n = e.defaultShader;
      s.bindBuffer(s.ARRAY_BUFFER, this.vertexBuffer), s.bufferSubData(s.ARRAY_BUFFER, 0, this.verticies), s.vertexAttribPointer(n.aVertexPosition, 2, s.FLOAT, !1, 0, 0), s.bindBuffer(s.ARRAY_BUFFER, this.uvBuffer), this.dirtyUVS && (this.dirtyUVS = !1, s.bufferSubData(s.ARRAY_BUFFER, 0, this.uvs)), s.vertexAttribPointer(n.aTextureCoord, 2, s.FLOAT, !1, 0, 0), s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, this.texture._glTexture), s.bindBuffer(s.ARRAY_BUFFER, this.colorBuffer), this.dirtyColors && (this.dirtyColors = !1, s.bufferSubData(s.ARRAY_BUFFER, 0, this.colors)), s.vertexAttribPointer(n.colorAttribute, 1, s.FLOAT, !1, 0, 0), s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
      var r = i - t;
      s.drawElements(s.TRIANGLES, 6 * r, s.UNSIGNED_SHORT, 2 * t * 6)
    }
  }, e.WebGLFilterManager = function(t) {
    this.transparent = t, this.filterStack = [], this.texturePool = [], this.offsetX = 0, this.offsetY = 0, this.initShaderBuffers()
  }, e.WebGLFilterManager.prototype.begin = function(t, e) {
    this.width = 2 * t.x, this.height = 2 * -t.y, this.buffer = e
  }, e.WebGLFilterManager.prototype.pushFilter = function(t) {
    var i = e.gl;
    this.filterStack.push(t);
    var s = t.filterPasses[0];
    this.offsetX += t.target.filterArea.x, this.offsetY += t.target.filterArea.y;
    var n = this.texturePool.pop();
    n ? n.resize(this.width, this.height) : n = new e.FilterTexture(this.width, this.height), i.bindTexture(i.TEXTURE_2D, n.texture), this.getBounds(t.target);
    var r = t.target.filterArea,
      o = s.padding;
    r.x -= o, r.y -= o, r.width += 2 * o, r.height += 2 * o, r.x < 0 && (r.x = 0), r.width > this.width && (r.width = this.width), r.y < 0 && (r.y = 0), r.height > this.height && (r.height = this.height), i.bindFramebuffer(i.FRAMEBUFFER, n.frameBuffer), i.viewport(0, 0, r.width, r.height), e.projection.x = r.width / 2, e.projection.y = -r.height / 2, e.offset.x = -r.x, e.offset.y = -r.y, i.uniform2f(e.defaultShader.projectionVector, r.width / 2, -r.height / 2), i.uniform2f(e.defaultShader.offsetVector, -r.x, -r.y), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT), t._glFilterTexture = n
  }, e.WebGLFilterManager.prototype.popFilter = function() {
    var t = e.gl,
      i = this.filterStack.pop(),
      s = i.target.filterArea,
      n = i._glFilterTexture;
    if (i.filterPasses.length > 1) {
      t.viewport(0, 0, s.width, s.height), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = 0, this.vertexArray[1] = s.height, this.vertexArray[2] = s.width, this.vertexArray[3] = s.height, this.vertexArray[4] = 0, this.vertexArray[5] = 0, this.vertexArray[6] = s.width, this.vertexArray[7] = 0, t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexArray), t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = s.width / this.width, this.uvArray[5] = s.height / this.height, this.uvArray[6] = s.width / this.width, this.uvArray[7] = s.height / this.height, t.bufferSubData(t.ARRAY_BUFFER, 0, this.uvArray);
      var r = n,
        o = this.texturePool.pop();
      o || (o = new e.FilterTexture(this.width, this.height)), t.bindFramebuffer(t.FRAMEBUFFER, o.frameBuffer), t.clear(t.COLOR_BUFFER_BIT), t.disable(t.BLEND);
      for (var a = 0; a < i.filterPasses.length - 1; a++) {
        var h = i.filterPasses[a];
        t.bindFramebuffer(t.FRAMEBUFFER, o.frameBuffer), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, r.texture), this.applyFilterPass(h, s, s.width, s.height);
        var l = r;
        r = o, o = l
      }
      t.enable(t.BLEND), n = r, this.texturePool.push(o)
    }
    var c = i.filterPasses[i.filterPasses.length - 1];
    this.offsetX -= s.x, this.offsetY -= s.y;
    var u = this.width,
      d = this.height,
      p = 0,
      f = 0,
      g = this.buffer;
    if (0 === this.filterStack.length) t.colorMask(!0, !0, !0, this.transparent);
    else {
      var m = this.filterStack[this.filterStack.length - 1];
      s = m.target.filterArea, u = s.width, d = s.height, p = s.x, f = s.y, g = m._glFilterTexture.frameBuffer
    }
    e.projection.x = u / 2, e.projection.y = -d / 2, e.offset.x = p, e.offset.y = f, s = i.target.filterArea;
    var y = s.x - p,
      _ = s.y - f;
    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = y, this.vertexArray[1] = _ + s.height, this.vertexArray[2] = y + s.width, this.vertexArray[3] = _ + s.height, this.vertexArray[4] = y, this.vertexArray[5] = _, this.vertexArray[6] = y + s.width, this.vertexArray[7] = _, t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexArray), t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = s.width / this.width, this.uvArray[5] = s.height / this.height, this.uvArray[6] = s.width / this.width, this.uvArray[7] = s.height / this.height, t.bufferSubData(t.ARRAY_BUFFER, 0, this.uvArray), t.viewport(0, 0, u, d), t.bindFramebuffer(t.FRAMEBUFFER, g), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, n.texture), this.applyFilterPass(c, s, u, d), t.useProgram(e.defaultShader.program), t.uniform2f(e.defaultShader.projectionVector, u / 2, -d / 2), t.uniform2f(e.defaultShader.offsetVector, -p, -f), this.texturePool.push(n), i._glFilterTexture = null
  }, e.WebGLFilterManager.prototype.applyFilterPass = function(t, i, s, n) {
    var r = e.gl,
      o = t.shader;
    o || (o = new e.PixiShader, o.fragmentSrc = t.fragmentSrc, o.uniforms = t.uniforms, o.init(), t.shader = o), r.useProgram(o.program), r.uniform2f(o.projectionVector, s / 2, -n / 2), r.uniform2f(o.offsetVector, 0, 0), t.uniforms.dimensions && (t.uniforms.dimensions.value[0] = this.width, t.uniforms.dimensions.value[1] = this.height, t.uniforms.dimensions.value[2] = this.vertexArray[0], t.uniforms.dimensions.value[3] = this.vertexArray[5]), o.syncUniforms(), r.bindBuffer(r.ARRAY_BUFFER, this.vertexBuffer), r.vertexAttribPointer(o.aVertexPosition, 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, this.uvBuffer), r.vertexAttribPointer(o.aTextureCoord, 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, this.indexBuffer), r.drawElements(r.TRIANGLES, 6, r.UNSIGNED_SHORT, 0)
  }, e.WebGLFilterManager.prototype.initShaderBuffers = function() {
    var t = e.gl;
    this.vertexBuffer = t.createBuffer(), this.uvBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.vertexArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertexArray, t.STATIC_DRAW), this.uvArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer), t.bufferData(t.ARRAY_BUFFER, this.uvArray, t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), t.STATIC_DRAW)
  }, e.WebGLFilterManager.prototype.getBounds = function(t) {
    var i, s, n, r, o, a, h, l, c, u, d, p, f, g, m, y, _, x, v, b, w, T, S, C, A = t.first,
      P = t.last._iNext,
      R = -1 / 0,
      E = -1 / 0,
      L = 1 / 0,
      O = 1 / 0;
    do {
      if (A.visible)
        if (A instanceof e.Sprite) s = A.texture.frame.width, n = A.texture.frame.height, r = A.anchor.x, o = A.anchor.y, a = s * (1 - r), h = s * -r, l = n * (1 - o), c = n * -o, u = !0;
        else if (A instanceof e.Graphics) {
        A.updateFilterBounds();
        var D = A.bounds;
        s = D.width, n = D.height, a = D.x, h = D.x + D.width, l = D.y, c = D.y + D.height, u = !0
      }
      u && (i = A.worldTransform, d = i[0], p = i[3], f = i[1], g = i[4], m = i[2], y = i[5], _ = d * h + f * c + m, w = g * c + p * h + y, x = d * a + f * c + m, T = g * c + p * a + y, v = d * a + f * l + m, S = g * l + p * a + y, b = d * h + f * l + m, C = g * l + p * h + y, L = L > _ ? _ : L, L = L > x ? x : L, L = L > v ? v : L, L = L > b ? b : L, O = O > w ? w : O, O = O > T ? T : O, O = O > S ? S : O, O = O > C ? C : O, R = _ > R ? _ : R, R = x > R ? x : R, R = v > R ? v : R, R = b > R ? b : R, E = w > E ? w : E, E = T > E ? T : E, E = S > E ? S : E, E = C > E ? C : E), u = !1, A = A._iNext
    } while (A !== P);
    t.filterArea.x = L, t.filterArea.y = O, t.filterArea.width = R - L, t.filterArea.height = E - O
  }, e.FilterTexture = function(t, i) {
    var s = e.gl;
    this.frameBuffer = s.createFramebuffer(), this.texture = s.createTexture(), s.bindTexture(s.TEXTURE_2D, this.texture), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), s.bindFramebuffer(s.FRAMEBUFFER, this.framebuffer), s.bindFramebuffer(s.FRAMEBUFFER, this.frameBuffer), s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, this.texture, 0), this.resize(t, i)
  }, e.FilterTexture.prototype.resize = function(t, i) {
    if (this.width !== t || this.height !== i) {
      this.width = t, this.height = i;
      var s = e.gl;
      s.bindTexture(s.TEXTURE_2D, this.texture), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, t, i, 0, s.RGBA, s.UNSIGNED_BYTE, null)
    }
  }, e.WebGLGraphics = function() {}, e.WebGLGraphics.renderGraphics = function(t, i) {
    var s = e.gl;
    t._webGL || (t._webGL = {
      points: [],
      indices: [],
      lastIndex: 0,
      buffer: s.createBuffer(),
      indexBuffer: s.createBuffer()
    }), t.dirty && (t.dirty = !1, t.clearDirty && (t.clearDirty = !1, t._webGL.lastIndex = 0, t._webGL.points = [], t._webGL.indices = []), e.WebGLGraphics.updateGraphics(t)), e.activatePrimitiveShader();
    var n = e.mat3.clone(t.worldTransform);
    e.mat3.transpose(n), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA), s.uniformMatrix3fv(e.primitiveShader.translationMatrix, !1, n), s.uniform2f(e.primitiveShader.projectionVector, i.x, -i.y), s.uniform2f(e.primitiveShader.offsetVector, -e.offset.x, -e.offset.y), s.uniform1f(e.primitiveShader.alpha, t.worldAlpha), s.bindBuffer(s.ARRAY_BUFFER, t._webGL.buffer), s.vertexAttribPointer(e.primitiveShader.aVertexPosition, 2, s.FLOAT, !1, 24, 0), s.vertexAttribPointer(e.primitiveShader.colorAttribute, 4, s.FLOAT, !1, 24, 8), s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, t._webGL.indexBuffer), s.drawElements(s.TRIANGLE_STRIP, t._webGL.indices.length, s.UNSIGNED_SHORT, 0), e.deactivatePrimitiveShader()
  }, e.WebGLGraphics.updateGraphics = function(t) {
    for (var i = t._webGL.lastIndex; i < t.graphicsData.length; i++) {
      var s = t.graphicsData[i];
      s.type === e.Graphics.POLY ? (s.fill && s.points.length > 3 && e.WebGLGraphics.buildPoly(s, t._webGL), s.lineWidth > 0 && e.WebGLGraphics.buildLine(s, t._webGL)) : s.type === e.Graphics.RECT ? e.WebGLGraphics.buildRectangle(s, t._webGL) : (s.type === e.Graphics.CIRC || s.type === e.Graphics.ELIP) && e.WebGLGraphics.buildCircle(s, t._webGL)
    }
    t._webGL.lastIndex = t.graphicsData.length;
    var n = e.gl;
    t._webGL.glPoints = new Float32Array(t._webGL.points), n.bindBuffer(n.ARRAY_BUFFER, t._webGL.buffer), n.bufferData(n.ARRAY_BUFFER, t._webGL.glPoints, n.STATIC_DRAW), t._webGL.glIndicies = new Uint16Array(t._webGL.indices), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t._webGL.indexBuffer), n.bufferData(n.ELEMENT_ARRAY_BUFFER, t._webGL.glIndicies, n.STATIC_DRAW)
  }, e.WebGLGraphics.buildRectangle = function(t, i) {
    var s = t.points,
      n = s[0],
      r = s[1],
      o = s[2],
      a = s[3];
    if (t.fill) {
      var h = e.hex2rgb(t.fillColor),
        l = t.fillAlpha,
        c = h[0] * l,
        u = h[1] * l,
        d = h[2] * l,
        p = i.points,
        f = i.indices,
        g = p.length / 6;
      p.push(n, r), p.push(c, u, d, l), p.push(n + o, r), p.push(c, u, d, l), p.push(n, r + a), p.push(c, u, d, l), p.push(n + o, r + a), p.push(c, u, d, l), f.push(g, g, g + 1, g + 2, g + 3, g + 3)
    }
    t.lineWidth && (t.points = [n, r, n + o, r, n + o, r + a, n, r + a, n, r], e.WebGLGraphics.buildLine(t, i))
  }, e.WebGLGraphics.buildCircle = function(t, i) {
    var s = t.points,
      n = s[0],
      r = s[1],
      o = s[2],
      a = s[3],
      h = 40,
      l = 2 * Math.PI / h,
      c = 0;
    if (t.fill) {
      var u = e.hex2rgb(t.fillColor),
        d = t.fillAlpha,
        p = u[0] * d,
        f = u[1] * d,
        g = u[2] * d,
        m = i.points,
        y = i.indices,
        _ = m.length / 6;
      for (y.push(_), c = 0; h + 1 > c; c++) m.push(n, r, p, f, g, d), m.push(n + Math.sin(l * c) * o, r + Math.cos(l * c) * a, p, f, g, d), y.push(_++, _++);
      y.push(_ - 1)
    }
    if (t.lineWidth) {
      for (t.points = [], c = 0; h + 1 > c; c++) t.points.push(n + Math.sin(l * c) * o, r + Math.cos(l * c) * a);
      e.WebGLGraphics.buildLine(t, i)
    }
  }, e.WebGLGraphics.buildLine = function(t, i) {
    var s = 0,
      n = t.points;
    if (0 !== n.length) {
      if (t.lineWidth % 2)
        for (s = 0; s < n.length; s++) n[s] += .5;
      var r = new e.Point(n[0], n[1]),
        o = new e.Point(n[n.length - 2], n[n.length - 1]);
      if (r.x === o.x && r.y === o.y) {
        n.pop(), n.pop(), o = new e.Point(n[n.length - 2], n[n.length - 1]);
        var a = o.x + .5 * (r.x - o.x),
          h = o.y + .5 * (r.y - o.y);
        n.unshift(a, h), n.push(a, h)
      }
      var l, c, u, d, p, f, g, m, y, _, x, v, b, w, T, S, C, A, P, R, E, L, O, D = i.points,
        k = i.indices,
        F = n.length / 2,
        M = n.length,
        I = D.length / 6,
        B = t.lineWidth / 2,
        G = e.hex2rgb(t.lineColor),
        U = t.lineAlpha,
        N = G[0] * U,
        j = G[1] * U,
        W = G[2] * U;
      for (u = n[0], d = n[1], p = n[2], f = n[3], y = -(d - f), _ = u - p, O = Math.sqrt(y * y + _ * _), y /= O, _ /= O, y *= B, _ *= B, D.push(u - y, d - _, N, j, W, U), D.push(u + y, d + _, N, j, W, U), s = 1; F - 1 > s; s++) u = n[2 * (s - 1)], d = n[2 * (s - 1) + 1], p = n[2 * s], f = n[2 * s + 1], g = n[2 * (s + 1)], m = n[2 * (s + 1) + 1], y = -(d - f), _ = u - p, O = Math.sqrt(y * y + _ * _), y /= O, _ /= O, y *= B, _ *= B, x = -(f - m), v = p - g, O = Math.sqrt(x * x + v * v), x /= O, v /= O, x *= B, v *= B, T = -_ + d - (-_ + f), S = -y + p - (-y + u), C = (-y + u) * (-_ + f) - (-y + p) * (-_ + d), A = -v + m - (-v + f), P = -x + p - (-x + g), R = (-x + g) * (-v + f) - (-x + p) * (-v + m), E = T * P - A * S, Math.abs(E) < .1 ? (E += 10.1, D.push(p - y, f - _, N, j, W, U), D.push(p + y, f + _, N, j, W, U)) : (l = (S * R - P * C) / E, c = (A * C - T * R) / E, L = (l - p) * (l - p) + (c - f) + (c - f), L > 19600 ? (b = y - x, w = _ - v, O = Math.sqrt(b * b + w * w), b /= O, w /= O, b *= B, w *= B, D.push(p - b, f - w), D.push(N, j, W, U), D.push(p + b, f + w), D.push(N, j, W, U), D.push(p - b, f - w), D.push(N, j, W, U), M++) : (D.push(l, c), D.push(N, j, W, U), D.push(p - (l - p), f - (c - f)), D.push(N, j, W, U)));
      for (u = n[2 * (F - 2)], d = n[2 * (F - 2) + 1], p = n[2 * (F - 1)], f = n[2 * (F - 1) + 1], y = -(d - f), _ = u - p, O = Math.sqrt(y * y + _ * _), y /= O, _ /= O, y *= B, _ *= B, D.push(p - y, f - _), D.push(N, j, W, U), D.push(p + y, f + _), D.push(N, j, W, U), k.push(I), s = 0; M > s; s++) k.push(I++);
      k.push(I - 1)
    }
  }, e.WebGLGraphics.buildPoly = function(t, i) {
    var s = t.points;
    if (!(s.length < 6)) {
      var n = i.points,
        r = i.indices,
        o = s.length / 2,
        a = e.hex2rgb(t.fillColor),
        h = t.fillAlpha,
        l = a[0] * h,
        c = a[1] * h,
        u = a[2] * h,
        d = e.PolyK.Triangulate(s),
        p = n.length / 6,
        f = 0;
      for (f = 0; f < d.length; f += 3) r.push(d[f] + p), r.push(d[f] + p), r.push(d[f + 1] + p), r.push(d[f + 2] + p), r.push(d[f + 2] + p);
      for (f = 0; o > f; f++) n.push(s[2 * f], s[2 * f + 1], l, c, u, h)
    }
  }, e._defaultFrame = new e.Rectangle(0, 0, 1, 1), e.gl = null, e.WebGLRenderer = function(t, i, s, n, r) {
    this.transparent = !!n, this.width = t || 800, this.height = i || 600, this.view = s || document.createElement("canvas"), this.view.width = this.width, this.view.height = this.height;
    var o = this;
    this.view.addEventListener("webglcontextlost", function(t) {
      o.handleContextLost(t)
    }, !1), this.view.addEventListener("webglcontextrestored", function(t) {
      o.handleContextRestored(t)
    }, !1), this.batchs = [];
    var a = {
      alpha: this.transparent,
      antialias: !!r,
      premultipliedAlpha: !1,
      stencil: !0
    };
    try {
      e.gl = this.gl = this.view.getContext("experimental-webgl", a)
    } catch (h) {
      try {
        e.gl = this.gl = this.view.getContext("webgl", a)
      } catch (l) {
        throw new Error(" This browser does not support webGL. Try using the canvas renderer" + this)
      }
    }
    e.initDefaultShaders();
    var c = this.gl;
    c.useProgram(e.defaultShader.program), e.WebGLRenderer.gl = c, this.batch = new e.WebGLBatch(c), c.disable(c.DEPTH_TEST), c.disable(c.CULL_FACE), c.enable(c.BLEND), c.colorMask(!0, !0, !0, this.transparent), e.projection = new e.Point(400, 300), e.offset = new e.Point(0, 0), this.resize(this.width, this.height), this.contextLost = !1, this.stageRenderGroup = new e.WebGLRenderGroup(this.gl, this.transparent)
  }, e.WebGLRenderer.prototype.constructor = e.WebGLRenderer, e.WebGLRenderer.getBatch = function() {
    return 0 === e._batchs.length ? new e.WebGLBatch(e.WebGLRenderer.gl) : e._batchs.pop()
  }, e.WebGLRenderer.returnBatch = function(t) {
    t.clean(), e._batchs.push(t)
  }, e.WebGLRenderer.prototype.render = function(t) {
    if (!this.contextLost) {
      this.__stage !== t && (this.__stage = t, this.stageRenderGroup.setRenderable(t)), e.WebGLRenderer.updateTextures(), e.visibleCount++, t.updateTransform();
      var i = this.gl;
      if (i.colorMask(!0, !0, !0, this.transparent), i.viewport(0, 0, this.width, this.height), i.bindFramebuffer(i.FRAMEBUFFER, null), i.clearColor(t.backgroundColorSplit[0], t.backgroundColorSplit[1], t.backgroundColorSplit[2], !this.transparent), i.clear(i.COLOR_BUFFER_BIT), this.stageRenderGroup.backgroundColor = t.backgroundColorSplit, e.projection.x = this.width / 2, e.projection.y = -this.height / 2, this.stageRenderGroup.render(e.projection), t.interactive && (t._interactiveEventsAdded || (t._interactiveEventsAdded = !0, t.interactionManager.setTarget(this))), e.Texture.frameUpdates.length > 0) {
        for (var s = 0; s < e.Texture.frameUpdates.length; s++) e.Texture.frameUpdates[s].updateFrame = !1;
        e.Texture.frameUpdates = []
      }
    }
  }, e.WebGLRenderer.updateTextures = function() {
    var t = 0;
    for (t = 0; t < e.texturesToUpdate.length; t++) e.WebGLRenderer.updateTexture(e.texturesToUpdate[t]);
    for (t = 0; t < e.texturesToDestroy.length; t++) e.WebGLRenderer.destroyTexture(e.texturesToDestroy[t]);
    e.texturesToUpdate = [], e.texturesToDestroy = []
  }, e.WebGLRenderer.updateTexture = function(t) {
    var i = e.gl;
    t._glTexture || (t._glTexture = i.createTexture()), t.hasLoaded && (i.bindTexture(i.TEXTURE_2D, t._glTexture), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, t.source), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, t.scaleMode === e.BaseTexture.SCALE_MODE.LINEAR ? i.LINEAR : i.NEAREST), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, t.scaleMode === e.BaseTexture.SCALE_MODE.LINEAR ? i.LINEAR : i.NEAREST), t._powerOf2 ? (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.REPEAT), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.REPEAT)) : (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE)), i.bindTexture(i.TEXTURE_2D, null))
  }, e.WebGLRenderer.destroyTexture = function(t) {
    var i = e.gl;
    t._glTexture && (t._glTexture = i.createTexture(), i.deleteTexture(i.TEXTURE_2D, t._glTexture))
  }, e.WebGLRenderer.prototype.resize = function(t, i) {
    this.width = t, this.height = i, this.view.width = t, this.view.height = i, this.gl.viewport(0, 0, this.width, this.height), e.projection.x = this.width / 2, e.projection.y = -this.height / 2
  }, e.WebGLRenderer.prototype.handleContextLost = function(t) {
    t.preventDefault(), this.contextLost = !0
  }, e.WebGLRenderer.prototype.handleContextRestored = function() {
    this.gl = this.view.getContext("experimental-webgl", {
      alpha: !0
    }), this.initShaders();
    for (var t in e.TextureCache) {
      var i = e.TextureCache[t].baseTexture;
      i._glTexture = null, e.WebGLRenderer.updateTexture(i)
    }
    for (var s = 0; s < this.batchs.length; s++) this.batchs[s].restoreLostContext(this.gl), this.batchs[s].dirty = !0;
    e._restoreBatchs(this.gl), this.contextLost = !1
  }, e.WebGLRenderGroup = function(t, i) {
    this.gl = t, this.root, this.backgroundColor, this.transparent = void 0 == i ? !0 : i, this.batchs = [], this.toRemove = [], this.filterManager = new e.WebGLFilterManager(this.transparent)
  }, e.WebGLRenderGroup.prototype.constructor = e.WebGLRenderGroup, e.WebGLRenderGroup.prototype.setRenderable = function(t) {
    this.root && this.removeDisplayObjectAndChildren(this.root), t.worldVisible = t.visible, this.root = t, this.addDisplayObjectAndChildren(t)
  }, e.WebGLRenderGroup.prototype.render = function(t, i) {
    e.WebGLRenderer.updateTextures();
    var s = this.gl;
    s.uniform2f(e.defaultShader.projectionVector, t.x, t.y), this.filterManager.begin(t, i), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA);
    for (var n, r = 0; r < this.batchs.length; r++) n = this.batchs[r], n instanceof e.WebGLBatch ? this.batchs[r].render() : this.renderSpecial(n, t)
  }, e.WebGLRenderGroup.prototype.renderSpecific = function(t, i, s) {
    e.WebGLRenderer.updateTextures();
    var n = this.gl;
    n.uniform2f(e.defaultShader.projectionVector, i.x, i.y), this.filterManager.begin(i, s);
    for (var r, o, a, h, l = t.first; l._iNext && (!l.renderable || !l.__renderGroup);) l = l._iNext;
    var c = l.batch;
    if (l instanceof e.Sprite) {
      c = l.batch;
      var u = c.head;
      if (u == l) r = 0;
      else
        for (r = 1; u.__next != l;) r++, u = u.__next
    } else c = l;
    for (var d = t.last; d._iPrev && (!d.renderable || !d.__renderGroup);) d = d._iNext;
    if (d instanceof e.Sprite) {
      endBatch = d.batch;
      var u = endBatch.head;
      if (u == d) a = 0;
      else
        for (a = 1; u.__next != d;) a++, u = u.__next
    } else endBatch = d; if (c == endBatch) return void(c instanceof e.WebGLBatch ? c.render(r, a + 1) : this.renderSpecial(c, i));
    o = this.batchs.indexOf(c), h = this.batchs.indexOf(endBatch), c instanceof e.WebGLBatch ? c.render(r) : this.renderSpecial(c, i);
    for (var p = o + 1; h > p; p++) renderable = this.batchs[p], renderable instanceof e.WebGLBatch ? this.batchs[p].render() : this.renderSpecial(renderable, i);
    endBatch instanceof e.WebGLBatch ? endBatch.render(0, a + 1) : this.renderSpecial(endBatch, i)
  }, e.WebGLRenderGroup.prototype.renderSpecial = function(t, i) {
    var s = t.vcount === e.visibleCount;
    t instanceof e.TilingSprite ? s && this.renderTilingSprite(t, i) : t instanceof e.Strip ? s && this.renderStrip(t, i) : t instanceof e.CustomRenderable ? s && t.renderWebGL(this, i) : t instanceof e.Graphics ? s && t.renderable && e.WebGLGraphics.renderGraphics(t, i) : t instanceof e.FilterBlock && this.handleFilterBlock(t, i)
  }, flip = !1;
  var s = [],
    n = 0;
  return e.WebGLRenderGroup.prototype.handleFilterBlock = function(t, i) {
      var r = e.gl;
      if (t.open) t.data instanceof Array ? this.filterManager.pushFilter(t) : (n++, s.push(t), r.enable(r.STENCIL_TEST), r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.ALWAYS, 1, 1), r.stencilOp(r.KEEP, r.KEEP, r.INCR), e.WebGLGraphics.renderGraphics(t.data, i), r.colorMask(!0, !0, !0, !0), r.stencilFunc(r.NOTEQUAL, 0, s.length), r.stencilOp(r.KEEP, r.KEEP, r.KEEP));
      else if (t.data instanceof Array) this.filterManager.popFilter();
      else {
        var o = s.pop(t);
        o && (r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.ALWAYS, 1, 1), r.stencilOp(r.KEEP, r.KEEP, r.DECR), e.WebGLGraphics.renderGraphics(o.data, i), r.colorMask(!0, !0, !0, !0), r.stencilFunc(r.NOTEQUAL, 0, s.length), r.stencilOp(r.KEEP, r.KEEP, r.KEEP)), r.disable(r.STENCIL_TEST)
      }
    }, e.WebGLRenderGroup.prototype.updateTexture = function(t) {
      this.removeObject(t);
      for (var e = t.first; e != this.root && (e = e._iPrev, !e.renderable || !e.__renderGroup););
      for (var i = t.last; i._iNext && (i = i._iNext, !i.renderable || !i.__renderGroup););
      this.insertObject(t, e, i)
    }, e.WebGLRenderGroup.prototype.addFilterBlocks = function(t, e) {
      t.__renderGroup = this, e.__renderGroup = this;
      for (var i = t; i != this.root.first && (i = i._iPrev, !i.renderable || !i.__renderGroup););
      this.insertAfter(t, i);
      for (var s = e; s != this.root.first && (s = s._iPrev, !s.renderable || !s.__renderGroup););
      this.insertAfter(e, s)
    }, e.WebGLRenderGroup.prototype.removeFilterBlocks = function(t, e) {
      this.removeObject(t), this.removeObject(e)
    }, e.WebGLRenderGroup.prototype.addDisplayObjectAndChildren = function(t) {
      t.__renderGroup && t.__renderGroup.removeDisplayObjectAndChildren(t);
      for (var e = t.first; e != this.root.first && (e = e._iPrev, !e.renderable || !e.__renderGroup););
      for (var i = t.last; i._iNext && (i = i._iNext, !i.renderable || !i.__renderGroup););
      var s = t.first,
        n = t.last._iNext;
      do s.__renderGroup = this, s.renderable && (this.insertObject(s, e, i), e = s), s = s._iNext; while (s != n)
    }, e.WebGLRenderGroup.prototype.removeDisplayObjectAndChildren = function(t) {
      if (t.__renderGroup == this) {
        {
          t.last
        }
        do t.__renderGroup = null, t.renderable && this.removeObject(t), t = t._iNext; while (t)
      }
    }, e.WebGLRenderGroup.prototype.insertObject = function(t, i, s) {
      var n = i,
        r = s;
      if (t instanceof e.Sprite) {
        var o, a;
        if (n instanceof e.Sprite) {
          if (o = n.batch, o && o.texture == t.texture.baseTexture && o.blendMode == t.blendMode) return void o.insertAfter(t, n)
        } else o = n; if (r)
          if (r instanceof e.Sprite) {
            if (a = r.batch) {
              if (a.texture == t.texture.baseTexture && a.blendMode == t.blendMode) return void a.insertBefore(t, r);
              if (a == o) {
                var h = o.split(r),
                  l = e.WebGLRenderer.getBatch(),
                  c = this.batchs.indexOf(o);
                return l.init(t), void this.batchs.splice(c + 1, 0, l, h)
              }
            }
          } else a = r;
        var l = e.WebGLRenderer.getBatch();
        if (l.init(t), o) {
          var c = this.batchs.indexOf(o);
          this.batchs.splice(c + 1, 0, l)
        } else this.batchs.push(l)
      } else t instanceof e.TilingSprite ? this.initTilingSprite(t) : t instanceof e.Strip && this.initStrip(t), this.insertAfter(t, n)
    }, e.WebGLRenderGroup.prototype.insertAfter = function(t, i) {
      if (i instanceof e.Sprite) {
        var s = i.batch;
        if (s)
          if (s.tail == i) {
            var n = this.batchs.indexOf(s);
            this.batchs.splice(n + 1, 0, t)
          } else {
            var r = s.split(i.__next),
              n = this.batchs.indexOf(s);
            this.batchs.splice(n + 1, 0, t, r)
          } else this.batchs.push(t)
      } else {
        var n = this.batchs.indexOf(i);
        this.batchs.splice(n + 1, 0, t)
      }
    }, e.WebGLRenderGroup.prototype.removeObject = function(t) {
      var i;
      if (t instanceof e.Sprite) {
        var s = t.batch;
        if (!s) return;
        s.remove(t), 0 == s.size && (i = s)
      } else i = t; if (i) {
        var n = this.batchs.indexOf(i);
        if (-1 == n) return;
        if (0 == n || n == this.batchs.length - 1) return this.batchs.splice(n, 1), void(i instanceof e.WebGLBatch && e.WebGLRenderer.returnBatch(i));
        if (this.batchs[n - 1] instanceof e.WebGLBatch && this.batchs[n + 1] instanceof e.WebGLBatch && this.batchs[n - 1].texture == this.batchs[n + 1].texture && this.batchs[n - 1].blendMode == this.batchs[n + 1].blendMode) return this.batchs[n - 1].merge(this.batchs[n + 1]), i instanceof e.WebGLBatch && e.WebGLRenderer.returnBatch(i), e.WebGLRenderer.returnBatch(this.batchs[n + 1]), void this.batchs.splice(n, 2);
        this.batchs.splice(n, 1), i instanceof e.WebGLBatch && e.WebGLRenderer.returnBatch(i)
      }
    }, e.WebGLRenderGroup.prototype.initTilingSprite = function(t) {
      var e = this.gl;
      t.verticies = new Float32Array([0, 0, t.width, 0, t.width, t.height, 0, t.height]), t.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), t.colors = new Float32Array([1, 1, 1, 1]), t.indices = new Uint16Array([0, 1, 3, 2]), t._vertexBuffer = e.createBuffer(), t._indexBuffer = e.createBuffer(), t._uvBuffer = e.createBuffer(), t._colorBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t._vertexBuffer), e.bufferData(e.ARRAY_BUFFER, t.verticies, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._uvBuffer), e.bufferData(e.ARRAY_BUFFER, t.uvs, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._colorBuffer), e.bufferData(e.ARRAY_BUFFER, t.colors, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t._indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, t.indices, e.STATIC_DRAW), t.texture.baseTexture._glTexture ? (e.bindTexture(e.TEXTURE_2D, t.texture.baseTexture._glTexture), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT), t.texture.baseTexture._powerOf2 = !0) : t.texture.baseTexture._powerOf2 = !0
    }, e.WebGLRenderGroup.prototype.renderStrip = function(t, i) {
      var s = this.gl;
      e.activateStripShader();
      var n = e.stripShader,
        r = (n.program, e.mat3.clone(t.worldTransform));
      e.mat3.transpose(r), s.uniformMatrix3fv(n.translationMatrix, !1, r), s.uniform2f(n.projectionVector, i.x, i.y), s.uniform2f(n.offsetVector, -e.offset.x, -e.offset.y), s.uniform1f(n.alpha, t.worldAlpha), t.dirty ? (t.dirty = !1, s.bindBuffer(s.ARRAY_BUFFER, t._vertexBuffer), s.bufferData(s.ARRAY_BUFFER, t.verticies, s.STATIC_DRAW), s.vertexAttribPointer(n.aVertexPosition, 2, s.FLOAT, !1, 0, 0), s.bindBuffer(s.ARRAY_BUFFER, t._uvBuffer), s.bufferData(s.ARRAY_BUFFER, t.uvs, s.STATIC_DRAW), s.vertexAttribPointer(n.aTextureCoord, 2, s.FLOAT, !1, 0, 0), s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, t.texture.baseTexture._glTexture), s.bindBuffer(s.ARRAY_BUFFER, t._colorBuffer), s.bufferData(s.ARRAY_BUFFER, t.colors, s.STATIC_DRAW), s.vertexAttribPointer(n.colorAttribute, 1, s.FLOAT, !1, 0, 0), s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, t._indexBuffer), s.bufferData(s.ELEMENT_ARRAY_BUFFER, t.indices, s.STATIC_DRAW)) : (s.bindBuffer(s.ARRAY_BUFFER, t._vertexBuffer), s.bufferSubData(s.ARRAY_BUFFER, 0, t.verticies), s.vertexAttribPointer(n.aVertexPosition, 2, s.FLOAT, !1, 0, 0), s.bindBuffer(s.ARRAY_BUFFER, t._uvBuffer), s.vertexAttribPointer(n.aTextureCoord, 2, s.FLOAT, !1, 0, 0), s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, t.texture.baseTexture._glTexture), s.bindBuffer(s.ARRAY_BUFFER, t._colorBuffer), s.vertexAttribPointer(n.colorAttribute, 1, s.FLOAT, !1, 0, 0), s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, t._indexBuffer)), s.drawElements(s.TRIANGLE_STRIP, t.indices.length, s.UNSIGNED_SHORT, 0), e.deactivateStripShader()
    }, e.WebGLRenderGroup.prototype.renderTilingSprite = function(t, i) {
      var s = this.gl,
        n = (e.shaderProgram, t.tilePosition),
        r = t.tileScale,
        o = n.x / t.texture.baseTexture.width,
        a = n.y / t.texture.baseTexture.height,
        h = t.width / t.texture.baseTexture.width / r.x,
        l = t.height / t.texture.baseTexture.height / r.y;
      t.uvs[0] = 0 - o, t.uvs[1] = 0 - a, t.uvs[2] = 1 * h - o, t.uvs[3] = 0 - a, t.uvs[4] = 1 * h - o, t.uvs[5] = 1 * l - a, t.uvs[6] = 0 - o, t.uvs[7] = 1 * l - a, s.bindBuffer(s.ARRAY_BUFFER, t._uvBuffer), s.bufferSubData(s.ARRAY_BUFFER, 0, t.uvs), this.renderStrip(t, i)
    }, e.WebGLRenderGroup.prototype.initStrip = function(t) {
      {
        var e = this.gl;
        this.shaderProgram
      }
      t._vertexBuffer = e.createBuffer(), t._indexBuffer = e.createBuffer(), t._uvBuffer = e.createBuffer(), t._colorBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t._vertexBuffer), e.bufferData(e.ARRAY_BUFFER, t.verticies, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._uvBuffer), e.bufferData(e.ARRAY_BUFFER, t.uvs, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._colorBuffer), e.bufferData(e.ARRAY_BUFFER, t.colors, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t._indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, t.indices, e.STATIC_DRAW)
    }, e.initDefaultShaders = function() {
      e.primitiveShader = new e.PrimitiveShader, e.primitiveShader.init(), e.stripShader = new e.StripShader, e.stripShader.init(), e.defaultShader = new e.PixiShader, e.defaultShader.init();
      var t = e.gl,
        i = e.defaultShader.program;
      t.useProgram(i), t.enableVertexAttribArray(e.defaultShader.aVertexPosition), t.enableVertexAttribArray(e.defaultShader.colorAttribute), t.enableVertexAttribArray(e.defaultShader.aTextureCoord)
    }, e.activatePrimitiveShader = function() {
      var t = e.gl;
      t.useProgram(e.primitiveShader.program), t.disableVertexAttribArray(e.defaultShader.aVertexPosition), t.disableVertexAttribArray(e.defaultShader.colorAttribute), t.disableVertexAttribArray(e.defaultShader.aTextureCoord), t.enableVertexAttribArray(e.primitiveShader.aVertexPosition), t.enableVertexAttribArray(e.primitiveShader.colorAttribute)
    }, e.deactivatePrimitiveShader = function() {
      var t = e.gl;
      t.useProgram(e.defaultShader.program), t.disableVertexAttribArray(e.primitiveShader.aVertexPosition), t.disableVertexAttribArray(e.primitiveShader.colorAttribute), t.enableVertexAttribArray(e.defaultShader.aVertexPosition), t.enableVertexAttribArray(e.defaultShader.colorAttribute), t.enableVertexAttribArray(e.defaultShader.aTextureCoord)
    }, e.activateStripShader = function() {
      var t = e.gl;
      t.useProgram(e.stripShader.program)
    }, e.deactivateStripShader = function() {
      var t = e.gl;
      t.useProgram(e.defaultShader.program)
    }, e.CompileVertexShader = function(t, i) {
      return e._CompileShader(t, i, t.VERTEX_SHADER)
    }, e.CompileFragmentShader = function(t, i) {
      return e._CompileShader(t, i, t.FRAGMENT_SHADER)
    }, e._CompileShader = function(t, e, i) {
      var s = e.join("\n"),
        n = t.createShader(i);
      return t.shaderSource(n, s), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS) ? n : (window.console.log(t.getShaderInfoLog(n)), null)
    }, e.compileProgram = function(t, i) {
      var s = e.gl,
        n = e.CompileFragmentShader(s, i),
        r = e.CompileVertexShader(s, t),
        o = s.createProgram();
      return s.attachShader(o, r), s.attachShader(o, n), s.linkProgram(o), s.getProgramParameter(o, s.LINK_STATUS) || window.console.log("Could not initialise shaders"), o
    }, e.BitmapText = function(t, i) {
      e.DisplayObjectContainer.call(this), this.setText(t), this.setStyle(i), this.updateText(), this.dirty = !1
    }, e.BitmapText.prototype = Object.create(e.DisplayObjectContainer.prototype), e.BitmapText.prototype.constructor = e.BitmapText, e.BitmapText.prototype.setText = function(t) {
      this.text = t || " ", this.dirty = !0
    }, e.BitmapText.prototype.setStyle = function(t) {
      t = t || {}, t.align = t.align || "left", this.style = t;
      var i = t.font.split(" ");
      this.fontName = i[i.length - 1], this.fontSize = i.length >= 2 ? parseInt(i[i.length - 2], 10) : e.BitmapText.fonts[this.fontName].size, this.dirty = !0
    }, e.BitmapText.prototype.updateText = function() {
      for (var t = e.BitmapText.fonts[this.fontName], i = new e.Point, s = null, n = [], r = 0, o = [], a = 0, h = this.fontSize / t.size, l = 0; l < this.text.length; l++) {
        var c = this.text.charCodeAt(l);
        if (/(?:\r\n|\r|\n)/.test(this.text.charAt(l))) o.push(i.x), r = Math.max(r, i.x), a++, i.x = 0, i.y += t.lineHeight, s = null;
        else {
          var u = t.chars[c];
          u && (s && u[s] && (i.x += u.kerning[s]), n.push({
            texture: u.texture,
            line: a,
            charCode: c,
            position: new e.Point(i.x + u.xOffset, i.y + u.yOffset)
          }), i.x += u.xAdvance, s = c)
        }
      }
      o.push(i.x), r = Math.max(r, i.x);
      var d = [];
      for (l = 0; a >= l; l++) {
        var p = 0;
        "right" === this.style.align ? p = r - o[l] : "center" === this.style.align && (p = (r - o[l]) / 2), d.push(p)
      }
      for (l = 0; l < n.length; l++) {
        var f = new e.Sprite(n[l].texture);
        f.position.x = (n[l].position.x + d[n[l].line]) * h, f.position.y = n[l].position.y * h, f.scale.x = f.scale.y = h, this.addChild(f)
      }
      this.width = r * h, this.height = (i.y + t.lineHeight) * h
    }, e.BitmapText.prototype.updateTransform = function() {
      if (this.dirty) {
        for (; this.children.length > 0;) this.removeChild(this.getChildAt(0));
        this.updateText(), this.dirty = !1
      }
      e.DisplayObjectContainer.prototype.updateTransform.call(this)
    }, e.BitmapText.fonts = {}, e.Text = function(t, i) {
      this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), e.Sprite.call(this, e.Texture.fromCanvas(this.canvas)), this.setText(t), this.setStyle(i), this.updateText(), this.dirty = !1
    }, e.Text.prototype = Object.create(e.Sprite.prototype), e.Text.prototype.constructor = e.Text, e.Text.prototype.setStyle = function(t) {
      t = t || {}, t.font = t.font || "bold 20pt Arial", t.fill = t.fill || "black", t.align = t.align || "left", t.stroke = t.stroke || "black", t.strokeThickness = t.strokeThickness || 0, t.wordWrap = t.wordWrap || !1, t.wordWrapWidth = t.wordWrapWidth || 100, this.style = t, this.dirty = !0
    }, e.Text.prototype.setText = function(t) {
      this.text = t.toString() || " ", this.dirty = !0
    }, e.Text.prototype.updateText = function() {
      this.context.font = this.style.font;
      var t = this.text;
      this.style.wordWrap && (t = this.wordWrap(this.text));
      for (var i = t.split(/(?:\r\n|\r|\n)/), s = [], n = 0, r = 0; r < i.length; r++) {
        var o = this.context.measureText(i[r]).width;
        s[r] = o, n = Math.max(n, o)
      }
      this.canvas.width = n + this.style.strokeThickness;
      var a = this.determineFontHeight("font: " + this.style.font + ";") + this.style.strokeThickness;
      for (this.canvas.height = a * i.length, this.context.fillStyle = this.style.fill, this.context.font = this.style.font, this.context.strokeStyle = this.style.stroke, this.context.lineWidth = this.style.strokeThickness, this.context.textBaseline = "top", r = 0; r < i.length; r++) {
        var h = new e.Point(this.style.strokeThickness / 2, this.style.strokeThickness / 2 + r * a);
        "right" === this.style.align ? h.x += n - s[r] : "center" === this.style.align && (h.x += (n - s[r]) / 2), this.style.stroke && this.style.strokeThickness && this.context.strokeText(i[r], h.x, h.y), this.style.fill && this.context.fillText(i[r], h.x, h.y)
      }
      this.updateTexture()
    }, e.Text.prototype.updateTexture = function() {
      this.texture.baseTexture.width = this.canvas.width, this.texture.baseTexture.height = this.canvas.height, this.texture.frame.width = this.canvas.width, this.texture.frame.height = this.canvas.height, this._width = this.canvas.width, this._height = this.canvas.height, e.texturesToUpdate.push(this.texture.baseTexture)
    }, e.Text.prototype.updateTransform = function() {
      this.dirty && (this.updateText(), this.dirty = !1), e.Sprite.prototype.updateTransform.call(this)
    }, e.Text.prototype.determineFontHeight = function(t) {
      var i = e.Text.heightCache[t];
      if (!i) {
        var s = document.getElementsByTagName("body")[0],
          n = document.createElement("div"),
          r = document.createTextNode("M");
        n.appendChild(r), n.setAttribute("style", t + ";position:absolute;top:0;left:0"), s.appendChild(n), i = n.offsetHeight, e.Text.heightCache[t] = i, s.removeChild(n)
      }
      return i
    }, e.Text.prototype.wordWrap = function(t) {
      for (var e = "", i = t.split("\n"), s = 0; s < i.length; s++) {
        for (var n = this.style.wordWrapWidth, r = i[s].split(" "), o = 0; o < r.length; o++) {
          var a = this.context.measureText(r[o]).width,
            h = a + this.context.measureText(" ").width;
          h > n ? (o > 0 && (e += "\n"), e += r[o] + " ", n = this.style.wordWrapWidth - a) : (n -= h, e += r[o] + " ")
        }
        e += "\n"
      }
      return e
    }, e.Text.prototype.destroy = function(t) {
      t && this.texture.destroy()
    }, e.Text.heightCache = {}, e.BaseTextureCache = {}, e.texturesToUpdate = [], e.texturesToDestroy = [], e.BaseTexture = function(t, i) {
      if (e.EventTarget.call(this), this.width = 100, this.height = 100, this.scaleMode = i || e.BaseTexture.SCALE_MODE.DEFAULT, this.hasLoaded = !1, this.source = t, t) {
        if (this.source instanceof Image || this.source instanceof HTMLImageElement)
          if (this.source.complete) this.hasLoaded = !0, this.width = this.source.width, this.height = this.source.height, e.texturesToUpdate.push(this);
          else {
            var s = this;
            this.source.onload = function() {
              s.hasLoaded = !0, s.width = s.source.width, s.height = s.source.height, e.texturesToUpdate.push(s), s.dispatchEvent({
                type: "loaded",
                content: s
              })
            }
          } else this.hasLoaded = !0, this.width = this.source.width, this.height = this.source.height, e.texturesToUpdate.push(this);
        this.imageUrl = null, this._powerOf2 = !1
      }
    }, e.BaseTexture.prototype.constructor = e.BaseTexture, e.BaseTexture.prototype.destroy = function() {
      this.source instanceof Image && (this.imageUrl in e.BaseTextureCache && delete e.BaseTextureCache[this.imageUrl], this.imageUrl = null, this.source.src = null), this.source = null, e.texturesToDestroy.push(this)
    }, e.BaseTexture.prototype.updateSourceImage = function(t) {
      this.hasLoaded = !1, this.source.src = null, this.source.src = t
    }, e.BaseTexture.fromImage = function(t, i, s) {
      var n = e.BaseTextureCache[t];
      if (!n) {
        var r = new Image;
        i && (r.crossOrigin = ""), r.src = t, n = new e.BaseTexture(r, s), n.imageUrl = t, e.BaseTextureCache[t] = n
      }
      return n
    }, e.BaseTexture.SCALE_MODE = {
      DEFAULT: 0,
      LINEAR: 0,
      NEAREST: 1
    }, e.TextureCache = {}, e.FrameCache = {}, e.Texture = function(t, i) {
      if (e.EventTarget.call(this), i || (this.noFrame = !0, i = new e.Rectangle(0, 0, 1, 1)), t instanceof e.Texture && (t = t.baseTexture), this.baseTexture = t, this.frame = i, this.trim = new e.Point, this.scope = this, t.hasLoaded) this.noFrame && (i = new e.Rectangle(0, 0, t.width, t.height)), this.setFrame(i);
      else {
        var s = this;
        t.addEventListener("loaded", function() {
          s.onBaseTextureLoaded()
        })
      }
    }, e.Texture.prototype.constructor = e.Texture, e.Texture.prototype.onBaseTextureLoaded = function() {
      var t = this.baseTexture;
      t.removeEventListener("loaded", this.onLoaded), this.noFrame && (this.frame = new e.Rectangle(0, 0, t.width, t.height)), this.noFrame = !1, this.width = this.frame.width, this.height = this.frame.height, this.scope.dispatchEvent({
        type: "update",
        content: this
      })
    }, e.Texture.prototype.destroy = function(t) {
      t && this.baseTexture.destroy()
    }, e.Texture.prototype.setFrame = function(t) {
      if (this.frame = t, this.width = t.width, this.height = t.height, t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
      this.updateFrame = !0, e.Texture.frameUpdates.push(this)
    }, e.Texture.fromImage = function(t, i, s) {
      var n = e.TextureCache[t];
      return n || (n = new e.Texture(e.BaseTexture.fromImage(t, i, s)), e.TextureCache[t] = n), n
    }, e.Texture.fromFrame = function(t) {
      var i = e.TextureCache[t];
      if (!i) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
      return i
    }, e.Texture.fromCanvas = function(t, i) {
      var s = new e.BaseTexture(t, i);
      return new e.Texture(s)
    }, e.Texture.addTextureToCache = function(t, i) {
      e.TextureCache[i] = t
    }, e.Texture.removeTextureFromCache = function(t) {
      var i = e.TextureCache[t];
      return e.TextureCache[t] = null, i
    }, e.Texture.frameUpdates = [], e.Texture.SCALE_MODE = e.BaseTexture.SCALE_MODE, e.RenderTexture = function(t, i) {
      e.EventTarget.call(this), this.width = t || 100, this.height = i || 100, this.indetityMatrix = e.mat3.create(), this.frame = new e.Rectangle(0, 0, this.width, this.height), e.gl ? this.initWebGL() : this.initCanvas()
    }, e.RenderTexture.prototype = Object.create(e.Texture.prototype), e.RenderTexture.prototype.constructor = e.RenderTexture, e.RenderTexture.prototype.initWebGL = function() {
      var t = e.gl;
      this.glFramebuffer = t.createFramebuffer(), t.bindFramebuffer(t.FRAMEBUFFER, this.glFramebuffer), this.glFramebuffer.width = this.width, this.glFramebuffer.height = this.height, this.baseTexture = new e.BaseTexture, this.baseTexture.width = this.width, this.baseTexture.height = this.height, this.baseTexture._glTexture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this.baseTexture._glTexture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.width, this.height, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), this.baseTexture.isRender = !0, t.bindFramebuffer(t.FRAMEBUFFER, this.glFramebuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.baseTexture._glTexture, 0), this.projection = new e.Point(this.width / 2, -this.height / 2), this.render = this.renderWebGL
    }, e.RenderTexture.prototype.resize = function(t, i) {
      if (this.width = t, this.height = i, e.gl) {
        this.projection.x = this.width / 2, this.projection.y = -this.height / 2;
        var s = e.gl;
        s.bindTexture(s.TEXTURE_2D, this.baseTexture._glTexture), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, this.width, this.height, 0, s.RGBA, s.UNSIGNED_BYTE, null)
      } else this.frame.width = this.width, this.frame.height = this.height, this.renderer.resize(this.width, this.height)
    }, e.RenderTexture.prototype.initCanvas = function() {
      this.renderer = new e.CanvasRenderer(this.width, this.height, null, 0), this.baseTexture = new e.BaseTexture(this.renderer.view), this.frame = new e.Rectangle(0, 0, this.width, this.height), this.render = this.renderCanvas
    }, e.RenderTexture.prototype.renderWebGL = function(t, i, s) {
      var n = e.gl;
      n.colorMask(!0, !0, !0, !0), n.viewport(0, 0, this.width, this.height), n.bindFramebuffer(n.FRAMEBUFFER, this.glFramebuffer), s && (n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT));
      var r = t.children,
        o = t.worldTransform;
      t.worldTransform = e.mat3.create(), t.worldTransform[4] = -1, t.worldTransform[5] = -2 * this.projection.y, i && (t.worldTransform[2] = i.x, t.worldTransform[5] -= i.y), e.visibleCount++, t.vcount = e.visibleCount;
      for (var a = 0, h = r.length; h > a; a++) r[a].updateTransform();
      var l = t.__renderGroup;
      l ? t === l.root ? l.render(this.projection, this.glFramebuffer) : l.renderSpecific(t, this.projection, this.glFramebuffer) : (this.renderGroup || (this.renderGroup = new e.WebGLRenderGroup(n)), this.renderGroup.setRenderable(t), this.renderGroup.render(this.projection, this.glFramebuffer)), t.worldTransform = o
    }, e.RenderTexture.prototype.renderCanvas = function(t, i, s) {
      var n = t.children;
      t.worldTransform = e.mat3.create(), i && (t.worldTransform[2] = i.x, t.worldTransform[5] = i.y);
      for (var r = 0, o = n.length; o > r; r++) n[r].updateTransform();
      s && this.renderer.context.clearRect(0, 0, this.width, this.height), this.renderer.renderDisplayObject(t), this.renderer.context.setTransform(1, 0, 0, 1, 0, 0)
    }, e.EventTarget = function() {
      var t = {};
      this.addEventListener = this.on = function(e, i) {
        void 0 === t[e] && (t[e] = []), -1 === t[e].indexOf(i) && t[e].push(i)
      }, this.dispatchEvent = this.emit = function(e) {
        if (t[e.type] && t[e.type].length)
          for (var i = 0, s = t[e.type].length; s > i; i++) t[e.type][i](e)
      }, this.removeEventListener = this.off = function(e, i) {
        var s = t[e].indexOf(i); - 1 !== s && t[e].splice(s, 1)
      }, this.removeAllEventListeners = function(e) {
        var i = t[e];
        i && (i.length = 0)
      }
    }, e.PolyK = {}, e.PolyK.Triangulate = function(t) {
      var i = !0,
        s = t.length >> 1;
      if (3 > s) return [];
      for (var n = [], r = [], o = 0; s > o; o++) r.push(o);
      o = 0;
      for (var a = s; a > 3;) {
        var h = r[(o + 0) % a],
          l = r[(o + 1) % a],
          c = r[(o + 2) % a],
          u = t[2 * h],
          d = t[2 * h + 1],
          p = t[2 * l],
          f = t[2 * l + 1],
          g = t[2 * c],
          m = t[2 * c + 1],
          y = !1;
        if (e.PolyK._convex(u, d, p, f, g, m, i)) {
          y = !0;
          for (var _ = 0; a > _; _++) {
            var x = r[_];
            if (x !== h && x !== l && x !== c && e.PolyK._PointInTriangle(t[2 * x], t[2 * x + 1], u, d, p, f, g, m)) {
              y = !1;
              break
            }
          }
        }
        if (y) n.push(h, l, c), r.splice((o + 1) % a, 1), a--, o = 0;
        else if (o++ > 3 * a) {
          if (!i) return window.console.log("PIXI Warning: shape too complex to fill"), [];
          for (n = [], r = [], o = 0; s > o; o++) r.push(o);
          o = 0, a = s, i = !1
        }
      }
      return n.push(r[0], r[1], r[2]), n
    }, e.PolyK._PointInTriangle = function(t, e, i, s, n, r, o, a) {
      var h = o - i,
        l = a - s,
        c = n - i,
        u = r - s,
        d = t - i,
        p = e - s,
        f = h * h + l * l,
        g = h * c + l * u,
        m = h * d + l * p,
        y = c * c + u * u,
        _ = c * d + u * p,
        x = 1 / (f * y - g * g),
        v = (y * m - g * _) * x,
        b = (f * _ - g * m) * x;
      return v >= 0 && b >= 0 && 1 > v + b
    }, e.PolyK._convex = function(t, e, i, s, n, r, o) {
      return (e - s) * (n - i) + (i - t) * (r - s) >= 0 === o
    }, i.Camera = function(t, e, s, n, r, o) {
      this.game = t, this.world = t.world, this.id = 0, this.view = new i.Rectangle(s, n, r, o), this.screenView = new i.Rectangle(s, n, r, o), this.bounds = new i.Rectangle(s, n, r, o), this.deadzone = null, this.visible = !0, this.atLimit = {
        x: !1,
        y: !1
      }, this.target = null, this._edge = 0, this.displayObject = null
    }, i.Camera.FOLLOW_LOCKON = 0, i.Camera.FOLLOW_PLATFORMER = 1, i.Camera.FOLLOW_TOPDOWN = 2, i.Camera.FOLLOW_TOPDOWN_TIGHT = 3, i.Camera.prototype = {
      follow: function(t, e) {
        "undefined" == typeof e && (e = i.Camera.FOLLOW_LOCKON), this.target = t;
        var s;
        switch (e) {
          case i.Camera.FOLLOW_PLATFORMER:
            var n = this.width / 8,
              r = this.height / 3;
            this.deadzone = new i.Rectangle((this.width - n) / 2, (this.height - r) / 2 - .25 * r, n, r);
            break;
          case i.Camera.FOLLOW_TOPDOWN:
            s = Math.max(this.width, this.height) / 4, this.deadzone = new i.Rectangle((this.width - s) / 2, (this.height - s) / 2, s, s);
            break;
          case i.Camera.FOLLOW_TOPDOWN_TIGHT:
            s = Math.max(this.width, this.height) / 8, this.deadzone = new i.Rectangle((this.width - s) / 2, (this.height - s) / 2, s, s);
            break;
          case i.Camera.FOLLOW_LOCKON:
            this.deadzone = null;
            break;
          default:
            this.deadzone = null
        }
      },
      focusOn: function(t) {
        this.setPosition(Math.round(t.x - this.view.halfWidth), Math.round(t.y - this.view.halfHeight))
      },
      focusOnXY: function(t, e) {
        this.setPosition(Math.round(t - this.view.halfWidth), Math.round(e - this.view.halfHeight))
      },
      update: function() {
        this.target && this.updateTarget(), this.bounds && this.checkBounds(), this.displayObject.position.x = -this.view.x, this.displayObject.position.y = -this.view.y
      },
      updateTarget: function() {
        this.deadzone ? (this._edge = this.target.x - this.deadzone.x, this.view.x > this._edge && (this.view.x = this._edge), this._edge = this.target.x + this.target.width - this.deadzone.x - this.deadzone.width, this.view.x < this._edge && (this.view.x = this._edge), this._edge = this.target.y - this.deadzone.y, this.view.y > this._edge && (this.view.y = this._edge), this._edge = this.target.y + this.target.height - this.deadzone.y - this.deadzone.height, this.view.y < this._edge && (this.view.y = this._edge)) : this.focusOnXY(this.target.x, this.target.y)
      },
      setBoundsToWorld: function() {
        this.bounds.setTo(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height)
      },
      checkBounds: function() {
        this.atLimit.x = !1, this.atLimit.y = !1, this.view.x < this.bounds.x && (this.atLimit.x = !0, this.view.x = this.bounds.x), this.view.right > this.bounds.right && (this.atLimit.x = !0, this.view.x = this.bounds.right - this.width), this.view.y < this.bounds.top && (this.atLimit.y = !0, this.view.y = this.bounds.top), this.view.bottom > this.bounds.bottom && (this.atLimit.y = !0, this.view.y = this.bounds.bottom - this.height), this.view.floor()
      },
      setPosition: function(t, e) {
        this.view.x = t, this.view.y = e, this.bounds && this.checkBounds()
      },
      setSize: function(t, e) {
        this.view.width = t, this.view.height = e
      }
    }, i.Camera.prototype.constructor = i.Camera, Object.defineProperty(i.Camera.prototype, "x", {
      get: function() {
        return this.view.x
      },
      set: function(t) {
        this.view.x = t, this.bounds && this.checkBounds()
      }
    }), Object.defineProperty(i.Camera.prototype, "y", {
      get: function() {
        return this.view.y
      },
      set: function(t) {
        this.view.y = t, this.bounds && this.checkBounds()
      }
    }), Object.defineProperty(i.Camera.prototype, "width", {
      get: function() {
        return this.view.width
      },
      set: function(t) {
        this.view.width = t
      }
    }), Object.defineProperty(i.Camera.prototype, "height", {
      get: function() {
        return this.view.height
      },
      set: function(t) {
        this.view.height = t
      }
    }), i.State = function() {
      this.game = null, this.add = null, this.camera = null, this.cache = null, this.input = null, this.load = null, this.math = null, this.sound = null, this.stage = null, this.time = null, this.tweens = null, this.world = null, this.particles = null, this.physics = null
    }, i.State.prototype = {
      preload: function() {},
      loadUpdate: function() {},
      loadRender: function() {},
      create: function() {},
      update: function() {},
      render: function() {},
      paused: function() {},
      destroy: function() {}
    }, i.State.prototype.constructor = i.State, i.StateManager = function(t, e) {
      this.game = t, this.states = {}, this._pendingState = null, "undefined" != typeof e && null !== e && (this._pendingState = e), this._created = !1, this.current = "", this.onInitCallback = null, this.onPreloadCallback = null, this.onCreateCallback = null, this.onUpdateCallback = null, this.onRenderCallback = null, this.onPreRenderCallback = null, this.onLoadUpdateCallback = null, this.onLoadRenderCallback = null, this.onPausedCallback = null, this.onShutDownCallback = null
    }, i.StateManager.prototype = {
      boot: function() {
        this.game.onPause.add(this.pause, this), this.game.onResume.add(this.resume, this), null !== this._pendingState && ("string" == typeof this._pendingState ? this.start(this._pendingState, !1, !1) : this.add("default", this._pendingState, !0))
      },
      add: function(t, e, s) {
        "undefined" == typeof s && (s = !1);
        var n;
        return e instanceof i.State ? n = e : "object" == typeof e ? (n = e, n.game = this.game) : "function" == typeof e && (n = new e(this.game)), this.states[t] = n, s && (this.game.isBooted ? this.start(t) : this._pendingState = t), n
      },
      remove: function(t) {
        this.current == t && (this.callbackContext = null, this.onInitCallback = null, this.onShutDownCallback = null, this.onPreloadCallback = null, this.onLoadRenderCallback = null, this.onLoadUpdateCallback = null, this.onCreateCallback = null, this.onUpdateCallback = null, this.onRenderCallback = null, this.onPausedCallback = null, this.onDestroyCallback = null), delete this.states[t]
      },
      start: function(t, e, i) {
        return "undefined" == typeof e && (e = !0), "undefined" == typeof i && (i = !1), this.game.isBooted === !1 ? void(this._pendingState = t) : void(this.checkState(t) !== !1 && (this.current && this.onShutDownCallback.call(this.callbackContext, this.game), e && (this.game.tweens.removeAll(), this.game.world.destroy(), i === !0 && this.game.cache.destroy()), this.setCurrentState(t), this.onPreloadCallback ? (this.game.load.reset(), this.onPreloadCallback.call(this.callbackContext, this.game), 0 === this.game.load.totalQueuedFiles() ? this.game.loadComplete() : this.game.load.start()) : this.game.loadComplete()))
      },
      dummy: function() {},
      checkState: function(t) {
        if (this.states[t]) {
          var e = !1;
          return this.states[t].preload && (e = !0), e === !1 && this.states[t].loadRender && (e = !0), e === !1 && this.states[t].loadUpdate && (e = !0), e === !1 && this.states[t].create && (e = !0), e === !1 && this.states[t].update && (e = !0), e === !1 && this.states[t].preRender && (e = !0), e === !1 && this.states[t].render && (e = !0), e === !1 && this.states[t].paused && (e = !0), e === !1 ? (console.warn("Invalid Phaser State object given. Must contain at least a one of the required functions."), !1) : !0
        }
        return console.warn("Phaser.StateManager - No state found with the key: " + t), !1
      },
      link: function(t) {
        this.states[t].game = this.game, this.states[t].add = this.game.add, this.states[t].camera = this.game.camera, this.states[t].cache = this.game.cache, this.states[t].input = this.game.input, this.states[t].load = this.game.load, this.states[t].math = this.game.math, this.states[t].sound = this.game.sound, this.states[t].stage = this.game.stage, this.states[t].time = this.game.time, this.states[t].tweens = this.game.tweens, this.states[t].world = this.game.world, this.states[t].particles = this.game.particles, this.states[t].physics = this.game.physics, this.states[t].rnd = this.game.rnd
      },
      setCurrentState: function(t) {
        this.callbackContext = this.states[t], this.link(t), this.onInitCallback = this.states[t].init || this.dummy, this.onPreloadCallback = this.states[t].preload || null, this.onLoadRenderCallback = this.states[t].loadRender || null, this.onLoadUpdateCallback = this.states[t].loadUpdate || null, this.onCreateCallback = this.states[t].create || null, this.onUpdateCallback = this.states[t].update || null, this.onPreRenderCallback = this.states[t].preRender || null, this.onRenderCallback = this.states[t].render || null, this.onPausedCallback = this.states[t].paused || null, this.onShutDownCallback = this.states[t].shutdown || this.dummy, this.current = t, this._created = !1, this.onInitCallback.call(this.callbackContext, this.game)
      },
      getCurrentState: function() {
        return this.states[this.current]
      },
      loadComplete: function() {
        this._created === !1 && this.onCreateCallback ? (this._created = !0, this.onCreateCallback.call(this.callbackContext, this.game)) : this._created = !0
      },
      pause: function() {
        this._created && this.onPausedCallback && this.onPausedCallback.call(this.callbackContext, this.game, !0)
      },
      resume: function() {
        this._created && this.onre && this.onPausedCallback.call(this.callbackContext, this.game, !1)
      },
      update: function() {
        this._created && this.onUpdateCallback ? this.onUpdateCallback.call(this.callbackContext, this.game) : this.onLoadUpdateCallback && this.onLoadUpdateCallback.call(this.callbackContext, this.game)
      },
      preRender: function() {
        this.onPreRenderCallback && this.onPreRenderCallback.call(this.callbackContext, this.game)
      },
      render: function() {
        this._created && this.onRenderCallback ? (this.game.renderType === i.CANVAS && (this.game.context.save(), this.game.context.setTransform(1, 0, 0, 1, 0, 0)), this.onRenderCallback.call(this.callbackContext, this.game), this.game.renderType === i.CANVAS && this.game.context.restore()) : this.onLoadRenderCallback && this.onLoadRenderCallback.call(this.callbackContext, this.game)
      },
      destroy: function() {
        this.callbackContext = null, this.onInitCallback = null, this.onShutDownCallback = null, this.onPreloadCallback = null, this.onLoadRenderCallback = null, this.onLoadUpdateCallback = null, this.onCreateCallback = null, this.onUpdateCallback = null, this.onRenderCallback = null, this.onPausedCallback = null, this.onDestroyCallback = null, this.game = null, this.states = {}, this._pendingState = null
      }
    }, i.StateManager.prototype.constructor = i.StateManager, i.LinkedList = function() {
      this.next = null, this.prev = null, this.first = null, this.last = null, this.total = 0
    }, i.LinkedList.prototype = {
      add: function(t) {
        return 0 === this.total && null == this.first && null == this.last ? (this.first = t, this.last = t, this.next = t, t.prev = this, this.total++, t) : (this.last.next = t, t.prev = this.last, this.last = t, this.total++, t)
      },
      remove: function(t) {
        t == this.first ? this.first = this.first.next : t == this.last && (this.last = this.last.prev), t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.next = t.prev = null, null == this.first && (this.last = null), this.total--
      },
      callAll: function(t) {
        if (this.first && this.last) {
          var e = this.first;
          do e && e[t] && e[t].call(e), e = e.next; while (e != this.last.next)
        }
      }
    }, i.LinkedList.prototype.constructor = i.LinkedList, i.Signal = function() {
      this._bindings = [], this._prevParams = null;
      var t = this;
      this.dispatch = function() {
        i.Signal.prototype.dispatch.apply(t, arguments)
      }
    }, i.Signal.prototype = {
      memorize: !1,
      _shouldPropagate: !0,
      active: !0,
      validateListener: function(t, e) {
        if ("function" != typeof t) throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", e))
      },
      _registerListener: function(t, e, s, n) {
        var r, o = this._indexOfListener(t, s);
        if (-1 !== o) {
          if (r = this._bindings[o], r.isOnce() !== e) throw new Error("You cannot add" + (e ? "" : "Once") + "() then add" + (e ? "Once" : "") + "() the same listener without removing the relationship first.")
        } else r = new i.SignalBinding(this, t, e, s, n), this._addBinding(r);
        return this.memorize && this._prevParams && r.execute(this._prevParams), r
      },
      _addBinding: function(t) {
        var e = this._bindings.length;
        do --
        e;
        while (this._bindings[e] && t._priority <= this._bindings[e]._priority);
        this._bindings.splice(e + 1, 0, t)
      },
      _indexOfListener: function(t, e) {
        for (var i, s = this._bindings.length; s--;)
          if (i = this._bindings[s], i._listener === t && i.context === e) return s;
        return -1
      },
      has: function(t, e) {
        return -1 !== this._indexOfListener(t, e)
      },
      add: function(t, e, i) {
        return this.validateListener(t, "add"), this._registerListener(t, !1, e, i)
      },
      addOnce: function(t, e, i) {
        return this.validateListener(t, "addOnce"), this._registerListener(t, !0, e, i)
      },
      remove: function(t, e) {
        this.validateListener(t, "remove");
        var i = this._indexOfListener(t, e);
        return -1 !== i && (this._bindings[i]._destroy(), this._bindings.splice(i, 1)), t
      },
      removeAll: function() {
        for (var t = this._bindings.length; t--;) this._bindings[t]._destroy();
        this._bindings.length = 0
      },
      getNumListeners: function() {
        return this._bindings.length
      },
      halt: function() {
        this._shouldPropagate = !1
      },
      dispatch: function() {
        if (this.active) {
          var t, e = Array.prototype.slice.call(arguments),
            i = this._bindings.length;
          if (this.memorize && (this._prevParams = e), i) {
            t = this._bindings.slice(), this._shouldPropagate = !0;
            do i--; while (t[i] && this._shouldPropagate && t[i].execute(e) !== !1)
          }
        }
      },
      forget: function() {
        this._prevParams = null
      },
      dispose: function() {
        this.removeAll(), delete this._bindings, delete this._prevParams
      },
      toString: function() {
        return "[Phaser.Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
      }
    }, i.Signal.prototype.constructor = i.Signal, i.SignalBinding = function(t, e, i, s, n) {
      this._listener = e, this._isOnce = i, this.context = s, this._signal = t, this._priority = n || 0
    }, i.SignalBinding.prototype = {
      active: !0,
      params: null,
      execute: function(t) {
        var e, i;
        return this.active && this._listener && (i = this.params ? this.params.concat(t) : t, e = this._listener.apply(this.context, i), this._isOnce && this.detach()), e
      },
      detach: function() {
        return this.isBound() ? this._signal.remove(this._listener, this.context) : null
      },
      isBound: function() {
        return !!this._signal && !!this._listener
      },
      isOnce: function() {
        return this._isOnce
      },
      getListener: function() {
        return this._listener
      },
      getSignal: function() {
        return this._signal
      },
      _destroy: function() {
        delete this._signal, delete this._listener, delete this.context
      },
      toString: function() {
        return "[Phaser.SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
      }
    }, i.SignalBinding.prototype.constructor = i.SignalBinding, i.Filter = function(t, e, s) {
      this.game = t, this.type = i.WEBGL_FILTER, this.passes = [this], this.dirty = !0, this.padding = 0, this.uniforms = {
        time: {
          type: "1f",
          value: 0
        },
        resolution: {
          type: "2f",
          value: {
            x: 256,
            y: 256
          }
        },
        mouse: {
          type: "2f",
          value: {
            x: 0,
            y: 0
          }
        }
      }, this.fragmentSrc = s || []
    }, i.Filter.prototype = {
      init: function() {},
      setResolution: function(t, e) {
        this.uniforms.resolution.value.x = t, this.uniforms.resolution.value.y = e
      },
      update: function(t) {
        "undefined" != typeof t && (t.x > 0 && (this.uniforms.mouse.x = t.x.toFixed(2)), t.y > 0 && (this.uniforms.mouse.y = t.y.toFixed(2))), this.uniforms.time.value = this.game.time.totalElapsedSeconds()
      },
      destroy: function() {
        this.game = null
      }
    }, i.Filter.prototype.constructor = i.Filter, Object.defineProperty(i.Filter.prototype, "width", {
      get: function() {
        return this.uniforms.resolution.value.x
      },
      set: function(t) {
        this.uniforms.resolution.value.x = t
      }
    }), Object.defineProperty(i.Filter.prototype, "height", {
      get: function() {
        return this.uniforms.resolution.value.y
      },
      set: function(t) {
        this.uniforms.resolution.value.y = t
      }
    }), i.Plugin = function(t, e) {
      "undefined" == typeof e && (e = null), this.game = t, this.parent = e, this.active = !1, this.visible = !1, this.hasPreUpdate = !1, this.hasUpdate = !1, this.hasPostUpdate = !1, this.hasRender = !1, this.hasPostRender = !1
    }, i.Plugin.prototype = {
      preUpdate: function() {},
      update: function() {},
      render: function() {},
      postRender: function() {},
      destroy: function() {
        this.game = null, this.parent = null, this.active = !1, this.visible = !1
      }
    }, i.Plugin.prototype.constructor = i.Plugin, i.PluginManager = function(t, e) {
      this.game = t, this._parent = e, this.plugins = [], this._pluginsLength = 0
    }, i.PluginManager.prototype = {
      add: function(t) {
        var e = !1;
        return "function" == typeof t ? t = new t(this.game, this._parent) : (t.game = this.game, t.parent = this._parent), "function" == typeof t.preUpdate && (t.hasPreUpdate = !0, e = !0), "function" == typeof t.update && (t.hasUpdate = !0, e = !0), "function" == typeof t.postUpdate && (t.hasPostUpdate = !0, e = !0), "function" == typeof t.render && (t.hasRender = !0, e = !0), "function" == typeof t.postRender && (t.hasPostRender = !0, e = !0), e ? ((t.hasPreUpdate || t.hasUpdate || t.hasPostUpdate) && (t.active = !0), (t.hasRender || t.hasPostRender) && (t.visible = !0), this._pluginsLength = this.plugins.push(t), "function" == typeof t.init && t.init(), t) : null
      },
      remove: function(t) {
        if (0 !== this._pluginsLength)
          for (this._p = 0; this._p < this._pluginsLength; this._p++)
            if (this.plugins[this._p] === t) return t.destroy(), this.plugins.splice(this._p, 1), void this._pluginsLength--
      },
      removeAll: function() {
        for (this._p = 0; this._p < this._pluginsLength; this._p++) this.plugins[this._p].destroy();
        this.plugins.length = 0, this._pluginsLength = 0
      },
      preUpdate: function() {
        if (0 !== this._pluginsLength)
          for (this._p = 0; this._p < this._pluginsLength; this._p++) this.plugins[this._p].active && this.plugins[this._p].hasPreUpdate && this.plugins[this._p].preUpdate()
      },
      update: function() {
        if (0 !== this._pluginsLength)
          for (this._p = 0; this._p < this._pluginsLength; this._p++) this.plugins[this._p].active && this.plugins[this._p].hasUpdate && this.plugins[this._p].update()
      },
      postUpdate: function() {
        if (0 !== this._pluginsLength)
          for (this._p = 0; this._p < this._pluginsLength; this._p++) this.plugins[this._p].active && this.plugins[this._p].hasPostUpdate && this.plugins[this._p].postUpdate()
      },
      render: function() {
        if (0 !== this._pluginsLength)
          for (this._p = 0; this._p < this._pluginsLength; this._p++) this.plugins[this._p].visible && this.plugins[this._p].hasRender && this.plugins[this._p].render()
      },
      postRender: function() {
        if (0 !== this._pluginsLength)
          for (this._p = 0; this._p < this._pluginsLength; this._p++) this.plugins[this._p].visible && this.plugins[this._p].hasPostRender && this.plugins[this._p].postRender()
      },
      destroy: function() {
        this.plugins.length = 0, this._pluginsLength = 0, this.game = null, this._parent = null
      }
    }, i.PluginManager.prototype.constructor = i.PluginManager, i.Stage = function(t, s, n) {
      this.game = t, this._backgroundColor = "rgb(0,0,0)", this.offset = new i.Point, this.canvas = null, this._stage = new e.Stage(0, !1), this._stage.name = "_stage_root", this._stage.interactive = !1, this.display = this._stage, this.scaleMode = i.StageScaleMode.NO_SCALE, this.fullScreenScaleMode = i.StageScaleMode.NO_SCALE, this.scale = new i.StageScaleMode(this.game, s, n), this.aspectRatio = s / n, this.disableVisibilityChange = !1, this._nextOffsetCheck = 0, this.checkOffsetInterval = 2500, t.config ? this.parseConfig(t.config) : (this.canvas = i.Canvas.create(s, n), this.canvas.style["-webkit-full-screen"] = "width: 100%; height: 100%")
    }, i.Stage.prototype = {
      parseConfig: function(t) {
        this.canvas = t.canvasID ? i.Canvas.create(this.game.width, this.game.height, t.canvasID) : i.Canvas.create(this.game.width, this.game.height), t.canvasStyle ? this.canvas.stlye = t.canvasStyle : this.canvas.style["-webkit-full-screen"] = "width: 100%; height: 100%", t.checkOffsetInterval && (this.checkOffsetInterval = t.checkOffsetInterval), t.disableVisibilityChange && (this.disableVisibilityChange = t.disableVisibilityChange), t.fullScreenScaleMode && (this.fullScreenScaleMode = t.fullScreenScaleMode), t.scaleMode && (this.scaleMode = t.scaleMode), t.backgroundColor && (this.backgroundColor = t.backgroundColor)
      },
      boot: function() {
        i.Canvas.getOffset(this.canvas, this.offset), this.bounds = new i.Rectangle(this.offset.x, this.offset.y, this.game.width, this.game.height);
        var t = this;
        this._onChange = function(e) {
          return t.visibilityChange(e)
        }, i.Canvas.setUserSelect(this.canvas, "none"), i.Canvas.setTouchAction(this.canvas, "none"), this.backgroundColor = "#000", document.addEventListener("visibilitychange", this._onChange, !1), document.addEventListener("webkitvisibilitychange", this._onChange, !1), document.addEventListener("pagehide", this._onChange, !1), document.addEventListener("pageshow", this._onChange, !1), window.onblur = this._onChange, window.onfocus = this._onChange
      },
      update: function() {
        this.checkOffsetInterval !== !1 && this.game.time.now > this._nextOffsetCheck && (i.Canvas.getOffset(this.canvas, this.offset), this._nextOffsetCheck = this.game.time.now + this.checkOffsetInterval)
      },
      visibilityChange: function(t) {
        this.disableVisibilityChange || (this.game.paused = this.game.paused !== !1 || "pagehide" != t.type && "blur" != t.type && document.hidden !== !0 && document.webkitHidden !== !0 ? !1 : !0)
      }
    }, i.Stage.prototype.constructor = i.Stage, Object.defineProperty(i.Stage.prototype, "backgroundColor", {
      get: function() {
        return this._backgroundColor
      },
      set: function(t) {
        this._backgroundColor = t, this.game.transparent === !1 && (this.game.renderType == i.CANVAS ? this.game.canvas.style.backgroundColor = t : ("string" == typeof t && (t = i.Color.hexToRGB(t)), this._stage.setBackgroundColor(t)))
      }
    }), i.Group = function(t, s, n, r) {
      this.game = t, "undefined" == typeof s && (s = t.world), this.name = n || "group", "undefined" == typeof r && (r = !1), r ? this._container = this.game.stage._stage : (this._container = new e.DisplayObjectContainer, this._container.name = this.name, s ? s instanceof i.Group ? s._container.addChild(this._container) : (s.addChild(this._container), s.updateTransform()) : (this.game.stage._stage.addChild(this._container), this.game.stage._stage.updateTransform())), this.type = i.GROUP, this.alive = !0, this.exists = !0, this.group = null, this._container.scale = new i.Point(1, 1), this.scale = this._container.scale, this.pivot = this._container.pivot, this.cursor = null
    }, i.Group.RETURN_NONE = 0, i.Group.RETURN_TOTAL = 1, i.Group.RETURN_CHILD = 2, i.Group.SORT_ASCENDING = -1, i.Group.SORT_DESCENDING = 1, i.Group.prototype = {
      add: function(t) {
        return t.group !== this && (t.type && t.type === i.GROUP ? (t.group = this, this._container.addChild(t._container), t._container.updateTransform()) : (t.group = this, this._container.addChild(t), t.updateTransform(), t.events && t.events.onAddedToGroup.dispatch(t, this)), null === this.cursor && (this.cursor = t)), t
      },
      addAt: function(t, e) {
        return t.group !== this && (t.type && t.type === i.GROUP ? (t.group = this, this._container.addChildAt(t._container, e), t._container.updateTransform()) : (t.group = this, this._container.addChildAt(t, e), t.updateTransform(), t.events && t.events.onAddedToGroup.dispatch(t, this)), null === this.cursor && (this.cursor = t)), t
      },
      getAt: function(t) {
        return this._container.getChildAt(t)
      },
      create: function(t, e, s, n, r) {
        "undefined" == typeof r && (r = !0);
        var o = new i.Sprite(this.game, t, e, s, n);
        return o.group = this, o.exists = r, o.visible = r, o.alive = r, this._container.addChild(o), o.updateTransform(), o.events && o.events.onAddedToGroup.dispatch(o, this), null === this.cursor && (this.cursor = o), o
      },
      createMultiple: function(t, e, s, n) {
        "undefined" == typeof n && (n = !1);
        for (var r = 0; t > r; r++) {
          var o = new i.Sprite(this.game, 0, 0, e, s);
          o.group = this, o.exists = n, o.visible = n, o.alive = n, this._container.addChild(o), o.updateTransform(), o.events && o.events.onAddedToGroup.dispatch(o, this), null === this.cursor && (this.cursor = o)
        }
      },
      next: function() {
        this.cursor && (this.cursor = this.cursor == this._container.last ? this._container._iNext : this.cursor._iNext)
      },
      previous: function() {
        this.cursor && (this.cursor = this.cursor == this._container._iNext ? this._container.last : this.cursor._iPrev)
      },
      childTest: function(t, e) {
        var i = t + " next: ";
        i += e._iNext ? e._iNext.name : "-null-", i = i + " " + t + " prev: ", i += e._iPrev ? e._iPrev.name : "-null-", console.log(i)
      },
      swapIndex: function(t, e) {
        var i = this.getAt(t),
          s = this.getAt(e);
        this.swap(i, s)
      },
      swap: function(t, e) {
        if (t === e || !t.parent || !e.parent || t.group !== this || e.group !== this) return !1;
        var i = t._iPrev,
          s = t._iNext,
          n = e._iPrev,
          r = e._iNext,
          o = this._container.last._iNext,
          a = this.game.stage._stage;
        do a !== t && a !== e && (a.first === t ? a.first = e : a.first === e && (a.first = t), a.last === t ? a.last = e : a.last === e && (a.last = t)), a = a._iNext; while (a != o);
        return t._iNext == e ? (t._iNext = r, t._iPrev = e, e._iNext = t, e._iPrev = i, i && (i._iNext = e), r && (r._iPrev = t), t.__renderGroup && t.__renderGroup.updateTexture(t), e.__renderGroup && e.__renderGroup.updateTexture(e), !0) : e._iNext == t ? (t._iNext = e, t._iPrev = n, e._iNext = s, e._iPrev = t, n && (n._iNext = t), s && (s._iPrev = e), t.__renderGroup && t.__renderGroup.updateTexture(t), e.__renderGroup && e.__renderGroup.updateTexture(e), !0) : (t._iNext = r, t._iPrev = n, e._iNext = s, e._iPrev = i, i && (i._iNext = e), s && (s._iPrev = e), n && (n._iNext = t), r && (r._iPrev = t), t.__renderGroup && t.__renderGroup.updateTexture(t), e.__renderGroup && e.__renderGroup.updateTexture(e), !0)
      },
      bringToTop: function(t) {
        return t.group === this && (this.remove(t), this.add(t)), t
      },
      getIndex: function(t) {
        return this._container.children.indexOf(t)
      },
      replace: function(t, e) {
        if (this._container.first._iNext) {
          var i = this.getIndex(t); - 1 != i && (void 0 !== e.parent && (e.events.onRemovedFromGroup.dispatch(e, this), e.parent.removeChild(e)), this._container.removeChild(t), this._container.addChildAt(e, i), e.events.onAddedToGroup.dispatch(e, this), e.updateTransform(), this.cursor == t && (this.cursor = this._container._iNext))
        }
      },
      setProperty: function(t, e, i, s) {
        s = s || 0;
        var n = e.length;
        1 == n ? 0 === s ? t[e[0]] = i : 1 == s ? t[e[0]] += i : 2 == s ? t[e[0]] -= i : 3 == s ? t[e[0]] *= i : 4 == s && (t[e[0]] /= i) : 2 == n ? 0 === s ? t[e[0]][e[1]] = i : 1 == s ? t[e[0]][e[1]] += i : 2 == s ? t[e[0]][e[1]] -= i : 3 == s ? t[e[0]][e[1]] *= i : 4 == s && (t[e[0]][e[1]] /= i) : 3 == n ? 0 === s ? t[e[0]][e[1]][e[2]] = i : 1 == s ? t[e[0]][e[1]][e[2]] += i : 2 == s ? t[e[0]][e[1]][e[2]] -= i : 3 == s ? t[e[0]][e[1]][e[2]] *= i : 4 == s && (t[e[0]][e[1]][e[2]] /= i) : 4 == n && (0 === s ? t[e[0]][e[1]][e[2]][e[3]] = i : 1 == s ? t[e[0]][e[1]][e[2]][e[3]] += i : 2 == s ? t[e[0]][e[1]][e[2]][e[3]] -= i : 3 == s ? t[e[0]][e[1]][e[2]][e[3]] *= i : 4 == s && (t[e[0]][e[1]][e[2]][e[3]] /= i))
      },
      set: function(t, e, i, s, n, r) {
        e = e.split("."), "undefined" == typeof s && (s = !1), "undefined" == typeof n && (n = !1), (s === !1 || s && t.alive) && (n === !1 || n && t.visible) && this.setProperty(t, e, i, r)
      },
      setAll: function(t, e, i, s, n) {
        if (t = t.split("."), "undefined" == typeof i && (i = !1), "undefined" == typeof s && (s = !1), n = n || 0, this._container.children.length > 0 && this._container.first._iNext) {
          var r = this._container.first._iNext;
          do(i === !1 || i && r.alive) && (s === !1 || s && r.visible) && this.setProperty(r, t, e, n), r = r._iNext; while (r != this._container.last._iNext)
        }
      },
      addAll: function(t, e, i, s) {
        this.setAll(t, e, i, s, 1)
      },
      subAll: function(t, e, i, s) {
        this.setAll(t, e, i, s, 2)
      },
      multiplyAll: function(t, e, i, s) {
        this.setAll(t, e, i, s, 3)
      },
      divideAll: function(t, e, i, s) {
        this.setAll(t, e, i, s, 4)
      },
      callAllExists: function(t, e) {
        var i = Array.prototype.splice.call(arguments, 2);
        if (this._container.children.length > 0 && this._container.first._iNext) {
          var s = this._container.first._iNext;
          do s.exists == e && s[t] && s[t].apply(s, i), s = s._iNext; while (s != this._container.last._iNext)
        }
      },
      callbackFromArray: function(t, e, i) {
        if (1 == i) {
          if (t[e[0]]) return t[e[0]]
        } else if (2 == i) {
          if (t[e[0]][e[1]]) return t[e[0]][e[1]]
        } else if (3 == i) {
          if (t[e[0]][e[1]][e[2]]) return t[e[0]][e[1]][e[2]]
        } else if (4 == i) {
          if (t[e[0]][e[1]][e[2]][e[3]]) return t[e[0]][e[1]][e[2]][e[3]]
        } else if (t[e]) return t[e];
        return !1
      },
      callAll: function(t, e) {
        if ("undefined" != typeof t) {
          t = t.split(".");
          var i = t.length;
          if ("undefined" == typeof e) e = null;
          else if ("string" == typeof e) {
            e = e.split(".");
            var s = e.length
          }
          var n = Array.prototype.splice.call(arguments, 2),
            r = null,
            o = null;
          if (this._container.children.length > 0 && this._container.first._iNext) {
            var a = this._container.first._iNext;
            do r = this.callbackFromArray(a, t, i), e && r ? (o = this.callbackFromArray(a, e, s), r && r.apply(o, n)) : r && r.apply(a, n), a = a._iNext; while (a != this._container.last._iNext)
          }
        }
      },
      forEach: function(t, e, i) {
        "undefined" == typeof i && (i = !1);
        var s = Array.prototype.splice.call(arguments, 3);
        if (s.unshift(null), this._container.children.length > 0 && this._container.first._iNext) {
          var n = this._container.first._iNext;
          do(i === !1 || i && n.exists) && (s[0] = n, t.apply(e, s)), n = n._iNext; while (n != this._container.last._iNext)
        }
      },
      forEachExists: function(t, e) {
        var s = Array.prototype.splice.call(arguments, 2);
        s.unshift(null), this.iterate("exists", !0, i.Group.RETURN_TOTAL, t, e, s)
      },
      forEachAlive: function(t, e) {
        var s = Array.prototype.splice.call(arguments, 2);
        s.unshift(null), this.iterate("alive", !0, i.Group.RETURN_TOTAL, t, e, s)
      },
      forEachDead: function(t, e) {
        var s = Array.prototype.splice.call(arguments, 2);
        s.unshift(null), this.iterate("alive", !1, i.Group.RETURN_TOTAL, t, e, s)
      },
      sort: function(t, e) {
        "undefined" == typeof t && (t = "y"), "undefined" == typeof e && (e = i.Group.SORT_ASCENDING);
        var s, n;
        do {
          s = !1;
          for (var r = 0, o = this._container.children.length - 1; o > r; r++) e == i.Group.SORT_ASCENDING ? this._container.children[r][t] > this._container.children[r + 1][t] && (this.swap(this.getAt(r), this.getAt(r + 1)), n = this._container.children[r], this._container.children[r] = this._container.children[r + 1], this._container.children[r + 1] = n, s = !0) : this._container.children[r][t] < this._container.children[r + 1][t] && (this.swap(this.getAt(r), this.getAt(r + 1)), n = this._container.children[r], this._container.children[r] = this._container.children[r + 1], this._container.children[r + 1] = n, s = !0)
        } while (s)
      },
      iterate: function(t, e, s, n, r, o) {
        if (s === i.Group.RETURN_TOTAL && 0 === this._container.children.length) return 0;
        "undefined" == typeof n && (n = !1);
        var a = 0;
        if (this._container.children.length > 0 && this._container.first._iNext) {
          var h = this._container.first._iNext;
          do {
            if (h[t] === e && (a++, n && (o[0] = h, n.apply(r, o)), s === i.Group.RETURN_CHILD)) return h;
            h = h._iNext
          } while (h != this._container.last._iNext)
        }
        return s === i.Group.RETURN_TOTAL ? a : s === i.Group.RETURN_CHILD ? null : void 0
      },
      getFirstExists: function(t) {
        return "boolean" != typeof t && (t = !0), this.iterate("exists", t, i.Group.RETURN_CHILD)
      },
      getFirstAlive: function() {
        return this.iterate("alive", !0, i.Group.RETURN_CHILD)
      },
      getFirstDead: function() {
        return this.iterate("alive", !1, i.Group.RETURN_CHILD)
      },
      countLiving: function() {
        return this.iterate("alive", !0, i.Group.RETURN_TOTAL)
      },
      countDead: function() {
        return this.iterate("alive", !1, i.Group.RETURN_TOTAL)
      },
      getRandom: function(t, e) {
        return 0 === this._container.children.length ? null : (t = t || 0, e = e || this._container.children.length, this.game.math.getRandom(this._container.children, t, e))
      },
      remove: function(t) {
        return t.group !== this ? !1 : (t.events && t.events.onRemovedFromGroup.dispatch(t, this), t.parent === this._container && this._container.removeChild(t), this.cursor == t && (this.cursor = this._container._iNext ? this._container._iNext : null), t.group = null, !0)
      },
      removeAll: function() {
        if (0 !== this._container.children.length) {
          do this._container.children[0].events && this._container.children[0].events.onRemovedFromGroup.dispatch(this._container.children[0], this), this._container.removeChild(this._container.children[0]); while (this._container.children.length > 0);
          this.cursor = null
        }
      },
      removeBetween: function(t, e) {
        if (0 !== this._container.children.length) {
          if (t > e || 0 > t || e > this._container.children.length) return !1;
          for (var i = t; e > i; i++) {
            var s = this._container.children[i];
            s.events.onRemovedFromGroup.dispatch(s, this), this._container.removeChild(s), this.cursor == s && (this.cursor = this._container._iNext ? this._container._iNext : null)
          }
        }
      },
      destroy: function(t) {
        if ("undefined" == typeof t && (t = !1), t) {
          if (this._container.children.length > 0)
            do this._container.children[0].group && this._container.children[0].destroy(); while (this._container.children.length > 0)
        } else this.removeAll();
        this._container.parent.removeChild(this._container), this._container = null, this.game = null, this.exists = !1, this.cursor = null
      },
      validate: function() {
        var t = this.game.stage._stage.last._iNext,
          e = this.game.stage._stage,
          i = null,
          s = null,
          n = 0;
        do {
          if (n > 0) {
            if (e !== i) return console.log("check next fail"), !1;
            if (e._iPrev !== s) return console.log("check previous fail"), !1
          }
          i = e._iNext, s = e, e = e._iNext, n++
        } while (e != t);
        return !0
      }
    }, i.Group.prototype.constructor = i.Group, Object.defineProperty(i.Group.prototype, "total", {
      get: function() {
        return this._container ? this.iterate("exists", !0, i.Group.RETURN_TOTAL) : 0
      }
    }), Object.defineProperty(i.Group.prototype, "length", {
      get: function() {
        return this._container ? this._container.children.length : 0
      }
    }), Object.defineProperty(i.Group.prototype, "x", {
      get: function() {
        return this._container.position.x
      },
      set: function(t) {
        this._container.position.x = t
      }
    }), Object.defineProperty(i.Group.prototype, "y", {
      get: function() {
        return this._container.position.y
      },
      set: function(t) {
        this._container.position.y = t
      }
    }), Object.defineProperty(i.Group.prototype, "angle", {
      get: function() {
        return i.Math.radToDeg(this._container.rotation)
      },
      set: function(t) {
        this._container.rotation = i.Math.degToRad(t)
      }
    }), Object.defineProperty(i.Group.prototype, "rotation", {
      get: function() {
        return this._container.rotation
      },
      set: function(t) {
        this._container.rotation = t
      }
    }), Object.defineProperty(i.Group.prototype, "visible", {
      get: function() {
        return this._container.visible
      },
      set: function(t) {
        this._container.visible = t
      }
    }), Object.defineProperty(i.Group.prototype, "alpha", {
      get: function() {
        return this._container.alpha
      },
      set: function(t) {
        this._container.alpha = t
      }
    }), i.World = function(t) {
      i.Group.call(this, t, null, "__world", !1), this.bounds = new i.Rectangle(0, 0, t.width, t.height), this.camera = null, this.currentRenderOrderID = 0
    }, i.World.prototype = Object.create(i.Group.prototype), i.World.prototype.constructor = i.World, i.World.prototype.boot = function() {
      this.camera = new i.Camera(this.game, 0, 0, 0, this.game.width, this.game.height), this.camera.displayObject = this._container, this.game.camera = this.camera
    }, i.World.prototype.preUpdate = function() {
      if (this.game.stage._stage.first._iNext) {
        var t = this.game.stage._stage.first._iNext;
        do t = t.preUpdate && !t.preUpdate() ? t.last._iNext : t._iNext; while (t != this.game.stage._stage.last._iNext)
      }
    }, i.World.prototype.update = function() {
      if (this.currentRenderOrderID = 0, this.game.stage._stage.first._iNext) {
        var t = this.game.stage._stage.first._iNext;
        do t = t.update && !t.update() ? t.last._iNext : t._iNext; while (t != this.game.stage._stage.last._iNext)
      }
    }, i.World.prototype.postUpdate = function() {
      if (this.camera.target && this.camera.target.postUpdate) {
        if (this.camera.target.postUpdate(), this.camera.update(), this.game.stage._stage.first._iNext) {
          var t = this.game.stage._stage.first._iNext;
          do t.postUpdate && t !== this.camera.target && t.postUpdate(), t = t._iNext; while (t != this.game.stage._stage.last._iNext)
        }
      } else if (this.camera.update(), this.game.stage._stage.first._iNext) {
        var t = this.game.stage._stage.first._iNext;
        do t.postUpdate && t.postUpdate(), t = t._iNext; while (t != this.game.stage._stage.last._iNext)
      }
    }, i.World.prototype.setBounds = function(t, e, i, s) {
      i < this.game.width && (i = this.game.width), s < this.game.height && (s = this.game.height), this.bounds.setTo(t, e, i, s), this.camera.bounds && this.camera.bounds.setTo(t, e, i, s), this.game.physics.setBoundsToWorld()
    }, i.World.prototype.destroy = function() {
      this.camera.x = 0, this.camera.y = 0, this.game.input.reset(!0), this.removeAll()
    }, Object.defineProperty(i.World.prototype, "width", {
      get: function() {
        return this.bounds.width
      },
      set: function(t) {
        this.bounds.width = t
      }
    }), Object.defineProperty(i.World.prototype, "height", {
      get: function() {
        return this.bounds.height
      },
      set: function(t) {
        this.bounds.height = t
      }
    }), Object.defineProperty(i.World.prototype, "centerX", {
      get: function() {
        return this.bounds.halfWidth
      }
    }), Object.defineProperty(i.World.prototype, "centerY", {
      get: function() {
        return this.bounds.halfHeight
      }
    }), Object.defineProperty(i.World.prototype, "randomX", {
      get: function() {
        return this.bounds.x < 0 ? this.game.rnd.integerInRange(this.bounds.x, this.bounds.width - Math.abs(this.bounds.x)) : this.game.rnd.integerInRange(this.bounds.x, this.bounds.width)
      }
    }), Object.defineProperty(i.World.prototype, "randomY", {
      get: function() {
        return this.bounds.y < 0 ? this.game.rnd.integerInRange(this.bounds.y, this.bounds.height - Math.abs(this.bounds.y)) : this.game.rnd.integerInRange(this.bounds.y, this.bounds.height)
      }
    }), Object.defineProperty(i.World.prototype, "visible", {
      get: function() {
        return this._container.visible
      },
      set: function(t) {
        this._container.visible = t
      }
    }), i.Game = function(t, e, s, n, r, o, a) {
      this.id = i.GAMES.push(this) - 1, this.config = null, this.parent = "", this.width = 800, this.height = 600, this.transparent = !1, this.antialias = !0, this.renderer = i.AUTO, this.renderType = i.AUTO, this.state = null, this._paused = !1, this._loadComplete = !1, this.isBooted = !1, this.isRunning = !1, this.raf = null, this.add = null, this.cache = null, this.input = null, this.load = null, this.math = null, this.net = null, this.sound = null, this.stage = null, this.time = null, this.tweens = null, this.world = null, this.physics = null, this.rnd = null, this.device = null, this.camera = null, this.canvas = null, this.context = null, this.debug = null, this.particles = null, this.stepping = !1, this.pendingStep = !1, this.stepCount = 0, 1 === arguments.length && "object" == typeof arguments[0] ? this.parseConfig(arguments[0]) : ("undefined" != typeof t && (this.width = t), "undefined" != typeof e && (this.height = e), "undefined" != typeof s && (this.renderer = s, this.renderType = s), "undefined" != typeof n && (this.parent = n), "undefined" != typeof o && (this.transparent = o), "undefined" != typeof a && (this.antialias = a), this.state = new i.StateManager(this, r));
      var h = this;
      return this._onBoot = function() {
        return h.boot()
      }, "complete" === document.readyState || "interactive" === document.readyState ? window.setTimeout(this._onBoot, 0) : (document.addEventListener("DOMContentLoaded", this._onBoot, !1), window.addEventListener("load", this._onBoot, !1)), this
    }, i.Game.prototype = {
      parseConfig: function(t) {
        this.config = t, t.width && (this.width = this.parseDimension(t.width, 0)), t.height && (this.height = this.parseDimension(t.height, 1)), t.renderer && (this.renderer = t.renderer, this.renderType = t.renderer), t.parent && (this.parent = t.parent), t.transparent && (this.transparent = t.transparent), t.antialias && (this.antialias = t.antialias);
        var e = null;
        t.state && (e = t.state), this.state = new i.StateManager(this, e)
      },
      parseDimension: function(t, e) {
        var i = 0,
          s = 0;
        return "string" == typeof t ? "%" === t.substr(-1) ? (i = parseInt(t, 10) / 100, s = 0 === e ? window.innerWidth * i : window.innerHeight * i) : s = parseInt(t, 10) : s = t, s
      },
      boot: function() {
        this.isBooted || (document.body ? (document.removeEventListener("DOMContentLoaded", this._onBoot), window.removeEventListener("load", this._onBoot), this.onPause = new i.Signal, this.onResume = new i.Signal, this.isBooted = !0, this.device = new i.Device, this.math = i.Math, this.rnd = new i.RandomDataGenerator([(Date.now() * Math.random()).toString()]), this.stage = new i.Stage(this, this.width, this.height), this.setUpRenderer(), this.world = new i.World(this), this.add = new i.GameObjectFactory(this), this.cache = new i.Cache(this), this.load = new i.Loader(this), this.time = new i.Time(this), this.tweens = new i.TweenManager(this), this.input = new i.Input(this), this.sound = new i.SoundManager(this), this.physics = new i.Physics.Arcade(this), this.particles = new i.Particles(this), this.plugins = new i.PluginManager(this, this), this.net = new i.Net(this), this.debug = new i.Utils.Debug(this), this.time.boot(), this.stage.boot(), this.world.boot(), this.input.boot(), this.sound.boot(), this.state.boot(), this.load.onLoadComplete.add(this.loadComplete, this), this.showDebugHeader(), this.isRunning = !0, this._loadComplete = !1, this.raf = new i.RequestAnimationFrame(this), this.raf.start()) : window.setTimeout(this._onBoot, 20))
      },
      showDebugHeader: function() {
        var t = i.DEV_VERSION,
          e = "Canvas",
          s = "HTML Audio";
        if (this.renderType == i.WEBGL ? e = "WebGL" : this.renderType == i.HEADLESS && (e = "Headless"), this.device.webAudio && (s = "WebAudio"), this.device.chrome) {
          var n = ["%c %c %c  Phaser v" + t + " - Renderer: " + e + " - Audio: " + s + "  %c %c ", "background: #00bff3", "background: #0072bc", "color: #ffffff; background: #003471", "background: #0072bc", "background: #00bff3"];
          console.log.apply(console, n)
        } else console.log("Phaser v" + t + " - Renderer: " + e + " - Audio: " + s)
      },
      setUpRenderer: function() {
        if (this.renderType === i.HEADLESS || this.renderType === i.CANVAS || this.renderType === i.AUTO && this.device.webGL === !1) {
          if (!this.device.canvas) throw new Error("Phaser.Game - cannot create Canvas or WebGL context, aborting.");
          this.renderType === i.AUTO && (this.renderType = i.CANVAS), this.renderer = new e.CanvasRenderer(this.width, this.height, this.stage.canvas, this.transparent), i.Canvas.setSmoothingEnabled(this.renderer.context, this.antialias), this.canvas = this.renderer.view, this.context = this.renderer.context
        } else this.renderType = i.WEBGL, this.renderer = new e.WebGLRenderer(this.width, this.height, this.stage.canvas, this.transparent, this.antialias), this.canvas = this.renderer.view, this.context = null;
        i.Canvas.addToDOM(this.renderer.view, this.parent, !0), i.Canvas.setTouchAction(this.renderer.view)
      },
      loadComplete: function() {
        this._loadComplete = !0, this.state.loadComplete()
      },
      update: function(t) {
        this.time.update(t), this._paused ? (this.renderer.render(this.stage._stage), this.plugins.render(), this.state.render()) : (this.pendingStep || (this.stepping && (this.pendingStep = !0), this.plugins.preUpdate(), this.world.preUpdate(), this.stage.update(), this.tweens.update(), this.sound.update(), this.input.update(), this.state.update(), this.world.update(), this.particles.update(), this.plugins.update(), this.world.postUpdate(), this.plugins.postUpdate()), this.renderType !== i.HEADLESS && (this.renderer.render(this.stage._stage), this.plugins.render(), this.state.render(), this.plugins.postRender()))
      },
      enableStep: function() {
        this.stepping = !0, this.pendingStep = !1, this.stepCount = 0
      },
      disableStep: function() {
        this.stepping = !1, this.pendingStep = !1
      },
      step: function() {
        this.pendingStep = !1, this.stepCount++
      },
      destroy: function() {
        this.raf.stop(), this.input.destroy(), this.state.destroy(), this.state = null, this.cache = null, this.input = null, this.load = null, this.sound = null, this.stage = null, this.time = null, this.world = null, this.isBooted = !1
      }
    }, i.Game.prototype.constructor = i.Game, Object.defineProperty(i.Game.prototype, "paused", {
      get: function() {
        return this._paused
      },
      set: function(t) {
        t === !0 ? this._paused === !1 && (this._paused = !0, this.onPause.dispatch(this)) : this._paused && (this._paused = !1, this.onResume.dispatch(this))
      }
    }), i.Input = function(t) {
      this.game = t, this.hitCanvas = null, this.hitContext = null, this.moveCallback = null, this.moveCallbackContext = this
    }, i.Input.MOUSE_OVERRIDES_TOUCH = 0, i.Input.TOUCH_OVERRIDES_MOUSE = 1, i.Input.MOUSE_TOUCH_COMBINE = 2, i.Input.prototype = {
      pollRate: 0,
      _pollCounter: 0,
      _oldPosition: null,
      _x: 0,
      _y: 0,
      disabled: !1,
      multiInputOverride: i.Input.MOUSE_TOUCH_COMBINE,
      position: null,
      speed: null,
      circle: null,
      scale: null,
      maxPointers: 10,
      currentPointers: 0,
      tapRate: 200,
      doubleTapRate: 300,
      holdRate: 2e3,
      justPressedRate: 200,
      justReleasedRate: 200,
      recordPointerHistory: !1,
      recordRate: 100,
      recordLimit: 100,
      pointer1: null,
      pointer2: null,
      pointer3: null,
      pointer4: null,
      pointer5: null,
      pointer6: null,
      pointer7: null,
      pointer8: null,
      pointer9: null,
      pointer10: null,
      activePointer: null,
      mousePointer: null,
      mouse: null,
      keyboard: null,
      touch: null,
      mspointer: null,
      gamepad: null,
      onDown: null,
      onUp: null,
      onTap: null,
      onHold: null,
      interactiveItems: new i.LinkedList,
      boot: function() {
        this.mousePointer = new i.Pointer(this.game, 0), this.pointer1 = new i.Pointer(this.game, 1), this.pointer2 = new i.Pointer(this.game, 2), this.mouse = new i.Mouse(this.game), this.keyboard = new i.Keyboard(this.game), this.touch = new i.Touch(this.game), this.mspointer = new i.MSPointer(this.game), this.gamepad = new i.Gamepad(this.game), this.onDown = new i.Signal, this.onUp = new i.Signal, this.onTap = new i.Signal, this.onHold = new i.Signal, this.scale = new i.Point(1, 1), this.speed = new i.Point, this.position = new i.Point, this._oldPosition = new i.Point, this.circle = new i.Circle(0, 0, 44), this.activePointer = this.mousePointer, this.currentPointers = 0, this.hitCanvas = document.createElement("canvas"), this.hitCanvas.width = 1, this.hitCanvas.height = 1, this.hitContext = this.hitCanvas.getContext("2d"), this.mouse.start(), this.keyboard.start(), this.touch.start(), this.mspointer.start(), this.mousePointer.active = !0
      },
      destroy: function() {
        this.mouse.stop(), this.keyboard.stop(), this.touch.stop(), this.mspointer.stop(), this.gamepad.stop(), this.moveCallback = null
      },
      setMoveCallback: function(t, e) {
        this.moveCallback = t, this.moveCallbackContext = e
      },
      addPointer: function() {
        for (var t = 0, e = 10; e > 0; e--) null === this["pointer" + e] && (t = e);
        return 0 === t ? (console.warn("You can only have 10 Pointer objects"), null) : (this["pointer" + t] = new i.Pointer(this.game, t), this["pointer" + t])
      },
      update: function() {
        return this.pollRate > 0 && this._pollCounter < this.pollRate ? void this._pollCounter++ : (this.speed.x = this.position.x - this._oldPosition.x, this.speed.y = this.position.y - this._oldPosition.y, this._oldPosition.copyFrom(this.position), this.mousePointer.update(), this.gamepad.active && this.gamepad.update(), this.pointer1.update(), this.pointer2.update(), this.pointer3 && this.pointer3.update(), this.pointer4 && this.pointer4.update(), this.pointer5 && this.pointer5.update(), this.pointer6 && this.pointer6.update(), this.pointer7 && this.pointer7.update(), this.pointer8 && this.pointer8.update(), this.pointer9 && this.pointer9.update(), this.pointer10 && this.pointer10.update(), void(this._pollCounter = 0))
      },
      reset: function(t) {
        if (this.game.isBooted !== !1) {
          "undefined" == typeof t && (t = !1), this.keyboard.reset(), this.mousePointer.reset(), this.gamepad.reset();
          for (var e = 1; 10 >= e; e++) this["pointer" + e] && this["pointer" + e].reset();
          this.currentPointers = 0, "none" !== this.game.canvas.style.cursor && (this.game.canvas.style.cursor = "default"), t === !0 && (this.onDown.dispose(), this.onUp.dispose(), this.onTap.dispose(), this.onHold.dispose(), this.onDown = new i.Signal, this.onUp = new i.Signal, this.onTap = new i.Signal, this.onHold = new i.Signal, this.interactiveItems.callAll("reset")), this._pollCounter = 0
        }
      },
      resetSpeed: function(t, e) {
        this._oldPosition.setTo(t, e), this.speed.setTo(0, 0)
      },
      startPointer: function(t) {
        if (this.maxPointers < 10 && this.totalActivePointers == this.maxPointers) return null;
        if (this.pointer1.active === !1) return this.pointer1.start(t);
        if (this.pointer2.active === !1) return this.pointer2.start(t);
        for (var e = 3; 10 >= e; e++)
          if (this["pointer" + e] && this["pointer" + e].active === !1) return this["pointer" + e].start(t);
        return null
      },
      updatePointer: function(t) {
        if (this.pointer1.active && this.pointer1.identifier == t.identifier) return this.pointer1.move(t);
        if (this.pointer2.active && this.pointer2.identifier == t.identifier) return this.pointer2.move(t);
        for (var e = 3; 10 >= e; e++)
          if (this["pointer" + e] && this["pointer" + e].active && this["pointer" + e].identifier == t.identifier) return this["pointer" + e].move(t);
        return null
      },
      stopPointer: function(t) {
        if (this.pointer1.active && this.pointer1.identifier == t.identifier) return this.pointer1.stop(t);
        if (this.pointer2.active && this.pointer2.identifier == t.identifier) return this.pointer2.stop(t);
        for (var e = 3; 10 >= e; e++)
          if (this["pointer" + e] && this["pointer" + e].active && this["pointer" + e].identifier == t.identifier) return this["pointer" + e].stop(t);
        return null
      },
      getPointer: function(t) {
        if (t = t || !1, this.pointer1.active == t) return this.pointer1;
        if (this.pointer2.active == t) return this.pointer2;
        for (var e = 3; 10 >= e; e++)
          if (this["pointer" + e] && this["pointer" + e].active == t) return this["pointer" + e];
        return null
      },
      getPointerFromIdentifier: function(t) {
        if (this.pointer1.identifier == t) return this.pointer1;
        if (this.pointer2.identifier == t) return this.pointer2;
        for (var e = 3; 10 >= e; e++)
          if (this["pointer" + e] && this["pointer" + e].identifier == t) return this["pointer" + e];
        return null
      }
    }, i.Input.prototype.constructor = i.Input, Object.defineProperty(i.Input.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(t) {
        this._x = Math.floor(t)
      }
    }), Object.defineProperty(i.Input.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(t) {
        this._y = Math.floor(t)
      }
    }), Object.defineProperty(i.Input.prototype, "pollLocked", {
      get: function() {
        return this.pollRate > 0 && this._pollCounter < this.pollRate
      }
    }), Object.defineProperty(i.Input.prototype, "totalInactivePointers", {
      get: function() {
        return 10 - this.currentPointers
      }
    }), Object.defineProperty(i.Input.prototype, "totalActivePointers", {
      get: function() {
        this.currentPointers = 0;
        for (var t = 1; 10 >= t; t++) this["pointer" + t] && this["pointer" + t].active && this.currentPointers++;
        return this.currentPointers
      }
    }), Object.defineProperty(i.Input.prototype, "worldX", {
      get: function() {
        return this.game.camera.view.x + this.x
      }
    }), Object.defineProperty(i.Input.prototype, "worldY", {
      get: function() {
        return this.game.camera.view.y + this.y
      }
    }), i.Key = function(t, e) {
      this.game = t, this.isDown = !1, this.isUp = !1, this.altKey = !1, this.ctrlKey = !1, this.shiftKey = !1, this.timeDown = 0, this.duration = 0, this.timeUp = 0, this.repeats = 0, this.keyCode = e, this.onDown = new i.Signal, this.onUp = new i.Signal
    }, i.Key.prototype = {
      processKeyDown: function(t) {
        this.altKey = t.altKey, this.ctrlKey = t.ctrlKey, this.shiftKey = t.shiftKey, this.isDown ? (this.duration = t.timeStamp - this.timeDown, this.repeats++) : (this.isDown = !0, this.isUp = !1, this.timeDown = t.timeStamp, this.duration = 0, this.repeats = 0, this.onDown.dispatch(this))
      },
      processKeyUp: function(t) {
        this.isDown = !1, this.isUp = !0, this.timeUp = t.timeStamp, this.onUp.dispatch(this)
      },
      justPressed: function(t) {
        return "undefined" == typeof t && (t = 250), this.isDown && this.duration < t
      },
      justReleased: function(t) {
        return "undefined" == typeof t && (t = 250), this.isDown === !1 && this.game.time.now - this.timeUp < t
      }
    }, i.Key.prototype.constructor = i.Key, i.Keyboard = function(t) {
      this.game = t, this._keys = {}, this._hotkeys = {}, this._capture = {}, this.disabled = !1, this._onKeyDown = null, this._onKeyUp = null, this.callbackContext = this, this.onDownCallback = null, this.onUpCallback = null
    }, i.Keyboard.prototype = {
      addCallbacks: function(t, e, i) {
        this.callbackContext = t, this.onDownCallback = e, "undefined" != typeof i && (this.onUpCallback = i)
      },
      addKey: function(t) {
        return this._hotkeys[t] = new i.Key(this.game, t), this.addKeyCapture(t), this._hotkeys[t]
      },
      removeKey: function(t) {
        delete this._hotkeys[t]
      },
      createCursorKeys: function() {
        return {
          up: this.addKey(i.Keyboard.UP),
          down: this.addKey(i.Keyboard.DOWN),
          left: this.addKey(i.Keyboard.LEFT),
          right: this.addKey(i.Keyboard.RIGHT)
        }
      },
      start: function() {
        var t = this;
        this._onKeyDown = function(e) {
          return t.processKeyDown(e)
        }, this._onKeyUp = function(e) {
          return t.processKeyUp(e)
        }, window.addEventListener("keydown", this._onKeyDown, !1), window.addEventListener("keyup", this._onKeyUp, !1)
      },
      stop: function() {
        window.removeEventListener("keydown", this._onKeyDown), window.removeEventListener("keyup", this._onKeyUp)
      },
      addKeyCapture: function(t) {
        if ("object" == typeof t)
          for (var e in t) this._capture[t[e]] = !0;
        else this._capture[t] = !0
      },
      removeKeyCapture: function(t) {
        delete this._capture[t]
      },
      clearCaptures: function() {
        this._capture = {}
      },
      processKeyDown: function(t) {
        this.game.input.disabled || this.disabled || (this._capture[t.keyCode] && t.preventDefault(), this.onDownCallback && this.onDownCallback.call(this.callbackContext, t), this._keys[t.keyCode] && this._keys[t.keyCode].isDown ? this._keys[t.keyCode].duration = this.game.time.now - this._keys[t.keyCode].timeDown : this._keys[t.keyCode] ? (this._keys[t.keyCode].isDown = !0, this._keys[t.keyCode].timeDown = this.game.time.now, this._keys[t.keyCode].duration = 0) : this._keys[t.keyCode] = {
          isDown: !0,
          timeDown: this.game.time.now,
          timeUp: 0,
          duration: 0
        }, this._hotkeys[t.keyCode] && this._hotkeys[t.keyCode].processKeyDown(t))
      },
      processKeyUp: function(t) {
        this.game.input.disabled || this.disabled || (this._capture[t.keyCode] && t.preventDefault(), this.onUpCallback && this.onUpCallback.call(this.callbackContext, t), this._hotkeys[t.keyCode] && this._hotkeys[t.keyCode].processKeyUp(t), this._keys[t.keyCode] ? (this._keys[t.keyCode].isDown = !1, this._keys[t.keyCode].timeUp = this.game.time.now) : this._keys[t.keyCode] = {
          isDown: !1,
          timeDown: this.game.time.now,
          timeUp: this.game.time.now,
          duration: 0
        })
      },
      reset: function() {
        for (var t in this._keys) this._keys[t].isDown = !1
      },
      justPressed: function(t, e) {
        return "undefined" == typeof e && (e = 250), this._keys[t] && this._keys[t].isDown && this._keys[t].duration < e ? !0 : !1
      },
      justReleased: function(t, e) {
        return "undefined" == typeof e && (e = 250), this._keys[t] && this._keys[t].isDown === !1 && this.game.time.now - this._keys[t].timeUp < e ? !0 : !1
      },
      isDown: function(t) {
        return this._keys[t] ? this._keys[t].isDown : !1
      }
    }, i.Keyboard.prototype.constructor = i.Keyboard, i.Keyboard.A = "A".charCodeAt(0), i.Keyboard.B = "B".charCodeAt(0), i.Keyboard.C = "C".charCodeAt(0), i.Keyboard.D = "D".charCodeAt(0), i.Keyboard.E = "E".charCodeAt(0), i.Keyboard.F = "F".charCodeAt(0), i.Keyboard.G = "G".charCodeAt(0), i.Keyboard.H = "H".charCodeAt(0), i.Keyboard.I = "I".charCodeAt(0), i.Keyboard.J = "J".charCodeAt(0), i.Keyboard.K = "K".charCodeAt(0), i.Keyboard.L = "L".charCodeAt(0), i.Keyboard.M = "M".charCodeAt(0), i.Keyboard.N = "N".charCodeAt(0), i.Keyboard.O = "O".charCodeAt(0), i.Keyboard.P = "P".charCodeAt(0), i.Keyboard.Q = "Q".charCodeAt(0), i.Keyboard.R = "R".charCodeAt(0), i.Keyboard.S = "S".charCodeAt(0), i.Keyboard.T = "T".charCodeAt(0), i.Keyboard.U = "U".charCodeAt(0), i.Keyboard.V = "V".charCodeAt(0), i.Keyboard.W = "W".charCodeAt(0), i.Keyboard.X = "X".charCodeAt(0), i.Keyboard.Y = "Y".charCodeAt(0), i.Keyboard.Z = "Z".charCodeAt(0), i.Keyboard.ZERO = "0".charCodeAt(0), i.Keyboard.ONE = "1".charCodeAt(0), i.Keyboard.TWO = "2".charCodeAt(0), i.Keyboard.THREE = "3".charCodeAt(0), i.Keyboard.FOUR = "4".charCodeAt(0), i.Keyboard.FIVE = "5".charCodeAt(0), i.Keyboard.SIX = "6".charCodeAt(0), i.Keyboard.SEVEN = "7".charCodeAt(0), i.Keyboard.EIGHT = "8".charCodeAt(0), i.Keyboard.NINE = "9".charCodeAt(0), i.Keyboard.NUMPAD_0 = 96, i.Keyboard.NUMPAD_1 = 97, i.Keyboard.NUMPAD_2 = 98, i.Keyboard.NUMPAD_3 = 99, i.Keyboard.NUMPAD_4 = 100, i.Keyboard.NUMPAD_5 = 101, i.Keyboard.NUMPAD_6 = 102, i.Keyboard.NUMPAD_7 = 103, i.Keyboard.NUMPAD_8 = 104, i.Keyboard.NUMPAD_9 = 105, i.Keyboard.NUMPAD_MULTIPLY = 106, i.Keyboard.NUMPAD_ADD = 107, i.Keyboard.NUMPAD_ENTER = 108, i.Keyboard.NUMPAD_SUBTRACT = 109, i.Keyboard.NUMPAD_DECIMAL = 110, i.Keyboard.NUMPAD_DIVIDE = 111, i.Keyboard.F1 = 112, i.Keyboard.F2 = 113, i.Keyboard.F3 = 114, i.Keyboard.F4 = 115, i.Keyboard.F5 = 116, i.Keyboard.F6 = 117, i.Keyboard.F7 = 118, i.Keyboard.F8 = 119, i.Keyboard.F9 = 120, i.Keyboard.F10 = 121, i.Keyboard.F11 = 122, i.Keyboard.F12 = 123, i.Keyboard.F13 = 124, i.Keyboard.F14 = 125, i.Keyboard.F15 = 126, i.Keyboard.COLON = 186, i.Keyboard.EQUALS = 187, i.Keyboard.UNDERSCORE = 189, i.Keyboard.QUESTION_MARK = 191, i.Keyboard.TILDE = 192, i.Keyboard.OPEN_BRACKET = 219, i.Keyboard.BACKWARD_SLASH = 220, i.Keyboard.CLOSED_BRACKET = 221, i.Keyboard.QUOTES = 222, i.Keyboard.BACKSPACE = 8, i.Keyboard.TAB = 9, i.Keyboard.CLEAR = 12, i.Keyboard.ENTER = 13, i.Keyboard.SHIFT = 16, i.Keyboard.CONTROL = 17, i.Keyboard.ALT = 18, i.Keyboard.CAPS_LOCK = 20, i.Keyboard.ESC = 27, i.Keyboard.SPACEBAR = 32, i.Keyboard.PAGE_UP = 33, i.Keyboard.PAGE_DOWN = 34, i.Keyboard.END = 35, i.Keyboard.HOME = 36, i.Keyboard.LEFT = 37, i.Keyboard.UP = 38, i.Keyboard.RIGHT = 39, i.Keyboard.DOWN = 40, i.Keyboard.INSERT = 45, i.Keyboard.DELETE = 46, i.Keyboard.HELP = 47, i.Keyboard.NUM_LOCK = 144, i.Mouse = function(t) {
      this.game = t, this.callbackContext = this.game, this.mouseDownCallback = null, this.mouseMoveCallback = null, this.mouseUpCallback = null, this.capture = !1, this.button = -1, this.disabled = !1, this.locked = !1, this.pointerLock = new i.Signal, this.event = null, this._onMouseDown = null, this._onMouseMove = null, this._onMouseUp = null
    }, i.Mouse.NO_BUTTON = -1, i.Mouse.LEFT_BUTTON = 0, i.Mouse.MIDDLE_BUTTON = 1, i.Mouse.RIGHT_BUTTON = 2, i.Mouse.prototype = {
      start: function() {
        var t = this;
        this.game.device.android && this.game.device.chrome === !1 || (this._onMouseDown = function(e) {
          return t.onMouseDown(e)
        }, this._onMouseMove = function(e) {
          return t.onMouseMove(e)
        }, this._onMouseUp = function(e) {
          return t.onMouseUp(e)
        }, document.addEventListener("mousedown", this._onMouseDown, !0), document.addEventListener("mousemove", this._onMouseMove, !0), document.addEventListener("mouseup", this._onMouseUp, !0))
      },
      onMouseDown: function(t) {
        this.event = t, this.capture && t.preventDefault(), this.button = t.which, this.mouseDownCallback && this.mouseDownCallback.call(this.callbackContext, t), this.game.input.disabled || this.disabled || (t.identifier = 0, this.game.input.mousePointer.start(t))
      },
      onMouseMove: function(t) {
        this.event = t, this.capture && t.preventDefault(), this.mouseMoveCallback && this.mouseMoveCallback.call(this.callbackContext, t), this.game.input.disabled || this.disabled || (t.identifier = 0, this.game.input.mousePointer.move(t))
      },
      onMouseUp: function(t) {
        this.event = t, this.capture && t.preventDefault(), this.button = i.Mouse.NO_BUTTON, this.mouseUpCallback && this.mouseUpCallback.call(this.callbackContext, t), this.game.input.disabled || this.disabled || (t.identifier = 0, this.game.input.mousePointer.stop(t))
      },
      requestPointerLock: function() {
        if (this.game.device.pointerLock) {
          var t = this.game.stage.canvas;
          t.requestPointerLock = t.requestPointerLock || t.mozRequestPointerLock || t.webkitRequestPointerLock, t.requestPointerLock();
          var e = this;
          this._pointerLockChange = function(t) {
            return e.pointerLockChange(t)
          }, document.addEventListener("pointerlockchange", this._pointerLockChange, !0), document.addEventListener("mozpointerlockchange", this._pointerLockChange, !0), document.addEventListener("webkitpointerlockchange", this._pointerLockChange, !0)
        }
      },
      pointerLockChange: function(t) {
        var e = this.game.stage.canvas;
        document.pointerLockElement === e || document.mozPointerLockElement === e || document.webkitPointerLockElement === e ? (this.locked = !0, this.pointerLock.dispatch(!0, t)) : (this.locked = !1, this.pointerLock.dispatch(!1, t))
      },
      releasePointerLock: function() {
        document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock, document.exitPointerLock(), document.removeEventListener("pointerlockchange", this._pointerLockChange, !0), document.removeEventListener("mozpointerlockchange", this._pointerLockChange, !0), document.removeEventListener("webkitpointerlockchange", this._pointerLockChange, !0)
      },
      stop: function() {
        document.removeEventListener("mousedown", this._onMouseDown, !0), document.removeEventListener("mousemove", this._onMouseMove, !0), document.removeEventListener("mouseup", this._onMouseUp, !0)
      }
    }, i.Mouse.prototype.constructor = i.Mouse, i.MSPointer = function(t) {
      this.game = t, this.callbackContext = this.game, this.disabled = !1, this._onMSPointerDown = null, this._onMSPointerMove = null, this._onMSPointerUp = null
    }, i.MSPointer.prototype = {
      start: function() {
        var t = this;
        this.game.device.mspointer === !0 && (this._onMSPointerDown = function(e) {
          return t.onPointerDown(e)
        }, this._onMSPointerMove = function(e) {
          return t.onPointerMove(e)
        }, this._onMSPointerUp = function(e) {
          return t.onPointerUp(e)
        }, this.game.renderer.view.addEventListener("MSPointerDown", this._onMSPointerDown, !1), this.game.renderer.view.addEventListener("MSPointerMove", this._onMSPointerMove, !1), this.game.renderer.view.addEventListener("MSPointerUp", this._onMSPointerUp, !1), this.game.renderer.view.addEventListener("pointerDown", this._onMSPointerDown, !1), this.game.renderer.view.addEventListener("pointerMove", this._onMSPointerMove, !1), this.game.renderer.view.addEventListener("pointerUp", this._onMSPointerUp, !1), this.game.renderer.view.style["-ms-content-zooming"] = "none", this.game.renderer.view.style["-ms-touch-action"] = "none")
      },
      onPointerDown: function(t) {
        this.game.input.disabled || this.disabled || (t.preventDefault(), t.identifier = t.pointerId, this.game.input.startPointer(t))
      },
      onPointerMove: function(t) {
        this.game.input.disabled || this.disabled || (t.preventDefault(), t.identifier = t.pointerId, this.game.input.updatePointer(t))
      },
      onPointerUp: function(t) {
        this.game.input.disabled || this.disabled || (t.preventDefault(), t.identifier = t.pointerId, this.game.input.stopPointer(t))
      },
      stop: function() {
        this.game.stage.canvas.removeEventListener("MSPointerDown", this._onMSPointerDown), this.game.stage.canvas.removeEventListener("MSPointerMove", this._onMSPointerMove), this.game.stage.canvas.removeEventListener("MSPointerUp", this._onMSPointerUp), this.game.stage.canvas.removeEventListener("pointerDown", this._onMSPointerDown), this.game.stage.canvas.removeEventListener("pointerMove", this._onMSPointerMove), this.game.stage.canvas.removeEventListener("pointerUp", this._onMSPointerUp)
      }
    }, i.MSPointer.prototype.constructor = i.MSPointer, i.Pointer = function(t, e) {
      this.game = t, this.id = e, this._holdSent = !1, this._history = [], this._nextDrop = 0, this._stateReset = !1, this.withinGame = !1, this.clientX = -1, this.clientY = -1, this.pageX = -1, this.pageY = -1, this.screenX = -1, this.screenY = -1, this.x = -1, this.y = -1, this.isMouse = !1, this.isDown = !1, this.isUp = !0, this.timeDown = 0, this.timeUp = 0, this.previousTapTime = 0, this.totalTouches = 0, this.msSinceLastClick = Number.MAX_VALUE, this.targetObject = null, this.active = !1, this.position = new i.Point, this.positionDown = new i.Point, this.circle = new i.Circle(0, 0, 44), 0 === e && (this.isMouse = !0)
    }, i.Pointer.prototype = {
      start: function(t) {
        return this.identifier = t.identifier, this.target = t.target, "undefined" != typeof t.button && (this.button = t.button), this.game.stage.disableVisibilityChange === !1 && this.game.paused && this.game.stage.scale.incorrectOrientation === !1 ? (this.game.paused = !1, this) : (this._history.length = 0, this.active = !0, this.withinGame = !0, this.isDown = !0, this.isUp = !1, this.msSinceLastClick = this.game.time.now - this.timeDown, this.timeDown = this.game.time.now, this._holdSent = !1, this.move(t), this.positionDown.setTo(this.x, this.y), (this.game.input.multiInputOverride == i.Input.MOUSE_OVERRIDES_TOUCH || this.game.input.multiInputOverride == i.Input.MOUSE_TOUCH_COMBINE || this.game.input.multiInputOverride == i.Input.TOUCH_OVERRIDES_MOUSE && 0 === this.game.input.currentPointers) && (this.game.input.x = this.x, this.game.input.y = this.y, this.game.input.position.setTo(this.x, this.y), this.game.input.onDown.dispatch(this, t), this.game.input.resetSpeed(this.x, this.y)), this._stateReset = !1, this.totalTouches++, this.isMouse === !1 && this.game.input.currentPointers++, null !== this.targetObject && this.targetObject._touchedHandler(this), this)
      },
      update: function() {
        this.active && (this._holdSent === !1 && this.duration >= this.game.input.holdRate && ((this.game.input.multiInputOverride == i.Input.MOUSE_OVERRIDES_TOUCH || this.game.input.multiInputOverride == i.Input.MOUSE_TOUCH_COMBINE || this.game.input.multiInputOverride == i.Input.TOUCH_OVERRIDES_MOUSE && 0 === this.game.input.currentPointers) && this.game.input.onHold.dispatch(this), this._holdSent = !0), this.game.input.recordPointerHistory && this.game.time.now >= this._nextDrop && (this._nextDrop = this.game.time.now + this.game.input.recordRate, this._history.push({
          x: this.position.x,
          y: this.position.y
        }), this._history.length > this.game.input.recordLimit && this._history.shift()))
      },
      move: function(t) {
        if (!this.game.input.pollLocked) {
          if ("undefined" != typeof t.button && (this.button = t.button), this.clientX = t.clientX, this.clientY = t.clientY, this.pageX = t.pageX, this.pageY = t.pageY, this.screenX = t.screenX, this.screenY = t.screenY, this.x = (this.pageX - this.game.stage.offset.x) * this.game.input.scale.x, this.y = (this.pageY - this.game.stage.offset.y) * this.game.input.scale.y, this.position.setTo(this.x, this.y), this.circle.x = this.x, this.circle.y = this.y, (this.game.input.multiInputOverride == i.Input.MOUSE_OVERRIDES_TOUCH || this.game.input.multiInputOverride == i.Input.MOUSE_TOUCH_COMBINE || this.game.input.multiInputOverride == i.Input.TOUCH_OVERRIDES_MOUSE && 0 === this.game.input.currentPointers) && (this.game.input.activePointer = this, this.game.input.x = this.x, this.game.input.y = this.y, this.game.input.position.setTo(this.game.input.x, this.game.input.y), this.game.input.circle.x = this.game.input.x, this.game.input.circle.y = this.game.input.y), this.game.paused) return this;
          if (this.game.input.moveCallback && this.game.input.moveCallback.call(this.game.input.moveCallbackContext, this, this.x, this.y), null !== this.targetObject && this.targetObject.isDragged === !0) return this.targetObject.update(this) === !1 && (this.targetObject = null), this;
          if (this._highestRenderOrderID = -1, this._highestRenderObject = null, this._highestInputPriorityID = -1, this.game.input.interactiveItems.total > 0) {
            var e = this.game.input.interactiveItems.next;
            do(e.pixelPerfect || e.priorityID > this._highestInputPriorityID || e.priorityID == this._highestInputPriorityID && e.sprite.renderOrderID > this._highestRenderOrderID) && e.checkPointerOver(this) && (this._highestRenderOrderID = e.sprite.renderOrderID, this._highestInputPriorityID = e.priorityID, this._highestRenderObject = e), e = e.next; while (null != e)
          }
          return null == this._highestRenderObject ? this.targetObject && (this.targetObject._pointerOutHandler(this), this.targetObject = null) : null == this.targetObject ? (this.targetObject = this._highestRenderObject, this._highestRenderObject._pointerOverHandler(this)) : this.targetObject == this._highestRenderObject ? this._highestRenderObject.update(this) === !1 && (this.targetObject = null) : (this.targetObject._pointerOutHandler(this), this.targetObject = this._highestRenderObject, this.targetObject._pointerOverHandler(this)), this
        }
      },
      leave: function(t) {
        this.withinGame = !1, this.move(t)
      },
      stop: function(t) {
        if (this._stateReset) return void t.preventDefault();
        if (this.timeUp = this.game.time.now, (this.game.input.multiInputOverride == i.Input.MOUSE_OVERRIDES_TOUCH || this.game.input.multiInputOverride == i.Input.MOUSE_TOUCH_COMBINE || this.game.input.multiInputOverride == i.Input.TOUCH_OVERRIDES_MOUSE && 0 === this.game.input.currentPointers) && (this.game.input.onUp.dispatch(this, t), this.duration >= 0 && this.duration <= this.game.input.tapRate && (this.timeUp - this.previousTapTime < this.game.input.doubleTapRate ? this.game.input.onTap.dispatch(this, !0) : this.game.input.onTap.dispatch(this, !1), this.previousTapTime = this.timeUp)), this.id > 0 && (this.active = !1), this.withinGame = !1, this.isDown = !1, this.isUp = !0, this.isMouse === !1 && this.game.input.currentPointers--, this.game.input.interactiveItems.total > 0) {
          var e = this.game.input.interactiveItems.next;
          do e && e._releasedHandler(this), e = e.next; while (null != e)
        }
        return this.targetObject && this.targetObject._releasedHandler(this), this.targetObject = null, this
      },
      justPressed: function(t) {
        return t = t || this.game.input.justPressedRate, this.isDown === !0 && this.timeDown + t > this.game.time.now
      },
      justReleased: function(t) {
        return t = t || this.game.input.justReleasedRate, this.isUp === !0 && this.timeUp + t > this.game.time.now
      },
      reset: function() {
        this.isMouse === !1 && (this.active = !1), this.identifier = null, this.isDown = !1, this.isUp = !0, this.totalTouches = 0, this._holdSent = !1, this._history.length = 0, this._stateReset = !0, this.targetObject && this.targetObject._releasedHandler(this), this.targetObject = null
      }
    }, i.Pointer.prototype.constructor = i.Pointer, Object.defineProperty(i.Pointer.prototype, "duration", {
      get: function() {
        return this.isUp ? -1 : this.game.time.now - this.timeDown
      }
    }), Object.defineProperty(i.Pointer.prototype, "worldX", {
      get: function() {
        return this.game.world.camera.x + this.x
      }
    }), Object.defineProperty(i.Pointer.prototype, "worldY", {
      get: function() {
        return this.game.world.camera.y + this.y
      }
    }), i.Touch = function(t) {
      this.game = t, this.disabled = !1, this.callbackContext = this.game, this.touchStartCallback = null, this.touchMoveCallback = null, this.touchEndCallback = null, this.touchEnterCallback = null, this.touchLeaveCallback = null, this.touchCancelCallback = null, this.preventDefault = !0, this.event = null, this._onTouchStart = null, this._onTouchMove = null, this._onTouchEnd = null, this._onTouchEnter = null, this._onTouchLeave = null, this._onTouchCancel = null, this._onTouchMove = null
    }, i.Touch.prototype = {
      start: function() {
        var t = this;
        this.game.device.touch && (this._onTouchStart = function(e) {
          return t.onTouchStart(e)
        }, this._onTouchMove = function(e) {
          return t.onTouchMove(e)
        }, this._onTouchEnd = function(e) {
          return t.onTouchEnd(e)
        }, this._onTouchEnter = function(e) {
          return t.onTouchEnter(e)
        }, this._onTouchLeave = function(e) {
          return t.onTouchLeave(e)
        }, this._onTouchCancel = function(e) {
          return t.onTouchCancel(e)
        }, this.game.renderer.view.addEventListener("touchstart", this._onTouchStart, !1), this.game.renderer.view.addEventListener("touchmove", this._onTouchMove, !1), this.game.renderer.view.addEventListener("touchend", this._onTouchEnd, !1), this.game.renderer.view.addEventListener("touchenter", this._onTouchEnter, !1), this.game.renderer.view.addEventListener("touchleave", this._onTouchLeave, !1), this.game.renderer.view.addEventListener("touchcancel", this._onTouchCancel, !1))
      },
      consumeDocumentTouches: function() {
        this._documentTouchMove = function(t) {
          t.preventDefault()
        }, document.addEventListener("touchmove", this._documentTouchMove, !1)
      },
      onTouchStart: function(t) {
        if (this.event = t, this.touchStartCallback && this.touchStartCallback.call(this.callbackContext, t), !this.game.input.disabled && !this.disabled) {
          this.preventDefault && t.preventDefault();
          for (var e = 0; e < t.changedTouches.length; e++) this.game.input.startPointer(t.changedTouches[e])
        }
      },
      onTouchCancel: function(t) {
        if (this.event = t, this.touchCancelCallback && this.touchCancelCallback.call(this.callbackContext, t), !this.game.input.disabled && !this.disabled) {
          this.preventDefault && t.preventDefault();
          for (var e = 0; e < t.changedTouches.length; e++) this.game.input.stopPointer(t.changedTouches[e])
        }
      },
      onTouchEnter: function(t) {
        this.event = t, this.touchEnterCallback && this.touchEnterCallback.call(this.callbackContext, t), this.game.input.disabled || this.disabled || this.preventDefault && t.preventDefault()
      },
      onTouchLeave: function(t) {
        this.event = t, this.touchLeaveCallback && this.touchLeaveCallback.call(this.callbackContext, t), this.preventDefault && t.preventDefault()
      },
      onTouchMove: function(t) {
        this.event = t, this.touchMoveCallback && this.touchMoveCallback.call(this.callbackContext, t), this.preventDefault && t.preventDefault();
        for (var e = 0; e < t.changedTouches.length; e++) this.game.input.updatePointer(t.changedTouches[e])
      },
      onTouchEnd: function(t) {
        this.event = t, this.touchEndCallback && this.touchEndCallback.call(this.callbackContext, t), this.preventDefault && t.preventDefault();
        for (var e = 0; e < t.changedTouches.length; e++) this.game.input.stopPointer(t.changedTouches[e])
      },
      stop: function() {
        this.game.device.touch && (this.game.stage.canvas.removeEventListener("touchstart", this._onTouchStart), this.game.stage.canvas.removeEventListener("touchmove", this._onTouchMove), this.game.stage.canvas.removeEventListener("touchend", this._onTouchEnd), this.game.stage.canvas.removeEventListener("touchenter", this._onTouchEnter), this.game.stage.canvas.removeEventListener("touchleave", this._onTouchLeave), this.game.stage.canvas.removeEventListener("touchcancel", this._onTouchCancel))
      }
    }, i.Touch.prototype.constructor = i.Touch, i.InputHandler = function(t) {
      this.sprite = t, this.game = t.game, this.enabled = !1, this.priorityID = 0, this.useHandCursor = !1, this.isDragged = !1, this.allowHorizontalDrag = !0, this.allowVerticalDrag = !0, this.bringToTop = !1, this.snapOffset = null, this.snapOnDrag = !1, this.snapOnRelease = !1, this.snapX = 0, this.snapY = 0, this.snapOffsetX = 0, this.snapOffsetY = 0, this.pixelPerfect = !1, this.pixelPerfectAlpha = 255, this.draggable = !1, this.boundsRect = null, this.boundsSprite = null, this.consumePointerEvent = !1, this._tempPoint = new i.Point, this._pointerData = [], this._pointerData.push({
        id: 0,
        x: 0,
        y: 0,
        isDown: !1,
        isUp: !1,
        isOver: !1,
        isOut: !1,
        timeOver: 0,
        timeOut: 0,
        timeDown: 0,
        timeUp: 0,
        downDuration: 0,
        isDragged: !1
      })
    }, i.InputHandler.prototype = {
      start: function(t, e) {
        if (t = t || 0, "undefined" == typeof e && (e = !1), this.enabled === !1) {
          this.game.input.interactiveItems.add(this), this.useHandCursor = e, this.priorityID = t;
          for (var s = 0; 10 > s; s++) this._pointerData[s] = {
            id: s,
            x: 0,
            y: 0,
            isDown: !1,
            isUp: !1,
            isOver: !1,
            isOut: !1,
            timeOver: 0,
            timeOut: 0,
            timeDown: 0,
            timeUp: 0,
            downDuration: 0,
            isDragged: !1
          };
          this.snapOffset = new i.Point, this.enabled = !0, this.sprite.events && null == this.sprite.events.onInputOver && (this.sprite.events.onInputOver = new i.Signal, this.sprite.events.onInputOut = new i.Signal, this.sprite.events.onInputDown = new i.Signal, this.sprite.events.onInputUp = new i.Signal, this.sprite.events.onDragStart = new i.Signal, this.sprite.events.onDragStop = new i.Signal)
        }
        return this.sprite
      },
      reset: function() {
        this.enabled = !1;
        for (var t = 0; 10 > t; t++) this._pointerData[t] = {
          id: t,
          x: 0,
          y: 0,
          isDown: !1,
          isUp: !1,
          isOver: !1,
          isOut: !1,
          timeOver: 0,
          timeOut: 0,
          timeDown: 0,
          timeUp: 0,
          downDuration: 0,
          isDragged: !1
        }
      },
      stop: function() {
        this.enabled !== !1 && (this.enabled = !1, this.game.input.interactiveItems.remove(this))
      },
      destroy: function() {
        this.enabled && (this.enabled = !1, this.game.input.interactiveItems.remove(this), this.stop(), this.sprite = null)
      },
      pointerX: function(t) {
        return t = t || 0, this._pointerData[t].x
      },
      pointerY: function(t) {
        return t = t || 0, this._pointerData[t].y
      },
      pointerDown: function(t) {
        return t = t || 0, this._pointerData[t].isDown
      },
      pointerUp: function(t) {
        return t = t || 0, this._pointerData[t].isUp
      },
      pointerTimeDown: function(t) {
        return t = t || 0, this._pointerData[t].timeDown
      },
      pointerTimeUp: function(t) {
        return t = t || 0, this._pointerData[t].timeUp
      },
      pointerOver: function(t) {
        if (this.enabled) {
          if ("undefined" != typeof t) return this._pointerData[t].isOver;
          for (var e = 0; 10 > e; e++)
            if (this._pointerData[e].isOver) return !0
        }
        return !1
      },
      pointerOut: function(t) {
        if (this.enabled) {
          if ("undefined" != typeof t) return this._pointerData[t].isOut;
          for (var e = 0; 10 > e; e++)
            if (this._pointerData[e].isOut) return !0
        }
        return !1
      },
      pointerTimeOver: function(t) {
        return t = t || 0, this._pointerData[t].timeOver
      },
      pointerTimeOut: function(t) {
        return t = t || 0, this._pointerData[t].timeOut
      },
      pointerDragged: function(t) {
        return t = t || 0, this._pointerData[t].isDragged
      },
      checkPointerOver: function(t) {
        return this.enabled === !1 || this.sprite.visible === !1 || this.sprite.group && this.sprite.group.visible === !1 ? !1 : (this.sprite.getLocalUnmodifiedPosition(this._tempPoint, t.x, t.y), this._tempPoint.x >= 0 && this._tempPoint.x <= this.sprite.currentFrame.width && this._tempPoint.y >= 0 && this._tempPoint.y <= this.sprite.currentFrame.height ? this.pixelPerfect ? this.checkPixel(this._tempPoint.x, this._tempPoint.y) : !0 : void 0)
      },
      checkPixel: function(t, e) {
        if (this.sprite.texture.baseTexture.source) {
          this.game.input.hitContext.clearRect(0, 0, 1, 1), t += this.sprite.texture.frame.x, e += this.sprite.texture.frame.y, this.game.input.hitContext.drawImage(this.sprite.texture.baseTexture.source, t, e, 1, 1, 0, 0, 1, 1);
          var i = this.game.input.hitContext.getImageData(0, 0, 1, 1);
          if (i.data[3] >= this.pixelPerfectAlpha) return !0
        }
        return !1
      },
      update: function(t) {
        return this.enabled === !1 || this.sprite.visible === !1 || this.sprite.group && this.sprite.group.visible === !1 ? (this._pointerOutHandler(t), !1) : this.draggable && this._draggedPointerID == t.id ? this.updateDrag(t) : this._pointerData[t.id].isOver === !0 ? this.checkPointerOver(t) ? (this._pointerData[t.id].x = t.x - this.sprite.x, this._pointerData[t.id].y = t.y - this.sprite.y, !0) : (this._pointerOutHandler(t), !1) : void 0
      },
      _pointerOverHandler: function(t) {
        this._pointerData[t.id].isOver === !1 && (this._pointerData[t.id].isOver = !0, this._pointerData[t.id].isOut = !1, this._pointerData[t.id].timeOver = this.game.time.now, this._pointerData[t.id].x = t.x - this.sprite.x, this._pointerData[t.id].y = t.y - this.sprite.y, this.useHandCursor && this._pointerData[t.id].isDragged === !1 && (this.game.canvas.style.cursor = "pointer"), this.sprite.events.onInputOver.dispatch(this.sprite, t))
      },
      _pointerOutHandler: function(t) {
        this._pointerData[t.id].isOver = !1, this._pointerData[t.id].isOut = !0, this._pointerData[t.id].timeOut = this.game.time.now, this.useHandCursor && this._pointerData[t.id].isDragged === !1 && (this.game.canvas.style.cursor = "default"), this.sprite && this.sprite.events && this.sprite.events.onInputOut.dispatch(this.sprite, t)
      },
      _touchedHandler: function(t) {
        return this._pointerData[t.id].isDown === !1 && this._pointerData[t.id].isOver === !0 && (this._pointerData[t.id].isDown = !0, this._pointerData[t.id].isUp = !1, this._pointerData[t.id].timeDown = this.game.time.now, this.sprite.events.onInputDown.dispatch(this.sprite, t), this.draggable && this.isDragged === !1 && this.startDrag(t), this.bringToTop && this.sprite.bringToTop()), this.consumePointerEvent
      },
      _releasedHandler: function(t) {
        this._pointerData[t.id].isDown && t.isUp && (this._pointerData[t.id].isDown = !1, this._pointerData[t.id].isUp = !0, this._pointerData[t.id].timeUp = this.game.time.now, this._pointerData[t.id].downDuration = this._pointerData[t.id].timeUp - this._pointerData[t.id].timeDown, this.checkPointerOver(t) ? this.sprite.events.onInputUp.dispatch(this.sprite, t, !0) : (this.sprite.events.onInputUp.dispatch(this.sprite, t, !1), this.useHandCursor && (this.game.canvas.style.cursor = "default")), this.draggable && this.isDragged && this._draggedPointerID == t.id && this.stopDrag(t))
      },
      updateDrag: function(t) {
        return t.isUp ? (this.stopDrag(t), !1) : (this.sprite.fixedToCamera ? (this.allowHorizontalDrag && (this.sprite.cameraOffset.x = t.x + this._dragPoint.x + this.dragOffset.x), this.allowVerticalDrag && (this.sprite.cameraOffset.y = t.y + this._dragPoint.y + this.dragOffset.y), this.boundsRect && this.checkBoundsRect(), this.boundsSprite && this.checkBoundsSprite(), this.snapOnDrag && (this.sprite.cameraOffset.x = Math.round((this.sprite.cameraOffset.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX, this.sprite.cameraOffset.y = Math.round((this.sprite.cameraOffset.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY)) : (this.allowHorizontalDrag && (this.sprite.x = t.x + this._dragPoint.x + this.dragOffset.x), this.allowVerticalDrag && (this.sprite.y = t.y + this._dragPoint.y + this.dragOffset.y), this.boundsRect && this.checkBoundsRect(), this.boundsSprite && this.checkBoundsSprite(), this.snapOnDrag && (this.sprite.x = Math.round((this.sprite.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX, this.sprite.y = Math.round((this.sprite.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY)), !0)
      },
      justOver: function(t, e) {
        return t = t || 0, e = e || 500, this._pointerData[t].isOver && this.overDuration(t) < e
      },
      justOut: function(t, e) {
        return t = t || 0, e = e || 500, this._pointerData[t].isOut && this.game.time.now - this._pointerData[t].timeOut < e
      },
      justPressed: function(t, e) {
        return t = t || 0, e = e || 500, this._pointerData[t].isDown && this.downDuration(t) < e
      },
      justReleased: function(t, e) {
        return t = t || 0, e = e || 500, this._pointerData[t].isUp && this.game.time.now - this._pointerData[t].timeUp < e
      },
      overDuration: function(t) {
        return t = t || 0, this._pointerData[t].isOver ? this.game.time.now - this._pointerData[t].timeOver : -1
      },
      downDuration: function(t) {
        return t = t || 0, this._pointerData[t].isDown ? this.game.time.now - this._pointerData[t].timeDown : -1
      },
      enableDrag: function(t, e, s, n, r, o) {
        "undefined" == typeof t && (t = !1), "undefined" == typeof e && (e = !1), "undefined" == typeof s && (s = !1), "undefined" == typeof n && (n = 255), "undefined" == typeof r && (r = null), "undefined" == typeof o && (o = null), this._dragPoint = new i.Point, this.draggable = !0, this.bringToTop = e, this.dragOffset = new i.Point, this.dragFromCenter = t, this.pixelPerfect = s, this.pixelPerfectAlpha = n, r && (this.boundsRect = r), o && (this.boundsSprite = o)
      },
      disableDrag: function() {
        if (this._pointerData)
          for (var t = 0; 10 > t; t++) this._pointerData[t].isDragged = !1;
        this.draggable = !1, this.isDragged = !1, this._draggedPointerID = -1
      },
      startDrag: function(t) {
        this.isDragged = !0, this._draggedPointerID = t.id, this._pointerData[t.id].isDragged = !0, this.sprite.fixedToCamera ? this.dragFromCenter ? (this.sprite.centerOn(t.x, t.y), this._dragPoint.setTo(this.sprite.cameraOffset.x - t.x, this.sprite.cameraOffset.y - t.y)) : this._dragPoint.setTo(this.sprite.cameraOffset.x - t.x, this.sprite.cameraOffset.y - t.y) : this.dragFromCenter ? (this.sprite.centerOn(t.x, t.y), this._dragPoint.setTo(this.sprite.x - t.x, this.sprite.y - t.y)) : this._dragPoint.setTo(this.sprite.x - t.x, this.sprite.y - t.y), this.updateDrag(t), this.bringToTop && this.sprite.bringToTop(), this.sprite.events.onDragStart.dispatch(this.sprite, t)
      },
      stopDrag: function(t) {
        this.isDragged = !1, this._draggedPointerID = -1, this._pointerData[t.id].isDragged = !1, this.snapOnRelease && (this.sprite.fixedToCamera ? (this.sprite.cameraOffset.x = Math.round((this.sprite.cameraOffset.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX, this.sprite.cameraOffset.y = Math.round((this.sprite.cameraOffset.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY) : (this.sprite.x = Math.round((this.sprite.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX, this.sprite.y = Math.round((this.sprite.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY)), this.sprite.events.onDragStop.dispatch(this.sprite, t), this.sprite.events.onInputUp.dispatch(this.sprite, t), this.checkPointerOver(t) === !1 && this._pointerOutHandler(t)
      },
      setDragLock: function(t, e) {
        "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = !0), this.allowHorizontalDrag = t, this.allowVerticalDrag = e
      },
      enableSnap: function(t, e, i, s) {
        "undefined" == typeof i && (i = !0), "undefined" == typeof s && (s = !1), "undefined" == typeof snapOffsetX && (snapOffsetX = 0), "undefined" == typeof snapOffsetY && (snapOffsetY = 0), this.snapX = t, this.snapY = e, this.snapOffsetX = snapOffsetX, this.snapOffsetY = snapOffsetY, this.snapOnDrag = i, this.snapOnRelease = s
      },
      disableSnap: function() {
        this.snapOnDrag = !1, this.snapOnRelease = !1
      },
      checkBoundsRect: function() {
        this.sprite.fixedToCamera ? (this.sprite.cameraOffset.x < this.boundsRect.left ? this.sprite.cameraOffset.x = this.boundsRect.cameraOffset.x : this.sprite.cameraOffset.x + this.sprite.width > this.boundsRect.right && (this.sprite.cameraOffset.x = this.boundsRect.right - this.sprite.width), this.sprite.cameraOffset.y < this.boundsRect.top ? this.sprite.cameraOffset.y = this.boundsRect.top : this.sprite.cameraOffset.y + this.sprite.height > this.boundsRect.bottom && (this.sprite.cameraOffset.y = this.boundsRect.bottom - this.sprite.height)) : (this.sprite.x < this.boundsRect.left ? this.sprite.x = this.boundsRect.x : this.sprite.x + this.sprite.width > this.boundsRect.right && (this.sprite.x = this.boundsRect.right - this.sprite.width), this.sprite.y < this.boundsRect.top ? this.sprite.y = this.boundsRect.top : this.sprite.y + this.sprite.height > this.boundsRect.bottom && (this.sprite.y = this.boundsRect.bottom - this.sprite.height))
      },
      checkBoundsSprite: function() {
        this.sprite.fixedToCamera && this.boundsSprite.fixedToCamera ? (this.sprite.cameraOffset.x < this.boundsSprite.camerOffset.x ? this.sprite.cameraOffset.x = this.boundsSprite.camerOffset.x : this.sprite.cameraOffset.x + this.sprite.width > this.boundsSprite.camerOffset.x + this.boundsSprite.width && (this.sprite.cameraOffset.x = this.boundsSprite.camerOffset.x + this.boundsSprite.width - this.sprite.width), this.sprite.cameraOffset.y < this.boundsSprite.camerOffset.y ? this.sprite.cameraOffset.y = this.boundsSprite.camerOffset.y : this.sprite.cameraOffset.y + this.sprite.height > this.boundsSprite.camerOffset.y + this.boundsSprite.height && (this.sprite.cameraOffset.y = this.boundsSprite.camerOffset.y + this.boundsSprite.height - this.sprite.height)) : (this.sprite.x < this.boundsSprite.x ? this.sprite.x = this.boundsSprite.x : this.sprite.x + this.sprite.width > this.boundsSprite.x + this.boundsSprite.width && (this.sprite.x = this.boundsSprite.x + this.boundsSprite.width - this.sprite.width), this.sprite.y < this.boundsSprite.y ? this.sprite.y = this.boundsSprite.y : this.sprite.y + this.sprite.height > this.boundsSprite.y + this.boundsSprite.height && (this.sprite.y = this.boundsSprite.y + this.boundsSprite.height - this.sprite.height))
      }
    }, i.InputHandler.prototype.constructor = i.InputHandler, i.Gamepad = function(t) {
      this.game = t, this._gamepads = [new i.SinglePad(t, this), new i.SinglePad(t, this), new i.SinglePad(t, this), new i.SinglePad(t, this)], this._gamepadIndexMap = {}, this._rawPads = [], this._active = !1, this.disabled = !1, this._gamepadSupportAvailable = !!navigator.webkitGetGamepads || !!navigator.webkitGamepads || -1 != navigator.userAgent.indexOf("Firefox/"), this._prevRawGamepadTypes = [], this._prevTimestamps = [], this.callbackContext = this, this.onConnectCallback = null, this.onDisconnectCallback = null, this.onDownCallback = null, this.onUpCallback = null, this.onAxisCallback = null, this.onFloatCallback = null, this._ongamepadconnected = null, this._gamepaddisconnected = null
    }, i.Gamepad.prototype = {
      addCallbacks: function(t, e) {
        "undefined" != typeof e && (this.onConnectCallback = "function" == typeof e.onConnect ? e.onConnect : this.onConnectCallback, this.onDisconnectCallback = "function" == typeof e.onDisconnect ? e.onDisconnect : this.onDisconnectCallback, this.onDownCallback = "function" == typeof e.onDown ? e.onDown : this.onDownCallback, this.onUpCallback = "function" == typeof e.onUp ? e.onUp : this.onUpCallback, this.onAxisCallback = "function" == typeof e.onAxis ? e.onAxis : this.onAxisCallback, this.onFloatCallback = "function" == typeof e.onFloat ? e.onFloat : this.onFloatCallback)
      },
      start: function() {
        this._active = !0;
        var t = this;
        this._ongamepadconnected = function(e) {
          var i = e.gamepad;
          t._rawPads.push(i), t._gamepads[i.index].connect(i)
        }, window.addEventListener("gamepadconnected", this._ongamepadconnected, !1), this._ongamepaddisconnected = function(e) {
          var i = e.gamepad;
          for (var s in t._rawPads) t._rawPads[s].index === i.index && t._rawPads.splice(s, 1);
          t._gamepads[i.index].disconnect()
        }, window.addEventListener("gamepaddisconnected", this._ongamepaddisconnected, !1)
      },
      update: function() {
        this._pollGamepads();
        for (var t = 0; t < this._gamepads.length; t++) this._gamepads[t]._connected && this._gamepads[t].pollStatus()
      },
      _pollGamepads: function() {
        var t = navigator.webkitGetGamepads && navigator.webkitGetGamepads() || navigator.webkitGamepads;
        if (t) {
          this._rawPads = [];
          for (var e = !1, i = 0; i < t.length && (typeof t[i] !== this._prevRawGamepadTypes[i] && (e = !0, this._prevRawGamepadTypes[i] = typeof t[i]), t[i] && this._rawPads.push(t[i]), 3 !== i); i++);
          if (e) {
            for (var s, n = {
              rawIndices: {},
              padIndices: {}
            }, r = 0; r < this._gamepads.length; r++)
              if (s = this._gamepads[r], s.connected)
                for (var o = 0; o < this._rawPads.length; o++) this._rawPads[o].index === s.index && (n.rawIndices[s.index] = !0, n.padIndices[r] = !0);
            for (var a = 0; a < this._gamepads.length; a++)
              if (s = this._gamepads[a], !n.padIndices[a]) {
                this._rawPads.length < 1 && s.disconnect();
                for (var h = 0; h < this._rawPads.length && !n.padIndices[a]; h++) {
                  var l = this._rawPads[h];
                  if (l) {
                    if (n.rawIndices[l.index]) {
                      s.disconnect();
                      continue
                    }
                    s.connect(l), n.rawIndices[l.index] = !0, n.padIndices[a] = !0
                  } else s.disconnect()
                }
              }
          }
        }
      },
      setDeadZones: function(t) {
        for (var e = 0; e < this._gamepads.length; e++) this._gamepads[e].deadZone = t
      },
      stop: function() {
        this._active = !1, window.removeEventListener("gamepadconnected", this._ongamepadconnected), window.removeEventListener("gamepaddisconnected", this._ongamepaddisconnected)
      },
      reset: function() {
        this.update();
        for (var t = 0; t < this._gamepads.length; t++) this._gamepads[t].reset()
      },
      justPressed: function(t, e) {
        for (var i = 0; i < this._gamepads.length; i++)
          if (this._gamepads[i].justPressed(t, e) === !0) return !0;
        return !1
      },
      justReleased: function(t, e) {
        for (var i = 0; i < this._gamepads.length; i++)
          if (this._gamepads[i].justReleased(t, e) === !0) return !0;
        return !1
      },
      isDown: function(t) {
        for (var e = 0; e < this._gamepads.length; e++)
          if (this._gamepads[e].isDown(t) === !0) return !0;
        return !1
      }
    }, i.Gamepad.prototype.constructor = i.Gamepad, Object.defineProperty(i.Gamepad.prototype, "active", {
      get: function() {
        return this._active
      }
    }), Object.defineProperty(i.Gamepad.prototype, "supported", {
      get: function() {
        return this._gamepadSupportAvailable
      }
    }), Object.defineProperty(i.Gamepad.prototype, "padsConnected", {
      get: function() {
        return this._rawPads.length
      }
    }), Object.defineProperty(i.Gamepad.prototype, "pad1", {
      get: function() {
        return this._gamepads[0]
      }
    }), Object.defineProperty(i.Gamepad.prototype, "pad2", {
      get: function() {
        return this._gamepads[1]
      }
    }), Object.defineProperty(i.Gamepad.prototype, "pad3", {
      get: function() {
        return this._gamepads[2]
      }
    }), Object.defineProperty(i.Gamepad.prototype, "pad4", {
      get: function() {
        return this._gamepads[3]
      }
    }), i.Gamepad.BUTTON_0 = 0, i.Gamepad.BUTTON_1 = 1, i.Gamepad.BUTTON_2 = 2, i.Gamepad.BUTTON_3 = 3, i.Gamepad.BUTTON_4 = 4, i.Gamepad.BUTTON_5 = 5, i.Gamepad.BUTTON_6 = 6, i.Gamepad.BUTTON_7 = 7, i.Gamepad.BUTTON_8 = 8, i.Gamepad.BUTTON_9 = 9, i.Gamepad.BUTTON_10 = 10, i.Gamepad.BUTTON_11 = 11, i.Gamepad.BUTTON_12 = 12, i.Gamepad.BUTTON_13 = 13, i.Gamepad.BUTTON_14 = 14, i.Gamepad.BUTTON_15 = 15, i.Gamepad.AXIS_0 = 0, i.Gamepad.AXIS_1 = 1, i.Gamepad.AXIS_2 = 2, i.Gamepad.AXIS_3 = 3, i.Gamepad.AXIS_4 = 4, i.Gamepad.AXIS_5 = 5, i.Gamepad.AXIS_6 = 6, i.Gamepad.AXIS_7 = 7, i.Gamepad.AXIS_8 = 8, i.Gamepad.AXIS_9 = 9, i.Gamepad.XBOX360_A = 0, i.Gamepad.XBOX360_B = 1, i.Gamepad.XBOX360_X = 2, i.Gamepad.XBOX360_Y = 3, i.Gamepad.XBOX360_LEFT_BUMPER = 4, i.Gamepad.XBOX360_RIGHT_BUMPER = 5, i.Gamepad.XBOX360_LEFT_TRIGGER = 6, i.Gamepad.XBOX360_RIGHT_TRIGGER = 7, i.Gamepad.XBOX360_BACK = 8, i.Gamepad.XBOX360_START = 9, i.Gamepad.XBOX360_STICK_LEFT_BUTTON = 10, i.Gamepad.XBOX360_STICK_RIGHT_BUTTON = 11, i.Gamepad.XBOX360_DPAD_LEFT = 14, i.Gamepad.XBOX360_DPAD_RIGHT = 15, i.Gamepad.XBOX360_DPAD_UP = 12, i.Gamepad.XBOX360_DPAD_DOWN = 13, i.Gamepad.XBOX360_STICK_LEFT_X = 0, i.Gamepad.XBOX360_STICK_LEFT_Y = 1, i.Gamepad.XBOX360_STICK_RIGHT_X = 2, i.Gamepad.XBOX360_STICK_RIGHT_Y = 3, i.SinglePad = function(t, e) {
      this.game = t, this._padParent = e, this._index = null, this._rawPad = null, this._connected = !1, this._prevTimestamp = null, this._rawButtons = [], this._buttons = [], this._axes = [], this._hotkeys = [], this.callbackContext = this, this.onConnectCallback = null, this.onDisconnectCallback = null, this.onDownCallback = null, this.onUpCallback = null, this.onAxisCallback = null, this.onFloatCallback = null, this.deadZone = .26
    }, i.SinglePad.prototype = {
      addCallbacks: function(t, e) {
        "undefined" != typeof e && (this.onConnectCallback = "function" == typeof e.onConnect ? e.onConnect : this.onConnectCallback, this.onDisconnectCallback = "function" == typeof e.onDisconnect ? e.onDisconnect : this.onDisconnectCallback, this.onDownCallback = "function" == typeof e.onDown ? e.onDown : this.onDownCallback, this.onUpCallback = "function" == typeof e.onUp ? e.onUp : this.onUpCallback, this.onAxisCallback = "function" == typeof e.onAxis ? e.onAxis : this.onAxisCallback, this.onFloatCallback = "function" == typeof e.onFloat ? e.onFloat : this.onFloatCallback)
      },
      addButton: function(t) {
        return this._hotkeys[t] = new i.GamepadButton(this.game, t), this._hotkeys[t]
      },
      pollStatus: function() {
        if (!this._rawPad.timestamp || this._rawPad.timestamp != this._prevTimestamp) {
          for (var t = 0; t < this._rawPad.buttons.length; t += 1) {
            var e = this._rawPad.buttons[t];
            this._rawButtons[t] !== e && (1 === e ? this.processButtonDown(t, e) : 0 === e ? this.processButtonUp(t, e) : this.processButtonFloat(t, e), this._rawButtons[t] = e)
          }
          for (var i = this._rawPad.axes, s = 0; s < i.length; s += 1) {
            var n = i[s];
            this.processAxisChange(n > 0 && n > this.deadZone || 0 > n && n < -this.deadZone ? {
              axis: s,
              value: n
            } : {
              axis: s,
              value: 0
            })
          }
          this._prevTimestamp = this._rawPad.timestamp
        }
      },
      connect: function(t) {
        var e = !this._connected;
        this._index = t.index, this._connected = !0, this._rawPad = t, this._rawButtons = t.buttons, this._axes = t.axes, e && this._padParent.onConnectCallback && this._padParent.onConnectCallback.call(this._padParent.callbackContext, this._index), e && this.onConnectCallback && this.onConnectCallback.call(this.callbackContext)
      },
      disconnect: function() {
        var t = this._connected;
        this._connected = !1, this._rawPad = void 0, this._rawButtons = [], this._buttons = [];
        var e = this._index;
        this._index = null, t && this._padParent.onDisconnectCallback && this._padParent.onDisconnectCallback.call(this._padParent.callbackContext, e), t && this.onDisconnectCallback && this.onDisconnectCallback.call(this.callbackContext)
      },
      processAxisChange: function(t) {
        this.game.input.disabled || this.game.input.gamepad.disabled || this._axes[t.axis] !== t.value && (this._axes[t.axis] = t.value, this._padParent.onAxisCallback && this._padParent.onAxisCallback.call(this._padParent.callbackContext, t, this._index), this.onAxisCallback && this.onAxisCallback.call(this.callbackContext, t))
      },
      processButtonDown: function(t, e) {
        this.game.input.disabled || this.game.input.gamepad.disabled || (this._padParent.onDownCallback && this._padParent.onDownCallback.call(this._padParent.callbackContext, t, e, this._index), this.onDownCallback && this.onDownCallback.call(this.callbackContext, t, e), this._buttons[t] && this._buttons[t].isDown ? this._buttons[t].duration = this.game.time.now - this._buttons[t].timeDown : this._buttons[t] ? (this._buttons[t].isDown = !0, this._buttons[t].timeDown = this.game.time.now, this._buttons[t].duration = 0, this._buttons[t].value = e) : this._buttons[t] = {
          isDown: !0,
          timeDown: this.game.time.now,
          timeUp: 0,
          duration: 0,
          value: e
        }, this._hotkeys[t] && this._hotkeys[t].processButtonDown(e))
      },
      processButtonUp: function(t, e) {
        this.game.input.disabled || this.game.input.gamepad.disabled || (this._padParent.onUpCallback && this._padParent.onUpCallback.call(this._padParent.callbackContext, t, e, this._index), this.onUpCallback && this.onUpCallback.call(this.callbackContext, t, e), this._hotkeys[t] && this._hotkeys[t].processButtonUp(e), this._buttons[t] ? (this._buttons[t].isDown = !1, this._buttons[t].timeUp = this.game.time.now, this._buttons[t].value = e) : this._buttons[t] = {
          isDown: !1,
          timeDown: this.game.time.now,
          timeUp: this.game.time.now,
          duration: 0,
          value: e
        })
      },
      processButtonFloat: function(t, e) {
        this.game.input.disabled || this.game.input.gamepad.disabled || (this._padParent.onFloatCallback && this._padParent.onFloatCallback.call(this._padParent.callbackContext, t, e, this._index), this.onFloatCallback && this.onFloatCallback.call(this.callbackContext, t, e), this._buttons[t] ? this._buttons[t].value = e : this._buttons[t] = {
          value: e
        }, this._hotkeys[t] && this._hotkeys[t].processButtonFloat(e))
      },
      axis: function(t) {
        return this._axes[t] ? this._axes[t] : !1
      },
      isDown: function(t) {
        return this._buttons[t] ? this._buttons[t].isDown : !1
      },
      justReleased: function(t, e) {
        return "undefined" == typeof e && (e = 250), this._buttons[t] && this._buttons[t].isDown === !1 && this.game.time.now - this._buttons[t].timeUp < e
      },
      justPressed: function(t, e) {
        return "undefined" == typeof e && (e = 250), this._buttons[t] && this._buttons[t].isDown && this._buttons[t].duration < e
      },
      buttonValue: function(t) {
        return this._buttons[t] ? this._buttons[t].value : !1
      },
      reset: function() {
        for (var t = 0; t < this._buttons.length; t++) this._buttons[t] = 0;
        for (var e = 0; e < this._axes.length; e++) this._axes[e] = 0
      }
    }, i.SinglePad.prototype.constructor = i.SinglePad, Object.defineProperty(i.SinglePad.prototype, "connected", {
      get: function() {
        return this._connected
      }
    }), Object.defineProperty(i.SinglePad.prototype, "index", {
      get: function() {
        return this._index
      }
    }), i.GamepadButton = function(t, e) {
      this.game = t, this.isDown = !1, this.isUp = !1, this.timeDown = 0, this.duration = 0, this.timeUp = 0, this.repeats = 0, this.value = 0, this.buttonCode = e, this.onDown = new i.Signal, this.onUp = new i.Signal, this.onFloat = new i.Signal
    }, i.GamepadButton.prototype = {
      processButtonDown: function(t) {
        this.isDown ? (this.duration = this.game.time.now - this.timeDown, this.repeats++) : (this.isDown = !0, this.isUp = !1, this.timeDown = this.game.time.now, this.duration = 0, this.repeats = 0, this.value = t, this.onDown.dispatch(this, t))
      },
      processButtonUp: function(t) {
        this.isDown = !1, this.isUp = !0, this.timeUp = this.game.time.now, this.value = t, this.onUp.dispatch(this, t)
      },
      processButtonFloat: function(t) {
        this.value = t, this.onFloat.dispatch(this, t)
      },
      justPressed: function(t) {
        return "undefined" == typeof t && (t = 250), this.isDown && this.duration < t
      },
      justReleased: function(t) {
        return "undefined" == typeof t && (t = 250), this.isDown === !1 && this.game.time.now - this.timeUp < t
      }
    }, i.GamepadButton.prototype.constructor = i.GamepadButton, i.Events = function(t) {
      this.parent = t, this.onAddedToGroup = new i.Signal, this.onRemovedFromGroup = new i.Signal, this.onKilled = new i.Signal, this.onRevived = new i.Signal, this.onOutOfBounds = new i.Signal, this.onInputOver = null, this.onInputOut = null, this.onInputDown = null, this.onInputUp = null, this.onDragStart = null, this.onDragStop = null, this.onAnimationStart = null, this.onAnimationComplete = null, this.onAnimationLoop = null, this.onBeginContact = null, this.onEndContact = null
    }, i.Events.prototype = {
      destroy: function() {
        this.parent = null, this.onAddedToGroup.dispose(), this.onRemovedFromGroup.dispose(), this.onKilled.dispose(), this.onRevived.dispose(), this.onOutOfBounds.dispose(), this.onInputOver && (this.onInputOver.dispose(), this.onInputOut.dispose(), this.onInputDown.dispose(), this.onInputUp.dispose(), this.onDragStart.dispose(), this.onDragStop.dispose()), this.onAnimationStart && (this.onAnimationStart.dispose(), this.onAnimationComplete.dispose(), this.onAnimationLoop.dispose())
      }
    }, i.Events.prototype.constructor = i.Events, i.GameObjectFactory = function(t) {
      this.game = t, this.world = this.game.world
    }, i.GameObjectFactory.prototype = {
      existing: function(t) {
        return this.world.add(t)
      },
      sprite: function(t, e, i, s, n) {
        return "undefined" == typeof n && (n = this.world), n.create(t, e, i, s)
      },
      child: function(t, e, i, s, n) {
        return t.create(e, i, s, n)
      },
      tween: function(t) {
        return this.game.tweens.create(t)
      },
      group: function(t, e) {
        return new i.Group(this.game, t, e)
      },
      audio: function(t, e, i, s) {
        return this.game.sound.add(t, e, i, s)
      },
      sound: function(t, e, i, s) {
        return this.game.sound.add(t, e, i, s)
      },
      tileSprite: function(t, e, s, n, r, o) {
        return "undefined" == typeof o && (o = this.world), o.add(new i.TileSprite(this.game, t, e, s, n, r))
      },
      text: function(t, e, s, n, r) {
        return "undefined" == typeof r && (r = this.world), r.add(new i.Text(this.game, t, e, s, n))
      },
      button: function(t, e, s, n, r, o, a, h, l, c) {
        return "undefined" == typeof c && (c = this.world), c.add(new i.Button(this.game, t, e, s, n, r, o, a, h, l))
      },
      graphics: function(t, e, s) {
        return "undefined" == typeof s && (s = this.world), s.add(new i.Graphics(this.game, t, e))
      },
      emitter: function(t, e, s) {
        return this.game.particles.add(new i.Particles.Arcade.Emitter(this.game, t, e, s))
      },
      bitmapText: function(t, e, s, n, r) {
        return "undefined" == typeof r && (r = this.world), this.world.add(new i.BitmapText(this.game, t, e, s, n))
      },
      tilemap: function(t, e) {
        return new i.Tilemap(this.game, t, e)
      },
      renderTexture: function(t, e, s) {
        var n = new i.RenderTexture(this.game, t, e, s);
        return this.game.cache.addRenderTexture(t, n), n
      },
      bitmapData: function(t, e) {
        return new i.BitmapData(this.game, t, e)
      },
      filter: function(t) {
        var e = Array.prototype.splice.call(arguments, 1),
          t = new i.Filter[t](this.game);
        return t.init.apply(t, e), t
      }
    }, i.GameObjectFactory.prototype.constructor = i.GameObjectFactory, i.BitmapData = function(t, s, n) {
      "undefined" == typeof s && (s = 256), "undefined" == typeof n && (n = 256), this.game = t, this.name = "", this.width = s, this.height = n, this.canvas = i.Canvas.create(s, n), this.context = this.canvas.getContext("2d"), this.imageData = this.context.getImageData(0, 0, s, n), this.pixels = this.imageData.data.buffer ? this.imageData.data.buffer : this.imageData.data, this.baseTexture = new e.BaseTexture(this.canvas), this.texture = new e.Texture(this.baseTexture), this.textureFrame = new i.Frame(0, 0, 0, s, n, "bitmapData", t.rnd.uuid()), this.type = i.BITMAPDATA, this._dirty = !1
    }, i.BitmapData.prototype = {
      add: function(t) {
        t.loadTexture(this)
      },
      addTo: function(t) {
        for (var e = 0; e < t.length; e++) t[e].texture && t[e].loadTexture(this)
      },
      clear: function() {
        this.context.clearRect(0, 0, this.width, this.height), this._dirty = !0
      },
      refreshBuffer: function() {
        this.imageData = this.context.getImageData(0, 0, this.width, this.height), this.pixels = new Int32Array(this.imageData.data.buffer)
      },
      setPixel32: function(t, e, i, s, n, r) {
        t >= 0 && t <= this.width && e >= 0 && e <= this.height && (this.pixels[e * this.width + t] = r << 24 | n << 16 | s << 8 | i, this.context.putImageData(this.imageData, 0, 0), this._dirty = !0)
      },
      setPixel: function(t, e, i, s, n) {
        this.setPixel32(t, e, i, s, n, 255)
      },
      getPixel: function(t, e) {
        return t >= 0 && t <= this.width && e >= 0 && e <= this.height ? this.data32[e * this.width + t] : void 0
      },
      getPixel32: function(t, e) {
        return t >= 0 && t <= this.width && e >= 0 && e <= this.height ? this.data32[e * this.width + t] : void 0
      },
      getPixels: function(t) {
        return this.context.getImageData(t.x, t.y, t.width, t.height)
      },
      arc: function(t, e, i, s, n, r) {
        return "undefined" == typeof r && (r = !1), this._dirty = !0, this.context.arc(t, e, i, s, n, r), this
      },
      arcTo: function(t, e, i, s, n) {
        return this._dirty = !0, this.context.arcTo(t, e, i, s, n), this
      },
      beginFill: function(t) {
        return this.fillStyle(t), this
      },
      beginLinearGradientFill: function(t, e, i, s, n, r) {
        for (var o = this.createLinearGradient(i, s, n, r), a = 0, h = t.length; h > a; a++) o.addColorStop(e[a], t[a]);
        return this.fillStyle(o), this
      },
      beginLinearGradientStroke: function(t, e, i, s, n, r) {
        for (var o = this.createLinearGradient(i, s, n, r), a = 0, h = t.length; h > a; a++) o.addColorStop(e[a], t[a]);
        return this.strokeStyle(o), this
      },
      beginRadialGradientStroke: function(t, e, i, s, n, r, o, a) {
        for (var h = this.createRadialGradient(i, s, n, r, o, a), l = 0, c = t.length; c > l; l++) h.addColorStop(e[l], t[l]);
        return this.strokeStyle(h), this
      },
      beginPath: function() {
        return this.context.beginPath(), this
      },
      beginStroke: function(t) {
        return this.strokeStyle(t), this
      },
      bezierCurveTo: function(t, e, i, s, n, r) {
        return this._dirty = !0, this.context.bezierCurveTo(t, e, i, s, n, r), this
      },
      circle: function(t, e, i) {
        return this.arc(t, e, i, 0, 2 * Math.PI), this
      },
      clearRect: function(t, e, i, s) {
        return this._dirty = !0, this.context.clearRect(t, e, i, s), this
      },
      clip: function() {
        return this._dirty = !0, this.context.clip(), this
      },
      closePath: function() {
        return this._dirty = !0, this.context.closePath(), this
      },
      createLinearGradient: function(t, e, i, s) {
        return this.context.createLinearGradient(t, e, i, s)
      },
      createRadialGradient: function(t, e, i, s, n, r) {
        return this.context.createRadialGradient(t, e, i, s, n, r)
      },
      ellipse: function(t, e, i, s) {
        var n = .5522848,
          r = i / 2 * n,
          o = s / 2 * n,
          a = t + i,
          h = e + s,
          l = t + i / 2,
          c = e + s / 2;
        return this.moveTo(t, c), this.bezierCurveTo(t, c - o, l - r, e, l, e), this.bezierCurveTo(l + r, e, a, c - o, a, c), this.bezierCurveTo(a, c + o, l + r, h, l, h), this.bezierCurveTo(l - r, h, t, c + o, t, c), this
      },
      fill: function() {
        return this._dirty = !0, this.context.fill(), this
      },
      fillRect: function(t, e, i, s) {
        return this._dirty = !0, this.context.fillRect(t, e, i, s), this
      },
      fillStyle: function(t) {
        return this.context.fillStyle = t, this
      },
      font: function(t) {
        return this.context.font = t, this
      },
      globalAlpha: function(t) {
        return this.context.globalAlpha = t, this
      },
      globalCompositeOperation: function(t) {
        return this.context.globalCompositeOperation = t, this
      },
      lineCap: function(t) {
        return this.context.lineCap = t, this
      },
      lineDashOffset: function(t) {
        return this.context.lineDashOffset = t, this
      },
      lineJoin: function(t) {
        return this.context.lineJoin = t, this
      },
      lineWidth: function(t) {
        return this.context.lineWidth = t, this
      },
      miterLimit: function(t) {
        return this.context.miterLimit = t, this
      },
      lineTo: function(t, e) {
        return this._dirty = !0, this.context.lineTo(t, e), this
      },
      moveTo: function(t, e) {
        return this.context.moveTo(t, e), this
      },
      quadraticCurveTo: function(t, e, i, s) {
        return this._dirty = !0, this.context.quadraticCurveTo(t, e, i, s), this
      },
      rect: function(t, e, i, s) {
        return this._dirty = !0, this.context.rect(t, e, i, s), this
      },
      restore: function() {
        return this._dirty = !0, this.context.restore(), this
      },
      rotate: function(t) {
        return this._dirty = !0, this.context.rotate(t), this
      },
      setStrokeStyle: function(t, e, i, s, n) {
        return "undefined" == typeof t && (t = 1), "undefined" == typeof e && (e = "butt"), "undefined" == typeof i && (i = "miter"), "undefined" == typeof s && (s = 10), n = !1, this.lineWidth(t), this.lineCap(e), this.lineJoin(i), this.miterLimit(s), this
      },
      save: function() {
        return this._dirty = !0, this.context.save(), this
      },
      scale: function(t, e) {
        return this._dirty = !0, this.context.scale(t, e), this
      },
      scrollPathIntoView: function() {
        return this._dirty = !0, this.context.scrollPathIntoView(), this
      },
      stroke: function() {
        return this._dirty = !0, this.context.stroke(), this
      },
      strokeRect: function(t, e, i, s) {
        return this._dirty = !0, this.context.strokeRect(t, e, i, s), this
      },
      strokeStyle: function(t) {
        return this.context.strokeStyle = t, this
      },
      render: function() {
        this._dirty && (this.game.renderType == i.WEBGL && e.texturesToUpdate.push(this.baseTexture), this._dirty = !1)
      }
    }, i.BitmapData.prototype.constructor = i.BitmapData, i.BitmapData.prototype.mt = i.BitmapData.prototype.moveTo, i.BitmapData.prototype.lt = i.BitmapData.prototype.lineTo, i.BitmapData.prototype.at = i.BitmapData.prototype.arcTo, i.BitmapData.prototype.bt = i.BitmapData.prototype.bezierCurveTo, i.BitmapData.prototype.qt = i.BitmapData.prototype.quadraticCurveTo, i.BitmapData.prototype.a = i.BitmapData.prototype.arc, i.BitmapData.prototype.r = i.BitmapData.prototype.rect, i.BitmapData.prototype.cp = i.BitmapData.prototype.closePath, i.BitmapData.prototype.c = i.BitmapData.prototype.clear, i.BitmapData.prototype.f = i.BitmapData.prototype.beginFill, i.BitmapData.prototype.lf = i.BitmapData.prototype.beginLinearGradientFill, i.BitmapData.prototype.rf = i.BitmapData.prototype.beginRadialGradientFill, i.BitmapData.prototype.ef = i.BitmapData.prototype.endFill, i.BitmapData.prototype.ss = i.BitmapData.prototype.setStrokeStyle, i.BitmapData.prototype.s = i.BitmapData.prototype.beginStroke, i.BitmapData.prototype.ls = i.BitmapData.prototype.beginLinearGradientStroke, i.BitmapData.prototype.rs = i.BitmapData.prototype.beginRadialGradientStroke, i.BitmapData.prototype.dr = i.BitmapData.prototype.rect, i.BitmapData.prototype.dc = i.BitmapData.prototype.circle, i.BitmapData.prototype.de = i.BitmapData.prototype.ellipse, i.Sprite = function(t, s, n, r, o) {
      s = s || 0, n = n || 0, r = r || null, o = o || null, this.game = t, this.exists = !0, this.alive = !0, this.group = null, this.name = "", this.type = i.SPRITE, this.renderOrderID = -1, this.lifespan = 0, this.events = new i.Events(this), this.animations = new i.AnimationManager(this), this.input = new i.InputHandler(this), this.key = r, this.currentFrame = null, r instanceof i.RenderTexture ? (e.Sprite.call(this, r), this.currentFrame = this.game.cache.getTextureFrame(r.name)) : r instanceof i.BitmapData ? (e.Sprite.call(this, r.texture, r.textureFrame), this.currentFrame = r.textureFrame) : r instanceof e.Texture ? (e.Sprite.call(this, r), this.currentFrame = o) : (null === r || "undefined" == typeof r ? (r = "__default", this.key = r) : "string" == typeof r && this.game.cache.checkImageKey(r) === !1 && (r = "__missing", this.key = r), e.Sprite.call(this, e.TextureCache[r]), this.game.cache.isSpriteSheet(r) ? (this.animations.loadFrameData(this.game.cache.getFrameData(r)), null !== o && ("string" == typeof o ? this.frameName = o : this.frame = o)) : this.currentFrame = this.game.cache.getFrame(r)), this.textureRegion = new i.Rectangle(this.texture.frame.x, this.texture.frame.y, this.texture.frame.width, this.texture.frame.height), this.anchor = new i.Point, this.x = s, this.y = n, this.position.x = s, this.position.y = n, this.world = new i.Point(s, n), this.autoCull = !1, this.scale = new i.Point(1, 1), this._cache = {
        fresh: !0,
        dirty: !1,
        a00: -1,
        a01: -1,
        a02: -1,
        a10: -1,
        a11: -1,
        a12: -1,
        id: -1,
        i01: -1,
        i10: -1,
        idi: -1,
        left: null,
        right: null,
        top: null,
        bottom: null,
        prevX: s,
        prevY: n,
        x: -1,
        y: -1,
        scaleX: 1,
        scaleY: 1,
        width: this.currentFrame.sourceSizeW,
        height: this.currentFrame.sourceSizeH,
        halfWidth: Math.floor(this.currentFrame.sourceSizeW / 2),
        halfHeight: Math.floor(this.currentFrame.sourceSizeH / 2),
        calcWidth: -1,
        calcHeight: -1,
        frameID: -1,
        frameWidth: this.currentFrame.width,
        frameHeight: this.currentFrame.height,
        cameraVisible: !0,
        cropX: 0,
        cropY: 0,
        cropWidth: this.currentFrame.sourceSizeW,
        cropHeight: this.currentFrame.sourceSizeH
      }, this.offset = new i.Point, this.center = new i.Point(s + Math.floor(this._cache.width / 2), n + Math.floor(this._cache.height / 2)), this.topLeft = new i.Point(s, n), this.topRight = new i.Point(s + this._cache.width, n), this.bottomRight = new i.Point(s + this._cache.width, n + this._cache.height), this.bottomLeft = new i.Point(s, n + this._cache.height), this.bounds = new i.Rectangle(s, n, this._cache.width, this._cache.height), this.body = new i.Physics.Arcade.Body(this), this.health = 1, this.inWorld = i.Rectangle.intersects(this.bounds, this.game.world.bounds), this.inWorldThreshold = 0, this.outOfBoundsKill = !1, this._outOfBoundsFired = !1, this.fixedToCamera = !1, this.cameraOffset = new i.Point(s, n), this.crop = new i.Rectangle(0, 0, this._cache.width, this._cache.height), this.cropEnabled = !1, this.debug = !1, this.updateCache(), this.updateBounds()
    }, i.Sprite.prototype = Object.create(e.Sprite.prototype), i.Sprite.prototype.constructor = i.Sprite, i.Sprite.prototype.preUpdate = function() {
      return this._cache.fresh ? (this.world.setTo(this.parent.position.x + this.x, this.parent.position.y + this.y), this.worldTransform[2] = this.world.x, this.worldTransform[5] = this.world.y, this._cache.fresh = !1, void(this.body && (this.body.x = this.world.x - this.anchor.x * this.width + this.body.offset.x, this.body.y = this.world.y - this.anchor.y * this.height + this.body.offset.y, this.body.preX = this.body.x, this.body.preY = this.body.y))) : !this.exists || this.group && !this.group.exists ? (this.renderOrderID = -1, !1) : this.lifespan > 0 && (this.lifespan -= this.game.time.elapsed, this.lifespan <= 0) ? (this.kill(), !1) : (this._cache.dirty = !1, this.visible && (this.renderOrderID = this.game.world.currentRenderOrderID++), this.updateCache(), this.updateAnimation(), this.updateCrop(), (this._cache.dirty || this.world.x !== this._cache.prevX || this.world.y !== this._cache.prevY) && this.updateBounds(), this.body && this.body.preUpdate(), !0)
    }, i.Sprite.prototype.updateCache = function() {
      this._cache.prevX = this.world.x, this._cache.prevY = this.world.y, this.fixedToCamera && (this.x = this.game.camera.view.x + this.cameraOffset.x, this.y = this.game.camera.view.y + this.cameraOffset.y), this.world.setTo(this.game.camera.x + this.worldTransform[2], this.game.camera.y + this.worldTransform[5]), (this.worldTransform[1] != this._cache.i01 || this.worldTransform[3] != this._cache.i10 || this.worldTransform[0] != this._cache.a00 || this.worldTransform[41] != this._cache.a11) && (this._cache.a00 = this.worldTransform[0], this._cache.a01 = this.worldTransform[1], this._cache.a10 = this.worldTransform[3], this._cache.a11 = this.worldTransform[4], this._cache.i01 = this.worldTransform[1], this._cache.i10 = this.worldTransform[3], this._cache.scaleX = Math.sqrt(this._cache.a00 * this._cache.a00 + this._cache.a01 * this._cache.a01), this._cache.scaleY = Math.sqrt(this._cache.a10 * this._cache.a10 + this._cache.a11 * this._cache.a11), this._cache.a01 *= -1, this._cache.a10 *= -1, this._cache.id = 1 / (this._cache.a00 * this._cache.a11 + this._cache.a01 * -this._cache.a10), this._cache.idi = 1 / (this._cache.a00 * this._cache.a11 + this._cache.i01 * -this._cache.i10), this._cache.dirty = !0), this._cache.a02 = this.worldTransform[2], this._cache.a12 = this.worldTransform[5]
    }, i.Sprite.prototype.updateAnimation = function() {
      (this.animations.update() || this.currentFrame && this.currentFrame.uuid != this._cache.frameID) && (this._cache.frameID = this.currentFrame.uuid, this._cache.frameWidth = this.texture.frame.width, this._cache.frameHeight = this.texture.frame.height, this._cache.width = this.currentFrame.width, this._cache.height = this.currentFrame.height, this._cache.halfWidth = Math.floor(this._cache.width / 2), this._cache.halfHeight = Math.floor(this._cache.height / 2), this._cache.dirty = !0)
    }, i.Sprite.prototype.updateCrop = function() {
      !this.cropEnabled || this.crop.width == this._cache.cropWidth && this.crop.height == this._cache.cropHeight && this.crop.x == this._cache.cropX && this.crop.y == this._cache.cropY || (this.crop.floorAll(), this._cache.cropX = this.crop.x, this._cache.cropY = this.crop.y, this._cache.cropWidth = this.crop.width, this._cache.cropHeight = this.crop.height, this.texture.frame = this.crop, this.texture.width = this.crop.width, this.texture.height = this.crop.height, this.texture.updateFrame = !0, e.Texture.frameUpdates.push(this.texture))
    }, i.Sprite.prototype.updateBounds = function() {
      this.offset.setTo(this._cache.a02 - this.anchor.x * this.width, this._cache.a12 - this.anchor.y * this.height), this.getLocalPosition(this.center, this.offset.x + this.width / 2, this.offset.y + this.height / 2), this.getLocalPosition(this.topLeft, this.offset.x, this.offset.y), this.getLocalPosition(this.topRight, this.offset.x + this.width, this.offset.y), this.getLocalPosition(this.bottomLeft, this.offset.x, this.offset.y + this.height), this.getLocalPosition(this.bottomRight, this.offset.x + this.width, this.offset.y + this.height), this._cache.left = i.Math.min(this.topLeft.x, this.topRight.x, this.bottomLeft.x, this.bottomRight.x), this._cache.right = i.Math.max(this.topLeft.x, this.topRight.x, this.bottomLeft.x, this.bottomRight.x), this._cache.top = i.Math.min(this.topLeft.y, this.topRight.y, this.bottomLeft.y, this.bottomRight.y), this._cache.bottom = i.Math.max(this.topLeft.y, this.topRight.y, this.bottomLeft.y, this.bottomRight.y), this.bounds.setTo(this._cache.left, this._cache.top, this._cache.right - this._cache.left, this._cache.bottom - this._cache.top), this.updateFrame = !0, this.inWorld === !1 ? (this.inWorld = i.Rectangle.intersects(this.bounds, this.game.world.bounds, this.inWorldThreshold), this.inWorld && (this._outOfBoundsFired = !1)) : (this.inWorld = i.Rectangle.intersects(this.bounds, this.game.world.bounds, this.inWorldThreshold), this.inWorld === !1 && (this.events.onOutOfBounds.dispatch(this), this._outOfBoundsFired = !0, this.outOfBoundsKill && this.kill())), this._cache.cameraVisible = i.Rectangle.intersects(this.game.world.camera.screenView, this.bounds, 0), this.autoCull && (this.renderable = this._cache.cameraVisible)
    }, i.Sprite.prototype.getLocalPosition = function(t, e, i) {
      return t.x = (this._cache.a11 * this._cache.id * e + -this._cache.a01 * this._cache.id * i + (this._cache.a12 * this._cache.a01 - this._cache.a02 * this._cache.a11) * this._cache.id) * this.scale.x + this._cache.a02, t.y = (this._cache.a00 * this._cache.id * i + -this._cache.a10 * this._cache.id * e + (-this._cache.a12 * this._cache.a00 + this._cache.a02 * this._cache.a10) * this._cache.id) * this.scale.y + this._cache.a12, t
    }, i.Sprite.prototype.getLocalUnmodifiedPosition = function(t, e, i) {
      return t.x = this._cache.a11 * this._cache.idi * e + -this._cache.i01 * this._cache.idi * i + (this._cache.a12 * this._cache.i01 - this._cache.a02 * this._cache.a11) * this._cache.idi + this.anchor.x * this._cache.width, t.y = this._cache.a00 * this._cache.idi * i + -this._cache.i10 * this._cache.idi * e + (-this._cache.a12 * this._cache.a00 + this._cache.a02 * this._cache.i10) * this._cache.idi + this.anchor.y * this._cache.height, t
    }, i.Sprite.prototype.resetCrop = function() {
      this.crop = new i.Rectangle(0, 0, this._cache.width, this._cache.height), this.texture.setFrame(this.crop), this.cropEnabled = !1
    }, i.Sprite.prototype.postUpdate = function() {
      this.key instanceof i.BitmapData && this.key._dirty && this.key.render(), this.exists && (this.body && this.body.postUpdate(), this.fixedToCamera ? (this._cache.x = this.game.camera.view.x + this.cameraOffset.x, this._cache.y = this.game.camera.view.y + this.cameraOffset.y) : (this._cache.x = this.x, this._cache.y = this.y), this.position.x = this._cache.x, this.position.y = this._cache.y)
    }, i.Sprite.prototype.loadTexture = function(t, s) {
      this.key = t, t instanceof i.RenderTexture ? this.currentFrame = this.game.cache.getTextureFrame(t.name) : t instanceof i.BitmapData ? (this.setTexture(t.texture), this.currentFrame = t.textureFrame) : t instanceof e.Texture ? this.currentFrame = s : (("undefined" == typeof t || this.game.cache.checkImageKey(t) === !1) && (t = "__default", this.key = t), this.game.cache.isSpriteSheet(t) ? (this.animations.loadFrameData(this.game.cache.getFrameData(t)), "undefined" != typeof s && ("string" == typeof s ? this.frameName = s : this.frame = s)) : (this.currentFrame = this.game.cache.getFrame(t), this.setTexture(e.TextureCache[t])))
    }, i.Sprite.prototype.centerOn = function(t, e) {
      return this.fixedToCamera ? (this.cameraOffset.x = t + (this.cameraOffset.x - this.center.x), this.cameraOffset.y = e + (this.cameraOffset.y - this.center.y)) : (this.x = t + (this.x - this.center.x), this.y = e + (this.y - this.center.y)), this
    }, i.Sprite.prototype.revive = function(t) {
      return "undefined" == typeof t && (t = 1), this.alive = !0, this.exists = !0, this.visible = !0, this.health = t, this.events && this.events.onRevived.dispatch(this), this
    }, i.Sprite.prototype.kill = function() {
      return this.alive = !1, this.exists = !1, this.visible = !1, this.events && this.events.onKilled.dispatch(this), this
    }, i.Sprite.prototype.destroy = function() {
      this.filters && (this.filters = null), this.group && this.group.remove(this), this.input && this.input.destroy(), this.events && this.events.destroy(), this.animations && this.animations.destroy(), this.body && this.body.destroy(), this.alive = !1, this.exists = !1, this.visible = !1, this.game = null
    }, i.Sprite.prototype.damage = function(t) {
      return this.alive && (this.health -= t, this.health < 0 && this.kill()), this
    }, i.Sprite.prototype.reset = function(t, e, i) {
      return "undefined" == typeof i && (i = 1), this.x = t, this.y = e, this.world.setTo(t, e), this.position.x = this.x, this.position.y = this.y, this.alive = !0, this.exists = !0, this.visible = !0, this.renderable = !0, this._outOfBoundsFired = !1, this.health = i, this.body && this.body.reset(!1), this
    }, i.Sprite.prototype.bringToTop = function() {
      return this.group ? this.group.bringToTop(this) : this.game.world.bringToTop(this), this
    }, i.Sprite.prototype.play = function(t, e, i, s) {
      return this.animations ? this.animations.play(t, e, i, s) : void 0
    }, Object.defineProperty(i.Sprite.prototype, "deltaX", {
      get: function() {
        return this.world.x - this._cache.prevX
      }
    }), Object.defineProperty(i.Sprite.prototype, "deltaY", {
      get: function() {
        return this.world.y - this._cache.prevY
      }
    }), Object.defineProperty(i.Sprite.prototype, "angle", {
      get: function() {
        return i.Math.wrapAngle(i.Math.radToDeg(this.rotation))
      },
      set: function(t) {
        this.rotation = i.Math.degToRad(i.Math.wrapAngle(t))
      }
    }), Object.defineProperty(i.Sprite.prototype, "frame", {
      get: function() {
        return this.animations.frame
      },
      set: function(t) {
        this.animations.frame = t
      }
    }), Object.defineProperty(i.Sprite.prototype, "frameName", {
      get: function() {
        return this.animations.frameName
      },
      set: function(t) {
        this.animations.frameName = t
      }
    }), Object.defineProperty(i.Sprite.prototype, "inCamera", {
      get: function() {
        return this._cache.cameraVisible
      }
    }), Object.defineProperty(i.Sprite.prototype, "worldCenterX", {
      get: function() {
        return this.game.camera.x + this.center.x
      }
    }), Object.defineProperty(i.Sprite.prototype, "worldCenterY", {
      get: function() {
        return this.game.camera.y + this.center.y
      }
    }), Object.defineProperty(i.Sprite.prototype, "width", {
      get: function() {
        return this.scale.x * this.currentFrame.width
      },
      set: function(t) {
        this.scale.x = t / this.currentFrame.width, this._cache.scaleX = t / this.currentFrame.width, this._width = t
      }
    }), Object.defineProperty(i.Sprite.prototype, "height", {
      get: function() {
        return this.scale.y * this.currentFrame.height
      },
      set: function(t) {
        this.scale.y = t / this.currentFrame.height, this._cache.scaleY = t / this.currentFrame.height, this._height = t
      }
    }), Object.defineProperty(i.Sprite.prototype, "inputEnabled", {
      get: function() {
        return this.input.enabled
      },
      set: function(t) {
        t ? this.input.enabled === !1 && this.input.start() : this.input.enabled && this.input.stop()
      }
    }), i.TileSprite = function(t, s, n, r, o, a) {
      s = s || 0, n = n || 0, r = r || 256, o = o || 256, a = a || null, i.Sprite.call(this, t, s, n, a), this.texture = e.TextureCache[a], e.TilingSprite.call(this, this.texture, r, o), this.type = i.TILESPRITE, this.tileScale = new i.Point(1, 1), this.tilePosition = new i.Point(0, 0), this.body.width = r, this.body.height = o
    }, i.TileSprite.prototype = i.Utils.extend(!0, e.TilingSprite.prototype, i.Sprite.prototype), i.TileSprite.prototype.constructor = i.TileSprite, Object.defineProperty(i.TileSprite.prototype, "angle", {
      get: function() {
        return i.Math.wrapAngle(i.Math.radToDeg(this.rotation))
      },
      set: function(t) {
        this.rotation = i.Math.degToRad(i.Math.wrapAngle(t))
      }
    }), Object.defineProperty(i.TileSprite.prototype, "frame", {
      get: function() {
        return this.animations.frame
      },
      set: function(t) {
        this.animations.frame = t
      }
    }), Object.defineProperty(i.TileSprite.prototype, "frameName", {
      get: function() {
        return this.animations.frameName
      },
      set: function(t) {
        this.animations.frameName = t
      }
    }), Object.defineProperty(i.TileSprite.prototype, "inCamera", {
      get: function() {
        return this._cache.cameraVisible
      }
    }), Object.defineProperty(i.TileSprite.prototype, "inputEnabled", {
      get: function() {
        return this.input.enabled
      },
      set: function(t) {
        t ? this.input.enabled === !1 && this.input.start() : this.input.enabled && this.input.stop()
      }
    }), i.Text = function(t, s, n, r, o) {
      s = s || 0, n = n || 0, r = r || "", o = o || "", this.game = t, this.exists = !0, this.alive = !0, this.group = null, this.name = "", this.type = i.TEXT, this._text = r, this._style = o, e.Text.call(this, r, o), this.position.x = this.x = s, this.position.y = this.y = n, this.anchor = new i.Point, this.scale = new i.Point(1, 1), this.fixedToCamera = !1, this.cameraOffset = new i.Point(s, n), this._cache = {
        dirty: !1,
        a00: 1,
        a01: 0,
        a02: s,
        a10: 0,
        a11: 1,
        a12: n,
        id: 1,
        x: -1,
        y: -1,
        scaleX: 1,
        scaleY: 1
      }, this._cache.x = this.x, this._cache.y = this.y, this.renderable = !0
    }, i.Text.prototype = Object.create(e.Text.prototype), i.Text.prototype.constructor = i.Text, i.Text.prototype.update = function() {
      this.exists && (this.fixedToCamera && (this.x = this.game.camera.view.x + this.cameraOffset.x, this.y = this.game.camera.view.y + this.cameraOffset.y), this._cache.dirty = !1, this._cache.x = this.x, this._cache.y = this.y, (this.position.x != this._cache.x || this.position.y != this._cache.y) && (this.position.x = this._cache.x, this.position.y = this._cache.y, this._cache.dirty = !0))
    }, i.Text.prototype.destroy = function() {
      this.group && this.group.remove(this), this.canvas.parentNode ? this.canvas.parentNode.removeChild(this.canvas) : (this.canvas = null, this.context = null), this.exists = !1, this.group = null
    }, Object.defineProperty(i.Text.prototype, "angle", {
      get: function() {
        return i.Math.radToDeg(this.rotation)
      },
      set: function(t) {
        this.rotation = i.Math.degToRad(t)
      }
    }), Object.defineProperty(i.Text.prototype, "x", {
      get: function() {
        return this.position.x
      },
      set: function(t) {
        this.position.x = t
      }
    }), Object.defineProperty(i.Text.prototype, "y", {
      get: function() {
        return this.position.y
      },
      set: function(t) {
        this.position.y = t
      }
    }), Object.defineProperty(i.Text.prototype, "content", {
      get: function() {
        return this._text
      },
      set: function(t) {
        t !== this._text && (this._text = t, this.setText(t))
      }
    }), Object.defineProperty(i.Text.prototype, "font", {
      get: function() {
        return this._style
      },
      set: function(t) {
        t !== this._style && (this._style = t, this.setStyle(t))
      }
    }), i.BitmapText = function(t, s, n, r, o) {
      s = s || 0, n = n || 0, r = r || "", o = o || "", this.game = t, this.exists = !0, this.alive = !0, this.group = null, this.name = "", this.type = i.BITMAPTEXT, e.BitmapText.call(this, r, o), this.position.x = s, this.position.y = n, this.anchor = new i.Point, this.scale = new i.Point(1, 1), this._cache = {
        dirty: !1,
        a00: 1,
        a01: 0,
        a02: s,
        a10: 0,
        a11: 1,
        a12: n,
        id: 1,
        x: -1,
        y: -1,
        scaleX: 1,
        scaleY: 1
      }, this._cache.x = this.x, this._cache.y = this.y
    }, i.BitmapText.prototype = Object.create(e.BitmapText.prototype), i.BitmapText.prototype.constructor = i.BitmapText, i.BitmapText.prototype.update = function() {
      this.exists && (this._cache.dirty = !1, this._cache.x = this.x, this._cache.y = this.y, (this.position.x != this._cache.x || this.position.y != this._cache.y) && (this.position.x = this._cache.x, this.position.y = this._cache.y, this._cache.dirty = !0), this.pivot.x = this.anchor.x * this.width, this.pivot.y = this.anchor.y * this.height)
    }, i.BitmapText.prototype.destroy = function() {
      this.group && this.group.remove(this), this.canvas && this.canvas.parentNode ? this.canvas.parentNode.removeChild(this.canvas) : (this.canvas = null, this.context = null), this.exists = !1, this.group = null
    }, Object.defineProperty(i.BitmapText.prototype, "angle", {
      get: function() {
        return i.Math.radToDeg(this.rotation)
      },
      set: function(t) {
        this.rotation = i.Math.degToRad(t)
      }
    }), Object.defineProperty(i.BitmapText.prototype, "x", {
      get: function() {
        return this.position.x
      },
      set: function(t) {
        this.position.x = t
      }
    }), Object.defineProperty(i.BitmapText.prototype, "y", {
      get: function() {
        return this.position.y
      },
      set: function(t) {
        this.position.y = t
      }
    }), i.Button = function(t, e, s, n, r, o, a, h, l, c) {
      e = e || 0, s = s || 0, n = n || null, r = r || null, o = o || this, i.Sprite.call(this, t, e, s, n, h), this.type = i.BUTTON, this._onOverFrameName = null, this._onOutFrameName = null, this._onDownFrameName = null, this._onUpFrameName = null, this._onOverFrameID = null, this._onOutFrameID = null, this._onDownFrameID = null, this._onUpFrameID = null, this.onOverSound = null, this.onOutSound = null, this.onDownSound = null, this.onUpSound = null, this.onOverSoundMarker = "", this.onOutSoundMarker = "", this.onDownSoundMarker = "", this.onUpSoundMarker = "", this.onInputOver = new i.Signal, this.onInputOut = new i.Signal, this.onInputDown = new i.Signal, this.onInputUp = new i.Signal, this.freezeFrames = !1, this.forceOut = !1, this.setFrames(a, h, l, c), null !== r && this.onInputUp.add(r, o), this.input.start(0, !0), this.events.onInputOver.add(this.onInputOverHandler, this), this.events.onInputOut.add(this.onInputOutHandler, this), this.events.onInputDown.add(this.onInputDownHandler, this), this.events.onInputUp.add(this.onInputUpHandler, this)
    }, i.Button.prototype = Object.create(i.Sprite.prototype), i.Button.prototype = i.Utils.extend(!0, i.Button.prototype, i.Sprite.prototype, e.Sprite.prototype), i.Button.prototype.constructor = i.Button, i.Button.prototype.clearFrames = function() {
      this._onOverFrameName = null, this._onOverFrameID = null, this._onOutFrameName = null, this._onOutFrameID = null, this._onDownFrameName = null, this._onDownFrameID = null, this._onUpFrameName = null, this._onUpFrameID = null
    }, i.Button.prototype.setFrames = function(t, e, i, s) {
      this.clearFrames(), null !== t && ("string" == typeof t ? (this._onOverFrameName = t, this.input.pointerOver() && (this.frameName = t)) : (this._onOverFrameID = t, this.input.pointerOver() && (this.frame = t))), null !== e && ("string" == typeof e ? (this._onOutFrameName = e, this.input.pointerOver() === !1 && (this.frameName = e)) : (this._onOutFrameID = e, this.input.pointerOver() === !1 && (this.frame = e))), null !== i && ("string" == typeof i ? (this._onDownFrameName = i, this.input.pointerDown() && (this.frameName = i)) : (this._onDownFrameID = i, this.input.pointerDown() && (this.frame = i))), null !== s && ("string" == typeof s ? (this._onUpFrameName = s, this.input.pointerUp() && (this.frameName = s)) : (this._onUpFrameID = s, this.input.pointerUp() && (this.frame = s)))
    }, i.Button.prototype.setSounds = function(t, e, i, s, n, r, o, a) {
      this.setOverSound(t, e), this.setOutSound(n, r), this.setDownSound(i, s), this.setUpSound(o, a)
    }, i.Button.prototype.setOverSound = function(t, e) {
      this.onOverSound = null, this.onOverSoundMarker = "", t instanceof i.Sound && (this.onOverSound = t), "string" == typeof e && (this.onOverSoundMarker = e)
    }, i.Button.prototype.setOutSound = function(t, e) {
      this.onOutSound = null, this.onOutSoundMarker = "", t instanceof i.Sound && (this.onOutSound = t), "string" == typeof e && (this.onOutSoundMarker = e)
    }, i.Button.prototype.setDownSound = function(t, e) {
      this.onDownSound = null, this.onDownSoundMarker = "", t instanceof i.Sound && (this.onDownSound = t), "string" == typeof e && (this.onDownSoundMarker = e)
    }, i.Button.prototype.setUpSound = function(t, e) {
      this.onUpSound = null, this.onUpSoundMarker = "", t instanceof i.Sound && (this.onUpSound = t), "string" == typeof e && (this.onUpSoundMarker = e)
    }, i.Button.prototype.onInputOverHandler = function(t, e) {
      this.freezeFrames === !1 && this.setState(1), this.onOverSound && this.onOverSound.play(this.onOverSoundMarker), this.onInputOver && this.onInputOver.dispatch(this, e)
    }, i.Button.prototype.onInputOutHandler = function(t, e) {
      this.freezeFrames === !1 && this.setState(2), this.onOutSound && this.onOutSound.play(this.onOutSoundMarker), this.onInputOut && this.onInputOut.dispatch(this, e)
    }, i.Button.prototype.onInputDownHandler = function(t, e) {
      this.freezeFrames === !1 && this.setState(3), this.onDownSound && this.onDownSound.play(this.onDownSoundMarker), this.onInputDown && this.onInputDown.dispatch(this, e)
    }, i.Button.prototype.onInputUpHandler = function(t, e, i) {
      this.onUpSound && this.onUpSound.play(this.onUpSoundMarker), this.onInputUp && this.onInputUp.dispatch(this, e, i), this.freezeFrames || this.setState(this.forceOut ? 2 : this._onUpFrameName || this._onUpFrameID ? 4 : i ? 1 : 2)
    }, i.Button.prototype.setState = function(t) {
      1 === t ? null != this._onOverFrameName ? this.frameName = this._onOverFrameName : null != this._onOverFrameID && (this.frame = this._onOverFrameID) : 2 === t ? null != this._onOutFrameName ? this.frameName = this._onOutFrameName : null != this._onOutFrameID && (this.frame = this._onOutFrameID) : 3 === t ? null != this._onDownFrameName ? this.frameName = this._onDownFrameName : null != this._onDownFrameID && (this.frame = this._onDownFrameID) : 4 === t && (null != this._onUpFrameName ? this.frameName = this._onUpFrameName : null != this._onUpFrameID && (this.frame = this._onUpFrameID))
    }, i.Graphics = function(t, s, n) {
      this.game = t, e.Graphics.call(this), this.type = i.GRAPHICS, this.position.x = s, this.position.y = n
    }, i.Graphics.prototype = Object.create(e.Graphics.prototype), i.Graphics.prototype.constructor = i.Graphics, i.Graphics.prototype.destroy = function() {
      this.clear(), this.group && this.group.remove(this), this.game = null
    }, i.Graphics.prototype.drawPolygon = function(t) {
      this.moveTo(t.points[0].x, t.points[0].y);
      for (var e = 1; e < t.points.length; e += 1) this.lineTo(t.points[e].x, t.points[e].y);
      this.lineTo(t.points[0].x, t.points[0].y)
    }, Object.defineProperty(i.Graphics.prototype, "angle", {
      get: function() {
        return i.Math.wrapAngle(i.Math.radToDeg(this.rotation))
      },
      set: function(t) {
        this.rotation = i.Math.degToRad(i.Math.wrapAngle(t))
      }
    }), Object.defineProperty(i.Graphics.prototype, "x", {
      get: function() {
        return this.position.x
      },
      set: function(t) {
        this.position.x = t
      }
    }), Object.defineProperty(i.Graphics.prototype, "y", {
      get: function() {
        return this.position.y
      },
      set: function(t) {
        this.position.y = t
      }
    }), i.RenderTexture = function(t, s, n, r) {
      this.game = t, this.name = s, e.EventTarget.call(this), this.width = n || 100, this.height = r || 100, this.indetityMatrix = e.mat3.create(), this.frame = new e.Rectangle(0, 0, this.width, this.height), this.type = i.RENDERTEXTURE, this._tempPoint = {
        x: 0,
        y: 0
      }, e.gl ? this.initWebGL() : this.initCanvas()
    }, i.RenderTexture.prototype = Object.create(e.Texture.prototype), i.RenderTexture.prototype.constructor = e.RenderTexture, i.RenderTexture.prototype.render = function(t, s, n, r) {
      "undefined" == typeof s && (s = !1), "undefined" == typeof n && (n = !1), "undefined" == typeof r && (r = !1), t instanceof i.Group && (t = t._container), e.gl ? this.renderWebGL(t, s, n, r) : this.renderCanvas(t, s, n, r)
    }, i.RenderTexture.prototype.renderXY = function(t, e, i, s, n) {
      this._tempPoint.x = e, this._tempPoint.y = i, this.render(t, this._tempPoint, s, n)
    }, i.RenderTexture.prototype.initWebGL = function() {
      var t = e.gl;
      this.glFramebuffer = t.createFramebuffer(), t.bindFramebuffer(t.FRAMEBUFFER, this.glFramebuffer), this.glFramebuffer.width = this.width, this.glFramebuffer.height = this.height, this.baseTexture = new e.BaseTexture, this.baseTexture.width = this.width, this.baseTexture.height = this.height, this.baseTexture._glTexture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this.baseTexture._glTexture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.width, this.height, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), this.baseTexture.isRender = !0, t.bindFramebuffer(t.FRAMEBUFFER, this.glFramebuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.baseTexture._glTexture, 0), this.projection = new e.Point(this.width / 2, -this.height / 2)
    }, i.RenderTexture.prototype.resize = function(t, i) {
      if (this.width = t, this.height = i, e.gl) {
        this.projection.x = this.width / 2, this.projection.y = -this.height / 2;
        var s = e.gl;
        s.bindTexture(s.TEXTURE_2D, this.baseTexture._glTexture), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, this.width, this.height, 0, s.RGBA, s.UNSIGNED_BYTE, null)
      } else this.frame.width = this.width, this.frame.height = this.height, this.renderer.resize(this.width, this.height)
    }, i.RenderTexture.prototype.initCanvas = function() {
      this.renderer = new e.CanvasRenderer(this.width, this.height, null, 0), this.baseTexture = new e.BaseTexture(this.renderer.view), this.frame = new e.Rectangle(0, 0, this.width, this.height)
    }, i.RenderTexture.prototype.renderWebGL = function(t, i, s) {
      var n = e.gl;
      n.colorMask(!0, !0, !0, !0), n.viewport(0, 0, this.width, this.height), n.bindFramebuffer(n.FRAMEBUFFER, this.glFramebuffer), s && (n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT));
      var r = t.children,
        o = t.worldTransform;
      t.worldTransform = e.mat3.create(), t.worldTransform[4] = -1, t.worldTransform[5] = -2 * this.projection.y, i && (t.worldTransform[2] = i.x, t.worldTransform[5] -= i.y), e.visibleCount++, t.vcount = e.visibleCount;
      for (var a = 0, h = r.length; h > a; a++) r[a].updateTransform();
      var l = t.__renderGroup;
      l ? t == l.root ? l.render(this.projection, this.glFramebuffer) : l.renderSpecific(t, this.projection, this.glFramebuffer) : (this.renderGroup || (this.renderGroup = new e.WebGLRenderGroup(n)), this.renderGroup.setRenderable(t), this.renderGroup.render(this.projection, this.glFramebuffer)), t.worldTransform = o
    }, i.RenderTexture.prototype.renderCanvas = function(t, i, s, n) {
      var r = t.children;
      t.worldTransform = e.mat3.create(), i && (t.worldTransform[2] = i.x, t.worldTransform[5] = i.y);
      for (var o = 0, a = r.length; a > o; o++) r[o].updateTransform();
      s && this.renderer.context.clearRect(0, 0, this.width, this.height), this.renderer.renderDisplayObject(t, n), this.renderer.context.setTransform(1, 0, 0, 1, 0, 0)
    }, i.Canvas = {
      create: function(t, e, i) {
        t = t || 256, e = e || 256;
        var s = document.createElement("canvas");
        return "string" == typeof i && (s.id = i), s.width = t, s.height = e, s.style.display = "block", s
      },
      getOffset: function(t, e) {
        e = e || new i.Point;
        var s = t.getBoundingClientRect(),
          n = t.clientTop || document.body.clientTop || 0,
          r = t.clientLeft || document.body.clientLeft || 0,
          o = 0,
          a = 0;
        return "CSS1Compat" === document.compatMode ? (o = window.pageYOffset || document.documentElement.scrollTop || t.scrollTop || 0, a = window.pageXOffset || document.documentElement.scrollLeft || t.scrollLeft || 0) : (o = window.pageYOffset || document.body.scrollTop || t.scrollTop || 0, a = window.pageXOffset || document.body.scrollLeft || t.scrollLeft || 0), e.x = s.left + a - r, e.y = s.top + o - n, e
      },
      getAspectRatio: function(t) {
        return t.width / t.height
      },
      setBackgroundColor: function(t, e) {
        return e = e || "rgb(0,0,0)", t.style.backgroundColor = e, t
      },
      setTouchAction: function(t, e) {
        return e = e || "none", t.style.msTouchAction = e, t.style["ms-touch-action"] = e, t.style["touch-action"] = e, t
      },
      setUserSelect: function(t, e) {
        return e = e || "none", t.style["-webkit-touch-callout"] = e, t.style["-webkit-user-select"] = e, t.style["-khtml-user-select"] = e, t.style["-moz-user-select"] = e, t.style["-ms-user-select"] = e, t.style["user-select"] = e, t.style["-webkit-tap-highlight-color"] = "rgba(0, 0, 0, 0)", t
      },
      addToDOM: function(t, e, i) {
        var s;
        return "undefined" == typeof i && (i = !0), e && ("string" == typeof e ? s = document.getElementById(e) : "object" == typeof e && 1 === e.nodeType && (s = e)), s || (s = document.body), i && s.style && (s.style.overflow = "hidden"), s.appendChild(t), t
      },
      setTransform: function(t, e, i, s, n, r, o) {
        return t.setTransform(s, r, o, n, e, i), t
      },
      setSmoothingEnabled: function(t, e) {
        return t.imageSmoothingEnabled = e, t.mozImageSmoothingEnabled = e, t.oImageSmoothingEnabled = e, t.webkitImageSmoothingEnabled = e, t.msImageSmoothingEnabled = e, t
      },
      setImageRenderingCrisp: function(t) {
        return t.style["image-rendering"] = "optimizeSpeed", t.style["image-rendering"] = "crisp-edges", t.style["image-rendering"] = "-moz-crisp-edges", t.style["image-rendering"] = "-webkit-optimize-contrast", t.style["image-rendering"] = "optimize-contrast", t.style.msInterpolationMode = "nearest-neighbor", t
      },
      setImageRenderingBicubic: function(t) {
        return t.style["image-rendering"] = "auto", t.style.msInterpolationMode = "bicubic", t
      }
    }, i.StageScaleMode = function(t, e, s) {
      this.game = t, this.width = e, this.height = s, this.minWidth = null, this.maxWidth = null, this.minHeight = null, this.maxHeight = null, this._startHeight = 0, this.forceLandscape = !1, this.forcePortrait = !1, this.incorrectOrientation = !1, this.pageAlignHorizontally = !1, this.pageAlignVertically = !1, this._width = 0, this._height = 0, this.maxIterations = 5, this.orientationSprite = null, this.enterLandscape = new i.Signal, this.enterPortrait = new i.Signal, this.enterIncorrectOrientation = new i.Signal, this.leaveIncorrectOrientation = new i.Signal, this.hasResized = new i.Signal, this.orientation = window.orientation ? window.orientation : window.outerWidth > window.outerHeight ? 90 : 0, this.scaleFactor = new i.Point(1, 1), this.scaleFactorInversed = new i.Point(1, 1), this.margin = new i.Point(0, 0), this.aspectRatio = 0, this.event = null;
      var n = this;
      window.addEventListener("orientationchange", function(t) {
        return n.checkOrientation(t)
      }, !1), window.addEventListener("resize", function(t) {
        return n.checkResize(t)
      }, !1), document.addEventListener("webkitfullscreenchange", function(t) {
        return n.fullScreenChange(t)
      }, !1), document.addEventListener("mozfullscreenchange", function(t) {
        return n.fullScreenChange(t)
      }, !1), document.addEventListener("fullscreenchange", function(t) {
        return n.fullScreenChange(t)
      }, !1)
    }, i.StageScaleMode.EXACT_FIT = 0, i.StageScaleMode.NO_SCALE = 1, i.StageScaleMode.SHOW_ALL = 2, i.StageScaleMode.prototype = {
      startFullScreen: function(t) {
        if (!this.isFullScreen) {
          "undefined" != typeof t && i.Canvas.setSmoothingEnabled(this.game.context, t);
          var e = this.game.canvas;
          this._width = this.width, this._height = this.height, e.requestFullScreen ? e.requestFullScreen() : e.mozRequestFullScreen ? e.parentNode.mozRequestFullScreen() : e.webkitRequestFullScreen && e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
        }
      },
      stopFullScreen: function() {
        document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
      },
      fullScreenChange: function(t) {
        this.event = t, this.isFullScreen ? this.game.stage.fullScreenScaleMode === i.StageScaleMode.EXACT_FIT ? (this.game.stage.canvas.style.width = "100%", this.game.stage.canvas.style.height = "100%", this.setMaximum(), this.game.input.scale.setTo(this.game.width / this.width, this.game.height / this.height), this.aspectRatio = this.width / this.height, this.scaleFactor.x = this.game.width / this.width, this.scaleFactor.y = this.game.height / this.height) : this.game.stage.fullScreenScaleMode === i.StageScaleMode.SHOW_ALL && (this.game.stage.scale.setShowAll(), this.game.stage.scale.refresh()) : (this.game.stage.canvas.style.width = this.game.width + "px", this.game.stage.canvas.style.height = this.game.height + "px", this.width = this._width, this.height = this._height, this.game.input.scale.setTo(this.game.width / this.width, this.game.height / this.height), this.aspectRatio = this.width / this.height, this.scaleFactor.x = this.game.width / this.width, this.scaleFactor.y = this.game.height / this.height)
      },
      forceOrientation: function(t, i, s) {
        "undefined" == typeof i && (i = !1), this.forceLandscape = t, this.forcePortrait = i, "undefined" != typeof s && ((null == s || this.game.cache.checkImageKey(s) === !1) && (s = "__default"), this.orientationSprite = new e.Sprite(e.TextureCache[s]), this.orientationSprite.anchor.x = .5, this.orientationSprite.anchor.y = .5, this.orientationSprite.position.x = this.game.width / 2, this.orientationSprite.position.y = this.game.height / 2, this.checkOrientationState(), this.incorrectOrientation ? (this.orientationSprite.visible = !0, this.game.world.visible = !1) : (this.orientationSprite.visible = !1, this.game.world.visible = !0), this.game.stage._stage.addChild(this.orientationSprite))
      },
      checkOrientationState: function() {
        this.incorrectOrientation ? (this.forceLandscape && window.innerWidth > window.innerHeight || this.forcePortrait && window.innerHeight > window.innerWidth) && (this.game.paused = !1, this.incorrectOrientation = !1, this.leaveIncorrectOrientation.dispatch(), this.orientationSprite && (this.orientationSprite.visible = !1, this.game.world.visible = !0), this.refresh()) : (this.forceLandscape && window.innerWidth < window.innerHeight || this.forcePortrait && window.innerHeight < window.innerWidth) && (this.game.paused = !0, this.incorrectOrientation = !0, this.enterIncorrectOrientation.dispatch(), this.orientationSprite && this.orientationSprite.visible === !1 && (this.orientationSprite.visible = !0, this.game.world.visible = !1), this.refresh())
      },
      checkOrientation: function(t) {
        this.event = t, this.orientation = window.orientation, this.isLandscape ? this.enterLandscape.dispatch(this.orientation, !0, !1) : this.enterPortrait.dispatch(this.orientation, !1, !0), this.game.stage.scaleMode !== i.StageScaleMode.NO_SCALE && this.refresh()
      },
      checkResize: function(t) {
        this.event = t, this.orientation = window.outerWidth > window.outerHeight ? 90 : 0, this.isLandscape ? this.enterLandscape.dispatch(this.orientation, !0, !1) : this.enterPortrait.dispatch(this.orientation, !1, !0), this.game.stage.scaleMode !== i.StageScaleMode.NO_SCALE && this.refresh(), this.checkOrientationState()
      },
      refresh: function() {
        if (this.game.device.iPad === !1 && this.game.device.webApp === !1 && this.game.device.desktop === !1 && (this.game.device.android && this.game.device.chrome === !1 ? window.scrollTo(0, 1) : window.scrollTo(0, 0)), null == this._check && this.maxIterations > 0) {
          this._iterations = this.maxIterations;
          var t = this;
          this._check = window.setInterval(function() {
            return t.setScreenSize()
          }, 10), this.setScreenSize()
        }
      },
      setScreenSize: function(t) {
        "undefined" == typeof t && (t = !1), this.game.device.iPad === !1 && this.game.device.webApp === !1 && this.game.device.desktop === !1 && (this.game.device.android && this.game.device.chrome === !1 ? window.scrollTo(0, 1) : window.scrollTo(0, 0)), this._iterations--, (t || window.innerHeight > this._startHeight || this._iterations < 0) && (document.documentElement.style.minHeight = window.innerHeight + "px", this.incorrectOrientation === !0 ? this.setMaximum() : this.isFullScreen ? this.game.stage.fullScreenScaleMode == i.StageScaleMode.EXACT_FIT ? this.setExactFit() : this.game.stage.fullScreenScaleMode == i.StageScaleMode.SHOW_ALL && this.setShowAll() : this.game.stage.scaleMode == i.StageScaleMode.EXACT_FIT ? this.setExactFit() : this.game.stage.scaleMode == i.StageScaleMode.SHOW_ALL && this.setShowAll(), this.setSize(), clearInterval(this._check), this._check = null)
      },
      setSize: function() {
        this.incorrectOrientation === !1 && (this.maxWidth && this.width > this.maxWidth && (this.width = this.maxWidth), this.maxHeight && this.height > this.maxHeight && (this.height = this.maxHeight), this.minWidth && this.width < this.minWidth && (this.width = this.minWidth), this.minHeight && this.height < this.minHeight && (this.height = this.minHeight)), this.game.canvas.style.width = this.width + "px", this.game.canvas.style.height = this.height + "px", this.game.input.scale.setTo(this.game.width / this.width, this.game.height / this.height), this.pageAlignHorizontally && (this.width < window.innerWidth && this.incorrectOrientation === !1 ? (this.margin.x = Math.round((window.innerWidth - this.width) / 2), this.game.canvas.style.marginLeft = this.margin.x + "px") : (this.margin.x = 0, this.game.canvas.style.marginLeft = "0px")), this.pageAlignVertically && (this.height < window.innerHeight && this.incorrectOrientation === !1 ? (this.margin.y = Math.round((window.innerHeight - this.height) / 2), this.game.canvas.style.marginTop = this.margin.y + "px") : (this.margin.y = 0, this.game.canvas.style.marginTop = "0px")), i.Canvas.getOffset(this.game.canvas, this.game.stage.offset), this.aspectRatio = this.width / this.height, this.scaleFactor.x = this.game.width / this.width, this.scaleFactor.y = this.game.height / this.height, this.scaleFactorInversed.x = this.width / this.game.width, this.scaleFactorInversed.y = this.height / this.game.height, this.hasResized.dispatch(this.width, this.height), this.checkOrientationState()
      },
      setMaximum: function() {
        this.width = window.innerWidth, this.height = window.innerHeight
      },
      setShowAll: function() {
        var t = Math.min(window.innerHeight / this.game.height, window.innerWidth / this.game.width);
        this.width = Math.round(this.game.width * t), this.height = Math.round(this.game.height * t)
      },
      setExactFit: function() {
        var t = window.innerWidth,
          e = window.innerHeight;
        this.width = this.maxWidth && t > this.maxWidth ? this.maxWidth : t, this.height = this.maxHeight && e > this.maxHeight ? this.maxHeight : e
      }
    }, i.StageScaleMode.prototype.constructor = i.StageScaleMode, Object.defineProperty(i.StageScaleMode.prototype, "isFullScreen", {
      get: function() {
        return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement
      }
    }), Object.defineProperty(i.StageScaleMode.prototype, "isPortrait", {
      get: function() {
        return 0 === this.orientation || 180 == this.orientation
      }
    }), Object.defineProperty(i.StageScaleMode.prototype, "isLandscape", {
      get: function() {
        return 90 === this.orientation || -90 === this.orientation
      }
    }), i.Device = function() {
      this.patchAndroidClearRectBug = !1, this.desktop = !1, this.iOS = !1, this.cocoonJS = !1, this.ejecta = !1, this.android = !1, this.chromeOS = !1, this.linux = !1, this.macOS = !1, this.windows = !1, this.canvas = !1, this.file = !1, this.fileSystem = !1, this.localStorage = !1, this.webGL = !1, this.worker = !1, this.touch = !1, this.mspointer = !1, this.css3D = !1, this.pointerLock = !1, this.typedArray = !1, this.vibration = !1, this.quirksMode = !1, this.arora = !1, this.chrome = !1, this.epiphany = !1, this.firefox = !1, this.ie = !1, this.ieVersion = 0, this.trident = !1, this.tridentVersion = 0, this.mobileSafari = !1, this.midori = !1, this.opera = !1, this.safari = !1, this.webApp = !1, this.silk = !1, this.audioData = !1, this.webAudio = !1, this.ogg = !1, this.opus = !1, this.mp3 = !1, this.wav = !1, this.m4a = !1, this.webm = !1, this.iPhone = !1, this.iPhone4 = !1, this.iPad = !1, this.pixelRatio = 0, this.littleEndian = !1, this._checkAudio(), this._checkBrowser(), this._checkCSS3D(), this._checkDevice(), this._checkFeatures(), this._checkOS()
    }, i.Device.prototype = {
      _checkOS: function() {
        var t = navigator.userAgent;
        /Android/.test(t) ? this.android = !0 : /CrOS/.test(t) ? this.chromeOS = !0 : /iP[ao]d|iPhone/i.test(t) ? this.iOS = !0 : /Linux/.test(t) ? this.linux = !0 : /Mac OS/.test(t) ? this.macOS = !0 : /Windows/.test(t) && (this.windows = !0), (this.windows || this.macOS || this.linux && this.silk === !1) && (this.desktop = !0)
      },
      _checkFeatures: function() {
        this.canvas = !!window.CanvasRenderingContext2D;
        try {
          this.localStorage = !!localStorage.getItem
        } catch (t) {
          this.localStorage = !1
        }
        this.file = !!(window.File && window.FileReader && window.FileList && window.Blob), this.fileSystem = !!window.requestFileSystem, this.webGL = function() {
          try {
            var t = document.createElement("canvas");
            return !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
          } catch (e) {
            return !1
          }
        }(), this.webGL = null === this.webGL || this.webGL === !1 ? !1 : !0, this.worker = !!window.Worker, ("ontouchstart" in document.documentElement || window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 1) && (this.touch = !0), (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && (this.mspointer = !0), this.pointerLock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document, this.quirksMode = "CSS1Compat" === document.compatMode ? !1 : !0
      },
      _checkBrowser: function() {
        var t = navigator.userAgent;
        /Arora/.test(t) ? this.arora = !0 : /Chrome/.test(t) ? this.chrome = !0 : /Epiphany/.test(t) ? this.epiphany = !0 : /Firefox/.test(t) ? this.firefox = !0 : /Mobile Safari/.test(t) ? this.mobileSafari = !0 : /MSIE (\d+\.\d+);/.test(t) ? (this.ie = !0, this.ieVersion = parseInt(RegExp.$1, 10)) : /Midori/.test(t) ? this.midori = !0 : /Opera/.test(t) ? this.opera = !0 : /Safari/.test(t) ? this.safari = !0 : /Silk/.test(t) ? this.silk = !0 : /Trident\/(\d+\.\d+);/.test(t) && (this.ie = !0, this.trident = !0, this.tridentVersion = parseInt(RegExp.$1, 10)), navigator.standalone && (this.webApp = !0), navigator.isCocoonJS && (this.cocoonJS = !0), "undefined" != typeof window.ejecta && (this.ejecta = !0)
      },
      _checkAudio: function() {
        this.audioData = !!window.Audio, this.webAudio = !(!window.webkitAudioContext && !window.AudioContext);
        var t = document.createElement("audio"),
          e = !1;
        try {
          (e = !!t.canPlayType) && (t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") && (this.ogg = !0), t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, "") && (this.opus = !0), t.canPlayType("audio/mpeg;").replace(/^no$/, "") && (this.mp3 = !0), t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") && (this.wav = !0), (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;").replace(/^no$/, "")) && (this.m4a = !0), t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") && (this.webm = !0))
        } catch (i) {}
      },
      _checkDevice: function() {
        this.pixelRatio = window.devicePixelRatio || 1, this.iPhone = -1 != navigator.userAgent.toLowerCase().indexOf("iphone"), this.iPhone4 = 2 == this.pixelRatio && this.iPhone, this.iPad = -1 != navigator.userAgent.toLowerCase().indexOf("ipad"), "undefined" != typeof Int8Array ? (this.littleEndian = new Int8Array(new Int16Array([1]).buffer)[0] > 0, this.typedArray = !0) : (this.littleEndian = !1, this.typedArray = !1), navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate, navigator.vibrate && (this.vibration = !0)
      },
      _checkCSS3D: function() {
        var t, e = document.createElement("p"),
          i = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform"
          };
        document.body.insertBefore(e, null);
        for (var s in i) void 0 !== e.style[s] && (e.style[s] = "translate3d(1px,1px,1px)", t = window.getComputedStyle(e).getPropertyValue(i[s]));
        document.body.removeChild(e), this.css3D = void 0 !== t && t.length > 0 && "none" !== t
      },
      canPlayAudio: function(t) {
        return "mp3" == t && this.mp3 ? !0 : "ogg" == t && (this.ogg || this.opus) ? !0 : "m4a" == t && this.m4a ? !0 : "wav" == t && this.wav ? !0 : "webm" == t && this.webm ? !0 : !1
      },
      isConsoleOpen: function() {
        return window.console && window.console.firebug ? !0 : window.console ? (console.profile(), console.profileEnd(), console.clear && console.clear(), console.profiles.length > 0) : !1
      }
    }, i.Device.prototype.constructor = i.Device, i.RequestAnimationFrame = function(t) {
      this.game = t, this.isRunning = !1;
      for (var e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; i++) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"];
      this._isSetTimeOut = !1, this._onLoop = null, this._timeOutID = null
    }, i.RequestAnimationFrame.prototype = {
      start: function() {
        this.isRunning = !0;
        var t = this;
        window.requestAnimationFrame ? (this._isSetTimeOut = !1, this._onLoop = function(e) {
          return t.updateRAF(e)
        }, this._timeOutID = window.requestAnimationFrame(this._onLoop)) : (this._isSetTimeOut = !0, this._onLoop = function() {
          return t.updateSetTimeout()
        }, this._timeOutID = window.setTimeout(this._onLoop, 0))
      },
      updateRAF: function(t) {
        this.game.update(t), this._timeOutID = window.requestAnimationFrame(this._onLoop)
      },
      updateSetTimeout: function() {
        this.game.update(Date.now()), this._timeOutID = window.setTimeout(this._onLoop, this.game.time.timeToCall)
      },
      stop: function() {
        this._isSetTimeOut ? clearTimeout(this._timeOutID) : window.cancelAnimationFrame(this._timeOutID), this.isRunning = !1
      },
      isSetTimeOut: function() {
        return this._isSetTimeOut
      },
      isRAF: function() {
        return this._isSetTimeOut === !1
      }
    }, i.RequestAnimationFrame.prototype.constructor = i.RequestAnimationFrame, i.RandomDataGenerator = function(t) {
      "undefined" == typeof t && (t = []), this.c = 1, this.s0 = 0, this.s1 = 0, this.s2 = 0, this.sow(t)
    }, i.RandomDataGenerator.prototype = {
      rnd: function() {
        var t = 2091639 * this.s0 + 2.3283064365386963e-10 * this.c;
        return this.c = 0 | t, this.s0 = this.s1, this.s1 = this.s2, this.s2 = t - this.c, this.s2
      },
      sow: function(t) {
        "undefined" == typeof t && (t = []), this.s0 = this.hash(" "), this.s1 = this.hash(this.s0), this.s2 = this.hash(this.s1), this.c = 1;
        for (var e, i = 0; e = t[i++];) this.s0 -= this.hash(e), this.s0 += ~~(this.s0 < 0), this.s1 -= this.hash(e), this.s1 += ~~(this.s1 < 0), this.s2 -= this.hash(e), this.s2 += ~~(this.s2 < 0)
      },
      hash: function(t) {
        var e, i, s;
        for (s = 4022871197, t = t.toString(), i = 0; i < t.length; i++) s += t.charCodeAt(i), e = .02519603282416938 * s, s = e >>> 0, e -= s, e *= s, s = e >>> 0, e -= s, s += 4294967296 * e;
        return 2.3283064365386963e-10 * (s >>> 0)
      },
      integer: function() {
        return 4294967296 * this.rnd.apply(this)
      },
      frac: function() {
        return this.rnd.apply(this) + 1.1102230246251565e-16 * (2097152 * this.rnd.apply(this) | 0)
      },
      real: function() {
        return this.integer() + this.frac()
      },
      integerInRange: function(t, e) {
        return Math.floor(this.realInRange(t, e))
      },
      realInRange: function(t, e) {
        return this.frac() * (e - t) + t
      },
      normal: function() {
        return 1 - 2 * this.frac()
      },
      uuid: function() {
        var t = "",
          e = "";
        for (e = t = ""; t++ < 36; e += ~t % 5 | 3 * t & 4 ? (15 ^ t ? 8 ^ this.frac() * (20 ^ t ? 16 : 4) : 4).toString(16) : "-");
        return e
      },
      pick: function(t) {
        return t[this.integerInRange(0, t.length)]
      },
      weightedPick: function(t) {
        return t[~~(Math.pow(this.frac(), 2) * t.length)]
      },
      timestamp: function(t, e) {
        return this.realInRange(t || 9466848e5, e || 1577862e6)
      },
      angle: function() {
        return this.integerInRange(-180, 180)
      }
    }, i.RandomDataGenerator.prototype.constructor = i.RandomDataGenerator, i.Math = {
      PI2: 2 * Math.PI,
      fuzzyEqual: function(t, e, i) {
        return "undefined" == typeof i && (i = 1e-4), Math.abs(t - e) < i
      },
      fuzzyLessThan: function(t, e, i) {
        return "undefined" == typeof i && (i = 1e-4), e + i > t
      },
      fuzzyGreaterThan: function(t, e, i) {
        return "undefined" == typeof i && (i = 1e-4), t > e - i
      },
      fuzzyCeil: function(t, e) {
        return "undefined" == typeof e && (e = 1e-4), Math.ceil(t - e)
      },
      fuzzyFloor: function(t, e) {
        return "undefined" == typeof e && (e = 1e-4), Math.floor(t + e)
      },
      average: function() {
        for (var t = [], e = 0; e < arguments.length - 0; e++) t[e] = arguments[e + 0];
        for (var i = 0, s = 0; s < t.length; s++) i += t[s];
        return i / t.length
      },
      truncate: function(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t)
      },
      shear: function(t) {
        return t % 1
      },
      snapTo: function(t, e, i) {
        return "undefined" == typeof i && (i = 0), 0 === e ? t : (t -= i, t = e * Math.round(t / e), i + t)
      },
      snapToFloor: function(t, e, i) {
        return "undefined" == typeof i && (i = 0), 0 === e ? t : (t -= i, t = e * Math.floor(t / e), i + t)
      },
      snapToCeil: function(t, e, i) {
        return "undefined" == typeof i && (i = 0), 0 === e ? t : (t -= i, t = e * Math.ceil(t / e), i + t)
      },
      snapToInArray: function(t, e, i) {
        if ("undefined" == typeof i && (i = !0), i && e.sort(), t < e[0]) return e[0];
        for (var s = 1; e[s] < t;) s++;
        var n = e[s - 1],
          r = s < e.length ? e[s] : Number.POSITIVE_INFINITY;
        return t - n >= r - t ? r : n
      },
      roundTo: function(t, e, i) {
        "undefined" == typeof e && (e = 0), "undefined" == typeof i && (i = 10);
        var s = Math.pow(i, -e);
        return Math.round(t * s) / s
      },
      floorTo: function(t, e, i) {
        "undefined" == typeof e && (e = 0), "undefined" == typeof i && (i = 10);
        var s = Math.pow(i, -e);
        return Math.floor(t * s) / s
      },
      ceilTo: function(t, e, i) {
        "undefined" == typeof e && (e = 0), "undefined" == typeof i && (i = 10);
        var s = Math.pow(i, -e);
        return Math.ceil(t * s) / s
      },
      interpolateFloat: function(t, e, i) {
        return (e - t) * i + t
      },
      angleBetween: function(t, e, i, s) {
        return Math.atan2(s - e, i - t)
      },
      reverseAngle: function(t) {
        return this.normalizeAngle(t + Math.PI, !0)
      },
      normalizeAngle: function(t) {
        return t %= 2 * Math.PI, t >= 0 ? t : t + 2 * Math.PI
      },
      normalizeLatitude: function(t) {
        return Math.max(-90, Math.min(90, t))
      },
      normalizeLongitude: function(t) {
        return t % 360 == 180 ? 180 : (t %= 360, -180 > t ? t + 360 : t > 180 ? t - 360 : t)
      },
      nearestAngleBetween: function(t, e, i) {
        "undefined" == typeof i && (i = !0);
        var s = i ? Math.PI : 180;
        return t = this.normalizeAngle(t, i), e = this.normalizeAngle(e, i), -s / 2 > t && e > s / 2 && (t += 2 * s), -s / 2 > e && t > s / 2 && (e += 2 * s), e - t
      },
      interpolateAngles: function(t, e, i, s, n) {
        return "undefined" == typeof s && (s = !0), "undefined" == typeof n && (n = null), t = this.normalizeAngle(t, s), e = this.normalizeAngleToAnother(e, t, s), "function" == typeof n ? n(i, t, e - t, 1) : this.interpolateFloat(t, e, i)
      },
      chanceRoll: function(t) {
        return "undefined" == typeof t && (t = 50), 0 >= t ? !1 : t >= 100 ? !0 : 100 * Math.random() >= t ? !1 : !0
      },
      numberArray: function(t, e) {
        for (var i = [], s = t; e >= s; s++) i.push(s);
        return i
      },
      maxAdd: function(t, e, i) {
        return t += e, t > i && (t = i), t
      },
      minSub: function(t, e, i) {
        return t -= e, i > t && (t = i), t
      },
      wrap: function(t, e, i) {
        var s = i - e;
        if (0 >= s) return 0;
        var n = (t - e) % s;
        return 0 > n && (n += s), n + e
      },
      wrapValue: function(t, e, i) {
        var s;
        return t = Math.abs(t), e = Math.abs(e), i = Math.abs(i), s = (t + e) % i
      },
      randomSign: function() {
        return Math.random() > .5 ? 1 : -1
      },
      isOdd: function(t) {
        return 1 & t
      },
      isEven: function(t) {
        return 1 & t ? !1 : !0
      },
      max: function() {
        for (var t = 1, e = 0, i = arguments.length; i > t; t++) arguments[e] < arguments[t] && (e = t);
        return arguments[e]
      },
      min: function() {
        if (1 === arguments.length && "object" == typeof arguments[0]) var t = arguments[0];
        else var t = arguments;
        for (var e = 1, i = 0, s = t.length; s > e; e++) t[e] < t[i] && (i = e);
        return t[i]
      },
      max: function() {
        if (1 === arguments.length && "object" == typeof arguments[0]) var t = arguments[0];
        else var t = arguments;
        for (var e = 1, i = 0, s = t.length; s > e; e++) t[e] > t[i] && (i = e);
        return t[i]
      },
      minProperty: function(t) {
        if (2 === arguments.length && "object" == typeof arguments[1]) var e = arguments[1];
        else var e = arguments.slice(1);
        for (var i = 1, s = 0, n = e.length; n > i; i++) e[i][t] < e[s][t] && (s = i);
        return e[s][t]
      },
      maxProperty: function(t) {
        if (2 === arguments.length && "object" == typeof arguments[1]) var e = arguments[1];
        else var e = arguments.slice(1);
        for (var i = 1, s = 0, n = e.length; n > i; i++) e[i][t] > e[s][t] && (s = i);
        return e[s][t]
      },
      wrapAngle: function(t) {
        return this.wrap(t, -180, 180)
      },
      angleLimit: function(t, e, i) {
        var s = t;
        return t > i ? s = i : e > t && (s = e), s
      },
      linearInterpolation: function(t, e) {
        var i = t.length - 1,
          s = i * e,
          n = Math.floor(s);
        return 0 > e ? this.linear(t[0], t[1], s) : e > 1 ? this.linear(t[i], t[i - 1], i - s) : this.linear(t[n], t[n + 1 > i ? i : n + 1], s - n)
      },
      bezierInterpolation: function(t, e) {
        for (var i = 0, s = t.length - 1, n = 0; s >= n; n++) i += Math.pow(1 - e, s - n) * Math.pow(e, n) * t[n] * this.bernstein(s, n);
        return i
      },
      catmullRomInterpolation: function(t, e) {
        var i = t.length - 1,
          s = i * e,
          n = Math.floor(s);
        return t[0] === t[i] ? (0 > e && (n = Math.floor(s = i * (1 + e))), this.catmullRom(t[(n - 1 + i) % i], t[n], t[(n + 1) % i], t[(n + 2) % i], s - n)) : 0 > e ? t[0] - (this.catmullRom(t[0], t[0], t[1], t[1], -s) - t[0]) : e > 1 ? t[i] - (this.catmullRom(t[i], t[i], t[i - 1], t[i - 1], s - i) - t[i]) : this.catmullRom(t[n ? n - 1 : 0], t[n], t[n + 1 > i ? i : n + 1], t[n + 2 > i ? i : n + 2], s - n)
      },
      linear: function(t, e, i) {
        return (e - t) * i + t
      },
      bernstein: function(t, e) {
        return this.factorial(t) / this.factorial(e) / this.factorial(t - e)
      },
      catmullRom: function(t, e, i, s, n) {
        var r = .5 * (i - t),
          o = .5 * (s - e),
          a = n * n,
          h = n * a;
        return (2 * e - 2 * i + r + o) * h + (-3 * e + 3 * i - 2 * r - o) * a + r * n + e
      },
      difference: function(t, e) {
        return Math.abs(t - e)
      },
      getRandom: function(t, e, i) {
        if ("undefined" == typeof e && (e = 0), "undefined" == typeof i && (i = 0), null != t) {
          var s = i;
          if ((0 === s || s > t.length - e) && (s = t.length - e), s > 0) return t[e + Math.floor(Math.random() * s)]
        }
        return null
      },
      floor: function(t) {
        var e = 0 | t;
        return t > 0 ? e : e != t ? e - 1 : e
      },
      ceil: function(t) {
        var e = 0 | t;
        return t > 0 ? e != t ? e + 1 : e : e
      },
      sinCosGenerator: function(t, e, i, s) {
        "undefined" == typeof e && (e = 1), "undefined" == typeof i && (i = 1), "undefined" == typeof s && (s = 1);
        for (var n = e, r = i, o = s * Math.PI / t, a = [], h = [], l = 0; t > l; l++) r -= n * o, n += r * o, a[l] = r, h[l] = n;
        return {
          sin: h,
          cos: a,
          length: t
        }
      },
      shift: function(t) {
        var e = t.shift();
        return t.push(e), e
      },
      shuffleArray: function(t) {
        for (var e = t.length - 1; e > 0; e--) {
          var i = Math.floor(Math.random() * (e + 1)),
            s = t[e];
          t[e] = t[i], t[i] = s
        }
        return t
      },
      distance: function(t, e, i, s) {
        var n = t - i,
          r = e - s;
        return Math.sqrt(n * n + r * r)
      },
      distancePow: function(t, e, i, s, n) {
        return "undefined" == typeof n && (n = 2), Math.sqrt(Math.pow(i - t, n) + Math.pow(s - e, n))
      },
      distanceRounded: function(t, e, s, n) {
        return Math.round(i.Math.distance(t, e, s, n))
      },
      clamp: function(t, e, i) {
        return e > t ? e : t > i ? i : t
      },
      clampBottom: function(t, e) {
        return e > t ? e : t
      },
      within: function(t, e, i) {
        return Math.abs(t - e) <= i
      },
      mapLinear: function(t, e, i, s, n) {
        return s + (t - e) * (n - s) / (i - e)
      },
      smoothstep: function(t, e, i) {
        return e >= t ? 0 : t >= i ? 1 : (t = (t - e) / (i - e), t * t * (3 - 2 * t))
      },
      smootherstep: function(t, e, i) {
        return e >= t ? 0 : t >= i ? 1 : (t = (t - e) / (i - e), t * t * t * (t * (6 * t - 15) + 10))
      },
      sign: function(t) {
        return 0 > t ? -1 : t > 0 ? 1 : 0
      },
      degToRad: function() {
        var t = Math.PI / 180;
        return function(e) {
          return e * t
        }
      }(),
      radToDeg: function() {
        var t = 180 / Math.PI;
        return function(e) {
          return e * t
        }
      }()
    }, i.QuadTree = function(t, e, i, s, n, r, o) {
      this.maxObjects = n || 10, this.maxLevels = r || 4, this.level = o || 0, this.bounds = {
        x: Math.round(t),
        y: Math.round(e),
        width: i,
        height: s,
        subWidth: Math.floor(i / 2),
        subHeight: Math.floor(s / 2),
        right: Math.round(t) + Math.floor(i / 2),
        bottom: Math.round(e) + Math.floor(s / 2)
      }, this.objects = [], this.nodes = []
    }, i.QuadTree.prototype = {
      populate: function(t) {
        t.forEach(this.populateHandler, this, !0)
      },
      populateHandler: function(t) {
        t.body && t.body.checkCollision.none === !1 && t.alive && this.insert(t.body)
      },
      split: function() {
        this.level++, this.nodes[0] = new i.QuadTree(this.bounds.right, this.bounds.y, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level), this.nodes[1] = new i.QuadTree(this.bounds.x, this.bounds.y, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level), this.nodes[2] = new i.QuadTree(this.bounds.x, this.bounds.bottom, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level), this.nodes[3] = new i.QuadTree(this.bounds.right, this.bounds.bottom, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level)
      },
      insert: function(t) {
        var e, i = 0;
        if (null != this.nodes[0] && (e = this.getIndex(t), -1 !== e)) return void this.nodes[e].insert(t);
        if (this.objects.push(t), this.objects.length > this.maxObjects && this.level < this.maxLevels)
          for (null == this.nodes[0] && this.split(); i < this.objects.length;) e = this.getIndex(this.objects[i]), -1 !== e ? this.nodes[e].insert(this.objects.splice(i, 1)[0]) : i++
      },
      getIndex: function(t) {
        var e = -1;
        return t.x < this.bounds.right && t.right < this.bounds.right ? t.y < this.bounds.bottom && t.bottom < this.bounds.bottom ? e = 1 : t.y > this.bounds.bottom && (e = 2) : t.x > this.bounds.right && (t.y < this.bounds.bottom && t.bottom < this.bounds.bottom ? e = 0 : t.y > this.bounds.bottom && (e = 3)), e
      },
      retrieve: function(t) {
        var e = this.objects;
        return t.body.quadTreeIndex = this.getIndex(t.body), this.nodes[0] && (-1 !== t.body.quadTreeIndex ? e = e.concat(this.nodes[t.body.quadTreeIndex].retrieve(t)) : (e = e.concat(this.nodes[0].retrieve(t)), e = e.concat(this.nodes[1].retrieve(t)), e = e.concat(this.nodes[2].retrieve(t)), e = e.concat(this.nodes[3].retrieve(t)))), e
      },
      clear: function() {
        this.objects = [];
        for (var t = 0, e = this.nodes.length; e > t; t++) this.nodes[t] && (this.nodes[t].clear(), delete this.nodes[t])
      }
    }, i.QuadTree.prototype.constructor = i.QuadTree, i.Circle = function(t, e, i) {
      t = t || 0, e = e || 0, i = i || 0, this.x = t, this.y = e, this._diameter = i, this._radius = i > 0 ? .5 * i : 0
    }, i.Circle.prototype = {
      circumference: function() {
        return 2 * Math.PI * this._radius
      },
      setTo: function(t, e, i) {
        return this.x = t, this.y = e, this._diameter = i, this._radius = .5 * i, this
      },
      copyFrom: function(t) {
        return this.setTo(t.x, t.y, t.diameter)
      },
      copyTo: function(t) {
        return t.x = this.x, t.y = this.y, t.diameter = this._diameter, t
      },
      distance: function(t, e) {
        return "undefined" == typeof e && (e = !1), e ? i.Math.distanceRound(this.x, this.y, t.x, t.y) : i.Math.distance(this.x, this.y, t.x, t.y)
      },
      clone: function(t) {
        return "undefined" == typeof t && (t = new i.Circle), t.setTo(this.x, this.y, this.diameter)
      },
      contains: function(t, e) {
        return i.Circle.contains(this, t, e)
      },
      circumferencePoint: function(t, e, s) {
        return i.Circle.circumferencePoint(this, t, e, s)
      },
      offset: function(t, e) {
        return this.x += t, this.y += e, this
      },
      offsetPoint: function(t) {
        return this.offset(t.x, t.y)
      },
      toString: function() {
        return "[{Phaser.Circle (x=" + this.x + " y=" + this.y + " diameter=" + this.diameter + " radius=" + this.radius + ")}]"
      }
    }, i.Circle.prototype.constructor = i.Circle, Object.defineProperty(i.Circle.prototype, "diameter", {
      get: function() {
        return this._diameter
      },
      set: function(t) {
        t > 0 && (this._diameter = t, this._radius = .5 * t)
      }
    }), Object.defineProperty(i.Circle.prototype, "radius", {
      get: function() {
        return this._radius
      },
      set: function(t) {
        t > 0 && (this._radius = t, this._diameter = 2 * t)
      }
    }), Object.defineProperty(i.Circle.prototype, "left", {
      get: function() {
        return this.x - this._radius
      },
      set: function(t) {
        t > this.x ? (this._radius = 0, this._diameter = 0) : this.radius = this.x - t
      }
    }), Object.defineProperty(i.Circle.prototype, "right", {
      get: function() {
        return this.x + this._radius
      },
      set: function(t) {
        t < this.x ? (this._radius = 0, this._diameter = 0) : this.radius = t - this.x
      }
    }), Object.defineProperty(i.Circle.prototype, "top", {
      get: function() {
        return this.y - this._radius
      },
      set: function(t) {
        t > this.y ? (this._radius = 0, this._diameter = 0) : this.radius = this.y - t
      }
    }), Object.defineProperty(i.Circle.prototype, "bottom", {
      get: function() {
        return this.y + this._radius
      },
      set: function(t) {
        t < this.y ? (this._radius = 0, this._diameter = 0) : this.radius = t - this.y
      }
    }), Object.defineProperty(i.Circle.prototype, "area", {
      get: function() {
        return this._radius > 0 ? Math.PI * this._radius * this._radius : 0
      }
    }), Object.defineProperty(i.Circle.prototype, "empty", {
      get: function() {
        return 0 === this._diameter
      },
      set: function(t) {
        t === !0 && this.setTo(0, 0, 0)
      }
    }), i.Circle.contains = function(t, e, i) {
      if (e >= t.left && e <= t.right && i >= t.top && i <= t.bottom) {
        var s = (t.x - e) * (t.x - e),
          n = (t.y - i) * (t.y - i);
        return s + n <= t.radius * t.radius
      }
      return !1
    }, i.Circle.equals = function(t, e) {
      return t.x == e.x && t.y == e.y && t.diameter == e.diameter
    }, i.Circle.intersects = function(t, e) {
      return i.Math.distance(t.x, t.y, e.x, e.y) <= t.radius + e.radius
    }, i.Circle.circumferencePoint = function(t, e, s, n) {
      return "undefined" == typeof s && (s = !1), "undefined" == typeof n && (n = new i.Point), s === !0 && (e = i.Math.radToDeg(e)), n.x = t.x + t.radius * Math.cos(e), n.y = t.y + t.radius * Math.sin(e), n
    }, i.Circle.intersectsRectangle = function(t, e) {
      var i = Math.abs(t.x - e.x - e.halfWidth),
        s = e.halfWidth + t.radius;
      if (i > s) return !1;
      var n = Math.abs(t.y - e.y - e.halfHeight),
        r = e.halfHeight + t.radius;
      if (n > r) return !1;
      if (i <= e.halfWidth || n <= e.halfHeight) return !0;
      var o = i - e.halfWidth,
        a = n - e.halfHeight,
        h = o * o,
        l = a * a,
        c = t.radius * t.radius;
      return c >= h + l
    }, i.Point = function(t, e) {
      t = t || 0, e = e || 0, this.x = t, this.y = e
    }, i.Point.prototype = {
      copyFrom: function(t) {
        return this.setTo(t.x, t.y)
      },
      invert: function() {
        return this.setTo(this.y, this.x)
      },
      setTo: function(t, e) {
        return this.x = t, this.y = e, this
      },
      add: function(t, e) {
        return this.x += t, this.y += e, this
      },
      subtract: function(t, e) {
        return this.x -= t, this.y -= e, this
      },
      multiply: function(t, e) {
        return this.x *= t, this.y *= e, this
      },
      divide: function(t, e) {
        return this.x /= t, this.y /= e, this
      },
      clampX: function(t, e) {
        return this.x = i.Math.clamp(this.x, t, e), this
      },
      clampY: function(t, e) {
        return this.y = i.Math.clamp(this.y, t, e), this
      },
      clamp: function(t, e) {
        return this.x = i.Math.clamp(this.x, t, e), this.y = i.Math.clamp(this.y, t, e), this
      },
      clone: function(t) {
        return "undefined" == typeof t && (t = new i.Point), t.setTo(this.x, this.y)
      },
      copyTo: function(t) {
        return t.x = this.x, t.y = this.y, t
      },
      distance: function(t, e) {
        return i.Point.distance(this, t, e)
      },
      equals: function(t) {
        return t.x == this.x && t.y == this.y
      },
      rotate: function(t, e, s, n, r) {
        return i.Point.rotate(this, t, e, s, n, r)
      },
      getMagnitude: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
      },
      setMagnitude: function(t) {
        return this.normalize().multiply(t, t)
      },
      normalize: function() {
        if (!this.isZero()) {
          var t = this.getMagnitude();
          this.x /= t, this.y /= t
        }
        return this
      },
      isZero: function() {
        return 0 === this.x && 0 === this.y
      },
      toString: function() {
        return "[{Point (x=" + this.x + " y=" + this.y + ")}]"
      }
    }, i.Point.prototype.constructor = i.Point, i.Point.add = function(t, e, s) {
      return "undefined" == typeof s && (s = new i.Point), s.x = t.x + e.x, s.y = t.y + e.y, s
    }, i.Point.subtract = function(t, e, s) {
      return "undefined" == typeof s && (s = new i.Point), s.x = t.x - e.x, s.y = t.y - e.y, s
    }, i.Point.multiply = function(t, e, s) {
      return "undefined" == typeof s && (s = new i.Point), s.x = t.x * e.x, s.y = t.y * e.y, s
    }, i.Point.divide = function(t, e, s) {
      return "undefined" == typeof s && (s = new i.Point), s.x = t.x / e.x, s.y = t.y / e.y, s
    }, i.Point.equals = function(t, e) {
      return t.x == e.x && t.y == e.y
    }, i.Point.distance = function(t, e, s) {
      return "undefined" == typeof s && (s = !1), s ? i.Math.distanceRound(t.x, t.y, e.x, e.y) : i.Math.distance(t.x, t.y, e.x, e.y)
    }, i.Point.rotate = function(t, e, s, n, r, o) {
      return r = r || !1, o = o || null, r && (n = i.Math.degToRad(n)), null === o && (o = Math.sqrt((e - t.x) * (e - t.x) + (s - t.y) * (s - t.y))), t.setTo(e + o * Math.cos(n), s + o * Math.sin(n))
    }, i.Rectangle = function(t, e, i, s) {
      t = t || 0, e = e || 0, i = i || 0, s = s || 0, this.x = t, this.y = e, this.width = i, this.height = s
    }, i.Rectangle.prototype = {
      offset: function(t, e) {
        return this.x += t, this.y += e, this
      },
      offsetPoint: function(t) {
        return this.offset(t.x, t.y)
      },
      setTo: function(t, e, i, s) {
        return this.x = t, this.y = e, this.width = i, this.height = s, this
      },
      floor: function() {
        this.x = Math.floor(this.x), this.y = Math.floor(this.y)
      },
      floorAll: function() {
        this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.width = Math.floor(this.width), this.height = Math.floor(this.height)
      },
      copyFrom: function(t) {
        return this.setTo(t.x, t.y, t.width, t.height)
      },
      copyTo: function(t) {
        return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t
      },
      inflate: function(t, e) {
        return i.Rectangle.inflate(this, t, e)
      },
      size: function(t) {
        return i.Rectangle.size(this, t)
      },
      clone: function(t) {
        return i.Rectangle.clone(this, t)
      },
      contains: function(t, e) {
        return i.Rectangle.contains(this, t, e)
      },
      containsRect: function(t) {
        return i.Rectangle.containsRect(this, t)
      },
      equals: function(t) {
        return i.Rectangle.equals(this, t)
      },
      intersection: function(t, e) {
        return i.Rectangle.intersection(this, t, e)
      },
      intersects: function(t, e) {
        return i.Rectangle.intersects(this, t, e)
      },
      intersectsRaw: function(t, e, s, n, r) {
        return i.Rectangle.intersectsRaw(this, t, e, s, n, r)
      },
      union: function(t, e) {
        return i.Rectangle.union(this, t, e)
      },
      toString: function() {
        return "[{Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + " empty=" + this.empty + ")}]"
      }
    }, i.Rectangle.prototype.constructor = i.Rectangle, Object.defineProperty(i.Rectangle.prototype, "halfWidth", {
      get: function() {
        return Math.round(this.width / 2)
      }
    }), Object.defineProperty(i.Rectangle.prototype, "halfHeight", {
      get: function() {
        return Math.round(this.height / 2)
      }
    }), Object.defineProperty(i.Rectangle.prototype, "bottom", {
      get: function() {
        return this.y + this.height
      },
      set: function(t) {
        this.height = t <= this.y ? 0 : this.y - t
      }
    }), Object.defineProperty(i.Rectangle.prototype, "bottomRight", {
      get: function() {
        return new i.Point(this.right, this.bottom)
      },
      set: function(t) {
        this.right = t.x, this.bottom = t.y
      }
    }), Object.defineProperty(i.Rectangle.prototype, "left", {
      get: function() {
        return this.x
      },
      set: function(t) {
        this.width = t >= this.right ? 0 : this.right - t, this.x = t
      }
    }), Object.defineProperty(i.Rectangle.prototype, "right", {
      get: function() {
        return this.x + this.width
      },
      set: function(t) {
        this.width = t <= this.x ? 0 : this.x + t
      }
    }), Object.defineProperty(i.Rectangle.prototype, "volume", {
      get: function() {
        return this.width * this.height
      }
    }), Object.defineProperty(i.Rectangle.prototype, "perimeter", {
      get: function() {
        return 2 * this.width + 2 * this.height
      }
    }), Object.defineProperty(i.Rectangle.prototype, "centerX", {
      get: function() {
        return this.x + this.halfWidth
      },
      set: function(t) {
        this.x = t - this.halfWidth
      }
    }), Object.defineProperty(i.Rectangle.prototype, "centerY", {
      get: function() {
        return this.y + this.halfHeight
      },
      set: function(t) {
        this.y = t - this.halfHeight
      }
    }), Object.defineProperty(i.Rectangle.prototype, "top", {
      get: function() {
        return this.y
      },
      set: function(t) {
        t >= this.bottom ? (this.height = 0, this.y = t) : this.height = this.bottom - t
      }
    }), Object.defineProperty(i.Rectangle.prototype, "topLeft", {
      get: function() {
        return new i.Point(this.x, this.y)
      },
      set: function(t) {
        this.x = t.x, this.y = t.y
      }
    }), Object.defineProperty(i.Rectangle.prototype, "empty", {
      get: function() {
        return !this.width || !this.height
      },
      set: function(t) {
        t === !0 && this.setTo(0, 0, 0, 0)
      }
    }), i.Rectangle.inflate = function(t, e, i) {
      return t.x -= e, t.width += 2 * e, t.y -= i, t.height += 2 * i, t
    }, i.Rectangle.inflatePoint = function(t, e) {
      return i.Rectangle.inflate(t, e.x, e.y)
    }, i.Rectangle.size = function(t, e) {
      return "undefined" == typeof e && (e = new i.Point), e.setTo(t.width, t.height)
    }, i.Rectangle.clone = function(t, e) {
      return "undefined" == typeof e && (e = new i.Rectangle), e.setTo(t.x, t.y, t.width, t.height)
    }, i.Rectangle.contains = function(t, e, i) {
      return e >= t.x && e <= t.right && i >= t.y && i <= t.bottom
    }, i.Rectangle.containsRaw = function(t, e, i, s, n, r) {
      return n >= t && t + i >= n && r >= e && e + s >= r
    }, i.Rectangle.containsPoint = function(t, e) {
      return i.Rectangle.contains(t, e.x, e.y)
    }, i.Rectangle.containsRect = function(t, e) {
      return t.volume > e.volume ? !1 : t.x >= e.x && t.y >= e.y && t.right <= e.right && t.bottom <= e.bottom
    }, i.Rectangle.equals = function(t, e) {
      return t.x == e.x && t.y == e.y && t.width == e.width && t.height == e.height
    }, i.Rectangle.intersection = function(t, e, s) {
      return s = s || new i.Rectangle, i.Rectangle.intersects(t, e) && (s.x = Math.max(t.x, e.x), s.y = Math.max(t.y, e.y), s.width = Math.min(t.right, e.right) - s.x, s.height = Math.min(t.bottom, e.bottom) - s.y), s
    }, i.Rectangle.intersects = function(t, e) {
      return t.width <= 0 || t.height <= 0 || e.width <= 0 || e.height <= 0 ? !1 : !(t.right < e.x || t.bottom < e.y || t.x > e.right || t.y > e.bottom)
    }, i.Rectangle.intersectsRaw = function(t, e, i, s, n, r) {
      return "undefined" == typeof r && (r = 0), !(e > t.right + r || i < t.left - r || s > t.bottom + r || n < t.top - r)
    }, i.Rectangle.union = function(t, e, s) {
      return "undefined" == typeof s && (s = new i.Rectangle), s.setTo(Math.min(t.x, e.x), Math.min(t.y, e.y), Math.max(t.right, e.right) - Math.min(t.left, e.left), Math.max(t.bottom, e.bottom) - Math.min(t.top, e.top))
    }, i.Polygon = function(t) {
      e.Polygon.call(this, t), this.type = i.POLYGON
    }, i.Polygon.prototype = Object.create(e.Polygon.prototype), i.Polygon.prototype.constructor = i.Polygon, i.Net = function(t) {
      this.game = t
    }, i.Net.prototype = {
      getHostName: function() {
        return window.location && window.location.hostname ? window.location.hostname : null
      },
      checkDomainName: function(t) {
        return -1 !== window.location.hostname.indexOf(t)
      },
      updateQueryString: function(t, e, i, s) {
        "undefined" == typeof i && (i = !1), ("undefined" == typeof s || "" === s) && (s = window.location.href);
        var n = "",
          r = new RegExp("([?|&])" + t + "=.*?(&|#|$)(.*)", "gi");
        if (r.test(s)) n = "undefined" != typeof e && null !== e ? s.replace(r, "$1" + t + "=" + e + "$2$3") : s.replace(r, "$1$3").replace(/(&|\?)$/, "");
        else if ("undefined" != typeof e && null !== e) {
          var o = -1 !== s.indexOf("?") ? "&" : "?",
            a = s.split("#");
          s = a[0] + o + t + "=" + e, a[1] && (s += "#" + a[1]), n = s
        } else n = s;
        return i ? void(window.location.href = n) : n
      },
      getQueryString: function(t) {
        "undefined" == typeof t && (t = "");
        var e = {},
          i = location.search.substring(1).split("&");
        for (var s in i) {
          var n = i[s].split("=");
          if (n.length > 1) {
            if (t && t == this.decodeURI(n[0])) return this.decodeURI(n[1]);
            e[this.decodeURI(n[0])] = this.decodeURI(n[1])
          }
        }
        return e
      },
      decodeURI: function(t) {
        return decodeURIComponent(t.replace(/\+/g, " "))
      }
    }, i.Net.prototype.constructor = i.Net, i.TweenManager = function(t) {
      this.game = t, this._tweens = [], this._add = [], this.game.onPause.add(this.pauseAll, this), this.game.onResume.add(this.resumeAll, this)
    }, i.TweenManager.prototype = {
      getAll: function() {
        return this._tweens
      },
      removeAll: function() {
        for (var t = 0; t < this._tweens.length; t++) this._tweens[t].pendingDelete = !0;
        this._add = []
      },
      add: function(t) {
        this._add.push(t)
      },
      create: function(t) {
        return new i.Tween(t, this.game)
      },
      remove: function(t) {
        var e = this._tweens.indexOf(t); - 1 !== e && (this._tweens[e].pendingDelete = !0)
      },
      update: function() {
        if (0 === this._tweens.length && 0 === this._add.length) return !1;
        for (var t = 0, e = this._tweens.length; e > t;) this._tweens[t].update(this.game.time.now) ? t++ : (this._tweens.splice(t, 1), e--);
        return this._add.length > 0 && (this._tweens = this._tweens.concat(this._add), this._add.length = 0), !0
      },
      isTweening: function(t) {
        return this._tweens.some(function(e) {
          return e._object === t
        })
      },
      pauseAll: function() {
        for (var t = this._tweens.length - 1; t >= 0; t--) this._tweens[t].pause()
      },
      resumeAll: function() {
        for (var t = this._tweens.length - 1; t >= 0; t--) this._tweens[t].resume()
      }
    }, i.TweenManager.prototype.constructor = i.TweenManager, i.Tween = function(t, e) {
      this._object = t, this.game = e, this._manager = this.game.tweens, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._repeat = 0, this._yoyo = !1, this._reversed = !1, this._delayTime = 0, this._startTime = null, this._easingFunction = i.Easing.Linear.None, this._interpolationFunction = i.Math.linearInterpolation, this._chainedTweens = [], this._onStartCallbackFired = !1, this._onUpdateCallback = null, this._onUpdateCallbackContext = null, this._pausedTime = 0, this.pendingDelete = !1;
      for (var s in t) this._valuesStart[s] = parseFloat(t[s], 10);
      this.onStart = new i.Signal, this.onLoop = new i.Signal, this.onComplete = new i.Signal, this.isRunning = !1
    }, i.Tween.prototype = {
      to: function(t, e, i, s, n, r, o) {
        e = e || 1e3, i = i || null, s = s || !1, n = n || 0, r = r || 0, o = o || !1;
        var a;
        return this._parent ? (a = this._manager.create(this._object), this._lastChild.chain(a), this._lastChild = a) : (a = this, this._parent = this, this._lastChild = this), a._repeat = r, a._duration = e, a._valuesEnd = t, null !== i && (a._easingFunction = i), n > 0 && (a._delayTime = n), a._yoyo = o, s ? this.start() : this
      },
      start: function() {
        if (null !== this.game && null !== this._object) {
          this._manager.add(this), this.isRunning = !0, this._onStartCallbackFired = !1, this._startTime = this.game.time.now + this._delayTime;
          for (var t in this._valuesEnd) {
            if (this._valuesEnd[t] instanceof Array) {
              if (0 === this._valuesEnd[t].length) continue;
              this._valuesEnd[t] = [this._object[t]].concat(this._valuesEnd[t])
            }
            this._valuesStart[t] = this._object[t], this._valuesStart[t] instanceof Array == !1 && (this._valuesStart[t] *= 1), this._valuesStartRepeat[t] = this._valuesStart[t] || 0
          }
          return this
        }
      },
      stop: function() {
        return this.isRunning = !1, this._onUpdateCallback = null, this._manager.remove(this), this
      },
      delay: function(t) {
        return this._delayTime = t, this
      },
      repeat: function(t) {
        return this._repeat = t, this
      },
      yoyo: function(t) {
        return this._yoyo = t, this
      },
      easing: function(t) {
        return this._easingFunction = t, this
      },
      interpolation: function(t) {
        return this._interpolationFunction = t, this
      },
      chain: function() {
        return this._chainedTweens = arguments, this
      },
      loop: function() {
        return this._lastChild.chain(this), this
      },
      onUpdateCallback: function(t, e) {
        return this._onUpdateCallback = t, this._onUpdateCallbackContext = e, this
      },
      pause: function() {
        this._paused = !0, this._pausedTime = this.game.time.now
      },
      resume: function() {
        this._paused = !1, this._startTime += this.game.time.now - this._pausedTime
      },
      update: function(t) {
        if (this.pendingDelete) return !1;
        if (this._paused || t < this._startTime) return !0;
        var e;
        if (t < this._startTime) return !0;
        this._onStartCallbackFired === !1 && (this.onStart.dispatch(this._object), this._onStartCallbackFired = !0);
        var i = (t - this._startTime) / this._duration;
        i = i > 1 ? 1 : i;
        var s = this._easingFunction(i);
        for (e in this._valuesEnd) {
          var n = this._valuesStart[e] || 0,
            r = this._valuesEnd[e];
          r instanceof Array ? this._object[e] = this._interpolationFunction(r, s) : ("string" == typeof r && (r = n + parseFloat(r, 10)), "number" == typeof r && (this._object[e] = n + (r - n) * s))
        }
        if (null !== this._onUpdateCallback && this._onUpdateCallback.call(this._onUpdateCallbackContext, this, s), 1 == i) {
          if (this._repeat > 0) {
            isFinite(this._repeat) && this._repeat--;
            for (e in this._valuesStartRepeat) {
              if ("string" == typeof this._valuesEnd[e] && (this._valuesStartRepeat[e] = this._valuesStartRepeat[e] + parseFloat(this._valuesEnd[e], 10)), this._yoyo) {
                var o = this._valuesStartRepeat[e];
                this._valuesStartRepeat[e] = this._valuesEnd[e], this._valuesEnd[e] = o, this._reversed = !this._reversed
              }
              this._valuesStart[e] = this._valuesStartRepeat[e]
            }
            return this._startTime = t + this._delayTime, this.onLoop.dispatch(this._object), !0
          }
          this.isRunning = !1, this.onComplete.dispatch(this._object);
          for (var a = 0, h = this._chainedTweens.length; h > a; a++) this._chainedTweens[a].start(t);
          return !1
        }
        return !0
      }
    }, i.Tween.prototype.constructor = i.Tween, i.Easing = {
      Linear: {
        None: function(t) {
          return t
        }
      },
      Quadratic: {
        In: function(t) {
          return t * t
        },
        Out: function(t) {
          return t * (2 - t)
        },
        InOut: function(t) {
          return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        }
      },
      Cubic: {
        In: function(t) {
          return t * t * t
        },
        Out: function(t) {
          return --t * t * t + 1
        },
        InOut: function(t) {
          return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }
      },
      Quartic: {
        In: function(t) {
          return t * t * t * t
        },
        Out: function(t) {
          return 1 - --t * t * t * t
        },
        InOut: function(t) {
          return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        }
      },
      Quintic: {
        In: function(t) {
          return t * t * t * t * t
        },
        Out: function(t) {
          return --t * t * t * t * t + 1
        },
        InOut: function(t) {
          return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }
      },
      Sinusoidal: {
        In: function(t) {
          return 1 - Math.cos(t * Math.PI / 2)
        },
        Out: function(t) {
          return Math.sin(t * Math.PI / 2)
        },
        InOut: function(t) {
          return .5 * (1 - Math.cos(Math.PI * t))
        }
      },
      Exponential: {
        In: function(t) {
          return 0 === t ? 0 : Math.pow(1024, t - 1)
        },
        Out: function(t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        },
        InOut: function(t) {
          return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
        }
      },
      Circular: {
        In: function(t) {
          return 1 - Math.sqrt(1 - t * t)
        },
        Out: function(t) {
          return Math.sqrt(1 - --t * t)
        },
        InOut: function(t) {
          return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }
      },
      Elastic: {
        In: function(t) {
          var e, i = .1,
            s = .4;
          return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = s / 4) : e = s * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / s)))
        },
        Out: function(t) {
          var e, i = .1,
            s = .4;
          return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = s / 4) : e = s * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / s) + 1)
        },
        InOut: function(t) {
          var e, i = .1,
            s = .4;
          return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = s / 4) : e = s * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / s) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / s) * .5 + 1)
        }
      },
      Back: {
        In: function(t) {
          var e = 1.70158;
          return t * t * ((e + 1) * t - e)
        },
        Out: function(t) {
          var e = 1.70158;
          return --t * t * ((e + 1) * t + e) + 1
        },
        InOut: function(t) {
          var e = 2.5949095;
          return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
        }
      },
      Bounce: {
        In: function(t) {
          return 1 - i.Easing.Bounce.Out(1 - t)
        },
        Out: function(t) {
          return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        },
        InOut: function(t) {
          return .5 > t ? .5 * i.Easing.Bounce.In(2 * t) : .5 * i.Easing.Bounce.Out(2 * t - 1) + .5
        }
      }
    }, i.Time = function(t) {
      this.game = t, this.time = 0, this.now = 0, this.elapsed = 0, this.pausedTime = 0, this.fps = 0, this.fpsMin = 1e3, this.fpsMax = 0, this.msMin = 1e3, this.msMax = 0, this.physicsElapsed = 0, this.frames = 0, this.pauseDuration = 0, this.timeToCall = 0, this.lastTime = 0, this.events = new i.Timer(this.game, !1), this._started = 0, this._timeLastSecond = 0, this._pauseStarted = 0, this._justResumed = !1, this._timers = [], this._len = 0, this._i = 0, this.game.onPause.add(this.gamePaused, this), this.game.onResume.add(this.gameResumed, this)
    }, i.Time.prototype = {
      boot: function() {
        this.events.start()
      },
      create: function(t) {
        "undefined" == typeof t && (t = !0);
        var e = new i.Timer(this.game, t);
        return this._timers.push(e), e
      },
      removeAll: function() {
        for (var t = 0; t < this._timers.length; t++) this._timers[t].destroy();
        this._timers = []
      },
      update: function(t) {
        if (this.now = t, this._justResumed) {
          this.time = this.now, this._justResumed = !1, this.events.resume();
          for (var e = 0; e < this._timers.length; e++) this._timers[e].resume()
        }
        if (this.timeToCall = this.game.math.max(0, 16 - (t - this.lastTime)), this.elapsed = this.now - this.time, this.msMin = this.game.math.min(this.msMin, this.elapsed), this.msMax = this.game.math.max(this.msMax, this.elapsed), this.frames++, this.now > this._timeLastSecond + 1e3 && (this.fps = Math.round(1e3 * this.frames / (this.now - this._timeLastSecond)), this.fpsMin = this.game.math.min(this.fpsMin, this.fps), this.fpsMax = this.game.math.max(this.fpsMax, this.fps), this._timeLastSecond = this.now, this.frames = 0), this.time = this.now, this.lastTime = t + this.timeToCall, this.physicsElapsed = 1 * (this.elapsed / 1e3), this.physicsElapsed > .05 && (this.physicsElapsed = .05), this.game.paused) this.pausedTime = this.now - this._pauseStarted;
        else
          for (this.events.update(this.now), this._i = 0, this._len = this._timers.length; this._i < this._len;) this._timers[this._i].update(this.now) ? this._i++ : (this._timers.splice(this._i, 1), this._len--)
      },
      gamePaused: function() {
        this._pauseStarted = this.now, this.events.pause();
        for (var t = 0; t < this._timers.length; t++) this._timers[t].pause()
      },
      gameResumed: function() {
        this.time = Date.now(), this.pauseDuration = this.pausedTime, this._justResumed = !0
      },
      totalElapsedSeconds: function() {
        return .001 * (this.now - this._started)
      },
      elapsedSince: function(t) {
        return this.now - t
      },
      elapsedSecondsSince: function(t) {
        return .001 * (this.now - t)
      },
      reset: function() {
        this._started = this.now
      }
    }, i.Time.prototype.constructor = i.Time, i.Timer = function(t, e) {
      "undefined" == typeof e && (e = !0), this.game = t, this.running = !1, this.autoDestroy = e, this.expired = !1, this.events = [], this.onComplete = new i.Signal, this.nextTick = 0, this.paused = !1, this._started = 0, this._pauseStarted = 0, this._now = 0, this._len = 0, this._i = 0
    }, i.Timer.MINUTE = 6e4, i.Timer.SECOND = 1e3, i.Timer.HALF = 500, i.Timer.QUARTER = 250, i.Timer.prototype = {
      create: function(t, e, s, n, r, o) {
        var a = t;
        this.running && (a += this._now);
        var h = new i.TimerEvent(this, t, a, s, e, n, r, o);
        return this.events.push(h), this.order(), this.expired = !1, h
      },
      add: function(t, e, i) {
        return this.create(t, !1, 0, e, i, Array.prototype.splice.call(arguments, 3))
      },
      repeat: function(t, e, i, s) {
        return this.create(t, !1, e, i, s, Array.prototype.splice.call(arguments, 4))
      },
      loop: function(t, e, i) {
        return this.create(t, !0, 0, e, i, Array.prototype.splice.call(arguments, 3))
      },
      start: function() {
        this._started = this.game.time.now, this.running = !0
      },
      stop: function() {
        this.running = !1, this.events.length = 0
      },
      remove: function(t) {
        for (var e = 0; e < this.events.length; e++)
          if (this.events[e] === t) return this.events.splice(e, 1), !0;
        return !1
      },
      order: function() {
        this.events.length > 0 && (this.events.sort(this.sortHandler), this.nextTick = this.events[0].tick)
      },
      sortHandler: function(t, e) {
        return t.tick < e.tick ? -1 : t.tick > e.tick ? 1 : 0
      },
      update: function(t) {
        if (this.paused) return !0;
        if (this._now = t - this._started, this._len = this.events.length, this.running && this._now >= this.nextTick && this._len > 0) {
          for (this._i = 0; this._i < this._len && this._now >= this.events[this._i].tick;) this.events[this._i].loop === !0 ? (this.events[this._i].tick += this.events[this._i].delay - (this._now - this.events[this._i].tick), this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args)) : this.events[this._i].repeatCount > 0 ? (this.events[this._i].repeatCount--, this.events[this._i].tick += this.events[this._i].delay - (this._now - this.events[this._i].tick), this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args)) : (this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args), this.events.splice(this._i, 1), this._len--), this._i++;
          this.events.length > 0 ? this.order() : (this.expired = !0, this.onComplete.dispatch(this))
        }
        return this.expired && this.autoDestroy ? !1 : !0
      },
      pause: function() {
        this._pauseStarted = this.game.time.now, this.paused = !0
      },
      resume: function() {
        for (var t = this.game.time.now - this._pauseStarted, e = 0; e < this.events.length; e++) this.events[e].tick += t;
        this.nextTick += t, this.paused = !1
      },
      destroy: function() {
        this.onComplete.removeAll(), this.running = !1, this.events = []
      }
    }, Object.defineProperty(i.Timer.prototype, "next", {
      get: function() {
        return this.nextTick
      }
    }), Object.defineProperty(i.Timer.prototype, "duration", {
      get: function() {
        return this.running && this.nextTick > this._now ? this.nextTick - this._now : 0
      }
    }), Object.defineProperty(i.Timer.prototype, "length", {
      get: function() {
        return this.events.length
      }
    }), Object.defineProperty(i.Timer.prototype, "ms", {
      get: function() {
        return this._now
      }
    }), Object.defineProperty(i.Timer.prototype, "seconds", {
      get: function() {
        return .001 * this._now
      }
    }), i.Timer.prototype.constructor = i.Timer, i.TimerEvent = function(t, e, i, s, n, r, o, a) {
      this.timer = t, this.delay = e, this.tick = i, this.repeatCount = s - 1, this.loop = n, this.callback = r, this.callbackContext = o, this.args = a
    }, i.TimerEvent.prototype.constructor = i.TimerEvent, i.AnimationManager = function(t) {
      this.sprite = t, this.game = t.game, this.currentFrame = null, this.updateIfVisible = !0, this.isLoaded = !1, this._frameData = null, this._anims = {}, this._outputFrames = []
    }, i.AnimationManager.prototype = {
      loadFrameData: function(t) {
        this._frameData = t, this.frame = 0, this.isLoaded = !0
      },
      add: function(t, s, n, r, o) {
        return null == this._frameData ? void console.warn("No FrameData available for Phaser.Animation " + t) : (n = n || 60, "undefined" == typeof r && (r = !1), "undefined" == typeof o && (o = s && "number" == typeof s[0] ? !0 : !1), null == this.sprite.events.onAnimationStart && (this.sprite.events.onAnimationStart = new i.Signal, this.sprite.events.onAnimationComplete = new i.Signal, this.sprite.events.onAnimationLoop = new i.Signal), this._outputFrames.length = 0, this._frameData.getFrameIndexes(s, o, this._outputFrames), this._anims[t] = new i.Animation(this.game, this.sprite, t, this._frameData, this._outputFrames, n, r), this.currentAnim = this._anims[t], this.currentFrame = this.currentAnim.currentFrame, this.sprite.setTexture(e.TextureCache[this.currentFrame.uuid]), this._anims[t])
      },
      validateFrames: function(t, e) {
        "undefined" == typeof e && (e = !0);
        for (var i = 0; i < t.length; i++)
          if (e === !0) {
            if (t[i] > this._frameData.total) return !1
          } else if (this._frameData.checkFrameName(t[i]) === !1) return !1;
        return !0
      },
      play: function(t, e, i, s) {
        if (this._anims[t]) {
          if (this.currentAnim != this._anims[t]) return this.currentAnim = this._anims[t], this.currentAnim.paused = !1, this.currentAnim.play(e, i, s);
          if (this.currentAnim.isPlaying === !1) return this.currentAnim.paused = !1, this.currentAnim.play(e, i, s)
        }
      },
      stop: function(t, e) {
        "undefined" == typeof e && (e = !1), "string" == typeof t ? this._anims[t] && (this.currentAnim = this._anims[t], this.currentAnim.stop(e)) : this.currentAnim && this.currentAnim.stop(e)
      },
      update: function() {
        return this.updateIfVisible && this.sprite.visible === !1 ? !1 : this.currentAnim && this.currentAnim.update() === !0 ? (this.currentFrame = this.currentAnim.currentFrame, this.sprite.currentFrame = this.currentFrame, !0) : !1
      },
      getAnimation: function(t) {
        return "string" == typeof t && this._anims[t] ? this._anims[t] : null
      },
      refreshFrame: function() {
        this.sprite.currentFrame = this.currentFrame, this.sprite.setTexture(e.TextureCache[this.currentFrame.uuid])
      },
      destroy: function() {
        this._anims = {}, this._frameData = null, this._frameIndex = 0, this.currentAnim = null, this.currentFrame = null
      }
    }, i.AnimationManager.prototype.constructor = i.AnimationManager, Object.defineProperty(i.AnimationManager.prototype, "frameData", {
      get: function() {
        return this._frameData
      }
    }), Object.defineProperty(i.AnimationManager.prototype, "frameTotal", {
      get: function() {
        return this._frameData ? this._frameData.total : -1
      }
    }), Object.defineProperty(i.AnimationManager.prototype, "paused", {
      get: function() {
        return this.currentAnim.isPaused
      },
      set: function(t) {
        this.currentAnim.paused = t
      }
    }), Object.defineProperty(i.AnimationManager.prototype, "frame", {
      get: function() {
        return this.currentFrame ? this._frameIndex : void 0
      },
      set: function(t) {
        "number" == typeof t && this._frameData && null !== this._frameData.getFrame(t) && (this.currentFrame = this._frameData.getFrame(t), this._frameIndex = t, this.sprite.currentFrame = this.currentFrame, this.sprite.setTexture(e.TextureCache[this.currentFrame.uuid]))
      }
    }), Object.defineProperty(i.AnimationManager.prototype, "frameName", {
      get: function() {
        return this.currentFrame ? this.currentFrame.name : void 0
      },
      set: function(t) {
        "string" == typeof t && this._frameData && null !== this._frameData.getFrameByName(t) ? (this.currentFrame = this._frameData.getFrameByName(t), this._frameIndex = this.currentFrame.index, this.sprite.currentFrame = this.currentFrame, this.sprite.setTexture(e.TextureCache[this.currentFrame.uuid])) : console.warn("Cannot set frameName: " + t)
      }
    }), i.Animation = function(t, e, i, s, n, r, o) {
      this.game = t, this._parent = e, this._frameData = s, this.name = i, this._frames = [], this._frames = this._frames.concat(n), this.delay = 1e3 / r, this.looped = o, this.killOnComplete = !1, this.isFinished = !1, this.isPlaying = !1, this.isPaused = !1, this._pauseStartTime = 0, this._frameIndex = 0, this._frameDiff = 0, this._frameSkip = 1, this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex])
    }, i.Animation.prototype = {
      play: function(t, i, s) {
        return "number" == typeof t && (this.delay = 1e3 / t), "boolean" == typeof i && (this.looped = i), "undefined" != typeof s && (this.killOnComplete = s), this.isPlaying = !0, this.isFinished = !1, this.paused = !1, this._timeLastFrame = this.game.time.now, this._timeNextFrame = this.game.time.now + this.delay, this._frameIndex = 0, this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]), this._parent.setTexture(e.TextureCache[this.currentFrame.uuid]), this._parent.events && this._parent.events.onAnimationStart.dispatch(this._parent, this), this
      },
      restart: function() {
        this.isPlaying = !0, this.isFinished = !1, this.paused = !1, this._timeLastFrame = this.game.time.now, this._timeNextFrame = this.game.time.now + this.delay, this._frameIndex = 0, this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex])
      },
      stop: function(t) {
        "undefined" == typeof t && (t = !1), this.isPlaying = !1, this.isFinished = !0, this.paused = !1, t && (this.currentFrame = this._frameData.getFrame(this._frames[0]))
      },
      update: function() {
        return this.isPaused ? !1 : this.isPlaying === !0 && this.game.time.now >= this._timeNextFrame ? (this._frameSkip = 1, this._frameDiff = this.game.time.now - this._timeNextFrame, this._timeLastFrame = this.game.time.now, this._frameDiff > this.delay && (this._frameSkip = Math.floor(this._frameDiff / this.delay), this._frameDiff -= this._frameSkip * this.delay), this._timeNextFrame = this.game.time.now + (this.delay - this._frameDiff), this._frameIndex += this._frameSkip, this._frameIndex >= this._frames.length ? this.looped ? (this._frameIndex %= this._frames.length, this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]), this.currentFrame && this._parent.setTexture(e.TextureCache[this.currentFrame.uuid]), this._parent.events.onAnimationLoop.dispatch(this._parent, this)) : this.onComplete() : (this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]), this.currentFrame && this._parent.setTexture(e.TextureCache[this.currentFrame.uuid])), !0) : !1
      },
      destroy: function() {
        this.game = null, this._parent = null, this._frames = null, this._frameData = null, this.currentFrame = null, this.isPlaying = !1
      },
      onComplete: function() {
        this.isPlaying = !1, this.isFinished = !0, this.paused = !1, this._parent.events && this._parent.events.onAnimationComplete.dispatch(this._parent, this), this.killOnComplete && this._parent.kill()
      }
    }, i.Animation.prototype.constructor = i.Animation, Object.defineProperty(i.Animation.prototype, "paused", {
      get: function() {
        return this.isPaused
      },
      set: function(t) {
        this.isPaused = t, t ? this._pauseStartTime = this.game.time.now : this.isPlaying && (this._timeNextFrame = this.game.time.now + this.delay)
      }
    }), Object.defineProperty(i.Animation.prototype, "frameTotal", {
      get: function() {
        return this._frames.length
      }
    }), Object.defineProperty(i.Animation.prototype, "frame", {
      get: function() {
        return null !== this.currentFrame ? this.currentFrame.index : this._frameIndex
      },
      set: function(t) {
        this.currentFrame = this._frameData.getFrame(t), null !== this.currentFrame && (this._frameIndex = t, this._parent.setTexture(e.TextureCache[this.currentFrame.uuid]))
      }
    }), i.Animation.generateFrameNames = function(t, e, s, n, r) {
      "undefined" == typeof n && (n = "");
      var o = [],
        a = "";
      if (s > e)
        for (var h = e; s >= h; h++) a = "number" == typeof r ? i.Utils.pad(h.toString(), r, "0", 1) : h.toString(), a = t + a + n, o.push(a);
      else
        for (var h = e; h >= s; h--) a = "number" == typeof r ? i.Utils.pad(h.toString(), r, "0", 1) : h.toString(), a = t + a + n, o.push(a);
      return o
    }, i.Frame = function(t, e, s, n, r, o, a) {
      this.index = t, this.x = e, this.y = s, this.width = n, this.height = r, this.name = o, this.uuid = a, this.centerX = Math.floor(n / 2), this.centerY = Math.floor(r / 2), this.distance = i.Math.distance(0, 0, n, r), this.rotated = !1, this.rotationDirection = "cw", this.trimmed = !1, this.sourceSizeW = n, this.sourceSizeH = r, this.spriteSourceSizeX = 0, this.spriteSourceSizeY = 0, this.spriteSourceSizeW = 0, this.spriteSourceSizeH = 0
    }, i.Frame.prototype = {
      setTrim: function(t, e, i, s, n, r, o) {
        this.trimmed = t, t && (this.width = e, this.height = i, this.sourceSizeW = e, this.sourceSizeH = i, this.centerX = Math.floor(e / 2), this.centerY = Math.floor(i / 2), this.spriteSourceSizeX = s, this.spriteSourceSizeY = n, this.spriteSourceSizeW = r, this.spriteSourceSizeH = o)
      }
    }, i.Frame.prototype.constructor = i.Frame, i.FrameData = function() {
      this._frames = [], this._frameNames = []
    }, i.FrameData.prototype = {
      addFrame: function(t) {
        return t.index = this._frames.length, this._frames.push(t), "" !== t.name && (this._frameNames[t.name] = t.index), t
      },
      getFrame: function(t) {
        return this._frames.length > t ? this._frames[t] : null
      },
      getFrameByName: function(t) {
        return "number" == typeof this._frameNames[t] ? this._frames[this._frameNames[t]] : null
      },
      checkFrameName: function(t) {
        return null == this._frameNames[t] ? !1 : !0
      },
      getFrameRange: function(t, e, i) {
        "undefined" == typeof i && (i = []);
        for (var s = t; e >= s; s++) i.push(this._frames[s]);
        return i
      },
      getFrames: function(t, e, i) {
        if ("undefined" == typeof e && (e = !0), "undefined" == typeof i && (i = []), "undefined" == typeof t || 0 === t.length)
          for (var s = 0; s < this._frames.length; s++) i.push(this._frames[s]);
        else
          for (var s = 0, n = t.length; n > s; s++) i.push(e ? this.getFrame(t[s]) : this.getFrameByName(t[s]));
        return i
      },
      getFrameIndexes: function(t, e, i) {
        if ("undefined" == typeof e && (e = !0), "undefined" == typeof i && (i = []), "undefined" == typeof t || 0 === t.length)
          for (var s = 0, n = this._frames.length; n > s; s++) i.push(this._frames[s].index);
        else
          for (var s = 0, n = t.length; n > s; s++) e ? i.push(t[s]) : this.getFrameByName(t[s]) && i.push(this.getFrameByName(t[s]).index);
        return i
      }
    }, i.FrameData.prototype.constructor = i.FrameData, Object.defineProperty(i.FrameData.prototype, "total", {
      get: function() {
        return this._frames.length
      }
    }), i.AnimationParser = {
      spriteSheet: function(t, s, n, r, o, a, h) {
        var l = t.cache.getImage(s);
        if (null == l) return null;
        var c = l.width,
          u = l.height;
        0 >= n && (n = Math.floor(-c / Math.min(-1, n))), 0 >= r && (r = Math.floor(-u / Math.min(-1, r)));
        var d = Math.round(c / n),
          p = Math.round(u / r),
          f = d * p;
        if (-1 !== o && (f = o), 0 === c || 0 === u || n > c || r > u || 0 === f) return console.warn("Phaser.AnimationParser.spriteSheet: width/height zero or width/height < given frameWidth/frameHeight"), null;
        for (var g = new i.FrameData, m = a, y = a, _ = 0; f > _; _++) {
          var x = t.rnd.uuid();
          g.addFrame(new i.Frame(_, m, y, n, r, "", x)), e.TextureCache[x] = new e.Texture(e.BaseTextureCache[s], {
            x: m,
            y: y,
            width: n,
            height: r
          }), m += n + h, m === c && (m = a, y += r + h)
        }
        return g
      },
      JSONData: function(t, s, n) {
        if (!s.frames) return console.warn("Phaser.AnimationParser.JSONData: Invalid Texture Atlas JSON given, missing 'frames' array"), void console.log(s);
        for (var r, o = new i.FrameData, a = s.frames, h = 0; h < a.length; h++) {
          var l = t.rnd.uuid();
          r = o.addFrame(new i.Frame(h, a[h].frame.x, a[h].frame.y, a[h].frame.w, a[h].frame.h, a[h].filename, l)), e.TextureCache[l] = new e.Texture(e.BaseTextureCache[n], {
            x: a[h].frame.x,
            y: a[h].frame.y,
            width: a[h].frame.w,
            height: a[h].frame.h
          }), a[h].trimmed && (r.setTrim(a[h].trimmed, a[h].sourceSize.w, a[h].sourceSize.h, a[h].spriteSourceSize.x, a[h].spriteSourceSize.y, a[h].spriteSourceSize.w, a[h].spriteSourceSize.h), e.TextureCache[l].trimmed = !0, e.TextureCache[l].trim.x = a[h].spriteSourceSize.x, e.TextureCache[l].trim.y = a[h].spriteSourceSize.y)
        }
        return o
      },
      JSONDataHash: function(t, s, n) {
        if (!s.frames) return console.warn("Phaser.AnimationParser.JSONDataHash: Invalid Texture Atlas JSON given, missing 'frames' object"), void console.log(s);
        var r, o = new i.FrameData,
          a = s.frames,
          h = 0;
        for (var l in a) {
          var c = t.rnd.uuid();
          r = o.addFrame(new i.Frame(h, a[l].frame.x, a[l].frame.y, a[l].frame.w, a[l].frame.h, l, c)), e.TextureCache[c] = new e.Texture(e.BaseTextureCache[n], {
            x: a[l].frame.x,
            y: a[l].frame.y,
            width: a[l].frame.w,
            height: a[l].frame.h
          }), a[l].trimmed && (r.setTrim(a[l].trimmed, a[l].sourceSize.w, a[l].sourceSize.h, a[l].spriteSourceSize.x, a[l].spriteSourceSize.y, a[l].spriteSourceSize.w, a[l].spriteSourceSize.h), e.TextureCache[c].trimmed = !0, e.TextureCache[c].trim.x = a[l].spriteSourceSize.x, e.TextureCache[c].trim.y = a[l].spriteSourceSize.y), h++
        }
        return o
      },
      XMLData: function(t, s, n) {
        if (!s.getElementsByTagName("TextureAtlas")) return void console.warn("Phaser.AnimationParser.XMLData: Invalid Texture Atlas XML given, missing <TextureAtlas> tag");
        for (var r, o, a, h, l, c, u, d, p, f, g, m, y = new i.FrameData, _ = s.getElementsByTagName("SubTexture"), x = 0; x < _.length; x++) o = t.rnd.uuid(), h = _[x].attributes, a = h.name.nodeValue, l = parseInt(h.x.nodeValue, 10), c = parseInt(h.y.nodeValue, 10), u = parseInt(h.width.nodeValue, 10), d = parseInt(h.height.nodeValue, 10), p = null, f = null, h.frameX && (p = Math.abs(parseInt(h.frameX.nodeValue, 10)), f = Math.abs(parseInt(h.frameY.nodeValue, 10)), g = parseInt(h.frameWidth.nodeValue, 10), m = parseInt(h.frameHeight.nodeValue, 10)), r = y.addFrame(new i.Frame(x, l, c, u, d, a, o)), e.TextureCache[o] = new e.Texture(e.BaseTextureCache[n], {
          x: l,
          y: c,
          width: u,
          height: d
        }), (null !== p || null !== f) && (r.setTrim(!0, u, d, p, f, g, m), e.TextureCache[o].realSize = {
          x: p,
          y: f,
          w: g,
          h: m
        }, e.TextureCache[o].trimmed = !0, e.TextureCache[o].trim.x = p, e.TextureCache[o].trim.y = f);
        return y
      }
    }, i.Cache = function(t) {
      this.game = t, this._canvases = {}, this._images = {}, this._textures = {}, this._sounds = {}, this._text = {}, this._tilemaps = {}, this._binary = {}, this._bitmapDatas = {}, this.addDefaultImage(), this.addMissingImage(), this.onSoundUnlock = new i.Signal
    }, i.Cache.prototype = {
      addCanvas: function(t, e, i) {
        this._canvases[t] = {
          canvas: e,
          context: i
        }
      },
      addBinary: function(t, e) {
        this._binary[t] = e
      },
      addBitmapData: function(t, e) {
        return this._bitmapDatas[t] = e, e
      },
      addRenderTexture: function(t, e) {
        var s = new i.Frame(0, 0, 0, e.width, e.height, "", "");
        this._textures[t] = {
          texture: e,
          frame: s
        }
      },
      addSpriteSheet: function(t, s, n, r, o, a, h, l) {
        this._images[t] = {
          url: s,
          data: n,
          spriteSheet: !0,
          frameWidth: r,
          frameHeight: o,
          margin: h,
          spacing: l
        }, e.BaseTextureCache[t] = new e.BaseTexture(n), e.TextureCache[t] = new e.Texture(e.BaseTextureCache[t]), this._images[t].frameData = i.AnimationParser.spriteSheet(this.game, t, r, o, a, h, l)
      },
      addTilemap: function(t, e, i, s) {
        this._tilemaps[t] = {
          url: e,
          data: i,
          format: s
        }
      },
      addTextureAtlas: function(t, s, n, r, o) {
        this._images[t] = {
          url: s,
          data: n,
          spriteSheet: !0
        }, e.BaseTextureCache[t] = new e.BaseTexture(n), e.TextureCache[t] = new e.Texture(e.BaseTextureCache[t]), o == i.Loader.TEXTURE_ATLAS_JSON_ARRAY ? this._images[t].frameData = i.AnimationParser.JSONData(this.game, r, t) : o == i.Loader.TEXTURE_ATLAS_JSON_HASH ? this._images[t].frameData = i.AnimationParser.JSONDataHash(this.game, r, t) : o == i.Loader.TEXTURE_ATLAS_XML_STARLING && (this._images[t].frameData = i.AnimationParser.XMLData(this.game, r, t))
      },
      addBitmapFont: function(t, s, n, r) {
        this._images[t] = {
          url: s,
          data: n,
          spriteSheet: !0
        }, e.BaseTextureCache[t] = new e.BaseTexture(n), e.TextureCache[t] = new e.Texture(e.BaseTextureCache[t]), i.LoaderParser.bitmapFont(this.game, r, t)
      },
      addDefaultImage: function() {
        var t = new Image;
        t.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg==", this._images.__default = {
          url: null,
          data: t,
          spriteSheet: !1
        }, this._images.__default.frame = new i.Frame(0, 0, 0, 32, 32, "", ""), e.BaseTextureCache.__default = new e.BaseTexture(t), e.TextureCache.__default = new e.Texture(e.BaseTextureCache.__default)
      },
      addMissingImage: function() {
        var t = new Image;
        t.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ9JREFUeNq01ssOwyAMRFG46v//Mt1ESmgh+DFmE2GPOBARKb2NVjo+17PXLD8a1+pl5+A+wSgFygymWYHBb0FtsKhJDdZlncG2IzJ4ayoMDv20wTmSMzClEgbWYNTAkQ0Z+OJ+A/eWnAaR9+oxCF4Os0H8htsMUp+pwcgBBiMNnAwF8GqIgL2hAzaGFFgZauDPKABmowZ4GL369/0rwACp2yA/ttmvsQAAAABJRU5ErkJggg==", this._images.__missing = {
          url: null,
          data: t,
          spriteSheet: !1
        }, this._images.__missing.frame = new i.Frame(0, 0, 0, 32, 32, "", ""), e.BaseTextureCache.__missing = new e.BaseTexture(t), e.TextureCache.__missing = new e.Texture(e.BaseTextureCache.__missing)
      },
      addText: function(t, e, i) {
        this._text[t] = {
          url: e,
          data: i
        }
      },
      addImage: function(t, s, n) {
        this._images[t] = {
          url: s,
          data: n,
          spriteSheet: !1
        }, this._images[t].frame = new i.Frame(0, 0, 0, n.width, n.height, t, this.game.rnd.uuid()), e.BaseTextureCache[t] = new e.BaseTexture(n), e.TextureCache[t] = new e.Texture(e.BaseTextureCache[t])
      },
      addSound: function(t, e, i, s, n) {
        s = s || !0, n = n || !1;
        var r = !1;
        n && (r = !0), this._sounds[t] = {
          url: e,
          data: i,
          isDecoding: !1,
          decoded: r,
          webAudio: s,
          audioTag: n,
          locked: this.game.sound.touchLocked
        }
      },
      reloadSound: function(t) {
        var e = this;
        this._sounds[t] && (this._sounds[t].data.src = this._sounds[t].url, this._sounds[t].data.addEventListener("canplaythrough", function() {
          return e.reloadSoundComplete(t)
        }, !1), this._sounds[t].data.load())
      },
      reloadSoundComplete: function(t) {
        this._sounds[t] && (this._sounds[t].locked = !1, this.onSoundUnlock.dispatch(t))
      },
      updateSound: function(t, e, i) {
        this._sounds[t] && (this._sounds[t][e] = i)
      },
      decodedSound: function(t, e) {
        this._sounds[t].data = e, this._sounds[t].decoded = !0, this._sounds[t].isDecoding = !1
      },
      getCanvas: function(t) {
        return this._canvases[t] ? this._canvases[t].canvas : void console.warn('Phaser.Cache.getCanvas: Invalid key: "' + t + '"')
      },
      getBitmapData: function(t) {
        return this._bitmapDatas[t] ? this._bitmapDatas[t] : void console.warn('Phaser.Cache.getBitmapData: Invalid key: "' + t + '"')
      },
      checkImageKey: function(t) {
        return this._images[t] ? !0 : !1
      },
      getImage: function(t) {
        return this._images[t] ? this._images[t].data : void console.warn('Phaser.Cache.getImage: Invalid key: "' + t + '"')
      },
      getTilemapData: function(t) {
        return this._tilemaps[t] ? this._tilemaps[t] : void console.warn('Phaser.Cache.getTilemapData: Invalid key: "' + t + '"')
      },
      getFrameData: function(t) {
        return this._images[t] && this._images[t].frameData ? this._images[t].frameData : null
      },
      getFrameByIndex: function(t, e) {
        return this._images[t] && this._images[t].frameData ? this._images[t].frameData.getFrame(e) : null
      },
      getFrameByName: function(t, e) {
        return this._images[t] && this._images[t].frameData ? this._images[t].frameData.getFrameByName(e) : null
      },
      getFrame: function(t) {
        return this._images[t] && this._images[t].spriteSheet === !1 ? this._images[t].frame : null
      },
      getTextureFrame: function(t) {
        return this._textures[t] ? this._textures[t].frame : null
      },
      getTexture: function(t) {
        return this._textures[t] ? this._textures[t] : void console.warn('Phaser.Cache.getTexture: Invalid key: "' + t + '"')
      },
      getSound: function(t) {
        return this._sounds[t] ? this._sounds[t] : void console.warn('Phaser.Cache.getSound: Invalid key: "' + t + '"')
      },
      getSoundData: function(t) {
        return this._sounds[t] ? this._sounds[t].data : void console.warn('Phaser.Cache.getSoundData: Invalid key: "' + t + '"')
      },
      isSoundDecoded: function(t) {
        return this._sounds[t] ? this._sounds[t].decoded : void 0
      },
      isSoundReady: function(t) {
        return this._sounds[t] && this._sounds[t].decoded && this.game.sound.touchLocked === !1
      },
      isSpriteSheet: function(t) {
        return this._images[t] ? this._images[t].spriteSheet : !1
      },
      getText: function(t) {
        return this._text[t] ? this._text[t].data : void console.warn('Phaser.Cache.getText: Invalid key: "' + t + '"')
      },
      getBinary: function(t) {
        return this._binary[t] ? this._binary[t] : void console.warn('Phaser.Cache.getBinary: Invalid key: "' + t + '"')
      },
      getKeys: function(t) {
        var e = [];
        for (var i in t) "__default" !== i && "__missing" !== i && e.push(i);
        return e
      },
      getImageKeys: function() {
        return this.getKeys(this._images)
      },
      getSoundKeys: function() {
        return this.getKeys(this._sounds)
      },
      getTextKeys: function() {
        return this.getKeys(this._text)
      },
      removeCanvas: function(t) {
        delete this._canvases[t]
      },
      removeImage: function(t) {
        delete this._images[t]
      },
      removeSound: function(t) {
        delete this._sounds[t]
      },
      removeText: function(t) {
        delete this._text[t]
      },
      destroy: function() {
        for (var t in this._canvases) delete this._canvases[t.key];
        for (var t in this._images) delete this._images[t.key];
        for (var t in this._sounds) delete this._sounds[t.key];
        for (var t in this._text) delete this._text[t.key]
      }
    }, i.Cache.prototype.constructor = i.Cache, i.Loader = function(t) {
      this.game = t, this._fileList = [], this._fileIndex = 0, this._progressChunk = 0, this._xhr = new XMLHttpRequest, this.isLoading = !1, this.hasLoaded = !1, this.progress = 0, this.progressFloat = 0, this.preloadSprite = null, this.crossOrigin = "", this.baseURL = "", this.onFileComplete = new i.Signal, this.onFileError = new i.Signal, this.onLoadStart = new i.Signal, this.onLoadComplete = new i.Signal
    }, i.Loader.TEXTURE_ATLAS_JSON_ARRAY = 0, i.Loader.TEXTURE_ATLAS_JSON_HASH = 1, i.Loader.TEXTURE_ATLAS_XML_STARLING = 2, i.Loader.prototype = {
      setPreloadSprite: function(t, e) {
        e = e || 0, this.preloadSprite = {
          sprite: t,
          direction: e,
          width: t.width,
          height: t.height,
          crop: null
        }, this.preloadSprite.crop = 0 === e ? new i.Rectangle(0, 0, 1, t.height) : new i.Rectangle(0, 0, t.width, 1), t.crop = this.preloadSprite.crop, t.cropEnabled = !0
      },
      checkKeyExists: function(t, e) {
        if (this._fileList.length > 0)
          for (var i = 0; i < this._fileList.length; i++)
            if (this._fileList[i].type === t && this._fileList[i].key === e) return !0;
        return !1
      },
      getAsset: function(t, e) {
        if (this._fileList.length > 0)
          for (var i = 0; i < this._fileList.length; i++)
            if (this._fileList[i].type === t && this._fileList[i].key === e) return {
              index: i,
              file: this._fileList[i]
            };
        return !1
      },
      reset: function() {
        this.preloadSprite = null, this.isLoading = !1, this._fileList.length = 0, this._fileIndex = 0
      },
      addToFileList: function(t, e, i, s) {
        var n = {
          type: t,
          key: e,
          url: i,
          data: null,
          error: !1,
          loaded: !1
        };
        if ("undefined" != typeof s)
          for (var r in s) n[r] = s[r];
        this.checkKeyExists(t, e) === !1 && this._fileList.push(n)
      },
      replaceInFileList: function(t, e, i, s) {
        var n = {
          type: t,
          key: e,
          url: i,
          data: null,
          error: !1,
          loaded: !1
        };
        if ("undefined" != typeof s)
          for (var r in s) n[r] = s[r];
        this.checkKeyExists(t, e) === !1 && this._fileList.push(n)
      },
      image: function(t, e, i) {
        return "undefined" == typeof i && (i = !1), i ? this.replaceInFileList("image", t, e) : this.addToFileList("image", t, e), this
      },
      text: function(t, e, i) {
        return "undefined" == typeof i && (i = !1), i ? this.replaceInFileList("text", t, e) : this.addToFileList("text", t, e), this
      },
      script: function(t, e) {
        return this.addToFileList("script", t, e), this
      },
      binary: function(t, e, i, s) {
        return "undefined" == typeof i && (i = !1), i !== !1 && "undefined" == typeof s && (s = i), this.addToFileList("binary", t, e, {
          callback: i,
          callbackContext: s
        }), this
      },
      spritesheet: function(t, e, i, s, n, r, o) {
        return "undefined" == typeof n && (n = -1), "undefined" == typeof r && (r = 0), "undefined" == typeof o && (o = 0), this.addToFileList("spritesheet", t, e, {
          frameWidth: i,
          frameHeight: s,
          frameMax: n,
          margin: r,
          spacing: o
        }), this
      },
      audio: function(t, e, i) {
        return "undefined" == typeof i && (i = !0), this.addToFileList("audio", t, e, {
          buffer: null,
          autoDecode: i
        }), this
      },
      tilemap: function(t, e, s, n) {
        if ("undefined" == typeof e && (e = null), "undefined" == typeof s && (s = null), "undefined" == typeof n && (n = i.Tilemap.CSV), null == e && null == s) return console.warn("Phaser.Loader.tilemap - Both mapDataURL and mapData are null. One must be set."), this;
        if (s) {
          switch (n) {
            case i.Tilemap.CSV:
              break;
            case i.Tilemap.TILED_JSON:
              "string" == typeof s && (s = JSON.parse(s))
          }
          this.game.cache.addTilemap(t, null, s, n)
        } else this.addToFileList("tilemap", t, e, {
          format: n
        });
        return this
      },
      bitmapFont: function(t, e, i, s) {
        if ("undefined" == typeof i && (i = null), "undefined" == typeof s && (s = null), i) this.addToFileList("bitmapfont", t, e, {
          xmlURL: i
        });
        else if ("string" == typeof s) {
          var n;
          try {
            if (window.DOMParser) {
              var r = new DOMParser;
              n = r.parseFromString(s, "text/xml")
            } else n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(s)
          } catch (o) {
            n = void 0
          }
          if (!n || !n.documentElement || n.getElementsByTagName("parsererror").length) throw new Error("Phaser.Loader. Invalid Bitmap Font XML given");
          this.addToFileList("bitmapfont", t, e, {
            xmlURL: null,
            xmlData: n
          })
        }
        return this
      },
      atlasJSONArray: function(t, e, s, n) {
        return this.atlas(t, e, s, n, i.Loader.TEXTURE_ATLAS_JSON_ARRAY)
      },
      atlasJSONHash: function(t, e, s, n) {
        return this.atlas(t, e, s, n, i.Loader.TEXTURE_ATLAS_JSON_HASH)
      },
      atlasXML: function(t, e, s, n) {
        return this.atlas(t, e, s, n, i.Loader.TEXTURE_ATLAS_XML_STARLING)
      },
      atlas: function(t, e, s, n, r) {
        if ("undefined" == typeof s && (s = null), "undefined" == typeof n && (n = null), "undefined" == typeof r && (r = i.Loader.TEXTURE_ATLAS_JSON_ARRAY), s) this.addToFileList("textureatlas", t, e, {
          atlasURL: s,
          format: r
        });
        else {
          switch (r) {
            case i.Loader.TEXTURE_ATLAS_JSON_ARRAY:
              "string" == typeof n && (n = JSON.parse(n));
              break;
            case i.Loader.TEXTURE_ATLAS_XML_STARLING:
              if ("string" == typeof n) {
                var o;
                try {
                  if (window.DOMParser) {
                    var a = new DOMParser;
                    o = a.parseFromString(n, "text/xml")
                  } else o = new ActiveXObject("Microsoft.XMLDOM"), o.async = "false", o.loadXML(n)
                } catch (h) {
                  o = void 0
                }
                if (!o || !o.documentElement || o.getElementsByTagName("parsererror").length) throw new Error("Phaser.Loader. Invalid Texture Atlas XML given");
                n = o
              }
          }
          this.addToFileList("textureatlas", t, e, {
            atlasURL: null,
            atlasData: n,
            format: r
          })
        }
        return this
      },
      removeFile: function(t, e) {
        var i = this.getAsset(t, e);
        i !== !1 && this._fileList.splice(i.index, 1)
      },
      removeAll: function() {
        this._fileList.length = 0
      },
      start: function() {
        this.isLoading || (this.progress = 0, this.progressFloat = 0, this.hasLoaded = !1, this.isLoading = !0, this.onLoadStart.dispatch(this._fileList.length), this._fileList.length > 0 ? (this._fileIndex = 0, this._progressChunk = 100 / this._fileList.length, this.loadFile()) : (this.progress = 100, this.progressFloat = 100, this.hasLoaded = !0, this.onLoadComplete.dispatch()))
      },
      loadFile: function() {
        if (!this._fileList[this._fileIndex]) return void console.warn("Phaser.Loader loadFile invalid index " + this._fileIndex);
        var t = this._fileList[this._fileIndex],
          e = this;
        switch (t.type) {
          case "image":
          case "spritesheet":
          case "textureatlas":
          case "bitmapfont":
            t.data = new Image, t.data.name = t.key, t.data.onload = function() {
              return e.fileComplete(e._fileIndex)
            }, t.data.onerror = function() {
              return e.fileError(e._fileIndex)
            }, t.data.crossOrigin = this.crossOrigin, t.data.src = this.baseURL + t.url;
            break;
          case "audio":
            t.url = this.getAudioURL(t.url), null !== t.url ? this.game.sound.usingWebAudio ? (this._xhr.open("GET", this.baseURL + t.url, !0), this._xhr.responseType = "arraybuffer", this._xhr.onload = function() {
              return e.fileComplete(e._fileIndex)
            }, this._xhr.onerror = function() {
              return e.fileError(e._fileIndex)
            }, this._xhr.send()) : this.game.sound.usingAudioTag && (this.game.sound.touchLocked ? (t.data = new Audio, t.data.name = t.key, t.data.preload = "auto", t.data.src = this.baseURL + t.url, this.fileComplete(this._fileIndex)) : (t.data = new Audio, t.data.name = t.key, t.data.onerror = function() {
              return e.fileError(e._fileIndex)
            }, t.data.preload = "auto", t.data.src = this.baseURL + t.url, t.data.addEventListener("canplaythrough", i.GAMES[this.game.id].load.fileComplete(this._fileIndex), !1), t.data.load())) : this.fileError(this._fileIndex);
            break;
          case "tilemap":
            if (this._xhr.open("GET", this.baseURL + t.url, !0), this._xhr.responseType = "text", t.format === i.Tilemap.TILED_JSON) this._xhr.onload = function() {
              return e.jsonLoadComplete(e._fileIndex)
            };
            else {
              if (t.format !== i.Tilemap.CSV) throw new Error("Phaser.Loader. Invalid Tilemap format: " + t.format);
              this._xhr.onload = function() {
                return e.csvLoadComplete(e._fileIndex)
              }
            }
            this._xhr.onerror = function() {
              return e.dataLoadError(e._fileIndex)
            }, this._xhr.send();
            break;
          case "text":
          case "script":
            this._xhr.open("GET", this.baseURL + t.url, !0), this._xhr.responseType = "text", this._xhr.onload = function() {
              return e.fileComplete(e._fileIndex)
            }, this._xhr.onerror = function() {
              return e.fileError(e._fileIndex)
            }, this._xhr.send();
            break;
          case "binary":
            this._xhr.open("GET", this.baseURL + t.url, !0), this._xhr.responseType = "arraybuffer", this._xhr.onload = function() {
              return e.fileComplete(e._fileIndex)
            }, this._xhr.onerror = function() {
              return e.fileError(e._fileIndex)
            }, this._xhr.send()
        }
      },
      getAudioURL: function(t) {
        var e;
        "string" == typeof t && (t = [t]);
        for (var i = 0; i < t.length; i++)
          if (e = t[i].toLowerCase(), e = e.substr((Math.max(0, e.lastIndexOf(".")) || 1 / 0) + 1), this.game.device.canPlayAudio(e)) return t[i];
        return null
      },
      fileError: function(t) {
        this._fileList[t].loaded = !0, this._fileList[t].error = !0, this.onFileError.dispatch(this._fileList[t].key, this._fileList[t]), console.warn("Phaser.Loader error loading file: " + this._fileList[t].key + " from URL " + this._fileList[t].url), this.nextFile(t, !1)
      },
      fileComplete: function(t) {
        if (!this._fileList[t]) return void console.warn("Phaser.Loader fileComplete invalid index " + t);
        var e = this._fileList[t];
        e.loaded = !0;
        var s = !0,
          n = this;
        switch (e.type) {
          case "image":
            this.game.cache.addImage(e.key, e.url, e.data);
            break;
          case "spritesheet":
            this.game.cache.addSpriteSheet(e.key, e.url, e.data, e.frameWidth, e.frameHeight, e.frameMax, e.margin, e.spacing);
            break;
          case "textureatlas":
            if (null == e.atlasURL) this.game.cache.addTextureAtlas(e.key, e.url, e.data, e.atlasData, e.format);
            else {
              if (s = !1, this._xhr.open("GET", this.baseURL + e.atlasURL, !0), this._xhr.responseType = "text", e.format == i.Loader.TEXTURE_ATLAS_JSON_ARRAY || e.format == i.Loader.TEXTURE_ATLAS_JSON_HASH) this._xhr.onload = function() {
                return n.jsonLoadComplete(t)
              };
              else {
                if (e.format != i.Loader.TEXTURE_ATLAS_XML_STARLING) throw new Error("Phaser.Loader. Invalid Texture Atlas format: " + e.format);
                this._xhr.onload = function() {
                  return n.xmlLoadComplete(t)
                }
              }
              this._xhr.onerror = function() {
                return n.dataLoadError(t)
              }, this._xhr.send()
            }
            break;
          case "bitmapfont":
            null == e.xmlURL ? this.game.cache.addBitmapFont(e.key, e.url, e.data, e.xmlData) : (s = !1, this._xhr.open("GET", this.baseURL + e.xmlURL, !0), this._xhr.responseType = "text", this._xhr.onload = function() {
              return n.xmlLoadComplete(t)
            }, this._xhr.onerror = function() {
              return n.dataLoadError(t)
            }, this._xhr.send());
            break;
          case "audio":
            if (this.game.sound.usingWebAudio) {
              if (e.data = this._xhr.response, this.game.cache.addSound(e.key, e.url, e.data, !0, !1), e.autoDecode) {
                this.game.cache.updateSound(o, "isDecoding", !0);
                var r = this,
                  o = e.key;
                this.game.sound.context.decodeAudioData(e.data, function(t) {
                  t && (r.game.cache.decodedSound(o, t), r.game.sound.onSoundDecode.dispatch(o, r.game.cache.getSound(o)))
                })
              }
            } else e.data.removeEventListener("canplaythrough", i.GAMES[this.game.id].load.fileComplete), this.game.cache.addSound(e.key, e.url, e.data, !1, !0);
            break;
          case "text":
            e.data = this._xhr.responseText, this.game.cache.addText(e.key, e.url, e.data);
            break;
          case "script":
            e.data = document.createElement("script"), e.data.language = "javascript", e.data.type = "text/javascript", e.data.defer = !1, e.data.text = this._xhr.responseText, document.head.appendChild(e.data);
            break;
          case "binary":
            e.data = e.callback ? e.callback.call(e.callbackContext, e.key, this._xhr.response) : this._xhr.response, this.game.cache.addBinary(e.key, e.data)
        }
        s && this.nextFile(t, !0)
      },
      jsonLoadComplete: function(t) {
        if (!this._fileList[t]) return void console.warn("Phaser.Loader jsonLoadComplete invalid index " + t);
        var e = this._fileList[t],
          i = JSON.parse(this._xhr.responseText);
        e.loaded = !0, "tilemap" === e.type ? this.game.cache.addTilemap(e.key, e.url, i, e.format) : this.game.cache.addTextureAtlas(e.key, e.url, e.data, i, e.format), this.nextFile(t, !0)
      },
      csvLoadComplete: function(t) {
        if (!this._fileList[t]) return void console.warn("Phaser.Loader csvLoadComplete invalid index " + t);
        var e = this._fileList[t],
          i = this._xhr.responseText;
        e.loaded = !0, this.game.cache.addTilemap(e.key, e.url, i, e.format), this.nextFile(t, !0)
      },
      dataLoadError: function(t) {
        var e = this._fileList[t];
        e.loaded = !0, e.error = !0, console.warn("Phaser.Loader dataLoadError: " + e.key), this.nextFile(t, !0)
      },
      xmlLoadComplete: function(t) {
        var e, i = this._xhr.responseText;
        try {
          if (window.DOMParser) {
            var s = new DOMParser;
            e = s.parseFromString(i, "text/xml")
          } else e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(i)
        } catch (n) {
          e = void 0
        }
        if (!e || !e.documentElement || e.getElementsByTagName("parsererror").length) throw new Error("Phaser.Loader. Invalid XML given");
        var r = this._fileList[t];
        r.loaded = !0, "bitmapfont" == r.type ? this.game.cache.addBitmapFont(r.key, r.url, r.data, e) : "textureatlas" == r.type && this.game.cache.addTextureAtlas(r.key, r.url, r.data, e, r.format), this.nextFile(t, !0)
      },
      nextFile: function(t, e) {
        this.progressFloat += this._progressChunk, this.progress = Math.round(this.progressFloat), this.progress > 100 && (this.progress = 100), null !== this.preloadSprite && (0 === this.preloadSprite.direction ? this.preloadSprite.crop.width = Math.floor(this.preloadSprite.width / 100 * this.progress) : this.preloadSprite.crop.height = Math.floor(this.preloadSprite.height / 100 * this.progress), this.preloadSprite.sprite.crop = this.preloadSprite.crop), this.onFileComplete.dispatch(this.progress, this._fileList[t].key, e, this.totalLoadedFiles(), this._fileList.length), this.totalQueuedFiles() > 0 ? (this._fileIndex++, this.loadFile()) : (this.hasLoaded = !0, this.isLoading = !1, this.removeAll(), this.onLoadComplete.dispatch())
      },
      totalLoadedFiles: function() {
        for (var t = 0, e = 0; e < this._fileList.length; e++) this._fileList[e].loaded && t++;
        return t
      },
      totalQueuedFiles: function() {
        for (var t = 0, e = 0; e < this._fileList.length; e++) this._fileList[e].loaded === !1 && t++;
        return t
      }
    }, i.Loader.prototype.constructor = i.Loader, i.LoaderParser = {
      bitmapFont: function(t, i, s) {
        if (!i.getElementsByTagName("font")) return void console.warn("Phaser.LoaderParser.bitmapFont: Invalid XML given, missing <font> tag");
        var n = e.TextureCache[s],
          r = {},
          o = i.getElementsByTagName("info")[0],
          a = i.getElementsByTagName("common")[0];
        r.font = o.attributes.getNamedItem("face").nodeValue, r.size = parseInt(o.attributes.getNamedItem("size").nodeValue, 10), r.lineHeight = parseInt(a.attributes.getNamedItem("lineHeight").nodeValue, 10), r.chars = {};
        for (var h = i.getElementsByTagName("char"), l = 0; l < h.length; l++) {
          var c = parseInt(h[l].attributes.getNamedItem("id").nodeValue, 10),
            u = {
              x: parseInt(h[l].attributes.getNamedItem("x").nodeValue, 10),
              y: parseInt(h[l].attributes.getNamedItem("y").nodeValue, 10),
              width: parseInt(h[l].attributes.getNamedItem("width").nodeValue, 10),
              height: parseInt(h[l].attributes.getNamedItem("height").nodeValue, 10)
            };
          e.TextureCache[c] = new e.Texture(n, u), r.chars[c] = {
            xOffset: parseInt(h[l].attributes.getNamedItem("xoffset").nodeValue, 10),
            yOffset: parseInt(h[l].attributes.getNamedItem("yoffset").nodeValue, 10),
            xAdvance: parseInt(h[l].attributes.getNamedItem("xadvance").nodeValue, 10),
            kerning: {},
            texture: new e.Texture(n, u)
          }
        }
        var d = i.getElementsByTagName("kerning");
        for (l = 0; l < d.length; l++) {
          var p = parseInt(d[l].attributes.getNamedItem("first").nodeValue, 10),
            f = parseInt(d[l].attributes.getNamedItem("second").nodeValue, 10),
            g = parseInt(d[l].attributes.getNamedItem("amount").nodeValue, 10);
          r.chars[f].kerning[p] = g
        }
        e.BitmapText.fonts[r.font] = r
      }
    }, i.Sound = function(t, e, s, n, r) {
      "undefined" == typeof s && (s = 1), "undefined" == typeof n && (n = !1), "undefined" == typeof r && (r = t.sound.connectToMaster), this.game = t, this.name = e, this.key = e, this.loop = n, this._volume = s, this.markers = {}, this.context = null, this._buffer = null, this._muted = !1, this.autoplay = !1, this.totalDuration = 0, this.startTime = 0, this.currentTime = 0, this.duration = 0, this.stopTime = 0, this.paused = !1, this.pausedPosition = 0, this.pausedTime = 0, this.isPlaying = !1, this.currentMarker = "", this.pendingPlayback = !1, this.override = !1, this.usingWebAudio = this.game.sound.usingWebAudio, this.usingAudioTag = this.game.sound.usingAudioTag, this.externalNode = null, this.usingWebAudio ? (this.context = this.game.sound.context, this.masterGainNode = this.game.sound.masterGain, this.gainNode = "undefined" == typeof this.context.createGain ? this.context.createGainNode() : this.context.createGain(), this.gainNode.gain.value = s * this.game.sound.volume, r && this.gainNode.connect(this.masterGainNode)) : this.game.cache.getSound(e) && this.game.cache.isSoundReady(e) ? (this._sound = this.game.cache.getSoundData(e), this.totalDuration = 0, this._sound.duration && (this.totalDuration = this._sound.duration)) : this.game.cache.onSoundUnlock.add(this.soundHasUnlocked, this), this.onDecoded = new i.Signal, this.onPlay = new i.Signal, this.onPause = new i.Signal, this.onResume = new i.Signal, this.onLoop = new i.Signal, this.onStop = new i.Signal, this.onMute = new i.Signal, this.onMarkerComplete = new i.Signal
    }, i.Sound.prototype = {
      soundHasUnlocked: function(t) {
        t == this.key && (this._sound = this.game.cache.getSoundData(this.key), this.totalDuration = this._sound.duration)
      },
      addMarker: function(t, e, i, s, n) {
        s = s || 1, "undefined" == typeof n && (n = !1), this.markers[t] = {
          name: t,
          start: e,
          stop: e + i,
          volume: s,
          duration: i,
          durationMS: 1e3 * i,
          loop: n
        }
      },
      removeMarker: function(t) {
        delete this.markers[t]
      },
      update: function() {
        this.pendingPlayback && this.game.cache.isSoundReady(this.key) && (this.pendingPlayback = !1, this.play(this._tempMarker, this._tempPosition, this._tempVolume, this._tempLoop)), this.isPlaying && (this.currentTime = this.game.time.now - this.startTime, this.currentTime >= this.durationMS && (this.usingWebAudio ? this.loop ? (this.onLoop.dispatch(this), "" === this.currentMarker ? (this.currentTime = 0, this.startTime = this.game.time.now) : this.play(this.currentMarker, 0, this.volume, !0, !0)) : this.stop() : this.loop ? (this.onLoop.dispatch(this), this.play(this.currentMarker, 0, this.volume, !0, !0)) : this.stop()))
      },
      play: function(t, e, i, s, n) {
        if (t = t || "", e = e || 0, "undefined" == typeof i && (i = this._volume), "undefined" == typeof s && (s = !1), "undefined" == typeof n && (n = !0), this.isPlaying !== !0 || n !== !1 || this.override !== !1) {
          if (this.isPlaying && this.override && (this.usingWebAudio ? "undefined" == typeof this._sound.stop ? this._sound.noteOff(0) : this._sound.stop(0) : this.usingAudioTag && (this._sound.pause(), this._sound.currentTime = 0)), this.currentMarker = t, "" !== t) {
            if (!this.markers[t]) return void console.warn("Phaser.Sound.play: audio marker " + t + " doesn't exist");
            this.position = this.markers[t].start, this.volume = this.markers[t].volume, this.loop = this.markers[t].loop, this.duration = this.markers[t].duration, this.durationMS = this.markers[t].durationMS, this._tempMarker = t, this._tempPosition = this.position, this._tempVolume = this.volume, this._tempLoop = this.loop
          } else this.position = e, this.volume = i, this.loop = s, this.duration = 0, this.durationMS = 0, this._tempMarker = t, this._tempPosition = e, this._tempVolume = i, this._tempLoop = s;
          this.usingWebAudio ? this.game.cache.isSoundDecoded(this.key) ? (null == this._buffer && (this._buffer = this.game.cache.getSoundData(this.key)), this._sound = this.context.createBufferSource(), this._sound.buffer = this._buffer, this._sound.connect(this.externalNode ? this.externalNode.input : this.gainNode), this.totalDuration = this._sound.buffer.duration, 0 === this.duration && (this.duration = this.totalDuration, this.durationMS = 1e3 * this.totalDuration), this.loop && "" === t && (this._sound.loop = !0), "undefined" == typeof this._sound.start ? this._sound.noteGrainOn(0, this.position, this.duration) : this._sound.start(0, this.position, this.duration), this.isPlaying = !0, this.startTime = this.game.time.now, this.currentTime = 0, this.stopTime = this.startTime + this.durationMS, this.onPlay.dispatch(this)) : (this.pendingPlayback = !0, this.game.cache.getSound(this.key) && this.game.cache.getSound(this.key).isDecoding === !1 && this.game.sound.decode(this.key, this)) : this.game.cache.getSound(this.key) && this.game.cache.getSound(this.key).locked ? (this.game.cache.reloadSound(this.key), this.pendingPlayback = !0) : this._sound && (this.game.device.cocoonJS || 4 === this._sound.readyState) ? (this._sound.play(), this.totalDuration = this._sound.duration, 0 === this.duration && (this.duration = this.totalDuration, this.durationMS = 1e3 * this.totalDuration), this._sound.currentTime = this.position, this._sound.muted = this._muted, this._sound.volume = this._muted ? 0 : this._volume, this.isPlaying = !0, this.startTime = this.game.time.now, this.currentTime = 0, this.stopTime = this.startTime + this.durationMS, this.onPlay.dispatch(this)) : this.pendingPlayback = !0
        }
      },
      restart: function(t, e, i, s) {
        t = t || "", e = e || 0, i = i || 1, "undefined" == typeof s && (s = !1), this.play(t, e, i, s, !0)
      },
      pause: function() {
        this.isPlaying && this._sound && (this.stop(), this.isPlaying = !1, this.paused = !0, this.pausedPosition = this.currentTime, this.pausedTime = this.game.time.now, this.onPause.dispatch(this))
      },
      resume: function() {
        if (this.paused && this._sound) {
          if (this.usingWebAudio) {
            var t = this.position + this.pausedPosition / 1e3;
            this._sound = this.context.createBufferSource(), this._sound.buffer = this._buffer, this._sound.connect(this.externalNode ? this.externalNode.input : this.gainNode), this.loop && (this._sound.loop = !0), "undefined" == typeof this._sound.start ? this._sound.noteGrainOn(0, t, this.duration) : this._sound.start(0, t, this.duration)
          } else this._sound.play();
          this.isPlaying = !0, this.paused = !1, this.startTime += this.game.time.now - this.pausedTime, this.onResume.dispatch(this)
        }
      },
      stop: function() {
        this.isPlaying && this._sound && (this.usingWebAudio ? "undefined" == typeof this._sound.stop ? this._sound.noteOff(0) : this._sound.stop(0) : this.usingAudioTag && (this._sound.pause(), this._sound.currentTime = 0)), this.isPlaying = !1;
        var t = this.currentMarker;
        this.currentMarker = "", this.onStop.dispatch(this, t)
      }
    }, i.Sound.prototype.constructor = i.Sound, Object.defineProperty(i.Sound.prototype, "isDecoding", {
      get: function() {
        return this.game.cache.getSound(this.key).isDecoding
      }
    }), Object.defineProperty(i.Sound.prototype, "isDecoded", {
      get: function() {
        return this.game.cache.isSoundDecoded(this.key)
      }
    }), Object.defineProperty(i.Sound.prototype, "mute", {
      get: function() {
        return this._muted
      },
      set: function(t) {
        t = t || null, t ? (this._muted = !0, this.usingWebAudio ? (this._muteVolume = this.gainNode.gain.value, this.gainNode.gain.value = 0) : this.usingAudioTag && this._sound && (this._muteVolume = this._sound.volume, this._sound.volume = 0)) : (this._muted = !1, this.usingWebAudio ? this.gainNode.gain.value = this._muteVolume : this.usingAudioTag && this._sound && (this._sound.volume = this._muteVolume)), this.onMute.dispatch(this)
      }
    }), Object.defineProperty(i.Sound.prototype, "volume", {
      get: function() {
        return this._volume
      },
      set: function(t) {
        this.usingWebAudio ? (this._volume = t, this.gainNode.gain.value = t) : this.usingAudioTag && this._sound && t >= 0 && 1 >= t && (this._volume = t, this._sound.volume = t)
      }
    }), i.SoundManager = function(t) {
      this.game = t, this.onSoundDecode = new i.Signal, this._muted = !1, this._unlockSource = null, this._volume = 1, this._sounds = [], this.context = null, this.usingWebAudio = !0, this.usingAudioTag = !1, this.noAudio = !1, this.connectToMaster = !0, this.touchLocked = !1, this.channels = 32
    }, i.SoundManager.prototype = {
      boot: function() {
        if (this.game.device.iOS && this.game.device.webAudio === !1 && (this.channels = 1), this.game.device.iOS || window.PhaserGlobal && window.PhaserGlobal.fakeiOSTouchLock ? (this.game.input.touch.callbackContext = this, this.game.input.touch.touchStartCallback = this.unlock, this.game.input.mouse.callbackContext = this, this.game.input.mouse.mouseDownCallback = this.unlock, this.touchLocked = !0) : this.touchLocked = !1, window.PhaserGlobal) {
          if (window.PhaserGlobal.disableAudio === !0) return this.usingWebAudio = !1, void(this.noAudio = !0);
          if (window.PhaserGlobal.disableWebAudio === !0) return this.usingWebAudio = !1, this.usingAudioTag = !0, void(this.noAudio = !1)
        }
        window.AudioContext ? this.context = new window.AudioContext : window.webkitAudioContext ? this.context = new window.webkitAudioContext : window.Audio ? (this.usingWebAudio = !1, this.usingAudioTag = !0) : (this.usingWebAudio = !1, this.noAudio = !0), null !== this.context && (this.masterGain = "undefined" == typeof this.context.createGain ? this.context.createGainNode() : this.context.createGain(), this.masterGain.gain.value = 1, this.masterGain.connect(this.context.destination))
      },
      unlock: function() {
        if (this.touchLocked !== !1)
          if (this.game.device.webAudio === !1 || window.PhaserGlobal && window.PhaserGlobal.disableWebAudio === !0) this.touchLocked = !1, this._unlockSource = null, this.game.input.touch.callbackContext = null, this.game.input.touch.touchStartCallback = null, this.game.input.mouse.callbackContext = null, this.game.input.mouse.mouseDownCallback = null;
          else {
            var t = this.context.createBuffer(1, 1, 22050);
            this._unlockSource = this.context.createBufferSource(), this._unlockSource.buffer = t, this._unlockSource.connect(this.context.destination), this._unlockSource.noteOn(0)
          }
      },
      stopAll: function() {
        for (var t = 0; t < this._sounds.length; t++) this._sounds[t] && this._sounds[t].stop()
      },
      pauseAll: function() {
        for (var t = 0; t < this._sounds.length; t++) this._sounds[t] && this._sounds[t].pause()
      },
      resumeAll: function() {
        for (var t = 0; t < this._sounds.length; t++) this._sounds[t] && this._sounds[t].resume()
      },
      decode: function(t, e) {
        e = e || null;
        var i = this.game.cache.getSoundData(t);
        if (i && this.game.cache.isSoundDecoded(t) === !1) {
          this.game.cache.updateSound(t, "isDecoding", !0);
          var s = this;
          this.context.decodeAudioData(i, function(i) {
            s.game.cache.decodedSound(t, i), e && s.onSoundDecode.dispatch(t, e)
          })
        }
      },
      update: function() {
        this.touchLocked && this.game.device.webAudio && null !== this._unlockSource && (this._unlockSource.playbackState === this._unlockSource.PLAYING_STATE || this._unlockSource.playbackState === this._unlockSource.FINISHED_STATE) && (this.touchLocked = !1, this._unlockSource = null, this.game.input.touch.callbackContext = null, this.game.input.touch.touchStartCallback = null);
        for (var t = 0; t < this._sounds.length; t++) this._sounds[t].update()
      },
      add: function(t, e, s, n) {
        "undefined" == typeof e && (e = 1), "undefined" == typeof s && (s = !1), "undefined" == typeof n && (n = this.connectToMaster);
        var r = new i.Sound(this.game, t, e, s, n);
        return this._sounds.push(r), r
      },
      play: function(t, e, i, s) {
        "undefined" == typeof s && (s = !1);
        var n = this.add(t, e, i);
        return n.play(), n
      }
    }, i.SoundManager.prototype.constructor = i.SoundManager, Object.defineProperty(i.SoundManager.prototype, "mute", {
      get: function() {
        return this._muted
      },
      set: function(t) {
        if (t = t || null) {
          if (this._muted) return;
          this._muted = !0, this.usingWebAudio && (this._muteVolume = this.masterGain.gain.value, this.masterGain.gain.value = 0);
          for (var e = 0; e < this._sounds.length; e++) this._sounds[e].usingAudioTag && (this._sounds[e].mute = !0)
        } else {
          if (this._muted === !1) return;
          this._muted = !1, this.usingWebAudio && (this.masterGain.gain.value = this._muteVolume);
          for (var e = 0; e < this._sounds.length; e++) this._sounds[e].usingAudioTag && (this._sounds[e].mute = !1)
        }
      }
    }), Object.defineProperty(i.SoundManager.prototype, "volume", {
      get: function() {
        return this.usingWebAudio ? this.masterGain.gain.value : this._volume
      },
      set: function(t) {
        t = this.game.math.clamp(t, 1, 0), this._volume = t, this.usingWebAudio && (this.masterGain.gain.value = t);
        for (var e = 0; e < this._sounds.length; e++) this._sounds[e].usingAudioTag && (this._sounds[e].volume = this._sounds[e].volume * t)
      }
    }), i.Utils.Debug = function(t) {
      this.game = t, this.context = t.context, this.font = "14px Courier", this.columnWidth = 100, this.lineHeight = 16, this.renderShadow = !0, this.currentX = 0, this.currentY = 0, this.currentAlpha = 1
    }, i.Utils.Debug.prototype = {
      start: function(t, e, i, s) {
        null != this.context && ("number" != typeof t && (t = 0), "number" != typeof e && (e = 0), i = i || "rgb(255,255,255)", "undefined" == typeof s && (s = 0), this.currentX = t, this.currentY = e, this.currentColor = i, this.currentAlpha = this.context.globalAlpha, this.columnWidth = s, this.context.save(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.strokeStyle = i, this.context.fillStyle = i, this.context.font = this.font, this.context.globalAlpha = 1)
      },
      stop: function() {
        this.context.restore(), this.context.globalAlpha = this.currentAlpha
      },
      line: function(t, e, i) {
        null != this.context && ("undefined" != typeof e && (this.currentX = e), "undefined" != typeof i && (this.currentY = i), this.renderShadow && (this.context.fillStyle = "rgb(0,0,0)", this.context.fillText(t, this.currentX + 1, this.currentY + 1), this.context.fillStyle = this.currentColor), this.context.fillText(t, this.currentX, this.currentY), this.currentY += this.lineHeight)
      },
      splitline: function() {
        if (null != this.context) {
          for (var t = this.currentX, e = 0; e < arguments.length; e++) this.renderShadow && (this.context.fillStyle = "rgb(0,0,0)", this.context.fillText(arguments[e], t + 1, this.currentY + 1), this.context.fillStyle = this.currentColor), this.context.fillText(arguments[e], t, this.currentY), t += this.columnWidth;
          this.currentY += this.lineHeight
        }
      },
      renderQuadTree: function(t, e) {
        e = e || "rgba(255,0,0,0.3)", this.start();
        var i = t.bounds;
        if (0 === t.nodes.length) {
          this.context.strokeStyle = e, this.context.strokeRect(i.x, i.y, i.width, i.height), this.renderText(t.ID + " / " + t.objects.length, i.x + 4, i.y + 16, "rgb(0,200,0)", "12px Courier"), this.context.strokeStyle = "rgb(0,255,0)";
          for (var s = 0; s < t.objects.length; s++) this.context.strokeRect(t.objects[s].x, t.objects[s].y, t.objects[s].width, t.objects[s].height)
        } else
          for (var s = 0; s < t.nodes.length; s++) this.renderQuadTree(t.nodes[s]);
        this.stop()
      },
      renderSpriteCorners: function(t, e, i, s) {
        null != this.context && (e = e || !1, i = i || !1, s = s || "rgb(255,255,255)", this.start(0, 0, s), i && (this.context.beginPath(), this.context.strokeStyle = "rgba(0, 255, 0, 0.7)", this.context.strokeRect(t.bounds.x, t.bounds.y, t.bounds.width, t.bounds.height), this.context.closePath(), this.context.stroke()), this.context.beginPath(), this.context.moveTo(t.topLeft.x, t.topLeft.y), this.context.lineTo(t.topRight.x, t.topRight.y), this.context.lineTo(t.bottomRight.x, t.bottomRight.y), this.context.lineTo(t.bottomLeft.x, t.bottomLeft.y), this.context.closePath(), this.context.strokeStyle = "rgba(255, 0, 255, 0.7)", this.context.stroke(), this.renderPoint(t.offset), this.renderPoint(t.center), this.renderPoint(t.topLeft), this.renderPoint(t.topRight), this.renderPoint(t.bottomLeft), this.renderPoint(t.bottomRight), e && (this.currentColor = s, this.line("x: " + Math.floor(t.topLeft.x) + " y: " + Math.floor(t.topLeft.y), t.topLeft.x, t.topLeft.y), this.line("x: " + Math.floor(t.topRight.x) + " y: " + Math.floor(t.topRight.y), t.topRight.x, t.topRight.y), this.line("x: " + Math.floor(t.bottomLeft.x) + " y: " + Math.floor(t.bottomLeft.y), t.bottomLeft.x, t.bottomLeft.y), this.line("x: " + Math.floor(t.bottomRight.x) + " y: " + Math.floor(t.bottomRight.y), t.bottomRight.x, t.bottomRight.y)), this.stop())
      },
      renderSoundInfo: function(t, e, i, s) {
        null != this.context && (s = s || "rgb(255,255,255)", this.start(e, i, s), this.line("Sound: " + t.key + " Locked: " + t.game.sound.touchLocked), this.line("Is Ready?: " + this.game.cache.isSoundReady(t.key) + " Pending Playback: " + t.pendingPlayback), this.line("Decoded: " + t.isDecoded + " Decoding: " + t.isDecoding), this.line("Total Duration: " + t.totalDuration + " Playing: " + t.isPlaying), this.line("Time: " + t.currentTime), this.line("Volume: " + t.volume + " Muted: " + t.mute), this.line("WebAudio: " + t.usingWebAudio + " Audio: " + t.usingAudioTag), "" !== t.currentMarker && (this.line("Marker: " + t.currentMarker + " Duration: " + t.duration), this.line("Start: " + t.markers[t.currentMarker].start + " Stop: " + t.markers[t.currentMarker].stop), this.line("Position: " + t.position)), this.stop())
      },
      renderCameraInfo: function(t, e, i, s) {
        null != this.context && (s = s || "rgb(255,255,255)", this.start(e, i, s), this.line("Camera (" + t.width + " x " + t.height + ")"), this.line("X: " + t.x + " Y: " + t.y), this.line("Bounds x: " + t.bounds.x + " Y: " + t.bounds.y + " w: " + t.bounds.width + " h: " + t.bounds.height), this.line("View x: " + t.view.x + " Y: " + t.view.y + " w: " + t.view.width + " h: " + t.view.height), this.stop())
      },
      renderPointer: function(t, e, i, s, n) {
        null != this.context && null != t && ("undefined" == typeof e && (e = !1), i = i || "rgba(0,255,0,0.5)", s = s || "rgba(255,0,0,0.5)", n = n || "rgb(255,255,255)", (e !== !0 || t.isUp !== !0) && (this.start(t.x, t.y - 100, n), this.context.beginPath(), this.context.arc(t.x, t.y, t.circle.radius, 0, 2 * Math.PI), this.context.fillStyle = t.active ? i : s, this.context.fill(), this.context.closePath(), this.context.beginPath(), this.context.moveTo(t.positionDown.x, t.positionDown.y), this.context.lineTo(t.position.x, t.position.y), this.context.lineWidth = 2, this.context.stroke(), this.context.closePath(), this.line("ID: " + t.id + " Active: " + t.active), this.line("World X: " + t.worldX + " World Y: " + t.worldY), this.line("Screen X: " + t.x + " Screen Y: " + t.y), this.line("Duration: " + t.duration + " ms"), this.stop()))
      },
      renderSpriteInputInfo: function(t, e, i, s) {
        s = s || "rgb(255,255,255)", this.start(e, i, s), this.line("Sprite Input: (" + t.width + " x " + t.height + ")"), this.line("x: " + t.input.pointerX().toFixed(1) + " y: " + t.input.pointerY().toFixed(1)), this.line("over: " + t.input.pointerOver() + " duration: " + t.input.overDuration().toFixed(0)), this.line("down: " + t.input.pointerDown() + " duration: " + t.input.downDuration().toFixed(0)), this.line("just over: " + t.input.justOver() + " just out: " + t.input.justOut()), this.stop()
      },
      renderBodyInfo: function(t, e, i, s) {
        s = s || "rgb(255,255,255)", this.start(e, i, s, 210), this.splitline("x: " + t.body.x.toFixed(2), "y: " + t.body.y.toFixed(2), "width: " + t.width, "height: " + t.height), this.splitline("speed: " + t.body.speed.toFixed(2), "angle: " + t.body.angle.toFixed(2), "linear damping: " + t.body.linearDamping), this.splitline("blocked left: " + t.body.blocked.left, "right: " + t.body.blocked.right, "up: " + t.body.blocked.up, "down: " + t.body.blocked.down), this.splitline("touching left: " + t.body.touching.left, "right: " + t.body.touching.right, "up: " + t.body.touching.up, "down: " + t.body.touching.down), this.splitline("gravity x: " + t.body.gravity.x, "y: " + t.body.gravity.y, "world gravity x: " + this.game.physics.gravity.x, "y: " + this.game.physics.gravity.y), this.splitline("acceleration x: " + t.body.acceleration.x.toFixed(2), "y: " + t.body.acceleration.y.toFixed(2)), this.splitline("velocity x: " + t.body.velocity.x.toFixed(2), "y: " + t.body.velocity.y.toFixed(2), "deltaX: " + t.body.deltaX().toFixed(2), "deltaY: " + t.body.deltaY().toFixed(2)), this.splitline("bounce x: " + t.body.bounce.x.toFixed(2), "y: " + t.body.bounce.y.toFixed(2)), this.stop()
      },
      renderInputInfo: function(t, e, i) {
        null != this.context && (i = i || "rgb(255,255,0)", this.start(t, e, i), this.line("Input"), this.line("X: " + this.game.input.x + " Y: " + this.game.input.y), this.line("World X: " + this.game.input.worldX + " World Y: " + this.game.input.worldY), this.line("Scale X: " + this.game.input.scale.x.toFixed(1) + " Scale Y: " + this.game.input.scale.x.toFixed(1)), this.line("Screen X: " + this.game.input.activePointer.screenX + " Screen Y: " + this.game.input.activePointer.screenY), this.stop())
      },
      renderSpriteInfo: function(t, e, i, s) {
        null != this.context && (s = s || "rgb(255, 255, 255)", this.start(e, i, s), this.line("Sprite:  (" + t.width + " x " + t.height + ") anchor: " + t.anchor.x + " x " + t.anchor.y), this.line("x: " + t.x.toFixed(1) + " y: " + t.y.toFixed(1)), this.line("angle: " + t.angle.toFixed(1) + " rotation: " + t.rotation.toFixed(1)), this.line("visible: " + t.visible + " in camera: " + t.inCamera), this.line("body x: " + t.body.x.toFixed(1) + " y: " + t.body.y.toFixed(1)), this.line("id: " + t._id), this.line("scale x: " + t.worldTransform[0]), this.line("scale y: " + t.worldTransform[4]), this.line("tx: " + t.worldTransform[2]), this.line("ty: " + t.worldTransform[5]), this.line("skew x: " + t.worldTransform[3]), this.line("skew y: " + t.worldTransform[1]), this.line("sdx: " + t.deltaX), this.line("sdy: " + t.deltaY), this.stop())
      },
      renderSpriteCoords: function(t, e, i, s) {
        null != this.context && (s = s || "rgb(255, 255, 255)", this.start(e, i, s, 100), t.name && this.line(t.name), this.splitline("x:", t.x.toFixed(2), "y:", t.y.toFixed(2)), this.splitline("pos x:", t.position.x.toFixed(2), "pos y:", t.position.y.toFixed(2)), this.splitline("world x:", t.world.x.toFixed(2), "world y:", t.world.y.toFixed(2)), this.stop())
      },
      renderLine: function(t, e) {
        null != this.context && (e = e || "rgb(255, 255, 255)", this.start(0, 0, e), this.context.lineWidth = 1, this.context.beginPath(), this.context.moveTo(t.start.x + .5, t.start.y + .5), this.context.lineTo(t.end.x + .5, t.end.y + .5), this.context.closePath(), this.context.stroke(), this.stop())
      },
      renderLineInfo: function(t, e, i, s) {
        null != this.context && (s = s || "rgb(255, 255, 255)", this.start(e, i, s, 80), this.splitline("start.x:", t.start.x.toFixed(2), "start.y:", t.start.y.toFixed(2)), this.splitline("end.x:", t.end.x.toFixed(2), "end.y:", t.end.y.toFixed(2)), this.splitline("length:", t.length.toFixed(2), "angle:", t.angle), this.stop())
      },
      renderPointInfo: function(t, e, i, s) {
        null != this.context && (s = s || "rgb(255, 255, 255)", this.start(e, i, s), this.line("px: " + t.x.toFixed(1) + " py: " + t.y.toFixed(1)), this.stop())
      },
      renderSpriteBody: function(t, e, i) {
        null != this.context && (e = e || "rgb(255,0,255)", "undefined" == typeof i && (i = !1), this.start(0, 0, e), i ? (this.context.fillStyle = e, this.context.fillRect(t.body.left, t.body.top, t.body.width, t.body.height)) : (this.context.strokeStyle = e, this.context.strokeRect(t.body.left, t.body.top, t.body.width, t.body.height), this.context.stroke()), this.stop())
      },
      renderSpriteBounds: function(t, e, i) {
        null != this.context && (e = e || "rgb(255,0,255)", "undefined" == typeof i && (i = !1), this.start(0, 0, e), i ? (this.context.fillStyle = e, this.context.fillRect(t.bounds.x, t.bounds.y, t.bounds.width, t.bounds.height)) : (this.context.strokeStyle = e, this.context.strokeRect(t.bounds.x, t.bounds.y, t.bounds.width, t.bounds.height), this.context.stroke()), this.stop())
      },
      renderPixel: function(t, e, i) {
        null != this.context && (i = i || "rgba(0,255,0,1)", this.start(), this.context.fillStyle = i, this.context.fillRect(t, e, 2, 2), this.stop())
      },
      renderPoint: function(t, e) {
        null != this.context && (e = e || "rgba(0,255,0,1)", this.start(), this.context.fillStyle = e, this.context.fillRect(t.x, t.y, 4, 4), this.stop())
      },
      renderRectangle: function(t, e) {
        null != this.context && (e = e || "rgba(0,255,0,0.3)", this.start(), this.context.fillStyle = e, this.context.fillRect(t.x, t.y, t.width, t.height), this.stop())
      },
      renderCircle: function(t, e) {
        null != this.context && (e = e || "rgba(0,255,0,0.3)", this.start(), this.context.beginPath(), this.context.fillStyle = e, this.context.arc(t.x, t.y, t.radius, 0, 2 * Math.PI, !1), this.context.fill(), this.context.closePath(), this.stop())
      },
      renderText: function(t, e, i, s, n) {
        null != this.context && (s = s || "rgb(255,255,255)", n = n || "16px Courier", this.start(), this.context.font = n, this.context.fillStyle = s, this.context.fillText(t, e, i), this.stop())
      },
      renderPhysicsBody: function(t, e, s) {
        if (null !== this.context || null !== s) {
          e = e || "rgb(255,255,255)";
          var n = t.x - this.game.camera.x,
            r = t.y - this.game.camera.y;
          if (t.type === i.Physics.Arcade.CIRCLE) this.start(0, 0, e), this.context.beginPath(), this.context.strokeStyle = e, this.context.arc(n, r, t.shape.r, 0, 2 * Math.PI, !1), this.context.stroke(), this.context.closePath(), this.stop();
          else {
            var o = t.polygon.points;
            this.start(0, 0, e), this.context.beginPath(), this.context.moveTo(n + o[0].x, r + o[0].y);
            for (var a = 1; a < o.length; a++) this.context.lineTo(n + o[a].x, r + o[a].y);
            this.context.closePath(), this.context.strokeStyle = e, this.context.stroke(), this.context.fillStyle = "rgb(255,0,0)", this.context.fillRect(n + o[0].x - 2, r + o[0].y - 2, 5, 5);
            for (var a = 1; a < o.length; a++) this.context.fillStyle = "rgb(255," + 40 * a + ",0)", this.context.fillRect(n + o[a].x - 2, r + o[a].y - 2, 5, 5);
            this.stop()
          }
        }
      },
      renderPolygon: function(t, e, i) {
        if (null !== this.context || null !== i) {
          e = e || "rgb(255,255,255)";
          var s = t.points,
            n = t.pos.x,
            r = t.pos.y;
          this.start(0, 0, e), this.context.beginPath(), this.context.moveTo(n + s[0].x, r + s[0].y);
          for (var o = 1; o < s.length; o++) this.context.lineTo(n + s[o].x, r + s[o].y);
          this.context.closePath(), this.context.strokeStyle = e, this.context.stroke(), this.stop()
        }
      }
    }, i.Utils.Debug.prototype.constructor = i.Utils.Debug, i.Color = {
      getColor32: function(t, e, i, s) {
        return t << 24 | e << 16 | i << 8 | s
      },
      getColor: function(t, e, i) {
        return t << 16 | e << 8 | i
      },
      hexToRGB: function(t) {
        var e = "#" == t.charAt(0) ? t.substring(1, 7) : t;
        3 == e.length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2));
        var i = parseInt(e.substring(0, 2), 16),
          s = parseInt(e.substring(2, 4), 16),
          n = parseInt(e.substring(4, 6), 16);
        return i << 16 | s << 8 | n
      },
      getColorInfo: function(t) {
        var e = i.Color.getRGB(t),
          s = i.Color.RGBtoHSV(t),
          n = i.Color.RGBtoHexstring(t) + "\n";
        return n = n.concat("Alpha: " + e.alpha + " Red: " + e.red + " Green: " + e.green + " Blue: " + e.blue) + "\n", n = n.concat("Hue: " + s.hue + " Saturation: " + s.saturation + " Lightnes: " + s.lightness)
      },
      RGBtoHexstring: function(t) {
        var e = i.Color.getRGB(t);
        return "0x" + i.Color.colorToHexstring(e.alpha) + i.Color.colorToHexstring(e.red) + i.Color.colorToHexstring(e.green) + i.Color.colorToHexstring(e.blue)
      },
      RGBtoWebstring: function(t) {
        var e = i.Color.getRGB(t);
        return "#" + i.Color.colorToHexstring(e.red) + i.Color.colorToHexstring(e.green) + i.Color.colorToHexstring(e.blue)
      },
      colorToHexstring: function(t) {
        var e = "0123456789ABCDEF",
          i = t % 16,
          s = (t - i) / 16,
          n = e.charAt(s) + e.charAt(i);
        return n
      },
      interpolateColor: function(t, e, s, n, r) {
        "undefined" == typeof r && (r = 255);
        var o = i.Color.getRGB(t),
          a = i.Color.getRGB(e),
          h = (a.red - o.red) * n / s + o.red,
          l = (a.green - o.green) * n / s + o.green,
          c = (a.blue - o.blue) * n / s + o.blue;
        return i.Color.getColor32(r, h, l, c)
      },
      interpolateColorWithRGB: function(t, e, s, n, r, o) {
        var a = i.Color.getRGB(t),
          h = (e - a.red) * o / r + a.red,
          l = (s - a.green) * o / r + a.green,
          c = (n - a.blue) * o / r + a.blue;
        return i.Color.getColor(h, l, c)
      },
      interpolateRGB: function(t, e, s, n, r, o, a, h) {
        var l = (n - t) * h / a + t,
          c = (r - e) * h / a + e,
          u = (o - s) * h / a + s;
        return i.Color.getColor(l, c, u)
      },
      getRandomColor: function(t, e, s) {
        if ("undefined" == typeof t && (t = 0), "undefined" == typeof e && (e = 255), "undefined" == typeof s && (s = 255), e > 255) return i.Color.getColor(255, 255, 255);
        if (t > e) return i.Color.getColor(255, 255, 255);
        var n = t + Math.round(Math.random() * (e - t)),
          r = t + Math.round(Math.random() * (e - t)),
          o = t + Math.round(Math.random() * (e - t));
        return i.Color.getColor32(s, n, r, o)
      },
      getRGB: function(t) {
        return {
          alpha: t >>> 24,
          red: t >> 16 & 255,
          green: t >> 8 & 255,
          blue: 255 & t
        }
      },
      getWebRGB: function(t) {
        var e = (t >>> 24) / 255,
          i = t >> 16 & 255,
          s = t >> 8 & 255,
          n = 255 & t;
        return "rgba(" + i.toString() + "," + s.toString() + "," + n.toString() + "," + e.toString() + ")"
      },
      getAlpha: function(t) {
        return t >>> 24
      },
      getAlphaFloat: function(t) {
        return (t >>> 24) / 255
      },
      getRed: function(t) {
        return t >> 16 & 255
      },
      getGreen: function(t) {
        return t >> 8 & 255
      },
      getBlue: function(t) {
        return 255 & t
      }
    },
    function(t, e) {
      "use strict";
      "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.SAT = e()
    }(this, function() {
      "use strict";

      function t(t, e) {
        this.x = t || 0, this.y = e || 0
      }

      function e(e, i) {
        this.pos = e || new t, this.r = i || 0
      }

      function i(e, i) {
        this.pos = e || new t, this.points = i || [], this.recalc()
      }

      function s(e, i, s) {
        this.pos = e || new t, this.w = i || 0, this.h = s || 0
      }

      function n() {
        this.a = null, this.b = null, this.overlapN = new t, this.overlapV = new t, this.clear()
      }

      function r(t, e, i) {
        for (var s = Number.MAX_VALUE, n = -Number.MAX_VALUE, r = t.length, o = 0; r > o; o++) {
          var a = t[o].dot(e);
          s > a && (s = a), a > n && (n = a)
        }
        i[0] = s, i[1] = n
      }

      function o(t, e, i, s, n, o) {
        var a = g.pop(),
          h = g.pop(),
          l = p.pop().copy(e).sub(t),
          c = l.dot(n);
        if (r(i, n, a), r(s, n, h), h[0] += c, h[1] += c, a[0] > h[1] || h[0] > a[1]) return p.push(l), g.push(a), g.push(h), !0;
        if (o) {
          var u = 0;
          if (a[0] < h[0])
            if (o.aInB = !1, a[1] < h[1]) u = a[1] - h[0], o.bInA = !1;
            else {
              var d = a[1] - h[0],
                f = h[1] - a[0];
              u = f > d ? d : -f
            } else if (o.bInA = !1, a[1] > h[1]) u = a[0] - h[1], o.aInB = !1;
          else {
            var d = a[1] - h[0],
              f = h[1] - a[0];
            u = f > d ? d : -f
          }
          var m = Math.abs(u);
          m < o.overlap && (o.overlap = m, o.overlapN.copy(n), 0 > u && o.overlapN.reverse())
        }
        return p.push(l), g.push(a), g.push(h), !1
      }

      function a(t, e) {
        var i = t.len2(),
          s = e.dot(t);
        return 0 > s ? m : s > i ? _ : y
      }

      function h(t, e, i) {
        var s = p.pop().copy(e.pos).sub(t.pos),
          n = t.r + e.r,
          r = n * n,
          o = s.len2();
        if (o > r) return p.push(s), !1;
        if (i) {
          var a = Math.sqrt(o);
          i.a = t, i.b = e, i.overlap = n - a, i.overlapN.copy(s.normalize()), i.overlapV.copy(s).scale(i.overlap), i.aInB = t.r <= e.r && a <= e.r - t.r, i.bInA = e.r <= t.r && a <= t.r - e.r
        }
        return p.push(s), !0
      }

      function l(t, e, i) {
        for (var s = p.pop().copy(e.pos).sub(t.pos), n = e.r, r = n * n, o = t.points, h = o.length, l = p.pop(), c = p.pop(), u = 0; h > u; u++) {
          var d = u === h - 1 ? 0 : u + 1,
            f = 0 === u ? h - 1 : u - 1,
            g = 0,
            y = null;
          l.copy(t.edges[u]), c.copy(s).sub(o[u]), i && c.len2() > r && (i.aInB = !1);
          var x = a(l, c);
          if (x === m) {
            l.copy(t.edges[f]);
            var v = p.pop().copy(s).sub(o[f]);
            if (x = a(l, v), x === _) {
              var b = c.len();
              if (b > n) return p.push(s), p.push(l), p.push(c), p.push(v), !1;
              i && (i.bInA = !1, y = c.normalize(), g = n - b)
            }
            p.push(v)
          } else if (x === _) {
            if (l.copy(t.edges[d]), c.copy(s).sub(o[d]), x = a(l, c), x === m) {
              var b = c.len();
              if (b > n) return p.push(s), p.push(l), p.push(c), !1;
              i && (i.bInA = !1, y = c.normalize(), g = n - b)
            }
          } else {
            var w = l.perp().normalize(),
              b = c.dot(w),
              T = Math.abs(b);
            if (b > 0 && T > n) return p.push(s), p.push(w), p.push(c), !1;
            i && (y = w, g = n - b, (b >= 0 || 2 * n > g) && (i.bInA = !1))
          }
          y && i && Math.abs(g) < Math.abs(i.overlap) && (i.overlap = g, i.overlapN.copy(y))
        }
        return i && (i.a = t, i.b = e, i.overlapV.copy(i.overlapN).scale(i.overlap)), p.push(s), p.push(l), p.push(c), !0
      }

      function c(t, e, i) {
        var s = l(e, t, i);
        if (s && i) {
          var n = i.a,
            r = i.aInB;
          i.overlapN.reverse(), i.overlapV.reverse(), i.a = i.b, i.b = n, i.aInB = i.bInA, i.bInA = r
        }
        return s
      }

      function u(t, e, i) {
        for (var s = t.points, n = s.length, r = e.points, a = r.length, h = 0; n > h; h++)
          if (o(t.pos, e.pos, s, r, t.normals[h], i)) return !1;
        for (var h = 0; a > h; h++)
          if (o(t.pos, e.pos, s, r, e.normals[h], i)) return !1;
        return i && (i.a = t, i.b = e, i.overlapV.copy(i.overlapN).scale(i.overlap)), !0
      }
      var d = {};
      d.Vector = t, d.V = t, t.prototype.copy = t.prototype.copy = function(t) {
        return this.x = t.x, this.y = t.y, this
      }, t.prototype.perp = t.prototype.perp = function() {
        var t = this.x;
        return this.x = this.y, this.y = -t, this
      }, t.prototype.rotate = t.prototype.rotate = function(t) {
        var e = this.x,
          i = this.y;
        return this.x = e * Math.cos(t) - i * Math.sin(t), this.y = e * Math.sin(t) + i * Math.cos(t), this
      }, t.prototype.rotatePrecalc = t.prototype.rotatePrecalc = function(t, e) {
        var i = this.x,
          s = this.y;
        return this.x = i * e - s * t, this.y = i * t + s * e, this
      }, t.prototype.reverse = t.prototype.reverse = function() {
        return this.x = -this.x, this.y = -this.y, this
      }, t.prototype.normalize = t.prototype.normalize = function() {
        var t = this.len();
        return t > 0 && (this.x = this.x / t, this.y = this.y / t), this
      }, t.prototype.add = t.prototype.add = function(t) {
        return this.x += t.x, this.y += t.y, this
      }, t.prototype.sub = t.prototype.sub = function(t) {
        return this.x -= t.x, this.y -= t.y, this
      }, t.prototype.scale = t.prototype.scale = function(t, e) {
        return this.x *= t, this.y *= e || t, this
      }, t.prototype.project = t.prototype.project = function(t) {
        var e = this.dot(t) / t.len2();
        return this.x = e * t.x, this.y = e * t.y, this
      }, t.prototype.projectN = t.prototype.projectN = function(t) {
        var e = this.dot(t);
        return this.x = e * t.x, this.y = e * t.y, this
      }, t.prototype.reflect = t.prototype.reflect = function(t) {
        var e = this.x,
          i = this.y;
        return this.project(t).scale(2), this.x -= e, this.y -= i, this
      }, t.prototype.reflectN = t.prototype.reflectN = function(t) {
        var e = this.x,
          i = this.y;
        return this.projectN(t).scale(2), this.x -= e, this.y -= i, this
      }, t.prototype.dot = t.prototype.dot = function(t) {
        return this.x * t.x + this.y * t.y
      }, t.prototype.len2 = t.prototype.len2 = function() {
        return this.dot(this)
      }, t.prototype.len = t.prototype.len = function() {
        return Math.sqrt(this.len2())
      }, d.Circle = e, d.Polygon = i, i.prototype.recalc = i.prototype.recalc = function() {
        this.edges = [], this.normals = [];
        for (var e = this.points, i = e.length, s = 0; i > s; s++) {
          var n = e[s],
            r = i - 1 > s ? e[s + 1] : e[0],
            o = (new t).copy(r).sub(n),
            a = (new t).copy(o).perp().normalize();
          this.edges.push(o), this.normals.push(a)
        }
        return this
      }, i.prototype.rotate = i.prototype.rotate = function(t) {
        var e, i = this.points,
          s = this.edges,
          n = this.normals,
          r = i.length,
          o = Math.cos(t),
          a = Math.sin(t);
        for (e = 0; r > e; e++) i[e].rotatePrecalc(a, o), s[e].rotatePrecalc(a, o), n[e].rotatePrecalc(a, o);
        return this
      }, i.prototype.scale = i.prototype.scale = function(t, e) {
        var i, s = this.points,
          n = this.edges,
          r = this.normals,
          o = s.length;
        for (i = 0; o > i; i++) s[i].scale(t, e), n[i].scale(t, e), r[i].scale(t, e);
        return this
      }, i.prototype.translate = i.prototype.translate = function(t, e) {
        var i, s = this.points,
          n = s.length;
        for (i = 0; n > i; i++) s[i].x += t, s[i].y += e;
        return this
      }, d.Box = s, s.prototype.toPolygon = s.prototype.toPolygon = function() {
        var e = this.pos,
          s = this.w,
          n = this.h;
        return new i(new t(e.x, e.y), [new t, new t(s, 0), new t(s, n), new t(0, n)])
      }, d.Response = n, n.prototype.clear = n.prototype.clear = function() {
        return this.aInB = !0, this.bInA = !0, this.overlap = Number.MAX_VALUE, this
      };
      for (var p = [], f = 0; 10 > f; f++) p.push(new t);
      for (var g = [], f = 0; 5 > f; f++) g.push([]);
      var m = -1,
        y = 0,
        _ = 1;
      return d.testCircleCircle = h, d.testPolygonCircle = l, d.testCirclePolygon = c, d.testPolygonPolygon = u, d
    }), i.Physics = {}, i.Physics.Arcade = function(t) {
      this.game = t, this.gravity = new i.Point, this.worldLeft = null, this.worldRight = null, this.worldTop = null, this.worldBottom = null, this.worldPolys = [null, null, null, null], this.quadTree = new i.QuadTree(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, this.maxObjects, this.maxLevels), this.maxObjects = 10, this.maxLevels = 4, this._mapData = [], this._mapTiles = 0, this._result = !1, this._total = 0, this._angle = 0, this._drag = 0, this._dx = 0, this._dy = 0, this._p = new i.Point(0, 0), this._intersection = [0, 0, 0, 0], this._gravityX = 0, this._gravityY = 0, this._response = new SAT.Response, this.setBoundsToWorld(!0, !0, !0, !0)
    }, i.Physics.Arcade.RECT = 0, i.Physics.Arcade.CIRCLE = 1, i.Physics.Arcade.POLYGON = 2, i.Physics.Arcade.prototype = {
      checkBounds: function(t) {
        if (!t.collideWorldBounds || !this.worldLeft && !this.worldRight && !this.worldTop && !this.worldBottom) return !1;
        this._response.clear();
        var e = SAT.testPolygonPolygon,
          s = t.polygon,
          n = !1;
        return t.type === i.Physics.Arcade.CIRCLE && (e = SAT.testPolygonCircle, s = t.shape), this.worldLeft && e(this.worldPolys[0], s, this._response) ? (t.blocked.left = !0, s.pos.add(this._response.overlapV), t.blocked.x = Math.floor(t.x), t.blocked.y = Math.floor(t.y), n = !0) : this.worldRight && e(this.worldPolys[1], s, this._response) && (t.blocked.right = !0, s.pos.add(this._response.overlapV), t.blocked.x = Math.floor(t.x), t.blocked.y = Math.floor(t.y), n = !0), this._response.clear(), this.worldTop && e(this.worldPolys[2], s, this._response) ? (t.blocked.up = !0, s.pos.add(this._response.overlapV), t.blocked.x = Math.floor(t.x), t.blocked.y = Math.floor(t.y), n = !0) : this.worldBottom && e(this.worldPolys[3], s, this._response) && (t.blocked.down = !0, s.pos.add(this._response.overlapV), t.blocked.x = Math.floor(t.x), t.blocked.y = Math.floor(t.y), n = !0), n
      },
      setBoundsToWorld: function(t, e, i, s) {
        this.setBounds(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, t, e, i, s)
      },
      setBounds: function(t, e, i, s, n, r, o, a) {
        "undefined" == typeof n && (n = !0), "undefined" == typeof r && (r = !0), "undefined" == typeof o && (o = !0), "undefined" == typeof a && (a = !0);
        var h = 100;
        n ? (this.worldLeft = new SAT.Box(new SAT.Vector(t - h, e), h, s), this.worldPolys[0] = this.worldLeft.toPolygon()) : (this.worldLeft = null, this.worldPolys[0] = null), r ? (this.worldRight = new SAT.Box(new SAT.Vector(t + i, e), h, s), this.worldPolys[1] = this.worldRight.toPolygon()) : (this.worldRight = null, this.worldPolys[1] = null), o ? (this.worldTop = new SAT.Box(new SAT.Vector(t, e - h), i, h), this.worldPolys[2] = this.worldTop.toPolygon()) : (this.worldTop = null, this.worldPolys[2] = null), a ? (this.worldBottom = new SAT.Box(new SAT.Vector(t, e + s), i, h), this.worldPolys[3] = this.worldBottom.toPolygon()) : (this.worldBottom = null, this.worldPolys[3] = null)
      },
      updateMotion: function(t) {
        return t.allowGravity ? (this._gravityX = this.gravity.x + t.gravity.x, this._gravityY = this.gravity.y + t.gravity.y) : (this._gravityX = t.gravity.x, this._gravityY = t.gravity.y), (this._gravityX < 0 && t.blocked.left || this._gravityX > 0 && t.blocked.right) && (this._gravityX = 0), (this._gravityY < 0 && t.blocked.up || this._gravityY > 0 && t.blocked.down) && (this._gravityY = 0), t.allowRotation && (this._velocityDelta = t.angularAcceleration * this.game.time.physicsElapsed, 0 !== t.angularDrag && 0 === t.angularAcceleration && (this._drag = t.angularDrag * this.game.time.physicsElapsed, t.angularVelocity > 0 ? t.angularVelocity -= this._drag : t.angularVelocity < 0 && (t.angularVelocity += this._drag)), t.rotation += this.game.time.physicsElapsed * (t.angularVelocity + this._velocityDelta / 2), t.angularVelocity += this._velocityDelta, t.angularVelocity > t.maxAngular ? t.angularVelocity = t.maxAngular : t.angularVelocity < -t.maxAngular && (t.angularVelocity = -t.maxAngular)), this._p.setTo((t.acceleration.x + this._gravityX) * this.game.time.physicsElapsed, (t.acceleration.y + this._gravityY) * this.game.time.physicsElapsed), this._p
      },
      overlap: function(t, e, i, s, n) {
        if (i = i || null, s = s || null, n = n || i, this._result = !1, this._total = 0, Array.isArray(e))
          for (var r = 0, o = e.length; o > r; r++) this.collideHandler(t, e[r], i, s, n, !0);
        else this.collideHandler(t, e, i, s, n, !0);
        return this._total > 0
      },
      collide: function(t, e, i, s, n) {
        if (i = i || null, s = s || null, n = n || i, this._result = !1, this._total = 0, Array.isArray(e))
          for (var r = 0, o = e.length; o > r; r++) this.collideHandler(t, e[r], i, s, n, !1);
        else this.collideHandler(t, e, i, s, n, !1);
        return this._total > 0
      },
      collideHandler: function(t, e, s, n, r, o) {
        return "undefined" != typeof e || t.type !== i.GROUP && t.type !== i.EMITTER ? void(t && e && t.exists && e.exists && (t.type == i.SPRITE || t.type == i.TILESPRITE ? e.type == i.SPRITE || e.type == i.TILESPRITE ? this.collideSpriteVsSprite(t, e, s, n, r, o) : e.type == i.GROUP || e.type == i.EMITTER ? this.collideSpriteVsGroup(t, e, s, n, r, o) : e.type == i.TILEMAPLAYER && this.collideSpriteVsTilemapLayer(t, e, s, n, r) : t.type == i.GROUP ? e.type == i.SPRITE || e.type == i.TILESPRITE ? this.collideSpriteVsGroup(e, t, s, n, r, o) : e.type == i.GROUP || e.type == i.EMITTER ? this.collideGroupVsGroup(t, e, s, n, r, o) : e.type == i.TILEMAPLAYER && this.collideGroupVsTilemapLayer(t, e, s, n, r) : t.type == i.TILEMAPLAYER ? e.type == i.SPRITE || e.type == i.TILESPRITE ? this.collideSpriteVsTilemapLayer(e, t, s, n, r) : (e.type == i.GROUP || e.type == i.EMITTER) && this.collideGroupVsTilemapLayer(e, t, s, n, r) : t.type == i.EMITTER && (e.type == i.SPRITE || e.type == i.TILESPRITE ? this.collideSpriteVsGroup(e, t, s, n, r, o) : e.type == i.GROUP || e.type == i.EMITTER ? this.collideGroupVsGroup(t, e, s, n, r, o) : e.type == i.TILEMAPLAYER && this.collideGroupVsTilemapLayer(t, e, s, n, r)))) : void this.collideGroupVsSelf(t, s, n, r, o)
      },
      collideSpriteVsSprite: function(t, e, i, s, n, r) {
        this.separate(t.body, e.body, s, n, r) && (i && i.call(n, t, e), this._total++)
      },
      collideSpriteVsGroup: function(t, e, s, n, r, o) {
        if (0 !== e.length) {
          this.quadTree.clear(), this.quadTree = new i.QuadTree(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, this.maxObjects, this.maxLevels), this.quadTree.populate(e), this._potentials = this.quadTree.retrieve(t);
          for (var a = 0, h = this._potentials.length; h > a; a++) this.separate(t.body, this._potentials[a], n, r, o) && (s && s.call(r, t, this._potentials[a].sprite), this._total++)
        }
      },
      collideGroupVsSelf: function(t, e, i, s, n) {
        if (0 !== t.length)
          for (var r = t._container.children.length, o = 0; r > o; o++)
            for (var a = o + 1; r >= a; a++) t._container.children[o] && t._container.children[a] && t._container.children[o].exists && t._container.children[a].exists && this.collideSpriteVsSprite(t._container.children[o], t._container.children[a], e, i, s, n)
      },
      collideGroupVsGroup: function(t, e, i, s, n, r) {
        if (0 !== t.length && 0 !== e.length && t._container.first._iNext) {
          var o = t._container.first._iNext;
          do o.exists && this.collideSpriteVsGroup(o, e, i, s, n, r), o = o._iNext; while (o != t._container.last._iNext)
        }
      },
      collideSpriteVsTilemapLayer: function(t, e, i, s, n) {
        if (this._mapData = e.getTiles(t.body.left, t.body.top, t.body.width, t.body.height, !0), 0 !== this._mapData.length)
          if (this._mapData.length > 1) this.separateTiles(t.body, this._mapData);
          else {
            var r = 0;
            this.separateTile(t.body, this._mapData[r]) && (s ? s.call(n, t, this._mapData[r]) && (this._total++, i && i.call(n, t, this._mapData[r])) : (this._total++, i && i.call(n, t, this._mapData[r])))
          }
      },
      collideGroupVsTilemapLayer: function(t, e, i, s, n) {
        if (0 !== t.length && t._container.first._iNext) {
          var r = t._container.first._iNext;
          do r.exists && this.collideSpriteVsTilemapLayer(r, e, i, s, n), r = r._iNext; while (r != t._container.last._iNext)
        }
      },
      separate: function(t, e, i, s, n) {
        return t === e || this.intersects(t, e) === !1 ? !1 : i && i.call(s, t.sprite, e.sprite) === !1 ? !1 : (this._response.clear(), n ? t.overlap(e, this._response) : t.overlap(e, this._response) ? t.separate(e, this._response) : !1)
      },
      intersects: function(t, e) {
        var i = !1;
        (t.width <= 0 || t.height <= 0 || e.width <= 0 || e.height <= 0) && (i = !1), i = !(t.right < e.left || t.bottom < e.top || t.left > e.right || t.top > e.bottom), !i && t.inContact(e) && t.removeContact(e)
      },
      tileIntersects: function(t, e) {
        return t.width <= 0 || t.height <= 0 || e.width <= 0 || e.height <= 0 ? (this._intersection[4] = 0, this._intersection) : t.right < e.x || t.bottom < e.y || t.left > e.right || t.top > e.bottom ? (this._intersection[4] = 0, this._intersection) : (this._intersection[0] = Math.max(t.left, e.x), this._intersection[1] = Math.max(t.top, e.y), this._intersection[2] = Math.min(t.right, e.right) - this._intersection[0], this._intersection[3] = Math.min(t.bottom, e.bottom) - this._intersection[1], this._intersection[4] = 1, this._intersection)
      },
      separateTiles: function(t, e) {
        for (var i, s = !1, n = 0; n < e.length; n++) i = e[n], this.separateTile(t, i) && (s = !0);
        return s
      },
      separateTile: function(t, e) {
        if (this._intersection = this.tileIntersects(t, e), 0 === this._intersection[4] || 0 === this._intersection[2] || 0 === this._intersection[3]) return !1;
        if (e.tile.callback || e.layer.callbacks[e.tile.index]) {
          if (e.tile.callback && e.tile.callback.call(e.tile.callbackContext, t.sprite, e) === !1) return !1;
          if (e.layer.callbacks[e.tile.index] && e.layer.callbacks[e.tile.index].callback.call(e.layer.callbacks[e.tile.index].callbackContext, t.sprite, e) === !1) return !1
        }
        t.overlapX = 0, t.overlapY = 0;
        var i = !1;
        return t.deltaX() < 0 && t.checkCollision.left && e.tile.faceRight && !t.blocked.left ? (t.overlapX = t.left - e.right, t.overlapX < 0 ? i = !0 : t.overlapX = 0) : t.deltaX() > 0 && t.checkCollision.right && e.tile.faceLeft && !t.blocked.right && (t.overlapX = t.right - e.x, t.overlapX > 0 ? i = !0 : t.overlapX = 0), t.deltaY() < 0 && t.checkCollision.up && e.tile.faceBottom && !t.blocked.up ? (t.overlapY = t.top - e.bottom, t.overlapY < 0 ? i = !0 : t.overlapY = 0) : t.deltaY() > 0 && t.checkCollision.down && e.tile.faceTop && !t.blocked.down && (t.overlapY = t.bottom - e.y, t.overlapY > 0 ? i = !0 : t.overlapY = 0), 0 !== t.overlapX && 0 !== t.overlapY && (Math.abs(t.overlapX) > Math.abs(t.overlapY) ? t.overlapX = 0 : t.overlapY = 0), i ? this.processTileSeparation(t) : !1
      },
      processTileSeparation: function(t) {
        return t.overlapX < 0 ? (t.x -= t.overlapX, t.left -= t.overlapX, t.right -= t.overlapX, t.blocked.x = Math.floor(t.x), t.blocked.y = Math.floor(t.y), t.blocked.left = !0) : t.overlapX > 0 && (t.x -= t.overlapX, t.left -= t.overlapX, t.right -= t.overlapX, t.blocked.x = Math.floor(t.x), t.blocked.y = Math.floor(t.y), t.blocked.right = !0), t.overlapY < 0 ? (t.y -= t.overlapY, t.top -= t.overlapY, t.bottom -= t.overlapY, t.blocked.x = Math.floor(t.x), t.blocked.y = Math.floor(t.y), t.blocked.up = !0) : t.overlapY > 0 && (t.y -= t.overlapY, t.top -= t.overlapY, t.bottom -= t.overlapY, t.blocked.x = Math.floor(t.x), t.blocked.y = Math.floor(t.y), t.blocked.down = !0), t.reboundCheck(t.overlapX, t.overlapY, !0), !0
      },
      moveToObject: function(t, e, i, s) {
        return "undefined" == typeof i && (i = 60), "undefined" == typeof s && (s = 0), this._angle = Math.atan2(e.y - t.y, e.x - t.x), s > 0 && (i = this.distanceBetween(t, e) / (s / 1e3)), t.body.velocity.x = Math.cos(this._angle) * i, t.body.velocity.y = Math.sin(this._angle) * i, this._angle
      },
      moveToPointer: function(t, e, i, s) {
        return "undefined" == typeof e && (e = 60), i = i || this.game.input.activePointer, "undefined" == typeof s && (s = 0), this._angle = this.angleToPointer(t, i), s > 0 && (e = this.distanceToPointer(t, i) / (s / 1e3)), t.body.velocity.x = Math.cos(this._angle) * e, t.body.velocity.y = Math.sin(this._angle) * e, this._angle
      },
      moveToXY: function(t, e, i, s, n) {
        return "undefined" == typeof s && (s = 60), "undefined" == typeof n && (n = 0), this._angle = Math.atan2(i - t.y, e - t.x), n > 0 && (s = this.distanceToXY(t, e, i) / (n / 1e3)), t.body.velocity.x = Math.cos(this._angle) * s, t.body.velocity.y = Math.sin(this._angle) * s, this._angle
      },
      velocityFromAngle: function(t, e, s) {
        return "undefined" == typeof e && (e = 60), s = s || new i.Point, s.setTo(Math.cos(this.game.math.degToRad(t)) * e, Math.sin(this.game.math.degToRad(t)) * e)
      },
      velocityFromRotation: function(t, e, s) {
        return "undefined" == typeof e && (e = 60), s = s || new i.Point, s.setTo(Math.cos(t) * e, Math.sin(t) * e)
      },
      accelerationFromRotation: function(t, e, s) {
        return "undefined" == typeof e && (e = 60), s = s || new i.Point, s.setTo(Math.cos(t) * e, Math.sin(t) * e)
      },
      accelerateToObject: function(t, e, i, s, n) {
        return "undefined" == typeof i && (i = 60), "undefined" == typeof s && (s = 1e3), "undefined" == typeof n && (n = 1e3), this._angle = this.angleBetween(t, e), t.body.acceleration.setTo(Math.cos(this._angle) * i, Math.sin(this._angle) * i), t.body.maxVelocity.setTo(s, n), this._angle
      },
      accelerateToPointer: function(t, e, i, s, n) {
        return "undefined" == typeof i && (i = 60), "undefined" == typeof e && (e = this.game.input.activePointer), "undefined" == typeof s && (s = 1e3), "undefined" == typeof n && (n = 1e3), this._angle = this.angleToPointer(t, e), t.body.acceleration.setTo(Math.cos(this._angle) * i, Math.sin(this._angle) * i), t.body.maxVelocity.setTo(s, n), this._angle
      },
      accelerateToXY: function(t, e, i, s, n, r) {
        return "undefined" == typeof s && (s = 60), "undefined" == typeof n && (n = 1e3), "undefined" == typeof r && (r = 1e3), this._angle = this.angleToXY(t, e, i), t.body.acceleration.setTo(Math.cos(this._angle) * s, Math.sin(this._angle) * s), t.body.maxVelocity.setTo(n, r), this._angle
      },
      distanceBetween: function(t, e) {
        return this._dx = t.x - e.x, this._dy = t.y - e.y, Math.sqrt(this._dx * this._dx + this._dy * this._dy)
      },
      distanceToXY: function(t, e, i) {
        return this._dx = t.x - e, this._dy = t.y - i, Math.sqrt(this._dx * this._dx + this._dy * this._dy)
      },
      distanceToPointer: function(t, e) {
        return e = e || this.game.input.activePointer, this._dx = t.x - e.x, this._dy = t.y - e.y, Math.sqrt(this._dx * this._dx + this._dy * this._dy)
      },
      angleBetween: function(t, e) {
        return this._dx = e.x - t.x, this._dy = e.y - t.y, Math.atan2(this._dy, this._dx)
      },
      angleToXY: function(t, e, i) {
        return this._dx = e - t.x, this._dy = i - t.y, Math.atan2(this._dy, this._dx)
      },
      angleToPointer: function(t, e) {
        return e = e || this.game.input.activePointer, this._dx = e.worldX - t.x, this._dy = e.worldY - t.y, Math.atan2(this._dy, this._dx)
      }
    }, i.Physics.Arcade.prototype.constructor = i.Physics.Arcade, i.Physics.Arcade.Body = function(t) {
      this.sprite = t, this.game = t.game, this.offset = new i.Point, this.preX = t.world.x, this.preY = t.world.y, this.preRotation = t.angle, this.velocity = new i.Point, this.acceleration = new i.Point, this.speed = 0, this.angle = 0, this.gravity = new i.Point, this.bounce = new i.Point, this.minVelocity = new i.Point, this.maxVelocity = new i.Point(1e3, 1e3), this.angularVelocity = 0, this.angularAcceleration = 0, this.angularDrag = 0, this.maxAngular = 1e3, this.mass = 1, this.linearDamping = 0, this.checkCollision = {
        none: !1,
        any: !0,
        up: !0,
        down: !0,
        left: !0,
        right: !0
      }, this.touching = {
        none: !0,
        up: !1,
        down: !1,
        left: !1,
        right: !1
      }, this.blocked = {
        x: 0,
        y: 0,
        up: !1,
        down: !1,
        left: !1,
        right: !1
      }, this.facing = i.NONE, this.rebound = !0, this.immovable = !1, this.moves = !0, this.rotation = 0, this.allowRotation = !0, this.allowGravity = !0, this.customSeparateCallback = null, this.customSeparateContext = null, this.collideCallback = null, this.collideCallbackContext = null, this.collideWorldBounds = !1, this.type = i.Physics.Arcade.RECT, this.shape = null, this.polygon = null, this.left = 0, this.right = 0, this.top = 0, this.bottom = 0, this.width = 0, this.height = 0, this.contacts = [], this.overlapX = 0, this.overlapY = 0, this._temp = null, this._dx = 0, this._dy = 0, this._sx = t.scale.x, this._sy = t.scale.y, this._distances = [0, 0, 0, 0], this._vx = 0, this._vy = 0, this.setRectangle(t.width, t.height, 0, 0), this.sprite.events.onBeginContact = new i.Signal, this.sprite.events.onEndContact = new i.Signal
    }, i.Physics.Arcade.Body.prototype = {
      updateScale: function() {
        this.polygon ? this.polygon.scale(this.sprite.scale.x / this._sx, this.sprite.scale.y / this._sy) : this.shape.r *= Math.max(this.sprite.scale.x, this.sprite.scale.y), this._sx = this.sprite.scale.x, this._sy = this.sprite.scale.y
      },
      preUpdate: function() {
        this.x = this.sprite.world.x - this.sprite.anchor.x * this.sprite.width + this.offset.x, this.y = this.sprite.world.y - this.sprite.anchor.y * this.sprite.height + this.offset.y, this.preX = this.x, this.preY = this.y, this.preRotation = this.sprite.angle, this.rotation = this.preRotation, (this.sprite.scale.x !== this._sx || this.sprite.scale.y !== this._sy) && this.updateScale(), this.checkBlocked(), this.touching.none = !0, this.touching.up = !1, this.touching.down = !1, this.touching.left = !1, this.touching.right = !1, this.moves ? ((this._vx !== this.velocity.x || this._vy !== this.velocity.y) && (this._vx = this.velocity.x, this._vy = this.velocity.y, this.speed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y), this.angle = Math.atan2(this.velocity.y, this.velocity.x)), this.game.physics.checkBounds(this) && this.reboundCheck(!0, !0, !0), this.applyDamping(), this.integrateVelocity(), this.updateBounds(), this.checkBlocked()) : this.updateBounds()
      },
      checkBlocked: function() {
        !this.blocked.left && !this.blocked.right || Math.floor(this.x) === this.blocked.x && Math.floor(this.y) === this.blocked.y || (this.blocked.left = !1, this.blocked.right = !1), !this.blocked.up && !this.blocked.down || Math.floor(this.x) === this.blocked.x && Math.floor(this.y) === this.blocked.y || (this.blocked.up = !1, this.blocked.down = !1)
      },
      updateBounds: function() {
        this.type === i.Physics.Arcade.CIRCLE ? (this.left = this.shape.pos.x - this.shape.r, this.right = this.shape.pos.x + this.shape.r, this.top = this.shape.pos.y - this.shape.r, this.bottom = this.shape.pos.y + this.shape.r) : (this.left = i.Math.minProperty("x", this.polygon.points) + this.polygon.pos.x, this.right = i.Math.maxProperty("x", this.polygon.points) + this.polygon.pos.x, this.top = i.Math.minProperty("y", this.polygon.points) + this.polygon.pos.y, this.bottom = i.Math.maxProperty("y", this.polygon.points) + this.polygon.pos.y), this.width = this.right - this.left, this.height = this.bottom - this.top
      },
      applyDamping: function() {
        this.linearDamping > 0 && this.acceleration.isZero() && (this.speed > this.linearDamping ? this.speed -= this.linearDamping : this.speed = 0, this.speed > 0 && (this.velocity.x = Math.cos(this.angle) * this.speed, this.velocity.y = Math.sin(this.angle) * this.speed, this.speed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y), this.angle = Math.atan2(this.velocity.y, this.velocity.x)))
      },
      reboundCheck: function(t, e, i) {
        if (t && (i && 0 !== this.bounce.x && (this.blocked.left || this.blocked.right || this.touching.left || this.touching.right) && (this._vx <= 0 && this.velocity.x > 0 || this._vx >= 0 && this.velocity.x < 0 || (this.velocity.x *= -this.bounce.x, this.angle = Math.atan2(this.velocity.y, this.velocity.x))), 0 === this.bounce.x || Math.abs(this.velocity.x) < this.minVelocity.x)) {
          var s = this.getUpwardForce();
          ((this.blocked.left || this.touching.left) && (0 > s || this.velocity.x < 0) || (this.blocked.right || this.touching.right) && (s > 0 || this.velocity.x > 0)) && (this.velocity.x = 0)
        }
        if (e && (i && 0 !== this.bounce.y && (this.blocked.up || this.blocked.down || this.touching.up || this.touching.down) && (this._vy <= 0 && this.velocity.y > 0 || this._vy >= 0 && this.velocity.y < 0 || (this.velocity.y *= -this.bounce.y, this.angle = Math.atan2(this.velocity.y, this.velocity.x))), 0 === this.bounce.y || Math.abs(this.velocity.y) < this.minVelocity.y)) {
          var n = this.getDownwardForce();
          ((this.blocked.up || this.touching.up) && (0 > n || this.velocity.y < 0) || (this.blocked.down || this.touching.down) && (n > 0 || this.velocity.y > 0)) && (this.velocity.y = 0)
        }
      },
      getUpwardForce: function() {
        return this.allowGravity ? this.gravity.x + this.game.physics.gravity.x + this.velocity.x : this.gravity.x + this.velocity.x
      },
      getDownwardForce: function() {
        return this.allowGravity ? this.gravity.y + this.game.physics.gravity.y + this.velocity.y : this.gravity.y + this.velocity.y
      },
      sub: function(t) {
        this.x -= t.x, this.y -= t.y
      },
      add: function(t) {
        this.x += t.x, this.y += t.y
      },
      give: function(t, e) {
        this.add(e.overlapV), this.rebound && (this.processRebound(t), this.reboundCheck(!0, !0, !1), t.reboundCheck(!0, !0, !1))
      },
      take: function(t, e) {
        this.sub(e.overlapV), this.rebound && (this.processRebound(t), this.reboundCheck(!0, !0, !1), t.reboundCheck(!0, !0, !1))
      },
      split: function(t, e) {
        e.overlapV.scale(.5), this.sub(e.overlapV), t.add(e.overlapV), this.rebound && (this.exchange(t), this.reboundCheck(!0, !0, !1), t.reboundCheck(!0, !0, !1))
      },
      exchange: function(t) {
        if (this.mass === t.mass && this.speed > 0 && t.speed > 0) this._dx = t.velocity.x, this._dy = t.velocity.y, t.velocity.x = this.velocity.x * t.bounce.x, t.velocity.y = this.velocity.y * t.bounce.x, this.velocity.x = this._dx * this.bounce.x, this.velocity.y = this._dy * this.bounce.y;
        else {
          var e = Math.sqrt(t.velocity.x * t.velocity.x * t.mass / this.mass) * (t.velocity.x > 0 ? 1 : -1),
            i = Math.sqrt(this.velocity.x * this.velocity.x * this.mass / t.mass) * (this.velocity.x > 0 ? 1 : -1),
            s = .5 * (e + i);
          e -= s, i -= s, this.velocity.x = e, t.velocity.x = i, e = Math.sqrt(t.velocity.y * t.velocity.y * t.mass / this.mass) * (t.velocity.y > 0 ? 1 : -1), i = Math.sqrt(this.velocity.y * this.velocity.y * this.mass / t.mass) * (this.velocity.y > 0 ? 1 : -1), s = .5 * (e + i), e -= s, i -= s, this.velocity.y = e, t.velocity.y = i
        }
      },
      processRebound: function(t) {
        this._vx <= 0 && this.velocity.x > 0 || this._vx >= 0 && this.velocity.x < 0 || (this.velocity.x = t.velocity.x - this.velocity.x * this.bounce.x), this._vy <= 0 && this.velocity.y > 0 || this._vy >= 0 && this.velocity.y < 0 || (this.velocity.y = t.velocity.y - this.velocity.y * this.bounce.y), this.angle = Math.atan2(this.velocity.y, this.velocity.x), this.reboundCheck(!0, !0, !1)
      },
      overlap: function(t, e) {
        var s = !1;
        return this.type !== i.Physics.Arcade.RECT && this.type !== i.Physics.Arcade.POLYGON || t.type !== i.Physics.Arcade.RECT && t.type !== i.Physics.Arcade.POLYGON ? this.type === i.Physics.Arcade.CIRCLE && t.type === i.Physics.Arcade.CIRCLE ? s = SAT.testCircleCircle(this.shape, t.shape, e) : this.type !== i.Physics.Arcade.RECT && this.type !== i.Physics.Arcade.POLYGON || t.type !== i.Physics.Arcade.CIRCLE ? this.type !== i.Physics.Arcade.CIRCLE || t.type !== i.Physics.Arcade.RECT && t.type !== i.Physics.Arcade.POLYGON || (s = SAT.testCirclePolygon(this.shape, t.polygon, e)) : s = SAT.testPolygonCircle(this.polygon, t.shape, e) : s = SAT.testPolygonPolygon(this.polygon, t.polygon, e), s || this.removeContact(t), s
      },
      inContact: function(t) {
        return -1 != this.contacts.indexOf(t)
      },
      addContact: function(t) {
        return this.inContact(t) ? !1 : (this.contacts.push(t), this.sprite.events.onBeginContact.dispatch(this.sprite, t.sprite, this, t), t.addContact(this), !0)
      },
      removeContact: function(t) {
        return this.inContact(t) ? (this.contacts.splice(this.contacts.indexOf(t), 1), this.sprite.events.onEndContact.dispatch(this.sprite, t.sprite, this, t), t.removeContact(this), !0) : !1
      },
      separate: function(t, e) {
        if (this.inContact(t)) return !1;
        if (this._distances[0] = t.right - this.x, this._distances[1] = this.right - t.x, this._distances[2] = t.bottom - this.y, this._distances[3] = this.bottom - t.y, !e.overlapN.x || 0 !== this._distances[0] && 0 !== this._distances[1] ? !e.overlapN.y || 0 !== this._distances[2] && 0 !== this._distances[3] || (e.overlapN.x = !0, e.overlapN.y = !1) : (e.overlapN.x = !1, e.overlapN.y = !0), this.customSeparateCallback) return this.customSeparateCallback.call(this.customSeparateContext, this, e, this._distances);
        var i = !1;
        return e.overlapN.x ? this._distances[0] < this._distances[1] ? i = this.hitLeft(t, e) : this._distances[1] < this._distances[0] && (i = this.hitRight(t, e)) : e.overlapN.y && (this._distances[2] < this._distances[3] ? i = this.hitTop(t, e) : this._distances[3] < this._distances[2] && (i = this.hitBottom(t, e))), i ? (this.game.physics.checkBounds(this), this.game.physics.checkBounds(t)) : this.addContact(t), i
      },
      hitLeft: function(t, e) {
        return this.checkCollision.left && t.checkCollision.right ? void((!this.collideCallback || this.collideCallback.call(this.collideCallbackContext, i.LEFT, this, t, e)) && (!this.moves || this.immovable || this.blocked.right || this.touching.right ? t.give(this, e) : t.immovable || t.blocked.left || t.touching.left ? this.take(t, e) : this.split(t, e), this.touching.left = !0, t.touching.right = !0)) : !1
      },
      hitRight: function(t, e) {
        return this.checkCollision.right && t.checkCollision.left ? void((!this.collideCallback || this.collideCallback.call(this.collideCallbackContext, i.RIGHT, this, t)) && (!this.moves || this.immovable || this.blocked.left || this.touching.left ? t.give(this, e) : t.immovable || t.blocked.right || t.touching.right ? this.take(t, e) : this.split(t, e), this.touching.right = !0, t.touching.left = !0)) : !1
      },
      hitTop: function(t, e) {
        return this.checkCollision.up && t.checkCollision.down ? this.collideCallback && !this.collideCallback.call(this.collideCallbackContext, i.UP, this, t) ? !1 : (!this.moves || this.immovable || this.blocked.down || this.touching.down ? t.give(this, e) : t.immovable || t.blocked.up || t.touching.up ? this.take(t, e) : this.split(t, e), this.touching.up = !0, t.touching.down = !0, !0) : !1
      },
      hitBottom: function(t, e) {
        return this.checkCollision.down && t.checkCollision.up ? this.collideCallback && !this.collideCallback.call(this.collideCallbackContext, i.DOWN, this, t) ? !1 : (!this.moves || this.immovable || this.blocked.up || this.touching.up ? t.give(this, e) : t.immovable || t.blocked.down || t.touching.down ? this.take(t, e) : this.split(t, e), this.touching.down = !0, t.touching.up = !0, !0) : !1
      },
      integrateVelocity: function() {
        this._temp = this.game.physics.updateMotion(this), this._dx = this.game.time.physicsElapsed * (this.velocity.x + this._temp.x / 2), this._dy = this.game.time.physicsElapsed * (this.velocity.y + this._temp.y / 2), (this._dx < 0 && !this.blocked.left && !this.touching.left || this._dx > 0 && !this.blocked.right && !this.touching.right) && (this.x += this._dx, this.velocity.x += this._temp.x), (this._dy < 0 && !this.blocked.up && !this.touching.up || this._dy > 0 && !this.blocked.down && !this.touching.down) && (this.y += this._dy, this.velocity.y += this._temp.y), this.velocity.x > this.maxVelocity.x ? this.velocity.x = this.maxVelocity.x : this.velocity.x < -this.maxVelocity.x && (this.velocity.x = -this.maxVelocity.x), this.velocity.y > this.maxVelocity.y ? this.velocity.y = this.maxVelocity.y : this.velocity.y < -this.maxVelocity.y && (this.velocity.y = -this.maxVelocity.y)
      },
      postUpdate: function() {
        this.moves && (this.game.physics.checkBounds(this), this.reboundCheck(!0, !0, !0), this._dx = this.deltaX(), this._dy = this.deltaY(), this._dx < 0 ? this.facing = i.LEFT : this._dx > 0 && (this.facing = i.RIGHT), this._dy < 0 ? this.facing = i.UP : this._dy > 0 && (this.facing = i.DOWN), (0 !== this._dx || 0 !== this._dy) && (this.sprite.x += this._dx, this.sprite.y += this._dy), this.allowRotation && 0 !== this.deltaZ() && (this.sprite.angle += this.deltaZ()), (this.sprite.scale.x !== this._sx || this.sprite.scale.y !== this._sy) && this.updateScale())
      },
      reset: function(t) {
        "undefined" == typeof t && (t = !1), t && (this.gravity.setTo(0, 0), this.bounce.setTo(0, 0), this.minVelocity.setTo(5, 5), this.maxVelocity.setTo(1e3, 1e3), this.angularDrag = 0, this.maxAngular = 1e3, this.mass = 1, this.friction = 0, this.checkCollision = {
          none: !1,
          any: !0,
          up: !0,
          down: !0,
          left: !0,
          right: !0
        }), this.velocity.setTo(0, 0), this.acceleration.setTo(0, 0), this.angularVelocity = 0, this.angularAcceleration = 0, this.blocked = {
          x: 0,
          y: 0,
          up: !1,
          down: !1,
          left: !1,
          right: !1
        }, this.x = this.sprite.world.x - this.sprite.anchor.x * this.sprite.width + this.offset.x, this.y = this.sprite.world.y - this.sprite.anchor.y * this.sprite.height + this.offset.y, this.preX = this.x, this.preY = this.y, this.updateBounds(), this.contacts.length = 0
      },
      destroy: function() {
        this.sprite = null, this.collideCallback = null, this.collideCallbackContext = null, this.customSeparateCallback = null, this.customSeparateContext = null, this.contacts.length = 0
      },
      setCircle: function(t, e, s) {
        "undefined" == typeof e && (e = this.sprite._cache.halfWidth), "undefined" == typeof s && (s = this.sprite._cache.halfHeight), this.type = i.Physics.Arcade.CIRCLE, this.shape = new SAT.Circle(new SAT.Vector(this.sprite.x, this.sprite.y), t), this.polygon = null, this.offset.setTo(e, s)
      },
      setRectangle: function(t, e, s, n) {
        "undefined" == typeof t && (t = this.sprite.width), "undefined" == typeof e && (e = this.sprite.height), "undefined" == typeof s && (s = -this.sprite._cache.halfWidth), "undefined" == typeof n && (n = -this.sprite._cache.halfHeight), this.type = i.Physics.Arcade.RECT, this.shape = new SAT.Box(new SAT.Vector(this.sprite.world.x, this.sprite.world.y), t, e), this.polygon = this.shape.toPolygon(), this.polygon.translate(s, n), this.offset.setTo(0, 0)
      },
      setPolygon: function(t) {
        if (this.type = i.Physics.Arcade.POLYGON, this.shape = null, Array.isArray(t) || (t = Array.prototype.slice.call(arguments)), "number" == typeof t[0]) {
          for (var e = [], s = 0, n = t.length; n > s; s += 2) e.push(new SAT.Vector(t[s], t[s + 1]));
          t = e
        }
        this.polygon = new SAT.Polygon(new SAT.Vector(this.sprite.center.x, this.sprite.center.y), t), this.offset.setTo(0, 0)
      },
      translate: function(t, e) {
        this.polygon && this.polygon.translate(t, e)
      },
      onFloor: function() {
        return this.blocked.down
      },
      onWall: function() {
        return !this.blocked.down && (this.blocked.left || this.blocked.right)
      },
      deltaX: function() {
        return this.x - this.preX
      },
      deltaY: function() {
        return this.y - this.preY
      },
      deltaZ: function() {
        return this.rotation - this.preRotation
      }
    }, i.Physics.Arcade.Body.prototype.constructor = i.Physics.Arcade.Body, Object.defineProperty(i.Physics.Arcade.Body.prototype, "x", {
      get: function() {
        return this.type === i.Physics.Arcade.CIRCLE ? this.shape.pos.x : this.polygon.pos.x
      },
      set: function(t) {
        this.type === i.Physics.Arcade.CIRCLE ? this.shape.pos.x = t : this.polygon.pos.x = t
      }
    }), Object.defineProperty(i.Physics.Arcade.Body.prototype, "y", {
      get: function() {
        return this.type === i.Physics.Arcade.CIRCLE ? this.shape.pos.y : this.polygon.pos.y
      },
      set: function(t) {
        this.type === i.Physics.Arcade.CIRCLE ? this.shape.pos.y = t : this.polygon.pos.y = t
      }
    }), i.Particles = function(t) {
      this.game = t, this.emitters = {}, this.ID = 0
    }, i.Particles.prototype = {
      add: function(t) {
        return this.emitters[t.name] = t, t
      },
      remove: function(t) {
        delete this.emitters[t.name]
      },
      update: function() {
        for (var t in this.emitters) this.emitters[t].exists && this.emitters[t].update()
      }
    }, i.Particles.prototype.constructor = i.Particles, i.Particles.Arcade = {}, i.Particles.Arcade.Emitter = function(t, e, s, n) {
      this.maxParticles = n || 50, i.Group.call(this, t), this.name = "emitter" + this.game.particles.ID++, this.type = i.EMITTER, this.x = 0, this.y = 0, this.width = 1, this.height = 1, this.minParticleSpeed = new i.Point(-100, -100), this.maxParticleSpeed = new i.Point(100, 100), this.minParticleScale = 1, this.maxParticleScale = 1, this.minRotation = -360, this.maxRotation = 360, this.gravity = 100, this.particleClass = null, this.particleFriction = 0, this.angularDrag = 0, this.frequency = 100, this.lifespan = 2e3, this.bounce = new i.Point, this._quantity = 0, this._timer = 0, this._counter = 0, this._explode = !0, this.on = !1, this.exists = !0, this.emitX = e, this.emitY = s
    }, i.Particles.Arcade.Emitter.prototype = Object.create(i.Group.prototype), i.Particles.Arcade.Emitter.prototype.constructor = i.Particles.Arcade.Emitter, i.Particles.Arcade.Emitter.prototype.update = function() {
      if (this.on)
        if (this._explode) {
          this._counter = 0;
          do this.emitParticle(), this._counter++; while (this._counter < this._quantity);
          this.on = !1
        } else this.game.time.now >= this._timer && (this.emitParticle(), this._counter++, this._quantity > 0 && this._counter >= this._quantity && (this.on = !1), this._timer = this.game.time.now + this.frequency)
    }, i.Particles.Arcade.Emitter.prototype.makeParticles = function(t, e, s, n, r) {
      "undefined" == typeof e && (e = 0), "undefined" == typeof s && (s = this.maxParticles), "undefined" == typeof n && (n = !1), "undefined" == typeof r && (r = !1);
      for (var o, a = 0, h = t, l = e; s > a;) null === this.particleClass && ("object" == typeof t && (h = this.game.rnd.pick(t)), "object" == typeof e && (l = this.game.rnd.pick(e)), o = new i.Sprite(this.game, 0, 0, h, l)), n ? (o.body.checkCollision.any = !0, o.body.checkCollision.none = !1) : o.body.checkCollision.none = !0, o.body.collideWorldBounds = r, o.exists = !1, o.visible = !1, o.anchor.setTo(.5, .5), this.add(o), a++;
      return this
    }, i.Particles.Arcade.Emitter.prototype.kill = function() {
      this.on = !1, this.alive = !1, this.exists = !1
    }, i.Particles.Arcade.Emitter.prototype.revive = function() {
      this.alive = !0, this.exists = !0
    }, i.Particles.Arcade.Emitter.prototype.start = function(t, e, i, s) {
      "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), "undefined" == typeof i && (i = 250), "undefined" == typeof s && (s = 0), this.revive(), this.visible = !0, this.on = !0, this._explode = t, this.lifespan = e, this.frequency = i, t ? this._quantity = s : this._quantity += s, this._counter = 0, this._timer = this.game.time.now + i
    }, i.Particles.Arcade.Emitter.prototype.emitParticle = function() {
      var t = this.getFirstExists(!1);
      if (null != t) {
        if (this.width > 1 || this.height > 1 ? t.reset(this.game.rnd.integerInRange(this.left, this.right), this.game.rnd.integerInRange(this.top, this.bottom)) : t.reset(this.emitX, this.emitY), t.lifespan = this.lifespan, t.body.bounce.setTo(this.bounce.x, this.bounce.y), t.body.velocity.x = this.minParticleSpeed.x != this.maxParticleSpeed.x ? this.game.rnd.integerInRange(this.minParticleSpeed.x, this.maxParticleSpeed.x) : this.minParticleSpeed.x, t.body.velocity.y = this.minParticleSpeed.y != this.maxParticleSpeed.y ? this.game.rnd.integerInRange(this.minParticleSpeed.y, this.maxParticleSpeed.y) : this.minParticleSpeed.y, t.body.gravity.y = this.gravity, t.body.angularVelocity = this.minRotation != this.maxRotation ? this.game.rnd.integerInRange(this.minRotation, this.maxRotation) : this.minRotation, 1 !== this.minParticleScale || 1 !== this.maxParticleScale) {
          var e = this.game.rnd.realInRange(this.minParticleScale, this.maxParticleScale);
          t.scale.setTo(e, e)
        }
        t.body.friction = this.particleFriction, t.body.angularDrag = this.angularDrag
      }
    }, i.Particles.Arcade.Emitter.prototype.setSize = function(t, e) {
      this.width = t, this.height = e
    }, i.Particles.Arcade.Emitter.prototype.setXSpeed = function(t, e) {
      t = t || 0, e = e || 0, this.minParticleSpeed.x = t, this.maxParticleSpeed.x = e
    }, i.Particles.Arcade.Emitter.prototype.setYSpeed = function(t, e) {
      t = t || 0, e = e || 0, this.minParticleSpeed.y = t, this.maxParticleSpeed.y = e
    }, i.Particles.Arcade.Emitter.prototype.setRotation = function(t, e) {
      t = t || 0, e = e || 0, this.minRotation = t, this.maxRotation = e
    }, i.Particles.Arcade.Emitter.prototype.at = function(t) {
      t.center && (this.emitX = t.center.x, this.emitY = t.center.y)
    }, Object.defineProperty(i.Particles.Arcade.Emitter.prototype, "alpha", {
      get: function() {
        return this._container.alpha
      },
      set: function(t) {
        this._container.alpha = t
      }
    }), Object.defineProperty(i.Particles.Arcade.Emitter.prototype, "visible", {
      get: function() {
        return this._container.visible
      },
      set: function(t) {
        this._container.visible = t
      }
    }), Object.defineProperty(i.Particles.Arcade.Emitter.prototype, "x", {
      get: function() {
        return this.emitX
      },
      set: function(t) {
        this.emitX = t
      }
    }), Object.defineProperty(i.Particles.Arcade.Emitter.prototype, "y", {
      get: function() {
        return this.emitY
      },
      set: function(t) {
        this.emitY = t
      }
    }), Object.defineProperty(i.Particles.Arcade.Emitter.prototype, "left", {
      get: function() {
        return Math.floor(this.x - this.width / 2)
      }
    }), Object.defineProperty(i.Particles.Arcade.Emitter.prototype, "right", {
      get: function() {
        return Math.floor(this.x + this.width / 2)
      }
    }), Object.defineProperty(i.Particles.Arcade.Emitter.prototype, "top", {
      get: function() {
        return Math.floor(this.y - this.height / 2)
      }
    }), Object.defineProperty(i.Particles.Arcade.Emitter.prototype, "bottom", {
      get: function() {
        return Math.floor(this.y + this.height / 2)
      }
    }), i.Tile = function(t, e, i, s, n, r) {
      this.layer = t, this.index = e, this.x = i, this.y = s, this.width = n, this.height = r, this.alpha = 1, this.properties = {}, this.scanned = !1, this.faceTop = !1, this.faceBottom = !1, this.faceLeft = !1, this.faceRight = !1, this.collides = !1, this.collideNone = !0, this.collideLeft = !1, this.collideRight = !1, this.collideUp = !1, this.collideDown = !1, this.callback = null, this.callbackContext = this
    }, i.Tile.prototype = {
      setCollisionCallback: function(t, e) {
        this.collisionCallbackContext = e, this.collisionCallback = t
      },
      destroy: function() {
        this.collisionCallback = null, this.collisionCallbackContext = null, this.properties = null
      },
      setCollision: function(t, e, i, s) {
        this.collideLeft = t, this.collideRight = e, this.collideUp = i, this.collideDown = s, this.collideNone = t || e || i || s ? !1 : !0
      },
      resetCollision: function() {
        this.collideNone = !0, this.collideLeft = !1, this.collideRight = !1, this.collideUp = !1, this.collideDown = !1
      },
      copy: function(t) {
        this.index = t.index, this.alpha = t.alpha, this.properties = t.properties, this.collides = t.collides, this.collideNone = t.collideNone, this.collideUp = t.collideUp, this.collideDown = t.collideDown, this.collideLeft = t.collideLeft, this.collideRight = t.collideRight, this.collisionCallback = t.collisionCallback, this.collisionCallbackContext = t.collisionCallbackContext
      }
    }, i.Tile.prototype.constructor = i.Tile, Object.defineProperty(i.Tile.prototype, "canCollide", {
      get: function() {
        return this.collides || this.collisionCallback || this.layer.callbacks[this.index]
      }
    }), Object.defineProperty(i.Tile.prototype, "left", {
      get: function() {
        return this.x
      }
    }), Object.defineProperty(i.Tile.prototype, "right", {
      get: function() {
        return this.x + this.width
      }
    }), Object.defineProperty(i.Tile.prototype, "top", {
      get: function() {
        return this.y
      }
    }), Object.defineProperty(i.Tile.prototype, "bottom", {
      get: function() {
        return this.y + this.height
      }
    }), i.Tilemap = function(t, e) {
      this.game = t, this.key = e;
      var s = i.TilemapParser.parse(this.game, e);
      null !== s && (this.width = s.width, this.height = s.height, this.tileWidth = s.tileWidth, this.tileHeight = s.tileHeight, this.orientation = s.orientation, this.version = s.version, this.properties = s.properties, this.widthInPixels = s.widthInPixels, this.heightInPixels = s.heightInPixels, this.layers = s.layers, this.tilesets = s.tilesets, this.tiles = s.tiles, this.objects = s.objects, this.images = s.images, this.currentLayer = 0, this.debugMap = [], this._results = [], this._tempA = 0, this._tempB = 0)
    }, i.Tilemap.CSV = 0, i.Tilemap.TILED_JSON = 1, i.Tilemap.prototype = {
      create: function(t, e, s) {
        for (var n = [], r = 0; s > r; r++) {
          n[r] = [];
          for (var o = 0; e > o; o++) n[r][o] = 0
        }
        this.layers.push({
          name: t,
          width: e,
          height: s,
          alpha: 1,
          visible: !0,
          tileMargin: 0,
          tileSpacing: 0,
          format: i.Tilemap.CSV,
          data: n,
          indexes: [],
          dirty: !0
        }), this.currentLayer = this.layers.length - 1
      },
      addTilesetImage: function(t, e) {
        if ("undefined" == typeof e) {
          if ("string" != typeof t) return !1;
          e = t
        }
        return "string" == typeof t && (t = this.getTilesetIndex(t)), this.tilesets[t] ? (this.tilesets[t].image = this.game.cache.getImage(e), !0) : !1
      },
      createFromTiles: function(t, e, i, s, n) {
        "undefined" == typeof n && (n = this.game.world)
      },
      createFromObjects: function(t, e, i, s, n, r, o) {
        if ("undefined" == typeof n && (n = !0), "undefined" == typeof r && (r = !0), "undefined" == typeof o && (o = this.game.world), !this.objects[t]) return void console.warn("Tilemap.createFromObjects: Invalid objectgroup name given: " + t);
        for (var a, h = 0, l = this.objects[t].length; l > h; h++)
          if (this.objects[t][h].gid === e) {
            a = o.create(this.objects[t][h].x, this.objects[t][h].y, i, s, n), a.anchor.setTo(0, 1), a.name = this.objects[t][h].name, a.visible = this.objects[t][h].visible, a.autoCull = r;
            for (property in this.objects[t][h].properties) o.set(a, property, this.objects[t][h].properties[property], !1, !1, 0)
          }
      },
      createLayer: function(t, e, s, n) {
        "undefined" == typeof e && (e = this.game.width), "undefined" == typeof s && (s = this.game.height), "undefined" == typeof n && (n = this.game.world);
        var r = t;
        return "string" == typeof t && (r = this.getLayerIndex(t)), null === r || r > this.layers.length ? void console.warn("Tilemap.createLayer: Invalid layer ID given: " + r) : n.add(new i.TilemapLayer(this.game, this, r, e, s))
      },
      getIndex: function(t, e) {
        for (var i = 0; i < t.length; i++)
          if (t[i].name === e) return i;
        return null
      },
      getLayerIndex: function(t) {
        return this.getIndex(this.layers, t)
      },
      getTilesetIndex: function(t) {
        return this.getIndex(this.tilesets, t)
      },
      getImageIndex: function(t) {
        return this.getIndex(this.images, t)
      },
      getObjectIndex: function(t) {
        return this.getIndex(this.objects, t)
      },
      setTileIndexCallback: function(t, e, i, s) {
        if (s = this.getLayer(s), "number" == typeof t) this.layers[s].callbacks[t] = {
          callback: e,
          callbackContext: i
        };
        else
          for (var n = 0, r = t.length; r > n; n++) this.layers[s].callbacks[t[n]] = {
            callback: e,
            callbackContext: i
          }
      },
      setTileLocationCallback: function(t, e, i, s, n, r, o) {
        if (o = this.getLayer(o), this.copy(t, e, i, s, o), !(this._results.length < 2))
          for (var a = 1; a < this._results.length; a++) this._results[a].setCollisionCallback(n, r)
      },
      setCollision: function(t, e, i) {
        if ("undefined" == typeof e && (e = !0), i = this.getLayer(i), "number" == typeof t) return this.setCollisionByIndex(t, e, i, !0);
        for (var s = 0, n = t.length; n > s; s++) this.setCollisionByIndex(t[s], e, i, !1);
        this.calculateFaces(i)
      },
      setCollisionBetween: function(t, e, i, s) {
        if ("undefined" == typeof i && (i = !0), s = this.getLayer(s), !(t > e)) {
          for (var n = t; e >= n; n++) this.setCollisionByIndex(n, i, s, !1);
          this.calculateFaces(s)
        }
      },
      setCollisionByExclusion: function(t, e, i) {
        "undefined" == typeof e && (e = !0), i = this.getLayer(i);
        for (var s = 0, n = this.tiles.length; n > s; s++) - 1 === t.indexOf(s) && this.setCollisionByIndex(s, e, i, !1);
        this.calculateFaces(i)
      },
      setCollisionByIndex: function(t, e, i, s) {
        "undefined" == typeof e && (e = !0), "undefined" == typeof i && (i = this.currentLayer), "undefined" == typeof s && (s = !0);
        for (var n = 0; n < this.layers[i].height; n++)
          for (var r = 0; r < this.layers[i].width; r++) {
            var o = this.layers[i].data[n][r];
            o && o.index === t && (o.collides = e, o.faceTop = e, o.faceBottom = e, o.faceLeft = e, o.faceRight = e)
          }
        return s && this.calculateFaces(i), i
      },
      getLayer: function(t) {
        return "undefined" == typeof t ? t = this.currentLayer : "string" == typeof t ? t = this.getLayerIndex(t) : t instanceof i.TilemapLayer && (t = t.index), t
      },
      calculateFaces: function(t) {
        for (var e = null, i = null, s = null, n = null, r = 0, o = this.layers[t].height; o > r; r++)
          for (var a = 0, h = this.layers[t].width; h > a; a++) {
            var l = this.layers[t].data[r][a];
            l && (e = this.getTileAbove(t, a, r), i = this.getTileBelow(t, a, r), s = this.getTileLeft(t, a, r), n = this.getTileRight(t, a, r), e && e.collides && (l.faceTop = !1), i && i.collides && (l.faceBottom = !1), s && s.collides && (l.faceLeft = !1), n && n.collides && (l.faceRight = !1))
          }
      },
      getTileAbove: function(t, e, i) {
        return i > 0 ? this.layers[t].data[i - 1][e] : null
      },
      getTileBelow: function(t, e, i) {
        return i < this.layers[t].height - 1 ? this.layers[t].data[i + 1][e] : null
      },
      getTileLeft: function(t, e, i) {
        return e > 0 ? this.layers[t].data[i][e - 1] : null
      },
      getTileRight: function(t, e, i) {
        return e < this.layers[t].width - 1 ? this.layers[t].data[i][e + 1] : null
      },
      setLayer: function(t) {
        t = this.getLayer(t), this.layers[t] && (this.currentLayer = t)
      },
      putTile: function(t, e, s, n) {
        n = this.getLayer(n), e >= 0 && e < this.layers[n].width && s >= 0 && s < this.layers[n].height && (t instanceof i.Tile ? this.layers[n].data[s][e].copy(t) : this.layers[n].data[s][e].index = t, this.layers[n].dirty = !0, this.calculateFaces(n))
      },
      putTileWorldXY: function(t, e, i, s, n, r) {
        r = this.getLayer(r), e = this.game.math.snapToFloor(e, s) / s, i = this.game.math.snapToFloor(i, n) / n, this.putTile(t, e, i, r)
      },
      getTile: function(t, e, i) {
        return i = this.getLayer(i), t >= 0 && t < this.layers[i].width && e >= 0 && e < this.layers[i].height ? this.layers[i].data[e][t] : void 0
      },
      getTileWorldXY: function(t, e, i, s, n) {
        return n = this.getLayer(n), t = this.game.math.snapToFloor(t, i) / i, e = this.game.math.snapToFloor(e, s) / s, this.getTile(t, e, n)
      },
      copy: function(t, e, i, s, n) {
        if (n = this.getLayer(n), !this.layers[n]) return void(this._results.length = 0);
        "undefined" == typeof t && (t = 0), "undefined" == typeof e && (e = 0), "undefined" == typeof i && (i = this.layers[n].width), "undefined" == typeof s && (s = this.layers[n].height), 0 > t && (t = 0), 0 > e && (e = 0), i > this.layers[n].width && (i = this.layers[n].width), s > this.layers[n].height && (s = this.layers[n].height), this._results.length = 0, this._results.push({
          x: t,
          y: e,
          width: i,
          height: s,
          layer: n
        });
        for (var r = e; e + s > r; r++)
          for (var o = t; t + i > o; o++) this._results.push(this.layers[n].data[r][o]);
        return this._results
      },
      paste: function(t, e, i, s) {
        if ("undefined" == typeof t && (t = 0), "undefined" == typeof e && (e = 0), s = this.getLayer(s), i && !(i.length < 2)) {
          for (var n = i[1].x - t, r = i[1].y - e, o = 1; o < i.length; o++) this.layers[s].data[r + i[o].y][n + i[o].x].copy(i[o]);
          this.layers[s].dirty = !0, this.calculateFaces(s)
        }
      },
      swap: function(t, e, i, s, n, r, o) {
        o = this.getLayer(o), this.copy(i, s, n, r, o), this._results.length < 2 || (this._tempA = t, this._tempB = e, this._results.forEach(this.swapHandler, this), this.paste(i, s, this._results, o))
      },
      swapHandler: function(t, e) {
        t.index === this._tempA ? this._results[e].index = this._tempB : t.index === this._tempB && (this._results[e].index = this._tempA)
      },
      forEach: function(t, e, i, s, n, r, o) {
        o = this.getLayer(o), this.copy(i, s, n, r, o), this._results.length < 2 || (this._results.forEach(t, e), this.paste(i, s, this._results, o))
      },
      replace: function(t, e, i, s, n, r, o) {
        if (o = this.getLayer(o), this.copy(i, s, n, r, o), !(this._results.length < 2)) {
          for (var a = 1; a < this._results.length; a++) this._results[a].index === t && (this._results[a].index = e);
          this.paste(i, s, this._results, o)
        }
      },
      random: function(t, e, i, s, n) {
        if (n = this.getLayer(n), this.copy(t, e, i, s, n), !(this._results.length < 2)) {
          for (var r = [], o = 1; o < this._results.length; o++)
            if (this._results[o].index) {
              var a = this._results[o].index; - 1 === r.indexOf(a) && r.push(a)
            }
          for (var h = 1; h < this._results.length; h++) this._results[h].index = this.game.rnd.pick(r);
          this.paste(t, e, this._results, n)
        }
      },
      shuffle: function(t, e, s, n, r) {
        if (r = this.getLayer(r), this.copy(t, e, s, n, r), !(this._results.length < 2)) {
          for (var o = [], a = 1; a < this._results.length; a++) this._results[a].index && o.push(this._results[a].index);
          i.Utils.shuffle(o);
          for (var h = 1; h < this._results.length; h++) this._results[h].index = o[h - 1];
          this.paste(t, e, this._results, r)
        }
      },
      fill: function(t, e, i, s, n, r) {
        if (r = this.getLayer(r), this.copy(e, i, s, n, r), !(this._results.length < 2)) {
          for (var o = 1; o < this._results.length; o++) this._results[o].index = t;
          this.paste(e, i, this._results, r)
        }
      },
      removeAllLayers: function() {
        this.layers.length = 0, this.currentLayer = 0
      },
      dump: function() {
        for (var t = "", e = [""], i = 0; i < this.layers[this.currentLayer].height; i++) {
          for (var s = 0; s < this.layers[this.currentLayer].width; s++) t += "%c  ", e.push(this.layers[this.currentLayer].data[i][s] > 1 ? this.debugMap[this.layers[this.currentLayer].data[i][s]] ? "background: " + this.debugMap[this.layers[this.currentLayer].data[i][s]] : "background: #ffffff" : "background: rgb(0, 0, 0)");
          t += "\n"
        }
        e[0] = t, console.log.apply(console, e)
      },
      destroy: function() {
        this.removeAllLayers(), this.data = [], this.game = null
      }
    }, i.Tilemap.prototype.constructor = i.Tilemap, i.TilemapLayer = function(t, s, n, r, o) {
      this.game = t, this.map = s, this.index = n, this.layer = s.layers[n], this.canvas = i.Canvas.create(r, o), this.context = this.canvas.getContext("2d"), this.baseTexture = new e.BaseTexture(this.canvas), this.texture = new e.Texture(this.baseTexture), this.textureFrame = new i.Frame(0, 0, 0, r, o, "tilemapLayer", t.rnd.uuid()), i.Sprite.call(this, this.game, 0, 0, this.texture, this.textureFrame), this.name = "", this.type = i.TILEMAPLAYER, this.fixedToCamera = !0, this.cameraOffset = new i.Point(0, 0), this.tileColor = "rgb(255, 255, 255)", this.debug = !1, this.debugAlpha = .5, this.debugColor = "rgba(0, 255, 0, 1)", this.debugFill = !1, this.debugFillColor = "rgba(0, 255, 0, 0.2)", this.debugCallbackColor = "rgba(255, 0, 0, 1)", this.scrollFactorX = 1, this.scrollFactorY = 1, this.dirty = !0, this._cw = s.tileWidth, this._ch = s.tileHeight, this._ga = 1, this._dx = 0, this._dy = 0, this._dw = 0, this._dh = 0, this._tx = 0, this._ty = 0, this._tw = 0, this._th = 0, this._tl = 0, this._maxX = 0, this._maxY = 0, this._startX = 0, this._startY = 0, this._results = [], this._x = 0, this._y = 0, this._prevX = 0, this._prevY = 0, this.updateMax()
    }, i.TilemapLayer.prototype = Object.create(i.Sprite.prototype), i.TilemapLayer.prototype = i.Utils.extend(!0, i.TilemapLayer.prototype, i.Sprite.prototype, e.Sprite.prototype), i.TilemapLayer.prototype.constructor = i.TilemapLayer, i.TilemapLayer.prototype.postUpdate = function() {
      i.Sprite.prototype.postUpdate.call(this), this.scrollX = this.game.camera.x * this.scrollFactorX, this.scrollY = this.game.camera.y * this.scrollFactorY, this.render()
    }, i.TilemapLayer.prototype.resizeWorld = function() {
      this.game.world.setBounds(0, 0, this.layer.widthInPixels, this.layer.heightInPixels)
    }, i.TilemapLayer.prototype._fixX = function(t) {
      return 0 > t && (t = 0), 1 === this.scrollFactorX ? t : this._x + (t - this._x / this.scrollFactorX)
    }, i.TilemapLayer.prototype._unfixX = function(t) {
      return 1 === this.scrollFactorX ? t : this._x / this.scrollFactorX + (t - this._x)
    }, i.TilemapLayer.prototype._fixY = function(t) {
      return 0 > t && (t = 0), 1 === this.scrollFactorY ? t : this._y + (t - this._y / this.scrollFactorY)
    }, i.TilemapLayer.prototype._unfixY = function(t) {
      return 1 === this.scrollFactorY ? t : this._y / this.scrollFactorY + (t - this._y)
    }, i.TilemapLayer.prototype.getTileX = function(t) {
      return this.game.math.snapToFloor(this._fixX(t), this.map.tileWidth) / this.map.tileWidth
    }, i.TilemapLayer.prototype.getTileY = function(t) {
      return this.game.math.snapToFloor(this._fixY(t), this.map.tileHeight) / this.map.tileHeight
    }, i.TilemapLayer.prototype.getTileXY = function(t, e, i) {
      return i.x = this.getTileX(t), i.y = this.getTileY(e), i
    }, i.TilemapLayer.prototype.getTiles = function(t, e, i, s, n) {
      "undefined" == typeof n && (n = !1), t = this._fixX(t), e = this._fixY(e), i > this.layer.widthInPixels && (i = this.layer.widthInPixels), s > this.layer.heightInPixels && (s = this.layer.heightInPixels), this._tx = this.game.math.snapToFloor(t, this._cw) / this._cw, this._ty = this.game.math.snapToFloor(e, this._ch) / this._ch, this._tw = (this.game.math.snapToCeil(i, this._cw) + this._cw) / this._cw, this._th = (this.game.math.snapToCeil(s, this._ch) + this._ch) / this._ch, this._results.length = 0;
      for (var r = this._ty; r < this._ty + this._th; r++)
        for (var o = this._tx; o < this._tx + this._tw; o++)
          if (this.layer.data[r] && this.layer.data[r][o] && (n === !1 || n && this.layer.data[r][o].canCollide)) {
            var a = this._unfixX(o * this._cw) / this._cw,
              h = this._unfixY(r * this._ch) / this._ch;
            this._results.push({
              x: a * this._cw,
              y: h * this._ch,
              right: a * this._cw + this._cw,
              bottom: h * this._ch + this._ch,
              tile: this.layer.data[r][o],
              layer: this.layer.data[r][o].layer
            })
          }
      return this._results
    }, i.TilemapLayer.prototype.updateMax = function() {
      this._maxX = this.game.math.ceil(this.canvas.width / this.map.tileWidth) + 1, this._maxY = this.game.math.ceil(this.canvas.height / this.map.tileHeight) + 1, this.layer && (this._maxX > this.layer.width && (this._maxX = this.layer.width), this._maxY > this.layer.height && (this._maxY = this.layer.height)), this.dirty = !0
    }, i.TilemapLayer.prototype.render = function() {
      if (this.layer.dirty && (this.dirty = !0), this.dirty && this.visible) {
        this._prevX = this._dx, this._prevY = this._dy, this._dx = -(this._x - this._startX * this.map.tileWidth), this._dy = -(this._y - this._startY * this.map.tileHeight), this._tx = this._dx, this._ty = this._dy, this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.fillStyle = this.tileColor;
        var t, s;
        this.debug && (this.context.globalAlpha = this.debugAlpha);
        for (var n = this._startY, r = this._startY + this._maxY; r > n; n++) {
          this._column = this.layer.data[n];
          for (var o = this._startX, a = this._startX + this._maxX; a > o; o++) this._column[o] && (t = this._column[o], this.map.tiles[t.index] && (s = this.map.tilesets[this.map.tiles[t.index][2]], s.image ? (this.debug === !1 && t.alpha !== this.context.globalAlpha && (this.context.globalAlpha = t.alpha), s.tileWidth !== this.map.tileWidth || s.tileHeight !== this.map.tileHeight ? this.context.drawImage(this.map.tilesets[this.map.tiles[t.index][2]].image, this.map.tiles[t.index][0], this.map.tiles[t.index][1], s.tileWidth, s.tileHeight, Math.floor(this._tx), Math.floor(this._ty) - (s.tileHeight - this.map.tileHeight), s.tileWidth, s.tileHeight) : this.context.drawImage(this.map.tilesets[this.map.tiles[t.index][2]].image, this.map.tiles[t.index][0], this.map.tiles[t.index][1], this.map.tileWidth, this.map.tileHeight, Math.floor(this._tx), Math.floor(this._ty), this.map.tileWidth, this.map.tileHeight), t.debug && (this.context.fillStyle = "rgba(0, 255, 0, 0.4)", this.context.fillRect(Math.floor(this._tx), Math.floor(this._ty), this.map.tileWidth, this.map.tileHeight))) : this.context.fillRect(Math.floor(this._tx), Math.floor(this._ty), this.map.tileWidth, this.map.tileHeight))), this._tx += this.map.tileWidth;
          this._tx = this._dx, this._ty += this.map.tileHeight
        }
        return this.debug && (this.context.globalAlpha = 1, this.renderDebug()), this.game.renderType === i.WEBGL && e.texturesToUpdate.push(this.baseTexture), this.dirty = !1, this.layer.dirty = !1, !0
      }
    }, i.TilemapLayer.prototype.renderDebug = function() {
      this._tx = this._dx, this._ty = this._dy, this.context.strokeStyle = this.debugColor, this.context.fillStyle = this.debugFillColor;
      for (var t = this._startY, e = this._startY + this._maxY; e > t; t++) {
        this._column = this.layer.data[t];
        for (var i = this._startX, s = this._startX + this._maxX; s > i; i++) {
          var n = this._column[i];
          n && (n.faceTop || n.faceBottom || n.faceLeft || n.faceRight) && (this._tx = Math.floor(this._tx), this.debugFill && this.context.fillRect(this._tx, this._ty, this._cw, this._ch), this.context.beginPath(), n.faceTop && (this.context.moveTo(this._tx, this._ty), this.context.lineTo(this._tx + this._cw, this._ty)), n.faceBottom && (this.context.moveTo(this._tx, this._ty + this._ch), this.context.lineTo(this._tx + this._cw, this._ty + this._ch)), n.faceLeft && (this.context.moveTo(this._tx, this._ty), this.context.lineTo(this._tx, this._ty + this._ch)), n.faceRight && (this.context.moveTo(this._tx + this._cw, this._ty), this.context.lineTo(this._tx + this._cw, this._ty + this._ch)), this.context.stroke()), n && (n.collisionCallback || n.layer.callbacks[n.index]) && (this.context.fillStyle = this.debugCallbackColor, this.context.fillRect(this._tx, this._ty, this._cw, this._ch), this.context.fillStyle = this.debugFillColor), this._tx += this.map.tileWidth
        }
        this._tx = this._dx, this._ty += this.map.tileHeight
      }
    }, Object.defineProperty(i.TilemapLayer.prototype, "scrollX", {
      get: function() {
        return this._x
      },
      set: function(t) {
        t !== this._x && t >= 0 && this.layer.widthInPixels > this.width && (this._x = t, this._x > this.layer.widthInPixels - this.width && (this._x = this.layer.widthInPixels - this.width), this._startX = this.game.math.floor(this._x / this.map.tileWidth), this._startX < 0 && (this._startX = 0), this._startX + this._maxX > this.layer.width && (this._startX = this.layer.width - this._maxX), this.dirty = !0)
      }
    }), Object.defineProperty(i.TilemapLayer.prototype, "scrollY", {
      get: function() {
        return this._y
      },
      set: function(t) {
        t !== this._y && t >= 0 && this.layer.heightInPixels > this.height && (this._y = t, this._y > this.layer.heightInPixels - this.height && (this._y = this.layer.heightInPixels - this.height), this._startY = this.game.math.floor(this._y / this.map.tileHeight), this._startY < 0 && (this._startY = 0), this._startY + this._maxY > this.layer.height && (this._startY = this.layer.height - this._maxY), this.dirty = !0)
      }
    }), Object.defineProperty(i.TilemapLayer.prototype, "collisionWidth", {
      get: function() {
        return this._cw
      },
      set: function(t) {
        this._cw = t, this.dirty = !0
      }
    }), Object.defineProperty(i.TilemapLayer.prototype, "collisionHeight", {
      get: function() {
        return this._ch
      },
      set: function(t) {
        this._ch = t, this.dirty = !0
      }
    }), i.TilemapParser = {
      tileset: function(t, e, s, n, r, o, a, h, l) {
        var c = t.cache.getTilesetImage(e);
        if (null === c) return console.warn("Phaser.TilemapParser.tileSet: Invalid image key given"), null;
        var u = c.width,
          d = c.height;
        return -1 === a && (a = Math.round(u / s)), -1 === h && (h = Math.round(d / n)), -1 === l && (l = a * h), 0 === u || 0 === d || s > u || n > d || 0 === l ? (console.warn("Phaser.TilemapParser.tileSet: width/height zero or width/height < given tileWidth/tileHeight"), null) : new i.Tileset(c, e, s, n, r, o, a, h, l)
      },
      parse: function(t, e) {
        var s = t.cache.getTilemapData(e);
        return s ? s.format === i.Tilemap.CSV ? this.parseCSV(s.data) : s.format === i.Tilemap.TILED_JSON ? this.parseTiledJSON(s.data) : void 0 : {
          layers: [],
          objects: [],
          images: [],
          tilesets: []
        }
      },
      parseCSV: function(t) {
        t = t.trim();
        for (var e = [], i = t.split("\n"), s = i.length, n = 0, r = 0; r < i.length; r++) {
          e[r] = [];
          for (var o = i[r].split(","), a = 0; a < o.length; a++) e[r][a] = parseInt(o[a], 10);
          0 === n && (n = o.length)
        }
        return [{
          name: "csv",
          width: n,
          height: s,
          alpha: 1,
          visible: !0,
          indexes: [],
          tileMargin: 0,
          tileSpacing: 0,
          data: e
        }]
      },
      parseTiledJSON: function(t) {
        if ("orthogonal" !== t.orientation) return console.warn("TilemapParser.parseTiledJSON: Only orthogonal map types are supported in this version of Phaser"), null;
        var e = {};
        e.width = t.width, e.height = t.height, e.tileWidth = t.tilewidth, e.tileHeight = t.tileheight, e.orientation = t.orientation, e.version = t.version, e.properties = t.properties, e.widthInPixels = e.width * e.tileWidth, e.heightInPixels = e.height * e.tileHeight;
        for (var s = [], n = 0; n < t.layers.length; n++)
          if ("tilelayer" === t.layers[n].type) {
            var r = {
              name: t.layers[n].name,
              x: t.layers[n].x,
              y: t.layers[n].y,
              width: t.layers[n].width,
              height: t.layers[n].height,
              widthInPixels: t.layers[n].width * t.tilewidth,
              heightInPixels: t.layers[n].height * t.tileheight,
              alpha: t.layers[n].opacity,
              visible: t.layers[n].visible,
              properties: {},
              indexes: [],
              callbacks: []
            };
            t.layers[n].properties && (r.properties = t.layers[n].properties);
            for (var o = 0, a = [], h = [], l = 0, c = t.layers[n].data.length; c > l; l++) a.push(t.layers[n].data[l] > 0 ? new i.Tile(r, t.layers[n].data[l], o, h.length, t.tilewidth, t.tileheight) : null), o++, o === t.layers[n].width && (h.push(a), o = 0, a = []);
            r.data = h, s.push(r)
          }
        e.layers = s;
        for (var u = [], n = 0; n < t.layers.length; n++)
          if ("imagelayer" === t.layers[n].type) {
            var d = {
              name: t.layers[n].name,
              image: t.layers[n].image,
              x: t.layers[n].x,
              y: t.layers[n].y,
              alpha: t.layers[n].opacity,
              visible: t.layers[n].visible,
              properties: {}
            };
            t.layers[n].properties && (d.properties = t.layers[n].properties), u.push(d)
          }
        e.images = u;
        for (var p = {}, n = 0; n < t.layers.length; n++)
          if ("objectgroup" === t.layers[n].type) {
            p[t.layers[n].name] = [];
            for (var f = 0, c = t.layers[n].objects.length; c > f; f++)
              if (t.layers[n].objects[f].gid) {
                var g = {
                  gid: t.layers[n].objects[f].gid,
                  name: t.layers[n].objects[f].name,
                  x: t.layers[n].objects[f].x,
                  y: t.layers[n].objects[f].y,
                  visible: t.layers[n].objects[f].visible,
                  properties: t.layers[n].objects[f].properties
                };
                p[t.layers[n].name].push(g)
              }
          }
        e.objects = p;
        for (var m = [], n = 0; n < t.tilesets.length; n++) {
          var y = t.tilesets[n],
            _ = new i.Tileset(y.name, y.firstgid, y.tilewidth, y.tileheight, y.margin, y.spacing, y.properties);
          y.tileproperties && (_.tileProperties = y.tileproperties), _.rows = (y.imageheight - y.margin) / (y.tileheight + y.spacing), _.columns = (y.imagewidth - y.margin) / (y.tilewidth + y.spacing), _.total = _.rows * _.columns, m.push(_)
        }
        e.tilesets = m, e.tiles = [];
        for (var n = 0; n < e.tilesets.length; n++)
          for (var y = e.tilesets[n], o = y.tileMargin, x = y.tileMargin, v = 0, b = 0, w = 0, l = y.firstgid; l < y.firstgid + y.total && (e.tiles[l] = [o, x, n], o += y.tileWidth + y.tileSpacing, v++, v !== y.total) && (b++, b !== y.columns || (o = y.tileMargin, x += y.tileHeight + y.tileSpacing, b = 0, w++, w !== y.rows)); l++);
        return e
      }
    }, i.Tileset = function(t, e, i, s, n, r, o) {
      this.name = t, this.firstgid = e, this.tileWidth = i, this.tileHeight = s, this.tileMargin = n, this.tileSpacing = r, this.properties = o, this.image = null, this.rows = 0, this.columns = 0, this.total = 0
    }, i.Tileset.prototype = {
      setSpacing: function(t, e) {
        this.tileMargin = t, this.tileSpacing = e
      }
    }, i.Tileset.prototype.constructor = i.Tileset, e.CanvasRenderer.prototype.render = function(t) {
      e.texturesToUpdate.length = 0, e.texturesToDestroy.length = 0, e.visibleCount++, t.updateTransform(), this.context.setTransform(1, 0, 0, 1, 0, 0), i.CANVAS_CLEAR_RECT && this.context.clearRect(0, 0, this.width, this.height), this.renderDisplayObject(t, !1), e.Texture.frameUpdates.length > 0 && (e.Texture.frameUpdates.length = 0)
    }, e.CanvasRenderer.prototype.renderDisplayObject = function(t, s) {
      var n = t.last._iNext;
      t = t.first;
      do
        if (t.visible || s)
          if (t.renderable && 0 !== t.alpha) {
            if (t instanceof e.Sprite) t.texture.frame && (this.context.globalAlpha = t.worldAlpha, i.CANVAS_PX_ROUND ? this.context.setTransform(t.worldTransform[0], t.worldTransform[3], t.worldTransform[1], t.worldTransform[4], Math.floor(t.worldTransform[2]), Math.floor(t.worldTransform[5])) : this.context.setTransform(t.worldTransform[0], t.worldTransform[3], t.worldTransform[1], t.worldTransform[4], t.worldTransform[2], t.worldTransform[5]), t.texture.trimmed && this.context.transform(1, 0, 0, 1, t.texture.trim.x, t.texture.trim.y), this.smoothProperty && this.scaleMode !== t.texture.baseTexture.scaleMode && (this.scaleMode = t.texture.baseTexture.scaleMode, this.context[this.smoothProperty] = this.scaleMode === e.BaseTexture.SCALE_MODE.LINEAR), this.context.drawImage(t.texture.baseTexture.source, t.texture.frame.x, t.texture.frame.y, t.texture.frame.width, t.texture.frame.height, Math.floor(t.anchor.x * -t.texture.frame.width), Math.floor(t.anchor.y * -t.texture.frame.height), t.texture.frame.width, t.texture.frame.height));
            else if (t instanceof e.Strip) this.context.setTransform(t.worldTransform[0], t.worldTransform[3], t.worldTransform[1], t.worldTransform[4], t.worldTransform[2], t.worldTransform[5]), this.renderStrip(t);
            else if (t instanceof e.TilingSprite) this.context.setTransform(t.worldTransform[0], t.worldTransform[3], t.worldTransform[1], t.worldTransform[4], t.worldTransform[2], t.worldTransform[5]), this.renderTilingSprite(t);
            else if (t instanceof e.CustomRenderable) t.renderCanvas(this);
            else if (t instanceof e.Graphics) this.context.setTransform(t.worldTransform[0], t.worldTransform[3], t.worldTransform[1], t.worldTransform[4], t.worldTransform[2], t.worldTransform[5]), e.CanvasGraphics.renderGraphics(t, this.context);
            else if (t instanceof e.FilterBlock)
              if (t.open) {
                this.context.save();
                var r = t.mask.alpha,
                  o = t.mask.worldTransform;
                this.context.setTransform(o[0], o[3], o[1], o[4], o[2], o[5]), t.mask.worldAlpha = .5, this.context.worldAlpha = 0, e.CanvasGraphics.renderGraphicsMask(t.mask, this.context), this.context.clip(), t.mask.worldAlpha = r
              } else this.context.restore();
            t = t._iNext
          } else t = t._iNext;
      else t = t.last._iNext; while (t != n)
    }, e.WebGLBatch.prototype.update = function() {
      for (var t, i, s, n, r, o, a, h, l, c, u, d, p, f, g, m, y = 0, _ = this.head; _;) {
        if (_.vcount === e.visibleCount) {
          if (i = _.texture.frame.width, s = _.texture.frame.height, n = _.anchor.x, r = _.anchor.y, o = i * (1 - n), a = i * -n, h = s * (1 - r), l = s * -r, c = 8 * y, t = _.worldTransform, u = t[0], d = t[3], p = t[1], f = t[4], g = t[2], m = t[5], _.texture.trimmed && (g += _.texture.trim.x, m += _.texture.trim.y), this.verticies[c + 0] = u * a + p * l + g, this.verticies[c + 1] = f * l + d * a + m, this.verticies[c + 2] = u * o + p * l + g, this.verticies[c + 3] = f * l + d * o + m, this.verticies[c + 4] = u * o + p * h + g, this.verticies[c + 5] = f * h + d * o + m, this.verticies[c + 6] = u * a + p * h + g, this.verticies[c + 7] = f * h + d * a + m, _.updateFrame || _.texture.updateFrame) {
            this.dirtyUVS = !0;
            var x = _.texture,
              v = x.frame,
              b = x.baseTexture.width,
              w = x.baseTexture.height;
            this.uvs[c + 0] = v.x / b, this.uvs[c + 1] = v.y / w, this.uvs[c + 2] = (v.x + v.width) / b, this.uvs[c + 3] = v.y / w, this.uvs[c + 4] = (v.x + v.width) / b, this.uvs[c + 5] = (v.y + v.height) / w, this.uvs[c + 6] = v.x / b, this.uvs[c + 7] = (v.y + v.height) / w, _.updateFrame = !1
          }
          if (_.cacheAlpha != _.worldAlpha) {
            _.cacheAlpha = _.worldAlpha;
            var T = 4 * y;
            this.colors[T] = this.colors[T + 1] = this.colors[T + 2] = this.colors[T + 3] = _.worldAlpha, this.dirtyColors = !0
          }
        } else c = 8 * y, this.verticies[c + 0] = 0, this.verticies[c + 1] = 0, this.verticies[c + 2] = 0, this.verticies[c + 3] = 0, this.verticies[c + 4] = 0, this.verticies[c + 5] = 0, this.verticies[c + 6] = 0, this.verticies[c + 7] = 0;
        y++, _ = _.__next
      }
    }, i
});
var DEBUG, FLAP, GAME_HEIGHT, GRAVITY, GROUND_HEIGHT, GROUND_Y, HEIGHT, OPENING, SCALE, SPAWN_RATE, SPEED, WIDTH, WebFontConfig, bg, bird, deadInvs, deadTubeBottoms, deadTubeTops, fallSnd, flapSnd, floor, gameOver, gameOverText, gameStarted, githubHtml, ground, hurtSnd, instText, invs, main, parent, score, scoreSnd, scoreText, swooshSnd, tubes, tubesTimer;
DEBUG = !1, SPEED = 160, GRAVITY = 1100, FLAP = 320, SPAWN_RATE = 1 / 1200, OPENING = 100, SCALE = 1, HEIGHT = 384, WIDTH = 288, GAME_HEIGHT = 336, GROUND_HEIGHT = 64, GROUND_Y = HEIGHT - GROUND_HEIGHT, parent = document.querySelector("#screen"), gameStarted = void 0, gameOver = void 0, deadTubeTops = [], deadTubeBottoms = [], deadInvs = [], bg = null, tubes = null, invs = null, bird = null, ground = null, score = null, scoreText = null, instText = null, gameOverText = null, flapSnd = null, scoreSnd = null, hurtSnd = null, fallSnd = null, swooshSnd = null, tubesTimer = null, githubHtml = '<iframe src="http://ghbtns.com/github-btn.html?user=hyspace&repo=flappy&type=watch&count=true&size=large"\nallowtransparency="true" frameborder="0" scrolling="0" width="150" height="30"></iframe>', floor = Math.floor, main = function() {
  var t, e, i, s, n, r, o, a, h, l, c, u, d, cr, txt, ls;
  h = function(t, e) {
    var i, n, r;
    return i = null, n = e ? "tubeTop" : "tubeBottom", r = floor(e ? t - OPENING / 2 - 320 : t + OPENING / 2), deadTubeTops.length > 0 && "tubeTop" === n ? (i = deadTubeTops.pop().revive(), i.reset(s.world.width, r)) : deadTubeBottoms.length > 0 && "tubeBottom" === n ? (i = deadTubeBottoms.pop().revive(), i.reset(s.world.width, r)) : (i = tubes.create(s.world.width, r, n), i.body.allowGravity = !1), i.body.velocity.x = -SPEED, i
  }, l = function() {
    var t, e, i, n;
    tubes.forEachAlive(function(t) {
      t.x + t.width < s.world.bounds.left && ("tubeTop" === t.key && deadTubeTops.push(t.kill()), "tubeBottom" === t.key && deadTubeBottoms.push(t.kill()))
    }), invs.forEachAlive(function(t) {
      t.x + t.width < s.world.bounds.left && deadInvs.push(t.kill())
    }), n = s.world.height / 2 + (Math.random() - .5) * s.world.height * .2, t = h(n), i = h(n, !0), deadInvs.length > 0 ? e = deadInvs.pop().revive().reset(i.x + i.width / 2, 0) : (e = invs.create(i.x + i.width / 2, 0), e.width = 2, e.height = s.world.height, e.body.allowGravity = !1), e.body.velocity.x = -SPEED
  }, t = function(t, e) {
    invs.remove(e), score += 1, scoreText.setText(score), scoreSnd.play()
  }, a = function() {
    var t;

    gameOver = !0, bird.body.velocity.y > 0 && (bird.body.velocity.y = 100), bird.animations.stop(), bird.frame = 1,
    instText.setText("TOUCH\nTO TRY AGAIN"),
    instText.renderable = !0, t = window.localStorage.getItem("hiscore"), t = t ? t : score,
    t = score > parseInt(t, 10) ? score : t,
    window.localStorage.setItem("hiscore", t),
    cr = score >= 10 && score < 20 ? 1 : (score >= 20 && score < 30 ? 3 : (score >= 30 && score < 50 ? 5 : score > 50 ? 10 : 0));
    ls = 10 - score,
    txt = cr === 0 && score < 5 ? "Oops..! \n\n SCORE 10 PLUS TO \n\nEARN CREDIT\n" : cr === 0 && score >= 5 ? "Uuuu..! \n\n YOU ARE JUST \n\n" + ls + " POINT LESS\n" : cr > 0 ? "GAMEOVER \n\nYOU EARN " + cr + " CREDIT\n" : "GAME OVER"
    gameOverText.setText(txt),
    gameOverText.renderable = !0,
    jQuery.ajax({
      type: 'POST',
      url: 'http://10.11.22.10:3001/sendData',
      crossDomain: true,
      data: {
        "score": cr,
        "user": location.search.split('user=')[1]
      },
      dataType: 'json',
      success: function(responseseData, textStatus, jqXHR) {
        console.log(responseData);
      },
      error: function(responseData, textStatus, errorThrown) {
        console.log(responseData);
      }
    });
    tubes.forEachAlive(function(t) {
      t.body.velocity.x = 0
    }), invs.forEach(function(t) {
      t.body.velocity.x = 0
    }), s.time.events.remove(tubesTimer), s.time.events.add(1e3, function() {
      return s.input.onTap.addOnce(function() {
        return o(), swooshSnd.play()
      })
    }), hurtSnd.play()

  }, i = function() {
    var t;
    gameStarted || c(), gameOver || (bird.body.gravity.y = 0, bird.body.velocity.y = -100, t = s.add.tween(bird.body.velocity).to({
      y: -FLAP
    }, 25, Phaser.Easing.Bounce.In, !0), t.onComplete.add(function() {
      return bird.body.gravity.y = GRAVITY
    }), flapSnd.play())
  },


  n = function() {
    var t;
    t = {
      spritesheet: {
        bird: ["assets/bird.png", 36, 26]
      },
      image: {
        tubeTop: ["assets/tube1.png"],
        tubeBottom: ["assets/tube2.png"],
        ground: ["assets/ground.png"],
        bg: ["assets/bg.png"]
      },
      audio: {
        flap: ["assets/sfx_wing.mp3"],
        score: ["assets/sfx_point.mp3"],
        hurt: ["assets/sfx_hit.mp3"],
        fall: ["assets/sfx_die.mp3"],
        swoosh: ["assets/sfx_swooshing.mp3"]
      }
    }, Object.keys(t).forEach(function(e) {
      Object.keys(t[e]).forEach(function(i) {
        s.load[e].apply(s.load, [i].concat(t[e][i]))
      })
    })
  }, e = function() {
    var t;
    t = window.innerWidth / window.innerHeight, (t > 1.15 || .7 > t) && (document.querySelector("#github").innerHTML = githubHtml), document.querySelector("#loading").style.display = "none", Phaser.Canvas.setSmoothingEnabled(s.context, !1), s.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL, s.stage.scale.setScreenSize(!0), s.world.width = WIDTH, s.world.height = HEIGHT, bg = s.add.tileSprite(0, 0, WIDTH, HEIGHT, "bg"), tubes = s.add.group(), invs = s.add.group(), bird = s.add.sprite(0, 0, "bird"), bird.anchor.setTo(.5, .5), bird.animations.add("fly", [0, 1, 2], 10, !0), bird.body.collideWorldBounds = !0, bird.body.setPolygon(24, 1, 34, 16, 30, 32, 20, 24, 12, 34, 2, 12, 14, 2), ground = s.add.tileSprite(0, GROUND_Y, WIDTH, GROUND_HEIGHT, "ground"), ground.tileScale.setTo(SCALE, SCALE), scoreText = s.add.text(s.world.width / 2, s.world.height / 4, "", {
      font: '16px "Press Start 2P"',
      fill: "#fff",
      stroke: "#430",
      strokeThickness: 4,
      align: "center"
    }), scoreText.anchor.setTo(.5, .5), instText = s.add.text(s.world.width / 2, s.world.height - s.world.height / 4, "", {
      font: '8px "Press Start 2P"',
      fill: "#fff",
      stroke: "#430",
      strokeThickness: 4,
      align: "center"
    }), instText.anchor.setTo(.5, .5), gameOverText = s.add.text(s.world.width / 2, s.world.height / 2, "", {
      font: '16px "Press Start 2P"',
      fill: "#fff",
      stroke: "#430",
      strokeThickness: 4,
      align: "center"
    }), gameOverText.anchor.setTo(.5, .5), gameOverText.scale.setTo(SCALE, SCALE), flapSnd = s.add.audio("flap"), scoreSnd = s.add.audio("score"), hurtSnd = s.add.audio("hurt"), fallSnd = s.add.audio("fall"), swooshSnd = s.add.audio("swoosh"), s.input.onDown.add(i), o()
  }, o = function() {
    gameStarted = !1, gameOver = !1, score = 0, scoreText.setText("Flappy Bird"), instText.setText("TOUCH TO FLAP\nbird WINGS"), gameOverText.renderable = !1, bird.body.allowGravity = !1, bird.reset(.3 * s.world.width, s.world.height / 2), bird.angle = 0, bird.animations.play("fly"), tubes.removeAll(), invs.removeAll()
  }, c = function() {
    bird.body.allowGravity = !0, bird.body.gravity.y = GRAVITY, tubesTimer = s.time.events.loop(1 / SPAWN_RATE, l), scoreText.setText(score), instText.renderable = !1, gameStarted = !0
  }, d = function() {
    var e;
    gameStarted ? gameOver ? (e = s.add.tween(bird).to({
      angle: 90
    }, 100, Phaser.Easing.Bounce.Out, !0), bird.body.bottom >= GROUND_Y + 3 && (bird.y = GROUND_Y - 13, bird.body.velocity.y = 0, bird.body.allowGravity = !1, bird.body.gravity.y = 0)) : (bird.angle = 90 * (FLAP + bird.body.velocity.y) / FLAP - 180, bird.angle < -30 && (bird.angle = -30), bird.angle > 80 ? (bird.angle = 90, bird.animations.stop(), bird.frame = 1) : bird.animations.play(), s.physics.overlap(bird, tubes, function() {
      return a(), fallSnd.play()
    }), !gameOver && bird.body.bottom >= GROUND_Y && a(), s.physics.overlap(bird, invs, t)) : (bird.y = s.world.height / 2 + 8 * Math.cos(s.time.now / 200), bird.angle = 0), gameOver || (ground.tilePosition.x -= s.time.physicsElapsed * SPEED)
  }, r = function() {
    DEBUG && (s.debug.renderSpriteBody(bird), tubes.forEachAlive(function(t) {
      s.debug.renderSpriteBody(t)
    }), invs.forEach(function(t) {
      s.debug.renderSpriteBody(t)
    }))
  }, u = {
    preload: n,
    create: e,
    update: d,
    render: r
  }, s = new Phaser.Game(WIDTH, HEIGHT, Phaser.CANVAS, parent, u, !1, !1)
}, WebFontConfig = {
  google: {
    families: ["Press+Start+2P::latin"]
  },
  active: main
},
function() {
  var t, e;
  return e = document.createElement("script"), e.src = ("https:" === document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js", e.type = "text/javascript", e.async = "true", t = document.getElementsByTagName("script")[0], t.parentNode.insertBefore(e, t)
}();