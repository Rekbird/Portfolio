import React from 'react'
import { Link } from 'react-router-dom'
import './TermsAndPolicy.css'

const Policy = () => {
    return (
        <div className = 'Terms_Main'>
            <div className = 'Terms_Header'>
            <Link to='/signin'><img src = '../../../Data/ic_arrow_left.svg' className = 'Terms_Arrow'/></Link>
            <h2 className = 'Terms_H2'>Privacy Policy</h2>
            </div>
            <span className = 'Terms_Text'>
                My Company (change this) («us», «we», or «our») operates http://www.mysite.com (change this) (the «Site»). This page informs you of our policies 
                regarding the collection, use and disclosure of Personal Information we receive from users of the Site. We use your Personal Information only for 
                providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.
            </span>
            <h3 className = 'Terms_H3'>Information Collection And Use</h3>
            <span className = 'Terms_Text'>
                While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. 
                Personally identifiable information may include, but is not limited to your name («Personal Information»). 
            </span>
            <h3 className = 'Terms_H3'>Log Data</h3>
            <span className = 'Terms_Text'>
                Like many site operators, we collect information that your browser sends whenever you visit our Site («Log Data»). This Log Data may include 
                information such as your computer’s Internet Protocol («IP») address, browser type, browser version, the pages of our Site that you visit, 
                the time and date of your visit, the time spent on those pages and other statistics. In addition, we may use third party services such as 
                Google Analytics that collect, monitor and analyze this information.
            </span>
            <h3 className = 'Terms_H3'>Communications</h3>
            <span className = 'Terms_Text'>
                We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other 
                information that may be interesting to you.
            </span>
        </div>
    )
}

export default Policy;