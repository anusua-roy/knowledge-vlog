import type { Article } from "../types";

export const eventLoopArticle: Article = {
  id: "event-loop",
  title: "Understanding the JavaScript Event Loop",
  description:
    "A practical and intuitive explanation of how JavaScript executes synchronous and asynchronous code, including call stack, task queues, and microtasks.",

  tags: ["javascript", "frontend", "fundamentals", "async"],
  level: "beginner",
  prerequisites: ["Basic JavaScript", "Functions"],

  readingTimeMinutes: 10,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "why-event-loop-exists",
      title: "Why Does JavaScript Need an Event Loop?",
      content: [
        {
          type: "text",
          value:
            "JavaScript is single-threaded, meaning it can execute only one piece of code at a time. This design simplifies the language but raises an important question: how does JavaScript handle time-consuming operations like network requests, timers, or user interactions without blocking the entire application?",
        },
        {
          type: "text",
          value:
            "The answer is the Event Loop. It allows JavaScript to remain responsive by delegating long-running tasks to the browser or runtime environment and executing their callbacks later when the call stack is free.",
        },
      ],
    },

    {
      id: "core-components",
      title: "Core Components Involved",
      content: [
        {
          type: "text",
          value:
            "To understand the event loop, it helps to break the runtime into a few core components that work together.",
        },
        {
          type: "list",
          items: [
            "Call Stack – where JavaScript executes function calls.",
            "Web APIs / Runtime APIs – provided by the browser or Node.js.",
            "Task Queue (Macrotask Queue) – holds callbacks from timers and events.",
            "Microtask Queue – holds promise callbacks.",
            "Event Loop – coordinates execution.",
          ],
        },
        {
          type: "image",
          src: `${import.meta.env.BASE_URL}images/event-loop-diagram.webp`,
          alt: "JavaScript Event Loop components and execution flow",
          caption:
            "The event loop coordinates the call stack, task queues, and runtime APIs to execute JavaScript asynchronously.",
        },
      ],
    },

    {
      id: "call-stack",
      title: "The Call Stack",
      content: [
        {
          type: "text",
          value:
            "The call stack is a stack data structure that keeps track of function execution. When a function is called, it is pushed onto the stack. When it finishes, it is popped off.",
        },
        {
          type: "text",
          value:
            "Because JavaScript has only one call stack, it can only execute one function at a time.",
        },
      ],
    },

    {
      id: "sync-vs-async",
      title: "Synchronous vs Asynchronous Code",
      content: [
        {
          type: "text",
          value:
            "Synchronous code executes immediately on the call stack. Asynchronous operations, however, are handed off to the runtime environment and completed later.",
        },
        {
          type: "code",
          language: "js",
          value: `console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 1000);

console.log("End");`,
        },
        {
          type: "text",
          value:
            "Even though the timeout is set to 0ms or 1000ms, the callback does not execute immediately. It is queued and waits until the call stack is empty.",
        },
      ],
    },

    {
      id: "task-queues",
      title: "Macrotask Queue vs Microtask Queue",
      content: [
        {
          type: "text",
          value:
            "Not all asynchronous callbacks are treated equally. JavaScript uses two primary queues: the macrotask queue and the microtask queue.",
        },
        {
          type: "text",
          value:
            "Macrotasks include setTimeout, setInterval, and DOM events. Microtasks include Promise.then, catch, finally, and queueMicrotask.",
        },
        {
          type: "text",
          value:
            "The event loop always processes all microtasks before moving on to the next macrotask.",
        },
        {
          type: "table",
          headers: ["Aspect", "Macrotask", "Microtask"],
          rows: [
            [
              "Examples",
              "setTimeout, setInterval, DOM events",
              "Promise.then, catch, finally",
            ],
            ["Priority", "Lower", "Higher"],
            ["When executed", "After microtasks", "Before next macrotask"],
            ["Use case", "Timers, UI events", "Async chaining"],
          ],
        },
      ],
    },

    {
      id: "event-loop-example",
      title: "Event Loop in Action (Execution Order)",
      content: [
        {
          type: "code",
          language: "js",
          value: `console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");`,
        },
        {
          type: "text",
          value: "Expected output:",
        },
        {
          type: "code",
          language: "js",
          value: `A
D
C
B`,
        },
        {
          type: "text",
          value: "Explanation:",
        },
        {
          type: "list",
          items: [
            "Synchronous code runs first (A, D).",
            "Promise callbacks go to the microtask queue.",
            "setTimeout callbacks go to the macrotask queue.",
            "Microtasks are executed before macrotasks.",
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common Misconceptions",
      content: [
        {
          type: "text",
          value:
            "A common misconception is that setTimeout(fn, 0) executes immediately. In reality, it only means the callback is eligible to run after the current call stack and microtasks are complete.",
        },
        {
          type: "text",
          value:
            "Another misunderstanding is assuming promises are multithreaded. Promises are still single-threaded; they are just scheduled differently via the microtask queue.",
        },
      ],
    },

    {
      id: "why-it-matters",
      title: "Why the Event Loop Matters in Practice",
      content: [
        {
          type: "text",
          value:
            "Understanding the event loop helps you debug unexpected execution order, avoid blocking the UI, write efficient asynchronous code, and perform well in frontend interviews.",
        },
        {
          type: "text",
          value:
            "It also explains why certain performance optimizations work, such as debouncing, throttling, and breaking heavy computations into smaller tasks.",
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
            "If asked about the event loop in interviews, focus on explaining execution order using a simple example. Mention that microtasks always run before macrotasks, and avoid going too deep unless asked.",
        },
      ],
    },
  ],
};
