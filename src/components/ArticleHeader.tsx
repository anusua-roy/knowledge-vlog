import type { Article } from "../data/types";

type Props = {
  article: Article;
};

export function ArticleHeader({ article }: Props) {
  return (
    <header style={styles.header}>
      <h1>{article.title}</h1>
      <p style={styles.description}>{article.description}</p>

      <div style={styles.meta}>
        <span>⏱ {article.readingTimeMinutes} min read</span>
        <span>📘 {article.level}</span>
        <span>🗓 Last updated: {article.lastUpdated}</span>
      </div>

      <div style={styles.tags}>
        {article.tags.map((tag) => (
          <span key={tag} style={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>

      {article.prerequisites.length > 0 && (
        <div style={styles.prereq}>
          <strong>Prerequisites:</strong> {article.prerequisites.join(", ")}
        </div>
      )}
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    marginBottom: "2rem",
  },
  description: {
    color: "#555",
  },
  meta: {
    display: "flex",
    gap: "1rem",
    fontSize: "0.9rem",
    color: "#666",
    marginTop: "0.5rem",
  },
  tags: {
    marginTop: "0.75rem",
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
  tag: {
    background: "#eef2ff",
    color: "#3730a3",
    padding: "0.2rem 0.5rem",
    borderRadius: "4px",
    fontSize: "0.8rem",
  },
  prereq: {
    marginTop: "0.75rem",
    fontSize: "0.9rem",
  },
};
