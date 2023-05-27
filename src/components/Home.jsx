import HomeCouch from '../assets/CouchHome.png'


const Home = ()=>{
    return <section id="home">
        <div className="heading">
            <h1>Moder Interior</h1>
            <h1>Studio Design</h1>
        </div>

        <div className="sofa">
            <img src={HomeCouch} className='sofa_img' alt="" />

        </div>
        <div className="home_btns">
            <a href="" className='btn' id='shop-now'>Shop Now</a>
            <a href="" className='btn' id='explore'>Explore</a>

        </div>

    </section>
}

export default Home