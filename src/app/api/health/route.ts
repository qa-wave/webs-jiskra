import { NextResponse } from "next/server";

// ─── Health Check Endpoint ───────────────────────────────────────────────────
// GET /api/health
// Používá se pro:
//   - Docker healthcheck
//   - Kubernetes liveness/readiness probes
//   - Post-deploy verifikaci v CI/CD
//   - Monitoring (UptimeRobot, Pingdom, etc.)

export async function GET() {
  const healthData = {
    status: "healthy",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "unknown",
    version: process.env.npm_package_version || "0.1.0",
    uptime: process.uptime(),
    checks: {
      server: "ok",
      // Budoucí rozšíření:
      // database: await checkDatabase(),
      // redis: await checkRedis(),
      // geminiApi: await checkGeminiApi(),
    },
  };

  return NextResponse.json(healthData, { status: 200 });
}
