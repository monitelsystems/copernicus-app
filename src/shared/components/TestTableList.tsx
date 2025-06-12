"use client";

import { useEffect, useState } from "react";

type TestTable = {
  id: number;
  name: string;
  value?: string | null;
  createdAt: string;
};

export default function TestTableList() {
  const [data, setData] = useState<TestTable[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/test-table")
      .then((res) => res.json())
      .then((json: TestTable[]) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <b>{item.name}</b> — {item.value}
        </li>
      ))}
    </ul>
  );
}
