module.exports = class TsFileAdapter {
    
    constructor(fileHandler) {
        this._fileHandler = fileHandler;
    }

    setValue(value) {
        this._fileHandler.setValue(value);
        return this;
    }

    getValue() {
        return this.value;
    }

    setPath(path) {
        this._fileHandler.setPath(path);
        return this;
    }

    getPath(path) {
        this._fileHandler.getPath();
    }

    setErrorMessage(errorNumber, message) {
        this._fileHandler.setErrorMessage(errorNumber, message);
        return this;
    }

    getErrorMessage(errorNumber) {
        return this._fileHandler.getErrorMessage(errorNumber);
    }

    async compile(action) {
        await this._fileHandler.runRecursiveAction(action);
        return this;
    }
}