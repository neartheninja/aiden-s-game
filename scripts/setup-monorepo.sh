#!/bin/bash

# Kid-Safe Apps Monorepo Setup Script
# This script creates the complete modular architecture structure

echo "🎯 Setting up Kid-Safe Apps Monorepo..."
echo ""

# Create root structure
echo "📁 Creating root directories..."
mkdir -p apps
mkdir -p packages
mkdir -p config/{eslint,typescript,jest}
mkdir -p scripts

# Create app directories
echo "📱 Creating app directories..."
mkdir -p apps/shop-tracker/src/{screens,components,navigation,store,services,hooks,utils,constants,assets}
mkdir -p apps/bake-helper/src/{screens,components,navigation,store,services,hooks,utils,constants,assets}
mkdir -p apps/closet-builder/src/{screens,components,navigation,store,services,hooks,utils,constants,assets}
mkdir -p apps/mini-missions/src/{screens,components,navigation,store,services,hooks,utils,constants,assets}
mkdir -p apps/cookie-tycoon/src/{screens,components,navigation,store,services,hooks,utils,constants,assets}

# Create shared package directories
echo "📦 Creating shared package directories..."
mkdir -p packages/ui/src/{components,layouts}
mkdir -p packages/design-system/src/{colors,typography,spacing,tokens,themes}
mkdir -p packages/navigation/src/{types,components,utils}
mkdir -p packages/storage/src/{async,sqlite,types}
mkdir -p packages/auth/src/{pin,biometric,firebase,components,types}
mkdir -p packages/analytics/src
mkdir -p packages/utils/src/{date,currency,validation,calculation}
mkdir -p packages/hooks/src
mkdir -p packages/types/src/{common,apps}

# Create root package.json
echo "📄 Creating root package.json..."
cat > package.json << 'EOF'
{
  "name": "kid-safe-apps",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "build": "npm run build --workspaces",
    "test": "npm run test --workspaces",
    "lint": "eslint . --ext .ts,.tsx",
    "typecheck": "tsc --noEmit",
    "clean": "rm -rf node_modules apps/*/node_modules packages/*/node_modules"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint": "^8.50.0",
    "eslint-config-expo": "^7.0.0",
    "prettier": "^3.0.0",
    "typescript": "^5.2.0"
  }
}
EOF

# Create root tsconfig.json
echo "⚙️  Creating root tsconfig.json..."
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "lib": ["ESNext"],
    "jsx": "react-native",
    "strict": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "composite": true,
    "baseUrl": ".",
    "paths": {
      "@kid-safe/*": ["packages/*/src"]
    }
  },
  "exclude": ["node_modules", "**/*.spec.ts", "**/*.test.ts"]
}
EOF

# Create .gitignore
echo "🚫 Creating .gitignore..."
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
build/
dist/

# Expo
.expo/
.expo-shared/
web-build/

# Native
*.jks
*.p8
*.p12
*.key
*.mobileprovision
*.orig.*
ios/
android/

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env
.env*.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
EOF

# Create README for each package
echo "📝 Creating package READMEs..."

# UI Package README
cat > packages/ui/README.md << 'EOF'
# @kid-safe/ui

Shared UI components for all Kid-Safe Apps.

## Installation

```bash
npm install @kid-safe/ui
```

## Usage

```typescript
import { Button, Card, Input } from '@kid-safe/ui';
```

## Components

- Button (Primary, Secondary, Icon)
- Card (Standard, Elevated, Stat)
- Input (Text, Number, Password)
- Modal
- ProgressBar
- Screen
- Container
EOF

# Design System README
cat > packages/design-system/README.md << 'EOF'
# @kid-safe/design-system

Design tokens and theming for Kid-Safe Apps.

## Installation

```bash
npm install @kid-safe/design-system
```

## Usage

```typescript
import { colors, typography, spacing, ThemeProvider } from '@kid-safe/design-system';
```
EOF

# Storage README
cat > packages/storage/README.md << 'EOF'
# @kid-safe/storage

Data persistence layer for Kid-Safe Apps.

## Installation

```bash
npm install @kid-safe/storage
```

## Usage

```typescript
import { AsyncStorageManager, SQLiteManager } from '@kid-safe/storage';
```
EOF

# Create package.json for each shared package
echo "📦 Creating package.json files for shared packages..."

for package in ui design-system navigation storage auth analytics utils hooks types; do
  cat > packages/$package/package.json << EOF
{
  "name": "@kid-safe/$package",
  "version": "1.0.0",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "scripts": {
    "test": "jest",
    "lint": "eslint src",
    "typecheck": "tsc --noEmit"
  },
  "peerDependencies": {
    "react": "^18.2.0",
    "react-native": "^0.72.0"
  }
}
EOF

  # Create index.ts for each package
  touch packages/$package/src/index.ts
done

# Create index.ts exports for key packages
echo "📄 Creating index.ts exports..."

# UI package index
cat > packages/ui/src/index.ts << 'EOF'
// Export all components
export * from './components';
export * from './layouts';
EOF

# Design System index
cat > packages/design-system/src/index.ts << 'EOF'
// Export all tokens and themes
export * from './colors';
export * from './typography';
export * from './spacing';
export * from './tokens';
export * from './themes';
EOF

# Storage index
cat > packages/storage/src/index.ts << 'EOF'
// Export storage managers
export * from './async';
export * from './sqlite';
export * from './types';
EOF

# Utils index
cat > packages/utils/src/index.ts << 'EOF'
// Export all utilities
export * from './date';
export * from './currency';
export * from './validation';
export * from './calculation';
EOF

echo ""
echo "✅ Monorepo structure created successfully!"
echo ""
echo "📋 Next steps:"
echo "1. cd into the project root"
echo "2. Run: npm install"
echo "3. Review docs/technical/MODULAR-ARCHITECTURE.md"
echo "4. Start building shared packages (design-system, ui)"
echo "5. Begin with App 1: shop-tracker"
echo ""
echo "🚀 Happy coding!"
