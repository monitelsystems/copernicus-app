import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.testTable.createMany({
    data: [
      { name: "Dato 1", value: "Valor 1" },
      { name: "Dato 2", value: "Valor 2" },
      { name: "Dato 3", value: null },
      { name: "Dato 4", value: "Valor 4" },
    ],
  });
  console.log("Datos creados correctamente");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });