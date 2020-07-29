тзь import React , {Component} from 'react'
import './Cred_Input.css'

class Cred_Input extends Component {
    constructor(props) {
        super(props)
        this.fieldType = this.props.fieldType
        this.inputType = this.props.inputType
        this.comparePass = this.props.compare
    }

    render() {
        let showPassButton
        if (this.fieldType == 'password') {
            showPassButton = this.inputType == 'password' ? 
            <img src='../../../../Data/ic_eye_unvisible.svg' className = 'Cred_Input_showPass_Button'/> : 
            <img src='../../../../Data/ic_eye_visible.svg' className = 'Cred_Input_showPass_Button'/>
        }

        return (
            <div className = 'Cred_Input_Main'>
            <input placeholder = {this.fieldType} type={this.inputType} className="Cred_Input" />
            {showPassButton}
            </div>
        )
    }
}

export default Cred_Input