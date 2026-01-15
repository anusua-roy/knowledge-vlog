import type { Article } from "../types";

export const polyfillsArticle: Article = {
  id: "polyfills",
  title: "Writing Safe Polyfills in JavaScript",
  description:
    "Learn how to write polyfills for array methods and safely extend built-in prototypes without breaking existing behavior.",

  tags: ["javascript", "polyfills"],
  level: "intermediate",
  prerequisites: ["Arrays", "Functions"],

  readingTimeMinutes: 10,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "what-is-polyfill",
      title: "What Is a Polyfill?",
      content: [
        {
          type: "text",
          value:
            "A polyfill is code that provides modern functionality on older environments where it is not natively supported.",
        },
      ],
    },
    {
      id: "my-map",
      title: "Polyfill: Array.map",
      content: [
        {
          type: "code",
          language: "js",
          value: `Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};`,
        },
      ],
    },
    {
      id: "my-reduce",
      title: "Polyfill: Array.reduce",
      content: [
        {
          type: "code",
          language: "js",
          value: `Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};`,
        },
      ],
    },
    {
      id: "safe-extension",
      title: "Making Polyfills Safe",
      content: [
        {
          type: "text",
          value:
            "Extending prototypes directly can be dangerous. Always make custom methods non-enumerable to avoid breaking loops.",
        },
        {
          type: "code",
          language: "js",
          value: `Object.defineProperty(Array.prototype, "myReduce", {
  enumerable: false
});`,
        },
      ],
    },
    {
      id: "interview-notes",
      title: "Interview Notes",
      content: [
        {
          type: "list",
          items: [
            "Polyfills test understanding of closures and callbacks",
            "Always mention non-enumerability in interviews",
            "Never override existing native methods",
          ],
        },
      ],
    },
  ],
};
