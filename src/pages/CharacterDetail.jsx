// CharacterDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Title from '../components/Title';
import './CharacterDetail.css';

const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      setCharacter(data);
      setLoading(false);
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <div className='min-h-screen bg-slate-900'>
      <Title />
      <div className='flex flex-col  justify-center w-8/12 p-6 mx-auto my-2 bg-slate-800 text-white rounded-xl shadow-2xl shadow-green-500/50'>
        <h2 className='text-3xl font-bold m-3 text-center relative z-10'>
          {character.name}
        </h2>
        <figure className='flex justify-center items-center m-3 w-44 h-44 mx-auto rounded-xl relative overflow-hidden image2'>
          <img
            src={character.image}
            alt={character.name}
            className='w-[95%] h-[95%] mx-auto object-cover rounded-md relative z-10'
          />
        </figure>
        <div className='flex items-start flex-col md:flex-row justify-between mt-3'>
          <div className='flex flex-col gap-3 w-full md:w-1/2 mb-3'>
            <p>
              <strong>Género:</strong>{' '}
              {character.gender === 'Male' ? (
                <span className='bg-blue-500 text-white px-2 rounded text-center'>
                  Hombre
                </span>
              ) : character.gender === 'Female' ? (
                <span className='bg-pink-500 text-white px-2 rounded text-center'>
                  Mujer
                </span>
              ) : (
                <span className='bg-gray-500 text-white px-2 rounded text-center'>
                  Unknown
                </span>
              )}
            </p>
            <p>
              <strong>Especie:</strong> {character.species}
            </p>
            <p>
              <strong>Tipo:</strong> {character.type || 'Unknown'}
            </p>
          </div>

          <div className='flex flex-col gap-3 w-full md:w-1/2'>
            <p>
              <strong>Estado:</strong>{' '}
              {character.status === 'Alive' ? (
                <span className='bg-green-500 text-white px-2 rounded text-center'>
                  Vivo
                </span>
              ) : character.status === 'Dead' ? (
                <span className='bg-red-500 text-white px-2 rounded text-center'>
                  Muerto
                </span>
              ) : (
                <span className='bg-yellow-500 text-white px-2 rounded text-center'>
                  Unknown
                </span>
              )}
            </p>
            <p>
              <strong>Origen:</strong> {character.origin.name}
            </p>
            <p>
              <strong>Ubicación:</strong> {character.location.name}
            </p>
          </div>
        </div>

        <div className='w-full flex justify-end'>
          <button
            onClick={() => navigate(-1, { replace: true })}
            className='z-10 w-fit mt-4 p-2 font-bold text-sm text-white bg-blue-500 rounded hover:bg-blue-700'
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
