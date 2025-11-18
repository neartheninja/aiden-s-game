# Kid-Safe Shop Tracker - Complete Design Document

## 💰 Overview

**App Name:** Kid-Safe Shop Tracker
**Category:** Productivity / Finance for Kids
**Target Age:** 8-12 years
**Platform:** iOS/Android
**Mode:** Single-player, offline with optional parent sync

## 📖 Core Concept

Kid-Safe Shop Tracker is a simple, visual app that helps children track their allowance, savings goals, and wishlist items. Through colorful progress bars and visual feedback, kids learn basic money management while planning for items they want to purchase. The app includes parent approval features for major changes, teaching responsibility and financial planning.

## 🎯 Key Features

### 1. Savings Dashboard
- **Large savings total display** showing current balance
- **Visual progress bars** for each wishlist goal
- **Quick-add buttons** for allowance deposits
- **Recent activity feed** (added money, purchased items)
- **Weekly allowance countdown** showing days until next payment

### 2. Wishlist Management
- **Add items with photo** (from camera or gallery)
- **Item details:** name, price, store (optional)
- **Progress bar** showing % saved toward item
- **Prioritize items** (drag to reorder)
- **Mark items as purchased** (parent approval required)
- **Celebration animation** when goal reached

### 3. Allowance Tracker
- **Set weekly allowance amount** (parent-configured)
- **Auto-add on schedule** (every Sunday, etc.)
- **History log** of all allowance received
- **Bonus tracking** (extra money from chores, gifts)
- **Visual streak counter** for saving weeks

### 4. Parent Controls
- **Parent PIN or biometric lock** for settings
- **Approval system** for purchases over threshold
- **Edit allowance amount** and schedule
- **View complete history**
- **Export reports** (optional)
- **Reset or adjust balance**

### 5. Goal Setting Tools
- **Savings calculator:** "How long until I can buy this?"
- **What-if scenarios:** "If I save $5 more per week..."
- **Multiple savings goals** (separate envelopes)
- **Milestone celebrations** at 25%, 50%, 75%, 100%

### 6. Safety Features
- **No internet required** for core functions
- **All data stored locally**
- **No social sharing**
- **No ads or external links**
- **Parent-approved only features**
- **No payment processing** (tracking only)

## 🎨 Visual Style

### Color Palette
- **Primary:** Bright teal, vibrant orange
- **Accents:** Purple, yellow, green
- **UI:** White backgrounds, colorful cards
- **Progress bars:** Gradient fills (empty → full)

### Art Style
- **Sticker-like icons** for items and categories
- **Rounded rectangles** for all cards
- **Bold, chunky fonts**
- **Flat design with subtle shadows**
- **Confetti animations** for achievements

### Typography
- **Large numbers** for money amounts
- **Clear labels** in simple language
- **Kid-friendly terms** (no jargon)

## 🖼️ UI Wireframes (Text-Based)

### Home Dashboard
```
╔════════════════════════════════════╗
║    💰 MY SAVINGS TRACKER 💰       ║
╠════════════════════════════════════╣
║                                    ║
║   ┏━━━━━━━━━━━━━━━━━━━━━━━━━┓    ║
║   ┃  Total Saved: $45.00     ┃    ║
║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━┛    ║
║                                    ║
║   📅 Allowance in 3 days           ║
║   [████████░░] $5.00 coming        ║
║                                    ║
║   Quick Actions:                   ║
║   [📝 WISHLIST] [➕ ADD MONEY]    ║
║   [📊 ALLOWANCE] [⚙️ SETTINGS]    ║
║                                    ║
║   🎯 My Goals:                     ║
║   ┌─────────────────────────┐     ║
║   │ 🎮 Video Game           │     ║
║   │ $60.00                  │     ║
║   │ [███████░░░] 75%        │     ║
║   │ $15 to go!              │     ║
║   └─────────────────────────┘     ║
║                                    ║
║   ┌─────────────────────────┐     ║
║   │ 🚲 New Bike             │     ║
║   │ $150.00                 │     ║
║   │ [███░░░░░░░] 30%        │     ║
║   │ $105 to go!             │     ║
║   └─────────────────────────┘     ║
║                                    ║
╚════════════════════════════════════╝
```

### Wishlist Item Detail
```
╔════════════════════════════════════╗
║    ← BACK          🎮              ║
╠════════════════════════════════════╣
║                                    ║
║        [ITEM PHOTO/ICON]           ║
║                                    ║
║   Name: Video Game                 ║
║   Price: $60.00                    ║
║   Store: GameStop                  ║
║                                    ║
║   Progress:                        ║
║   [██████████████████░░] 75%       ║
║                                    ║
║   Saved: $45.00                    ║
║   Need: $15.00                     ║
║                                    ║
║   💡 You'll reach this goal in:    ║
║      3 weeks (at $5/week)          ║
║                                    ║
║   [📝 EDIT] [🗑️ DELETE]           ║
║   [✅ MARK AS PURCHASED]           ║
║                                    ║
╚════════════════════════════════════╝
```

### Add New Item
```
╔════════════════════════════════════╗
║         ADD TO WISHLIST            ║
╠════════════════════════════════════╣
║                                    ║
║   📷 Add Photo                     ║
║   ┌─────────────────────┐         ║
║   │                     │         ║
║   │   [CAMERA ICON]     │         ║
║   │   Tap to add photo  │         ║
║   │                     │         ║
║   └─────────────────────┘         ║
║                                    ║
║   Item Name:                       ║
║   [_____________________]          ║
║                                    ║
║   Price: $                         ║
║   [_____________________]          ║
║                                    ║
║   Store (optional):                ║
║   [_____________________]          ║
║                                    ║
║   Category:                        ║
║   [🎮 Toys] [👕 Clothes] [📚 Books]║
║                                    ║
║        [SAVE TO WISHLIST]          ║
║                                    ║
╚════════════════════════════════════╝
```

### Allowance Tracker
```
╔════════════════════════════════════╗
║       ALLOWANCE TRACKER            ║
╠════════════════════════════════════╣
║                                    ║
║   Weekly Allowance: $5.00          ║
║   Next Payment: Sunday, Nov 20     ║
║                                    ║
║   ⏰ Countdown: 3 days             ║
║   [███████░░░]                     ║
║                                    ║
║   📊 This Month:                   ║
║   ✓ Week 1: $5.00                  ║
║   ✓ Week 2: $5.00                  ║
║   ✓ Week 3: $5.00                  ║
║   ⏳ Week 4: Pending               ║
║   ━━━━━━━━━━━━━━━                 ║
║   Total: $15.00                    ║
║                                    ║
║   🎁 Bonuses This Month:           ║
║   Nov 10: Birthday - $20.00        ║
║   Nov 15: Extra chore - $3.00      ║
║                                    ║
║   [➕ ADD BONUS]                   ║
║   [⚙️ PARENT SETTINGS]             ║
║                                    ║
╚════════════════════════════════════╝
```

### Purchase Confirmation (Parent Approval)
```
╔════════════════════════════════════╗
║      🔒 PARENT APPROVAL NEEDED     ║
╠════════════════════════════════════╣
║                                    ║
║   Your child wants to mark this    ║
║   item as purchased:               ║
║                                    ║
║   ┌─────────────────────┐         ║
║   │   🎮 Video Game      │         ║
║   │   Price: $60.00      │         ║
║   └─────────────────────┘         ║
║                                    ║
║   This will subtract $60.00 from   ║
║   their savings.                   ║
║                                    ║
║   New balance: $45.00 → $0.00      ║
║   (Balance would be -$15.00!)      ║
║                                    ║
║   ⚠️ Not enough money saved yet!   ║
║                                    ║
║   [❌ CANCEL] [ENTER PIN]          ║
║                                    ║
╚════════════════════════════════════╝
```

## 🔄 User Flows

### First-Time Setup
1. **Welcome screen** explaining the app
2. **Parent setup:** Set PIN, enter allowance amount and schedule
3. **Kid tutorial:** "Let's add your first wishlist item!"
4. **Add first item** with guided steps
5. **Initial deposit:** Parent adds starting balance
6. **Show progress** toward first goal

### Adding a Wishlist Item
```
Tap "Add Item" → Take/Choose Photo → Enter Name →
Enter Price → (Optional Store) → Choose Category →
Save → See Progress Bar on Dashboard
```

### Marking Item as Purchased
```
View Item → Tap "Mark as Purchased" → Parent PIN Required →
Confirm Purchase → Deduct from Balance → Celebration Animation →
Item Moves to "Purchased" Archive
```

### Weekly Allowance Flow
```
Sunday Arrives → Auto-notification → Balance Updates →
Progress Bars Update → Check if any goals reached →
Show Celebration if milestone hit
```

## 🎮 App Mechanics

### Progress Calculation
- Visual bar: `(Current Savings / Item Price) × 100`
- Color changes: 0-24% (red), 25-49% (orange), 50-74% (yellow), 75-99% (light green), 100% (bright green + sparkle)

### Time-to-Goal Calculator
```
Weeks needed = (Price - Saved) / Weekly Allowance
Display: "X weeks" or "X months"
```

### Parent Approval Threshold
- Configurable (default: any purchase)
- Or set minimum (e.g., only purchases over $20)
- Always require for balance adjustments

### Data Persistence
- Auto-save all changes locally
- No cloud sync (optional future feature)
- Export/import for device transfers

## 🗓️ Development Roadmap

### Phase 1: Core Tracking (Weeks 1-3)
- ✅ Dashboard UI
- ✅ Add/edit/delete wishlist items
- ✅ Basic savings balance
- ✅ Progress bar calculations
- ✅ Photo upload functionality

**Deliverable:** Basic wishlist tracker

### Phase 2: Allowance System (Weeks 4-5)
- ✅ Allowance scheduling
- ✅ Auto-deposit functionality
- ✅ History log
- ✅ Bonus entry system
- ✅ Countdown timer

**Deliverable:** Full allowance tracking

### Phase 3: Parent Controls (Weeks 6-7)
- ✅ PIN/biometric lock
- ✅ Approval workflow
- ✅ Parent settings panel
- ✅ Balance adjustment tools
- ✅ History viewing

**Deliverable:** Complete parent oversight

### Phase 4: Goal Tools & Polish (Weeks 8-9)
- ✅ Savings calculator
- ✅ Milestone animations
- ✅ Category system
- ✅ Search and filter
- ✅ UI polish and animations

**Deliverable:** Full feature set

### Phase 5: Testing & Launch (Weeks 10-11)
- ✅ Kid user testing
- ✅ Parent feedback sessions
- ✅ Bug fixes
- ✅ Performance optimization
- ✅ App store preparation

**Deliverable:** Release version

## 🧩 Technical Considerations

### Recommended Tech Stack
- **Framework:** React Native or Flutter
- **Storage:** AsyncStorage (RN) or SharedPreferences (Flutter)
- **Camera:** expo-camera or image_picker
- **Authentication:** Local biometric APIs
- **Notifications:** Local push notifications only

### Data Schema
```json
{
  "balance": 45.00,
  "allowance": {
    "amount": 5.00,
    "frequency": "weekly",
    "nextDate": "2025-11-20"
  },
  "wishlist": [
    {
      "id": "1",
      "name": "Video Game",
      "price": 60.00,
      "store": "GameStop",
      "photo": "base64_or_path",
      "category": "toys",
      "dateAdded": "2025-11-01",
      "priority": 1
    }
  ],
  "history": [
    {
      "date": "2025-11-13",
      "type": "allowance",
      "amount": 5.00,
      "note": "Weekly allowance"
    }
  ],
  "purchased": [],
  "parentSettings": {
    "pinHash": "hash",
    "approvalThreshold": 0
  }
}
```

### Performance Targets
- **Load time:** < 2 seconds
- **Photo compression:** Max 500KB per image
- **Smooth animations:** 60 FPS
- **Low memory footprint:** < 100MB

### Privacy & Security
- **No internet required**
- **Local-only data storage**
- **Encrypted PIN storage**
- **No analytics or tracking**
- **COPPA compliant**

## 📊 Success Metrics

- **Adoption:** Kids add 3+ items within first week
- **Engagement:** Open app 2-3x per week
- **Goal completion:** 70% of items eventually purchased
- **Parent satisfaction:** Positive feedback on control features
- **Educational value:** Kids demonstrate improved planning

## 🛡️ Safety & Privacy

### Kid Safety
- No external communication
- No social features
- No ads or links
- Age-appropriate interface

### Parent Control
- PIN-protected settings
- Purchase approval system
- Complete transaction history
- Balance override capability

## 📝 Development Notes

- Use large touch targets (min 44x44pt)
- Test with kids for terminology clarity
- Ensure math is always accurate (use Decimal for currency)
- Make celebrations feel rewarding but not manipulative
- Provide helpful tips for saving strategies

## 🔮 Future Expansion Ideas

- **Multiple kids:** Separate profiles per child
- **Chore integration:** Link to Mini Missions app
- **Goal templates:** Common items with average prices
- **Savings challenges:** "Save $10 this month"
- **Educational tips:** Age-appropriate money lessons
- **Export reports:** CSV for parents to track trends

---

**Document Version:** 1.0
**Last Updated:** 2025-11-18
**Status:** Design Complete - Ready for Technical Planning
