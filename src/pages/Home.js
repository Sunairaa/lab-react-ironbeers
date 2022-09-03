import React from 'react';
import allbeers from '../assets/beers.png'; // with import
import randombeer from '../assets/random-beer.png';
import newbeer from '../assets/new-beer.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
        <div className="col">
          <div className="card h-100">
            <img src={allbeers} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">
                <Link to="/Beers">All Beers</Link>    
            </h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={randombeer} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/random-beer">Random Beer</Link> 
              </h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
      <div className="col">
        <div className="card h-100">
          <img src={newbeer} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">
              <Link to="/new-beer">New Beer</Link>
            </h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;