const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/run", async (req, res) => {
    try {
        const response = await axios.post(
            "https://emkc.org/api/v2/piston/execute",
            {
                language: "c",
                version: "10.2.0",
                files: [
                    {
                        name: "main.c",
                        content: req.body.code
                    }
                ]
            }
        );

        res.json(response.data);

    } catch (error) {
        res.status(500).json({
            error: "Execution failed",
            details: error.message
        });
    }
});

app.listen(5000, () => {
    console.log("✅ Backend running on http://localhost:5000");
});