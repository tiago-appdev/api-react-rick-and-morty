import React from 'react';
import { useState } from 'react';
import Character from './Character';
import { useEffect } from 'react';
import NavPage from './NavPage';
import Loading from './Loading';

const CharacterList = () => {
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
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <NavPage page={page} setPage={setPage} />
          <div className=' w-10/12 mx-auto grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
            {characters.map((character) => (
              <Character
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
              />
            ))}
          </div>
          <NavPage page={page} setPage={setPage} />
        </div>
      )}
    </>
  );
};

export default CharacterList;
