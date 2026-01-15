import type { Article } from "../types";

export const frontendObservabilityArticle: Article = {
  id: "frontend-observability",
  title: "Frontend Observability",
  description:
    "Understand how to monitor, debug, and trace issues in frontend applications using logs, metrics, and error tracking tools.",

  tags: ["observability", "frontend", "debugging"],
  level: "intermediate",
  prerequisites: ["Promises", "APIs"],

  readingTimeMinutes: 8,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "what-is-observability",
      title: "What Is Observability?",
      content: [
        {
          type: "list",
          items: [
            "Logs – what happened",
            "Metrics – how often or how fast",
            "Traces – why it happened",
          ],
        },
      ],
    },
    {
      id: "why-frontend",
      title: "Why Observability Matters in Frontend",
      content: [
        {
          type: "text",
          value:
            "Frontend issues directly affect users. Observability helps detect runtime errors, performance issues, and broken user flows.",
        },
      ],
    },
    {
      id: "tools",
      title: "Common Tools",
      content: [
        {
          type: "table",
          headers: ["Tool", "Purpose"],
          rows: [
            ["Sentry", "Runtime error tracking"],
            ["LogRocket", "Session replay"],
            ["Web Vitals API", "Real user performance"],
          ],
        },
      ],
    },
    {
      id: "axios-interceptor",
      title: "API Error Logging Example",
      content: [
        {
          type: "code",
          language: "js",
          value: `axios.interceptors.response.use(
  res => res,
  err => {
    console.error("API error", err);
    return Promise.reject(err);
  }
);`,
        },
      ],
    },
    {
      id: "interview-tip",
      title: "Interview Tip",
      content: [
        {
          type: "text",
          value:
            "Explain how observability helps catch production issues early and improves reliability and debugging speed.",
        },
      ],
    },
  ],
};
