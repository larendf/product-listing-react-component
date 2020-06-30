import React from "react";

const Badge = props => <span className={"badge " + props.type}>{props.label}</span>;

export default Badge;