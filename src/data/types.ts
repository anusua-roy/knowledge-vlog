export type ContentBlock =
  | { type: "text"; value: string }
  | { type: "code"; language: "js" | "ts"; value: string };

export type Section = {
  id: string;
  title: string;
  content: ContentBlock[];
};

export type Article = {
  id: string;
  title: string;
  tags: string[];
  sections: Section[];
};
