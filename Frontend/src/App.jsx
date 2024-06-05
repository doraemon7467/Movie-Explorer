import { useEffect, useState , useCallback } from 'react'
import './App.css'
import { debounce } from 'lodash';
// import { FaSearch } from "react-icons/fa";

function App() {

  const [search,setSearch] = useState("");
  const [movies,setMovies] = useState([]);

  const handleChange = async (e) =>{
    const value = e.target.value;
    setSearch(value);
    console.log('handleChange triggered with value:', value); // Add logging statement
  }
 // const API_KEY =  "fc552c7e"
  const debouncedHandleClick = useCallback(
    debounce(async (value) => {
      if(!value){
        setMovies([]);
        return ;
      }
      const res = await fetch(`https://movie-explorer-backend-six.vercel.app/api/data?search=${value}`)
      const data =await res.json();
      if(data.Response === 'True')
        setMovies(data.Search);
      else setMovies([]);
      console.log('API call triggered with search term:', value); // Add logging statement
    }, 500),
    []
  );

  useEffect(() => {
    debouncedHandleClick(search);
  }, [search]);

  return (
    <>
    <div className="container">
      <div className='search'>
        <input type='text' value={search} placeholder='Search Your Favourite Movies...' onChange={handleChange}/>
        {/* <div><FaSearch className='icon'onClick={handleClick}/></div> */}
      </div>
      <div className="cards">
        {movies.map((movie) => {
          return (
              <div key={movie.imdbID} className='card'>
                <img src={movie.Poster} alt="Image" />
                <h2>Title: {movie.Title}</h2>
                <h2>Type: {movie.Type}</h2>
                <h2>Year: {movie.Year}</h2>
              </div>
        )
        })}
      </div>
    </div>
    </>
  )
}

export default App
