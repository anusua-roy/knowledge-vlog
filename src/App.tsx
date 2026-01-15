import { useState } from "react";
import { articles } from "./data/articles";
import type { Article } from "./data/types";
import { Layout } from "./components/Layout";
import { Sidebar } from "./components/Sidebar";
import { ArticleView } from "./components/ArticleView";

function App() {
  const [activeArticle, setActiveArticle] = useState<Article>(articles[0]);

  return (
    <Layout
      sidebar={
        <Sidebar
          articles={articles}
          activeId={activeArticle.id}
          onSelect={setActiveArticle}
        />
      }
      main={<ArticleView article={activeArticle} />}
    />
  );
}

export default App;
