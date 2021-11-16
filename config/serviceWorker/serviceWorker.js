if('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Se llama a register, el navegador determina si está cargado
        this.navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('Service Worker enabled');
        }, function(err) {
            console.log('Service worker registration failed', err);
        })

        /** Si cargamos el sw en el raiz tendrá un alcance global.
         * Si lo cargamos en una carpeta determinada recibirá eventos
         * fetch para todos los elementos del dominio asignado.
         */
    })
}