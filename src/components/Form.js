import React, { useState } from "react";
//import CharacterList from "./CharacterList";
//import { thisExpression } from "@babel/types";

const Form = props => {
  const [charName, setCharName] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(charName);
    setCharName("");
  };

  const handleChange = e => {
    const name = e.target.value;
    setCharName(name);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="charName">Name</label>
        <input
          id="charName"
          type="text"
          value={charName}
          onChange={handleChange}
        />

        <input type="submit" value="Find Character" />
      </form>
    </>
  );
};

export default Form;
