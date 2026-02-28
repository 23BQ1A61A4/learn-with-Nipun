const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Compiler Backend Running" });
});

app.post("/run", async (req, res) => {
  try {
    const { code, language } = req.body;

    // 🔥 Dynamic Language Mapping
    let language_id;

    if (language === "c") language_id = 50;
    else if (language === "cpp") language_id = 54;
    else if (language === "java") language_id = 62;
    else if (language === "python") language_id = 71;
    else language_id = 50; // default C

    const submission = await axios.post(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
      {
        language_id: language_id,
        source_code: code,
        stdin: ""
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": "9bba896049msh4bc1e77202e6211p17c323jsn13de84f185ca",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
        }
      }
    );

    res.json({
      output:
        submission.data.stdout ||
        submission.data.stderr ||
        submission.data.compile_output ||
        "No Output"
    });

  } catch (error) {
    res.status(500).json({
      error: "Execution Failed",
      details: error.response?.data || error.message
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});