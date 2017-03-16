import React from 'react';

const Picker = ({options, value, onChange}) => {
    return (
        <div>
            <h1>{value}</h1>
            <select onChange={(event)=>{onChange(event.target.value)}} value={value}>
            {
                options.map((option)=>{
                    return <option key={option} value={option}>{option}</option>
                })
            }
            </select>
        </div>
    );
}

Picker.propTypes ={
    options: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
}

export default Picker;