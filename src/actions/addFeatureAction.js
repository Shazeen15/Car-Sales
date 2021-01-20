export const ADD_FEATURES = "ADD_FEATURES";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = (feature) => {
  return {
    type: ADD_FEATURES,
    payload: feature,
  };
};

export const removeFeature = (featureId) => {
  return {
    type: REMOVE_FEATURE,
    payload: featureId,
  };
};
