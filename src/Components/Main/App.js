import React, {Component} from 'react'
import './App.css'
import Logo from '../Logo/Logo.js'


class Application extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
        <div className = 'AppMain'>
            <Logo/>
        </div>
        )
    }   
}
export default Application;