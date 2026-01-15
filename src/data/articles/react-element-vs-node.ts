import type { Article } from "../types";

export const reactElementNodeArticle: Article = {
  id: "react-element-node",
  title: "React Element vs React Node",
  description: "A comparison of React Element and React Node with examples.",

  tags: ["react", "fundamentals"],
  level: "beginner",
  prerequisites: ["React Basics"],

  readingTimeMinutes: 4,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "comparison",
      title: "Comparison",
      content: [
        {
          type: "table",
          headers: ["Aspect", "React Element", "React Node"],
          rows: [
            ["What it is", "Object", "Anything renderable"],
            ["Examples", "<div />", "string, number, element"],
            ["Usage", "Returned by JSX", "Children props"],
          ],
        },
      ],
    },
  ],
};
