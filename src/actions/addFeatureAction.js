export const ADD_FEATURES = "ADD_FEATURES";

export const addFeature = (featureId) => {
  return {
    type: ADD_FEATURES,
    payload: featureId,
  };
};
