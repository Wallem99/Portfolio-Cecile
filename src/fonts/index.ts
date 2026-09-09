import localFont from "next/font/local";

// Self-hosted fonts (downloaded once via scripts/download-fonts.mjs).
// Using next/font/local instead of next/font/google means the site never
// depends on a live fetch to fonts.gstatic.com at build/request time —
// that dependency previously caused the whole site to 500 when the
// connection to Google's font CDN timed out.
//
// Only the "latin" subset is included: it covers the full Latin-1
// Supplement range (U+0000–00FF), which already includes every accented
// character used in French (é, à, ç, û, î…).

export const poppins = localFont({
  variable: "--font-poppins",
  display: "swap",
  src: [
    { path: "./poppins-300.woff2", weight: "300", style: "normal" },
    { path: "./poppins-400.woff2", weight: "400", style: "normal" },
    { path: "./poppins-500.woff2", weight: "500", style: "normal" },
    { path: "./poppins-600.woff2", weight: "600", style: "normal" },
    { path: "./poppins-700.woff2", weight: "700", style: "normal" },
  ],
});

export const jakarta = localFont({
  variable: "--font-jakarta",
  display: "swap",
  // Plus Jakarta Sans ships as a single variable font on Google Fonts —
  // one file covers the whole 200–800 weight range.
  src: [{ path: "./plus-jakarta-sans-variable.woff2", weight: "500 800", style: "normal" }],
});
