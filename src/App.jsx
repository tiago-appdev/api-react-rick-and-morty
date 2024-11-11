import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterDetail from './pages/CharacterDetail';
import Main from './pages/Main';

const App = () => {
  return (
    <Router>
      <main className='bg-slate-900 text-white'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/character/:id' element={<CharacterDetail />} />
        </Routes>

      </main>
    </Router>
  );
};

export default App;
