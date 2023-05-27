import nordic from '../assets/nordic.png'
import kruzi from '../assets/kuzoro.png'
import ergo from '../assets/argo.png'
import TestimonialCrousel from './TestimonialCrousel'


const Services = ()=>{

    return <section id="services">
        <div className="chairs">
            <div className="chair">
                <img src={nordic} alt="" />
                <div className="chair_info">
                    <h1>Nordic Chair</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elia eveni ffimus.</p>
                    <a href="">Read more</a>
                </div>
            </div>
            <div className="chair">
            <img src={kruzi} alt="" />
                <div className="chair_info">
                    <h1>Kruzi Aero</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, molestias.</p>
                    <a href="">Read more</a>
                </div>
            </div>
            <div className="chair">
            <img src={ergo} alt="" />
                <div className="chair_info">
                    <h1>Ergonomic Chair</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo?</p>
                    <a href="">Read more</a>
                </div>
            </div>
        </div>
        <TestimonialCrousel/>

    </section>
}

export default Services