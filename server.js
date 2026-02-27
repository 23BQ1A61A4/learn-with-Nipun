const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route (so "Cannot GET /" problem clear avuthundi)
app.get("/", (req, res) => {
    res.json({
        message: "🚀 Learn With Nipun Compiler Backend is Running"
    });
});

// Code Execution Route
app.post("/run", async (req, res) => {
    try {
        const { code, language } = req.body;

        // Default language C if not provided
        let langConfig = {
            language: "c",
            version: "10.2.0",
            fileName: "main.c"
        };

        if (language === "cpp") {
            langConfig = {
                language: "cpp",
                version: "10.2.0",
                fileName: "main.cpp"
            };
        } 
        else if (language === "javascript") {
            langConfig = {
                language: "javascript",
                version: "18.15.0",
                fileName: "main.js"
            };
        }

        const response = await axios.post(
            "https://emkc.org/api/v2/piston/execute",
            {
                language: langConfig.language,
                version: langConfig.version,
                files: [
                    {
                        name: langConfig.fileName,
                        content: code
                    }
                ]
            }
        );

        res.json({
            output: response.data.run.output
        });

    } catch (error) {
        res.status(500).json({
            error: "Execution failed",
            details: error.message
        });
    }
});

// Use dynamic port for Render deployment
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Backend running on port ${PORT}`);
});