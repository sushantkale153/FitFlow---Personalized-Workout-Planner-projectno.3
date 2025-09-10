```javascript
// Simple FitFlow Backend
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ DB Error:", err));

// Simple user schema
const User = mongoose.model("User", {
  email: String,
  password: String,
  weight: Number,
  height: Number,
});

// Register API
app.post("/api/register", async (req, res) => {
  const { email, password, weight, height } = req.body;
  const user = new User({ email, password, weight, height });
  await user.save();
  res.json({ message: "User registered ✅" });
});

// Login API
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(400).json({ message: "Invalid login ❌" });
  res.json({ message: "Login successful ✅", user });
});

// Suggest plan (simple logic)
app.post("/api/suggest", (req, res) => {
  const { weight, height } = req.body;
  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  let suggestion = "";
  if (bmi < 18.5) suggestion = "Eat more protein. Work out 4 days a week.";
  else if (bmi < 24.9) suggestion = "Maintain balanced meals. Work out 5 days a week.";
  else suggestion = "Focus on cardio and light meals.";

  res.json({ bmi, suggestion });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
```
