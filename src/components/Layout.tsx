import React from "react";
import { Footer } from "./Footer";

type LayoutProps = {
  sidebar: React.ReactNode;
  main: React.ReactNode;
};

export function Layout({ sidebar, main }: LayoutProps) {
  return (
    <div style={styles.app}>
      {/* Sidebar column */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarContent}>{sidebar}</div>
        <Footer />
      </aside>

      {/* Main content */}
      <main style={styles.main}>{main}</main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  app: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    height: "100vh",
    fontFamily: "system-ui, sans-serif",
    width: "100vw",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid #ddd",
  },
  sidebarContent: {
    flex: 1,
    overflowY: "auto",
    padding: "1rem",
  },
  main: {
    overflowY: "auto",
    padding: "2rem",
  },
};
