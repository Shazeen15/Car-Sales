import {
  ADD_ADDITIONAL_FEATURES,
  REMOVE_FEATURE,
} from "./../actions/carActions";
const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

const carReducer = (state = initialState, action) => {
  //   console.log("state", state);
  //   console.log("action", action);
  switch (action.type) {
    case ADD_ADDITIONAL_FEATURES:
      if (!state.car.features.includes(action.payload)) {
        return {
          ...state,
          additionalPrice: state.additionalPrice + action.payload.price,
          car: {
            ...state.car,
            features: [...state.car.features, action.payload],
          },
        };
      } else {
        return state;
      }
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter((feature) => {
            return feature.id !== action.payload.id;
          }),
        },
      };

    default:
      return state;
  }
};
export default carReducer;
