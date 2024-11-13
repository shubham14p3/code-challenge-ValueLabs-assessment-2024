import React, { CSSProperties, useState } from "react";

interface ListProps {
  items: { name: string }[];
}

const List: React.FC<ListProps> = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div style={gridContainerStyle}>
      {items.map((pokemon, index) => (
        <div
          key={index}
          style={{
            ...cardStyle,
            ...(hoveredIndex === index ? hoverEffectStyle : {}),
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {pokemon.name}
        </div>
      ))}
    </div>
  );
};

const gridContainerStyle: CSSProperties = {
  display: "grid",
  gap: "16px",
  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
  padding: "16px",
  backgroundColor: "#f0f4f8",
  borderRadius: "8px",
};

const cardStyle: CSSProperties = {
  padding: "15px",
  textAlign: "center",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  fontWeight: "bold",
  color: "#555",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer",
};

const hoverEffectStyle: CSSProperties = {
  transform: "scale(1.05)",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
};

export default List;
