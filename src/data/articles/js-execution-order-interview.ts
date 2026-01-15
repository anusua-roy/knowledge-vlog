import type { Article } from "../types";

export const jsExecutionOrderInterviewArticle: Article = {
  id: "js-execution-order-interview",
  title: "JavaScript Execution Order: Tricky Interview Questions",
  description:
    "A collection of common and tricky JavaScript interview questions that test execution order, event loop behavior, hoisting, promises, async/await, and scoping.",

  tags: ["javascript", "interview", "event-loop", "async"],
  level: "intermediate",
  prerequisites: [
    "Event Loop",
    "Promises",
    "Async / Await",
    "Hoisting",
    "var let const",
  ],

  readingTimeMinutes: 15,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "sync-vs-async",
      title: "Synchronous vs Asynchronous Execution",
      content: [
        {
          type: "code",
          language: "js",
          value: `console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");`,
        },
        {
          type: "text",
          value: "Output:",
        },
        {
          type: "code",
          language: "js",
          value: `A
C
B`,
        },
        {
          type: "list",
          items: [
            "Synchronous code runs first",
            "setTimeout callback goes to macrotask queue",
            "Macrotasks run only after call stack is empty",
          ],
        },
      ],
    },

    {
      id: "promise-vs-timeout",
      title: "Promise vs setTimeout",
      content: [
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
          value: "Output:",
        },
        {
          type: "code",
          language: "js",
          value: `A
D
B
C`,
        },
        {
          type: "list",
          items: [
            "Promise callbacks are microtasks",
            "Microtasks run before macrotasks",
            "setTimeout callbacks are macrotasks",
          ],
        },
      ],
    },

    {
      id: "async-await-order",
      title: "Async / Await Execution Order",
      content: [
        {
          type: "code",
          language: "js",
          value: `async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

console.log("C");
test();
console.log("D");`,
        },
        {
          type: "text",
          value: "Output:",
        },
        {
          type: "code",
          language: "js",
          value: `C
A
D
B`,
        },
        {
          type: "list",
          items: [
            "Code before await runs synchronously",
            "await pauses function execution",
            "Code after await runs as a microtask",
          ],
        },
      ],
    },

    {
      id: "multiple-promises",
      title: "Multiple Promise Chains",
      content: [
        {
          type: "code",
          language: "js",
          value: `Promise.resolve()
  .then(() => {
    console.log("A");
  })
  .then(() => {
    console.log("B");
  });

Promise.resolve().then(() => {
  console.log("C");
});`,
        },
        {
          type: "text",
          value: "Output:",
        },
        {
          type: "code",
          language: "js",
          value: `A
C
B`,
        },
        {
          type: "list",
          items: [
            "Microtasks are queued in order",
            "Each then adds a new microtask",
            "Second promise’s then can interleave",
          ],
        },
      ],
    },

    {
      id: "var-hoisting",
      title: "Hoisting with var",
      content: [
        {
          type: "code",
          language: "js",
          value: `console.log(a);
var a = 10;`,
        },
        {
          type: "text",
          value: "Output:",
        },
        {
          type: "code",
          language: "js",
          value: `undefined`,
        },
        {
          type: "list",
          items: [
            "var declarations are hoisted",
            "Initialization happens later",
            "Access before assignment gives undefined",
          ],
        },
      ],
    },

    {
      id: "let-tdz",
      title: "let and Temporal Dead Zone",
      content: [
        {
          type: "code",
          language: "js",
          value: `console.log(b);
let b = 20;`,
        },
        {
          type: "text",
          value: "Output:",
        },
        {
          type: "code",
          language: "js",
          value: `ReferenceError`,
        },
        {
          type: "list",
          items: [
            "let is hoisted but not initialized",
            "Access before declaration is illegal",
            "This phase is called Temporal Dead Zone",
          ],
        },
      ],
    },

    {
      id: "closures-loop",
      title: "Closures Inside Loops",
      content: [
        {
          type: "code",
          language: "js",
          value: `for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}`,
        },
        {
          type: "text",
          value: "Output:",
        },
        {
          type: "code",
          language: "js",
          value: `3
3
3`,
        },
        {
          type: "list",
          items: [
            "var is function-scoped",
            "All callbacks share the same variable",
            "Loop finishes before callbacks run",
          ],
        },
      ],
    },

    {
      id: "let-loop",
      title: "let Inside Loops",
      content: [
        {
          type: "code",
          language: "js",
          value: `for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}`,
        },
        {
          type: "text",
          value: "Output:",
        },
        {
          type: "code",
          language: "js",
          value: `0
1
2`,
        },
        {
          type: "list",
          items: [
            "let is block-scoped",
            "Each iteration creates a new binding",
            "Each callback captures its own value",
          ],
        },
      ],
    },

    {
      id: "promise-reject-chain",
      title: "Promise Reject Flow",
      content: [
        {
          type: "code",
          language: "js",
          value: `Promise.resolve()
  .then(() => {
    throw new Error("fail");
  })
  .then(() => {
    console.log("A");
  })
  .catch(() => {
    console.log("B");
  });`,
        },
        {
          type: "text",
          value: "Output:",
        },
        {
          type: "code",
          language: "js",
          value: `B`,
        },
        {
          type: "list",
          items: [
            "Throwing inside then rejects the promise",
            "Execution jumps to nearest catch",
            "Subsequent then is skipped",
          ],
        },
      ],
    },

    {
      id: "final-tip",
      title: "Interview Tip",
      content: [
        {
          type: "text",
          value:
            "In interviews, always explain execution in this order: synchronous code, microtasks, macrotasks. Talk while reasoning — interviewers care more about your thought process than speed.",
        },
      ],
    },
  ],
};
