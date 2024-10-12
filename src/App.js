
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import SearchResults from './routes/searchresults/searchResults.component'
function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/searchresults' element={<SearchResults />} />
    </Routes>
  );
}

export default App;
