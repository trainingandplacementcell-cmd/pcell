import { teamDb } from "./db-team";
import { StudentTeamMember } from "@/types/student";

export async function getStudentTeam(): Promise<StudentTeamMember[]> {
  const result = await teamDb.execute(`
    SELECT * FROM student_team
    WHERE active = 1
    ORDER BY order_index ASC
  `);

  return result.rows.map((row) => ({
    id: String(row.id),
    name: String(row.name),
    position: String(row.position),
    year: row.year?.toString(),
    course: row.course?.toString(),
    about: row.about?.toString(),
    image: row.image?.toString(),
    linkedin: row.linkedin?.toString(),
    email: row.email?.toString(),
    order_index: Number(row.order_index),
    active: Number(row.active),
  }));
}