import { useEffect, useState } from "react";
import List from "./ui/List"; // Importing List component from /ui
import { useDispatch, useSelector } from "react-redux";
import { setPokemonList } from "./redux/pokemonSlice";
import { RootState } from "./redux/store";

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

const App = () => {
  const dispatch = useDispatch();
  const pkList = useSelector((state: RootState) => state.pokemon.list);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(api);
        if (!res.ok) throw new Error("API error Post handling of API call");
        const data = await res.json();
        dispatch(setPokemonList(data.results));
      } catch (error) {
        setErr("Failed to fetch Pokemon");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

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
