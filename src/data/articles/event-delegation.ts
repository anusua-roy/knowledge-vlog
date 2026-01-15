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
      id: "bubbling-capturing",
      title: "Event Bubbling and Capturing",
      content: [
        {
          type: "text",
          value:
            "Event delegation relies on event bubbling. When an event occurs on a child element, it bubbles up through its parent elements until it reaches the document.",
        },
        {
          type: "list",
          items: [
            "Capturing phase: event travels from root to target",
            "Target phase: event reaches the target element",
            "Bubbling phase: event bubbles back up to the root",
          ],
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
      id: "how-it-works",
      title: "How Event Delegation Works",
      content: [
        {
          type: "text",
          value:
            "Instead of attaching listeners to each child, a single listener on the parent handles events from all children using the event object.",
        },
        {
          type: "text",
          value:
            "The event object provides information about where the event originated, allowing us to identify the actual target element.",
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
    {
      id: "target-vs-current",
      title: "event.target vs event.currentTarget",
      content: [
        {
          type: "text",
          value:
            "`event.target` refers to the element that triggered the event, while `event.currentTarget` refers to the element on which the event listener is attached.",
        },
        {
          type: "code",
          language: "js",
          value: `document.getElementById("list").addEventListener("click", (e) => {
  console.log(e.target);        // actual clicked element
  console.log(e.currentTarget); // parent element
});`,
        },
      ],
    },
    {
      id: "common-mistakes",
      title: "Common Mistakes and Edge Cases",
      content: [
        {
          type: "list",
          items: [
            "Forgetting to check event.target before acting",
            "Using delegation on non-bubbling events (e.g., focus, blur)",
            "Overusing delegation for deeply nested elements",
            "Relying on tagName instead of safer selectors",
          ],
        },
      ],
    },
    {
      id: "real-world-usage",
      title: "Real-World Usage",
      content: [
        {
          type: "text",
          value:
            "Event delegation is commonly used in dynamic UIs where elements are frequently added or removed, such as lists, tables, or menus.",
        },
        {
          type: "text",
          value:
            "Frameworks like React internally use event delegation to efficiently manage events at scale.",
        },
      ],
    },
  ],
};
