import React from 'react';
import Input from '../../Component/Input/Index';
import { Container, Typography } from '@material-ui/core';
import ButtonContaind from '../../Component/Button/Index'


const Form = ({ formData, onChange, onSubmit, isEditing }) => {


    return (
        <div style={{ textAlign: "center" }}>
            <Container maxWidth="sm">
                <Typography align="center" variant="h6" >Fill the  student details </Typography>

                <Input
                    type="text"
                    value={formData.name || ""}
                    name="name"
                    onChange={onChange}
                    id="name"
                    label="Name"
                />
                <Input
                    type="number"
                    value={formData.age || ""}
                    name="age"
                    onChange={onChange}
                    id="age"
                    label="Age"
                />
                <Input
                    type="number"
                    value={formData.mobile || ""}
                    name="mobile"
                    onChange={onChange}
                    id="mobile"
                    label="Mobile"
                />
                <Input
                    type="email"
                    value={formData.email || ""}
                    name="email"
                    onChange={onChange}
                    id="email"
                    label="Email"
                /><div>
                    <ButtonContaind
                        onSubmit={onSubmit}
                        value={isEditing ? "update" : "submit"}
                    />
                </div>



            </Container>
        </div>
    );

}

export default Form;