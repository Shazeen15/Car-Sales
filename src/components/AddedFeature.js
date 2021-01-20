import React from "react";

const AddedFeature = (props) => {
  const removeClick = () => {
    props.removeFeature(props.feature);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={removeClick} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
