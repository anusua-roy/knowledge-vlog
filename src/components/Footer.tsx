export function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.name}>© Anusua Roy</div>

      <div style={styles.links}>
        <a
          href="https://www.linkedin.com/in/anusuaroy/"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          LinkedIn
        </a>
        <span style={styles.separator}>·</span>
        <a
          href="https://github.com/anusua-roy/"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          GitHub
        </a>
        <span style={styles.separator}>·</span>
        <a
          href="https://my-portfolio-anusua-roys-projects.vercel.app/"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          Website
        </a>
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    padding: "0.75rem 1rem",
    borderTop: "1px solid #ddd",
    fontSize: "0.75rem",
    color: "#555",
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
    opacity: 0.85,
    background: "#fafafa",
  },
  name: {
    fontWeight: 500,
  },
  links: {
    display: "flex",
    gap: "0.35rem",
    flexWrap: "wrap",
    color: "#6b7280", // muted gray
  },
  link: {
    color: "#4b5563",
    textDecoration: "none",
  },
  linkHover: {
    textDecoration: "underline",
  },
  separator: {
    opacity: 0.4,
  },
};
