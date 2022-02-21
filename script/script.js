/* LOADER DE LA PÁGINA PRINCIPAL*/

/* creo un evento al cargar la página que modifica el nombre de la clase para añadir una segunda clase "hidden" a mi div "#loader" que hace desaparezca una vez cargada, además está englobado en una función timeout (para dar un pequeño delay después de la carga y que la animación del loader se vea mejor) */

window.addEventListener("load",function(){
    setTimeout(function(){
        var loader = document.querySelector("#loader")
        loader.className +=" hidden";
    }, 200)
})

/* FLECHA AUTO SCROLL-UP */

/* creo dos variables para seleccionar los dos elementos que voy a usar (el icono de la flecha y el propio documento html), creo un evento al hacer click en la flecha con una función "subir" para que el documento haga scroll hasta la posición "0,0", es decir, hasta la parte superior de la página */

var autoScroll = document.querySelector(".flecha");
var web = document.querySelector("html");

autoScroll.addEventListener('click', () => {
    web.scrollTo(0,0)
})