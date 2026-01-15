import { useState } from "react";
import { articles } from "./data/articles";
import type { Article } from "./data/types";

function App() {
  const [activeArticle, setActiveArticle] = useState<Article>(articles[0]);

  return (
    <div style={styles.app}>
      {/* Left Sidebar */}
      <aside style={styles.sidebar}>
        <h3>Articles</h3>
        <ul style={styles.list}>
          {articles.map((article) => (
            <li
              key={article.id}
              style={{
                ...styles.listItem,
                fontWeight: article.id === activeArticle.id ? "bold" : "normal",
              }}
              onClick={() => setActiveArticle(article)}
            >
              {article.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        <h1>{activeArticle.title}</h1>

        {activeArticle.sections.map((section) => (
          <section key={section.id}>
            <h2>{section.title}</h2>

            {section.content.map((block, idx) => {
              if (block.type === "text") {
                return <p key={idx}>{block.value}</p>;
              }

              if (block.type === "code") {
                return (
                  <pre key={idx} style={styles.code}>
                    <code>{block.value}</code>
                  </pre>
                );
              }

              return null;
            })}
          </section>
        ))}
      </main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  app: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    minHeight: "100vh",
    fontFamily: "system-ui, sans-serif",
  },
  sidebar: {
    borderRight: "1px solid #ddd",
    padding: "1rem",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    cursor: "pointer",
    padding: "0.5rem 0",
  },
  main: {
    padding: "2rem",
  },
  code: {
    background: "#111827",
    color: "#e5e7eb",
    padding: "1rem",
    borderRadius: "6px",
    overflowX: "auto",
  },
};

export default App;
