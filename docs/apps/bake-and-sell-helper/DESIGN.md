# Bake & Sell Helper - Complete Design Document

## 🧁 Overview

**App Name:** Bake & Sell Helper
**Category:** Educational / Business Tools for Kids
**Target Age:** 8-12 years
**Platform:** iOS/Android
**Mode:** Single-player with parent review features

## 📖 Core Concept

Bake & Sell Helper is a practical app designed for kids who want to run a real cookie or baked goods business (like selling at school, to neighbors, or at events). It helps them calculate recipes, track sales and expenses, manage shopping lists, and understand profit—all while learning real-world math and business skills in a kid-friendly interface.

## 🎯 Key Features

### 1. Recipe Calculator
- **Batch scaling:** Enter target quantity, get ingredient amounts
- **Built-in recipes:** 5-10 common cookies/treats with preloaded ingredients
- **Custom recipes:** Add your own with ingredient lists
- **Unit conversion:** Cups to tablespoons, etc.
- **Shopping list export:** One-tap add to shopping list
- **Ingredient cost tracking:** Calculate cost per batch

### 2. Sales Tracker
- **Quick sale entry:** Tap to log each sale
- **Sale details:** Date, quantity sold, price per item
- **Daily/weekly totals**
- **Sold vs. made tracking** (inventory management)
- **Customer notes** (optional: "Mrs. Johnson likes chocolate chip")

### 3. Expense Tracker
- **Add expenses:** Ingredients, supplies, packaging
- **Receipt photo upload**
- **Categorization:** Ingredients, marketing, supplies
- **Date-based logging**
- **Total cost calculation**

### 4. Profit Dashboard
- **Visual charts:** Revenue vs. expenses
- **Profit calculation:** Sales - Costs = Profit
- **Per-item profit:** Know which cookies make the most money
- **Time period views:** This week, this month, all time
- **Kid-friendly explanations** of business terms

### 5. Best-Seller Tracker
- **Ranking system:** Which cookies sell fastest
- **Quantity sold per recipe**
- **Revenue per recipe type**
- **Recommendation system:** "Make more chocolate chip!"

### 6. Shopping List Generator
- **Auto-generated from recipes**
- **Manual additions**
- **Check-off items** as purchased
- **Cost estimator** for shopping trip
- **Share list** with parent (text, email)

### 7. Parent Review Mode
- **PIN-protected view**
- **See all financial data**
- **Export reports** (PDF/CSV)
- **Help with tax prep** (for real businesses)
- **Approve large purchases**

## 🎨 Visual Style

### Color Palette
- **Primary:** Warm browns, cream, white
- **Accents:** Baker's pink, mint green, butter yellow
- **Charts:** Colorful but professional
- **Recipe cards:** Parchment-like background

### Art Style
- **Recipe card aesthetic**
- **Clean, readable tables**
- **Friendly icons** for categories
- **Simple, clear charts** (bar, pie, line)
- **Checkboxes and forms** that feel paper-like

### Typography
- **Headers:** Playful but professional
- **Numbers:** Large, clear, bold
- **Instructions:** Simple, step-by-step
- **Reading level:** 3rd-5th grade

## 🖼️ UI Wireframes (Text-Based)

### Dashboard / Home
```
╔════════════════════════════════════╗
║    🧁 BAKE & SELL HELPER 🧁       ║
╠════════════════════════════════════╣
║                                    ║
║  This Week:                        ║
║  ┌──────────────────────────┐     ║
║  │ Sales:    $45.00 🟢      │     ║
║  │ Costs:    $18.00 🔴      │     ║
║  │ ━━━━━━━━━━━━━━━━━━━━━━  │     ║
║  │ Profit:   $27.00 💰      │     ║
║  └──────────────────────────┘     ║
║                                    ║
║  Quick Actions:                    ║
║  ┌───────────┐  ┌───────────┐     ║
║  │ 📝 Make   │  │ 💵 Add    │     ║
║  │  Recipe   │  │   Sale    │     ║
║  └───────────┘  └───────────┘     ║
║                                    ║
║  ┌───────────┐  ┌───────────┐     ║
║  │ 🛒 Shop   │  │ 📊 Best   │     ║
║  │  List     │  │  Sellers  │     ║
║  └───────────┘  └───────────┘     ║
║                                    ║
║  [📈 PROFIT CHART] [⚙️ MORE]      ║
║                                    ║
╚════════════════════════════════════╝
```

### Recipe Calculator
```
╔════════════════════════════════════╗
║       RECIPE CALCULATOR            ║
╠════════════════════════════════════╣
║                                    ║
║  Choose Recipe:                    ║
║  [Chocolate Chip Cookies ▼]        ║
║                                    ║
║  How many cookies do you need?     ║
║  ┌─────┐                           ║
║  │ 40  │ cookies                   ║
║  └─────┘                           ║
║                                    ║
║  📋 You'll need:                   ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ║
║  ✓ Flour: 2 cups                   ║
║  ✓ Sugar: 1 cup                    ║
║  ✓ Brown sugar: 3/4 cup            ║
║  ✓ Butter: 1/2 cup                 ║
║  ✓ Eggs: 2                         ║
║  ✓ Vanilla: 2 tsp                  ║
║  ✓ Baking soda: 1 tsp              ║
║  ✓ Chocolate chips: 1.5 cups       ║
║                                    ║
║  💰 Cost per batch: $3.50          ║
║  💵 Cost per cookie: $0.09         ║
║                                    ║
║  [📋 ADD TO SHOPPING LIST]         ║
║  [📊 LOG AS MADE]                  ║
║                                    ║
╚════════════════════════════════════╝
```

### Sales Tracker
```
╔════════════════════════════════════╗
║         SALES TRACKER              ║
╠════════════════════════════════════╣
║  [+ ADD SALE]        This Week ▼   ║
║                                    ║
║  📅 Monday, Nov 13                 ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ║
║  Chocolate Chip × 12               ║
║  $1.00 each = $12.00               ║
║  Customer: School friends          ║
║                                    ║
║  📅 Tuesday, Nov 14                ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ║
║  Sugar Cookies × 6                 ║
║  $0.75 each = $4.50                ║
║                                    ║
║  📅 Wednesday, Nov 15              ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ║
║  Chocolate Chip × 10               ║
║  $1.00 each = $10.00               ║
║  Customer: Mrs. Anderson           ║
║                                    ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ║
║  Total Sales: $26.50               ║
║                                    ║
╚════════════════════════════════════╝
```

### Add Sale Entry
```
╔════════════════════════════════════╗
║           ADD SALE                 ║
╠════════════════════════════════════╣
║                                    ║
║  What did you sell?                ║
║  [Chocolate Chip Cookies ▼]        ║
║                                    ║
║  How many?                         ║
║  ┌─────┐                           ║
║  │ 12  │ cookies                   ║
║  └─────┘                           ║
║                                    ║
║  Price per cookie?                 ║
║  $ ┌─────┐                         ║
║    │1.00 │                         ║
║    └─────┘                         ║
║                                    ║
║  Total: $12.00                     ║
║                                    ║
║  Date: [Today ▼]                   ║
║                                    ║
║  Customer (optional):              ║
║  [___________________]             ║
║                                    ║
║  Notes (optional):                 ║
║  [___________________]             ║
║                                    ║
║       [CANCEL]  [SAVE SALE]        ║
║                                    ║
╚════════════════════════════════════╝
```

### Shopping List
```
╔════════════════════════════════════╗
║        SHOPPING LIST               ║
╠════════════════════════════════════╣
║  [+ ADD ITEM]     [CLEAR CHECKED]  ║
║                                    ║
║  From Recipe: Chocolate Chip       ║
║  ☐ Flour (2 cups)                  ║
║  ☐ Sugar (1 cup)                   ║
║  ☐ Brown sugar (3/4 cup)           ║
║  ☑ Butter (1/2 cup) ~$2.00         ║
║  ☐ Eggs (2) ~$1.00                 ║
║  ☐ Chocolate chips (1.5 cups)      ║
║                                    ║
║  Other Items:                      ║
║  ☐ Cookie bags (20 ct) ~$3.00      ║
║  ☐ Ribbon                          ║
║                                    ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ║
║  Estimated Total: ~$15.00          ║
║                                    ║
║  [📤 SHARE WITH PARENT]            ║
║  [💰 LOG EXPENSES]                 ║
║                                    ║
╚════════════════════════════════════╝
```

### Profit Dashboard
```
╔════════════════════════════════════╗
║       PROFIT DASHBOARD             ║
╠════════════════════════════════════╣
║  [This Week ▼]                     ║
║                                    ║
║  📊 Chart View                     ║
║  ┌────────────────────────┐       ║
║  │ Sales  ████████ $45    │       ║
║  │ Costs  ███ $18         │       ║
║  │ Profit █████ $27       │       ║
║  └────────────────────────┘       ║
║                                    ║
║  💡 What this means:               ║
║  For every dollar you made,        ║
║  you kept $0.60 as profit!         ║
║                                    ║
║  📋 Breakdown:                     ║
║  Cookies sold: 45                  ║
║  Average price: $1.00              ║
║  Cost per cookie: $0.40            ║
║  Profit per cookie: $0.60          ║
║                                    ║
║  🎯 Top Sellers:                   ║
║  1. Chocolate Chip (30 sold)       ║
║  2. Sugar Cookies (10 sold)        ║
║  3. Oatmeal Raisin (5 sold)        ║
║                                    ║
║  [📤 SHARE REPORT] [👨‍👩‍👧 PARENT]  ║
║                                    ║
╚════════════════════════════════════╝
```

### Best-Seller Tracker
```
╔════════════════════════════════════╗
║       BEST SELLERS                 ║
╠════════════════════════════════════╣
║  [All Time ▼]                      ║
║                                    ║
║  🥇 #1 Chocolate Chip              ║
║  ┌────────────────────────┐       ║
║  │ Sold: 120 cookies      │       ║
║  │ Revenue: $120.00       │       ║
║  │ Profit: $72.00         │       ║
║  │ [████████░░] 60%       │       ║
║  └────────────────────────┘       ║
║                                    ║
║  🥈 #2 Sugar Cookies               ║
║  ┌────────────────────────┐       ║
║  │ Sold: 45 cookies       │       ║
║  │ Revenue: $33.75        │       ║
║  │ Profit: $18.00         │       ║
║  │ [███░░░░░░░] 25%       │       ║
║  └────────────────────────┘       ║
║                                    ║
║  🥉 #3 Oatmeal Raisin              ║
║  ┌────────────────────────┐       ║
║  │ Sold: 20 cookies       │       ║
║  │ Revenue: $20.00        │       ║
║  │ Profit: $10.00         │       ║
║  │ [██░░░░░░░░] 12%       │       ║
║  └────────────────────────┘       ║
║                                    ║
║  💡 Tip: Chocolate Chip sells      ║
║  best! Consider making more.       ║
║                                    ║
╚════════════════════════════════════╝
```

## 🔄 User Flows

### First-Time Setup
1. **Welcome & explanation:** "Running a business? We'll help!"
2. **Add first recipe** (choose from templates or create custom)
3. **Set prices:** "How much will you charge per cookie?"
4. **Tour of features:** Quick walkthrough
5. **Parent setup:** Optional PIN for review features

### Making a Batch Flow
```
Open App → Tap "Make Recipe" → Select Recipe →
Enter Quantity Needed → View Ingredient List →
Add to Shopping List (if needed) →
Log as "Made" → Update Inventory
```

### Recording a Sale Flow
```
Tap "Add Sale" → Select Product → Enter Quantity →
Enter Price Per Unit → Add Customer/Notes (optional) →
Save → See Updated Profit Dashboard
```

### Checking Profitability Flow
```
Open Profit Dashboard → Choose Time Period →
View Chart → Read Breakdown → Check Best Sellers →
Get Recommendations
```

## 🎮 App Mechanics

### Recipe Scaling Math
```
Target cookies = User input
Recipe yield = Default (e.g., 24)
Multiplier = Target / Recipe yield
Each ingredient = Base amount × Multiplier
```

### Profit Calculation
```
Revenue = Sum of all sales
Costs = Sum of all expenses
Profit = Revenue - Costs
Profit Margin = (Profit / Revenue) × 100
```

### Best-Seller Ranking
- Sort by quantity sold
- Secondary sort by profit
- Display top 5

### Cost Per Cookie
```
Batch cost / Batch yield = Cost per unit
```

## 🗓️ Development Roadmap

### Phase 1: Recipe Calculator (Weeks 1-2)
- ✅ Recipe database (5 templates)
- ✅ Scaling calculator
- ✅ Ingredient list display
- ✅ Cost calculation
- ✅ Custom recipe creation

**Deliverable:** Working recipe calculator

### Phase 2: Sales & Expense Tracking (Weeks 3-4)
- ✅ Sales entry form
- ✅ Expense entry form
- ✅ Data storage
- ✅ Sales history view
- ✅ Running totals

**Deliverable:** Basic business tracking

### Phase 3: Shopping List (Week 5)
- ✅ Auto-generation from recipes
- ✅ Manual item addition
- ✅ Check-off functionality
- ✅ Cost estimation
- ✅ Share feature

**Deliverable:** Complete shopping tool

### Phase 4: Profit Dashboard & Charts (Weeks 6-7)
- ✅ Profit calculation engine
- ✅ Chart generation (bar, pie)
- ✅ Time period filters
- ✅ Kid-friendly explanations
- ✅ Best-seller ranking

**Deliverable:** Full analytics suite

### Phase 5: Parent Features & Polish (Weeks 8-9)
- ✅ Parent review mode
- ✅ Export reports (PDF/CSV)
- ✅ PIN protection
- ✅ UI polish
- ✅ Educational tips

**Deliverable:** Complete app

### Phase 6: Testing & Launch (Week 10)
- ✅ Kid user testing
- ✅ Parent feedback
- ✅ Math verification
- ✅ Bug fixes
- ✅ Documentation

**Deliverable:** Release version

## 🧩 Technical Considerations

### Recommended Tech Stack
- **Framework:** React Native or Flutter
- **Storage:** SQLite or Realm for structured data
- **Charts:** recharts (RN) or fl_chart (Flutter)
- **Camera:** For receipt photos
- **Export:** PDF generation library

### Data Schema
```json
{
  "recipes": [
    {
      "id": "1",
      "name": "Chocolate Chip Cookies",
      "yield": 24,
      "ingredients": [
        {"name": "Flour", "amount": 2, "unit": "cups", "costPer": 0.50},
        {"name": "Sugar", "amount": 1, "unit": "cup", "costPer": 0.30}
      ],
      "totalCost": 3.50
    }
  ],
  "sales": [
    {
      "id": "1",
      "recipeId": "1",
      "quantity": 12,
      "pricePerUnit": 1.00,
      "total": 12.00,
      "date": "2025-11-13",
      "customer": "School friends"
    }
  ],
  "expenses": [
    {
      "id": "1",
      "category": "ingredients",
      "item": "Flour, sugar, etc.",
      "cost": 10.00,
      "date": "2025-11-12",
      "receipt": "photo_path"
    }
  ],
  "inventory": [
    {
      "recipeId": "1",
      "quantityMade": 40,
      "quantitySold": 28,
      "remaining": 12
    }
  ]
}
```

### Math Accuracy
- Use Decimal type for all money calculations
- Round to 2 decimal places for display
- Validate user input (no negative numbers)

### Performance
- Optimize chart rendering for 1000+ entries
- Lazy load history items
- Cache calculations

## 📊 Success Metrics

- **Practical use:** Kids successfully run real sales
- **Math skills:** Improved understanding of profit/costs
- **Engagement:** Used consistently during active selling periods
- **Parent satisfaction:** Helpful for oversight and taxes
- **Accuracy:** Calculations match manual verification

## 🛡️ Safety & Privacy

### Kid Safety
- No online features
- No social sharing
- Parent review mode available
- Age-appropriate business concepts

### Data Privacy
- Local storage only
- Optional export (user-controlled)
- No cloud sync
- No data collection

## 📝 Development Notes

- Use real-world examples in tutorials
- Explain business terms simply ("Profit = money you keep")
- Test math calculations extensively
- Make error messages helpful, not scary
- Provide example recipes with realistic costs

## 🎓 Educational Value

### Skills Taught
- **Math:** Multiplication, division, percentages
- **Business:** Revenue, costs, profit, pricing
- **Planning:** Recipe scaling, inventory management
- **Organization:** Tracking sales and expenses
- **Goal-setting:** Using data to improve business

### Parent Involvement
- Review financial reports together
- Discuss pricing strategies
- Help with shopping
- Celebrate profit milestones
- Guide decision-making

## 🔮 Future Expansion Ideas

- **Tax helper:** Simple year-end summary
- **Marketing tools:** Flyer templates
- **Customer database:** Regular customers
- **Seasonal recipes:** Holiday specials
- **Multi-user:** Siblings as business partners
- **Integration:** Link to Kid-Safe Shop Tracker for saving profits

---

**Document Version:** 1.0
**Last Updated:** 2025-11-18
**Status:** Design Complete - Ready for Technical Planning
