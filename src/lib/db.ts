import { neon } from "@neondatabase/serverless";

export function getDb() {
  let url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  // Strip UTF-8 BOM (0xFEFF) that can prefix shell-piped env values
  if (url.charCodeAt(0) === 0xfeff) url = url.slice(1);
  return neon(url.trim());
}
