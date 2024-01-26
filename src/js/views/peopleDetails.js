import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleDetails = () => {
  const [person, setPerson] = useState({});
  const [description, setDescription] = useState(""); // Agregamos esta línea para la descripción
  const params = useParams();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/" + params.people_id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result.properties.uid); 
        const personData = data.result.properties;
        setPerson(personData);
        // Supongamos que hay un campo "description" en los datos del personaje
        setDescription(personData.description);
      });
  }, [params.people_id]);

  return (
    <div className="peoplePage container">
      <div className="row mb-5">
        <div className="col" >
          <img
            src=
              "https://www.brighterbites.org/wp-content/uploads/2016/04/placeholder-800x600.png" className="card-img-top" alt="..."
            
          />
        </div>
        <div className="col mt-5 text-center">
          <h1>{person.name}</h1>
          <p className="lh-lg mt-5">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi
          </p>
        </div>
      </div>
      <div className="row text-center border-top border-danger pt-5">
        <div className="col text-danger fs-3">
          <p>Name</p>
          <p>{person.name}</p>
        </div>
        <div className="col text-danger fs-3">
          <p>Birth Year</p>
          <p>{person.birth_year}</p>
        </div>
        <div className="col text-danger fs-3">
          <p>Gender</p>
          <p>{person.gender}</p>
        </div>
        <div className="col text-danger fs-3">
          <p>Height</p>
          <p>{person.height}</p>
        </div>
        <div className="col text-danger fs-3">
          <p>Skin Color</p>
          <p>{person.skin_color}</p>
        </div>
        <div className="col text-danger fs-3">
          <p>Eye Color</p>
          <p>{person.eye_color}</p>
        </div>
      </div>
    </div>
  );
};
