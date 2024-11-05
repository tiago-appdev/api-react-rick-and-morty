import './Character.css';

export function Character(character) {
  return (
    <div className='card'>
      <div className='card2 rounded-[17px]'>
        <h3 className='p-2 font-bold'>{character.name}</h3>
        <img
          src={character.image}
          alt={character.name}
          className='w-fit p-3 mx-auto rounded-3xl'
        />
        <p className='p-2'>{`Origen: ${character.origin.name}`}</p>
      </div>
    </div>
  );
}
export default Character;
