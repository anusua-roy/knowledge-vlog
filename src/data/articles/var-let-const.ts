import type { Article } from "../types";

export const varLetConstArticle: Article = {
  id: "var-let-const",
  title: "var vs let vs const in JavaScript",
  description:
    "A comparison of var, let, and const, explaining scope, hoisting behavior, and best practices for modern JavaScript.",

  tags: ["javascript", "fundamentals", "variables"],
  level: "beginner",
  prerequisites: ["Hoisting", "Scope"],

  readingTimeMinutes: 6,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "why-difference-matters",
      title: "Why the Difference Matters",
      content: [
        {
          type: "text",
          value:
            "JavaScript provides multiple ways to declare variables, but choosing the wrong one can lead to bugs and unexpected behavior.",
        },
      ],
    },

    {
      id: "var",
      title: "var",
      content: [
        {
          type: "text",
          value:
            "`var` is function-scoped and allows redeclaration, which can lead to accidental overwrites.",
        },
      ],
    },

    {
      id: "let",
      title: "let",
      content: [
        {
          type: "text",
          value:
            "`let` is block-scoped and does not allow redeclaration within the same scope.",
        },
      ],
    },

    {
      id: "const",
      title: "const",
      content: [
        {
          type: "text",
          value:
            "`const` is block-scoped and prevents reassignment, but object contents can still be mutated.",
        },
      ],
    },

    {
      id: "comparison",
      title: "Comparison",
      content: [
        {
          type: "table",
          headers: ["Aspect", "var", "let", "const"],
          rows: [
            ["Scope", "Function", "Block", "Block"],
            ["Hoisted", "Yes", "Yes (TDZ)", "Yes (TDZ)"],
            ["Redeclaration", "Allowed", "Not allowed", "Not allowed"],
            ["Reassignment", "Allowed", "Allowed", "Not allowed"],
          ],
        },
      ],
    },

    {
      id: "best-practices",
      title: "Best Practices",
      content: [
        {
          type: "list",
          items: [
            "Prefer const by default",
            "Use let when reassignment is needed",
            "Avoid var in modern JavaScript",
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
            "In interviews, say you prefer const, then let, and avoid var unless required.",
        },
      ],
    },
  ],
};
