import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import './Cred_page.css'
import Cred_input from './Reusable_Inputs/Cred_Input.js'

//<input placeholder = 'E-mail' type="text" className="SignIn_Input" />
class SignInScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div class="SignIn_Main">
            <h2 className = 'SignIn_Header'>Sign In</h2>
            <input placeholder = 'E-mail' type="text" className="SignIn_Input" />
            <Cred_input fieldType={'password'} inputType = {'password'} compare = {false}/>
            <a className = 'SignIn_Links'>Forgot password?</a>
            <button type="button" className='SignIn_SubmitButton'>Sign In</button>
            <a className = 'SignIn_Links'>Sign Up</a>
            <p className = "SignIn_Paragraph">
                    By accesing your account, you agree to our<br />
                    <Link to= '/terms' className = "SignIn_Links">Terms conditions</Link> and <Link to= '/policy' className = "SignIn_Links">Privacy Policy</Link>
                </p>
        </div>
        )
    }   
}
export default SignInScreen;