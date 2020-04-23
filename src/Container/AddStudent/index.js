import React from 'react';
import Form from './Form';
import { DataContext } from '../../DataContextProvider'
import { useHistory } from 'react-router-dom'


const StudentForm = (props) => {
    const { data, setData } = React.useContext(DataContext)
    const history = useHistory()
    const [formData, setFormData] = React.useState({})

    const id = props.match.params.id

    React.useEffect(() => {
        if (id !== "id") {
            const currentElem = data.find(d => d.id == id)
            setFormData(currentElem)
        }
    }, [])

    const handleSubmit = event => {
        event.preventDefault();


        if (id !== "id") {
            const currentIndex = data.findIndex(data => data.id == id)
            console.log(currentIndex)
            let arr = data
            arr[currentIndex] = { ...formData, id: arr[currentIndex].id }

            setData(arr)
        }
        else {
            const newData = data
            newData.push({ id: data.length + 1, ...formData })
            setData(newData)
        }
        history.push('/')


    }

    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <Form
                isEditing={id !== "id"}
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </div>
    );
}

export default StudentForm;