# Project Progress — NSF Deterioration Program Tracker

A single-file web app for tracking fabrication progress of the RT1–RT4 reinforced-concrete
deterioration specimens (CSR · ASR · FTC). The whole app is `index.html` — no build step,
no dependencies to install.

## Live board

Hosted on GitHub Pages and backed by a Firebase Realtime Database, so everyone who opens
the URL sees and edits the **same** board in real time.

## How it's wired

- **Frontend:** one static file, `index.html`. Open it anywhere and it runs.
- **Storage:** Firebase Realtime Database. The board state lives at the path
  `nsf_tracker/state`. The Firebase web config is embedded near the top of `index.html`
  in the `FIREBASE_CONFIG` block (this is expected to be public — access is governed by the
  database rules, not by hiding the config).
- **Sync:** changes push to all open viewers via Firebase's realtime listener.

## Database rules

The Realtime Database rule scopes open read/write to the board path only:

```json
{
  "rules": {
    "nsf_tracker": { ".read": true, ".write": true }
  }
}
```

This is a convenience setup for lab coordination, **not** a security boundary. Anyone with
the URL can read and write the board. Edit access in the UI is additionally gated behind a
client-side passcode (see below), which is a soft lock, not cryptographic protection.

## Editing the board

- **View** is open to everyone.
- **Edit mode** is unlocked with a passcode via the "Unlock Edit" button.
  - Default passcode: `FSEL2026`
  - Change it from the unlocked menu → Change Passcode (stored as a SHA-256 hash).
- In edit mode you can update stage statuses, log orders/activities, manage phases, and set
  step weights. Marking a stage **Done** prompts for its actual completion date, which the
  Timeline uses to draw the real stage widths.

## Deploying / updating

1. Edit `index.html`.
2. Commit and push to the `main` branch.
3. GitHub Pages redeploys automatically (Settings → Pages → Deploy from `main` / root).

Updating the file changes the **app**, not the **data** — the recorded board state persists
in Firebase across redeploys.

## Notes

- Free Firebase **Spark** plan is sufficient for a lab-sized board.
- If the database was created in test mode, make sure the rules above are **published**
  (test-mode rules expire after ~30 days and would otherwise lock the board).
- Running `index.html` with an empty `FIREBASE_CONFIG` falls back to a local, unsynced
  preview (useful for trying design changes without touching the live data).
