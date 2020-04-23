import React from 'react';
import { Button } from '@material-ui/core';

const ButtonContaind = ({ value, onSubmit }) => {
    return (
        <div>
            <Button
                onClick={onSubmit}
                variant="contained"
                color="primary"
                type="submit">
                {value}
            </Button>
        </div>
    );
}

export default ButtonContaind;