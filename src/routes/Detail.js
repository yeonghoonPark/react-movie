import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieContents from "../components/MovieContents";


function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then(res => res.json())
            .then((json) => {
                setMovie(json.data.movie);
                setLoading(false);
            });
    });

    return (
        <div className="detail">
            {
                loading ?
                    <h1>Loading...</h1> :
                    <MovieContents 
                        mediumCoverImage={movie.medium_cover_image}
                        title={movie.title}
                        titleLong={movie.title_long}
                        descriptionFull={movie.description_full}
                        rating={movie.rating}
                        runtime={movie.runtime}
                        genres={movie.genres}
                    />

            }
        </div>
    );
}

export default Detail;