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

    const response = await fetch(URL, {
 headers: {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
  "Accept": "application/json, text/plain, */*",
  "Accept-Language": "en-US,en;q=0.9",
  "Referer": "https://www.swiggy.com/",
  "Connection": "keep-alive"
}
});
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
