import React, { createContext } from 'react';

export const DataContext = createContext()

export const DataContextProvider = (props) => {
    const { children } = props
    const [data, setData] = React.useState([])
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}
