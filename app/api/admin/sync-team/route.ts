import { NextResponse } from "next/server";
import { teamDb } from "@/lib/db-team";

const SHEET_ID = process.env.GOOGLE_SHEET_ID!;

export async function POST() {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

  const res = await fetch(url);
  const text = await res.text();

  const json = JSON.parse(
    text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1)
  );

  const rows = json.table.rows.map((r: any) => ({
    id: r.c[0]?.v,
    name: r.c[1]?.v,
    position: r.c[2]?.v,
    year: r.c[3]?.v,
    course: r.c[4]?.v,
    about: r.c[5]?.v,
    image: r.c[6]?.v,
    linkedin: r.c[7]?.v,
    email: r.c[8]?.v,
    github: r.c[9]?.v,
    order_index: r.c[10]?.v ?? 0,
    active: r.c[11]?.v ?? 1,
  }));

  // Clear old data
  await teamDb.execute(`DELETE FROM student_team`);

  // Insert fresh data
  for (const r of rows) {
    if (!r.id || !r.name || !r.position) continue;

    await teamDb.execute({
      sql: `
        INSERT INTO student_team 
        (id, name, position, year, course, about, image, linkedin, email, github, order_index, active)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      args: [
        r.id,
        r.name,
        r.position,
        r.year,
        r.course,
        r.about,
        r.image,
        r.linkedin,
        r.email,
        r.github,
        r.order_index,
        r.active,
      ],
    });
  }

  return NextResponse.json({ success: true });
}