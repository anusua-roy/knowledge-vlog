import type { Article } from "../types";

export const closuresArticle: Article = {
  id: "closures",
  title: "Closures in JavaScript",
  description:
    "A clear explanation of JavaScript closures, how they work under the hood, and why they are heavily used in real-world applications and interviews.",

  tags: ["javascript", "fundamentals", "functions"],
  level: "beginner",
  prerequisites: ["Functions", "Lexical Scope"],

  readingTimeMinutes: 8,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "why-closures-exist",
      title: "Why Do Closures Exist?",
      content: [
        {
          type: "text",
          value:
            "Closures exist because JavaScript allows functions to remember and access variables from the scope in which they were created, even after that scope has finished execution.",
        },
        {
          type: "text",
          value:
            "This behavior enables powerful patterns such as data encapsulation, function factories, and maintaining state without using global variables.",
        },
      ],
    },

    {
      id: "lexical-scope",
      title: "Lexical Scope: The Foundation",
      content: [
        {
          type: "text",
          value:
            "Before understanding closures, it is important to understand lexical scope. Lexical scope means that a function’s access to variables is determined by where the function is written in the code, not where it is called.",
        },
        {
          type: "code",
          language: "js",
          value: `function outer() {
  const outerVar = "I am outside";

  function inner() {
    console.log(outerVar);
  }

  inner();
}

outer();`,
        },
      ],
    },

    {
      id: "what-is-closure",
      title: "What Is a Closure?",
      content: [
        {
          type: "text",
          value:
            "A closure is created when a function retains access to variables from its outer (lexical) scope even after the outer function has finished executing.",
        },
        {
          type: "code",
          language: "js",
          value: `function outer() {
  const count = 0;

  return function inner() {
    console.log(count);
  };
}

const fn = outer();
fn();`,
        },
        {
          type: "text",
          value:
            "Even though the outer function has completed execution, the inner function still has access to the variable `count`. This preserved access is called a closure.",
        },
      ],
    },

    {
      id: "how-it-works",
      title: "How Closures Work Internally",
      content: [
        {
          type: "text",
          value:
            "When a function is created, JavaScript stores a reference to its lexical environment. If an inner function references variables from that environment, the environment is kept alive in memory.",
        },
        {
          type: "list",
          items: [
            "Functions remember the scope in which they were created",
            "Referenced variables are not garbage collected",
            "Each function call can create a new closure",
          ],
        },
      ],
    },

    {
      id: "common-use-cases",
      title: "Common Use Cases of Closures",
      content: [
        {
          type: "list",
          items: [
            "Data encapsulation and private variables",
            "Function factories",
            "Callbacks and event handlers",
            "Maintaining state across function calls",
          ],
        },
        {
          type: "code",
          language: "js",
          value: `function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2`,
        },
      ],
    },

    {
      id: "closure-in-loops",
      title: "Closures in Loops (Common Pitfall)",
      content: [
        {
          type: "text",
          value:
            "Closures inside loops often cause confusion, especially when using `var`. All closures created with `var` share the same variable binding.",
        },
        {
          type: "code",
          language: "js",
          value: `for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}`,
        },
        {
          type: "text",
          value:
            "This logs `3` three times because `var` is function-scoped. Using `let` creates a new binding for each iteration.",
        },
      ],
    },

    {
      id: "var-vs-let",
      title: "Why let Works Better with Closures",
      content: [
        {
          type: "code",
          language: "js",
          value: `for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}`,
        },
        {
          type: "text",
          value:
            "Using `let` creates a new block-scoped variable for each iteration, allowing each closure to capture the correct value.",
        },
      ],
    },

    {
      id: "comparison",
      title: "Closure vs Normal Function Execution",
      content: [
        {
          type: "table",
          headers: ["Aspect", "Normal Function", "Closure"],
          rows: [
            ["Scope access", "Only local scope", "Local + outer scope"],
            ["Memory retention", "Variables released", "Variables retained"],
            ["Common use", "Simple logic", "Stateful logic"],
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common Misconceptions",
      content: [
        {
          type: "list",
          items: [
            "Closures are not created manually; they happen automatically",
            "Closures are not slow by default",
            "Closures do not copy variables, they reference them",
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
            "In interviews, explain closures using a simple example where an inner function accesses a variable after the outer function returns. Avoid theoretical definitions unless asked.",
        },
      ],
    },
  ],
};
