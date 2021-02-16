export const ADD_ADDITIONAL_FEATURES = "ADD_ADDITIONAL_FEATURES";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addAdditionalFeatures = (feature) => {
  return { type: ADD_ADDITIONAL_FEATURES, payload: feature };
};

export const removeFeature = (feature) => {
  return { type: REMOVE_FEATURE, payload: feature };
};
