import React,{useState} from 'react'
import { Link } from 'react-scroll'
import logo from '../Image/logo.png'
import './Navbar.scss'
const Navbar = () => {
        const [menuOpen,setMenuOpen] = useState(false);
    return (
        <div className={"nav " + (menuOpen && "active")}>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="right">
                    {/* Ketika di klik menu nya pada saat di posisi false maka akan berubah menjadi true atau sebalik nya */}
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            <div className={"menu " + (menuOpen && "active")}>
                <ul>
                    <li><Link to="home" smooth={true} duration={1500}>Home</Link></li>
                    <li><Link to="features" smooth={true} duration={1500}>Features</Link></li>
                    <li><Link to="about" smooth={true} duration={1500}>About</Link></li>
                    <li><Link to="presentations" smooth={true} duration={1500}>Ui S5</Link></li>
                    <li><Link to="download" smooth={true} duration={1500}>Download</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
