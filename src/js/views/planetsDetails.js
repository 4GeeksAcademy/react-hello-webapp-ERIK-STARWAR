import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {
    
    const [planet, setPlanet] = useState({});
    const params = useParams();
    
    useEffect (() => {
        
        fetch("https://www.swapi.tech/api/planets/" + params.planets_id)
        .then((response) => response.json())
        .then((data) => setPlanet(data.result.properties))
    }, [])
   
    return (
        <div className="planetPage container">
            <div className="row mb-5">
                <div className="col">
                    <img src="https://www.brighterbites.org/wp-content/uploads/2016/04/placeholder-800x600.png" className="card-img-top" alt="..."/>
                </div>
                <div className="col mt-5 text-center">
                    <h1>{planet.name}</h1>
                    <p className="lh-lg mt-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                </div>
            </div>
            <div className="row text-center border-top border-danger pt-5">
                <div className="col text-danger fs-3">
                    <p>Name</p>
                    <p>{planet.name}</p>
                </div>
                <div className="col text-danger fs-3">
                    <p>Population</p>
                    <p>{planet.population}</p>
                </div>
                <div className="col text-danger fs-3">
                    <p>Terrain</p>
                    <p>{planet.terrain}</p>
                </div>
                <div className="col text-danger fs-3">
                    <p>Climate</p>
                    <p>{planet.climate}</p>
                </div>
                <div className="col text-danger fs-3">
                    <p>Diameter</p>
                    <p>{planet.diameter}</p>
                </div>
                <div className="col text-danger fs-3">
                    <p>Gravity</p>
                    <p>{planet.gravity}</p>
                </div>
            </div>
        </div>
   
);
};