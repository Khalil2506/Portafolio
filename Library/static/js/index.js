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
const colors = [
  '#711c91',
  '#ea00d9',
  '#0abdc6',
  '#133e7c'
];

createSquare = () => {
  const section = document.querySelector('.section_content');
  const square = document.createElement('span');
  
  const size = Math.random() * 50;
  
  square.style.width = 20 + size + 'px';
  square.style.height = 20 + size + 'px';
  
  square.style.top = Math.random() * innerHeight + 'px';
  square.style.left = Math.random() * innerWidth + 'px';
  
  square.style.background = colors[Math.floor(Math.random() * colors.length)];
  section.appendChild(square);
  
  setTimeout(() => {
    square.remove()
  }, 5000);
}

setInterval(createSquare, 150);