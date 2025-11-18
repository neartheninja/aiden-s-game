# Cookie Tycoon Mini - Complete Design Document

## 🍪 Overview

**App Name:** Cookie Tycoon Mini
**Category:** Casual Mobile Game
**Target Age:** 8-12 years
**Platform:** iOS/Android
**Mode:** Single-player, offline

## 📖 Core Concept

Cookie Tycoon Mini is a casual mobile game where players run their own tiny cookie bakery. Through simple drag-and-drop mechanics, kids bake cookies, upgrade their kitchen tools, and participate in fun selling events called "School Sale Days." The game teaches basic business concepts like resource management, upgrades, and planning—all wrapped in a cute, colorful bakery theme.

## 🎯 Key Features

### 1. Baking System
- **Simple drag-and-drop mechanics** for each baking step
- **Four-step process:** Choose Dough → Mix → Shape → Bake
- **Visual progress meter** showing completion
- **Interactive animations** for each action
- **Recipe variety** unlocked through progression

### 2. School Sale Day Events
- **Time-limited mini-events** where players sell their cookies
- **Customer NPCs** with different preferences
- **Combo bonuses** for selling multiple of the same type
- **Event rewards** (coins, ingredients, recipes)
- **Daily and weekly event cycles**

### 3. Upgrade System
- **Kitchen equipment:** Better ovens (faster baking), mixers (auto-mix), cooling racks
- **Ingredients:** Unlock premium chocolate, sprinkles, frosting
- **Cosmetic upgrades:** Bakery decorations, display cases
- **Efficiency upgrades:** Batch baking, auto-collect timers

### 4. Progression & Unlocks
- **Level system** based on cookies baked and sold
- **Recipe unlocks** at specific levels (chocolate chip → sugar → snickerdoodle → etc.)
- **Achievement badges** for milestones
- **Daily tasks** such as "Bake 12 chocolate chip cookies" or "Sell 20 cookies in one day"

### 5. Avatar Customization
- **Baker character** players can customize
- **Unlockable outfits** (chef hats, aprons, accessories)
- **Cosmetic rewards** from achievements
- **No social sharing** (purely personal)

### 6. Safety Features
- **100% offline gameplay**
- **No chat or social features**
- **No in-app purchases** (or parent-gated if implemented)
- **No ads**
- **No personal data collection**

## 🎨 Visual Style

### Color Palette
- **Pastels:** Soft pinks, mint greens, buttery yellows
- **Warm accents:** Golden browns, cream, chocolate
- **High contrast UI** for readability

### Art Style
- **Chibi characters** with big heads and simple features
- **Rounded, friendly shapes**
- **Hand-drawn aesthetic** with smooth animations
- **Bouncy, energetic transitions**

### Typography
- **Large, rounded fonts** for headings
- **High readability** for all text
- **Simple language** appropriate for ages 8-12

### Animation Style
- **Bouncy easing** on button presses
- **Particle effects** for mixing, baking success
- **Smooth drag-and-drop** feedback
- **Celebration animations** for achievements

## 🖼️ UI Wireframes (Text-Based)

### Home Screen
```
╔════════════════════════════════════╗
║     🍪 COOKIE TYCOON MINI 🍪      ║
╠════════════════════════════════════╣
║                                    ║
║    [Animated Bakery Background]    ║
║                                    ║
║         [▶ START GAME]            ║
║         [🏪 MY BAKERY]            ║
║         [📦 INVENTORY]            ║
║         [⬆️ UPGRADES]             ║
║         [⚙️ SETTINGS]             ║
║                                    ║
║  Coins: 🪙 1,250  |  Level: ⭐ 5  ║
╚════════════════════════════════════╝
```

### Baking Screen
```
╔════════════════════════════════════╗
║         BAKE COOKIES               ║
╠════════════════════════════════════╣
║  Step 1/4: Choose Dough            ║
║  [████████░░░░] 60%               ║
║                                    ║
║  ┌──────┐ ┌──────┐ ┌──────┐      ║
║  │ 🟤   │ │ 🟡   │ │ 🔒   │      ║
║  │Choco │ │Sugar │ │Locked│      ║
║  └──────┘ └──────┘ └──────┘      ║
║                                    ║
║        [NEXT STEP →]              ║
║                                    ║
║  Ingredients:                      ║
║  Flour: 10/50  Sugar: 5/30        ║
╚════════════════════════════════════╝
```

### Shop/Upgrade Screen
```
╔════════════════════════════════════╗
║         UPGRADE SHOP               ║
║         Coins: 🪙 1,250           ║
╠════════════════════════════════════╣
║                                    ║
║  ┌─────────┐  ┌─────────┐         ║
║  │  🔥     │  │  🥄     │         ║
║  │Fast Oven│  │Auto Mix │         ║
║  │  500🪙  │  │  750🪙  │         ║
║  │  [BUY]  │  │  [BUY]  │         ║
║  └─────────┘  └─────────┘         ║
║                                    ║
║  ┌─────────┐  ┌─────────┐         ║
║  │  🍫     │  │  🔒     │         ║
║  │Chocolate│  │ Locked  │         ║
║  │  300🪙  │  │ Lvl 10  │         ║
║  │  [BUY]  │  │   ---   │         ║
║  └─────────┘  └─────────┘         ║
╚════════════════════════════════════╝
```

### School Sale Day Event
```
╔════════════════════════════════════╗
║      🏫 SCHOOL SALE DAY! 🏫       ║
║         Time Left: 3:45            ║
╠════════════════════════════════════╣
║  Customer: "I want chocolate!"     ║
║      👦                            ║
║       ↓                            ║
║  ┌──┐ ┌──┐ ┌──┐                   ║
║  │🍪│ │🍪│ │🍪│                   ║
║  │🟤│ │🟡│ │🔴│                   ║
║  └──┘ └──┘ └──┘                   ║
║  [TAP TO SELL]                     ║
║                                    ║
║  Sold Today: 15  Goal: 30         ║
║  Earnings: 🪙 450                 ║
╚════════════════════════════════════╝
```

## 🔄 User Flows

### First-Time User Experience
1. **Welcome screen** with cute animation
2. **Simple tutorial** (3-4 screens max)
3. **First bake** - guided through all 4 steps
4. **First sale** - one customer transaction
5. **First upgrade** - prompted to buy a simple item
6. **Set daily goal** - system suggests 5 cookies

### Core Gameplay Loop
```
Bake Cookies → Participate in Sale Day → Earn Coins →
Buy Upgrades → Unlock Recipes → Bake More/Better Cookies →
Level Up → Repeat
```

### Daily Session Flow
1. Collect daily login bonus
2. View daily task
3. Bake cookies toward task
4. Participate in scheduled Sale Day (if available)
5. Spend coins on upgrades
6. Optional: Customize avatar

## 🎮 Game Mechanics

### Baking Mechanics
- Each recipe has 4 steps (some may be automated with upgrades)
- Drag ingredients to mixing bowl
- Tap/swipe to mix until meter fills
- Shape cookies by tapping molds
- Timer for baking (can be sped up with upgrades)

### Resource Management
- **Ingredients** earned through sales, daily tasks, level-ups
- **Coins** earned through selling cookies
- **Storage limits** that can be upgraded

### Sale Day Mechanics
- Customers appear with speech bubbles requesting cookie types
- Tap correct cookie to sell
- Bonus points for speed and accuracy
- Combo bonuses for consecutive correct sales

### Progression System
- XP gained from baking and selling
- Levels unlock new recipes and upgrade slots
- Achievement system with collectible badges

## 🗓️ Development Roadmap

### Phase 1: Core Baking (Weeks 1-4)
- ✅ Basic UI framework
- ✅ Drag-and-drop baking mechanics
- ✅ 3 starter recipes (chocolate chip, sugar, oatmeal)
- ✅ Simple coin system
- ✅ Tutorial flow

**Deliverable:** Playable baking prototype

### Phase 2: Upgrade System (Weeks 5-7)
- ✅ Shop UI
- ✅ 5-7 upgrades (ovens, mixers, ingredients)
- ✅ Save/load system
- ✅ Ingredient inventory

**Deliverable:** Full progression loop

### Phase 3: School Sale Days (Weeks 8-10)
- ✅ Event system and timer
- ✅ Customer AI and requests
- ✅ Sales mechanics
- ✅ Reward distribution

**Deliverable:** Complete game loop

### Phase 4: Avatar & Cosmetics (Weeks 11-12)
- ✅ Avatar customization UI
- ✅ 10+ unlockable items
- ✅ Achievement system

**Deliverable:** Full personalization features

### Phase 5: Polish & Testing (Weeks 13-15)
- ✅ Animation polish
- ✅ Sound effects and music
- ✅ Balance testing
- ✅ Kid testing sessions (with parental consent)
- ✅ Bug fixes

**Deliverable:** Release candidate

### Phase 6: Launch Prep (Week 16)
- ✅ App store assets
- ✅ Parental guide documentation
- ✅ Privacy policy
- ✅ Final QA

**Deliverable:** App store submission

## 🧩 Technical Considerations

### Recommended Tech Stack
- **Engine:** Unity or Godot (2D capabilities)
- **Language:** C# (Unity) or GDScript (Godot)
- **Platform:** iOS and Android (cross-platform)
- **Storage:** Local device storage (PlayerPrefs or equivalent)
- **Analytics:** None (privacy-first)

### Performance Targets
- **Frame rate:** Stable 60 FPS
- **Load time:** < 3 seconds
- **App size:** < 150 MB
- **Battery usage:** Low (casual gameplay sessions)

### Data & Privacy
- **No server communication**
- **All data stored locally**
- **No user accounts**
- **COPPA compliant**
- **No tracking or analytics**

### Accessibility
- **Colorblind modes** (high contrast options)
- **Adjustable text size**
- **Simple touch controls** (no complex gestures)
- **Optional sound/music toggle**

## 📊 Success Metrics (Internal Testing)

- **Engagement:** Average session length 10-15 minutes
- **Retention:** Players return 3+ times per week
- **Progression:** Players reach level 5 within 3 days
- **Completion:** 80% complete tutorial
- **Fun factor:** Positive feedback from kid testers

## 🛡️ Safety & Parental Controls

### Built-in Safety
- No internet connection required
- No social features or chat
- No external links
- No ads

### Optional Parental Features
- Playtime limits (device-level recommendations)
- Progress viewing (parent mode)
- Reset progress option

## 📝 Notes for Development

- Keep all language at 3rd-5th grade reading level
- Test with actual kids in target age range
- Ensure all interactions are forgiving (no harsh fail states)
- Celebrate successes with animations and positive feedback
- Make sure game is playable without spending money (if any IAP added, must be parent-gated)

## 🔮 Future Expansion Ideas

- Seasonal recipes (holiday cookies)
- Special events (bake-offs, competitions)
- New bakery themes
- Additional customer types with unique behaviors
- Photo mode to share cookie creations (locally only)

---

**Document Version:** 1.0
**Last Updated:** 2025-11-18
**Status:** Design Complete - Ready for Technical Planning
