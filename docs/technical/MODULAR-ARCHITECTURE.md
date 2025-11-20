# Modular Architecture - Kid-Safe Apps Suite

**Document Version:** 1.0
**Last Updated:** 2025-11-18
**Architecture Pattern:** Modular Monorepo

---

## 📋 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Monorepo Structure](#monorepo-structure)
3. [Shared Modules](#shared-modules)
4. [App-Specific Modules](#app-specific-modules)
5. [Module Interfaces](#module-interfaces)
6. [Dependency Graph](#dependency-graph)
7. [Code Organization](#code-organization)
8. [Import Patterns](#import-patterns)
9. [Testing Strategy](#testing-strategy)
10. [Build & Deployment](#build--deployment)

---

## Architecture Overview

### Philosophy

**Principle:** DRY (Don't Repeat Yourself) with clear boundaries

**Goals:**
- ✅ **Maximum code reuse** across all 5 apps
- ✅ **Independent deployability** of each app
- ✅ **Clear module boundaries** - easy to understand what goes where
- ✅ **Testable** - each module can be tested independently
- ✅ **Scalable** - easy to add new apps or features

### Key Concepts

**Monorepo:** One repository containing all apps and shared code

**Packages:** Reusable modules that apps depend on

**Workspaces:** npm/yarn feature for managing multiple packages

---

## Monorepo Structure

```
kid-safe-apps/
├── apps/                           # Individual applications
│   ├── shop-tracker/
│   ├── bake-helper/
│   ├── closet-builder/
│   ├── mini-missions/
│   └── cookie-tycoon/
│
├── packages/                       # Shared modules
│   ├── ui/                        # UI components
│   ├── design-system/             # Design tokens
│   ├── navigation/                # Navigation setup
│   ├── storage/                   # Data persistence
│   ├── auth/                      # Parent authentication
│   ├── analytics/                 # Analytics (optional)
│   ├── utils/                     # Utility functions
│   ├── hooks/                     # Shared React hooks
│   └── types/                     # TypeScript definitions
│
├── config/                        # Configuration files
│   ├── eslint/
│   ├── typescript/
│   └── jest/
│
├── scripts/                       # Build/deploy scripts
│   ├── build.js
│   ├── test.js
│   └── deploy.js
│
├── package.json                   # Root package.json
├── tsconfig.json                  # Root TypeScript config
└── README.md
```

---

## Shared Modules

### 1. `@kid-safe/ui`

**Purpose:** Reusable UI components used across all apps

**Location:** `packages/ui/`

**Structure:**
```
packages/ui/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.styles.ts
│   │   │   └── index.ts
│   │   ├── Card/
│   │   ├── Input/
│   │   ├── Modal/
│   │   ├── ProgressBar/
│   │   └── index.ts
│   ├── layouts/
│   │   ├── Screen.tsx
│   │   ├── Container.tsx
│   │   └── index.ts
│   └── index.ts
├── package.json
└── README.md
```

**Exports:**
```typescript
// packages/ui/src/index.ts
export { Button } from './components/Button';
export { Card } from './components/Card';
export { Input } from './components/Input';
export { Modal } from './components/Modal';
export { ProgressBar } from './components/ProgressBar';
export { Screen, Container } from './layouts';
```

**Usage in Apps:**
```typescript
// apps/shop-tracker/src/screens/Dashboard.tsx
import { Button, Card, Screen } from '@kid-safe/ui';
```

**Dependencies:**
- React Native
- React Native Paper
- @kid-safe/design-system (for theming)

---

### 2. `@kid-safe/design-system`

**Purpose:** Design tokens (colors, typography, spacing)

**Location:** `packages/design-system/`

**Structure:**
```
packages/design-system/
├── src/
│   ├── colors/
│   │   ├── brand.ts
│   │   ├── semantic.ts
│   │   ├── app-themes.ts
│   │   └── index.ts
│   ├── typography/
│   │   ├── fonts.ts
│   │   ├── scale.ts
│   │   └── index.ts
│   ├── spacing/
│   │   ├── scale.ts
│   │   └── index.ts
│   ├── tokens.ts              # All tokens combined
│   ├── themes/                # Theme providers
│   │   ├── ThemeProvider.tsx
│   │   └── useTheme.ts
│   └── index.ts
├── package.json
└── README.md
```

**Exports:**
```typescript
// packages/design-system/src/index.ts
export * from './colors';
export * from './typography';
export * from './spacing';
export { tokens } from './tokens';
export { ThemeProvider, useTheme } from './themes';
```

**Example Token File:**
```typescript
// packages/design-system/src/colors/app-themes.ts
export const appThemes = {
  'shop-tracker': {
    primary: '#20c997',
    secondary: '#17a2b8',
    accent: '#FFD700',
    background: 'linear-gradient(135deg, #20c997, #17a2b8)',
  },
  'bake-helper': {
    primary: '#f5576c',
    secondary: '#f093fb',
    accent: '#ffeaa7',
    background: 'linear-gradient(135deg, #f093fb, #f5576c)',
  },
  // ... other apps
};
```

**Usage:**
```typescript
// apps/shop-tracker/App.tsx
import { ThemeProvider, appThemes } from '@kid-safe/design-system';

function App() {
  return (
    <ThemeProvider theme={appThemes['shop-tracker']}>
      {/* app content */}
    </ThemeProvider>
  );
}
```

**Dependencies:**
- None (pure JavaScript/TypeScript)

---

### 3. `@kid-safe/storage`

**Purpose:** Data persistence layer (SQLite, AsyncStorage)

**Location:** `packages/storage/`

**Structure:**
```
packages/storage/
├── src/
│   ├── async/
│   │   ├── AsyncStorageManager.ts
│   │   ├── AsyncStorageManager.test.ts
│   │   └── index.ts
│   ├── sqlite/
│   │   ├── SQLiteManager.ts
│   │   ├── SQLiteManager.test.ts
│   │   ├── migrations/
│   │   │   ├── migration-runner.ts
│   │   │   └── migrations.ts
│   │   └── index.ts
│   ├── types/
│   │   └── index.ts
│   └── index.ts
├── package.json
└── README.md
```

**Exports:**
```typescript
// packages/storage/src/index.ts
export { AsyncStorageManager } from './async';
export { SQLiteManager } from './sqlite';
export * from './types';
```

**Interface:**
```typescript
// packages/storage/src/types/index.ts
export interface StorageManager {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T): Promise<void>;
  remove(key: string): Promise<void>;
  clear(): Promise<void>;
}

export interface DatabaseManager {
  query<T>(sql: string, params?: any[]): Promise<T[]>;
  execute(sql: string, params?: any[]): Promise<void>;
  transaction(callback: () => Promise<void>): Promise<void>;
}
```

**Usage:**
```typescript
// apps/shop-tracker/src/services/storage.ts
import { AsyncStorageManager } from '@kid-safe/storage';

const storage = new AsyncStorageManager();

export const saveWishlist = async (wishlist: WishlistItem[]) => {
  await storage.set('wishlist', wishlist);
};
```

**Dependencies:**
- @react-native-async-storage/async-storage
- expo-sqlite (for SQLite apps)

---

### 4. `@kid-safe/navigation`

**Purpose:** Navigation configuration and utilities

**Location:** `packages/navigation/`

**Structure:**
```
packages/navigation/
├── src/
│   ├── types/
│   │   └── navigation.types.ts
│   ├── components/
│   │   ├── TabBar.tsx
│   │   ├── Header.tsx
│   │   └── index.ts
│   ├── utils/
│   │   ├── linking.ts
│   │   └── index.ts
│   └── index.ts
├── package.json
└── README.md
```

**Exports:**
```typescript
// packages/navigation/src/index.ts
export * from './types/navigation.types';
export { TabBar, Header } from './components';
export { createLinkingConfig } from './utils';
```

**Type Definitions:**
```typescript
// packages/navigation/src/types/navigation.types.ts
export type RootStackParamList = {
  Home: undefined;
  Details: { id: string };
  Settings: undefined;
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;
```

**Dependencies:**
- @react-navigation/native
- @react-navigation/stack
- @react-navigation/bottom-tabs

---

### 5. `@kid-safe/auth`

**Purpose:** Parent authentication (PIN, biometric, Firebase)

**Location:** `packages/auth/`

**Structure:**
```
packages/auth/
├── src/
│   ├── pin/
│   │   ├── PINAuth.ts
│   │   ├── PINAuth.test.ts
│   │   └── index.ts
│   ├── biometric/
│   │   ├── BiometricAuth.ts
│   │   └── index.ts
│   ├── firebase/
│   │   ├── FirebaseAuth.ts
│   │   └── index.ts
│   ├── components/
│   │   ├── PINModal.tsx
│   │   └── index.ts
│   ├── types/
│   │   └── index.ts
│   └── index.ts
├── package.json
└── README.md
```

**Interface:**
```typescript
// packages/auth/src/types/index.ts
export interface AuthProvider {
  authenticate(): Promise<boolean>;
  isAuthenticated(): Promise<boolean>;
  logout(): Promise<void>;
}
```

**Usage:**
```typescript
// apps/mini-missions/src/screens/ParentDashboard.tsx
import { usePINAuth } from '@kid-safe/auth';

function ParentDashboard() {
  const { authenticate, isAuthenticated } = usePINAuth();

  useEffect(() => {
    if (!isAuthenticated()) {
      authenticate();
    }
  }, []);
}
```

**Dependencies:**
- expo-local-authentication (biometric)
- firebase (optional)
- @kid-safe/storage (for PIN storage)

---

### 6. `@kid-safe/utils`

**Purpose:** Common utility functions

**Location:** `packages/utils/`

**Structure:**
```
packages/utils/
├── src/
│   ├── date/
│   │   ├── formatDate.ts
│   │   ├── getDaysUntil.ts
│   │   └── index.ts
│   ├── currency/
│   │   ├── formatCurrency.ts
│   │   └── index.ts
│   ├── validation/
│   │   ├── validators.ts
│   │   └── index.ts
│   ├── calculation/
│   │   ├── percentage.ts
│   │   └── index.ts
│   └── index.ts
├── package.json
└── README.md
```

**Exports:**
```typescript
// packages/utils/src/index.ts
export * from './date';
export * from './currency';
export * from './validation';
export * from './calculation';
```

**Example Utility:**
```typescript
// packages/utils/src/currency/formatCurrency.ts
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
};
```

**Dependencies:**
- None (pure functions)

---

### 7. `@kid-safe/hooks`

**Purpose:** Shared React hooks

**Location:** `packages/hooks/`

**Structure:**
```
packages/hooks/
├── src/
│   ├── usePersistedState.ts
│   ├── useDebounce.ts
│   ├── useInterval.ts
│   ├── useCountdown.ts
│   └── index.ts
├── package.json
└── README.md
```

**Example Hook:**
```typescript
// packages/hooks/src/usePersistedState.ts
import { useState, useEffect } from 'react';
import { AsyncStorageManager } from '@kid-safe/storage';

export function usePersistedState<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(initialValue);
  const storage = new AsyncStorageManager();

  useEffect(() => {
    storage.get<T>(key).then(value => {
      if (value !== null) setState(value);
    });
  }, [key]);

  const setPersistedState = (value: T) => {
    setState(value);
    storage.set(key, value);
  };

  return [state, setPersistedState] as const;
}
```

**Dependencies:**
- React
- @kid-safe/storage

---

### 8. `@kid-safe/types`

**Purpose:** Shared TypeScript type definitions

**Location:** `packages/types/`

**Structure:**
```
packages/types/
├── src/
│   ├── common/
│   │   ├── user.types.ts
│   │   ├── transaction.types.ts
│   │   └── index.ts
│   ├── apps/
│   │   ├── shop-tracker.types.ts
│   │   ├── bake-helper.types.ts
│   │   └── index.ts
│   └── index.ts
├── package.json
└── README.md
```

**Example Types:**
```typescript
// packages/types/src/common/transaction.types.ts
export interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  note?: string;
}
```

**Dependencies:**
- None

---

## App-Specific Modules

Each app follows a consistent internal structure:

```
apps/[app-name]/
├── src/
│   ├── screens/              # Screen components
│   │   ├── Home/
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── HomeScreen.test.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── components/           # App-specific components
│   │   ├── WishlistCard/
│   │   └── index.ts
│   │
│   ├── navigation/           # App navigation setup
│   │   ├── RootNavigator.tsx
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── store/                # Redux store
│   │   ├── slices/
│   │   │   ├── wishlistSlice.ts
│   │   │   └── index.ts
│   │   ├── store.ts
│   │   └── index.ts
│   │
│   ├── services/             # Business logic
│   │   ├── wishlistService.ts
│   │   └── index.ts
│   │
│   ├── hooks/                # App-specific hooks
│   │   ├── useWishlist.ts
│   │   └── index.ts
│   │
│   ├── utils/                # App-specific utilities
│   │   └── calculations.ts
│   │
│   ├── constants/            # App constants
│   │   └── config.ts
│   │
│   └── App.tsx               # App entry point
│
├── assets/                   # Images, fonts, etc.
├── app.json                  # Expo configuration
├── package.json
└── README.md
```

---

## Module Interfaces

### Clear Boundaries

Each module has a clear public interface defined in its `index.ts`:

**Good ✅**
```typescript
// packages/ui/src/components/Button/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button';

// Don't export internal implementation
// ❌ export { ButtonStyles } from './Button.styles';
```

**Consumers import from the package:**
```typescript
// Good ✅
import { Button } from '@kid-safe/ui';

// Bad ❌ - bypassing the public interface
import { Button } from '@kid-safe/ui/src/components/Button/Button';
```

---

## Dependency Graph

```
┌─────────────────────────────────────────┐
│              Apps Layer                 │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │
│  │ App1 │ │ App2 │ │ App3 │ │ App4 │  │
│  └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘  │
│     └────────┴────────┴────────┘       │
└──────────────┬──────────────────────────┘
               │ depends on
┌──────────────▼──────────────────────────┐
│           Shared Packages               │
│                                         │
│  ┌────┐  ┌────────┐  ┌──────┐         │
│  │ UI │──│ Design │  │ Nav  │         │
│  └─┬──┘  │ System │  └──┬───┘         │
│    │     └────┬───┘     │             │
│    │          │          │             │
│  ┌─▼──────────▼──────────▼──┐         │
│  │       Storage             │         │
│  └──┬───────────────────┬───┘         │
│     │                   │             │
│  ┌──▼────┐         ┌────▼──┐         │
│  │ Utils │         │ Types │         │
│  └───────┘         └───────┘         │
└─────────────────────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────┐
│       External Dependencies              │
│  (React Native, Expo, Redux, etc.)      │
└──────────────────────────────────────────┘
```

### Dependency Rules

1. **Apps can depend on:** Any shared package
2. **Shared packages can depend on:** Other shared packages (but avoid circular deps)
3. **Shared packages cannot depend on:** Apps
4. **Minimize dependencies:** Each package should have minimal dependencies

---

## Code Organization

### Module Structure Pattern

Every module follows this structure:

```
module-name/
├── src/
│   ├── [feature]/
│   │   ├── Component.tsx       # Implementation
│   │   ├── Component.test.tsx  # Tests
│   │   ├── Component.styles.ts # Styles (if needed)
│   │   └── index.ts            # Public interface
│   └── index.ts                # Module exports
├── package.json
├── tsconfig.json
└── README.md
```

### Single Responsibility

Each module/file should have one clear purpose:

**Good ✅**
```typescript
// packages/utils/src/currency/formatCurrency.ts
export const formatCurrency = (amount: number): string => {
  // Only does currency formatting
};
```

**Bad ❌**
```typescript
// packages/utils/src/helpers.ts
export const formatCurrency = (amount: number): string => { /* ... */ };
export const validateEmail = (email: string): boolean => { /* ... */ };
export const calculateProgress = (current: number, total: number): number => { /* ... */ };
// Too many unrelated functions in one file
```

---

## Import Patterns

### Package Imports

```typescript
// Use package name (configured in package.json)
import { Button } from '@kid-safe/ui';
import { colors } from '@kid-safe/design-system';
import { AsyncStorageManager } from '@kid-safe/storage';

// Not relative paths from node_modules
// ❌ import { Button } from '../../../node_modules/@kid-safe/ui';
```

### Within App

```typescript
// Use absolute imports with path aliases
import { HomeScreen } from '@/screens/Home';
import { WishlistCard } from '@/components/WishlistCard';
import { useWishlist } from '@/hooks/useWishlist';

// Configure in tsconfig.json:
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Barrel Exports

Each directory has an `index.ts` for clean imports:

```typescript
// components/index.ts
export { WishlistCard } from './WishlistCard';
export { GoalCard } from './GoalCard';

// Usage
import { WishlistCard, GoalCard } from '@/components';
```

---

## Testing Strategy

### Unit Tests (Per Module)

```typescript
// packages/utils/src/currency/formatCurrency.test.ts
import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('formats positive amounts', () => {
    expect(formatCurrency(10.5)).toBe('$10.50');
  });

  it('formats negative amounts', () => {
    expect(formatCurrency(-5.25)).toBe('-$5.25');
  });
});
```

### Integration Tests (Shared Packages)

```typescript
// packages/storage/src/async/AsyncStorageManager.test.ts
import { AsyncStorageManager } from './AsyncStorageManager';

describe('AsyncStorageManager', () => {
  let storage: AsyncStorageManager;

  beforeEach(() => {
    storage = new AsyncStorageManager();
  });

  it('stores and retrieves data', async () => {
    await storage.set('key', { value: 'test' });
    const result = await storage.get('key');
    expect(result).toEqual({ value: 'test' });
  });
});
```

### E2E Tests (Apps)

```typescript
// apps/shop-tracker/e2e/wishlist.test.ts
describe('Wishlist Flow', () => {
  it('should add item to wishlist', async () => {
    // Test complete user flow
  });
});
```

---

## Build & Deployment

### Package.json Structure

**Root package.json:**
```json
{
  "name": "kid-safe-apps",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "build": "npm run build --workspaces",
    "test": "npm run test --workspaces",
    "lint": "eslint . --ext .ts,.tsx",
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "eslint": "^8.0.0",
    "jest": "^29.0.0"
  }
}
```

**App package.json:**
```json
{
  "name": "@kid-safe/shop-tracker",
  "version": "1.0.0",
  "main": "src/App.tsx",
  "scripts": {
    "start": "expo start",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "test": "jest",
    "lint": "eslint src"
  },
  "dependencies": {
    "react": "18.2.0",
    "react-native": "0.72.0",
    "@kid-safe/ui": "*",
    "@kid-safe/design-system": "*",
    "@kid-safe/storage": "*",
    "@kid-safe/navigation": "*"
  }
}
```

**Shared Package package.json:**
```json
{
  "name": "@kid-safe/ui",
  "version": "1.0.0",
  "main": "src/index.ts",
  "scripts": {
    "test": "jest",
    "lint": "eslint src"
  },
  "dependencies": {
    "react": "18.2.0",
    "react-native": "0.72.0",
    "@kid-safe/design-system": "*"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-native": "^0.72.0"
  }
}
```

### Build Process

```bash
# Install all dependencies
npm install

# Build all packages (if needed)
npm run build

# Run all tests
npm run test

# Type check everything
npm run typecheck

# Build specific app
cd apps/shop-tracker
npm run build

# Run specific app
npm run ios
```

---

## Migration Path

### From Prototypes to Modular Architecture

**Phase 1:** Set up monorepo structure
```bash
mkdir -p packages/{ui,design-system,storage,navigation,auth,utils,hooks,types}
mkdir -p apps/{shop-tracker,bake-helper,closet-builder,mini-missions,cookie-tycoon}
```

**Phase 2:** Extract shared code from prototypes
- Identify common components → `packages/ui`
- Extract colors/fonts → `packages/design-system`
- Extract utilities → `packages/utils`

**Phase 3:** Build each app using shared packages
- Start with App 1 (Shop Tracker)
- Refactor as you go
- Add to shared packages when patterns emerge

**Phase 4:** Continuous refinement
- Move duplicate code to shared packages
- Keep packages focused and small
- Document interfaces clearly

---

## Best Practices

### 1. Keep Packages Small & Focused
✅ Good: `@kid-safe/currency` with just currency utilities
❌ Bad: `@kid-safe/helpers` with everything

### 2. Clear Package Boundaries
Each package should have:
- Clear purpose (described in README)
- Public interface (index.ts)
- Tests
- TypeScript types exported

### 3. Avoid Circular Dependencies
```
❌ Bad:
@kid-safe/ui → @kid-safe/storage → @kid-safe/ui

✅ Good:
@kid-safe/ui → @kid-safe/design-system
@kid-safe/storage → @kid-safe/types
```

### 4. Version Packages Together
Use `*` in dependencies for monorepo packages:
```json
{
  "dependencies": {
    "@kid-safe/ui": "*"  // Always use local version
  }
}
```

### 5. Document Everything
Each package needs:
- README with purpose and examples
- API documentation
- Migration guide (if breaking changes)

---

## Quick Reference

### Creating a New Shared Package

```bash
# 1. Create structure
mkdir -p packages/my-package/src
cd packages/my-package

# 2. Initialize package.json
npm init -y

# 3. Update package.json
{
  "name": "@kid-safe/my-package",
  "version": "1.0.0",
  "main": "src/index.ts"
}

# 4. Create index.ts
touch src/index.ts

# 5. Add to workspace (already in root package.json)
# 6. Use in apps
# apps/shop-tracker/package.json
{
  "dependencies": {
    "@kid-safe/my-package": "*"
  }
}
```

### Creating a New App

```bash
# 1. Create structure
mkdir -p apps/my-app/src
cd apps/my-app

# 2. Initialize with Expo
npx create-expo-app . --template expo-template-blank-typescript

# 3. Add shared packages to package.json
{
  "dependencies": {
    "@kid-safe/ui": "*",
    "@kid-safe/design-system": "*"
  }
}

# 4. Start building!
```

---

## Summary

### Key Takeaways

✅ **Monorepo** with workspaces for all apps + shared code
✅ **8 Shared Packages** for maximum code reuse
✅ **Clear boundaries** between modules
✅ **Consistent structure** across all packages and apps
✅ **Independent testing** for each module
✅ **Scalable architecture** - easy to add new apps or features

### Development Flow

1. **Start:** Set up monorepo structure
2. **Build:** Shared packages first (design system, UI, storage)
3. **Develop:** Apps one at a time, refactoring common code to shared packages
4. **Maintain:** Keep packages focused, documented, and tested

---

**Document Status:** COMPLETE - READY FOR IMPLEMENTATION
**Next Step:** Set up monorepo structure (Week 1, Day 1)
