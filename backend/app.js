require("./dns-fix");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ISKCON Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

// Check if .env is loaded
console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
  app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Radha Krishna Idol",
      price: 799,
    },
    {
      id: 2,
      name: "Tulsi Mala",
      price: 199,
    },
    {
      id: 3,
      name: "Bhagavad Gita",
      price: 499,
    },
  ]);
});