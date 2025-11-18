# Technical Architecture - Kid-Safe Apps Suite

**Document Version:** 1.0
**Last Updated:** 2025-11-18
**Status:** Architecture Design

---

## 📋 Table of Contents

1. [Executive Summary](#executive-summary)
2. [Technology Stack](#technology-stack)
3. [Architecture Overview](#architecture-overview)
4. [Database Design](#database-design)
5. [Security & Privacy](#security--privacy)
6. [Development Environment](#development-environment)
7. [Deployment Strategy](#deployment-strategy)
8. [Performance Requirements](#performance-requirements)
9. [Testing Strategy](#testing-strategy)
10. [Timeline & Resources](#timeline--resources)

---

## Executive Summary

This document outlines the technical architecture for developing all five Kid-Safe Apps as native mobile applications (iOS and Android). The suite will use React Native for cross-platform development, ensuring code reusability, faster development, and consistent user experience.

**Key Decisions:**
- **Framework:** React Native + Expo
- **State Management:** Redux Toolkit + AsyncStorage
- **Database:** Local-first with SQLite (+ optional cloud sync)
- **Backend:** Firebase (for parent features, optional sync)
- **Language:** TypeScript for type safety

---

## Technology Stack

### Core Framework

**React Native + Expo**

**Why:**
- ✅ Single codebase for iOS and Android
- ✅ Fast development with hot reload
- ✅ Large ecosystem and community
- ✅ Native performance
- ✅ Expo provides easy access to device features (camera, storage)
- ✅ Over-the-air updates

**Alternatives Considered:**
- Flutter: Great performance but Dart has smaller ecosystem
- Native (Swift/Kotlin): Best performance but 2x development time

### Programming Language

**TypeScript**

**Why:**
- ✅ Type safety reduces bugs (critical for kid apps)
- ✅ Better IDE support and autocomplete
- ✅ Easier refactoring as apps grow
- ✅ Industry standard for React Native

### State Management

**Redux Toolkit + Redux Persist**

**Why:**
- ✅ Predictable state management
- ✅ Redux Persist for automatic local storage
- ✅ Time-travel debugging
- ✅ Scales well for complex apps

**Alternatives:**
- MobX: Simpler but less structured
- Context API: Too basic for these apps
- Zustand: Good alternative but smaller ecosystem

### Local Database

**SQLite (via react-native-sqlite-storage)**

**Why:**
- ✅ Relational data (great for transactions, inventory, missions)
- ✅ Fast queries
- ✅ Battle-tested and stable
- ✅ Works offline by default

**For Simple Apps (Shop Tracker, Closet Builder):**
- AsyncStorage + Redux Persist (simpler, fewer dependencies)

**For Complex Apps (Bake Helper, Mini Missions, Cookie Tycoon):**
- SQLite for relational data and complex queries

### Backend (Optional/Parent Features)

**Firebase**

**Services Used:**
- **Firestore:** Cloud data sync (parent dashboard access)
- **Authentication:** Email/password for parent accounts
- **Storage:** Photo uploads (closet items, mission proof)
- **Cloud Functions:** Server-side logic (purchase approvals)

**Why:**
- ✅ Free tier sufficient for MVP
- ✅ Real-time sync
- ✅ Built-in authentication
- ✅ Easy to integrate with React Native

**Alternative:** Supabase (PostgreSQL-based, good alternative)

### UI Component Library

**React Native Paper**

**Why:**
- ✅ Material Design components
- ✅ Highly customizable themes
- ✅ Accessible by default
- ✅ Consistent look and feel

**Plus:** Custom components for kid-friendly design

### Forms & Validation

**React Hook Form + Zod**

**Why:**
- ✅ Type-safe form validation
- ✅ Great performance (minimal re-renders)
- ✅ Simple API

### Navigation

**React Navigation v6**

**Why:**
- ✅ Standard for React Native
- ✅ Native-like transitions
- ✅ Deep linking support
- ✅ TypeScript support

### Charts & Data Visualization

**Victory Native**

**Why:**
- ✅ Built for React Native
- ✅ Declarative API
- ✅ Customizable and animated charts

**Used In:**
- Bake & Sell Helper (profit charts)
- Mini Missions (progress tracking)

### Image Handling

**Expo Image Picker + Expo Image Manipulator**

**Why:**
- ✅ Easy camera and gallery access
- ✅ Built-in compression
- ✅ Resize/crop utilities

### Testing

**Jest + React Native Testing Library**

**Why:**
- ✅ Unit and integration tests
- ✅ Built into React Native
- ✅ Great TypeScript support

**E2E Testing:** Detox (future phase)

---

## Architecture Overview

### Overall Architecture Pattern

**Local-First with Optional Cloud Sync**

```
┌─────────────────────────────────────────┐
│           React Native App              │
│  ┌───────────────────────────────────┐  │
│  │   Presentation Layer (Views)      │  │
│  │   - Screens                       │  │
│  │   - Components                    │  │
│  └───────────────┬───────────────────┘  │
│                  │                       │
│  ┌───────────────▼───────────────────┐  │
│  │   Business Logic Layer            │  │
│  │   - Redux Store                   │  │
│  │   - Reducers/Actions              │  │
│  │   - Selectors                     │  │
│  └───────────────┬───────────────────┘  │
│                  │                       │
│  ┌───────────────▼───────────────────┐  │
│  │   Data Layer                      │  │
│  │   - AsyncStorage (simple apps)    │  │
│  │   - SQLite (complex apps)         │  │
│  │   - API Services                  │  │
│  └───────────────┬───────────────────┘  │
└──────────────────┼───────────────────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │  Firebase (Optional)  │
        │  - Firestore         │
        │  - Authentication    │
        │  - Storage           │
        └──────────────────────┘
```

### App-Specific Architecture

#### Simple Apps (Shop Tracker, Closet Builder)
- Redux + AsyncStorage
- No SQLite needed
- Simple JSON data structures

#### Complex Apps (Bake Helper, Mini Missions, Cookie Tycoon)
- Redux + SQLite
- Relational data models
- Complex queries and aggregations

### Folder Structure

```
kid-safe-apps/
├── apps/
│   ├── shop-tracker/
│   ├── bake-helper/
│   ├── closet-builder/
│   ├── mini-missions/
│   └── cookie-tycoon/
├── packages/
│   ├── ui-components/        # Shared components
│   ├── design-system/        # Theming, colors, fonts
│   ├── auth/                 # Parent authentication
│   ├── storage/              # Data persistence utilities
│   └── utils/                # Common utilities
├── App.tsx                   # Main app (app selector)
└── package.json
```

**Strategy:** Monorepo with separate apps but shared packages

---

## Database Design

### 1. Kid-Safe Shop Tracker

**Storage:** AsyncStorage (JSON)

```typescript
interface ShopTrackerState {
  balance: number;
  weeklyAllowance: number;
  allowanceDay: number; // 0-6 (Sun-Sat)
  wishlist: WishlistItem[];
  transactions: Transaction[];
  settings: Settings;
}

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  store?: string;
  category: 'toys' | 'clothes' | 'books' | 'other';
  photo?: string; // base64 or file path
  dateAdded: string; // ISO date
  priority: number;
}

interface Transaction {
  id: string;
  date: string;
  type: 'allowance' | 'gift' | 'chore' | 'purchase' | 'other';
  amount: number; // positive or negative
  note?: string;
  relatedItemId?: string; // for purchases
}

interface Settings {
  lastAllowanceDate: string;
  parentPIN?: string;
  approvalThreshold: number;
}
```

---

### 2. Bake & Sell Helper

**Storage:** SQLite

```sql
-- Recipes (pre-loaded)
CREATE TABLE recipes (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  yield INTEGER NOT NULL,
  unit TEXT NOT NULL,
  ingredients TEXT NOT NULL, -- JSON array
  cost_per_batch REAL NOT NULL
);

-- Sales
CREATE TABLE sales (
  id TEXT PRIMARY KEY,
  date TEXT NOT NULL,
  recipe_id TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  price_per_unit REAL NOT NULL,
  total REAL NOT NULL,
  customer TEXT,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

-- Expenses
CREATE TABLE expenses (
  id TEXT PRIMARY KEY,
  date TEXT NOT NULL,
  category TEXT NOT NULL,
  item TEXT NOT NULL,
  cost REAL NOT NULL,
  receipt_photo TEXT
);

-- Shopping List
CREATE TABLE shopping_list (
  id TEXT PRIMARY KEY,
  text TEXT NOT NULL,
  checked INTEGER DEFAULT 0,
  from_recipe TEXT
);

-- Indexes for performance
CREATE INDEX idx_sales_date ON sales(date);
CREATE INDEX idx_expenses_date ON expenses(date);
```

---

### 3. My Closet Builder

**Storage:** AsyncStorage (JSON)

```typescript
interface ClosetState {
  avatar: Avatar;
  virtualWardrobe: VirtualItem[];
  realWardrobe: RealItem[];
  outfits: Outfit[];
  wishlist: WishlistItem[];
  stylePoints: number;
}

interface Avatar {
  skinTone: string;
  hairStyle: string;
  hairColor: string;
}

interface VirtualItem {
  id: string;
  type: 'virtual';
  category: 'tops' | 'bottoms' | 'shoes' | 'accessories';
  name: string;
  image: string; // asset path or emoji
  unlocked: boolean;
  stylePointsCost: number;
}

interface RealItem {
  id: string;
  type: 'real';
  category: 'tops' | 'bottoms' | 'dresses' | 'shoes' | 'accessories';
  name: string;
  photo: string; // base64 or file path
  colors: string[];
  tags: string[]; // 'casual', 'school', 'fancy', etc.
  favorite: boolean;
  timesWorn: number;
  dateAdded: string;
}

interface Outfit {
  id: string;
  name: string;
  items: string[]; // IDs of virtual or real items
  rating: number; // 1-5
  lastWorn?: string;
  occasion?: string;
}
```

---

### 4. Mini Missions App

**Storage:** SQLite

```sql
-- Children (support multiple kids)
CREATE TABLE children (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  avatar TEXT,
  coins INTEGER DEFAULT 0,
  streak INTEGER DEFAULT 0,
  last_active_date TEXT
);

-- Missions
CREATE TABLE missions (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  coins INTEGER NOT NULL,
  difficulty TEXT NOT NULL, -- 'easy', 'medium', 'hard'
  repeat TEXT NOT NULL, -- 'once', 'daily', 'weekly'
  time_estimate INTEGER, -- minutes
  require_photo INTEGER DEFAULT 0,
  active INTEGER DEFAULT 1,
  created_at TEXT NOT NULL
);

-- Completions
CREATE TABLE completions (
  id TEXT PRIMARY KEY,
  mission_id TEXT NOT NULL,
  child_id TEXT NOT NULL,
  completed_at TEXT NOT NULL,
  status TEXT NOT NULL, -- 'pending', 'approved', 'denied'
  photo TEXT,
  note TEXT,
  approved_at TEXT,
  FOREIGN KEY (mission_id) REFERENCES missions(id),
  FOREIGN KEY (child_id) REFERENCES children(id)
);

-- Rewards
CREATE TABLE rewards (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'digital', 'real'
  cost INTEGER NOT NULL,
  category TEXT
);

-- Redemptions
CREATE TABLE redemptions (
  id TEXT PRIMARY KEY,
  child_id TEXT NOT NULL,
  reward_id TEXT NOT NULL,
  redeemed_at TEXT NOT NULL,
  fulfilled INTEGER DEFAULT 0,
  FOREIGN KEY (child_id) REFERENCES children(id),
  FOREIGN KEY (reward_id) REFERENCES rewards(id)
);

-- Indexes
CREATE INDEX idx_completions_child ON completions(child_id);
CREATE INDEX idx_completions_status ON completions(status);
CREATE INDEX idx_completions_date ON completions(completed_at);
```

---

### 5. Cookie Tycoon Mini

**Storage:** SQLite

```sql
-- Game State (single row)
CREATE TABLE game_state (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  coins INTEGER DEFAULT 50,
  level INTEGER DEFAULT 1,
  xp INTEGER DEFAULT 0,
  created_at TEXT NOT NULL,
  last_played TEXT NOT NULL
);

-- Recipes (pre-loaded)
CREATE TABLE recipes (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  emoji TEXT NOT NULL,
  base_time INTEGER NOT NULL, -- milliseconds
  xp_reward INTEGER NOT NULL,
  unlock_level INTEGER DEFAULT 1
);

-- Inventory
CREATE TABLE inventory (
  recipe_id TEXT PRIMARY KEY,
  quantity INTEGER DEFAULT 0,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

-- Upgrades
CREATE TABLE upgrades (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  cost INTEGER NOT NULL,
  effect_type TEXT NOT NULL, -- 'speed', 'batch_size', 'price'
  effect_value REAL NOT NULL,
  owned INTEGER DEFAULT 0
);

-- Sales History (for analytics)
CREATE TABLE sales (
  id TEXT PRIMARY KEY,
  recipe_id TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  price INTEGER NOT NULL,
  sold_at TEXT NOT NULL,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

-- Achievements
CREATE TABLE achievements (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  requirement_type TEXT NOT NULL,
  requirement_value INTEGER NOT NULL,
  unlocked INTEGER DEFAULT 0,
  unlocked_at TEXT
);

-- Indexes
CREATE INDEX idx_sales_date ON sales(sold_at);
```

---

## Security & Privacy

### Data Privacy

**Local-First Strategy:**
- All apps work 100% offline
- Data stored locally on device
- No cloud sync required for core functionality
- Optional parent dashboard requires opt-in

**COPPA Compliance:**
- No collection of personal information from children under 13
- Parent verification for any online features
- No behavioral tracking or analytics
- No third-party ads or data sharing

### Parent Authentication

**PIN-based (Simple Apps):**
- 4-digit PIN stored as hashed value
- Used for: Settings, approvals, deletions

**Account-based (Advanced Features):**
- Email/password via Firebase Auth
- Used for: Multi-device sync, parent dashboard

### Data Encryption

**At Rest:**
- SQLite encryption via SQLCipher (for sensitive data)
- AsyncStorage data encrypted with react-native-keychain

**In Transit:**
- HTTPS/TLS for all Firebase communication
- Certificate pinning for production

### App Permissions

**Required:**
- Storage (local data)
- Camera (photo features - optional)

**NOT Required:**
- Location
- Contacts
- Microphone
- Phone state
- SMS

---

## Development Environment

### Prerequisites

```bash
# Node.js 18+
node --version

# npm or yarn
npm --version

# Expo CLI
npm install -g expo-cli

# iOS (Mac only)
xcode-select --install

# Android
# Install Android Studio + Android SDK
```

### Project Setup

```bash
# Create monorepo
npx create-expo-app kid-safe-apps --template expo-template-blank-typescript

cd kid-safe-apps

# Install dependencies
npm install @reduxjs/toolkit react-redux redux-persist
npm install react-native-paper react-native-vector-icons
npm install react-navigation @react-navigation/native @react-navigation/stack
npm install expo-sqlite expo-image-picker expo-file-system
npm install react-hook-form zod @hookform/resolvers
npm install victory-native
npm install firebase

# Dev dependencies
npm install -D @types/react @types/react-native
npm install -D jest @testing-library/react-native
npm install -D eslint prettier
```

### Environment Configuration

```bash
# .env.development
EXPO_PUBLIC_ENV=development
EXPO_PUBLIC_FIREBASE_API_KEY=xxx
EXPO_PUBLIC_FIREBASE_PROJECT_ID=xxx

# .env.production
EXPO_PUBLIC_ENV=production
# ... production keys
```

---

## Deployment Strategy

### Development Phase

**Week 1-2:** Setup + App 1 (Shop Tracker)
**Week 3-4:** App 2 (Bake & Sell Helper)
**Week 5-6:** App 3 (My Closet Builder)
**Week 7-8:** App 4 (Mini Missions)
**Week 9-11:** App 5 (Cookie Tycoon)
**Week 12:** Testing, polish, bug fixes

### Beta Testing

**TestFlight (iOS):**
- Invite 25-100 beta testers (families)
- 2-week beta period
- Collect feedback

**Google Play Internal Testing (Android):**
- Similar 2-week beta
- Iterate on feedback

### Production Deployment

**App Stores:**
- Apple App Store
- Google Play Store

**Distribution Options:**
1. **5 Separate Apps** (Recommended)
   - ✅ Users download only what they want
   - ✅ Smaller file sizes
   - ✅ Easier to market individually
   - ✅ Can price differently

2. **1 Suite App with 5 Mini-Apps**
   - ✅ Single download
   - ✅ Shared authentication
   - ✅ Cross-app features possible
   - ❌ Larger file size
   - ❌ More complex to navigate

**Recommendation:** Start with 5 separate apps

### Update Strategy

**Expo OTA Updates:**
- Bug fixes and minor updates via OTA
- No app store review needed
- Instant deployment

**Major Updates:**
- New features through app store updates
- Follow semantic versioning (1.0.0 → 1.1.0)

---

## Performance Requirements

### Load Time
- **Target:** < 2 seconds to app ready
- **Strategy:** Lazy load screens, optimize images

### Frame Rate
- **Target:** Consistent 60 FPS
- **Critical:** Animations, scrolling, game (Cookie Tycoon)

### Memory Usage
- **Target:** < 150 MB per app
- **Strategy:** Efficient image caching, cleanup on unmount

### Battery Usage
- **Target:** Minimal impact (< 5% per hour of use)
- **Strategy:** Optimize timers, limit background processes

### App Size
- **Target:** < 50 MB per app
- **Strategy:** Code splitting, asset optimization

---

## Testing Strategy

### Unit Tests
- All business logic (Redux reducers, selectors)
- Utility functions
- **Target:** 80% code coverage

### Integration Tests
- Complete user flows
- Database operations
- **Tools:** React Native Testing Library

### E2E Tests (Future)
- Critical paths per app
- **Tools:** Detox

### User Testing
- 5-10 kids (ages 8-12) per app
- 2-3 parent testers per app
- Observe usage, gather feedback

---

## Timeline & Resources

### Development Timeline (12 Weeks)

| Week | Focus | Deliverable |
|------|-------|-------------|
| 1-2 | Setup + App 1 | Shop Tracker working |
| 3-4 | App 2 | Bake Helper working |
| 5-6 | App 3 | Closet Builder working |
| 7-8 | App 4 | Mini Missions working |
| 9-11 | App 5 | Cookie Tycoon working |
| 12 | Polish | All apps ready for beta |

### Team Requirements

**Minimum:**
- 1 React Native Developer (full-time, 12 weeks)
- 1 Designer (part-time, weeks 1-4)
- 1 QA Tester (part-time, weeks 8-12)

**Ideal:**
- 2 React Native Developers
- 1 UI/UX Designer
- 1 QA Tester
- 1 Project Manager

### Cost Estimate (Development Only)

**Solo Developer:** ~$15,000-$25,000 (12 weeks @ $1,250-$2,000/week)
**Small Team:** ~$40,000-$60,000 (12 weeks)

**Plus:**
- Design: $5,000-$10,000
- App Store fees: $99/year (Apple) + $25 one-time (Google)
- Firebase: Free tier initially

---

## Next Steps

1. ✅ Architecture defined
2. ⏭️ Business plan & monetization
3. ⏭️ UI/UX design system
4. ⏭️ Development environment setup
5. ⏭️ Start building App 1

---

**Document Status:** APPROVED
**Ready for:** Business Planning Phase
