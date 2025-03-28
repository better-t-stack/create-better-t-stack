export type ProjectDatabase = "sqlite" | "postgres" | "none";
export type ProjectOrm = "drizzle" | "prisma" | "none";
export type PackageManager = "npm" | "pnpm" | "bun";
export type ProjectAddons = "pwa" | "biome" | "tauri" | "husky";
export type BackendFramework = "hono" | "elysia";
export type Runtime = "node" | "bun";
export type ProjectExamples = "todo";
export type ProjectFrontend = "web" | "native";

export interface ProjectConfig {
	projectName: string;
	backendFramework: BackendFramework;
	runtime: Runtime;
	database: ProjectDatabase;
	orm: ProjectOrm;
	auth: boolean;
	addons: ProjectAddons[];
	examples: ProjectExamples[];
	git: boolean;
	packageManager: PackageManager;
	noInstall?: boolean;
	turso?: boolean;
	frontend: ProjectFrontend[];
}
