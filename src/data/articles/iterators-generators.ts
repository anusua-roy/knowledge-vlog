import type { Article } from "../types";

export const iteratorsGeneratorsArticle: Article = {
  id: "iterators-generators",
  title: "Iterators & Generators in JavaScript",
  description:
    "Learn how iteration works in JavaScript using iterators and generators, and why they are useful for controlling execution flow.",

  tags: ["javascript", "advanced"],
  level: "intermediate",
  prerequisites: ["Functions", "Closures"],

  readingTimeMinutes: 7,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "what-is-iterator",
      title: "What Is an Iterator?",
      content: [
        {
          type: "text",
          value:
            "An iterator is an object that defines a sequence and returns values one at a time using a `next()` method.",
        },
        {
          type: "list",
          items: [
            "Iterators follow a standard protocol",
            "`next()` returns { value, done }",
            "Used internally by loops like for...of",
          ],
        },
      ],
    },

    {
      id: "symbol-iterator",
      title: "The Symbol.iterator Protocol",
      content: [
        {
          type: "code",
          language: "js",
          value: `const iterable = {
  values: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => ({
        value: this.values[index++],
        done: index > this.values.length
      })
    };
  }
};

for (const val of iterable) {
  console.log(val);
}`,
        },
      ],
    },

    {
      id: "what-is-generator",
      title: "What Is a Generator?",
      content: [
        {
          type: "text",
          value:
            "Generators are special functions that can pause execution and resume later. They simplify iterator creation.",
        },
        {
          type: "code",
          language: "js",
          value: `function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
gen.next(); // { value: 1, done: false }`,
        },
      ],
    },

    {
      id: "generators-vs-promises",
      title: "Generators vs Promises",
      content: [
        {
          type: "table",
          headers: ["Aspect", "Generators", "Promises"],
          rows: [
            ["Execution", "Paused and resumed", "Always async"],
            ["Control flow", "Manual", "Automatic"],
            ["Use case", "Custom iteration", "Async workflows"],
          ],
        },
      ],
    },

    {
      id: "use-cases",
      title: "Real-World Use Cases",
      content: [
        {
          type: "list",
          items: [
            "Custom iterable data structures",
            "Lazy evaluation",
            "Controlling execution flow step-by-step",
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
            "In interviews, explain generators as syntactic sugar over iterators and emphasize their ability to pause and resume execution.",
        },
      ],
    },
  ],
};
