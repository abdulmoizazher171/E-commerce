type RowProps = {
  children: React.ReactNode;
  gap?: string | number;
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
};

const Row: React.FC<RowProps> = ({
  children,
  gap = "10px",
  align = "center",
  justify = "flex-start",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap,
        alignItems: align,
        justifyContent: justify,
      }}
    >
      {children}
    </div>
  );
};

export default Row