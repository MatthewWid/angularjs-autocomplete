import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
	base: "/angularjs-autocomplete/",
	assetsInclude: ["./src/**/*.html"],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	build: {
		emptyOutDir: true,
	},
});
