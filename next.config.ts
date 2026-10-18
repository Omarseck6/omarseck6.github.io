import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files: emit plain HTML/CSS/JS into `out/`.
  output: "export",
  // `/projects/foo` → `out/projects/foo/index.html`, which GitHub Pages serves for both `/projects/foo` and `/projects/foo/`.
  trailingSlash: true,
  // No image-optimization server on GitHub Pages: serve the files from `public/` as-is.
  images: { unoptimized: true },
};

export default nextConfig;
