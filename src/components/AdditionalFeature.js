import React from "react";

const AdditionalFeature = (props) => {
  const { addFeature, feature } = props;
  const clickAdd = () => {
    addFeature(feature);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={clickAdd} className="button">
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
