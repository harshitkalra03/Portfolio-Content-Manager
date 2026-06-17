# Content Manager Architecture

## Purpose

The Portfolio Content Manager is a desktop application designed specifically for managing the Harshit Kalra Portfolio.

The primary objective is:

> "If a routine content change requires opening VS Code, the Content Manager has failed."

The application should allow all content stored in JSON files to be managed through a graphical interface.

---

# Project Scope

This application is NOT the future AI Portfolio Builder.

This application exists solely for managing the current portfolio architecture.

Roadmap:

Personal Portfolio
↓
Portfolio Content Manager
↓
Portfolio Framework
↓
AI Portfolio Builder

---

# Core Principles

## Single Source of Truth

Every piece of information must exist in one location only.

Examples:

Technology Data
→ technologies.json

Tag Data
→ project-tags.json

Project Data
→ projects.json

Timeline Data
→ timeline.json

Education Data
→ education.json

Social Links
→ socials.json

The GUI must never duplicate information.

---

## Visual Editing

The user should never edit raw JSON.

Workflow:

JSON
↓
GUI Editor
↓
Save
↓
JSON Updated

All editing should occur through forms, tables, image pickers, and visual controls.

---

## Scope Definition

Version 1 manages only data that already exists in JSON files.

If content is currently hardcoded inside HTML, CSS, or JavaScript, it remains outside the scope of the Content Manager.

Examples:

Managed by CMS:

* Projects
* Technologies
* Tags
* Timeline Entries
* Education Entries
* Achievements
* Social Links
* Contact Configuration
* Profile Content
* Hero Images

Not Managed by CMS:

* Section Headings
* Page Layout
* HTML Structure
* CSS Styling
* Animations
* Navigation
* Modal Layouts

These remain code-managed until a future version requires otherwise.

---

# Application Structure

Portfolio Content Manager

Dashboard

Home
├── Profile
└── Highlights

About
├── About Profile
├── Timeline
├── Education
└── Achievements

Projects
├── Projects
├── Technologies
├── Tags
└── Filters

Contact
├── Social Links
└── Contact Configuration

Assets
├── Images
├── Resume
├── OG Image
└── Favicon

SEO
├── robots.txt
└── sitemap.xml

Settings

---

# Dashboard

Purpose:

Provide a portfolio overview.

Displayed Information:

* Total Projects
* Total Technologies
* Total Tags
* Total Timeline Entries
* Total Education Entries
* Total Achievements
* Total Images
* Resume Status
* OG Image Status
* Favicon Status
* Recent Changes

Dashboard is informational only.

---

# Home Module

## Data Sources

profile.json

highlights.json

---

## Profile Editor

Manage:

* Name
* Roles
* Mobile Role
* About Text
* Resume Reference
* Hero Images
* Social References

---

## Highlights Editor

Manage:

* Add Highlight
* Edit Highlight
* Delete Highlight
* Reorder Highlights

---

# About Module

## Data Sources

about-profile.json

timeline.json

education.json

achievements.json

---

## About Profile Editor

Manage:

* Hero Content
* Who Am I Content
* What I Do Cards

---

## Timeline Editor

Manage:

* Date / Period
* Title
* Description
* Detailed Content
* Images
* Ordering

Capabilities:

* Add Entry
* Edit Entry
* Delete Entry
* Reorder Entry

---

## Education Editor

Manage:

* Institute
* Degree
* Duration
* Description
* Logo

Capabilities:

* Add Entry
* Edit Entry
* Delete Entry

---

## Achievements Editor

Manage:

* Title
* Metadata
* Description

Capabilities:

* Add Achievement
* Edit Achievement
* Delete Achievement

---

# Projects Module

## Data Sources

projects.json

project-tags.json

project-filters.json

technologies.json

---

## Projects Editor

Manage:

* Title
* Short Description
* Full Description
* Team Members
* Team Size
* Technologies
* Tags
* GitHub URL
* GitHub Status
* Featured Status
* Images

Capabilities:

* Create Project
* Edit Project
* Delete Project
* Duplicate Project
* Reorder Projects

---

## Technologies Editor

Manage:

* Name
* Key
* Category
* Icon

Capabilities:

* Create Technology
* Edit Technology
* Delete Technology
* Upload Icon

Validation:

* No duplicate keys

---

## Tags Editor

Manage:

* Name
* Key
* Color

Capabilities:

* Create Tag
* Edit Tag
* Delete Tag

Color Selection:

Use a visual color picker or predefined palette.

Users should not manually type color values.

---

## Filters Editor

Manage:

* Filter Name
* Order
* Visibility

Capabilities:

* Create Filter
* Edit Filter
* Delete Filter
* Reorder Filters

---

# Contact Module

## Data Sources

socials.json

contact-config.json

---

## Social Links Editor

Manage:

* Platform
* URL
* Icon
* Tooltip

Capabilities:

* Add Social
* Edit Social
* Delete Social

---

## Contact Configuration Editor

Manage:

* Access Key
* Subject
* Form Configuration

Capabilities:

* Update Configuration
* Validate Required Fields

---

# Assets Module

Purpose:

Manage non-JSON portfolio assets.

---

## Images

Manage:

* Hero Images
* Project Images
* Timeline Images
* General Images

Capabilities:

* Upload
* Delete
* Rename
* Preview
* Reorder

---

## Resume

Manage:

* Upload Resume
* Replace Resume
* Preview Resume

Supported Format:

* PDF

---

## Open Graph Image

Location:

assets/images/og-image.png

Capabilities:

* Preview
* Replace
* Validate Dimensions

---

## Favicon

Location:

assets/favicon/

Capabilities:

* Preview
* Replace
* Regenerate Favicon Package

Future Capability:

Generate all favicon assets from a single uploaded image.

---

# SEO Module

Purpose:

Manage search engine support files.

Version 1 Scope:

robots.txt

sitemap.xml

Capabilities:

* Edit robots.txt
* Edit sitemap.xml
* Validate File Structure

Page-level metadata editing is outside Version 1 scope.

---

# Settings Module

Purpose:

Application-level configuration.

Manage:

* Portfolio Location
* Asset Paths
* Backup Settings
* Application Preferences

---

# Validation Rules

The application should prevent:

* Duplicate Technology Keys
* Duplicate Tag Keys
* Duplicate Filter Keys
* Missing Required Fields
* Invalid Image References
* Broken Social Links
* Invalid GitHub URLs

Validation should occur before saving.

---

# Future Integrations

Potential future integrations:

* GitHub API
* Vercel API
* Automatic Deployment
* AI Content Assistance
* Image Optimization
* Portfolio Analytics

These integrations should remain optional and must not affect the core architecture.

---

# Success Criteria

The Content Manager is considered successful when a complete portfolio content update can be performed without:

* Opening VS Code
* Editing JSON manually
* Moving asset files manually

The application becomes the primary interface for managing all portfolio content stored within the portfolio data architecture.