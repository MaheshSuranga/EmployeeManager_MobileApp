import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import EmployeeList from './components/employeeList';
import EmployeeCreate from './components/employeeCreate';
import EmployeeEdit from './components/employeeEdit';

const RouterComponent = () => (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene
                     key='login'
                     component={LoginForm}
                     title="Please Login"
                     initial
                    />
                </Scene>
                <Scene key='main'>
                    <Scene
                     onRight={() => Actions.employeeCreate()}
                     rightTitle='Add'
                     key='employeeList'
                     component={EmployeeList} 
                     title="Employees"
                     initial
                    />
                    <Scene
                     key='employeeCreate'
                     component={EmployeeCreate}
                     title='Create Employee'
                    />
                    <Scene
                     key='employeeEdit'
                     component={EmployeeEdit}
                     title='Edit Employee'
                    />
                </Scene>  
            </Scene>
        </Router>
    );    

export default RouterComponent;
