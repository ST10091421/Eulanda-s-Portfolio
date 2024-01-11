import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-ux.jpg';
import WebDesign from '../../assets/web-design.jpg';
import AppDesign from '../../assets/App design.jpg';

const Skills = () => {
    return(
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">Passionate about weaving seamless user experiences, I specialize in crafting intuitive web and app interfaces for optimal usability.I have a strong understanding of design & a keen eye for detail.I am proficient in HTML,CSS & javascripts,as well as C#.</span>
            <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Elevating user experiences through thoughtful UI/UX design—creating intuitive interfaces that marry functionality with aesthetic appeal for seamless digital interactions.</p>
                </div>
              </div>   
              <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>Crafting visually stunning and user-centric web designs that captivate audiences and elevate online experiences.</p>
                </div>
              </div>   
              <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Innovative app design that seamlessly blends aesthetics and functionality, creating intuitive and engaging experiences for users on every interaction.</p>
                </div>
              </div>              
            </div>
        </section>
    );
}

export default Skills