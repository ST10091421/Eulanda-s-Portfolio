import React from "react";
import './intro.css';
import bg from '../../assets/image.jpg';
import btnImg from '../../assets/hireme.jpg';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName" >Eulanda</span><br />Website Designer</span> 
                <p className="introPara">I specialize in crafting user-friendly web and app experiences as a dedicated developer.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}
export default Intro;