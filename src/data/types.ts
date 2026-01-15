export type ContentBlock =
  | { type: "text"; value: string }
  | { type: "code"; language: "js" | "ts"; value: string }
  | { type: "list"; items: string[] }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };

export type Section = {
  id: string;
  title: string;
  content: ContentBlock[];
};

export type ArticleLevel = "beginner" | "intermediate" | "advanced";

export type Article = {
  id: string;
  title: string;
  description: string;

  tags: string[];
  level: ArticleLevel;
  prerequisites: string[];

  readingTimeMinutes: number;
  lastUpdated: string; // ISO date string

  sections: Section[];
};
