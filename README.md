# British English School Frontend

A React + Vite + TypeScript frontend redesign for British English School, Gere, Manpur, Gaya.

## Design direction

The redesign intentionally does not copy the current visual layout. It uses the supplied BES logo palette as the visual system:

- Cyan: `#00CCFF`
- Red: `#FF1710`
- Green: `#00C83C`
- Ink: `#090D12`

The source content model covers the existing school website's major information architecture: About, Academics, Facilities, Admissions, Announcements, Results, Toppers, Gallery, Downloads and Contact.

## Run locally

```bash
npm install
npm run dev
```

## Important asset step

Add the official supplied logo to `public/assets/images/logo/bes-logo.png`. The UI is already wired to this exact path. Add official school photos and documents to the folders under `public/assets` using the structure in this repository.

This project is frontend-only. Admission, contact and result forms currently demonstrate UI state and need a backend/API for production persistence.
