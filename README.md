# Portfolio Content Manager

A desktop CMS built with Electron and Node.js for managing the content of the Harshit Kalra Portfolio website without manually editing JSON files.

---

# What This CMS Does

The CMS manages portfolio content such as:

- Projects
- Technologies
- Tags
- Timeline
- Achievements
- Profile Information
- Social Links
- Images
- SEO Metadata

---

# What This CMS Does NOT Do

The CMS does not modify website structure.

Examples:

❌ Create new pages

❌ Create new website sections

❌ Modify routing

❌ Modify layouts

❌ Modify frontend logic

Any structural change must first be implemented in the Portfolio Website project and then exposed through the CMS if content editing is required.

---

# Architecture

```text
Portfolio CMS
        ↓
Portfolio Repository
        ↓
JSON Files
        ↓
Git Commit & Push
        ↓
GitHub
        ↓
Vercel
```

The CMS is designed specifically for the Harshit Kalra Portfolio.

The portfolio defines the structure.

The CMS manages the content.

---

# Repository Structure

This repository intentionally does NOT include:

```text
node_modules/
dist/
build/
```

These are generated locally.

The repository contains:

```text
src/
main.js
preload.js
package.json
package-lock.json
README.md
```

---

# New Machine Setup

Follow these steps exactly.

---

## Step 1 — Install Node.js

Download and install:

https://nodejs.org

Recommended:

```text
Node.js LTS
```

---

## Step 2 — Verify Installation

Open PowerShell or Terminal:

```bash
node --version
```

Example:

```text
v24.x.x
```

Check npm:

```bash
npm --version
```

Example:

```text
11.x.x
```

If npm does not work:

```bash
npm.cmd --version
```

---

## Step 3 — Clone Portfolio Repository

```bash
git clone <portfolio-repository-url>
```

Purpose:

```text
Contains the actual website.
Contains all JSON files managed by the CMS.
```

---

## Step 4 — Clone CMS Repository

```bash
git clone <cms-repository-url>
```

Purpose:

```text
Contains the Electron desktop application.
```

---

## Step 5 — Open CMS Folder

```bash
cd portfolio-content-manager
```

---

## Step 6 — Install Dependencies

```bash
npm install
```

Purpose:

```text
Reads package.json
Reads package-lock.json

Automatically installs:

- Electron
- Node dependencies
- All required packages

Creates:

node_modules/
```

This step may take a few minutes on first setup.

---

## Step 7 — Start CMS

```bash
npm start
```

If your system does not recognize npm correctly:

```bash
npm.cmd start
```

Purpose:

```text
Launches Electron Desktop Application.
```

---

# Troubleshooting

## node Works but npm Does Not

If:

```bash
node --version
```

works

but:

```bash
npm --version
```

fails

try:

```bash
npm.cmd --version
```

If the issue persists:

1. Restart VS Code
2. Restart Terminal
3. Restart Computer
4. Verify Node.js is added to PATH

In some Windows configurations:

```text
Windows Security
→ App & Browser Control
→ Smart App Control
```

may interfere with npm execution.

---

# Dependency Management

Do NOT commit:

```text
node_modules/
```

The folder is automatically recreated by:

```bash
npm install
```

This is standard practice for:

- Electron
- React
- Next.js
- Vue
- Express
- Node.js projects

---

# Git Workflow

Current workflow:

```text
Edit Content
        ↓
Save Changes
        ↓
JSON Updated
        ↓
Commit
        ↓
Push
        ↓
Website Updated
```

---

# V1 Goal

The goal of V1 is:

```text
Every existing JSON-based content section
should be editable through the CMS
without manually editing JSON files.
```

Examples:

- Projects
- Technologies
- Tags
- Timeline
- Achievements
- Profile
- Socials
- Images
- SEO

---

# Planned V1 Improvements

- Add Existing Technology
- Create New Technology
- Tags Management
- Images Manager
- Team Manager
- Timeline Manager
- Home Editor
- About Editor
- Contact Editor
- SEO Editor
- Publish Button
- Configurable Portfolio Repository Path

---

# Future Improvement

Instead of hardcoding:

```js
const PORTFOLIO_ROOT = "...";
```

future versions should use:

```json
{
    "portfolioRoot": "..."
}
```

stored inside:

```text
cms-config.json
```

This will make migration to a new machine easier.

---

# Author

Harshit Kalra

B.Tech Electrical Engineering

IIT Ropar
