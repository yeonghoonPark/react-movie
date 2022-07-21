import PropTypos from "prop-types";
import {Link} from "react-router-dom";

function Movie({medium_cover_image, title, summary, genres, id}) {
    return (
        <div >
            <img src={medium_cover_image} alt={title} />
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
            <ul>
                {genres.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
        </div>
    );
}

Movie.PropTypos = {
    medium_cover_image: PropTypos.string.isRequired,
    title: PropTypos.string.isRequired,
    summary: PropTypos.string.isRequired,
    genres: PropTypos.arrayOf(PropTypos.string.isRequired)
};

export default Movie;