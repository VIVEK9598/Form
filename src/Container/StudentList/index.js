import React from 'react';
import TableList from '../../Component/Table/Index';
import { DataContext } from '../../DataContextProvider';
import { Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'


const StudentList = () => {
    const { data, setData } = React.useContext(DataContext)

    const history = useHistory()
    const handleForm = () => {
        history.push("/form/id")
    }
    const handleEdit = id => {

        history.push('/form/' + id)

    }
    const handleDelete = id => {
        const elem = data.filter(d => d.id !== id)
        if (confirm("Are you sure")) {
            setData(elem)
        }
    }
    return (
        <div style={{ textAlign: "right" }} >
            <Button onClick={handleForm} variant="contained" color="primary" >Add new student </Button>
            {data.length === 0 ?
                <Typography align="center" variant="h4" >Data not available </Typography>
                : <TableList
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    data={data} />
            }
        </div>
    );

}

export default StudentList;