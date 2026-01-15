import type { Article } from "../types";

export const dataStructuresArticle: Article = {
  id: "data-structures",
  title: "Data Structures in JavaScript",
  description:
    "An overview of primitive and non-primitive data structures in JavaScript and their common use cases.",

  tags: ["javascript", "data-structures"],
  level: "beginner",
  prerequisites: ["Variables"],

  readingTimeMinutes: 7,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "primitive-vs-non",
      title: "Primitive vs Non-Primitive",
      content: [
        {
          type: "table",
          headers: ["Type", "Stored by", "Examples"],
          rows: [
            ["Primitive", "Value", "Number, String, Boolean"],
            ["Non-Primitive", "Reference", "Object, Array, Map"],
          ],
        },
      ],
    },
    {
      id: "non-primitive",
      title: "Non-Primitive Structures",
      content: [
        {
          type: "list",
          items: ["Array", "Object", "Map", "Set", "WeakMap", "WeakSet"],
        },
      ],
    },
  ],
};
