// App State
let appData = {
    balance: 0,
    weeklyAllowance: 5.00,
    allowanceDay: 0, // Sunday
    wishlist: [],
    transactions: [],
    settings: {
        lastAllowanceDate: null
    }
};

let currentItemId = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initializeForms();
    updateDashboard();
    checkAllowanceDay();
});

// Data Persistence
function saveData() {
    localStorage.setItem('shopTrackerData', JSON.stringify(appData));
}

function loadData() {
    const saved = localStorage.getItem('shopTrackerData');
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

    // Update view-specific content
    if (viewId === 'dashboard-view') {
        updateDashboard();
    } else if (viewId === 'wishlist-view') {
        renderWishlist();
    } else if (viewId === 'allowance-view') {
        renderAllowanceView();
    } else if (viewId === 'settings-view') {
        loadSettings();
    }
}

// Dashboard Functions
function updateDashboard() {
    // Update balance
    document.getElementById('balance-amount').textContent = `$${appData.balance.toFixed(2)}`;

    // Update allowance countdown
    updateAllowanceCountdown();

    // Update goals
    renderGoals();
}

function updateAllowanceCountdown() {
    const daysUntil = getDaysUntilAllowance();
    document.getElementById('days-until').textContent = daysUntil;

    // Update progress bar (7 days in a week)
    const progress = ((7 - daysUntil) / 7) * 100;
    document.getElementById('allowance-progress').style.width = `${progress}%`;

    document.getElementById('weekly-allowance').textContent = appData.weeklyAllowance.toFixed(2);
}

function getDaysUntilAllowance() {
    const today = new Date();
    const currentDay = today.getDay();
    const allowanceDay = appData.allowanceDay;

    let daysUntil = allowanceDay - currentDay;
    if (daysUntil <= 0) {
        daysUntil += 7;
    }

    return daysUntil;
}

function checkAllowanceDay() {
    const today = new Date();
    const currentDay = today.getDay();

    if (currentDay === appData.allowanceDay) {
        const lastDate = appData.settings.lastAllowanceDate;
        const todayStr = today.toDateString();

        if (lastDate !== todayStr) {
            // Auto-add allowance
            appData.balance += appData.weeklyAllowance;
            appData.transactions.push({
                date: new Date().toISOString(),
                type: 'allowance',
                amount: appData.weeklyAllowance,
                note: 'Weekly allowance'
            });
            appData.settings.lastAllowanceDate = todayStr;
            saveData();
            updateDashboard();
        }
    }
}

function renderGoals() {
    const goalsList = document.getElementById('goals-list');
    const emptyState = document.getElementById('empty-goals');

    if (appData.wishlist.length === 0) {
        goalsList.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';
    goalsList.innerHTML = '';

    appData.wishlist.forEach(item => {
        const progress = Math.min((appData.balance / item.price) * 100, 100);
        const remaining = Math.max(item.price - appData.balance, 0);

        const goalDiv = document.createElement('div');
        goalDiv.className = 'goal-item';
        goalDiv.onclick = () => showItemDetail(item.id);

        goalDiv.innerHTML = `
            <div class="goal-header">
                <span class="goal-name">${getCategoryIcon(item.category)} ${item.name}</span>
                <span class="goal-price">$${item.price.toFixed(2)}</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%">
                    ${progress >= 20 ? Math.round(progress) + '%' : ''}
                </div>
            </div>
            <p class="goal-progress-text">$${remaining.toFixed(2)} to go!</p>
        `;

        goalsList.appendChild(goalDiv);
    });
}

// Wishlist Functions
function renderWishlist() {
    const container = document.getElementById('wishlist-items');
    const emptyState = document.getElementById('empty-wishlist');

    if (appData.wishlist.length === 0) {
        container.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';
    container.innerHTML = '';

    appData.wishlist.forEach(item => {
        const progress = Math.min((appData.balance / item.price) * 100, 100);

        const itemDiv = document.createElement('div');
        itemDiv.className = 'wishlist-item';
        itemDiv.onclick = () => showItemDetail(item.id);

        itemDiv.innerHTML = `
            <div class="item-header">
                <div class="item-info">
                    <h3>${getCategoryIcon(item.category)} ${item.name}</h3>
                    <p>${item.store || 'No store specified'}</p>
                </div>
                <div class="item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%">
                    ${progress >= 20 ? Math.round(progress) + '%' : ''}
                </div>
            </div>
        `;

        container.appendChild(itemDiv);
    });
}

function getCategoryIcon(category) {
    const icons = {
        'toys': '🎮',
        'clothes': '👕',
        'books': '📚',
        'other': '✨'
    };
    return icons[category] || '✨';
}

function showItemDetail(itemId) {
    const item = appData.wishlist.find(i => i.id === itemId);
    if (!item) return;

    currentItemId = itemId;

    const progress = Math.min((appData.balance / item.price) * 100, 100);
    const saved = Math.min(appData.balance, item.price);
    const need = Math.max(item.price - appData.balance, 0);

    document.getElementById('detail-icon').textContent = getCategoryIcon(item.category);
    document.getElementById('detail-name').textContent = item.name;
    document.getElementById('detail-price').textContent = item.price.toFixed(2);
    document.getElementById('detail-store').textContent = item.store || '-';
    document.getElementById('detail-saved').textContent = saved.toFixed(2);
    document.getElementById('detail-need').textContent = need.toFixed(2);

    const progressBar = document.getElementById('detail-progress');
    progressBar.style.width = `${progress}%`;
    progressBar.textContent = Math.round(progress) + '%';

    // Calculate time estimate
    const weeksNeeded = Math.ceil(need / appData.weeklyAllowance);
    const timeEstimate = document.getElementById('detail-time-estimate');

    if (need === 0) {
        timeEstimate.innerHTML = '<strong>🎉 Goal reached! You can purchase this item!</strong>';
    } else {
        timeEstimate.innerHTML = `
            <strong>💡 You'll reach this goal in:</strong><br>
            ${weeksNeeded} week${weeksNeeded !== 1 ? 's' : ''}
            (at $${appData.weeklyAllowance.toFixed(2)}/week)
        `;
    }

    showView('item-detail-view');
}

function deleteItem() {
    if (!confirm('Are you sure you want to delete this item?')) return;

    appData.wishlist = appData.wishlist.filter(item => item.id !== currentItemId);
    saveData();
    showView('wishlist-view');
}

function purchaseItem() {
    const item = appData.wishlist.find(i => i.id === currentItemId);
    if (!item) return;

    if (appData.balance < item.price) {
        alert(`You don't have enough saved yet! You need $${(item.price - appData.balance).toFixed(2)} more.`);
        return;
    }

    if (!confirm(`Purchase ${item.name} for $${item.price.toFixed(2)}?`)) return;

    // Deduct from balance
    appData.balance -= item.price;

    // Add transaction
    appData.transactions.push({
        date: new Date().toISOString(),
        type: 'purchase',
        amount: -item.price,
        note: `Purchased: ${item.name}`
    });

    // Remove from wishlist
    appData.wishlist = appData.wishlist.filter(i => i.id !== currentItemId);

    saveData();
    alert(`🎉 Congratulations! You purchased ${item.name}!`);
    showView('dashboard-view');
}

// Form Handlers
function initializeForms() {
    // Add Item Form
    document.getElementById('add-item-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const newItem = {
            id: Date.now(),
            name: document.getElementById('item-name').value,
            price: parseFloat(document.getElementById('item-price').value),
            store: document.getElementById('item-store').value,
            category: document.getElementById('item-category').value,
            dateAdded: new Date().toISOString()
        };

        appData.wishlist.push(newItem);
        saveData();

        e.target.reset();
        showView('wishlist-view');
    });

    // Add Money Form
    document.getElementById('add-money-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const amount = parseFloat(document.getElementById('money-amount').value);
        const source = document.getElementById('money-source').value;
        const note = document.getElementById('money-note').value;

        appData.balance += amount;
        appData.transactions.push({
            date: new Date().toISOString(),
            type: source,
            amount: amount,
            note: note || source
        });

        saveData();
        e.target.reset();
        showView('dashboard-view');
    });

    // Settings Form
    document.getElementById('settings-form').addEventListener('submit', (e) => {
        e.preventDefault();

        appData.weeklyAllowance = parseFloat(document.getElementById('settings-allowance').value) || 5.00;
        appData.allowanceDay = parseInt(document.getElementById('settings-day').value);

        saveData();
        alert('Settings saved!');
        showView('dashboard-view');
    });
}

function loadSettings() {
    document.getElementById('settings-allowance').value = appData.weeklyAllowance;
    document.getElementById('settings-day').value = appData.allowanceDay;
}

// Allowance View
function renderAllowanceView() {
    const daysUntil = getDaysUntilAllowance();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    document.getElementById('current-allowance').textContent = appData.weeklyAllowance.toFixed(2);
    document.getElementById('next-payment-date').textContent = daysOfWeek[appData.allowanceDay];
    document.getElementById('countdown-display').textContent = `${daysUntil} day${daysUntil !== 1 ? 's' : ''}`;

    const progress = ((7 - daysUntil) / 7) * 100;
    document.getElementById('week-progress').style.width = `${progress}%`;

    // Render history
    renderAllowanceHistory();
    renderBonusHistory();
}

function renderAllowanceHistory() {
    const container = document.getElementById('allowance-history');
    const allowanceTransactions = appData.transactions
        .filter(t => t.type === 'allowance')
        .slice(-4)
        .reverse();

    if (allowanceTransactions.length === 0) {
        container.innerHTML = '<p class="empty-state">No allowance history yet.</p>';
        return;
    }

    container.innerHTML = '';
    allowanceTransactions.forEach(t => {
        const div = document.createElement('div');
        div.className = 'history-item';
        const date = new Date(t.date).toLocaleDateString();
        div.innerHTML = `
            <span>✓ ${date}</span>
            <span style="color: #20c997; font-weight: bold;">$${t.amount.toFixed(2)}</span>
        `;
        container.appendChild(div);
    });
}

function renderBonusHistory() {
    const container = document.getElementById('bonus-history');
    const bonusTransactions = appData.transactions
        .filter(t => t.type !== 'allowance' && t.type !== 'purchase' && t.amount > 0)
        .slice(-5)
        .reverse();

    if (bonusTransactions.length === 0) {
        container.innerHTML = '<p class="empty-state">No bonuses yet.</p>';
        return;
    }

    container.innerHTML = '';
    bonusTransactions.forEach(t => {
        const div = document.createElement('div');
        div.className = 'history-item';
        const date = new Date(t.date).toLocaleDateString();
        const icon = t.type === 'gift' ? '🎁' : t.type === 'chore' ? '🧹' : '✨';
        div.innerHTML = `
            <span>${icon} ${date}: ${t.note}</span>
            <span style="color: #20c997; font-weight: bold;">$${t.amount.toFixed(2)}</span>
        `;
        container.appendChild(div);
    });
}

// Reset Function
function resetApp() {
    if (!confirm('⚠️ This will delete ALL your data! Are you sure?')) return;
    if (!confirm('Really? This cannot be undone!')) return;

    localStorage.removeItem('shopTrackerData');
    location.reload();
}
