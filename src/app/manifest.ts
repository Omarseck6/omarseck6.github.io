import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Omar Seck — Full-Stack Software Engineer",
    short_name: "OS Portfolio",
    description: "Selected work and experience of Omar Seck, full-stack software engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#090909",
    theme_color: "#090909",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
