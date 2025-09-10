```javascript
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const handleRegister = async () => {
    const res = await axios.post("http://localhost:5000/api/register", {
      email, password, weight, height
    });
    setResult(res.data.message);
  };

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:5000/api/login", { email, password });
    setResult(res.data.message);
  };

  const handleSuggest = async () => {
    const res = await axios.post("http://localhost:5000/api/suggest", { weight, height });
    setResult(`BMI: ${res.data.bmi} | Suggestion: ${res.data.suggestion}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>FitFlow - Workout Planner</h1>

      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br /><br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
      <input placeholder="Weight (kg)" value={weight} onChange={e => setWeight(e.target.value)} /><br /><br />
      <input placeholder="Height (cm)" value={height} onChange={e => setHeight(e.target.value)} /><br /><br />

      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSuggest}>Get Suggestion</button>

      <p style={{ marginTop: "20px", fontWeight: "bold" }}>{result}</p>
    </div>
  );
}

export default App;
```
