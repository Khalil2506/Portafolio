// Obtener la barra de navegación
var headerNav = document.getElementById("header-nav");

// Agregar un evento de scroll a la ventana
window.addEventListener("scroll", function() {
  // Obtener la posición actual de la página
  var scrollPosition = window.pageYOffset;

  // Obtener todos los elementos a con la clase header_a
  var headerLinks = headerNav.getElementsByClassName("header_a");

  // Recorrer los elementos a y cambiar la clase header_a_scroll según corresponda
  for (var i = 0; i < headerLinks.length; i++) {
    var currentLink = headerLinks[i];
    var linkHref = currentLink.getAttribute("href");
    var linkSection = document.querySelector(linkHref);
    var linkSectionTop = linkSection.offsetTop;
    var linkSectionBottom = linkSectionTop + linkSection.offsetHeight;

    if (scrollPosition >= linkSectionTop && scrollPosition < linkSectionBottom) {
      currentLink.classList.add("header_a_scroll");
    } else {
      currentLink.classList.remove("header_a_scroll");
    }
  }
});