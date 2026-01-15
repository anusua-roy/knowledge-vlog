import type { Article } from "../data/types";
import { CodeBlock } from "./CodeBlock";

type Props = {
  article: Article;
};

export function ArticleView({ article }: Props) {
  return (
    <>
      <h1>{article.title}</h1>

      {article.sections.map((section) => (
        <section key={section.id}>
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

            return null;
          })}
        </section>
      ))}
    </>
  );
}
