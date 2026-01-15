import type { Article } from "../types";

export const mapWeakMapArticle: Article = {
  id: "map-vs-weakmap",
  title: "Map vs WeakMap in JavaScript",
  description:
    "A comparison of Map and WeakMap, explaining memory management and real-world scenarios.",

  tags: ["javascript", "memory"],
  level: "intermediate",
  prerequisites: ["Objects", "Garbage Collection"],

  readingTimeMinutes: 5,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "difference",
      title: "Key Differences",
      content: [
        {
          type: "table",
          headers: ["Aspect", "Map", "WeakMap"],
          rows: [
            ["Key type", "Any", "Objects only"],
            ["Garbage collected", "No", "Yes"],
            ["Iterable", "Yes", "No"],
          ],
        },
      ],
    },
    {
      id: "use-case",
      title: "When to Use WeakMap",
      content: [
        {
          type: "text",
          value:
            "WeakMap is useful for storing metadata about objects without preventing garbage collection.",
        },
      ],
    },
  ],
};
