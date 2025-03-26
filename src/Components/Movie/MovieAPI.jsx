import React, { useEffect,  useState } from "react";

const MovieAPI = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue,setInputValue]=useState("")
  const [load, setLoad] = useState(true);

const apiKey="464e8ed3"
  const fetchMovies = async (param) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${param}`)
      const data = await response.json();
              if (data.Response === "False") {
                  throw new Error(data.Error || "No movies found");
                }
                  setMovies(data);

    } catch (error) {
      console.error( "555",error.message);
    }
    finally {
        setLoad(false);
      }
  };
  useEffect(() => {
    fetchMovies("Avengers");
  }, []); 
  useEffect(()=>{
    if(inputValue.length>3){
        fetchMovies(inputValue)

    }

  },[inputValue])

console.log("001",movies);



  return (

    <div>
            {load && <p>Loading............</p>}

     <div className="flex justify-between  flex-col sm:flex-row items-center gap-2 sm:gap-0">
         <h2 className="text-3xl font bold mb-6">Avengers Movies</h2>
      <input onChange={(e)=>setInputValue(e.target.value)} className=" mb-2 p-2 h-10 w-80 ring-1 " type="text" placeholder="Search By Movie Name" />
</div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies?.Search?.map((movie,index) => (
          <li key={index}className="bg-white  hover:scale-90 duration-300">
            <img   src={movie.Poster} alt={movie.Title}  />
            <p>{movie.Title} </p>
            <p>{movie.Year}</p>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default MovieAPI;

