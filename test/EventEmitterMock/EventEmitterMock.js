class EventEmitterMock {
    constructor() {
        this._events = {};

        if (typeof EventEmitterMock.instance === "object") {
            return EventEmitterMock.instance;
        }

        EventEmitterMock.instance = this;
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

global.window.EE = new EventEmitterMock();