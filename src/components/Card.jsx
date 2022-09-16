import React from "react";

function Card(props) {
  return (
    <div className="card-container">
      <div>
        <img src={`../images/${props.imageUrl}`} />
      </div>
      <div className="card-details">
        <div className="card-location">
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>Google Maps</a>
        </div>

        <h1>{props.title}</h1>
        <p>{props.openingHours}-{props.closingHours}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card
