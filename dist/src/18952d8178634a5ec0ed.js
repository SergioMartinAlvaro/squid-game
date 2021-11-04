function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this._events = {};

    if (_typeof(EventEmitter.instance) === "object") {
      return EventEmitter.instance;
    }

    EventEmitter.instance = this;
    return this;
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(name, listener) {
      if (!this._events[name]) {
        this._events[name] = [];
      }

      this._events[name].push(listener);
    }
  }, {
    key: "removeListener",
    value: function removeListener(name, listenerToRemove) {
      if (!this._events[name]) {
        throw new Error("Can't remove a listener. Event \"".concat(name, "\" does not exists"));
      }

      var filterListeners = function filterListeners(listener) {
        return listener !== listenerToRemove;
      };

      this._events[name] = this._events[name].filter(filterListeners);
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      if (!this._events[name]) {
        throw new Error("Can't emit an event. Event \"".concat(name, "\" does not exists"));
      }

      var fireCallbacks = function fireCallbacks(callback) {
        callback(data);
      };

      this._events[name].forEach(fireCallbacks);
    }
  }]);

  return EventEmitter;
}();

window.EE = new EventEmitter();