class EventEmitter {
    constructor() {
        this._events = {};

        if (typeof EventEmitter.instance === "object") {
            return EventEmitter.instance;
        }

        EventEmitter.instance = this;
        return this;
    }

    on(name, listener) {
        if (!this._events[name]) {
            this._events[name] = [];
        }

        this._events[name].push(listener);
    }

    removeListeners() {
        this._events = {};
    }

    removeListener(name, listenerToRemove) {
        if (!this._events[name]) {
            throw new Error(`Can't remove a listener. Event "${name}" does not exists`);
        }
        const filterListeners = (listener) => listener !== listenerToRemove;

        this._events[name] = this._events[name].filter(filterListeners);
    }

    emit(name, data) {
        if (!this._events[name]) {
            throw new Error(`Can't emit an event. Event "${name}" does not exists`);
        }

        const fireCallbacks = (callback) => {
            callback(data);
        }

        this._events[name].forEach(fireCallbacks);
    }
}

window.EE = new EventEmitter();