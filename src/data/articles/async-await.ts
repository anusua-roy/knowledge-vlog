import type { Article } from "../types";

export const asyncAwaitArticle: Article = {
  id: "async-await",
  title: "Async / Await in JavaScript",
  description:
    "An intuitive explanation of async and await, how they are built on top of promises, and how they simplify asynchronous JavaScript code.",

  tags: ["javascript", "async", "promises", "frontend"],
  level: "beginner",
  prerequisites: ["Promises in JavaScript", "Event Loop"],

  readingTimeMinutes: 8,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "why-async-await",
      title: "Why Async / Await Exists",
      content: [
        {
          type: "text",
          value:
            "Async and await were introduced to make asynchronous code easier to read and reason about. They allow developers to write asynchronous logic that looks synchronous.",
        },
        {
          type: "text",
          value:
            "Under the hood, async and await are built entirely on top of promises. They do not introduce a new asynchronous model.",
        },
      ],
    },

    {
      id: "what-is-async",
      title: "What Does async Do?",
      content: [
        {
          type: "text",
          value:
            "The async keyword is used to declare an asynchronous function. An async function always returns a promise, even if you return a normal value.",
        },
        {
          type: "code",
          language: "js",
          value: `async function getValue() {
  return 42;
}

getValue().then(value => {
  console.log(value);
});`,
        },
        {
          type: "text",
          value:
            "Returning a value from an async function is equivalent to returning a resolved promise.",
        },
      ],
    },

    {
      id: "what-is-await",
      title: "What Does await Do?",
      content: [
        {
          type: "text",
          value:
            "The await keyword pauses the execution of an async function until the promise settles and returns its resolved value.",
        },
        {
          type: "code",
          language: "js",
          value: `async function fetchData() {
  const response = await fetch("/api/data");
  const data = await response.json();
  return data;
}`,
        },
        {
          type: "text",
          value:
            "While execution appears paused, the JavaScript engine is not blocked. Other tasks can still run via the event loop.",
        },
      ],
    },

    {
      id: "async-await-vs-promises",
      title: "Async / Await vs Promise.then",
      content: [
        {
          type: "code",
          language: "js",
          value: `// Using promises
fetch("/api/data")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });

// Using async / await
async function loadData() {
  const res = await fetch("/api/data");
  const data = await res.json();
  console.log(data);
}`,
        },
        {
          type: "text",
          value:
            "Async and await improve readability, especially when multiple asynchronous steps are involved.",
        },
      ],
    },

    {
      id: "error-handling",
      title: "Error Handling with try / catch",
      content: [
        {
          type: "text",
          value:
            "Errors in async functions can be handled using standard try / catch blocks, making error handling more intuitive.",
        },
        {
          type: "code",
          language: "js",
          value: `async function loadData() {
  try {
    const res = await fetch("/api/data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}`,
        },
      ],
    },

    {
      id: "execution-order",
      title: "Async / Await and the Event Loop",
      content: [
        {
          type: "text",
          value:
            "When an async function awaits a promise, execution of that function is paused and resumed later as a microtask once the promise resolves.",
        },
        {
          type: "code",
          language: "js",
          value: `console.log("A");

async function test() {
  console.log("B");
  await Promise.resolve();
  console.log("C");
}

test();
console.log("D");`,
        },
        {
          type: "text",
          value:
            "The output will be A, B, D, C because the code after await runs as a microtask.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common Mistakes",
      content: [
        {
          type: "list",
          items: [
            "Using await outside an async function",
            "Forgetting to handle errors with try / catch",
            "Assuming await blocks the main thread",
            "Overusing async / await for simple synchronous code",
          ],
        },
      ],
    },

    {
      id: "comparison",
      title: "Async / Await vs Promises",
      content: [
        {
          type: "table",
          headers: ["Aspect", "Promises", "Async / Await"],
          rows: [
            ["Syntax", "then / catch chaining", "try / catch blocks"],
            ["Readability", "Moderate", "High"],
            ["Error handling", "catch", "try / catch"],
            ["Underlying model", "Promises", "Promises"],
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
            "In interviews, emphasize that async/await is syntactic sugar over promises and does not block the event loop. Mention microtasks if asked about execution order.",
        },
      ],
    },
  ],
};
