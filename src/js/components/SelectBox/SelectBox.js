import React from 'react';

const SelectBox = props => <select id={props.usedFor} onChange={props.onChange}>
    <option value="-1">Filter by size</option>
    {
        props.options.map((option, i) => <option key={i} value={option}>{option}</option>)
    }
</select>;

export default SelectBox;