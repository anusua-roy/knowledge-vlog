import type { Article } from "../types";

export const promisesArticle: Article = {
  id: "promises",
  title: "Promises in JavaScript",
  description:
    "A practical guide to JavaScript Promises, explaining their states, execution flow, chaining, error handling, and how they simplify asynchronous code.",

  tags: ["javascript", "async", "frontend"],
  level: "beginner",
  prerequisites: ["Functions", "Closures", "Event Loop"],

  readingTimeMinutes: 9,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "why-promises-exist",
      title: "Why Do Promises Exist?",
      content: [
        {
          type: "text",
          value:
            "Promises were introduced to handle asynchronous operations in a more predictable and readable way than traditional callbacks.",
        },
        {
          type: "text",
          value:
            "Before promises, deeply nested callbacks (often called callback hell) made code hard to read, debug, and maintain.",
        },
      ],
    },

    {
      id: "what-is-promise",
      title: "What Is a Promise?",
      content: [
        {
          type: "text",
          value:
            "A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
        },
        {
          type: "code",
          language: "js",
          value: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation successful");
  }, 1000);
});`,
        },
      ],
    },

    {
      id: "promise-states",
      title: "Promise States",
      content: [
        {
          type: "list",
          items: [
            "Pending – initial state, neither fulfilled nor rejected",
            "Fulfilled – operation completed successfully",
            "Rejected – operation failed",
          ],
        },
        {
          type: "text",
          value:
            "Once a promise is fulfilled or rejected, its state cannot change.",
        },
      ],
    },

    {
      id: "consuming-promises",
      title: "Consuming Promises with then and catch",
      content: [
        {
          type: "code",
          language: "js",
          value: `fetch("/api/data")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });`,
        },
        {
          type: "text",
          value:
            "The `then` method handles fulfilled promises, while `catch` handles rejected ones.",
        },
      ],
    },

    {
      id: "promise-chaining",
      title: "Promise Chaining",
      content: [
        {
          type: "text",
          value:
            "Promises can be chained because `then` itself returns a new promise. This allows sequential asynchronous operations without nesting.",
        },
        {
          type: "code",
          language: "js",
          value: `getUser()
  .then(user => getOrders(user.id))
  .then(orders => processOrders(orders))
  .catch(error => {
    console.error(error);
  });`,
        },
      ],
    },

    {
      id: "error-handling",
      title: "Error Handling in Promises",
      content: [
        {
          type: "text",
          value:
            "If a promise is rejected at any point in a chain, control jumps directly to the nearest `catch` block.",
        },
        {
          type: "code",
          language: "js",
          value: `Promise.resolve()
  .then(() => {
    throw new Error("Something went wrong");
  })
  .then(() => {
    console.log("This will not run");
  })
  .catch(err => {
    console.error(err.message);
  });`,
        },
      ],
    },

    {
      id: "promise-microtasks",
      title: "Promises and the Event Loop",
      content: [
        {
          type: "text",
          value:
            "Promise callbacks are scheduled as microtasks. This means they run before macrotasks such as setTimeout callbacks.",
        },
        {
          type: "code",
          language: "js",
          value: `console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

setTimeout(() => {
  console.log("C");
}, 0);

console.log("D");`,
        },
        {
          type: "text",
          value:
            "The output will be A, D, B, C because microtasks run before macrotasks.",
        },
      ],
    },
    {
      id: "promise-helpers",
      title: "Promise Utility Methods (In Detail)",
      content: [
        {
          type: "table",
          headers: [
            "Method",
            "When it resolves",
            "When it rejects",
            "Use case",
          ],
          rows: [
            [
              "Promise.all",
              "When all promises resolve",
              "If any promise rejects",
              "Multiple dependent async calls",
            ],
            [
              "Promise.allSettled",
              "Always resolves",
              "Never rejects",
              "When you need results of all promises",
            ],
            [
              "Promise.race",
              "First promise settles",
              "First promise settles",
              "Timeouts, competing requests",
            ],
            [
              "Promise.any",
              "First promise fulfills",
              "If all promises reject",
              "Fallback strategies",
            ],
          ],
        },
        {
          type: "code",
          language: "js",
          value: `Promise.all([
  fetch("/api/user"),
  fetch("/api/orders")
]).then(([user, orders]) => {
  console.log("Both resolved");
}).catch(() => {
  console.log("One failed");
});`,
        },
      ],
    },
    {
      id: "comparison",
      title: "Promises vs Callbacks",
      content: [
        {
          type: "table",
          headers: ["Aspect", "Callbacks", "Promises"],
          rows: [
            ["Readability", "Poor with nesting", "Better with chaining"],
            ["Error handling", "Manual", "Centralized with catch"],
            ["Composability", "Hard", "Easy"],
          ],
        },
      ],
    },
    {
      id: "async-await",
      title: "Async / Await (Promise Syntax Sugar)",
      content: [
        {
          type: "text",
          value:
            "async and await are built on top of Promises. They do not replace promises; they provide a more readable syntax for working with them.",
        },
        {
          type: "code",
          language: "js",
          value: `async function fetchData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}`,
        },
        {
          type: "text",
          value:
            "Under the hood, async functions return promises, and await pauses execution until the promise settles.",
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
            "Forgetting to return a promise inside then",
            "Mixing callbacks and promises",
            "Not handling errors with catch",
            "Assuming promises are synchronous",
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
            "In interviews, clearly explain promise states and chaining. Mention that promise callbacks run as microtasks and avoid going deep into async/await unless asked.",
        },
      ],
    },
  ],
};
