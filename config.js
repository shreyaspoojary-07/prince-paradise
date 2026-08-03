/* ============================================================
   OWNER CONFIGURATION — edit this file only. Nothing else
   in customer.html or owner.html needs to change.
   ============================================================ */

const CONFIG = {
  restaurantName: "Hotel Prince Paradise",
  currency: "₹",
  gstPercent: 5,
  packingCharge: 10,
  // Exact rooms per floor — edit these lists to match your hotel exactly.
  rooms: {
    1: [101, 102],
    2: [201, 202, 203],
    3: [301, 302, 303, 304, 305, 306],
    4: [401, 402, 403, 404, 405, 406, 407, 408, 409],
    5: [501]
  },

  /* --------------------------------------------------------
     FIREBASE — required so the customer site and the owner
     dashboard can share live order data.

     1. Go to https://console.firebase.google.com → Add project
        (free "Spark" plan is enough).
     2. Inside the project: Build → Firestore Database → Create
        database → Start in "test mode" (fine for a first launch).
     3. Project settings (gear icon) → General → "Your apps" →
        click the </> (web) icon → register app → copy the
        firebaseConfig object it gives you → paste the values
        below.
     4. In Firestore rules, you can tighten access later; test
        mode works immediately for getting orders flowing.
     -------------------------------------------------------- */
  firebase: {
    apiKey: "AIzaSyBtwYYiG79uH5e8xZbFqiITagfrMQVcJOk",
    authDomain: "prince-paradise-a233a.firebaseapp.com",
    projectId: "prince-paradise-a233a",
    storageBucket: "prince-paradise-a233a.firebasestorage.app",
    messagingSenderId: "264120149977",
    appId: "1:264120149977:web:f70a2b9b33b5706be29bc8"
  },

  /* Simple passcode gate for the owner dashboard (not real auth,
     just keeps casual visitors out — change this to anything). */
  ownerPasscode: "prince"
};

window.CONFIG = CONFIG;
