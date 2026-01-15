import type { Article } from "../types";

export const memoryManagementArticle: Article = {
  id: "memory-management",
  title: "Memory Management & Garbage Collection in JavaScript",
  description:
    "Understand how JavaScript manages memory, how garbage collection works, and how common coding patterns can lead to memory leaks.",

  tags: ["javascript", "internals", "performance"],
  level: "intermediate",
  prerequisites: ["Closures", "Event Loop"],

  readingTimeMinutes: 7,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "memory-basics",
      title: "How JavaScript Uses Memory",
      content: [
        {
          type: "text",
          value:
            "JavaScript automatically allocates memory when variables are created and frees it when they are no longer needed. This process is handled by the JavaScript engine through garbage collection.",
        },
        {
          type: "list",
          items: [
            "Memory is allocated for variables, objects, and functions",
            "Developers do not manually free memory",
            "Poor references can prevent memory from being released",
          ],
        },
      ],
    },

    {
      id: "garbage-collection",
      title: "Garbage Collection (GC)",
      content: [
        {
          type: "text",
          value:
            "Most JavaScript engines use a mark-and-sweep algorithm. Objects are kept in memory if they are reachable; unreachable objects are cleaned up.",
        },
        {
          type: "list",
          items: [
            "Root objects include global variables and the call stack",
            "Reachable objects stay in memory",
            "Unreachable objects are garbage collected",
          ],
        },
      ],
    },

    {
      id: "common-leaks",
      title: "Common Causes of Memory Leaks",
      content: [
        {
          type: "list",
          items: [
            "Closures holding references to large objects",
            "Event listeners not removed",
            "setInterval or setTimeout not cleared",
            "Detached DOM nodes still referenced in JS",
          ],
        },
      ],
    },

    {
      id: "closure-leak-example",
      title: "Closures and Memory Retention",
      content: [
        {
          type: "code",
          language: "js",
          value: `function attachListener() {
  const largeData = new Array(1000000).fill("data");

  document.body.addEventListener("click", () => {
    console.log(largeData.length);
  });
}`,
        },
        {
          type: "text",
          value:
            "The closure keeps `largeData` in memory as long as the event listener exists.",
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
            "Remove event listeners when no longer needed",
            "Clear intervals and timeouts",
            "Avoid unnecessary global variables",
            "Be cautious with long-lived closures",
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
            "Explain garbage collection using reachability. Mention that closures and event listeners are common sources of memory leaks if not cleaned up properly.",
        },
      ],
    },
  ],
};
