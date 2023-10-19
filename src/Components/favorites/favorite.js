import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromfavoriteList } from "../../store/actions";
import './favorite.css'

function Favorite() {
    
    const favo = useSelector((state) => state.favorite);
    const dispatch = useDispatch();
    const [change, setChange] = useState(false);
    // const apiKey = '15191d6e037f9aa7729f76d2d53b6390';
    // const [moviesList, setMoviesList] = useState([]);
    // useEffect(() => {
    //     console.log(favo);
    //     for (const id of favo) {
    //         console.log(id);
    //         axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
    //         .then((res) => {
    //             setMoviesList([...moviesList, res.data]);
    //         })
    //         .catch((err) => {
    //             console.log(`erooooooor ${err}`);
    //         })
    //     }
    // }, [])
    // console.log(moviesList);

    const remove  = function (id){
        dispatch(deleteFromfavoriteList(id));
        setChange(!change);
    }
    
    // console.log(favo);
    
    return (
        <div className="favorite">
            <div className="container">
                {[...favo].map((movie) => {
                    return (<div className="card">
                        <div className="image">
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                        </div>
                        <div className="name">{movie.title}</div>
                        <a  className="delete" onClick={()=>{remove(movie.id)}}>{
                            <i class="fa-regular fa-trash-can"></i>
                        }</a>
                        <Link href="" className="btn" to={`/details/${movie.id}`}>Show Details</ Link>
                    </div>
                    );
                }
                )
                }
            </div>
        </div>
    );
}

export default Favorite;