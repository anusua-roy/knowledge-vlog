import type { Article } from "../types";

export const debounceThrottleArticle: Article = {
  id: "debounce-vs-throttle",
  title: "Debounce vs Throttle in JavaScript",
  description:
    "A clear comparison of debounce and throttle, explaining when to use each and how they help improve performance in real-world applications.",

  tags: ["javascript", "performance", "frontend"],
  level: "beginner",
  prerequisites: ["Functions", "Event Handling"],

  readingTimeMinutes: 7,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "why-needed",
      title: "Why Debounce and Throttle Are Needed",
      content: [
        {
          type: "text",
          value:
            "Certain browser events such as scroll, resize, and input fire very frequently. Handling every event can lead to performance issues.",
        },
        {
          type: "text",
          value:
            "Debounce and throttle are techniques used to control how often a function is executed in response to such events.",
        },
      ],
    },

    {
      id: "what-is-debounce",
      title: "What Is Debounce?",
      content: [
        {
          type: "text",
          value:
            "Debounce delays the execution of a function until a specified amount of time has passed since the last event.",
        },
        {
          type: "code",
          language: "js",
          value: `function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}`,
        },
      ],
    },

    {
      id: "what-is-throttle",
      title: "What Is Throttle?",
      content: [
        {
          type: "text",
          value:
            "Throttle ensures a function is executed at most once in a specified time interval, regardless of how many events occur.",
        },
        {
          type: "code",
          language: "js",
          value: `function throttle(fn, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}`,
        },
      ],
    },

    {
      id: "comparison",
      title: "Debounce vs Throttle",
      content: [
        {
          type: "table",
          headers: ["Aspect", "Debounce", "Throttle"],
          rows: [
            ["Execution", "After inactivity", "At regular intervals"],
            ["Best use case", "Search input", "Scroll, resize"],
            ["Frequency", "Once after delay", "Controlled rate"],
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common Mistakes",
      content: [
        {
          type: "list",
          items: [
            "Using debounce where throttle is needed",
            "Forgetting to clear timers",
            "Overusing both unnecessarily",
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
            "In interviews, explain debounce vs throttle with examples like search input and scroll handlers. Clarity matters more than code.",
        },
      ],
    },
  ],
};
