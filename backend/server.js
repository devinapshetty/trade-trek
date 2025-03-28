require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db");  // Import DB Connection

const app = express();
app.use(express.json());
app.use(cors());

// 🛠 Login Route
app.post("/api/login", (req, res) => {
  const { countryId, password } = req.body;

  const sql = "SELECT * FROM Player WHERE CountryID = ? AND Password = ?";
  db.query(sql, [countryId, password], (err, result) => {
    if (err) {
      console.error("❌ Error in Login:", err);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }

    if (result.length > 0) {
      res.json({
        success: true,
        message: "Login successful",
        isAdmin: result[0].IsAdmin,  // Check if user is admin
        username: result[0].Username,
      });
    } else {
      res.json({ success: false, message: "Invalid Country ID or Password" });
    }
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
