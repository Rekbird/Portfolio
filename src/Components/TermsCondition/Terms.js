import React from 'react'
import { Link } from 'react-router-dom'
import './TermsAndPolicy.css'

const Terms = () => {
    return (
        <div className = 'Terms_Main'>
            <div className = 'Terms_Header'>
            <Link to='/signin'><img src = '../../../Data/ic_arrow_left.svg' className = 'Terms_Arrow'/></Link>
            <h2 className = 'Terms_H2'>Terms conditions</h2>
            </div>
            <span className = 'Terms_Text'>
                These terms and conditions («Terms», «Agreement») are an agreement between Mobile Application Developer («Mobile Application Developer», «us», «we» or «our») 
                and you («User», «you» or «your»). This Agreement sets forth the general terms and conditions of your use of the company mobile application and any of its 
                products or services (collectively, «Mobile Application» or «Services»). 
            </span>
            <div>
                <h3 className = 'Terms_H3'>Accounts and membership</h3>
                <span className = 'Terms_Text'>
                    You must be at least 13 years of age to use this Mobile Application. By using this Mobile Application and by agreeing to this Agreement 
                    you warrant and represent that you are at least 13 years of age. If you create an account in the Mobile Application, you are responsible for 
                    maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions 
                    taken in connection with it. Providing false contact information of any kind may result in the termination of your account. You must immediately 
                    notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including 
                    any damages of any kind incurred as a result of such acts or omissions. We may suspend, disable, or delete your account (or any part thereof) if we 
                    determine that you have violated any provision of this Agreement or that your conduct or content would tend to damage our reputation and goodwill. If 
                    we delete your account for the foregoing reasons, you may not re-register for our Services. We may block your email address and Internet protocol address 
                    to prevent further registration. 
                </span>
            </div>
            <div>
                <h3 className = 'Terms_H3'>User content</h3>
                <span className = 'Terms_Text'>
                    We do not own any data, information or material («Content») that you submit in the Mobile Application in the course of using the Service. You shall 
                    have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right 
                    to use of all submitted Content. We may, but have no obligation to, monitor Content in the Mobile Application submitted or created using our Services 
                    by you. Unless specifically permitted by you, your use of the Mobile Application does not grant us the license to use, reproduce, adapt, modify, publish 
                    or distribute the Content created by you or stored in your user account for commercial, marketing or any similar purpose. But you grant us permission to 
                    access, copy, distribute, store, transmit, reformat, display and perform the Content of your user account solely as required for the purpose of providing 
                    the Services to you.
                </span>
            </div>
        </div>
    )
}

export default Terms;