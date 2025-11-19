function loadChart() {
    const ctx = document.getElementById("salesChart");
    if (!ctx) return;

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Lun", "Mar", "Mié", "Jue", "Vie"],
            datasets: [{
                label: "Ventas",
                data: [12, 19, 3, 5, 22],
                borderWidth: 2
            }]
        }
    });
}

function loadRecentProducts() {
    const container = document.getElementById("recent-products");
    if (!container) return;

    const products = [
        { name: "Laptop Gamer X1", price: "$1200" },
        { name: "Smartphone Ultra S", price: "$950" },
        { name: "Monitor Pro 27''", price: "$450" }
    ];

    container.innerHTML = products.map(p => `
        <div style="padding:15px; background:#eee; margin-bottom:10px; border-radius:8px;">
            <strong>${p.name}</strong><br>
            <span>${p.price}</span>
        </div>
    `).join("");
}

// Datos simulados para las tarjetas
function loadDashboardCards() {
    const users = document.getElementById("card-users");
    const sales = document.getElementById("card-sales");
    const newProducts = document.getElementById("card-new-products");

    if (users) users.textContent = 120;
    if (sales) sales.textContent = "$798";
    if (newProducts) newProducts.textContent = 5;
}
