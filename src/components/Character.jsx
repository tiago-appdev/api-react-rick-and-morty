import './character.css'

export function Character(character) {
  return (
    <div className="card">
      <div className="card2">
      <h3 className='p-2'>{character.name}</h3>
      <img src={character.image} alt={character.name} className="w-fit p-3 mx-auto rounded-3xl" />
      <p className='p-2'>{`Origin: ${ character.origin && character.origin.name}`}</p>
      </div>
    </div>
  );
}
export default Character;