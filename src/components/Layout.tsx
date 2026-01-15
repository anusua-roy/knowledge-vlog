import React from "react";

type LayoutProps = {
  sidebar: React.ReactNode;
  main: React.ReactNode;
};

export function Layout({ sidebar, main }: LayoutProps) {
  return (
    <div style={styles.app}>
      <aside style={styles.sidebar}>{sidebar}</aside>
      <main style={styles.main}>{main}</main>
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
  main: {
    padding: "2rem",
  },
};
