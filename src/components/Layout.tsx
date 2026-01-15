import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";

type LayoutProps = {
  sidebar: React.ReactNode;
  main: React.ReactNode;
};

export function Layout({ sidebar, main }: LayoutProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setShowSidebar(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div style={styles.app(isMobile)}>
      {/* Sidebar */}
      {(!isMobile || showSidebar) && (
        <aside style={styles.sidebar(isMobile)}>
          <div style={styles.sidebarScroll}>{sidebar}</div>
          <Footer />
        </aside>
      )}

      {/* Main content */}
      <main style={styles.main}>
        {isMobile && (
          <button
            style={styles.menuButton}
            onClick={() => setShowSidebar(true)}
          >
            ☰ Topics
          </button>
        )}
        {main}
      </main>
    </div>
  );
}

const styles: {
  app: (isMobile: boolean) => React.CSSProperties;
  sidebar: (isMobile: boolean) => React.CSSProperties;
  sidebarScroll: React.CSSProperties;
  main: React.CSSProperties;
  menuButton: React.CSSProperties;
} = {
  app: (isMobile: boolean): React.CSSProperties => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "260px 1fr",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  }),

  sidebar: (isMobile: boolean) => ({
    display: "flex",
    flexDirection: "column",
    height: "100vh", // 🔴 REQUIRED
    width: "260px",
    background: "#f8fafc",
    borderRight: "1px solid #ddd",
    position: isMobile ? "fixed" : "relative",
    inset: isMobile ? "0 auto 0 0" : undefined,
    zIndex: 20,
  }),

  sidebarScroll: {
    flex: 1, // 🔴 REQUIRED
    overflowY: "auto", // 🔴 REQUIRED
    padding: "1rem",
  },

  main: {
    overflowY: "auto",
    padding: "1.5rem",
  },

  menuButton: {
    position: "sticky",
    top: "0.75rem",
    marginBottom: "1rem",
    padding: "0.5rem 0.75rem",
    fontSize: "0.9rem",
    border: "1px solid #0b1220",
    background: "#f8fafc",
    color: "#0b1220",
    cursor: "pointer",
    zIndex: 5,
  },
};
