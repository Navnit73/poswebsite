---
title: "Pharmacy Stock Management in Europe: FMD, Serialisation & Expiry Control for Small Pharmacies"
slug: "eu-falsified-medicines-directive-pharmacy-stock"
metaDescription: "How the EU Falsified Medicines Directive affects small pharmacy stock management, what FMD scanning does and doesn't cover, and how to build batch and expiry control around it."
category: "Country Guide"
date: "Oct 07, 2026"
readTime: 9
---

Since February 2019, every community pharmacy in the European Union has worked under the **Falsified Medicines Directive (FMD)**. Most pharmacists know the routine: scan the pack, check it's authentic, decommission it at the point of supply.

What's less understood is that **FMD compliance and good stock management are not the same thing**. FMD proves a pack is genuine; it doesn't tell you what's about to expire on your shelves, what you're over-stocked on, or where your margin is going. This guide explains the difference and how a small European pharmacy can cover both.

---

## FMD in One Page

The FMD's Delegated Regulation (EU) 2016/161 introduced two safety features on most prescription medicines:

1. **A unique identifier** in a 2D DataMatrix barcode, containing:
   - Product code
   - Serial number
   - Batch number
   - Expiry date
   - (in some countries) a national reimbursement number
2. **An anti-tampering device** showing whether the pack has been opened.

Before supplying the medicine to a patient, the pharmacy **verifies** the identifier and **decommissions** the pack against its National Medicines Verification System (NMVS). The national systems are linked through the European hub run by the European Medicines Verification Organisation (EMVO).

---

## What FMD Doesn't Do for You

FMD is an anti-counterfeiting system. It isn't designed to manage your stock, and relying on it for that leaves gaps:

| Question | Answered by FMD? |
| :--- | :--- |
| Is this pack genuine? | ✅ Yes |
| Has this pack already been supplied? | ✅ Yes |
| How many packs of this product do I hold? | ❌ No |
| Which batches expire in the next 90 days? | ❌ No |
| What did I pay for this batch? | ❌ No |
| What should I reorder this week? | ❌ No |
| Which products haven't sold in six months? | ❌ No |

Those are the questions that determine a pharmacy's profitability, and they need an **inventory system**.

---

## Turning the DataMatrix Into a Stock Advantage

The useful side-effect of FMD is that most prescription packs now carry their **batch number and expiry date in machine-readable form**. A pharmacy that scans at goods-in can capture accurate batch and expiry data in seconds rather than typing it by hand.

That data powers everything downstream:

- **FEFO dispensing** — selling the nearest-expiry batch first (see **[FEFO vs FIFO](/blog/fefo-vs-fifo-pharmacy-inventory)**)
- **Expiry alerts** at 30, 60, and 90 days
- **Recall response** — knowing exactly which batches you hold when a recall notice arrives
- **Batch-level margin** — cost price tracked per delivery

---

## Recalls and Batch Traceability

When a national competent authority or marketing authorisation holder issues a recall, the first question is always: *do we have that batch, and how much?*

Without batch-level stock, the answer means a physical search of every shelf. With it, it's a single search. Medishelf records batch, expiry, supplier, and cost on every stock receipt, so you can find affected units immediately and quarantine them from sale.

---

## Country Differences Across Europe

While FMD is EU-wide, much of pharmacy practice remains national:

- **Reimbursement and pricing** are set nationally and vary widely in how much margin a pharmacy keeps on prescription medicines.
- **VAT rates on medicines** differ between member states, and often between prescription and non-prescription lines within the same country.
- **Controlled drug record-keeping** follows national narcotics legislation.
- **Returns to wholesalers** follow commercial terms that differ by country and supplier.

A stock system for a European pharmacy therefore needs **flexible per-product tax settings** and shouldn't assume a single country's rules.

---

## Data Protection: GDPR at the Counter

If your stock or POS system stores customer details — for loyalty, regular customers, or repeat purchases — you're processing personal data under GDPR. Practical steps:

- Collect only what you need (a name and phone number is usually enough for a regular-customer record)
- Restrict access with **individual staff accounts and role-based permissions**
- Avoid shared logins, which make it impossible to know who accessed what

Medishelf gives every staff member their own account with role-based permissions and keeps an audit log of stock changes. Read our **[privacy policy](/privacy)** for how we handle data.

---

## How FMD Scanning and Stock Software Fit Together

For most small pharmacies, the practical setup is:

1. **FMD verification and decommissioning** handled by your FMD-connected dispensing software or FMD scanning solution, as required in your country.
2. **Stock control, expiry management, and retail billing** handled by a dedicated **[pharmacy inventory system](/)**.

Medishelf focuses on the second part: batch-level stock, FEFO billing, alerts, and reports. It doesn't replace your NMVS connection, so ask your FMD provider how to keep both workflows efficient at the counter.

---

## European Small Pharmacy Stock Checklist

- [ ] Batch and expiry captured at goods-in for every product
- [ ] FEFO enforced at the till
- [ ] 90-day expiry report reviewed monthly
- [ ] Recall lookup possible by batch number in under a minute
- [ ] VAT settings verified for prescription vs. OTC lines
- [ ] Individual staff logins with role-based access (GDPR)

---

## Batch-Level Stock Control with Medishelf

Medishelf gives independent pharmacies across Europe a simple way to run batch and expiry tracking, FEFO billing, and stock reports, without enterprise pricing or long contracts.

- Explore **[inventory features](/inventory)**
- See **[pricing](/pricing)**
- Start a **[7-day free trial](/demo)**

*This article is general information, not legal advice. FMD implementation details and national rules vary; check with your national medicines verification organisation and regulator.*
