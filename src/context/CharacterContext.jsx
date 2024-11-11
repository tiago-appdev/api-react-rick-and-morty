import { useEffect, useState, createContext } from 'react';

export const CharacterContext = createContext();
export function CharacterContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await response.json();

      setCharacters(results);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  return (
    <CharacterContext.Provider value={{ loading, characters, page, setPage }}>
      {children}
    </CharacterContext.Provider>
  );
}
