import { teamDb } from "@/lib/db-team";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { csvUrl } = await req.json();
  const res = await fetch(csvUrl);
  const text = await res.text();

  const rows = text.split("\n").slice(1);

  for (const row of rows) {
    const [name, position, year, course, linkedin, email] =
      row.split(",");

    await teamDb.execute({
      sql: `
        INSERT INTO student_team (id, name, position, year, course, linkedin, email)
        VALUES (lower(hex(randomblob(16))), ?, ?, ?, ?, ?, ?)
      `,
      args: [name, position, year, course, linkedin, email],
    });
  }

  return NextResponse.json({ success: true });
}