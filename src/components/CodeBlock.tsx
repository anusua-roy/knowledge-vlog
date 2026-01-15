type Props = {
  language: string;
  children: string;
};

export function CodeBlock({ children }: Props) {
  return (
    <pre style={styles.pre}>
      <code>{children}</code>
    </pre>
  );
}

const styles: Record<string, React.CSSProperties> = {
  pre: {
    background: "#111827",
    color: "#e5e7eb",
    padding: "1rem",
    borderRadius: "6px",
    overflowX: "auto",
  },
};
