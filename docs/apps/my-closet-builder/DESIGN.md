# My Closet Builder - Complete Design Document

## 👗 Overview

**App Name:** My Closet Builder
**Category:** Creative / Fashion Game
**Target Age:** 8-12 years
**Platform:** iOS/Android
**Mode:** Single-player, offline

## 📖 Core Concept

My Closet Builder is a creative fashion app that combines a digital paper-doll dress-up game with practical wardrobe management. Kids can mix and match virtual clothing, photograph and catalog their real clothes, create outfits for different occasions, and maintain a wishlist of items they'd like to add to their wardrobe—all while developing personal style and organizational skills.

## 🎯 Key Features

### 1. Mix & Match Game
- **Digital paper-doll interface** with customizable model
- **Drag-and-drop clothing pieces** (tops, bottoms, shoes, accessories)
- **Layering system** (shirts over t-shirts, jackets over sweaters)
- **Color coordination hints** (what matches well)
- **Style categories:** Casual, Fancy, Sports, School, Sleepover, etc.
- **Save outfits** to collection
- **Outfit of the day** feature

### 2. My Wardrobe (Digital Closet)
- **Photo upload** of real clothing items
- **Categorization:** Tops, Bottoms, Dresses, Shoes, Accessories
- **Tagging system:** Colors, seasons, occasions
- **Search and filter** by category, color, or tag
- **Mark favorites** ⭐
- **Track what you wear** (outfit history)
- **Seasonal organization** (pack away winter clothes)

### 3. Outfit Creator
- **Plan outfits** using photos of real clothes
- **Save outfit combinations** for quick reference
- **Name outfits** ("First Day of School," "Birthday Party")
- **Calendar integration:** Plan what to wear for upcoming events
- **Weather suggestions:** "Cold day? Try this outfit!"
- **Outfit ratings** (personal 1-5 stars)

### 4. Wishlist
- **Add desired clothing items** with photos
- **Store/brand info** (optional)
- **Price tracking**
- **Priority ranking** (drag to reorder)
- **Mark as purchased** → auto-add to wardrobe
- **Share wishlist** with parents (for gifts/shopping)
- **Seasonal wishlist sections** (Summer, Back-to-School, etc.)

### 5. Style Points Mini-Games
- **Style Challenges:** "Create a blue outfit" or "Mix patterns"
- **Daily styling mission:** Earn points for completing looks
- **Fashion quiz:** Color theory, pattern mixing basics
- **Unlock virtual items** with style points
- **Achievement badges** for fashion milestones

### 6. Virtual Clothing Collection
- **Starter wardrobe** of digital items
- **Unlock new pieces** through gameplay
- **Fantasy items:** Rainbow dress, superhero cape, sparkle shoes
- **Seasonal collections** (winter coats, summer dresses)
- **Mix virtual and real** clothes in outfits

### 7. Parent Controls
- **Approve wishlist purchases** (if linked to Shop Tracker)
- **Photo moderation** (if uploaded to shared device)
- **Spending limits** on wishlist
- **Privacy settings**

## 🎨 Visual Style

### Color Palette
- **Primary:** Soft pastels (blush pink, lavender, mint, peach)
- **Accents:** Rose gold, silver, light gray
- **Backgrounds:** White, light cream, gentle gradients
- **Clothing:** Full spectrum of colors

### Art Style
- **Paper-doll aesthetic** with clean outlines
- **Flat design** with subtle shadows for depth
- **Large, swappable clothing cards**
- **Sticker-style accessories**
- **Hand-drawn elements** for warmth

### Typography
- **Playful but elegant** headers
- **Clear sans-serif** for labels
- **Script font** for outfit names (user-added)

## 🖼️ UI Wireframes (Text-Based)

### Home Screen
```
╔════════════════════════════════════╗
║    👗 MY CLOSET BUILDER 👗        ║
╠════════════════════════════════════╣
║                                    ║
║    [AVATAR PREVIEW IN OUTFIT]      ║
║           Outfit of Today          ║
║         "School Day Look"          ║
║                                    ║
║  Style Points: ⭐ 245              ║
║  Daily Challenge: Complete! ✓      ║
║                                    ║
║  Quick Actions:                    ║
║  ┌──────────┐  ┌──────────┐       ║
║  │   🎨     │  │   👚     │       ║
║  │Mix&Match │  │   My     │       ║
║  │          │  │ Wardrobe │       ║
║  └──────────┘  └──────────┘       ║
║                                    ║
║  ┌──────────┐  ┌──────────┐       ║
║  │   📋     │  │   💭     │       ║
║  │ Outfits  │  │ Wishlist │       ║
║  │          │  │          │       ║
║  └──────────┘  └──────────┘       ║
║                                    ║
║  [🎮 STYLE GAMES] [⚙️ SETTINGS]   ║
║                                    ║
╚════════════════════════════════════╝
```

### Mix & Match Screen
```
╔════════════════════════════════════╗
║         MIX & MATCH                ║
╠════════════════════════════════════╣
║                                    ║
║  ┌────────────────────┐            ║
║  │                    │            ║
║  │   👤 Paper Doll    │            ║
║  │                    │            ║
║  │  [Wearing items]   │            ║
║  │                    │            ║
║  │  👕 🩳 👟         │            ║
║  └────────────────────┘            ║
║                                    ║
║  [Tops][Bottoms][Shoes][Access.]   ║
║                                    ║
║  ┌───┐ ┌───┐ ┌───┐ ┌───┐          ║
║  │👕│ │👚│ │🎽│ │🧥│          ║
║  └───┘ └───┘ └───┘ └───┘          ║
║  Drag to dress up!                 ║
║                                    ║
║  Style: Casual 👍                  ║
║  💡 Tip: Try adding a jacket!      ║
║                                    ║
║  [🎨 COLORS] [💾 SAVE OUTFIT]     ║
║  [🔄 RANDOM] [🗑️ CLEAR ALL]      ║
║                                    ║
╚════════════════════════════════════╝
```

### My Wardrobe (Real Clothes)
```
╔════════════════════════════════════╗
║         MY WARDROBE 👚            ║
╠════════════════════════════════════╣
║  [+ ADD ITEM]      Search: [____]  ║
║                                    ║
║  [All ▼] [Favorites] [Recent]      ║
║                                    ║
║  Tops (12 items)                   ║
║  ┌────┐ ┌────┐ ┌────┐             ║
║  │📷  │ │📷  │ │📷  │             ║
║  │Red │ │Blue│ │Star│             ║
║  │Tee │ │Top │ │Tee │             ║
║  │ ⭐ │ │    │ │    │             ║
║  └────┘ └────┘ └────┘             ║
║                                    ║
║  Bottoms (8 items)                 ║
║  ┌────┐ ┌────┐ ┌────┐             ║
║  │📷  │ │📷  │ │📷  │             ║
║  │Jean│ │Blck│ │Flow│             ║
║  │s   │ │Legi│ │Skrt│             ║
║  │    │ │ ⭐ │ │    │             ║
║  └────┘ └────┘ └────┘             ║
║                                    ║
║  [VIEW BY: GRID] [LIST] [COLOR]    ║
║                                    ║
╚════════════════════════════════════╝
```

### Add Item to Wardrobe
```
╔════════════════════════════════════╗
║       ADD TO WARDROBE              ║
╠════════════════════════════════════╣
║                                    ║
║  📷 Take Photo                     ║
║  ┌─────────────────────┐          ║
║  │                     │          ║
║  │   [CAMERA ICON]     │          ║
║  │   Tap to add photo  │          ║
║  │                     │          ║
║  └─────────────────────┘          ║
║                                    ║
║  Item Name:                        ║
║  [___________________]             ║
║                                    ║
║  Category:                         ║
║  [Tops ▼]                          ║
║  • Tops                            ║
║  • Bottoms                         ║
║  • Dresses                         ║
║  • Shoes                           ║
║  • Accessories                     ║
║                                    ║
║  Color(s):                         ║
║  [🔴][🟠][🟡][🟢][🔵][🟣][⚫][⚪]    ║
║  (Select all that apply)           ║
║                                    ║
║  Occasion Tags:                    ║
║  ☐ School  ☐ Sports  ☐ Fancy      ║
║  ☐ Casual  ☐ Warm   ☐ Cold        ║
║                                    ║
║     [CANCEL] [ADD TO CLOSET]       ║
║                                    ║
╚════════════════════════════════════╝
```

### Saved Outfits
```
╔════════════════════════════════════╗
║       MY OUTFITS 📋               ║
╠════════════════════════════════════╣
║  [+ CREATE NEW]                    ║
║                                    ║
║  ┌──────────────────────────┐     ║
║  │ 📷 [Outfit Preview]      │     ║
║  │ "First Day of School"    │     ║
║  │ ⭐⭐⭐⭐⭐              │     ║
║  │ Last worn: Sep 1, 2024   │     ║
║  │ [VIEW] [EDIT] [WEAR]     │     ║
║  └──────────────────────────┘     ║
║                                    ║
║  ┌──────────────────────────┐     ║
║  │ 📷 [Outfit Preview]      │     ║
║  │ "Birthday Party"         │     ║
║  │ ⭐⭐⭐⭐               │     ║
║  │ Not worn yet             │     ║
║  │ [VIEW] [EDIT] [WEAR]     │     ║
║  └──────────────────────────┘     ║
║                                    ║
║  ┌──────────────────────────┐     ║
║  │ 📷 [Outfit Preview]      │     ║
║  │ "Comfy Weekend"          │     ║
║  │ ⭐⭐⭐⭐⭐              │     ║
║  │ Last worn: Nov 12, 2025  │     ║
║  │ [VIEW] [EDIT] [WEAR]     │     ║
║  └──────────────────────────┘     ║
║                                    ║
╚════════════════════════════════════╝
```

### Wishlist
```
╔════════════════════════════════════╗
║         WISHLIST 💭               ║
╠════════════════════════════════════╣
║  [+ ADD ITEM]      Priority Sort ▼ ║
║                                    ║
║  🔥 High Priority                  ║
║  ┌──────────────────────────┐     ║
║  │ 📷                       │     ║
║  │ "Denim Jacket"           │     ║
║  │ Store: Target            │     ║
║  │ Price: $25               │     ║
║  │ [✓ GOT IT!] [EDIT]       │     ║
║  └──────────────────────────┘     ║
║                                    ║
║  ⭐ Medium Priority                ║
║  ┌──────────────────────────┐     ║
║  │ 📷                       │     ║
║  │ "Rainbow Sneakers"       │     ║
║  │ Store: Online            │     ║
║  │ Price: $40               │     ║
║  │ [✓ GOT IT!] [EDIT]       │     ║
║  └──────────────────────────┘     ║
║                                    ║
║  💙 Low Priority                   ║
║  ┌──────────────────────────┐     ║
║  │ 📷                       │     ║
║  │ "Fancy Dress"            │     ║
║  │ Store: TBD               │     ║
║  │ Price: ~$30              │     ║
║  │ [✓ GOT IT!] [EDIT]       │     ║
║  └──────────────────────────┘     ║
║                                    ║
║  [📤 SHARE WITH PARENT]            ║
║                                    ║
╚════════════════════════════════════╝
```

### Style Challenge Mini-Game
```
╔════════════════════════════════════╗
║      STYLE CHALLENGE! 🎨          ║
╠════════════════════════════════════╣
║                                    ║
║  Challenge: Create a BLUE outfit!  ║
║  ⏱️ No time limit • 10 ⭐ points   ║
║                                    ║
║  ┌────────────────────┐            ║
║  │                    │            ║
║  │   👤 Paper Doll    │            ║
║  │                    │            ║
║  │  [Empty - ready    │            ║
║  │   to dress up!]    │            ║
║  │                    │            ║
║  └────────────────────┘            ║
║                                    ║
║  Blue Items Available:             ║
║  ┌───┐ ┌───┐ ┌───┐ ┌───┐          ║
║  │👕│ │👖│ │👟│ │🧢│          ║
║  └───┘ └───┘ └───┘ └───┘          ║
║                                    ║
║  Blue-meter: [██████░░░░] 60%      ║
║  💡 Add more blue to complete!     ║
║                                    ║
║       [HINT] [SUBMIT OUTFIT]       ║
║                                    ║
╚════════════════════════════════════╝
```

## 🔄 User Flows

### First-Time Experience
1. **Welcome screen:** "Build your dream closet!"
2. **Customize avatar:** Skin tone, hair, features
3. **Mini tutorial:** Mix & match demo
4. **Create first outfit** (guided)
5. **Add first real item** to wardrobe (optional)
6. **Complete first style challenge**
7. **Earn first style points**

### Creating an Outfit from Real Clothes
```
Open Wardrobe → Browse or Search Items →
Select Top → Select Bottom → Add Shoes/Accessories →
Preview Together → Name Outfit → Save to Collection →
Optional: Add to Calendar
```

### Adding a Wishlist Item
```
Tap "Add Item" → Take/Upload Photo →
Enter Name and Price → Select Store →
Choose Priority → Save → See in Wishlist
```

### Playing Style Challenge
```
View Daily Challenge → Read Requirements →
Select Clothing Pieces → Meet Criteria →
Submit → Earn Style Points → Unlock Reward
```

## 🎮 App Mechanics

### Mix & Match System
- Clothing pieces snap to paper-doll zones
- Layering order: Underwear → Base → Mid → Outer
- Auto-color-match suggestions (complementary colors)
- "Random outfit" generator for inspiration

### Wardrobe Organization
- Smart tags (color, season, occasion)
- Auto-sort by: Most worn, Least worn, Newest, Favorites
- "Outfit ideas" based on wardrobe items
- Seasonal packing feature (hide winter clothes in summer)

### Style Points Economy
- Earn points from challenges, daily logins, outfit saves
- Spend points on virtual clothing items
- Bonus points for creative combinations
- No loss of points (positive only)

### Wishlist Integration
- Mark item as "purchased" → prompts to add to wardrobe
- Optional link to Kid-Safe Shop Tracker for price tracking
- Share via text/email (parent-approved)

## 🗓️ Development Roadmap

### Phase 1: Mix & Match Base (Weeks 1-3)
- ✅ Paper-doll avatar system
- ✅ Virtual clothing library (50+ items)
- ✅ Drag-and-drop mechanics
- ✅ Save outfit functionality
- ✅ Basic categories (tops, bottoms, shoes)

**Deliverable:** Working dress-up game

### Phase 2: Digital Wardrobe (Weeks 4-5)
- ✅ Photo upload system
- ✅ Item categorization
- ✅ Tagging and search
- ✅ Gallery view
- ✅ Edit/delete items

**Deliverable:** Personal closet catalog

### Phase 3: Outfit Creator (Weeks 6-7)
- ✅ Combine real clothes into outfits
- ✅ Save outfit combinations
- ✅ Name and rate outfits
- ✅ Outfit calendar
- ✅ Wear tracking

**Deliverable:** Outfit planning tool

### Phase 4: Wishlist (Week 8)
- ✅ Add wishlist items
- ✅ Priority system
- ✅ Price tracking
- ✅ Mark as purchased → add to wardrobe
- ✅ Share feature

**Deliverable:** Shopping planner

### Phase 5: Style Games (Weeks 9-10)
- ✅ Daily style challenges
- ✅ Style points system
- ✅ Unlock virtual items
- ✅ Achievement badges
- ✅ Fashion quiz mode

**Deliverable:** Gamification layer

### Phase 6: Polish & Launch (Weeks 11-12)
- ✅ Avatar customization
- ✅ UI/UX polish
- ✅ Animations
- ✅ Parent controls
- ✅ Testing and optimization

**Deliverable:** Launch-ready app

## 🧩 Technical Considerations

### Recommended Tech Stack
- **Framework:** React Native or Flutter
- **Storage:** Local database for items (SQLite)
- **Image handling:** Compression, caching
- **Camera:** Native camera access
- **Graphics:** Canvas/SVG for paper-doll rendering

### Data Schema
```json
{
  "avatar": {
    "skinTone": "medium",
    "hairStyle": "long",
    "hairColor": "brown"
  },
  "virtualWardrobe": [
    {
      "id": "v1",
      "type": "virtual",
      "category": "tops",
      "name": "Rainbow Tee",
      "image": "asset_path",
      "unlocked": true,
      "stylePoints": 0
    }
  ],
  "realWardrobe": [
    {
      "id": "r1",
      "type": "real",
      "category": "tops",
      "name": "Red T-Shirt",
      "photo": "local_path",
      "colors": ["red"],
      "tags": ["casual", "school"],
      "favorite": true,
      "timesWorn": 5
    }
  ],
  "outfits": [
    {
      "id": "o1",
      "name": "School Day",
      "items": ["r1", "r3", "r7"],
      "rating": 5,
      "lastWorn": "2025-11-15",
      "occasion": "school"
    }
  ],
  "wishlist": [
    {
      "id": "w1",
      "name": "Denim Jacket",
      "photo": "path",
      "store": "Target",
      "price": 25.00,
      "priority": "high"
    }
  ],
  "stylePoints": 245
}
```

### Performance
- Image compression (max 500KB per photo)
- Lazy loading for wardrobe galleries
- Smooth paper-doll rendering (60 FPS)
- Fast search and filtering

### Privacy
- All data stored locally
- No internet required
- Parent-controlled sharing
- No social features

## 📊 Success Metrics

- **Engagement:** Kids open app 3-5x per week
- **Creativity:** Average 10+ outfits created per user
- **Wardrobe management:** 50% upload real clothes
- **Wishlist usage:** 70% use wishlist feature
- **Fun factor:** High replay of style challenges

## 🛡️ Safety & Privacy

### Kid Safety
- No social sharing or chat
- No external links
- Parent-approved sharing only
- Age-appropriate content

### Parent Controls
- Wishlist price limits
- Photo moderation
- Sharing approval
- Purchase tracking (if integrated)

## 📝 Development Notes

- Make drag-and-drop intuitive and forgiving
- Ensure color filters work for colorblind users
- Test photo quality on various devices
- Keep virtual clothing diverse and inclusive
- Avoid gendered clothing categories (use neutral terms)
- Make outfit planning practical, not just fantasy

## 🎓 Educational Value

### Skills Developed
- **Personal style:** Understanding preferences
- **Color theory:** What colors work together
- **Organization:** Cataloging possessions
- **Planning:** Outfit preparation for events
- **Decision-making:** Choosing appropriate clothes
- **Creativity:** Mixing and matching

## 🔮 Future Expansion Ideas

- **Seasonal lookbooks:** Curated outfit collections
- **Style personality quiz:** Find your fashion vibe
- **Virtual fashion show:** Create runway looks
- **Outfit challenge mode:** Time-limited styling
- **Weather integration:** Outfit suggestions based on forecast
- **Share outfits locally:** AirDrop to friends (parent-approved)
- **Sustainability tracker:** Most-worn items, mindful shopping

---

**Document Version:** 1.0
**Last Updated:** 2025-11-18
**Status:** Design Complete - Ready for Technical Planning
