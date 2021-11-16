/* Secuencia de comandos que ejecuta el navegador en 2º plano.
separado de la pagina web.
Permite lanzar notificaciones push y sincronización en segundo plano.
Permite gestionar una caché de respuestas. 

No pueden acceder al DOM, pero puede comunicarse con las páginas bajo su control
respondiendo mensajes enviados a través de la interfaz postMessage

Es un proxy programable. Permite controlar la manera en que se procesan solicitudes.

Se detiene si no está en uso y se reinicia al usarse. Para que persistan datos
se recomienda usar la API de IndexedDB.

Hacen uso de promesas.

Para instalar un SW se tiene que registrar. este se instala en 2o plano.
Conviene almacenar en la caché elementos estáticos. Si no se tiene acceso
a la caché fallará la instalación.

Tras la instalación este pasará a activarse. momento para administrar cachés
anteriores

Pasado este paso el SW controlará las páginas a su alcance. No se controlará la 
página que registró por primera vez el SW hasta que se vuelva a cargar.
El SW tiene dos estados, en espera o controlando eventos de mensaje
*/

var CACHE_NAME = 'canillas-cache-v1';
var urlsToCache = [
    '/',
    '/dist/components.js',
    '/dist/index.js',
    '/dist/index.html'
];

// Una vez iniciado el proceso este se instala y se definen archivos cacheables
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    )
})