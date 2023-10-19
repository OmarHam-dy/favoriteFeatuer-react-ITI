import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './details.css';


function Details() {
    const apiKey = '15191d6e037f9aa7729f76d2d53b6390';
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
            .then((response) => {
                setMovie(response.data);
            })
            .catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div className="details">
            <div className="container">
                <div className="card">
                    <div className="image">
                        <img src={`${imagePath}${movie.poster_path}`} alt="" />
                    </div>
                    <div className="content">
                        <div className="name">{movie.title}</div>
                        <div className="des">{ movie.overview}</div>
                    </div>
                </div>
            </div>
            <Link className="btn" to='/'>Back</Link>
        </div>
    );
}

export default Details;