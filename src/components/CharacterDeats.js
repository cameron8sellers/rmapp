import React from "react";

function CharacterDetails(props) {
  console.log("Names", props);

  return (
    <div>
      <img src={props.char[0].image} alt={props.char[0].name} />
      <h3>Name: {props.char[0].name}</h3>
      <p>Species: {props.char[0].species}</p>
      <p>Location: {props.char[0].location.name}</p>
      <p>Origin: {props.char[0].origin.name}</p>
      <p>Status: {props.char[0].status} </p>
      <p>Joined the List: {props.char[0].created} </p>
    </div>
  );
}

export default CharacterDetails;
