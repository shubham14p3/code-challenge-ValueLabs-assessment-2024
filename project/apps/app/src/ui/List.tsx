import React from "react";

interface ListProps {
  items: { name: string }[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default List;
