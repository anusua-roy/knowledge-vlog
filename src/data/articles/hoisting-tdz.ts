import type { Article } from "../types";

export const hoistingTDZArticle: Article = {
  id: "hoisting-tdz",
  title: "Hoisting and the Temporal Dead Zone",
  description:
    "An explanation of JavaScript hoisting, how different declarations behave, and what the Temporal Dead Zone means in practice.",

  tags: ["javascript", "fundamentals", "scope"],
  level: "beginner",
  prerequisites: ["Variables", "Execution Context"],

  readingTimeMinutes: 7,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "what-is-hoisting",
      title: "What Is Hoisting?",
      content: [
        {
          type: "text",
          value:
            "Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during the compilation phase.",
        },
        {
          type: "text",
          value: "Only declarations are hoisted, not initializations.",
        },
      ],
    },

    {
      id: "var-hoisting",
      title: "Hoisting with var",
      content: [
        {
          type: "code",
          language: "js",
          value: `console.log(a);
var a = 10;`,
        },
        {
          type: "text",
          value:
            "`var` declarations are hoisted and initialized with `undefined`.",
        },
      ],
    },

    {
      id: "let-const-hoisting",
      title: "Hoisting with let and const",
      content: [
        {
          type: "code",
          language: "js",
          value: `console.log(b);
let b = 20;`,
        },
        {
          type: "text",
          value:
            "`let` and `const` are hoisted but not initialized. Accessing them before declaration causes an error.",
        },
      ],
    },

    {
      id: "tdz",
      title: "Temporal Dead Zone",
      content: [
        {
          type: "text",
          value:
            "The Temporal Dead Zone (TDZ) is the time between entering a scope and the variable’s declaration where accessing it results in an error.",
        },
      ],
    },

    {
      id: "comparison",
      title: "Hoisting Comparison",
      content: [
        {
          type: "table",
          headers: ["Keyword", "Hoisted", "Initialized", "TDZ"],
          rows: [
            ["var", "Yes", "undefined", "No"],
            ["let", "Yes", "No", "Yes"],
            ["const", "Yes", "No", "Yes"],
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
            "In interviews, say that let and const are hoisted but inaccessible due to the Temporal Dead Zone.",
        },
      ],
    },
  ],
};
