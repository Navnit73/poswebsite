---
title: "Pharmacy Reorder Points & Par Levels: How to Calculate Them (With Examples)"
slug: "pharmacy-reorder-point-par-levels"
metaDescription: "Learn how to calculate reorder points, safety stock, and par levels for a small pharmacy, with worked examples, so you stop running out of fast movers and over-stocking slow ones."
category: "Stock Management"
date: "Oct 03, 2026"
readTime: 8
---

Ask most small pharmacy owners how they decide when to reorder, and the honest answer is "when the shelf looks low" or "when a customer asks and we don't have it." Both work, until they don't: a patient walks out to a competitor, or a cupboard fills with stock that won't sell for a year.

**Reorder points** and **par levels** replace guesswork with two numbers per product. This guide shows how to calculate them using data you already have.

---

## The Two Numbers That Matter

| Term | Definition | Answers the Question |
| :--- | :--- | :--- |
| **Reorder point (ROP)** | The stock level that triggers a new order | *When* should I order? |
| **Par level (max stock)** | The level you order back up to | *How much* should I order? |

Order quantity is simply: **Par level − Current stock** (rounded to the supplier's pack size).

---

## Step 1: Find Average Daily Usage

Take units sold over a recent period and divide by the number of days:

```
Average daily usage = Units sold in last 90 days ÷ 90
```

Ninety days is a good default because it smooths out week-to-week noise while still reflecting recent demand. For strongly seasonal products (hay fever, cold and flu), use the same period last year instead.

**Example:** Paracetamol 500mg, 32-pack — 270 packs sold in 90 days.
Average daily usage = 270 ÷ 90 = **3 packs/day**

---

## Step 2: Know Your Lead Time

Lead time is the number of days between placing an order and the stock being on the shelf.

- Daily wholesaler delivery: lead time ≈ **1 day**
- Twice-weekly delivery: up to **3–4 days**
- Direct-from-manufacturer orders: often **7–14 days**

Use your *realistic* lead time, including the day you place the order, not the best case.

---

## Step 3: Add Safety Stock

Demand isn't perfectly steady and deliveries are sometimes late. Safety stock is the buffer that covers that uncertainty.

### Simple method (recommended for small pharmacies)

```
Safety stock = (Max daily usage × Max lead time) − (Avg daily usage × Avg lead time)
```

**Example:** On a busy day you sell 6 packs; worst-case delivery takes 3 days. Normally you sell 3 a day and delivery takes 2 days.

Safety stock = (6 × 3) − (3 × 2) = 18 − 6 = **12 packs**

### Statistical method (for high-value or critical lines)

```
Safety stock = Z × σ(daily demand) × √(lead time)
```

Where Z is the service-level factor (1.65 ≈ 95% in-stock, 2.33 ≈ 99%). Most small pharmacies don't need this level of precision for most products, but it's useful for critical medicines where a stock-out has real consequences for patients.

---

## Step 4: Calculate the Reorder Point

```
Reorder point = (Avg daily usage × Lead time) + Safety stock
```

**Example:** (3 × 2) + 12 = **18 packs**

When stock falls to 18 packs, place an order.

---

## Step 5: Set the Par Level

The par level is how much you want on hand right after a delivery. A common approach:

```
Par level = Reorder point + (Avg daily usage × Days between orders)
```

**Example:** You order this line weekly (7 days).
Par level = 18 + (3 × 7) = **39 packs**

If stock is at 17 packs when you order, you order 39 − 17 = **22 packs**, rounded to the supplier's pack or case size.

---

## Worked Examples Across Product Types

| Product | Avg Daily | Lead Time | Safety Stock | Reorder Point | Par Level |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Paracetamol 500mg (fast OTC) | 3 | 2 days | 12 | 18 | 39 |
| Amoxicillin 500mg caps | 1.5 | 1 day | 4 | 6 | 16 |
| Antihistamine (seasonal, peak) | 4 | 2 days | 10 | 18 | 46 |
| Specialist cream (slow) | 0.1 | 3 days | 1 | 2 | 3 |

Notice the slow mover: the par level is tiny. **Slow movers are where over-stocking does the most damage**, because excess units are the ones most likely to expire.

---

## Common Mistakes

1. **Setting points once and never revisiting them.** Demand changes. Review fast movers monthly and everything else quarterly.
2. **Ignoring expiry.** Never set a par level higher than you can sell before the typical shelf-life runs out. See our **[expired medicine returns guide](/blog/pharmacy-expired-medicine-returns-guide)**.
3. **Letting bulk discounts override the maths.** A 10% discount on a 12-month supply is a loss if a quarter of it expires.
4. **Using the same rule for every product.** Critical medicines deserve more safety stock than a hand cream.
5. **Forgetting policy changes.** Changes such as Australia's 60-day dispensing make demand lumpier, so recalculate when they happen.

---

## Let Software Do the Watching

Calculating reorder points is a one-off job per product. The hard part is *watching* stock levels every day across hundreds of lines. That's what **[pharmacy inventory software](/)** should do for you.

Medishelf shows low-stock alerts on the dashboard and on a dedicated alerts page whenever a product falls below its threshold. Stock is deducted automatically with every sale, so the numbers are always current. Learn more on our **[inventory page](/inventory)**.

---

## Reorder Point Checklist

- [ ] Average daily usage calculated from the last 90 days of sales
- [ ] Realistic lead time recorded per supplier
- [ ] Safety stock set, with more for critical medicines
- [ ] Reorder point and par level entered for your top 100 products
- [ ] Par levels checked against shelf life
- [ ] Monthly review of fast movers, quarterly for the rest

---

## Never Miss a Reorder Again

Medishelf alerts you before you run out, and tracks every batch so you never over-stock short-dated lines.

- Read **[Pharmacy Stock Management System: The Complete Guide](/blog/pharmacy-stock-management-system)**
- View **[pricing](/pricing)**
- Start a **[7-day free trial](/demo)**
