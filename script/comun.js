
/* menú responsive */

/* Selecciono los elementos que voy a necesitar, que son el botón hamburguesa, el menú de navegación del móvil y los links del menú de navegación */

const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile_nav");
const mobileLink = document.querySelectorAll(".nav_link");

/* añado un evento en el que al hacer clic sobre el botón hamburguesa se añade/elimina la clase "active" tanto del botón (animación del botón) como del menu de navegación (el menú se desplaza lateralmente)*/

menuBtn.addEventListener("click", function(){
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

/* añado otra función para que al hacer click en los links del menu de navegación, este se cierre desplazándose lateralmente (solo para cuando se hace click en el link de la misma página donde se encuentra el usuario) */

mobileLink.forEach(element =>{
    element.addEventListener("click", function() {
      menuBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });