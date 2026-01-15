import type { Article } from "../data/types";

type SidebarProps = {
  articles: Article[];
  activeId: string;
  onSelect: (article: Article) => void;
};

export function Sidebar({ articles, activeId, onSelect }: SidebarProps) {
  return (
    <>
      <h3>Articles</h3>
      <ul style={styles.list}>
        {articles.map((article) => (
          <li
            key={article.id}
            style={{
              ...styles.item,
              fontWeight: article.id === activeId ? "bold" : "normal",
            }}
            onClick={() => onSelect(article)}
          >
            {article.title}
          </li>
        ))}
      </ul>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    cursor: "pointer",
    padding: "0.5rem 0",
  },
};
