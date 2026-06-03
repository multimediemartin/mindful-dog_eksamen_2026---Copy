import { defineConfig } from "astro/config";
import node from "@astrojs/node";
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;

export default defineConfig({
    image: {
    domains: supabaseUrl,
    remotePatterns: [{ protocol: "https" }],
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});