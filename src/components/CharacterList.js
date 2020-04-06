import React from "react";
import { Link } from "react-router-dom";

function CharacterList(props) {
  console.log("List -props", props);
  let CharNames = props.name.results.map((d, i) => {
    return (
      <>
        <Link key={i} to={`/Profile/${d.name}`}>
          <img key={d.url} src={d.image} alt="null" className="list-image" />
          <li key={d.id} className="list-name">
            {d.name}
          </li>
        </Link>
      </>
    );
  });

  return <ul className="names-list">{CharNames}</ul>;
}

export default CharacterList;
