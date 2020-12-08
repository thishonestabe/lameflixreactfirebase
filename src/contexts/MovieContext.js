import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';

const MovieContext = React.createContext();

export function useMovie() {
    return useContext(MovieContext)
}

export default function MovieProvider({children}) {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true)
    function getTrending() {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=acb1f7cc631280f76384d486fc592d60`)
            .then(res => {
                console.log(res);
                setLoading(false)
            })
    }

    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=acb1f7cc631280f76384d486fc592d60`)
            .then(res => {
                console.log('res');
                setTrendingMovies(res.data.results)
                setLoading(false)

            })
    }, [])


    const value = {
        trendingMovies,
        currentPage,
        getTrending

    }
    return (
        <MovieContext.Provider value={value}>
            {!loading && children}
        </MovieContext.Provider>
    )
}
