# Module Dependency Diagram

Visual representation of the Kid-Safe Apps modular architecture.

## High-Level Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                         APPLICATION LAYER                          │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐              │
│  │ Shop Tracker │ │ Bake Helper  │ │More Apps...  │              │
│  └──────┬───────┘ └──────┬───────┘ └──────┬───────┘              │
└─────────┼──────────────────┼──────────────────┼────────────────────┘
          │                  │                  │
          │         Depend on shared packages   │
          │                  │                  │
┌─────────▼──────────────────▼──────────────────▼────────────────────┐
│                      SHARED PACKAGES LAYER                         │
│                                                                    │
│  ┌─────────────┐     ┌──────────────┐     ┌─────────────┐       │
│  │     UI      │────▶│Design System │     │ Navigation  │       │
│  │  Components │     │   (Tokens)   │     │   Config    │       │
│  └──────┬──────┘     └──────────────┘     └──────┬──────┘       │
│         │                                          │              │
│  ┌──────▼──────────────────────────────────────┬──▼──────────┐  │
│  │              Storage Layer                  │   Auth      │  │
│  │  ┌────────────────┐  ┌──────────────────┐  │  (PIN/Bio)  │  │
│  │  │ AsyncStorage   │  │     SQLite       │  └─────────────┘  │
│  │  └────────────────┘  └──────────────────┘                    │
│  └────────────────────┬──────────────────────────────────────┘  │
│                       │                                          │
│  ┌────────────────────▼────────────┐    ┌──────────────────┐   │
│  │        Utilities                │    │      Hooks       │   │
│  │  • Date • Currency • Validation │    │  • useDebounce   │   │
│  └─────────────────────────────────┘    │  • useInterval   │   │
│                                          └──────────────────┘   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                  TypeScript Types                        │  │
│  │  Shared type definitions for all packages and apps      │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────┘
           │
           │  Uses
           ▼
┌────────────────────────────────────────────────────────────────────┐
│                    EXTERNAL DEPENDENCIES                           │
│  React • React Native • Expo • Redux • Firebase • etc.            │
└────────────────────────────────────────────────────────────────────┘
```

## Package Dependency Flow

```
                    ┌─────────────────┐
                    │   @kid-safe/    │
                    │      types      │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │   @kid-safe/    │
                    │design-system    │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
     ┌────────▼────────┐    │    ┌─────────▼────────┐
     │   @kid-safe/    │    │    │   @kid-safe/     │
     │      utils      │    │    │   navigation     │
     └────────┬────────┘    │    └──────────────────┘
              │             │
     ┌────────▼─────────────▼────┐
     │      @kid-safe/            │
     │       storage              │
     └────────┬───────────────────┘
              │
     ┌────────▼────────┐
     │   @kid-safe/    │
     │      auth       │
     └────────┬────────┘
              │
     ┌────────▼────────┐
     │   @kid-safe/    │
     │       ui        │
     └────────┬────────┘
              │
     ┌────────▼────────┐
     │   @kid-safe/    │
     │      hooks      │
     └────────┬────────┘
              │
      ┌───────▼────────┐
      │  Applications  │
      │  (5 apps use   │
      │  all packages) │
      └────────────────┘
```

## App-Specific Module Structure

Each app follows this internal structure:

```
apps/shop-tracker/
│
├── src/
│   │
│   ├── screens/             ← Screen components
│   │   ├── Dashboard/
│   │   ├── Wishlist/
│   │   └── Settings/
│   │
│   ├── components/          ← App-specific components
│   │   ├── WishlistCard/
│   │   └── GoalProgress/
│   │
│   ├── navigation/          ← Navigation setup
│   │   └── RootNavigator
│   │
│   ├── store/               ← Redux store
│   │   ├── slices/
│   │   │   ├── wishlistSlice
│   │   │   └── settingsSlice
│   │   └── store.ts
│   │
│   ├── services/            ← Business logic
│   │   ├── wishlistService
│   │   └── storageService
│   │
│   ├── hooks/               ← Custom hooks
│   │   └── useWishlist
│   │
│   └── App.tsx              ← Entry point
│
└── Uses shared packages:
    ├── @kid-safe/ui
    ├── @kid-safe/design-system
    ├── @kid-safe/storage
    ├── @kid-safe/navigation
    ├── @kid-safe/utils
    └── @kid-safe/types
```

## Data Flow Example

**User Action: "Add Item to Wishlist"**

```
┌────────────┐
│   User     │
│  (Screen)  │
└─────┬──────┘
      │ 1. Button press
      ▼
┌──────────────────┐
│  WishlistCard    │  ← From @kid-safe/ui
│  Component       │
└─────┬────────────┘
      │ 2. Calls handler
      ▼
┌──────────────────┐
│  useWishlist()   │  ← Custom hook in app
│  Hook            │
└─────┬────────────┘
      │ 3. Dispatches action
      ▼
┌──────────────────┐
│  Redux Store     │  ← In app/store/
│  (wishlistSlice) │
└─────┬────────────┘
      │ 4. Reducer updates state
      │ 5. Triggers persistence
      ▼
┌──────────────────┐
│ AsyncStorage     │  ← From @kid-safe/storage
│  Manager         │
└─────┬────────────┘
      │ 6. Saves to device
      ▼
┌──────────────────┐
│  Device Storage  │
│  (Persistent)    │
└──────────────────┘
```

## Shared Component Usage

**Example: Button Component**

```
┌────────────────────────────────┐
│  @kid-safe/design-system       │
│  ┌──────────────────────────┐  │
│  │  colors, fonts, spacing  │  │
│  └───────────┬──────────────┘  │
└──────────────┼─────────────────┘
               │ provides theme
               ▼
┌────────────────────────────────┐
│      @kid-safe/ui              │
│  ┌──────────────────────────┐  │
│  │   Button Component       │  │
│  │   • Styled with theme    │  │
│  │   • Accessible           │  │
│  │   • Tested               │  │
│  └───────────┬──────────────┘  │
└──────────────┼─────────────────┘
               │ used by
               ▼
┌────────────────────────────────┐
│     All 5 Applications         │
│  ┌──────────────────────────┐  │
│  │ import { Button }        │  │
│  │  from '@kid-safe/ui'     │  │
│  │                          │  │
│  │ <Button onPress={...}>   │  │
│  │   Save                   │  │
│  │ </Button>                │  │
│  └──────────────────────────┘  │
└────────────────────────────────┘
```

## Build Order

Build packages in dependency order (bottom-up):

```
Step 1: Build foundation
├── @kid-safe/types
└── @kid-safe/design-system

Step 2: Build utilities
├── @kid-safe/utils
└── @kid-safe/hooks

Step 3: Build core services
├── @kid-safe/storage
└── @kid-safe/auth

Step 4: Build UI layer
├── @kid-safe/navigation
└── @kid-safe/ui

Step 5: Build applications
├── apps/shop-tracker
├── apps/bake-helper
├── apps/closet-builder
├── apps/mini-missions
└── apps/cookie-tycoon
```

## Module Communication

### Direct Dependencies (Allowed ✅)

```
App → Shared Package       ✅
Shared Package → Shared Package  ✅ (if needed)
```

### Circular Dependencies (Forbidden ❌)

```
Package A → Package B → Package A   ❌
App A → App B                       ❌
Shared Package → App                ❌
```

## File Size Targets

Keep modules focused and small:

```
Small Package:
└── @kid-safe/utils
    └── src/
        ├── date/        (~50 lines each file)
        ├── currency/
        └── validation/
    Total: < 500 lines

Medium Package:
└── @kid-safe/ui
    └── src/
        ├── components/  (~100-200 lines per component)
        └── layouts/
    Total: < 2000 lines

Large Package:
└── @kid-safe/storage
    └── src/
        ├── async/       (~200 lines)
        ├── sqlite/      (~500 lines)
        └── migrations/
    Total: < 3000 lines
```

## Testing Pyramid

```
                    ┌──────┐
                    │  E2E │  ← Few, expensive (full user flows)
                    └──────┘
                 ┌────────────┐
                 │Integration │  ← Some (package interactions)
                 └────────────┘
            ┌────────────────────┐
            │    Unit Tests      │  ← Many, fast (pure functions)
            └────────────────────┘

Distribution:
- Unit Tests: 70% (every utility, every component)
- Integration: 25% (storage, auth, complex flows)
- E2E: 5% (critical user paths per app)
```

## Summary

### Module Count: 13 packages + 5 apps

**Shared Packages (8):**
1. @kid-safe/ui
2. @kid-safe/design-system
3. @kid-safe/navigation
4. @kid-safe/storage
5. @kid-safe/auth
6. @kid-safe/utils
7. @kid-safe/hooks
8. @kid-safe/types

**Applications (5):**
1. shop-tracker
2. bake-helper
3. closet-builder
4. mini-missions
5. cookie-tycoon

**Benefits:**
✅ Code reuse: ~60% of code shared
✅ Consistent UX across all apps
✅ Easier testing (isolated modules)
✅ Faster development (build once, use everywhere)
✅ Maintainable (clear boundaries)

---

**Quick Start:**
```bash
./scripts/setup-monorepo.sh
cd kid-safe-apps
npm install
npm run build
```

**See:** `docs/technical/MODULAR-ARCHITECTURE.md` for full details
