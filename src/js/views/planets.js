import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Context } from "../store/appContext";


	export const Planets = () => {
		const { store, actions } = useContext(Context);
			return (
				<div className="planetsPage container-fluid">
					<h3 className="text-danger ms-3 mb-4">Planets</h3>
					<div className="row g-4 d-flex flex-row flex-nowrap" style={{overflowX: "auto"}} >
							{store.planets.map((item, index) => {
								return item.uid != 1 &&  (
										<div className="col" key={item.url}>
											<div className="card ms-1 mb-4" style={{width: "400px"}}>
												<img src={"https://starwars-visualguide.com/assets/img/planets/"+(item.uid)+".jpg"} className="card-img-top" alt="..."/>
												<div className="card-body">
													<h5 className="card-title">{item.name}</h5>
													<p className="card-text">Population: {item.population}</p>
													<p className="card-text">Terrain: {item.terrain}</p>
												</div>
												<div className="card-footer">
													<Link to={"/planets/" + (index + 1)}>
													<button className="btn btn-outline-primary me-3">Learn more!</button>
													</Link>
													<button onClick={() => actions.displayFavorites(item.name)} className="btn btn-outline-warning"><FontAwesomeIcon icon={faHeart}/></button>
												</div>
											</div>
										</div>
										);
									})}	
					</div>
				</div>
		);
		};

