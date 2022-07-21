import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // const getMovies = async () => {
    //   const res = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    //   const json = await res.json();
    //   setMovies(json.data.movies);
    //   setLoading(false)
    // };

    // useEffect(() => {
    //   getMovies();
    // }, []);

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`)
            .then(response => response.json())
            .then((json) => {
                setMovies(json.data.movies);
                setLoading(false);
            })
            .catch(() => {
                console.log("Can't load movies");
            })
    }, []);

    return (
        <div>
            {
                loading ?
                    <h1>Loading...</h1> :
                    movies.map((movie) => {
                        return (
                            <Movie
                                key={movie.id}
                                medium_cover_image={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}
                                id={movie.id}
                            />
                        );
                    })
            }

        </div>
    );
}

export default Home;