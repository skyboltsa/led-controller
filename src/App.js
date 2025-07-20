import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Your Firebase Config Here
const firebaseConfig = {
  apiKey: "AIzaSyBPt0vZxOaWf_y9bgQ180OJjo3F-ODm7Lc",
  authDomain: "espp-9cb39.firebaseapp.com",
  databaseURL: "https://espp-9cb39-default-rtdb.firebaseio.com",
  projectId: "espp-9cb39",
  storageBucket: "espp-9cb39.firebasestorage.app",
  messagingSenderId: "667089430528",
  appId: "1:667089430528:web:fde1374b702f6b9973d0e5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function App() {
  const [status, setStatus] = useState("OFF");

  const updateLED = async (state) => {
    try {
      await set(ref(db, "led"), state);
      setStatus(state);
    } catch (error) {
      console.error("Firebase update failed:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>ESP8266 LED Controller</h1>
      <p>LED is <strong>{status}</strong></p>
      <button onClick={() => updateLED("ON")} style={{ marginRight: "10px" }}>
        Turn ON
      </button>
      <button onClick={() => updateLED("OFF")}>
        Turn OFF
      </button>
    </div>
  );
}

export default App;
