import logo from '../assets/Furni..png';
import user from '../assets/User.png'
import cart from '../assets/Cart.png'
import { useState } from "react";
import { Link } from 'react-scroll';


const Navbar = ()=>{
    const [openMenu,setOpenMenu] = useState(false);
    const handleMenuClick = (e)=>{
        e.stopPropagation();
        setOpenMenu(!openMenu);
    }
    const closeMenu =()=> {
        setOpenMenu(false)
    }
    return (
        <nav className='navbar'>
            <div className='navbar_logo'>
            <img src={logo}  alt="" />

            </div>
            
            <ul className={openMenu ? 'navbar_list open':'navbar_list'}>
                <li>
                    <Link to='home' spy={true} smooth={true} duration={500} onClick={closeMenu}>Home</Link>
                </li>
                <li>
                <Link to='about' spy={true} smooth={true} duration={500} onClick={closeMenu}>About Us</Link></li>
                <li><Link to='services' spy={true} smooth={true} duration={500} onClick={closeMenu}>Services</Link></li>
                <li><Link to='blog' spy={true} smooth={true} duration={500} onClick={closeMenu}>Blog</Link></li>
                <li><Link to='contact' spy={true} smooth={true} duration={500} offset={-100} onClick={closeMenu}>Contact Us</Link></li>
            </ul>
            <div className="navbar_cart_user">
                <img src={user} alt="user" />
                <img src={cart} alt="cart" />
                
                <div className="menu" onClick={(e)=>{handleMenuClick(e)}}>
                    <div className={openMenu ? "lines red" :"lines"}></div>
                    <div className={openMenu ? "lines red" :"lines"}></div>
                    <div className={openMenu ? "lines red" :"lines"}></div>
                    
                </div>
            </div>
        </nav>
    )
}
export default Navbar