import React from "react";
import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions/addFeatureAction";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = (props) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={props.removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          addFeature={props.addFeature}
          additionalFeatures={props.additionalFeatures}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
