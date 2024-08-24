module.exports = {
    proxy: "http://localhost:8080/UTP/HTML/Portfolio/index.php",  // Cambia esto a la URL de tu servidor local PHP
    files: ["**/*.php", "**/*.css", "**/*.js"],
    notify: false,
    cors: true,
    serveStatic: [{
      route: "/css",
      dir: "css"
    }]
};