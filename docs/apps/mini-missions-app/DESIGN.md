# Mini Missions App - Complete Design Document

## 🎯 Overview

**App Name:** Mini Missions
**Category:** Gamified Task/Chore Manager
**Target Age:** 8-12 years
**Platform:** iOS/Android
**Mode:** Two-user (parent and child) with local sync

## 📖 Core Concept

Mini Missions transforms household chores and tasks into an engaging game where kids complete "missions" created by parents to earn coins. These coins can be redeemed for rewards—both digital (avatars, themes) and real-world (screen time, treats, toys). The app teaches responsibility, time management, and goal-setting while making daily tasks fun and rewarding.

## 🎯 Key Features

### 1. Mission System
- **Parent-created missions** with custom names and rewards
- **Mission categories:** Daily (brush teeth), Weekly (clean room), One-time (help with dinner)
- **Coin rewards** set by parent
- **Difficulty levels** (Easy/Medium/Hard) with corresponding coin values
- **Mission templates** for common chores
- **Recurring missions** (auto-reset daily/weekly)
- **Time estimates** (5 min, 15 min, 30 min, etc.)

### 2. Coin Economy
- **Earn coins** by completing missions
- **Coin balance** displayed prominently
- **Transaction history** showing earned coins
- **Parent approval** required to claim coins
- **No loss of coins** (positive reinforcement only)
- **Bonus multipliers** for streaks

### 3. Rewards Store
- **Digital rewards:** Avatar items, app themes, badges
- **Real-world rewards:** Parent-defined (toy, outing, extra screen time)
- **Tiered pricing:** Small (10 coins), Medium (50 coins), Large (100+ coins)
- **Wishlist feature** for saving toward big rewards
- **Purchase requires parent approval**
- **Redemption history**

### 4. Streak & Achievement System
- **Daily streak counter** (days with at least 1 mission completed)
- **Achievement badges** (10 missions, 50 missions, etc.)
- **Milestone celebrations** with animations
- **Progress toward next achievement**
- **Collection display** (badge showcase)

### 5. Daily Bonus Wheel
- **Spin once per day** after completing any mission
- **Bonus coins** (1-5 extra coins)
- **Special prizes** (badge, avatar item)
- **Parent can enable/disable** feature
- **Streak bonus** (better odds with longer streaks)

### 6. Parent Dashboard
- **Create/edit/delete missions**
- **Review and approve completions**
- **Set coin values and rewards**
- **View child's progress and stats**
- **Adjust difficulty and frequency**
- **Send encouragement messages**
- **Weekly report summary**

### 7. Kid Dashboard
- **Active missions list**
- **Coin balance** (big and visible)
- **Current streak**
- **Quick complete button** with photo proof option
- **Rewards store access**
- **Achievement progress**

## 🎨 Visual Style

### Color Palette
- **Primary:** Bright purple, energetic orange
- **Accents:** Lime green, electric blue, sunny yellow
- **UI:** Clean white backgrounds with colorful cards
- **Coins:** Shiny gold
- **Rewards:** Sparkly highlights

### Art Style
- **Cute mascot character** (customizable pet/sidekick)
- **Gamified UI** with XP bar aesthetics
- **Badge designs** like scout/achievement badges
- **Bouncy animations** for coin collection
- **Celebration effects** (confetti, stars, sparkles)

### Typography
- **Large, bold headings**
- **Clear mission descriptions**
- **Encouraging language** ("Great job!", "You're on a roll!")
- **Emoji support** 🎉🪙⭐

## 🖼️ UI Wireframes (Text-Based)

### Kid Dashboard (Home)
```
╔════════════════════════════════════╗
║      🎯 MINI MISSIONS 🎯          ║
║       Hi, Alex! 👋                 ║
╠════════════════════════════════════╣
║                                    ║
║  Your Coins: 🪙 127                ║
║  [████████░░░░░░] → Next reward!   ║
║                                    ║
║  🔥 Streak: 5 days!                ║
║  [🎡 SPIN WHEEL] (Available!)      ║
║                                    ║
║  Today's Missions:                 ║
║  ┌──────────────────────────┐     ║
║  │ ☐ Make your bed          │     ║
║  │    Easy • 5🪙 • 5 min     │     ║
║  │    [✓ COMPLETE]          │     ║
║  └──────────────────────────┘     ║
║                                    ║
║  ┌──────────────────────────┐     ║
║  │ ☐ Feed the dog           │     ║
║  │    Easy • 3🪙 • 5 min     │     ║
║  │    [✓ COMPLETE]          │     ║
║  └──────────────────────────┘     ║
║                                    ║
║  ┌──────────────────────────┐     ║
║  │ ☐ Homework time          │     ║
║  │    Medium • 10🪙 • 30 min │     ║
║  │    [✓ COMPLETE]          │     ║
║  └──────────────────────────┘     ║
║                                    ║
║  [🎁 REWARDS] [⭐ ACHIEVEMENTS]    ║
║                                    ║
╚════════════════════════════════════╝
```

### Complete Mission Screen
```
╔════════════════════════════════════╗
║      COMPLETE MISSION              ║
╠════════════════════════════════════╣
║                                    ║
║  🧹 Clean your room                ║
║  Reward: 15🪙                      ║
║                                    ║
║  Did you finish this mission?      ║
║                                    ║
║  📷 Take a photo (optional)        ║
║  ┌─────────────────────┐          ║
║  │                     │          ║
║  │   [CAMERA ICON]     │          ║
║  │   Tap to add proof  │          ║
║  │                     │          ║
║  └─────────────────────┘          ║
║                                    ║
║  Add a note (optional):            ║
║  [___________________]             ║
║                                    ║
║    [BACK] [MARK AS DONE! ✓]       ║
║                                    ║
║  This will send to your parent     ║
║  for approval.                     ║
║                                    ║
╚════════════════════════════════════╝
```

### Rewards Store (Kid View)
```
╔════════════════════════════════════╗
║         REWARDS STORE 🎁          ║
║         You have: 🪙 127           ║
╠════════════════════════════════════╣
║  [Digital ▼] [Real World]          ║
║                                    ║
║  ┌──────────┐  ┌──────────┐       ║
║  │   🎩     │  │   🎨     │       ║
║  │Cool Hat  │  │New Theme │       ║
║  │  10🪙    │  │  20🪙    │       ║
║  │  [BUY]   │  │  [BUY]   │       ║
║  └──────────┘  └──────────┘       ║
║                                    ║
║  ┌──────────┐  ┌──────────┐       ║
║  │   ⭐     │  │   🏆     │       ║
║  │Gold Star │  │Champion  │       ║
║  │  5🪙     │  │  50🪙    │       ║
║  │  [BUY]   │  │  [BUY]   │       ║
║  └──────────┘  └──────────┘       ║
║                                    ║
║  Real World Rewards:               ║
║  ┌──────────────────────────┐     ║
║  │ 🍦 Ice cream trip        │     ║
║  │    25🪙                  │     ║
║  │    [REQUEST]             │     ║
║  └──────────────────────────┘     ║
║                                    ║
║  ┌──────────────────────────┐     ║
║  │ 📱 30 min extra screen   │     ║
║  │    15🪙                  │     ║
║  │    [REQUEST]             │     ║
║  └──────────────────────────┘     ║
║                                    ║
╚════════════════════════════════════╝
```

### Daily Spin Wheel
```
╔════════════════════════════════════╗
║        DAILY BONUS WHEEL! 🎡      ║
╠════════════════════════════════════╣
║                                    ║
║      You completed a mission!      ║
║       Spin for a bonus!            ║
║                                    ║
║         ╱───────╲                  ║
║       ╱  3🪙│5🪙  ╲                ║
║      │1🪙 ─┼─ ⭐│                 ║
║       ╲  2🪙│🎁  ╱                 ║
║         ╲───────╱                  ║
║            ▲                       ║
║                                    ║
║      [TAP TO SPIN!]                ║
║                                    ║
║  🔥 Streak Bonus: +1 extra spin!   ║
║  (5+ day streak)                   ║
║                                    ║
╚════════════════════════════════════╝
```

### Parent Dashboard
```
╔════════════════════════════════════╗
║      PARENT DASHBOARD 👨‍👩‍👧        ║
╠════════════════════════════════════╣
║  Child: Alex                       ║
║  [Switch to Kid View]              ║
║                                    ║
║  ⏰ Pending Approvals (2)          ║
║  ┌──────────────────────────┐     ║
║  │ ✓ Make bed - 5🪙         │     ║
║  │   Photo attached 📷       │     ║
║  │   [✓ APPROVE] [✗ DENY]   │     ║
║  └──────────────────────────┘     ║
║                                    ║
║  ┌──────────────────────────┐     ║
║  │ ✓ Feed dog - 3🪙         │     ║
║  │   [✓ APPROVE] [✗ DENY]   │     ║
║  └──────────────────────────┘     ║
║                                    ║
║  Quick Stats (This Week):          ║
║  Missions completed: 23            ║
║  Coins earned: 87🪙                ║
║  Current streak: 5 days            ║
║                                    ║
║  [➕ CREATE MISSION]               ║
║  [🎁 MANAGE REWARDS]               ║
║  [📊 VIEW REPORTS]                 ║
║  [⚙️ SETTINGS]                     ║
║                                    ║
╚════════════════════════════════════╝
```

### Create Mission (Parent)
```
╔════════════════════════════════════╗
║        CREATE MISSION              ║
╠════════════════════════════════════╣
║                                    ║
║  Mission Name:                     ║
║  [___________________]             ║
║                                    ║
║  Or choose template:               ║
║  [Make bed ▼]                      ║
║  • Make bed                        ║
║  • Brush teeth                     ║
║  • Clean room                      ║
║  • Homework                        ║
║  • Set table                       ║
║                                    ║
║  Difficulty:                       ║
║  ( ) Easy  (•) Medium  ( ) Hard    ║
║                                    ║
║  Coin Reward: 🪙                   ║
║  [__5__] coins                     ║
║                                    ║
║  Time Estimate:                    ║
║  [15 ▼] minutes                    ║
║                                    ║
║  Repeat:                           ║
║  ( ) One-time                      ║
║  (•) Daily                         ║
║  ( ) Weekly                        ║
║                                    ║
║  Require photo proof?              ║
║  [✓] Yes  [ ] No                   ║
║                                    ║
║     [CANCEL] [CREATE MISSION]      ║
║                                    ║
╚════════════════════════════════════╝
```

### Achievement Showcase
```
╔════════════════════════════════════╗
║        ACHIEVEMENTS ⭐            ║
╠════════════════════════════════════╣
║                                    ║
║  Your Collection:                  ║
║                                    ║
║  ┌────┐ ┌────┐ ┌────┐             ║
║  │ 🎖️ │ │ 🏅 │ │ 🔒 │             ║
║  │1st │ │10th│ │50th│             ║
║  │Done│ │Done│ │????│             ║
║  └────┘ └────┘ └────┘             ║
║                                    ║
║  ┌────┐ ┌────┐ ┌────┐             ║
║  │ 🔥 │ │ 🔒 │ │ 🔒 │             ║
║  │7-Day│ │30  │ │100 │             ║
║  │Strek│ │Days│ │Days│             ║
║  └────┘ └────┘ └────┘             ║
║                                    ║
║  Next Achievement:                 ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ║
║  "Mission Master" - 50 completed   ║
║  [████████████░░░░░] 23/50         ║
║                                    ║
║  Keep going! You're 27 away!       ║
║                                    ║
╚════════════════════════════════════╝
```

## 🔄 User Flows

### First-Time Setup (Parent)
1. **Welcome screen** explaining the app concept
2. **Create parent profile** with PIN
3. **Add child profile** (name, age, avatar)
4. **Create first 3 missions** using templates
5. **Set first reward** (digital or real)
6. **Explain approval process**
7. **Hand device to child** for their tutorial

### First-Time Setup (Child)
1. **Welcome from mascot:** "Let's earn some coins!"
2. **See mission list** (pre-populated by parent)
3. **Complete first mission** (guided)
4. **Wait for parent approval** (instant for tutorial)
5. **Earn first coins** with celebration animation
6. **Spin welcome bonus wheel**
7. **View rewards store**

### Daily Mission Completion Flow
```
Open App → View Missions → Select One → Read Details →
Complete Task (IRL) → Tap "Complete" → Add Photo (optional) →
Submit for Approval → Get Notification when Approved →
Coins Added + Streak Updated → Optional Wheel Spin
```

### Reward Redemption Flow
```
Open Rewards Store → Browse Items → Select Desired Reward →
Tap "Buy/Request" → Confirm Purchase → Parent Approval (for real rewards) →
Receive Reward (digital: instant, real: parent delivers)
```

## 🎮 App Mechanics

### Coin Economy Balance
- Easy missions: 3-5 coins (5 min tasks)
- Medium missions: 10-15 coins (15-30 min tasks)
- Hard missions: 20-30 coins (1+ hour tasks)
- Digital rewards: 5-50 coins
- Real rewards: 25-100+ coins (parent-defined)

### Streak System
- Streak = consecutive days with ≥1 completed mission
- Streak bonuses at 3, 7, 14, 30 days
- Break forgiveness: 1 "freeze" per month
- Visual fire icon 🔥 grows with streak length

### Approval System
- Kid marks mission complete → appears in parent queue
- Parent reviews (with photo if required)
- Approve: coins added instantly, kid notified
- Deny: kid notified with reason, can retry
- Auto-approve option for simple recurring tasks

### Parent Controls
- Set daily mission limits (prevent burnout)
- Adjust coin values
- Create/delete missions
- Manage reward catalog
- View completion history
- Send encouragement messages

## 🗓️ Development Roadmap

### Phase 1: Core Mission System (Weeks 1-3)
- ✅ Dual-user authentication (parent/child)
- ✅ Mission creation and display
- ✅ Basic coin system
- ✅ Completion and approval workflow
- ✅ Local data storage

**Deliverable:** Working chore tracking

### Phase 2: Rewards Store (Weeks 4-5)
- ✅ Digital rewards (avatars, themes)
- ✅ Real-world reward catalog
- ✅ Purchase and redemption flow
- ✅ Wishlist feature
- ✅ Transaction history

**Deliverable:** Full reward economy

### Phase 3: Gamification (Weeks 6-7)
- ✅ Streak tracking
- ✅ Achievement system
- ✅ Daily spin wheel
- ✅ Celebration animations
- ✅ Progress bars and visual feedback

**Deliverable:** Engaging game elements

### Phase 4: Parent Dashboard (Week 8)
- ✅ Approval queue
- ✅ Mission management
- ✅ Stats and reports
- ✅ Settings and controls
- ✅ Encouragement messaging

**Deliverable:** Complete parent tools

### Phase 5: Polish & Features (Weeks 9-10)
- ✅ Photo proof system
- ✅ Mission templates
- ✅ Recurring mission automation
- ✅ Notifications
- ✅ Avatar customization

**Deliverable:** Full feature set

### Phase 6: Testing & Launch (Weeks 11-12)
- ✅ Family beta testing
- ✅ Balance adjustments
- ✅ Bug fixes
- ✅ Performance optimization
- ✅ Documentation

**Deliverable:** Launch-ready app

## 🧩 Technical Considerations

### Recommended Tech Stack
- **Framework:** React Native or Flutter
- **Storage:** Local database (SQLite/Realm) with sync option
- **Authentication:** Local PIN (no accounts)
- **Camera:** For photo proof
- **Notifications:** Local push notifications
- **Charts:** For parent reports

### Data Schema
```json
{
  "family": {
    "parentPIN": "hash",
    "children": [
      {
        "id": "1",
        "name": "Alex",
        "avatar": "dog",
        "coins": 127,
        "streak": 5,
        "lastActiveDate": "2025-11-18"
      }
    ]
  },
  "missions": [
    {
      "id": "1",
      "name": "Make your bed",
      "difficulty": "easy",
      "coins": 5,
      "timeEstimate": 5,
      "repeat": "daily",
      "requirePhoto": false,
      "createdBy": "parent",
      "active": true
    }
  ],
  "completions": [
    {
      "id": "1",
      "missionId": "1",
      "childId": "1",
      "completedAt": "2025-11-18T08:00:00Z",
      "photo": "path",
      "status": "pending",
      "approvedAt": null
    }
  ],
  "rewards": [
    {
      "id": "1",
      "name": "Cool Hat",
      "type": "digital",
      "cost": 10,
      "category": "avatar"
    }
  ]
}
```

### Performance
- Fast load times (< 2 seconds)
- Smooth animations (60 FPS)
- Efficient photo storage (compression)
- Low battery usage

### Privacy
- No internet required
- Local data only
- Optional cloud backup (parent-controlled)
- No tracking

## 📊 Success Metrics

- **Engagement:** Kids complete 3+ missions per day
- **Retention:** App used 5+ days per week
- **Parent satisfaction:** 90%+ find it helpful
- **Behavior change:** Improved chore completion
- **Fun factor:** Kids excited to open app

## 🛡️ Safety & Privacy

### Kid Safety
- No social features
- No external content
- Parent-supervised entirely
- Age-appropriate language

### Parent Control
- Full mission oversight
- Approval system
- Progress monitoring
- Adjustable settings

## 📝 Development Notes

- Use positive reinforcement only (no punishment mechanics)
- Make celebrations feel rewarding
- Keep UI simple and fast
- Test with real families
- Balance fun vs. manipulation (avoid exploitative design)
- Ensure accessibility (colorblind modes, text size)

## 🎓 Educational Value

### Skills Developed
- **Responsibility:** Completing tasks consistently
- **Time management:** Planning when to do missions
- **Goal-setting:** Saving for desired rewards
- **Delayed gratification:** Working toward big items
- **Money concepts:** Earning and spending

## 🔮 Future Expansion Ideas

- **Multi-child support:** Siblings compete or collaborate
- **Team missions:** Work together for bonus coins
- **Seasonal events:** Holiday-themed missions
- **Integration:** Link to Kid-Safe Shop Tracker for real money
- **Parent messaging:** Send encouragement or reminders
- **Mission ideas library:** Community-contributed tasks

---

**Document Version:** 1.0
**Last Updated:** 2025-11-18
**Status:** Design Complete - Ready for Technical Planning
