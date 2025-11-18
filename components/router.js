// Definir rutas de la SPA
const routes = {
    "/": "pages/home.html",
    "/home": "pages/home.html",
    "/celulares": "pages/celulares.html",
    "/laptops": "pages/laptop.html",
    "/computadoras": "pages/computadoras.html",

    "/faq": "pages/faq.html",
    "/acceso": "pages/acceso.html",
    "/registro": "pages/registro.html",

    // Fallback para errores (404 interno)
    "*": "pages/home.html"
};

// Función para cargar páginas
async function loadPage() {
    const hash = location.hash.slice(1) || "/";
    const route = routes[hash] || routes["*"];

    try {
        const html = await fetch(route).then(res => res.text());
        document.getElementById("app").innerHTML = html;

        if (hash === "/laptops") {
            // Aseguramos que se ejecute después de que el DOM ya está insertado
            requestAnimationFrame(() => loadProducts());
        }
        if (hash === "/home" || hash === "/") {
            requestAnimationFrame(() => {
                loadChart();
                loadRecentProducts();
                loadDashboardCards();
            });
        }

    } catch (error) {
        document.getElementById("app").innerHTML = "<h2>Error cargando la página</h2>";
    }
}

// Eventos del router
window.addEventListener("hashchange", loadPage);
window.addEventListener("load", loadPage);
