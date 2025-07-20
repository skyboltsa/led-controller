import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState("OFF");

  const sendRequest = async (state) => {
    try {
      const response = await fetch(`http://192.168.1.16/LED=${state}`);
      const text = await response.text();
      console.log("ESP8266 Response:", text);
      setStatus(state);
    } catch (error) {
      console.error("Failed to connect to ESP8266:", error);
      alert("ESP8266 not reachable");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>ESP8266 LED Controller</h1>
      <p>LED is <strong>{status}</strong></p>
      <button onClick={() => sendRequest("ON")} style={{ marginRight: "10px" }}>
        Turn ON
      </button>
      <button onClick={() => sendRequest("OFF")}>
        Turn OFF
      </button>
    </div>
  );
}

export default App;
