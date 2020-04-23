import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddStudent from './Container/AddStudent';
import StudentList from './Container/StudentList';
import {DataContextProvider} from './DataContextProvider'

const Routing = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <DataContextProvider>
                        <Route exact path="/form/:id" component={AddStudent} />
                        <Route exact path="/" component={StudentList} />
                    </DataContextProvider>
                </Switch>
            </Router>
        </div>

    );

}

export default Routing;