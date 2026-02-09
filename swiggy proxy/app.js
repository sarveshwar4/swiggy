const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());

const URL = process.env.MENU_URL;

app.get("/rest/123", async (req, res) => {
  try {
    console.log("Request received");
    console.log("MENU_URL:", URL);
    const response = await fetch(URL);
    console.log(" Swiggy Status:", response.status);

    const text = await response.text();   
    console.log(" Raw length:", text.length);
    if (!text) {
      return res.status(500).send("EMPTY RESPONSE FROM SWIGGY");
    }

    res.send(text);

  } catch (err) {
    console.error("Backend error:", err);
    res.status(500).send("Backend crashed");
  }
});

app.listen(4000, () => {
  console.log("Server running");
});
