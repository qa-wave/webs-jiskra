import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Code2, GitBranch, Bot } from "lucide-react";

const features = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI-Powered Generation",
    description: "Gemini API automaticky generuje kód, testy a iterace na základě analýzy projektu.",
    badge: "Fáze 5",
    badgeVariant: "secondary" as const,
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "CI/CD Pipeline",
    description: "GitHub Actions automatizuje build, testy a deployment při každém commitu.",
    badge: "Fáze 2",
    badgeVariant: "secondary" as const,
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Testovací infrastruktura",
    description: "Jest, Playwright a k6 pokrývají unit, visual i performance testy.",
    badge: "Fáze 3",
    badgeVariant: "secondary" as const,
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Cloud Deployment",
    description: "Automatický deploy na GCP Cloud Run / Vercel po úspěšném průchodu všemi testy.",
    badge: "Fáze 4",
    badgeVariant: "secondary" as const,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Hero */}
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            AI-SDLC · Fáze 1
          </Badge>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground">
            Automatizovaný SDLC
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            Next.js + shadcn/ui základ připravený pro 21st.dev komponenty, CI/CD pipeline a AI iterační smyčku.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button size="lg">Začít budovat</Button>
            <Button variant="outline" size="lg">
              Dokumentace
            </Button>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    {feature.icon}
                  </div>
                  <Badge variant={feature.badgeVariant}>{feature.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" size="sm" className="px-0 text-muted-foreground hover:text-foreground">
                  Více informací →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Stack info */}
        <div className="mt-16 rounded-lg border bg-muted/30 p-6">
          <h2 className="mb-4 text-lg font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js 15", "TypeScript", "Tailwind v4", "shadcn/ui", "21st.dev", "Docker", "GitHub Actions"].map(
              (tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
