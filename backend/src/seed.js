// seedPIData.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const seedPIData = async () => {
  try {
    const piData = [
      { username: "PIUser1", password: "123456" },
      { username: "PIUser2", password: "123456" },
      { username: "PIUser3", password: "123456" },
    ];

    await prisma.pI.createMany({
      data: piData,
      skipDuplicates: true,
    });

    console.log(`✅ Seeded ${piData.length} PIs successfully`);

    const piProjectAssignments = [
      {
        username: "PIUser1",
        projects: ["J4E89B2F", "H9A53C7D", "G2D71E5A", "F6C28A4B"],
      },
      { username: "PIUser2", projects: ["A9F41C3E", "B7E82A9D", "C3D15F6B"] },
      { username: "PIUser3", projects: ["D8A94E2C", "E1B37D9F", "K7D12F6A"] },
    ];

    const piProjectRelations = [];
    for (const assignment of piProjectAssignments) {
      for (const projectCode of assignment.projects) {
        if (projectCode) {
          piProjectRelations.push({
            username: assignment.username,
            projectCode,
          });
        }
      }
    }

    if (piProjectRelations.length > 0) {
      await prisma.pIProjectRelation.createMany({
        data: piProjectRelations,
        skipDuplicates: true,
      });

      console.log(
        `✅ Created ${piProjectRelations.length} PI-Project relations successfully`,
      );
    }

    console.log("PI-Project Distribution:");
    piProjectAssignments.forEach((assignment) => {
      console.log(
        `  - ${assignment.username}: ${assignment.projects.length} projects (${assignment.projects.join(", ")})`,
      );
    });

    return {
      success: true,
      message: `PIs and relations seeded successfully`,
      count: piData.length,
    };
  } catch (error) {
    console.error("❌ Error seeding PIs:", error);
    return {
      success: false,
      message: "Failed to seed PIs",
      error: error instanceof Error ? error.message : error,
    };
  } finally {
    await prisma.$disconnect();
  }
};

// Run seed if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedPIData();
}
