"use client"; // Ensures client-side rendering

import { useState, useEffect } from "react";

export default function KeyPressDetector() {
  const [key, setKey] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKey(event.key);
      setCode(event.code);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🔤 Keyboard Key Press Detector</h1>

      {/* Instruction Box */}
      <div style={styles.infoBox}>
        <p>Press any key on your keyboard to see the details.</p>
      </div>

      {/* Key Display Box */}
      <div style={styles.keyBox}>
        {key ? (
          <>
            <p style={styles.label}>Key Pressed:</p>
            <p style={styles.key}>{key}</p>
            <p style={styles.label}>Key Code:</p>
            <p style={styles.keyCode}>{code}</p>
          </>
        ) : (
          <p style={styles.waitingText}>Waiting for key press...</p>
        )}
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#1e1e1e",
    color: "white",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  infoBox: {
    backgroundColor: "#333",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "1.2rem",
    marginBottom: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  },
  keyBox: {
    backgroundColor: "#444",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    minWidth: "320px",
    textAlign: "center",
  },
  label: {
    fontSize: "1.2rem",
    color: "#bbb",
    marginTop: "10px",
  },
  key: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#4CAF50",
    margin: "10px 0",
  },
  keyCode: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#2196F3",
    margin: "10px 0",
  },
  waitingText: {
    fontSize: "1.5rem",
    color: "#aaa",
  },
};
