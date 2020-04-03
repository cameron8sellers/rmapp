import React from "react";
import { Link } from "react-router-dom";

function CharacterList(props) {
  console.log("List -props", props);
  let CharNames = props.name.results.map((d, i) => {
    return (
      <>
        <Link key={i} to={`/Profile/${d.name}`}>
          <img key={d.url} src={d.image} alt="null" />
          <li key={d.id}>{d.name}</li>
        </Link>
      </>
    );
  });

  return <ul>{CharNames}</ul>;
}

export default CharacterList;
