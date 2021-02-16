import React from "react";

const AdditionalFeature = (props) => {
  const { addAdditionalFeatures, feature } = props;
  const handleAddAdditionalFeatures = () => {
    addAdditionalFeatures(feature);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleAddAdditionalFeatures} className="button">
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
