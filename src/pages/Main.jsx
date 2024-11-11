import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';
import Loading from '../components/Loading';
import Title from '../components/Title';
import NavPage from '../components/NavPage';
import Character from '../components/Character';

const Main = () => {
  const { loading, characters, page, setPage } = useContext(CharacterContext);

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
