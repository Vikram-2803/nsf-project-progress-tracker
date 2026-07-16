# Project Progress — FSEL Fabrication Tracker

A single-file, self-contained dashboard for tracking fabrication progress of the
NSF CAREER deterioration program (CSR · ASR · FTC). No build step and nothing to
install — the entire app (HTML, CSS, and JavaScript) lives inside `index.html`.

## Deploy on GitHub Pages
1. Put `index.html` in the repository **root**. The file must be named exactly `index.html`.
2. In the repo, go to **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Select branch `main` and folder `/ (root)`, then **Save**.
4. Wait ~1 minute. The board is live at `https://<user>.github.io/<repo>/`.

No separate files are required for the app to run. This README is optional documentation only.

## Make edits save and sync (important)
By default the hosted page runs in **LOCAL PREVIEW** mode: it displays the board but
**does not save changes** — refreshing resets everything to the seed data. To turn it
into a real shared board, connect a Firebase Realtime Database:

1. Create a Firebase project and add a **Realtime Database**.
2. Copy the web-app config from **Firebase console → Project settings → Your apps**.
3. Paste it into the `FIREBASE_CONFIG` block near the top of the `<script>` in `index.html`
   (`databaseURL` is required).
4. Commit and push. All viewers now share one live board that syncs in real time.

Set Realtime Database **security rules** to control who can write. The in-app passcode is
only a client-side convenience lock, not a security boundary.

## Editing the board
- Click **Unlock Edit** and enter the passcode (default: `FSEL2026`).
- Change the passcode any time from the edit menu; it is stored as a SHA-256 hash.
- In edit mode you can add or edit series, orders, activities, phases, and step weights.

## Notes
- Inside a Claude artifact the board uses Claude shared storage automatically; on the
  open web it uses Firebase (if configured) or falls back to local preview.
- The header "Last updated" stamp reflects the last saved change to the shared board.
