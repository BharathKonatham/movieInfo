
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import SearchResults from './routes/searchresults/searchResults.component'
import MovieInfo from './routes/movieInfo/movieInfo.component';
function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/searchresults' element={<SearchResults />} />
      <Route path = '/Searchresults/movieinfo' element={<MovieInfo />} />
    </Routes>
  );
}

export default App;
