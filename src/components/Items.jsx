import nordic from '../assets/product-1.png';
import argo from '../assets/product-2.png';
import kuzoro from '../assets/product-3.png';
import plus from '../assets/plus.png'


const Items = ()=>{

    return (
        <section id="items">
            <div className="item intro" >
                <h1>Crafted with <br/> excellent <br />material.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugiat repellendus vel reiciendis tempore non!</p>
                <a href="">Explore</a>
            </div>
            <div className="item ">
                <div className="info">
                    <img src={nordic} className='info_img' alt="" height='250px' />
                    <div className="price">
                        <h2>Nordic Chair</h2>
                        <h1>$50.00</h1>
                    </div>
                    <img src={plus} alt="" className="plus" />

                </div>
            </div>
            <div className="item ">
            <div className="info">
                    <img src={kuzoro} className='info_img' alt="" height='250px'/>
                    <div className="price">
                        <h2>Nordic Chair</h2>
                        <h1>$50.00</h1>
                    </div>
                    <img src={plus} alt="" className="plus" />
                </div>
            </div>
            <div className="item">
            <div className="info">
                    <img src={argo} className='info_img' alt="" height='250px'/>
                    <div className="price">
                        <h2>Nordic Chair</h2>
                        <h1>$50.00</h1>
                    </div>
                    <img src={plus} alt="" className="plus" />

                </div>
            </div>
        </section>
    )

    
}
export default Items