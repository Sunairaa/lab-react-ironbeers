import React, {useState} from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState("");
    const [contributedBy, setContributedBy] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            name,
            tagline,
            description,
            first_brewed : firstBrewed,
            brewers_tips : brewersTips,
            attenuation_level : attenuationLevel,
            contributed_by : contributedBy
        }
        try{
            const addNewBeer = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body);
            console.log(addNewBeer);
            navigate('/beers');
        }
        catch(err){
            console.error(err);
        }
    }

    return (
    <div>
        <Header />
        <div className='container mt-3'>
            <div className="row">
                <div className='col-12 col-md-6'>
                    <h2>Add New Beer</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} name="name" className="form-control" placeholder="Name"/>
                            <label>Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" value={tagline} onChange={(e)=> setTagline(e.target.value)} name="tagline" className="form-control" placeholder="Tagline"/>
                            <label>Tagline</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} name="description" className="form-control" placeholder="Description"/>
                            <label>Description</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} name="first_brewed" className="form-control" placeholder="First Brewed"/>
                            <label>First Brewed</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)} name="brewers_tips" className="form-control" placeholder="Brewer Tips"/>
                            <label>Brewers Tips</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)} name="attenuation_level" className="form-control" placeholder="Attenuation Level"/>
                            <label>Attenuation Level</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)} name="contributed_by" className="form-control" placeholder="Brewer Tips"/>
                            <label>Contributed By</label>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-info text-light">Create New Beer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default NewBeer