import React, { useState } from "react";
import Home from "./components/Home";
import ProfilePage from "./components/Profile";
//import CharacterDetails from "./components/CharacterDeats";
import Form from "./components/Form";
import CharacterList from "./components/CharacterList";
import "./App.css";
import { Route, Link } from "react-router-dom";

const App = () => {
  const [charData, setCharData] = useState("");

  const handleSubmit = name => {
    const charUrl = `https://rickandmortyapi.com/api/character/?name=${name}`;
    console.log("App - handleSubmit - char", charUrl);

    fetch(charUrl)
      .then(res => res.json())
      .then(data => setCharData(data));
  };

  return (
    <div>
      <nav>
        <Link to="/">NAV</Link>
      </nav>
      <main>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/Profile/:name"
            render={props => (
              <ProfilePage charData={charData.results} match={props.match} />
            )}
          />
          <Route exact path="/">
            <Form handleSubmit={handleSubmit} />
          </Route>

          {charData === "" ? (
            <h1>Enter Character Name</h1>
          ) : (
            <Route exact path="/">
              {" "}
              <CharacterList name={charData} />
            </Route>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
