import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	base: "/React-Employee-Dashboard/", // Add this line

	plugins: [react()],
});
