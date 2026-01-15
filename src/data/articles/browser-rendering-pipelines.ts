import type { Article } from "../types";

export const browserRenderingArticle: Article = {
  id: "browser-rendering-pipeline",
  title: "Browser Rendering Pipeline",
  description:
    "Understand how browsers convert HTML, CSS, and JavaScript into pixels on the screen, and how rendering impacts performance and UX.",

  tags: ["browser", "performance", "frontend"],
  level: "intermediate",
  prerequisites: ["HTML", "CSS", "JavaScript"],

  readingTimeMinutes: 8,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "overview",
      title: "High-Level Overview",
      content: [
        {
          type: "text",
          value:
            "The browser rendering pipeline is the sequence of steps a browser follows to display content on the screen, starting from HTML and ending in painted pixels.",
        },
      ],
    },
    {
      id: "steps",
      title: "Rendering Steps",
      content: [
        {
          type: "list",
          items: [
            "HTML parsing → DOM creation",
            "CSS parsing → CSSOM creation",
            "DOM + CSSOM → Render Tree",
            "Layout (reflow)",
            "Paint",
            "Composite",
          ],
        },
      ],
    },
    {
      id: "layout-paint",
      title: "Layout vs Paint vs Composite",
      content: [
        {
          type: "table",
          headers: ["Step", "What it does", "Expensive?"],
          rows: [
            ["Layout", "Calculates element positions", "Very expensive"],
            ["Paint", "Draws pixels", "Expensive"],
            ["Composite", "Layers combined", "Cheapest"],
          ],
        },
      ],
    },
    {
      id: "performance-impact",
      title: "Why This Matters for Performance",
      content: [
        {
          type: "list",
          items: [
            "Avoid layout thrashing",
            "Minimize DOM changes",
            "Prefer transform and opacity for animations",
          ],
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
            "Explain that layout and paint are expensive operations. Optimizing rendering helps reduce CLS, improve LCP, and ensure smooth animations.",
        },
      ],
    },
  ],
};
