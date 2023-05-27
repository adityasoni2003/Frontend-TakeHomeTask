import chooseUs1 from '../assets/WhyToChooseUs.png'
import chooseUs2 from '../assets/WhyChooseUs2.png'

import point1 from '../assets/point1.png'
import point2 from '../assets/point2.png'
import point3 from '../assets/point3.png'
import point4 from '../assets/point4.png'


const About = ()=>{

    return (<section id="about">
        <div className="about_intro">
            <div className="info">
                <h1>Why Choose Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur it. Saepe praesentium quos, omnis est obcaecati perferendis suscipit distinctio eveniet sit voluptatibus.</p>
                <div className="info_blocks">
                    <div className="block_points">
                        <img src={point1} alt="" />
                        <h1>Fast & Free Shipping</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod facilis, ea autem magni rerum?</p>
                    </div>
                    <div className="block_points">
                        <img src={point2} alt="" />
                        <h1>Easy to Shop</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod facilis, ea autem magni rerum?</p>
                    </div>
                    <div className="block_points">
                        <img src={point3} alt="" />
                        <h1>24/7 Support</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod facilis, ea autem magni rerum?</p>
                    </div>
                    <div className="block_points">
                        <img src={point4} alt="" />
                        <h1>Hassle Free Returns</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod facilis, ea autem magni rerum?</p>
                    </div>
                </div>
            </div>
            <img src={chooseUs1} alt="" />
        </div>
        <div className="about_intro">
        <div className="info">
                <h1>Why help your make <br />Modern Interior Design.</h1>
                <p>Lorem ipsum dolor sit amet consectetur it. Saepe praesentium quos, omnis est obcaecati perferendis suscipit distinctio eveniet sit voluptatibus.</p>
                <div className="info_blocks">
                    <div className="block_points">
                        <p>Lorem ipsum dolor sit amet consectetur adipm magni rerum?</p>
                    </div>
                    <div className="block_points">
                        <p>Lorem ipsum dolor sit amet consectetur lis,em magni rerum?</p>
                    </div>
                    <div className="block_points">
                        <p>Lorem ipsum dolor sit amet cofacilis, ea autem magni rerum?</p>
                    </div>
                    <div className="block_points">
                        <p>Lorem ipsum dolor siabo quod facilis, ea autem magni rerum?</p>
                    </div>
                </div>
            </div>
            <img src={chooseUs2} alt="" />
        </div>

    </section>
)
}
export default About