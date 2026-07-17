/* ============================================================
   FSEL / NSF TRACKER — CONNECTION CONFIG   (UPLOAD ONCE)
   ------------------------------------------------------------
   • Upload this file next to index.html ONE time.
   • When you update index.html later, DO NOT re-upload this file
     — your connection and saved data stay untouched.
   • For the Realtime Database, only databaseURL is required; the
     other fields are for Firebase services this app doesn't use,
     so they can stay blank.
   • Firebase web config values are public by design; what
     protects your data are your Realtime Database security rules.
   ============================================================ */

window.FSEL_CONFIG = {
  firebase: {
    apiKey:            "",
    authDomain:        "",
    databaseURL:       "https://nsf-project-progress-tracker-default-rtdb.firebaseio.com",
    projectId:         "",
    storageBucket:     "",
    messagingSenderId: "",
    appId:             ""
  },
  path: "nsf_tracker/state"
};
