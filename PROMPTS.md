# Article Generation Prompt

Use this prompt with any LLM to generate articles that fit the schema and style of this repository.

Only change the **Topic** section before using.

---

## Prompt

You are helping me write a technical knowledge article for a personal documentation site.

### Context

* The site is static and data-driven
* Content is stored as TypeScript objects (not Markdown)
* The audience includes beginners and interview candidates
* The focus is on clarity, intuition, and correctness

### Output Requirements

* Output ONLY a valid TypeScript object
* Do not include explanations or comments
* Do not include Markdown in the output
* The output must be ready to paste into a `.ts` file

---

### Article Schema

```ts
Article = {
  id: string;
  title: string;
  description: string;

  tags: string[];
  level: "beginner" | "intermediate" | "advanced";
  prerequisites: string[];

  readingTimeMinutes: number;
  lastUpdated: "YYYY-MM-DD";

  sections: {
    id: string;
    title: string;
    content: ContentBlock[];
  }[];
};

ContentBlock =
  | { type: "text"; value: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language: "js" | "ts"; value: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };
```

---

### Content Guidelines

* Keep explanations concise and practical
* Prefer intuition before formal definitions
* Use lists instead of long paragraphs
* Use tables for comparisons
* Include code examples where helpful
* Include a single diagram if the topic benefits from it
* Avoid unnecessary jargon

Image paths should use:

```ts
`${import.meta.env.BASE_URL}images/<topic>-diagram.webp`
```

---

### Suggested Section Flow

1. Why the topic exists / why it matters
2. Core concepts or mental model
3. Key components or mechanics
4. Code examples
5. Common mistakes or misconceptions
6. Comparison or summary table
7. Practical relevance (interviews / real-world)
8. Optional interview tip

---

### Topic

Replace this line before using the prompt:

**Topic:** `<PUT YOUR TOPIC HERE>`

---

### Rules

* Do not use Markdown in the output
* Do not include newline hacks such as `\n`
* Do not explain your reasoning
* Output must be valid TypeScript only
