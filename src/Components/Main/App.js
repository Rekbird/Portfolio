import React, {Component} from 'react'
import './App.css'
import Logo from '../Logo/Logo.js'
import SignInScreen from '../SignIn/SignIn.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

import Terms from '../TermsCondition/Terms.js' 

class Application extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
        <Router> 
                <Switch>
                    <Route exact path="/">
                    <div className = 'AppMain'>  
                        <Redirect to="/terms" />
                        </div>
                    </Route>
                    <Route path="/signin">
                        <div className = 'AppMain'>  
                            <Logo/>
                            <SignInScreen/>
                        </div>
                    </Route>
                    <Route path="/terms">
                        <div className = 'AppMain'>  
                            <Logo/>
                            <Terms />
                        </div>
                    </Route>
                </Switch>
        </Router>

        )
    }   
}
export default Application;