// Recipe Database
const recipes = {
    'chocolate-chip': {
        name: 'Chocolate Chip Cookies',
        yield: 24,
        unit: 'cookies',
        ingredients: [
            { name: 'Flour', amount: 2, unit: 'cups', cost: 0.50 },
            { name: 'Sugar', amount: 0.75, unit: 'cup', cost: 0.30 },
            { name: 'Brown Sugar', amount: 0.75, unit: 'cup', cost: 0.35 },
            { name: 'Butter', amount: 1, unit: 'cup', cost: 2.00 },
            { name: 'Eggs', amount: 2, unit: 'eggs', cost: 0.60 },
            { name: 'Vanilla', amount: 2, unit: 'tsp', cost: 0.25 },
            { name: 'Baking Soda', amount: 1, unit: 'tsp', cost: 0.05 },
            { name: 'Chocolate Chips', amount: 2, unit: 'cups', cost: 3.00 }
        ]
    },
    'sugar': {
        name: 'Sugar Cookies',
        yield: 30,
        unit: 'cookies',
        ingredients: [
            { name: 'Flour', amount: 2.5, unit: 'cups', cost: 0.60 },
            { name: 'Sugar', amount: 1, unit: 'cup', cost: 0.40 },
            { name: 'Butter', amount: 0.75, unit: 'cup', cost: 1.50 },
            { name: 'Eggs', amount: 1, unit: 'egg', cost: 0.30 },
            { name: 'Vanilla', amount: 1, unit: 'tsp', cost: 0.15 },
            { name: 'Baking Powder', amount: 2, unit: 'tsp', cost: 0.10 }
        ]
    },
    'oatmeal': {
        name: 'Oatmeal Raisin',
        yield: 24,
        unit: 'cookies',
        ingredients: [
            { name: 'Flour', amount: 1.5, unit: 'cups', cost: 0.40 },
            { name: 'Oats', amount: 1.5, unit: 'cups', cost: 0.50 },
            { name: 'Brown Sugar', amount: 1, unit: 'cup', cost: 0.45 },
            { name: 'Butter', amount: 0.75, unit: 'cup', cost: 1.50 },
            { name: 'Eggs', amount: 2, unit: 'eggs', cost: 0.60 },
            { name: 'Cinnamon', amount: 1, unit: 'tsp', cost: 0.10 },
            { name: 'Raisins', amount: 1, unit: 'cup', cost: 1.50 }
        ]
    },
    'brownies': {
        name: 'Brownies',
        yield: 16,
        unit: 'brownies',
        ingredients: [
            { name: 'Flour', amount: 1, unit: 'cup', cost: 0.25 },
            { name: 'Sugar', amount: 2, unit: 'cups', cost: 0.80 },
            { name: 'Cocoa Powder', amount: 0.75, unit: 'cup', cost: 1.50 },
            { name: 'Butter', amount: 1, unit: 'cup', cost: 2.00 },
            { name: 'Eggs', amount: 4, unit: 'eggs', cost: 1.20 },
            { name: 'Vanilla', amount: 1, unit: 'tsp', cost: 0.15 }
        ]
    },
    'cupcakes': {
        name: 'Cupcakes',
        yield: 12,
        unit: 'cupcakes',
        ingredients: [
            { name: 'Flour', amount: 1.5, unit: 'cups', cost: 0.40 },
            { name: 'Sugar', amount: 1, unit: 'cup', cost: 0.40 },
            { name: 'Butter', amount: 0.5, unit: 'cup', cost: 1.00 },
            { name: 'Eggs', amount: 2, unit: 'eggs', cost: 0.60 },
            { name: 'Milk', amount: 0.75, unit: 'cup', cost: 0.30 },
            { name: 'Vanilla', amount: 2, unit: 'tsp', cost: 0.25 },
            { name: 'Baking Powder', amount: 1.5, unit: 'tsp', cost: 0.08 }
        ]
    }
};

// App State
let appData = {
    sales: [],
    expenses: [],
    shoppingList: [],
    currentPeriod: 'week'
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initializeForms();
    updateDashboard();
    updateRecipeDisplay();
});

// Data Management
function saveData() {
    localStorage.setItem('bakeHelperData', JSON.stringify(appData));
}

function loadData() {
    const saved = localStorage.getItem('bakeHelperData');
    if (saved) {
        appData = JSON.parse(saved);
    }
}

// View Management
function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(viewId).classList.add('active');

    if (viewId === 'dashboard-view') {
        updateDashboard();
    } else if (viewId === 'shopping-list-view') {
        renderShoppingList();
    } else if (viewId === 'best-sellers-view') {
        renderBestSellers();
    }
}

// Dashboard
function updateDashboard() {
    const stats = calculateStats(appData.currentPeriod);

    document.getElementById('total-sales').textContent = `$${stats.sales.toFixed(2)}`;
    document.getElementById('total-costs').textContent = `$${stats.costs.toFixed(2)}`;
    document.getElementById('total-profit').textContent = `$${stats.profit.toFixed(2)}`;
}

function setPeriod(period) {
    appData.currentPeriod = period;

    // Update button states
    document.querySelectorAll('.period-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`btn-${period}`).classList.add('active');

    updateDashboard();
}

function calculateStats(period) {
    const now = new Date();
    let startDate = new Date(0); // Beginning of time

    if (period === 'week') {
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    } else if (period === 'month') {
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    }

    const sales = appData.sales
        .filter(s => new Date(s.date) >= startDate)
        .reduce((sum, s) => sum + s.total, 0);

    const costs = appData.expenses
        .filter(e => new Date(e.date) >= startDate)
        .reduce((sum, e) => sum + e.amount, 0);

    return {
        sales,
        costs,
        profit: sales - costs
    };
}

// Recipe Calculator
function updateRecipeDisplay() {
    const recipeId = document.getElementById('recipe-select').value;
    const quantity = parseInt(document.getElementById('recipe-quantity').value) || 24;
    const recipe = recipes[recipeId];

    document.getElementById('recipe-unit').textContent = recipe.unit;

    const multiplier = quantity / recipe.yield;
    let totalCost = 0;

    let html = `
        <h3>📋 You'll need:</h3>
        <ul class="ingredient-list">
    `;

    recipe.ingredients.forEach(ing => {
        const scaledAmount = (ing.amount * multiplier).toFixed(2);
        const scaledCost = (ing.cost * multiplier);
        totalCost += scaledCost;

        html += `
            <li>✓ ${ing.name}: ${scaledAmount} ${ing.unit}</li>
        `;
    });

    html += `
        </ul>
        <div class="cost-summary">
            <p>💰 Cost per batch: $${totalCost.toFixed(2)}</p>
            <p>💵 Cost per ${recipe.unit.replace('s', '')}: $${(totalCost / quantity).toFixed(2)}</p>
        </div>
    `;

    document.getElementById('recipe-display').innerHTML = html;
}

function addToShoppingList() {
    const recipeId = document.getElementById('recipe-select').value;
    const quantity = parseInt(document.getElementById('recipe-quantity').value) || 24;
    const recipe = recipes[recipeId];
    const multiplier = quantity / recipe.yield;

    recipe.ingredients.forEach(ing => {
        const scaledAmount = (ing.amount * multiplier).toFixed(2);
        const itemText = `${ing.name} (${scaledAmount} ${ing.unit})`;

        // Check if item already exists
        const exists = appData.shoppingList.find(item => item.text === itemText);
        if (!exists) {
            appData.shoppingList.push({
                id: Date.now() + Math.random(),
                text: itemText,
                checked: false,
                fromRecipe: recipe.name
            });
        }
    });

    saveData();
    alert('✓ Added to shopping list!');
}

// Sales
function initializeForms() {
    // Update sale total on input
    document.getElementById('sale-quantity').addEventListener('input', updateSaleTotal);
    document.getElementById('sale-price').addEventListener('input', updateSaleTotal);

    // Add Sale Form
    document.getElementById('add-sale-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const sale = {
            id: Date.now(),
            date: new Date().toISOString(),
            product: document.getElementById('sale-product').value,
            productName: recipes[document.getElementById('sale-product').value].name,
            quantity: parseInt(document.getElementById('sale-quantity').value),
            pricePerUnit: parseFloat(document.getElementById('sale-price').value),
            total: parseFloat(document.getElementById('sale-total').textContent.replace('$', '')),
            customer: document.getElementById('sale-customer').value
        };

        appData.sales.push(sale);
        saveData();

        e.target.reset();
        updateSaleTotal();
        alert('✓ Sale recorded!');
        showView('dashboard-view');
    });
}

function updateSaleTotal() {
    const quantity = parseInt(document.getElementById('sale-quantity').value) || 0;
    const price = parseFloat(document.getElementById('sale-price').value) || 0;
    const total = quantity * price;

    document.getElementById('sale-total').textContent = `$${total.toFixed(2)}`;
}

// Shopping List
function renderShoppingList() {
    const container = document.getElementById('shopping-list');

    if (appData.shoppingList.length === 0) {
        container.innerHTML = '<p class="empty-state">Shopping list is empty. Add items from the recipe calculator!</p>';
        return;
    }

    let html = '';
    appData.shoppingList.forEach(item => {
        html += `
            <div class="shopping-item ${item.checked ? 'checked' : ''}">
                <input type="checkbox"
                       id="item-${item.id}"
                       ${item.checked ? 'checked' : ''}
                       onchange="toggleShoppingItem(${item.id})">
                <label for="item-${item.id}">${item.text}</label>
            </div>
        `;
    });

    container.innerHTML = html;
}

function toggleShoppingItem(id) {
    const item = appData.shoppingList.find(i => i.id === id);
    if (item) {
        item.checked = !item.checked;
        saveData();
        renderShoppingList();
    }
}

function clearChecked() {
    appData.shoppingList = appData.shoppingList.filter(item => !item.checked);
    saveData();
    renderShoppingList();
}

function clearShoppingList() {
    if (!confirm('Clear entire shopping list?')) return;

    appData.shoppingList = [];
    saveData();
    renderShoppingList();
}

function addCustomItem() {
    const item = prompt('Enter item to add:');
    if (!item) return;

    appData.shoppingList.push({
        id: Date.now(),
        text: item,
        checked: false
    });

    saveData();
    renderShoppingList();
}

// Best Sellers
function renderBestSellers() {
    const container = document.getElementById('best-sellers-list');

    if (appData.sales.length === 0) {
        container.innerHTML = '<p class="empty-state">No sales yet! Add some sales to see your best sellers.</p>';
        return;
    }

    // Aggregate sales by product
    const productStats = {};

    appData.sales.forEach(sale => {
        if (!productStats[sale.product]) {
            productStats[sale.product] = {
                name: sale.productName,
                quantity: 0,
                revenue: 0
            };
        }

        productStats[sale.product].quantity += sale.quantity;
        productStats[sale.product].revenue += sale.total;
    });

    // Convert to array and sort by quantity
    const sorted = Object.entries(productStats)
        .map(([id, stats]) => ({ id, ...stats }))
        .sort((a, b) => b.quantity - a.quantity);

    let html = '';
    sorted.forEach((product, index) => {
        const rank = index + 1;
        const rankClass = rank === 1 ? 'rank-1' : rank === 2 ? 'rank-2' : rank === 3 ? 'rank-3' : 'rank-other';
        const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`;

        html += `
            <div class="best-seller-item">
                <div class="best-seller-header">
                    <div class="rank-badge ${rankClass}">${medal}</div>
                    <div class="seller-info">
                        <h3>${product.name}</h3>
                    </div>
                </div>
                <div class="seller-stats">
                    <div class="seller-stat">
                        <div class="seller-stat-label">Sold</div>
                        <div class="seller-stat-value">${product.quantity}</div>
                    </div>
                    <div class="seller-stat">
                        <div class="seller-stat-label">Revenue</div>
                        <div class="seller-stat-value">$${product.revenue.toFixed(2)}</div>
                    </div>
                    <div class="seller-stat">
                        <div class="seller-stat-label">Avg Price</div>
                        <div class="seller-stat-value">$${(product.revenue / product.quantity).toFixed(2)}</div>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}
