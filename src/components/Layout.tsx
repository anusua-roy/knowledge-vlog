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
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowSidebar(false); // reset on desktop
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div style={styles.app(isMobile)}>
      {/* Sidebar */}
      {(!isMobile || showSidebar) && (
        <aside style={styles.sidebar(isMobile)}>
          <div style={styles.sidebarContent}>{sidebar}</div>
          <Footer />
        </aside>
      )}

      {/* Main content */}
      <main id="main-scroll" style={styles.main}>
        {isMobile && (
          <button
            style={styles.menuButton}
            onClick={() => setShowSidebar((prev) => !prev)}
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
  sidebarContent: React.CSSProperties;
  main: React.CSSProperties;
  menuButton: React.CSSProperties;
} = {
  app: (isMobile: boolean): React.CSSProperties => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "260px 1fr",
    height: "100vh",
    width: "100vw",
    fontFamily: "system-ui, sans-serif",
  }),

  sidebar: (isMobile: boolean): React.CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid #ddd",
    position: isMobile ? "fixed" : "relative",
    inset: isMobile ? "0 auto 0 0" : undefined,
    width: isMobile ? "260px" : "100%",
    background: "#fff",
    zIndex: 10,
  }),

  sidebarContent: {
    flex: 1,
    overflowY: "auto",
    padding: "1rem",
  },

  main: {
    overflowY: "auto",
    padding: "1.5rem",
  },

  menuButton: {
    marginBottom: "1rem",
    padding: "0.5rem 0.75rem",
    fontSize: "0.9rem",
    border: "1px solid #ccc",
    background: "#fff",
    cursor: "pointer",
    alignSelf: "flex-start",
  },
};
