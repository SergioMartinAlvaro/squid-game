Hola! Bienvenid@s a mi prueba del juego del calamar!.
Como me comentaron que dentro del proyecto se utilizaba Lit-Element me he
decantado por crear una PWA con dicha tecnología.

He intentado utilizar todo lo que he ido aprendiendo con el tiempo y
he aprovechado para aprender cosas nuevas como reto con esta prueba
(El maravilloso mundo de webpack).

Con sus mas y sus menos y haciendo autocrítica veo varios puntos que se
me han quedado por el camino por falta de tiempo:

- No he podido cumplir la cobertura de test
- Hay trozos de código que deben refactorizarse
- La funcionalidad del semáforo no es tal como fue especificada
- No pude crear el Service Worker para acceder offline a la aplicación
- La aplicación no es 100% responsive

No obstante, creo que he conseguido dar con una solución sólida a la par
que escalable a la cual podría implementar esas mejoras a futuro.

¿Que he metido extra?

 - Compilación personalizada de ficheros sass usando un patrón Adapter para
 reutilizar funcionalidad con ficheros TS.
 - Script de concurrencia para cargar de manera síncrona comandos de NPM
 dependiendo del entorno
 - Librerías de SCSS para mejora de responsive a futuro
 - Configuración de JEST para obtener fichero con cobertura de código en HTML
 - Ejecución de varios entornos con webpack
 - Redux para gestión de rutas (a esto le podría haber sacado mucho mas partido,
 pero es una tecnología que aun estoy aprendiendo!)


COMO ARRANCAR EL PROYECTO
---------------------------------
1 npm i : Instala los node_modules
2 npm run dev: Ejecuta los comandos de compilación que he mencionado en la sección extra y despliega en servidor local (localhost:8080)

A TENER EN CUENTA
---------------------------------
Hay un error que no he podido arreglar en el compilado de Sass,
en el fichero sass-file.adapter.js en la línea 56 llamo a una ruta que si
se arranca el proyecto en Windows puede fallar ya que las barras son de linux
(Lo he programado con Ubuntu)
Esto puede dar fallo al arrancar el proyecto, no obstante espero funcione todo
a la perfección!

Muchas gracias por la oportunidad y espero vuestra respuesta :)

Sergio Martín