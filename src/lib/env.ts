// ─── Environment Configuration ───────────────────────────────────────────────
// Typově bezpečný přístup k environment proměnným s validací

type Environment = "development" | "staging" | "production" | "test";

interface EnvConfig {
  /** Aktuální prostředí */
  env: Environment;
  /** Veřejná URL aplikace */
  appUrl: string;
  /** Je produkční prostředí? */
  isProduction: boolean;
  /** Je vývojové prostředí? */
  isDevelopment: boolean;
  /** Gemini API klíč (pouze server-side) */
  geminiApiKey: string | undefined;
}

function getEnvironment(): Environment {
  const env = process.env.NEXT_PUBLIC_APP_ENV || process.env.NODE_ENV || "development";
  if (["development", "staging", "production", "test"].includes(env)) {
    return env as Environment;
  }
  return "development";
}

export function getEnvConfig(): EnvConfig {
  const env = getEnvironment();

  return {
    env,
    appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    isProduction: env === "production",
    isDevelopment: env === "development",
    geminiApiKey: process.env.GEMINI_API_KEY,
  };
}

/**
 * Validuje, že všechny povinné env proměnné jsou nastavené.
 * Volej při startu serveru.
 */
export function validateEnv(): { valid: boolean; missing: string[] } {
  const required: string[] = [
    // Přidej sem povinné proměnné pro produkci:
    // "GEMINI_API_KEY",
    // "DATABASE_URL",
  ];

  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.warn(`⚠️ Chybějící environment proměnné: ${missing.join(", ")}`);
  }

  return { valid: missing.length === 0, missing };
}
