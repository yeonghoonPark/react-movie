import PropTypes from "prop-types";

function MovieContents({
    mediumCoverImage,
    title,
    titleLong,
    descriptionFull,
    rating,
    runtime,
    genres
}) {
    return (
        <div className="movie-contents">
            <img src={mediumCoverImage} alt={title} />
            <h2>{titleLong}</h2>
            <p>{descriptionFull}</p>
            <p>Rating : {rating} Point</p>
            <p>Runtime : {runtime} Minutes</p>
            <ul>
                {
                    genres.map((genre, index) => {
                        return <li key={index}>{genre}</li>
                    })
                }
            </ul>
        </div>
    );
};

MovieContents.propTypes = {
    mediumCoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    titleLong: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default MovieContents;