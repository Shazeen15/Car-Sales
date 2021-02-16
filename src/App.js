import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { connect } from "react-redux";
import { addAdditionalFeatures, removeFeature } from "./actions/carActions";

const App = (props) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          addAdditionalFeatures={props.addAdditionalFeatures}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    car: state.car.car,
    additionalFeatures: state.car.additionalFeatures,
    additionalPrice: state.car.additionalPrice,
  };
};
export default connect(mapStateToProps, {
  addAdditionalFeatures,
  removeFeature,
})(App);
