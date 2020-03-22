import React from "react";

const Promo = props => <span className={"promo " + props.type}>{props.label}</span>;

export default Promo;