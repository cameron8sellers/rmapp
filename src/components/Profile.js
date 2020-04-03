import React from "react";
import CharacterDetails from "./CharacterDeats";

const ProfilePage = props => {
  console.log("Profile", props);

  const character = props.charData.filter(item => {
    return item.name === props.match.params.name;
  });
  console.log("char", character);
  return (
    <div>
      <h3> Profile Page</h3>
      <CharacterDetails char={character} />
    </div>
  );
};

export default ProfilePage;
