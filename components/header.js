class HeaderConponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="navbar">
                <div class="logo">Tienda Electrónica</div>

                <nav class="links">

                    <div class="dropdown-wrapper">
                        <a href="#/" data-route="/">Tienda ▼</a>
                        <div class="dropdown">
                            <a href="#/home" data-route="/home">Home</a>
                            <a href="#/celulares" data-route="/celulares">Celulares</a>
                            <a href="#/laptops" data-route="/laptops">Laptops</a>
                            <a href="#/computadoras" data-route="/computadoras">Computadoras</a>
                        </div>
                    </div>

                    <a href="#/faq" data-route="/faq">Preguntas Frecuentes</a>
                    <a href="#/acceso" data-route="/acceso">Acceso</a>
                    <a href="#/registro" data-route="/registro">Registro</a>
                    
                    <span class="cart">🛒 $0.00</span>
                </nav>
            </header>
        `;

        this.updateActiveLink();
        window.addEventListener("hashchange", () => this.updateActiveLink());
    }

    updateActiveLink() {
        const current = location.hash.slice(1) || "/";
        const links = this.querySelectorAll("nav a");

        links.forEach(link => {
            link.classList.remove("active");
            if (link.dataset.route == current) {
                link.classList.add("active");
            }
        });
    }
}

customElements.define("nav-header", HeaderConponent);
