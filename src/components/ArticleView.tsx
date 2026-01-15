import type { Article } from "../data/types";
import { CodeBlock } from "./CodeBlock";
import { ArticleHeader } from "./ArticleHeader";

type Props = {
  article: Article;
};

export function ArticleView({ article }: Props) {
  return (
    <>
      <ArticleHeader article={article} />

      {article.sections.map((section) => (
        <section key={section.id} style={{ marginBottom: "2rem" }}>
          <h2>{section.title}</h2>

          {section.content.map((block, idx) => {
            if (block.type === "text") {
              return <p key={idx}>{block.value}</p>;
            }

            if (block.type === "code") {
              return (
                <CodeBlock key={idx} language={block.language}>
                  {block.value}
                </CodeBlock>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={idx} style={{ marginLeft: "1.2rem" }}>
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }

            if (block.type === "table") {
              return (
                <table key={idx} style={styles.table}>
                  <thead>
                    <tr>
                      {block.headers.map((h, i) => (
                        <th key={i} style={styles.th}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} style={styles.td}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              );
            }

            if (block.type === "image") {
              return (
                <figure key={idx} style={styles.figure}>
                  <img
                    src={block.src}
                    alt={block.alt}
                    style={{ maxWidth: "100%" }}
                  />
                  {block.caption && (
                    <figcaption style={styles.caption}>
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            return null;
          })}
        </section>
      ))}
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  table: {
    borderCollapse: "collapse",
    width: "100%",
    margin: "1rem 0",
  },
  th: {
    border: "1px solid #ddd",
    padding: "0.5rem",
    background: "#f3f4f6",
    textAlign: "left",
  },
  td: {
    border: "1px solid #ddd",
    padding: "0.5rem",
  },
  figure: {
    margin: "1.5rem 0",
    textAlign: "center",
  },
  caption: {
    fontSize: "0.85rem",
    color: "#555",
    marginTop: "0.5rem",
  },
};
