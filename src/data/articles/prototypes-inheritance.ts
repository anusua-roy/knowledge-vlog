import type { Article } from "../types";

export const prototypesInheritanceArticle: Article = {
  id: "prototypes-inheritance",
  title: "JavaScript Prototypes & Inheritance",
  description:
    "A deep dive into JavaScript’s prototype-based inheritance model, explaining how objects share behavior and how property lookup works under the hood.",

  tags: ["javascript", "internals"],
  level: "intermediate",
  prerequisites: ["Objects", "Functions"],

  readingTimeMinutes: 10,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "what-is-prototype",
      title: "What Is a Prototype?",
      content: [
        {
          type: "text",
          value:
            "In JavaScript, every object has an internal reference to another object called its prototype. This prototype is used as a fallback for property and method lookups.",
        },
      ],
    },
    {
      id: "prototype-chain",
      title: "The Prototype Chain",
      content: [
        {
          type: "text",
          value:
            "When accessing a property, JavaScript first checks the object itself. If not found, it checks the object’s prototype, then the prototype’s prototype, and so on until it reaches null.",
        },
        {
          type: "code",
          language: "js",
          value: `const obj = {};
console.log(obj.toString); // found via Object.prototype`,
        },
      ],
    },
    {
      id: "proto-vs-prototype",
      title: "__proto__ vs prototype",
      content: [
        {
          type: "list",
          items: [
            "`__proto__` exists on objects and points to their prototype",
            "`prototype` exists on constructor functions",
            "`new` links object.__proto__ to Constructor.prototype",
          ],
        },
      ],
    },
    {
      id: "inheritance-patterns",
      title: "Inheritance Patterns",
      content: [
        {
          type: "code",
          language: "js",
          value: `function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  console.log("Hi " + this.name);
};

const p = new Person("Anu");
p.sayHi();`,
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
            "JavaScript uses prototype-based, not class-based inheritance",
            "Classes are syntactic sugar over prototypes",
            "Understanding lookup order helps debug unexpected behavior",
          ],
        },
      ],
    },
  ],
};
