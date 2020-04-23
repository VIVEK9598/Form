import React from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, Button, } from '@material-ui/core';

const TableList = ({ data, onEdit, onDelete }) => {
console.log(data)
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow hover={true}>
                        <TableCell component="th"><b>Name</b></TableCell>
                        <TableCell component="th"><b>Age</b></TableCell>
                        <TableCell component="th"><b>Mobile</b></TableCell>
                        <TableCell component="th"><b>Email</b></TableCell>
                        <TableCell component="th"><b>Action</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(d => {
                        return (
                            <TableRow key={d.id} hover={true}>
                                <TableCell component="td">{d.name}</TableCell>
                                <TableCell component="td">{d.age}</TableCell>
                                <TableCell component="td">{d.mobile}</TableCell>
                                <TableCell component="td">{d.email}</TableCell>
                                <TableCell component="td">
                                    <Button
                                        onClick={() => onEdit(d.id)}
                                        variant="contained"
                                        color="primary"
                                    > Edit
                                    </Button>{" "}
                                    <Button
                                        onClick={() => onDelete(d.id)}
                                        variant="contained"
                                        color="secondary"
                                    >Delete
                                        </Button>

                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    );
}

export default TableList;