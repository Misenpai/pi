// server.js
import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3060" }));

// server.js
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.pI.findUnique({ where: { username } });

    if (!user || user.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Get all project codes for this PI
    const projectRelations = await prisma.pIProjectRelation.findMany({
      where: { username: user.username },
    });

    const projectCodes = projectRelations.map(
      (relation) => relation.projectCode,
    );

    res.json({
      success: true,
      username: user.username,
      projectCodes: projectCodes, // Send ALL project codes
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
