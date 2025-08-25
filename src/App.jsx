import { useState } from "react";
import axios from "axios";

const API_BASE = "https://text-video-backend.onrender.com/api"; 
// ⚠️ Backend deploy hone ke baad apna URL daalna

function App() {
  const [script, setScript] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    try {
      setStatus("Processing...");
      const res = await axios.post(`${API_BASE}/edit-video`, { script });
      setStatus(`Done! File saved: ${res.data.fileId}`);
    } catch (err) {
      setStatus("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>🎬 Text Video Studio</h1>
      <textarea
        rows="6"
        cols="50"
        placeholder="Type your video script here..."
        value={script}
        onChange={(e) => setScript(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit} style={{ marginTop: 10, padding: "8px 16px" }}>
        Generate Video
      </button>
      <p>{status}</p>
    </div>
  );
}

export default App;
