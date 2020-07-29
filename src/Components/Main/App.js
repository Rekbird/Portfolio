import React, {Component} from 'react'
import './App.css'
import Logo from '../Logo/Logo.js'
import SignInScreen from '../Credentials/Cred_page.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom"

import Terms from '../TermsCondition/Terms.js'
import Policy from '../TermsCondition/Policy.js'

class Application extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Router> 
                <Switch>
                    <Route exact path="/"> 
                        <Redirect to="/signin" />
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

                    <Route path="/policy">
                        <div className = 'AppMain'>  
                            <Logo/>
                            <Policy />
                        </div>
                    </Route>
                </Switch>
            </Router>

        )
    }   
}
export default Application;