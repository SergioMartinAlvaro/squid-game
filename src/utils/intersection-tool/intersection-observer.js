class IntersectionObserverTool {

    constructor(root, rootMargin, observableObject) {
        this.observableObject = document.querySelector(observableObject);
        this.root = root !== null ? document.querySelector(root) : null;
        this.rootMargin = `${rootMargin}px`;
        this.observer = null;
        this.message = null;
        return this;
    }

    // Inizializa el observer con una acción que se ejecuta al cumplir la condición.
    // Sin esta acción no obtenemos el observer.
    // Testeable.
    startObserver(callback) {

        const options = this.getOptions();

        // Inicializamos la acción que se desencadena al cumplir la condición
        this.callbackAction = callback;
        this._setObserver(new IntersectionObserver(this._callback.bind(this), options)).observe(this.observableObject)
    }

    getOptions() {
        return {
            root: this.root,
            rootMargin: this.rootMargin,
            treshold: 1
        }
    }

    _buildThresholdList() {
        var thresholds = [];
        let numSteps = 10;
        for (var i = 1.0; i <= numSteps; i++) {
            var ratio = i / numSteps;
            thresholds.push(ratio);
        }

        thresholds.push(0);
        return thresholds;
    }

    _callback(entries, observer) {
        if (entries && observer) {
            this.callbackAction(entries, observer);
        } else {
            console.log("Obligatorio pasar por parámetro entries y observer")
        }

    }

    _setObserver(observer) {
        this.observer = observer;
        return this.observer;
    }
}