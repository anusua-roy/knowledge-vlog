import type { Article } from "../types";

export const bindCallApplyArticle: Article = {
  id: "bind-call-apply",
  title: "bind vs call vs apply in JavaScript",
  description:
    "A comparison of bind, call, and apply, explaining how function context works and when to use each method.",

  tags: ["javascript", "functions"],
  level: "beginner",
  prerequisites: ["Functions", "this keyword"],

  readingTimeMinutes: 6,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "why-context-matters",
      title: "Why Function Context Matters",
      content: [
        {
          type: "text",
          value:
            "In JavaScript, the value of `this` depends on how a function is called. bind, call, and apply allow explicit control over this value.",
        },
      ],
    },
    {
      id: "definitions",
      title: "Definitions",
      content: [
        {
          type: "table",
          headers: ["Method", "Execution", "Arguments"],
          rows: [
            ["call", "Immediate", "Comma separated"],
            ["apply", "Immediate", "Array"],
            ["bind", "Deferred", "Comma separated"],
          ],
        },
      ],
    },
    {
      id: "examples",
      title: "Examples",
      content: [
        {
          type: "code",
          language: "js",
          value: `function greet(city) {
  console.log(this.name + " from " + city);
}

const user = { name: "Anu" };

greet.call(user, "Kolkata");
greet.apply(user, ["Delhi"]);
const bound = greet.bind(user);
bound("Mumbai");`,
        },
      ],
    },
  ],
};
