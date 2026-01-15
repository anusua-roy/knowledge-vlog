import type { Article } from "../types";

export const bindCallApplyArticle: Article = {
  id: "bind-call-apply",
  title: "bind vs call vs apply in JavaScript",
  description:
    "A comparison of bind, call, and apply, explaining how function context works and when to use each method.",

  tags: ["javascript", "functions"],
  level: "beginner",
  prerequisites: ["Functions", "this keyword"],

  readingTimeMinutes: 6,
  lastUpdated: "2026-01-15",

  sections: [
    {
      id: "why-context-matters",
      title: "Why Function Context Matters",
      content: [
        {
          type: "text",
          value:
            "In JavaScript, the value of `this` depends on how a function is called. bind, call, and apply allow explicit control over this value.",
        },
      ],
    },
    {
      id: "how-this-works",
      title: "How JavaScript Determines `this`",
      content: [
        {
          type: "list",
          items: [
            "`this` is determined at call time, not at definition time",
            "In normal functions, `this` depends on how the function is invoked",
            "Methods lose their context when passed as callbacks",
            "bind, call, and apply allow explicit binding of `this`",
          ],
        },
        {
          type: "code",
          language: "js",
          value: `const user = {
  name: "Anu",
  greet() {
    console.log(this.name);
  }
};

const fn = user.greet;
fn(); // undefined (or window.name in non-strict mode)`,
        },
      ],
    },
    {
      id: "definitions",
      title: "Definitions",
      content: [
        {
          type: "table",
          headers: ["Method", "Execution", "Arguments"],
          rows: [
            ["call", "Immediate", "Comma separated"],
            ["apply", "Immediate", "Array"],
            ["bind", "Deferred", "Comma separated"],
          ],
        },
      ],
    },
    {
      id: "examples",
      title: "Examples",
      content: [
        {
          type: "code",
          language: "js",
          value: `function greet(city) {
  console.log(this.name + " from " + city);
}

const user = { name: "Anu" };

greet.call(user, "Kolkata");
greet.apply(user, ["Delhi"]);
const bound = greet.bind(user);
bound("Mumbai");`,
        },
      ],
    },
    {
      id: "async-usage",
      title: "bind vs call/apply in Asynchronous Code",
      content: [
        {
          type: "text",
          value:
            "call and apply invoke the function immediately, which makes them unsuitable for asynchronous callbacks. bind returns a new function with fixed context, making it ideal for async scenarios.",
        },
        {
          type: "code",
          language: "js",
          value: `const user = { name: "Anu" };

function greet() {
  console.log(this.name);
}

setTimeout(greet.call(user), 0); // ❌ executes immediately
setTimeout(greet.bind(user), 0); // ✅ correct`,
        },
      ],
    },
    {
      id: "common-traps",
      title: "Common Interview Traps",
      content: [
        {
          type: "list",
          items: [
            "`bind` does not execute the function immediately",
            "`call` and `apply` return the function’s return value, not a new function",
            "`bind` returns a new function and ignores future call/apply bindings",
            "`this` inside arrow functions cannot be changed using bind/call/apply",
          ],
        },
      ],
    },
    {
      id: "arrow-functions",
      title: "bind, call, apply with Arrow Functions",
      content: [
        {
          type: "text",
          value:
            "Arrow functions do not have their own `this`. They capture `this` from the surrounding lexical scope, so bind, call, and apply have no effect on them.",
        },
        {
          type: "code",
          language: "js",
          value: `const obj = {
  name: "Anu",
  greet: () => {
    console.log(this.name);
  }
};

obj.greet.call({ name: "Test" }); // undefined`,
        },
      ],
    },
    {
      id: "output-question",
      title: "Tricky Output Question",
      content: [
        {
          type: "code",
          language: "js",
          value: `const user = {
  name: "Anu",
  greet() {
    return function () {
      console.log(this.name);
    };
  }
};

user.greet()();`,
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
          type: "text",
          value:
            "The inner function loses the context. Using bind on the returned function would preserve `this`.",
        },
      ],
    },
  ],
};
