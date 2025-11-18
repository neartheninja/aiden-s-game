// App State
let appData = {
    childName: 'Alex',
    coins: 0,
    streak: 0,
    lastActiveDate: null,
    missions: [],
    rewards: [
        { id: 1, name: '🍦 Ice cream trip', cost: 25, type: 'treat' },
        { id: 2, name: '🎮 30 min extra screen time', cost: 15, type: 'screen-time' },
        { id: 3, name: '🎉 Movie night', cost: 40, type: 'activity' },
        { id: 4, name: '🎁 Small toy', cost: 50, type: 'toy' }
    ],
    completions: []
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initializeForms();
    updateKidView();
    updateParentView();
    checkStreak();
    addDefaultMissions();
});

// Data Management
function saveData() {
    localStorage.setItem('miniMissionsData', JSON.stringify(appData));
}

function loadData() {
    const saved = localStorage.getItem('miniMissionsData');
    if (saved) {
        appData = JSON.parse(saved);
    }
}

function addDefaultMissions() {
    if (appData.missions.length === 0) {
        appData.missions = [
            { id: 1, name: 'Make your bed', coins: 5, difficulty: 'easy', repeat: 'daily', active: true },
            { id: 2, name: 'Feed the dog', coins: 3, difficulty: 'easy', repeat: 'daily', active: true },
            { id: 3, name: 'Homework time', coins: 10, difficulty: 'medium', repeat: 'daily', active: true },
            { id: 4, name: 'Clean your room', coins: 15, difficulty: 'medium', repeat: 'weekly', active: true }
        ];
        saveData();
    }
}

// View Management
function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(viewId).classList.add('active');

    if (viewId === 'kid-view') {
        updateKidView();
    } else if (viewId === 'parent-view') {
        updateParentView();
    } else if (viewId === 'rewards-view') {
        renderRewardsStore();
    } else if (viewId === 'manage-rewards-view') {
        renderCurrentRewards();
    }
}

function switchToParent() {
    const pin = prompt('Enter parent PIN (default: 1234):');
    if (pin === '1234') {
        showView('parent-view');
    } else {
        alert('Incorrect PIN!');
    }
}

// Streak Management
function checkStreak() {
    const today = new Date().toDateString();
    const lastDate = appData.lastActiveDate;

    if (!lastDate) {
        appData.lastActiveDate = today;
        saveData();
        return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();

    if (lastDate === yesterdayStr) {
        // Continue streak - will be updated when mission completed
    } else if (lastDate !== today) {
        // Streak broken
        appData.streak = 0;
    }

    saveData();
}

function updateStreak() {
    const today = new Date().toDateString();

    if (appData.lastActiveDate !== today) {
        appData.streak++;
        appData.lastActiveDate = today;
        saveData();
    }
}

// Kid View
function updateKidView() {
    document.getElementById('child-name').textContent = appData.childName;
    document.getElementById('coin-balance').textContent = appData.coins;
    document.getElementById('streak-count').textContent = appData.streak;

    renderMissionsList();
}

function renderMissionsList() {
    const container = document.getElementById('missions-list');
    const today = new Date().toDateString();

    // Get active missions and filter out already completed today
    const todayCompletions = appData.completions
        .filter(c => new Date(c.date).toDateString() === today)
        .map(c => c.missionId);

    const availableMissions = appData.missions.filter(m =>
        m.active && !todayCompletions.includes(m.id)
    );

    if (availableMissions.length === 0) {
        container.innerHTML = '<p class="empty-state">All missions completed for today! 🎉</p>';
        return;
    }

    let html = '';
    availableMissions.forEach(mission => {
        const completion = appData.completions.find(c =>
            c.missionId === mission.id && c.status === 'pending'
        );

        html += `
            <div class="mission-item">
                <div class="mission-header">
                    <div class="mission-name">${mission.name}</div>
                    <div class="mission-coins">${mission.coins}🪙</div>
                </div>
                <span class="mission-difficulty difficulty-${mission.difficulty}">
                    ${mission.difficulty.toUpperCase()}
                </span>
                ${completion ? `
                    <div class="mission-status status-pending">
                        ⏰ Waiting for parent approval...
                    </div>
                ` : `
                    <button class="btn btn-success" style="width:100%; margin-top:10px;"
                            onclick="completeMission(${mission.id})">
                        ✓ COMPLETE
                    </button>
                `}
            </div>
        `;
    });

    container.innerHTML = html;
}

function completeMission(missionId) {
    const mission = appData.missions.find(m => m.id === missionId);
    if (!mission) return;

    const completion = {
        id: Date.now(),
        missionId: missionId,
        date: new Date().toISOString(),
        status: 'pending'
    };

    appData.completions.push(completion);
    saveData();
    updateKidView();

    alert(`🎉 Great job! Waiting for parent to approve your ${mission.coins}🪙 reward!`);
}

// Parent View
function updateParentView() {
    const pending = appData.completions.filter(c => c.status === 'pending');

    document.getElementById('pending-count').textContent = pending.length;

    // Calculate weekly completed
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weeklyCompleted = appData.completions
        .filter(c => c.status === 'approved' && new Date(c.date) >= weekAgo)
        .length;

    document.getElementById('weekly-completed').textContent = weeklyCompleted;

    renderPendingApprovals();
    renderParentMissionsList();
}

function renderPendingApprovals() {
    const container = document.getElementById('pending-list');
    const pending = appData.completions.filter(c => c.status === 'pending');

    if (pending.length === 0) {
        container.innerHTML = '<p class="empty-state">No pending approvals!</p>';
        return;
    }

    let html = '';
    pending.forEach(completion => {
        const mission = appData.missions.find(m => m.id === completion.missionId);
        if (!mission) return;

        html += `
            <div class="mission-item">
                <div class="mission-header">
                    <div class="mission-name">${mission.name}</div>
                    <div class="mission-coins">${mission.coins}🪙</div>
                </div>
                <p style="color:#666; font-size:0.9em;">
                    Completed: ${new Date(completion.date).toLocaleString()}
                </p>
                <div class="approval-actions">
                    <button class="btn btn-success" onclick="approveCompletion(${completion.id})">
                        ✓ APPROVE
                    </button>
                    <button class="btn btn-danger" onclick="denyCompletion(${completion.id})">
                        ✗ DENY
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function approveCompletion(completionId) {
    const completion = appData.completions.find(c => c.id === completionId);
    if (!completion) return;

    const mission = appData.missions.find(m => m.id === completion.missionId);
    if (!mission) return;

    completion.status = 'approved';
    appData.coins += mission.coins;
    updateStreak();

    saveData();
    updateParentView();

    alert(`✓ Approved! ${appData.childName} earned ${mission.coins}🪙`);
}

function denyCompletion(completionId) {
    const reason = prompt('Reason for denial (optional):');

    appData.completions = appData.completions.filter(c => c.id !== completionId);
    saveData();
    updateParentView();

    alert('Completion denied.');
}

function renderParentMissionsList() {
    const container = document.getElementById('parent-missions-list');

    if (appData.missions.length === 0) {
        container.innerHTML = '<p class="empty-state">No missions created yet.</p>';
        return;
    }

    let html = '';
    appData.missions.forEach(mission => {
        html += `
            <div class="mission-item">
                <div class="mission-header">
                    <div class="mission-name">${mission.name}</div>
                    <div class="mission-coins">${mission.coins}🪙</div>
                </div>
                <span class="mission-difficulty difficulty-${mission.difficulty}">
                    ${mission.difficulty.toUpperCase()} • ${mission.repeat.toUpperCase()}
                </span>
                <button class="btn btn-danger" style="width:100%; margin-top:10px;"
                        onclick="deleteMission(${mission.id})">
                    🗑️ DELETE
                </button>
            </div>
        `;
    });

    container.innerHTML = html;
}

function deleteMission(missionId) {
    if (!confirm('Delete this mission?')) return;

    appData.missions = appData.missions.filter(m => m.id !== missionId);
    saveData();
    updateParentView();
}

// Forms
function initializeForms() {
    // Create Mission Form
    document.getElementById('create-mission-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const newMission = {
            id: Date.now(),
            name: document.getElementById('mission-name').value,
            coins: parseInt(document.getElementById('mission-coins').value),
            difficulty: document.getElementById('mission-difficulty').value,
            repeat: document.getElementById('mission-repeat').value,
            active: true
        };

        appData.missions.push(newMission);
        saveData();

        e.target.reset();
        showView('parent-view');
        alert('✓ Mission created!');
    });

    // Add Reward Form
    document.getElementById('add-reward-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const newReward = {
            id: Date.now(),
            name: getRewardIcon(document.getElementById('reward-type').value) + ' ' +
                  document.getElementById('reward-name').value,
            cost: parseInt(document.getElementById('reward-cost').value),
            type: document.getElementById('reward-type').value
        };

        appData.rewards.push(newReward);
        saveData();

        e.target.reset();
        renderCurrentRewards();
        alert('✓ Reward added!');
    });
}

function getRewardIcon(type) {
    const icons = {
        'treat': '🍦',
        'toy': '🎮',
        'activity': '🎉',
        'screen-time': '📱'
    };
    return icons[type] || '🎁';
}

// Rewards Store
function renderRewardsStore() {
    document.getElementById('rewards-coins').textContent = appData.coins;

    const container = document.getElementById('rewards-list');

    if (appData.rewards.length === 0) {
        container.innerHTML = '<p class="empty-state">No rewards available yet.</p>';
        return;
    }

    let html = '';
    appData.rewards.forEach(reward => {
        const canAfford = appData.coins >= reward.cost;

        html += `
            <div class="reward-item">
                <div class="reward-header">
                    <div class="reward-info">
                        <h3>${reward.name}</h3>
                    </div>
                    <div class="reward-cost">${reward.cost}🪙</div>
                </div>
                <button class="btn ${canAfford ? 'btn-success' : 'btn-secondary'}"
                        style="width:100%;"
                        onclick="${canAfford ? `redeemReward(${reward.id})` : 'void(0)'}"
                        ${!canAfford ? 'disabled' : ''}>
                    ${canAfford ? '✓ REDEEM' : '🔒 NOT ENOUGH COINS'}
                </button>
            </div>
        `;
    });

    container.innerHTML = html;
}

function redeemReward(rewardId) {
    const reward = appData.rewards.find(r => r.id === rewardId);
    if (!reward || appData.coins < reward.cost) return;

    if (!confirm(`Redeem ${reward.name} for ${reward.cost}🪙?`)) return;

    appData.coins -= reward.cost;
    saveData();

    alert(`🎉 Congratulations! Ask your parent for: ${reward.name}`);
    renderRewardsStore();
}

function renderCurrentRewards() {
    const container = document.getElementById('current-rewards-list');

    if (appData.rewards.length === 0) {
        container.innerHTML = '<p class="empty-state">No rewards yet.</p>';
        return;
    }

    let html = '';
    appData.rewards.forEach(reward => {
        html += `
            <div class="reward-item">
                <div class="reward-header">
                    <div class="reward-info">
                        <h3>${reward.name}</h3>
                    </div>
                    <div class="reward-cost">${reward.cost}🪙</div>
                </div>
                <button class="btn btn-danger" style="width:100%;"
                        onclick="deleteReward(${reward.id})">
                    🗑️ DELETE
                </button>
            </div>
        `;
    });

    container.innerHTML = html;
}

function deleteReward(rewardId) {
    if (!confirm('Delete this reward?')) return;

    appData.rewards = appData.rewards.filter(r => r.id !== rewardId);
    saveData();
    renderCurrentRewards();
}
