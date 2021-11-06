const concurrently = require('concurrently');


function runConcurrent(command, actionOnSuccess, actionOnFailure) {
    concurrently([
        { command: `npm run ${command}`, name: `${command}` },
    ], {
        prefix: 'name',
        killOthers: ['failure', 'success'],
        restartTries: 3,
    }).then((success) => {
        !!actionOnSuccess && actionOnSuccess();
        console.log("Compilación Completada con éxito")
    }, (failure) => {
        !!actionOnFailure && actionOnFailure();
    });
}

const buildOnSuccess = () => {
    console.log("Completada la limpieza de bundles y estilos.\n")
    runConcurrent('build', runOnSuccess, null)
}

const runOnSuccess = () => {
    console.log("Completada la compilación de bundles y estilos.\n")
    console.log("---------------------------------------------------\n" +
        "---      Comenzando despliegue en Webpack       ---\n" +
        "---     -----------------------------------     ---\n" +
        "---      Para abrir la app en el navegador      ---\n" +
        "---      URL:              ---\n" +
        "---------------------------------------------------\n");
    runConcurrent('serve', null, null)
}

const runOnFailure = () => {
    console.log("Error al realizar la ejecución en paralelo\n -- Ejecuta el script de nuevo")
}

runConcurrent("clean-dist", buildOnSuccess, runOnFailure);