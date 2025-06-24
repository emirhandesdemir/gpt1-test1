import { useState } from "react";
import { runGPTCommand } from "./gpt";

function App() {
  const [command, setCommand] = useState("");

  const handleRun = async () => {
    const code = await runGPTCommand(command);
    try {
      eval(code); // ⚠️ Dikkat: Güvenli projelerde kullanılmalı
    } catch (e) {
      alert("Hata: " + e.message);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>🔥 AI UI Generator</h1>
      <input
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Komut gir: örnek 'yeni kart ekle'"
        style={{ width: "100%", padding: "0.5rem" }}
      />
      <button onClick={handleRun} style={{ marginTop: "1rem" }}>
        Gönder
      </button>
      <div id="app" style={{ marginTop: "2rem" }}></div>
    </div>
  );
}

export default App;
