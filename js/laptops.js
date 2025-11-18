function loadProducts() {
    const baseProduct = {
        name: "Laptop Gamer Nitro 5",
        description: "Laptop poderosa con Intel i7, 16GB RAM, 512GB SSD y RTX 3060.",
        price: 4200,
        image: "https://www.zdnet.com/a/img/resize/5e56b3466bc14d938c5df707c74b895a4c5eb53d/2021/02/28/7687e3eb-9509-4a63-8efc-bb7a4048e818/framework-laptop-modular-upgrade-upgradeable-repair-notebook.jpg?auto=webp&fit=crop&height=1200&width=1200"
    };

    const productList = Array.from({ length: 8 }, () => ({ ...baseProduct }));

    const container = document.getElementById("product-list");
    if (!container) return; // por si acaso

    productList.forEach((product, index) => {
        const item = document.createElement("div");
        item.classList.add("product-card");

        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">S/ ${product.price.toFixed(2)}</p>
            <button onclick="buyProduct(${index})">Comprar</button>
        `;

        container.appendChild(item);
    });

    window.buyProduct = function(id) {
        const p = productList[id];
        alert(`Compraste: ${p.name} por S/ ${p.price}`);
    }
}
