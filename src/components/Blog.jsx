
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';


const Blog = ()=>{
    return <section id="blog">
        <h1>Recent Blogs <span>View All Post</span></h1>
        <div className="blogs">
            <div className="blog_item">
                <img src={blog1} alt="" />
                <h3>First Time Home Owner Ideas</h3>
                <p>by Nana Ann on Nov 12th,2023</p>
            </div>
            <div className="blog_item">
                <img src={blog2} alt="" />
                <h3>First Time Home Owner Ideas</h3>
                <p>by Nana Ann on Nov 12th,2023</p>
            </div>
            <div className="blog_item">
                <img src={blog3} alt="" />
                <h3>First Time Home Owner Ideas</h3>
                <p>by Nana Ann on Nov 12th,2023</p>
            </div>
        </div>

    </section>
}

export default Blog