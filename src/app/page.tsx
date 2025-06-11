import Image from "next/image";
import TestTableList from "./components/TestTableList";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Bienvenido a mi aplicación</h1>
      <p className="mt-4 text-lg">
        Esta es una aplicación de ejemplo utilizando Next.js y Prisma.
      </p>
      <Image
        src="/nextjs-prisma.png"
        alt="Next.js y Prisma"
        width={500}
        height={300}
        className="mt-8 rounded-lg"
      />
      <TestTableList />
    </div>
  );
}
