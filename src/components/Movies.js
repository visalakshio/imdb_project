import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [watchList, setWatchList] = useState([]);
  const [hovered,setHovered]=useState('')

  // pagination functions
  const onNext = () => {
    setPageNum(pageNum + 1);
  };

  const onPrev = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  // watchlist handlers

  const addToWatchList=(id)=>{
    const newWatchList=[...watchList,id]
    setWatchList(newWatchList)


  }

  const removeFromWatchList=(id)=>{
    const filteredWatchList=watchList.filter((watchListID)=>{
      return (watchListID != id );
    });
    setWatchList(filteredWatchList);
  }

  // Hovering on cards
  
  const showButton=(id)=>{
    setHovered(id)

  }
  
  const hideButton=()=>{
    setHovered('')

  }

  useEffect(() => {
    (function () {})();
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=1efecf8a5faa500c55bcaf2e3a8d56c8&page=${pageNum}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [pageNum]);

  return (
    <div>
      <div className="text-2xl mb-8 font-bold text-center ">
        Trending Movies
      </div>
      <div className="flex flex-wrap">
        {movies.map((movie) => {
          return (
            <div

            onMouseOver={()=>showButton(movie.id)}
            onMouseLeave={()=>hideButton()}
              key={movie.id}
              className="w-[200px] h-[35vh] bg-center bg-cover rounded-xl m-4 md:h[40vh] md:w[180vh] hover:scale-110 duration-300 relative flex-items-end"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
              }}


            >
              <div className="p-2 bg-gray-900 rounded-xl absolute right-2 bottom-2 "
              style={{display : hovered==movie.id ? 'block':'none'}}
              >
              {watchList.includes(movie) == false ? (
                  <div onClick={() => addToWatchList(movie)}> 😍 </div>
                ) : (
                  <div onClick={() => removeFromWatchList(movie)}>❌</div>
                )}
         
              </div>
        
              <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-30 ">
                {movie.title}
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        pageNumProp={pageNum}
        onNextProp={onNext}
        onPrevProp={onPrev}
      ></Pagination>
    </div>
  );
}
export default Movies;
