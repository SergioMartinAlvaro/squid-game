const fs = require('fs');
const path = require('path');

module.exports = class FileHandler {
    constructor() {
        this.value = "";
        this.path = "";
        this.errorMessages = {
            101: "Error 101",
            102: "Error de formato. Introduzca de nuevo los datos",
            401: "Error 401",
            402: "Error 402",
            500: "Los datos fueron enviados correctamente",
            999: "Error no contemplado, contecte con el operario."
        }
    }

    getPath() {
        return this.path;
    }

    setPath(path) {
        this.path = path;
        return this;
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
        return this;
    }

    getErrorMessage(errorNumber) {
        return this.errorMessages[errorNumber] ? this.errorMessages[errorNumber] : this.errorMessages[999];
    }

    getFileName(filePath) {
        let file = filePath.slice(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
        if(!!~file.indexOf('.')) {
            file = file.slice(file.slice(file.indexOf('.')));
        }
        return file;
    }

    setErrorMessage(errorNumber, message) {
        if(this.errorMessages[errorNumber]) {
            console.error("Ya existe un mensaje de error con ese valor.");
        } else {
            this.errorMessages[errorNumber] = message;
        }

        return this;
    }

    validateType(fileType, filename) {
        let extension = filename.split('.').pop();
        return extension === fileType;
    }

    async _runFolderRecursively(action) {
        const rootPath = this.path;
        const files = await fs.promises.readdir(rootPath);
        const fetchedFiles = [];

        for(let file of files) {
            try {
                const filePath = path.join(rootPath, file);
                const stats = await fs.promises.lstat(filePath);

                if(stats.isFile()) {
                    action(`${this.getPath()}/${file}`);
                    fetchedFiles.push({ filePath });
                }

                if(stats.isDirectory()) {
                    const childFiles = await fs.promises.readdir(filePath);
                    files.push(...childFiles.map((f) => path.join(file, f)));
                }

            } catch(err) {
                console.error(err);
            }
        }

        return fetchedFiles;
    }

    async runRecursiveAction(action) {
        try {
            await this._runFolderRecursively(action);
        } catch(err) {
            console.error(err);
        }
    }
}