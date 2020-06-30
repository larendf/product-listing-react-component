import React from "react";

const Image = props => <img src={"/images/" + props.imageName} alt={props.imageAlt} />;

export default Image;