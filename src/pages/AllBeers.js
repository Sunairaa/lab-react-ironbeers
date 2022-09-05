import React from 'react'
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function AllBeers() {
    const [beers, setBeers] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get(apiURL)
        .then((response) => {
            console.log(response.data);
            setBeers(response.data);
        })
        .catch((err) => console.log(err));
    }, [])

    // iteration 7 - search for beers
    const handleSearchQuery = (e) => {
        setQuery(e.target.value)
        axios.get(`${apiURL}/search?q=${query}`)
            .then(response => {
                console.log(response.data)
                setBeers(response.data)
            })
    }

  return (

    <div>  
        <Header />
        <input type="text" placeholder='search' value={query} onChange={handleSearchQuery}></input>
        <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
        {beers.map((beer) => {
            return(
                    <div className="col" key={beer._id}>
                    <div className="card mb-3 p-2 h-100" style={{maxWidth: '540px'}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={beer.image_url} className="img-fluid rounded-start" alt="..." style={{objectFit: 'scale-down', width: '150px', height: '150px'}}/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                                </h5>
                                <p className="card-text">{beer.tagline}</p>
                                <p className="card-text">Contrubuted By: <small className="text-muted">{beer.contributed_by}</small></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
        })}
        </div>
    </div>
  )
}

export default AllBeers