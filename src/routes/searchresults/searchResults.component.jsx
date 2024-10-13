import { useLocation } from 'react-router-dom';
import SearchBox from '../../components/searchbox/searchbox.component';
import './searchResults.styles.scss'
import MovieTile from '../../components/movietile/movietile.component';
import { useSelector } from 'react-redux';
import { selectMovieList,selectTotalResult } from '../../store/movieList/movlieList.selectors';
import { useEffect, useState } from 'react';
import { fetchMoviesTen } from '../../utils/fetchData';
import { setMovlieList } from '../../store/movieList/movlieList.actions';
import { useDispatch } from 'react-redux';

const SearchResults = () => {
  const location = useLocation();
  const {movieName} = location.state;
  const [remainingResults,setRemainingResults] = useState(0)
  const [movieNameResultaPage,setMovieName] = useState('')
  const [page,setPage] = useState(1)
  const mov = useSelector(selectMovieList)
  const totalResults = useSelector(selectTotalResult)
  const dispatch = useDispatch()

  useEffect(()=>{
    const currentItemsCount = mov.length
    setRemainingResults(totalResults-currentItemsCount)
  },[mov])

  const fetchData = async () => {

    try {
      const {Search,totalResults,Response} = await fetchMoviesTen(movieName,page);
 
      if(Response === 'True'){
        dispatch(setMovlieList([...mov,...Search],totalResults))
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // Scroll Event Listener
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        setPage((prevPage) => prevPage + 1); // Load more data when near the bottom
      }
    };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup listener on unmount
    };
  }, []);

  const handleKeyEnter = async (event)=>{
    
    if(event.key === 'Enter'){
      console.log('enter key')
      dispatch(setMovlieList([],null))
      const {Search,totalResults,Response} = await fetchMoviesTen(movieNameResultaPage)
      // const data = await fetchMoviesTen(movieName)
      console.log(Search,totalResults,Response)
      if(Response === 'True'){
        dispatch(setMovlieList(Search,totalResults))
      }  
    }
      
  }
  return (
    <div className='resultsContainer'>
      <SearchBox setMovieName = {setMovieName} handleKeyEnter={handleKeyEnter} />
      <p>{totalResults} serach results for <strong>{movieName}</strong></p>
      <MovieTile movieList={mov}/> 
    </div>
  )
}// 

export default SearchResults
