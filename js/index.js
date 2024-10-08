var headerNav = document.getElementById("header-nav");

// Agregar un evento de scroll a la ventana
window.addEventListener("scroll", function() {
  // Obtener la posición actual de la página
  var scrollPosition = window.pageYOffset + window.innerHeight / 2;

  // Obtener todos los elementos a con la clase header_a
  var headerLinks = headerNav.getElementsByClassName("header_a");

  // Recorrer los elementos a y cambiar la clase header_a_scroll según corresponda
  for (var i = 0; i < headerLinks.length; i++) {
    var currentLink = headerLinks[i];
    var linkHref = currentLink.getAttribute("href");
    var linkSection = document.querySelector(linkHref);
    if (linkSection) {
      var linkSectionTop = linkSection.offsetTop;
      var linkSectionBottom = linkSectionTop + linkSection.offsetHeight;

      // Verificar si el scroll está en la sección actual
      if (scrollPosition >= linkSectionTop && scrollPosition < linkSectionBottom) {
        currentLink.classList.add("header_a_scroll");
      } else {
        currentLink.classList.remove("header_a_scroll");
      }
    }
  }
});

// codigo maquina
//const maquina = document.getElementById('maquina');
//const maquinaescribir = (text = '', tiempo = 200, etiqueta = '') =>{
//    let arrayCaracteres = text.split('');
//    etiqueta.innerHTML = '';
//    let i = 0;
//    let j = text.length;
//    let escribir = setInterval(function(){
//        if (i===arrayCaracteres.length){
//            etiqueta.innerHTML = text.substring(0,j);
//            j--
//            if (j===0){
//                etiqueta.innerHTML = '';
//                i= 0 ;
//                j = text.length;
//            }
//        } else{
//            etiqueta.innerHTML += arrayCaracteres[i];
//            i++
//        }
//    }, tiempo)
//}
//
//maquinaescribir("Developer",150,maquina);
const links = document.querySelectorAll('a[href^="#"]');
// agrega un evento de clic a cada enlace
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
});
//cambiar de clase
const miBoton = document.querySelector(".icon");
const miElemento = document.querySelector(".header_ul_responsive");
const myClick = document.querySelectorAll(".header_a_resposive")

// agregar evento de clic al botón
function toggleMenu() {
  miElemento.classList.toggle('activo');

}
// Agregar controlador de eventos de clic al botón del menú
miBoton.addEventListener('click', toggleMenu);

// Agregar controlador de eventos de clic a cada enlace del menú para ocultar el menú después de hacer clic
myClick.forEach(link => {
  link.addEventListener('click', toggleMenu);
});
// lazy load
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img[data-src]");
  var imgObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imgObserver.unobserve(img);
      }
    });
  });

  lazyloadImages.forEach(function(img) {
    imgObserver.observe(img);
  });
});
function resetForm() {
  document.getElementById("contact-form").reset();
}

