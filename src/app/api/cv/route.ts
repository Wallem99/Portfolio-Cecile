import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

const CV_PATH = path.join(
  process.cwd(),
  "public",
  "cv-ngo-ntonga-cecile-claude.pdf"
);
const CV_FILENAME = "CV - Cecile Claude Ngo Ntonga.pdf";

// Serves the CV with a Content-Disposition: attachment header so the
// browser always forces a real download — unlike a plain <a download>
// link, this can't be overridden by a PDF-viewer extension or browser
// setting that opens PDFs inline instead.
export async function GET() {
  let file: Buffer;
  try {
    file = await fs.readFile(CV_PATH);
  } catch {
    return NextResponse.json({ error: "CV not found" }, { status: 404 });
  }

  return new NextResponse(new Uint8Array(file), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${CV_FILENAME}"`,
      "Content-Length": String(file.length),
      "Cache-Control": "public, max-age=3600",
    },
  });
}
