# Portfolio Content Manager

A desktop CMS built with Electron and Node.js for managing the content of the Harshit Kalra Portfolio website without manually editing JSON files.

## Features

* Dashboard with portfolio statistics
* Project management system
* Technology management
* JSON read/write services
* Electron-based desktop interface
* Automatic content persistence

---

## Architecture

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

The CMS manages portfolio content only.
It does **not** manage website structure, routing, layouts, or application logic.

The CMS is intended to manage both content updates and publishing workflows.
A long-term V1 goal is to support:

CMS
    ↓
Save Changes
    ↓
Commit Changes
    ↓
Push Changes
    ↓
Website Updated

without requiring routine Git commands from the terminal.
---

## Prerequisites

Install:

* Node.js (LTS)

Verify installation:

```bash
node --version
npm --version
```

On some Windows systems:

```bash
npm.cmd --version
```

may work when:

```bash
npm --version
```

does not.

---

## Installation

Clone the repositories:

```bash
git clone <portfolio-repository-url>
git clone <cms-repository-url>
```

Install dependencies:

```bash
npm install
```

---

## Run

```bash
npm start
```

If required on your system:

```bash
npm.cmd start
```

---

## Troubleshooting

### Node Works but npm Doesn't

If:

```bash
node --version
```

works but:

```bash
npm --version
```

fails:

1. Restart Terminal / VS Code
2. Verify Node.js is added to PATH
3. Try:

```bash
npm.cmd --version
```

4. Check:

```text
Windows Security
→ App & Browser Control
→ Smart App Control
```

Some systems may block npm scripts until the setting is adjusted.

---

## Current Status

### Completed

* Electron Setup
* IPC Communication
* JSON Services
* Dashboard
* Navigation System
* Project Editor
* Technology Viewer
* Technology Removal
* Data Persistence

### In Progress

* Add Existing Technology
* Create New Technology
* Tags Management

### Planned

* Images Manager
* Team Manager
* Home Editor
* About Editor
* Contact Editor
* SEO Manager
* Git Publish Workflow

---

## V1 Goal

The objective of V1 is to provide complete content management for the existing portfolio architecture.

Success criteria:

* Every JSON-based content section can be managed through the CMS.
* No manual JSON editing is required.
* Content updates are saved directly from the CMS.
* Publishing workflows (commit and push) should eventually be handled from within the CMS.
* Migration to a new system should take only a few minutes.

Typical setup on a new machine:

1. Install Node.js
2. Clone Portfolio Repository
3. Clone CMS Repository
4. Run:

```bash
npm install
```

5. Start CMS:

```bash
npm start
```

or

```bash
npm.cmd start
```

No manual JSON editing should ever be required.

The CMS is intentionally designed around the existing portfolio structure and is not intended to create new pages, layouts, or application features automatically.

---

## Planned Quality-of-Life Improvements

### Portfolio Repository Configuration

The current implementation uses a hardcoded portfolio path.

Future versions should use:

```json
{
    "portfolioRoot": "..."
}
```

stored in:

```text
cms-config.json
```

Benefits:

* Easier migration to new systems
* No source code modifications required
* Cleaner deployment workflow
* Better separation between CMS and portfolio repositories

