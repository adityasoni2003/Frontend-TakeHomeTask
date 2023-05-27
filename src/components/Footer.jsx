import furni from '../assets/logo1.png'

import link1 from '../assets/link1.png'
import link2 from '../assets/link2.png'
import link3 from '../assets/link3.png'
import link4 from '../assets/link4.png'

const Footer = ()=>{
    return (
        <footer>
            <div className="furni-about">
                <img src={furni} alt=""  width='100px'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui molestias veritatis fugiat amet repellendus, mollitia eum repudiandae reiciendis. Libero culpa et vero sit illum dolorem perspiciatis voluptate accusantium vitae eius!</p>
                <div className="social-links">
                    <img src={link1} width='50px' alt="" />
                    <img src={link2} width='50px' alt="" />
                    <img src={link3} width='50px' alt="" />
                    <img src={link4} width='50px' alt="" />

                </div>
            
            </div>
            <div className="links">
                <ul>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="links">
                <ul>
                    <li>Support</li>
                    <li>Knowledge Base</li>
                    <li>Live Chat</li>
                </ul>
            </div>
            <div className="links">
                <ul>
                    <li>Jobs</li>
                    <li>Our Team</li>
                    <li>Leadership</li>
                    <li>Privacy Polict</li>
                </ul>
            </div>
            <div className="links">
                <ul>
                    <li>Nordic Chair</li>
                    <li>Kruzo Aero</li>
                    <li>Ergonomic</li>
                </ul>
            </div>
            <div className="foot-info">
            <p>Copyright 2022 adityasoniprofessional@gmail.com. All rights reserved</p>
            <p>Terms & Condition <span>Privacy Policy</span></p>

            </div>

        </footer>
    )
}

export default Footer