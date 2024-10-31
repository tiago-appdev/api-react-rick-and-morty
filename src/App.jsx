import { useState } from "react"
import { useEffect } from "react"
import Character from "./components/Character"

const App = () => {

  const [characters, setCharacters] = useState( [] )

  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch('https://rickandmortyapi.com/api/character')
      const {results} = await response.json()

      setCharacters(results)
    }

    fetchData()
  }, [])

  return (
    <>
      <h1 className="text-center text-3xl font-bold py-4">Rick and Morty</h1>
      {
        characters.map((character) => <Character 
        key={character.id}
        name={character.name}
        origin={character.origin}
        image={character.image}
        />)
      }
    </>
  )
}

export default App