# Content Manager Architecture

## Purpose

The Content Manager is a desktop application designed specifically for managing the Harshit Kalra Portfolio.

The primary objective is:

"If a content change requires opening VS Code, the Content Manager has failed."

All routine portfolio updates should be possible directly through the application.

---

# Project Scope

This application is NOT the future AI Portfolio Builder.

This application exists solely for managing the current portfolio.

Future roadmap:

Personal Portfolio
↓
Content Manager
↓
Portfolio Framework
↓
AI Portfolio Builder

---

# Core Principles

## Single Source of Truth

Every piece of information must exist in one location only.

Examples:

Technology Labels
→ technologies.json

Tag Colors
→ project-tags.json

Project Data
→ projects.json

Social Links
→ socials.json

The GUI must never duplicate information.

---

## Visual Editing

The user should never edit raw JSON.

Instead:

JSON
↓
Forms
↓
Save
↓
JSON Updated

---

## Zero Code Workflow

The following tasks must not require code changes:

* Add Project
* Edit Project
* Delete Project
* Add Technology
* Change Technology Icon
* Add Tag
* Change Tag Color
* Upload Project Images
* Replace OG Image
* Replace Favicon
* Edit SEO
* Edit Social Links

---

# Application Structure

Portfolio Content Manager

Dashboard

Content
├── Profile
├── Timeline
├── Achievements
├── Projects

System
├── Technologies
├── Tags
├── Socials

Media
├── Images
├── Documents
├── Branding

Website
├── SEO
├── Deployment

Settings
├── Git
└── Application

---

# Dashboard

Purpose:

Provide a portfolio overview.

Displayed Information:

Projects Count

Technologies Count

Tags Count

Images Count

Documents Count

Current OG Image Status

Current Favicon Status

Recent Changes

Last Deployment

The Dashboard is read-only.

---

# Projects Module

Data Source:

projects.json

Capabilities:

Create Project

Edit Project

Delete Project

Duplicate Project

Reorder Projects

Manage Images

Manage Technologies

Manage Tags

Manage GitHub Links

Manage Team Members

---

## Project Editor

Fields:

Title

Short Description

Description

GitHub Link

Team Members

Technologies

Tags

Images

Project Status

Image Gallery

The editor should provide previews wherever possible.

---

# Technologies Module

Data Source:

technologies.json

Capabilities:

Create Technology

Edit Technology

Delete Technology

Upload Technology Icon

Toggle Featured Status

---

## Technology Editor

Fields:

Label

Key

Icon

Featured

Icon Preview

The GUI should automatically validate duplicate keys.

---

# Tags Module

Data Source:

project-tags.json

Capabilities:

Create Tag

Edit Tag

Delete Tag

Assign Color

---

## Tag Editor

Fields:

Label

Key

Color

Preview

The user should not manually enter colors.

Instead the GUI should provide a predefined palette.

Example:

Purple

Blue

Green

Orange

Pink

Grey

The GUI generates JSON automatically.

---

# Socials Module

Data Source:

socials.json

Capabilities:

Create Social Link

Edit Social Link

Delete Social Link

Upload Icon

Preview Link

---

# Media Module

Purpose:

Manage all portfolio assets.

---

## Images

Manage:

Project Images

Profile Images

General Images

Capabilities:

Upload

Delete

Rename

Preview

Reorder

---

## Documents

Manage:

Resume

Certificates

Portfolio PDFs

Capabilities:

Upload

Delete

Replace

Preview

---

## Branding

Purpose:

Manage website identity.

---

### OG Image

Current Location:

assets/images/og-image.png

Capabilities:

Preview

Replace

Validate Size

---

### Favicon

Current Location:

assets/favicon/

Capabilities:

Preview

Replace

Regenerate Package

Future Capability:

Generate all favicon files from a single uploaded image.

---

# SEO Module

Purpose:

Manage page metadata.

Pages:

Home

About

Projects

Beyond Tech

Contact

---

## SEO Editor

Fields:

Title

Description

Keywords

Author

Open Graph Title

Open Graph Description

Open Graph URL

Preview

No HTML editing should be required.

---

# Deployment Module

Purpose:

Manage Git and deployment workflows.

---

## Phase 1

Read-only status.

Display:

Modified Files

Current Branch

Latest Commit

---

## Phase 2

Actions:

Commit

Push

Open Repository

---

## Phase 3

Actions:

Deployment Status

Deployment Logs

Deployment History

---

# Validation Rules

The application should prevent:

Duplicate Technology Keys

Duplicate Tag Keys

Invalid Image Paths

Missing Required Fields

Broken Social Links

Invalid GitHub URLs

---

# Future Integrations

Potential future integrations:

GitHub API

Vercel API

AI Content Generation

Automatic Image Optimization

Portfolio Analytics

These integrations should remain optional and should not affect the core architecture.

---

# Success Criteria

The Content Manager is considered successful when:

A complete portfolio update can be performed without:

* Opening VS Code
* Editing JSON manually
* Moving files manually
* Editing HTML
* Editing CSS
* Editing JavaScript

The GUI becomes the single interface for portfolio management.