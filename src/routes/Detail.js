import { useParams } from "react-router-dom";
import { useEffect } from "react";


function Detail(){

    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(res => res.json())
        .then(json => console.log(json));
    });

    return (
        <>
        <h1>Detail</h1>
        
        </>
    );
}

export default Detail;