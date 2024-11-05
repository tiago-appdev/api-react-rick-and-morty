import { useState, useEffect } from 'react';
import Character from '../components/Character';
import NavPage from '../components/NavPage';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

const Main = () => {
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
          <Title />
          <NavPage page={page} setPage={setPage} />
          <div className=' w-10/12 mx-auto grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
            {characters.map((character) => (
              <Link key={character.id} to={`/character/${character.id}`}>
                <Character
                  name={character.name}
                  origin={character.origin}
                  image={character.image}
                />
              </Link>
            ))}
          </div>
          <NavPage page={page} setPage={setPage} />
        </div>
      )}
    </>
  );
};

export default Main;
