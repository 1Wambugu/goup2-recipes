import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar';
import './styles/main.css';

import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import CreateRecipePage from './components/CreateRecipe';
import HomePage from './components/Home';
import LoginPage from './components/Login';
import SignUpPage from './components/SignUp';




const App=()=>{

    
    return (
        <Router>
        <div className="">
            <NavBar/>
            <Switch>
                <Route path="/create_recipe">
                    <CreateRecipePage/>
                </Route>
                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Route path="/signup">
                    <SignUpPage/>
                </Route>
                <Route path="/">
                    <HomePage/>
                </Route>
            </Switch>
        </div>
        </Router>
    )
}


ReactDOM.render(<App/>,document.getElementById('root'))