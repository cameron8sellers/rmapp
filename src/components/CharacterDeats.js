import React from "react";

function CharacterDetails(props) {
  console.log("Names", props);

  return (
    <div>
      <img src={props.char[0].image} alt={props.char[0].name} />
      <h3>Name: {props.char[0].name}</h3>
      <p>Species: {props.char[0].species}</p>
    </div>
  );
}

export default CharacterDetails;
