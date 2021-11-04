(async function() {

    const fs = require('fs');
    const path = require('path');

    const rootPath = path.resolve(__dirname, '../../dist/src');
    const files = await fs.promises.readdir(rootPath);
    const fetchedFiles = [];

    for (let file of files) {
        try {
            const filePath = path.join(rootPath, file);
            const stats = await fs.promises.lstat(filePath);

            if (stats.isFile()) {
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    } else {
                        console.log('Limpiando ficheros compilados...')
                    }
                })
            }

        } catch (err) {
            console.error(err);
        }
    }
})();