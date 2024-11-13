import { useEffect, useState } from "react";
import List from "./ui/List"; // Importing List component from /ui

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

interface Pokemon {
  name: string;
  url: string;
}

const App = () => {
  const [pkList, setPkList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(api);
        if (!res.ok) throw new Error("API error Post handling of API call");
        const data = await res.json();
        setPkList(data.results);
      } catch (error) {
        setErr("Failed to fetch Pokemon");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
     <h1>Pokemon List:</h1>
      {loading && <p>Loading...</p>}
      {err && <p>{err}</p>}
      {!loading && !err && pkList.length > 0 ? (
        <List items={pkList} />
      ) : (
        <p>No Pokemon data available.</p>
      )}
    </div>
  );
};

export default App;
