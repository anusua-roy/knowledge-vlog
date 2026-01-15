import type { Article } from "../types";

export const eventDelegationArticle: Article = {
  id: "event-delegation",
  title: "Event Delegation in JavaScript",
  description:
    "An explanation of event delegation, bubbling, and why it is used to handle events efficiently.",

  tags: ["javascript", "dom"],
  level: "beginner",
  prerequisites: ["DOM Events"],

  readingTimeMinutes: 6,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "what-it-is",
      title: "What Is Event Delegation?",
      content: [
        {
          type: "text",
          value:
            "Event delegation is a technique where a single event listener is attached to a parent element instead of individual child elements.",
        },
      ],
    },
    {
      id: "why-needed",
      title: "Why It Is Needed",
      content: [
        {
          type: "list",
          items: [
            "Improves performance",
            "Handles dynamically added elements",
            "Reduces memory usage",
          ],
        },
      ],
    },
    {
      id: "example",
      title: "Example",
      content: [
        {
          type: "code",
          language: "js",
          value: `document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});`,
        },
      ],
    },
  ],
};
