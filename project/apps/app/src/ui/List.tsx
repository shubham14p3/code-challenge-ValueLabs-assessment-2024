import React, { CSSProperties, useState } from "react";
import { useDispatch } from "react-redux";
import { removePokemon } from "../redux/pokemonSlice";

interface ListProps {
  items: { name: string }[];
}

const List: React.FC<ListProps> = ({ items }) => {
  const dispatch = useDispatch();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleRemove = (name: string) => {
    dispatch(removePokemon(name));
  };

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
          <p>{pokemon.name}</p>
          <button
            style={buttonStyle}
            onClick={() => handleRemove(pokemon.name)}
          >
            Remove
          </button>
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

const buttonStyle: CSSProperties = {
  marginTop: "8px",
  padding: "6px 12px",
  backgroundColor: "#ff4d4d",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
};

export default List;
