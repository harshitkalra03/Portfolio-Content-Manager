# Portfolio CMS V2 – Advanced Architecture Roadmap

## Purpose

This document captures future architectural ideas that extend beyond the scope of the current Portfolio CMS implementation.

The current CMS (V1) focuses on providing a complete local repository-based content management system for the portfolio website.

This document serves as a long-term roadmap for transforming the CMS into a portable, repository-independent, professional desktop application.

---

# Current Architecture (V1)

```text
Portfolio CMS
        ↓
Local Portfolio Repository
        ↓
JSON Files
        ↓
Git Push
        ↓
GitHub
        ↓
Vercel
```

## Characteristics

* Reads and writes local JSON files.
* Uses Electron + Node.js.
* Portfolio repository path is locally configured.
* Git operations are performed outside the CMS.
* Vercel deployment occurs after GitHub updates.

---

# Future Architecture (V2)

## Core Philosophy

The CMS should not depend on:

* Local repository clone
* Git installation
* Node.js installation
* Electron development environment
* Hardcoded folder paths

Instead:

```text
PortfolioCMS.exe
        ↓
GitHub Repository
        ↓
Vercel
```

The CMS becomes a standalone application that directly manages portfolio content through repository APIs.

---

# A1. Repository Abstraction Layer

Current:

```text
portfolioService
        ↓
Local Files
```

Future:

```text
portfolioService
        ↓
Storage Provider
        ↓
├── LocalStorageProvider
└── GitHubStorageProvider
```

The CMS UI should never know where data is stored.

---

# A2. Portable Installation

Current Requirements

* Node.js
* npm
* Electron development environment

Future

```text
PortfolioCMS Setup.exe
```

Contains:

* Electron Runtime
* Node Runtime
* Dependencies

No manual setup required.

---

# A3. GitHub Authentication

Future authentication options:

## Personal Access Token

```text
GitHub Token
Repository Owner
Repository Name
```

## OAuth Login

```text
Login with GitHub
```

Stored securely within the CMS.

---

# A4. Direct Repository Editing

Current Workflow

```text
Save
 ↓
Git Commit
 ↓
Git Push
```

Future Workflow

```text
Save
 ↓
GitHub Contents API
 ↓
Commit Created
```

No local Git repository required.

---

# A5. Repository Independence

New Machine Setup

```text
Install CMS
 ↓
Login GitHub
 ↓
Select Repository
 ↓
Done
```

No cloning required.

---

# A6. Repository Configuration

Future Settings Panel

```text
Owner
Repository
Branch
```

Example:

```text
harshitkalra03
Harshit-Kalra-Portfolio
main
```

Stored in:

```text
cms-config.json
```

---

# A7. Publish Website Button

Future UI

```text
Save Changes
Publish Website
```

Workflow

```text
CMS
 ↓
GitHub Update
 ↓
Vercel Deployment
 ↓
Deployment Status
```

---

# A8. Backup System

Before every save:

```text
backups/

2026-06-18_projects.json
2026-06-18_technologies.json
```

Benefits:

* Undo mistakes
* Restore previous states
* Safer editing experience

---

# A9. Undo & History System

Future UI

```text
History

3:15 PM - Added ROS
3:18 PM - Removed Arduino
3:22 PM - Created TensorFlow
```

Allows rollback to previous states.

---

# A10. Validation Layer

Prevent:

* Duplicate project keys
* Duplicate technology keys
* Duplicate tag keys
* Invalid image paths
* Invalid GitHub URLs
* Broken references

Validation should occur before every save.

---

# A11. View-Based Advanced Managers

Advanced managers should not clutter the primary navigation.

Future structure:

```text
View

├── Technologies Manager
├── Tags Manager
├── Timeline Manager
├── Asset Manager
├── Backup Manager
└── Deployment Manager
```

---

# A12. Technology Lifecycle Separation

## Project Page

Action:

```text
Remove From Project
```

Only removes the relationship.

Example:

```text
Micromouse
 └── ROS removed
```

Technology still exists globally.

## Technologies Manager

Action:

```text
Delete Technology Permanently
```

Removes the technology definition from the CMS.

These two actions must remain distinct.

---

# A13. User-Friendly Terminology

The CMS should expose intent rather than JSON implementation details.

Avoid:

```text
featured
github
techStack
```

Prefer:

```text
Show in Homepage Tech Stack
Repository Visibility
Technologies Used
```

---

# A14. Asset Intelligence

Future image workflow:

```text
Upload Image
 ↓
Auto Resize
 ↓
Generate WebP
 ↓
Update JSON
```

Automatic asset optimization.

---

# A15. Deployment Dashboard

Future dashboard widgets:

```text
Repository Connected

Latest Commit
Latest Deployment

Website Status

Deployment History
```

---

# A16. Configurable Portfolio Location

Current

```js
const PORTFOLIO_ROOT = "...";
```

Future

```text
Settings

Portfolio Repository Location

[ Change Location ]
```

Stored inside:

```text
cms-config.json
```

Eliminates hardcoded paths.

---

# A17. Technology Usage Analytics

Technology details page should show:

```text
Technology Name
Icon
Homepage Visibility

Used In:

• Micromouse
• Autonomous Rover
• ANS
```

Provides impact awareness before deletion.

---

# A18. CMS Packaging Goal

Final user experience:

```text
Download PortfolioCMS Setup.exe
 ↓
Install
 ↓
Login GitHub
 ↓
Open Portfolio
 ↓
Edit Content
 ↓
Publish Website
```

No development tools required.

---

# Guiding Principle

The CMS UI should describe what happens on the website, not how the data is stored internally.

The editor should remain independent of storage implementation so that Local Storage, GitHub Storage, Databases, or future providers can be swapped without changing the UI.