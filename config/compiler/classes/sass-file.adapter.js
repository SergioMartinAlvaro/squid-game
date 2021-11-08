const sass = require('node-sass');
const fs = require('fs');
const path = require('path');

module.exports = class SassFileAdapter {

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

    getPath() {
        this._fileHandler.getPath();
    }

    setErrorMessage(errorNumber, message) {
        this._fileHandler.setErrorMessage(errorNumber, message);
        return this;
    }

    getFileName(filePath) {
        return this._fileHandler.getFileName(filePath);
    }

    getErrorMessage(errorNumber) {
        return this._fileHandler.getErrorMessage(errorNumber);
    }

    async compile() {
        await this._fileHandler.runRecursiveAction(this.compileSass.bind(this));
        return this;
    }

    validateType(fileType, fileName) {
        return this._fileHandler.validateType(fileType, fileName);
    }

    getConfigRoute() {
        let existsRoute = fs.existsSync(path.resolve(__dirname, '../aux/exampleFile.txt'));
        let existsRouteWin = fs.existsSync(path.resolve(__dirname, '..\\aux\\exampleFile.txt'));
        if(existsRoute) {
            console.log("SISTEMA OPERATIVO UNIX")
            return '../aux/exampleFile.txt';
        } else if(existsRouteWin) {
            console.log("SISTEMA OPERATIVO WINDOWS")
           return '..\\aux\\exampleFile.txt'
        } else {
            return '../aux/exampleFile.txt';
        }
    }

    writeFileByTemplate(css, filePath) {
        console.log("DIRECTORIO")
        fs.readFile(path.resolve(__dirname, this.getConfigRoute()), (err, content) => {
            let data = content.toString();
            let fileName = this.getFileName(filePath);
            data = data.replace('#{className}', fileName.replace('-', '').replace('.', ''));
            data = data.replace('#{className}', fileName.replace('-', '').replace('.', ''));
            data = data.replace('#{cssValue}', css.toString());

            let pathToStore = filePath.slice(0, filePath.lastIndexOf('/'));

            fs.writeFile(`${pathToStore}/${fileName}-styles.js`, data, function(err) {
                if (err) throw err;
                console.log(`Styles file ${fileName}-styles.js is created successfully from SASS.`);
            });
        });
    }

    compileSass(scss_fileName) {
        let isScss = this.validateType('scss', scss_fileName);
        if (isScss) {
            let css = '';
            sass.render({
                file: scss_fileName,
                outFile: 'index.css'
            }, function(error, result) {
                if (error) {
                    console.log(error);
                }

                css = result.css.toString().replace(' ', '').replace('\r\n', '');
                this.writeFileByTemplate(css, scss_fileName);
            }.bind(this))

        }
    }
}