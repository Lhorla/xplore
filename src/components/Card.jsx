import React from "react";

function Card(props) {
  
  /*
  let time = new Date();
  let hour = time.getHours();
  let prepand===hour >= 12 ? " PM " : " AM ";
  
  if (hour = 0 && prepand===" PM ") {
    hour = 12;
    prepand = " PM ";
  }
  if (hour===0 && prepand===" AM ") {
    hour = 12;
    prepand = " AM ";
  } */


  return (
    <div className="card-container">
      <div>
        <img src={props.imageUrl} />
      </div>
      <div className="card-details">
        <div className="card-location">
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>Google Maps</a>
        </div>

        <h1>{props.title}</h1>
        <p>
          {props.openingHours}-{props.closingHours}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
