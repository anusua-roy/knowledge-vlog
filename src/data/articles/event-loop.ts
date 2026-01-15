import type { Article } from "../types";

export const eventLoopArticle: Article = {
  id: "event-loop",
  title: "JavaScript Event Loop",
  tags: ["javascript", "frontend"],
  sections: [
    {
      id: "basics",
      title: "What is the Event Loop?",
      content: [
        {
          type: "text",
          value:
            "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded.",
        },
        {
          type: "code",
          language: "js",
          value: `console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");`,
        },
      ],
    },
  ],
};
