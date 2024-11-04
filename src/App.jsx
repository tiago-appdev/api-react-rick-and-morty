import CharacterList from './components/CharacterList';
import Title from './components/Title';

const App = () => {
  return (
    <main className='bg-slate-900 text-white'>
      <Title />
      <CharacterList />
    </main>
  );
};

export default App;
