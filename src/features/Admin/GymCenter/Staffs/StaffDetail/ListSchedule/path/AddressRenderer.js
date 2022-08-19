import { Phone, EnvelopeSimple, MapPinLine, Coin } from "phosphor-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./customizeListPT.scss";

const AddressRenderer = (props) => {
  return (
    <>
      <div className="phoneContainer">
        <div className="phoneText">{props.data.TimeId}</div>
        <Coin color="#0a0700" weight="light" />
      </div>
    </>
  );
};
export default AddressRenderer;
