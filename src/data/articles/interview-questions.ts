import type { Article } from "../types";

export const frontendScenarioQuestionsArticle: Article = {
  id: "frontend-scenarios",
  title: "Frontend System Design & Debugging Scenarios",
  description:
    "A collection of real-world frontend interview questions with structured answers, covering performance, scalability, debugging, security, and architecture.",

  tags: ["frontend", "system-design", "interview"],
  level: "advanced",
  prerequisites: ["React", "JavaScript", "Browser Fundamentals"],

  readingTimeMinutes: 18,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "large-list-rendering",
      title: "1. Optimizing Rendering of 100k+ Items",
      content: [
        {
          type: "text",
          value:
            "Rendering large lists directly causes performance issues due to excessive DOM nodes and re-renders.",
        },
        {
          type: "list",
          items: [
            "Use list virtualization (react-window / react-virtualized)",
            "Avoid unnecessary re-renders using memoization",
            "Paginate or chunk data if possible",
          ],
        },
        {
          type: "table",
          headers: ["Technique", "Benefit"],
          rows: [
            ["Virtualization", "Only visible items are rendered"],
            ["Memoization", "Prevents unnecessary re-renders"],
            ["Pagination", "Limits data rendered at once"],
          ],
        },
      ],
    },

    {
      id: "global-performance",
      title: "2. Improving Page Load Time for a Global Audience",
      content: [
        {
          type: "list",
          items: [
            "Use CDN for static assets",
            "Enable gzip / Brotli compression",
            "Code split and lazy load routes",
            "Use edge caching where possible",
          ],
        },
        {
          type: "text",
          value:
            "Reducing Time To First Byte (TTFB) and optimizing asset delivery are critical for global performance.",
        },
      ],
    },

    {
      id: "memory-leak",
      title: "3. Identifying and Fixing Memory Leaks",
      content: [
        {
          type: "list",
          items: [
            "Use Chrome DevTools Memory tab",
            "Look for detached DOM nodes",
            "Check uncleaned event listeners or intervals",
          ],
        },
        {
          type: "text",
          value:
            "Common fixes include removing listeners on unmount and clearing timers.",
        },
      ],
    },

    {
      id: "dependency-upgrade",
      title: "4. Managing Dependency Upgrades",
      content: [
        {
          type: "list",
          items: [
            "Check changelog and breaking changes",
            "Upgrade incrementally",
            "Add regression tests before upgrading",
          ],
        },
        {
          type: "text",
          value:
            "Lock versions using package-lock or pnpm-lock and avoid blind upgrades.",
        },
      ],
    },

    {
      id: "react-performance-debug",
      title: "5. Debugging Performance Bottlenecks in React",
      content: [
        {
          type: "list",
          items: [
            "Use React DevTools Profiler",
            "Identify wasted renders",
            "Use memo, useCallback, useMemo where appropriate",
          ],
        },
      ],
    },

    {
      id: "legacy-migration",
      title: "6. Migrating a Legacy Frontend Codebase",
      content: [
        {
          type: "list",
          items: [
            "Audit existing architecture",
            "Incrementally migrate (strangler pattern)",
            "Avoid full rewrites",
          ],
        },
        {
          type: "text",
          value:
            "Incremental migration reduces risk and allows continuous delivery.",
        },
      ],
    },

    {
      id: "client-security",
      title: "7. Secure Handling of Sensitive Data",
      content: [
        {
          type: "list",
          items: [
            "Never store secrets in frontend",
            "Use HTTPS everywhere",
            "Sanitize user inputs",
            "Use secure cookies / HttpOnly",
          ],
        },
      ],
    },

    {
      id: "cross-browser-issues",
      title: "8. Debugging Cross-Browser UI Issues",
      content: [
        {
          type: "list",
          items: [
            "Reproduce using BrowserStack",
            "Check feature support (MDN)",
            "Avoid relying on non-standard APIs",
          ],
        },
      ],
    },

    {
      id: "peak-traffic-failure",
      title: "9. UI Failures During Peak Traffic",
      content: [
        {
          type: "list",
          items: [
            "Graceful degradation",
            "Feature flags",
            "Fallback UI states",
          ],
        },
        {
          type: "text",
          value: "Frontend should fail gracefully when backend is under load.",
        },
      ],
    },

    {
      id: "state-management",
      title: "10. Managing State to Avoid Re-renders",
      content: [
        {
          type: "list",
          items: [
            "Normalize state",
            "Colocate state where possible",
            "Use selectors and memoization",
          ],
        },
      ],
    },

    {
      id: "monitoring-logging",
      title: "11. Frontend Monitoring & Logging",
      content: [
        {
          type: "list",
          items: [
            "Use Sentry for errors",
            "Log performance metrics",
            "Track user-impacting failures",
          ],
        },
      ],
    },

    {
      id: "non-blocking-render",
      title: "12. Rendering Large Data Without Blocking Main Thread",
      content: [
        {
          type: "list",
          items: [
            "Use Web Workers",
            "Chunk rendering using requestIdleCallback",
            "Virtualize UI",
          ],
        },
      ],
    },

    {
      id: "ab-testing",
      title: "13. Implementing A/B Testing Safely",
      content: [
        {
          type: "list",
          items: ["Feature flags", "Gradual rollout", "User bucketing"],
        },
      ],
    },

    {
      id: "css-performance",
      title: "14. Fixing Janky CSS Animations",
      content: [
        {
          type: "list",
          items: [
            "Animate transform and opacity only",
            "Avoid layout-triggering properties",
            "Use will-change carefully",
          ],
        },
      ],
    },

    {
      id: "real-time-updates",
      title: "15. Handling Real-Time Updates Efficiently",
      content: [
        {
          type: "list",
          items: [
            "Use WebSockets or SSE",
            "Batch UI updates",
            "Throttle re-renders",
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
            "In scenario-based interviews, structure answers as: identify the problem, list possible causes, explain trade-offs, and propose a scalable solution.",
        },
      ],
    },
  ],
};
