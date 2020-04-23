import React from 'react';
import { TextField } from '@material-ui/core';

const Input = ({ id, type, label, onChange, value, name }) => {

    const mystyle = {
        margin: '5px'

    }
    return (
        <div>

            <TextField
                type={type}
                name={name}
                value={value}
                variant="outlined"
                style={mystyle}
                id={id}
                label={label}
                onChange={onChange}
            />
        </div>



    );
}

export default Input;