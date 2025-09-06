// server.js
import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// Login route
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.pI.findUnique({ where: { username } });
    if (!user || user.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
    res.json({
      success: true,
      username: user.username,
      projectCode: user.projectCode,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
