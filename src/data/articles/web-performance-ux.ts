import type { Article } from "../types";

export const webPerformanceArticle: Article = {
  id: "web-performance-ux",
  title: "Web Performance & UX",
  description:
    "Learn how to measure, debug, and improve frontend performance using Core Web Vitals, Lighthouse, and UX-focused techniques.",

  tags: ["performance", "ux", "frontend"],
  level: "intermediate",
  prerequisites: ["Browser Rendering Pipeline"],

  readingTimeMinutes: 9,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "core-web-vitals",
      title: "Core Web Vitals",
      content: [
        {
          type: "table",
          headers: ["Metric", "Meaning", "Good Score"],
          rows: [
            ["FCP", "First content paint", "< 1.8s"],
            ["LCP", "Largest contentful paint", "< 2.5s"],
            ["CLS", "Layout stability", "< 0.1"],
            ["TTI", "Time to interactive", "< 3.8s"],
            ["TBT", "Total blocking time", "< 200ms"],
          ],
        },
      ],
    },
    {
      id: "measuring",
      title: "Measuring Performance",
      content: [
        {
          type: "list",
          items: [
            "Chrome DevTools Lighthouse",
            "PageSpeed Insights",
            "WebPageTest",
          ],
        },
      ],
    },
    {
      id: "improving-ux",
      title: "Improving Visual UX",
      content: [
        {
          type: "list",
          items: [
            "Skeleton loaders instead of spinners",
            "Reserve image dimensions to avoid CLS",
            "Lazy load content using IntersectionObserver",
          ],
        },
      ],
    },
    {
      id: "intersection-observer",
      title: "IntersectionObserver Example",
      content: [
        {
          type: "code",
          language: "js",
          value: `const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadContent(entry.target);
    }
  });
});`,
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
            "Talk in terms of measurable impact: reduced LCP, improved CLS, and better perceived performance using skeleton loaders.",
        },
      ],
    },
  ],
};
