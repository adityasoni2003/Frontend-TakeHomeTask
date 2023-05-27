import send from '../assets/send.png'
import sofa from '../assets/sofa1.png'
import Footer from './Footer'
const Contact = ()=>{

    return <section id="contact">
        <div className="newsletter">
            <h1><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-1 h-1" height='20px' width='20px'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
</span> Subscribe to Newsletter</h1>
            <div className="input-send">


            <input type="text" placeholder="Enter Your Name" />
            <input type="text" placeholder="Enter Your Email" />
            <img src={send} alt="" width='50px'/>
            </div>

        </div>
        <img src={sofa} className='sofa' alt="" />
        <Footer/>
    </section>
}

export default Contact