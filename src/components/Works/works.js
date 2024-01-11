import React from "react";
import './works.css';
import Portfolio1 from '../../assets/portfolio1.jpg';
import Portfolio2 from '../../assets/portfolio2.jpg';
import Portfolio3 from '../../assets/portfolio3.jpg';
import Portfolio4 from '../../assets/portfolio4.jpg';
import Portfolio5 from '../../assets/portfolio5.jpg';
import Portfolio6 from '../../assets/portfolio6.jpg';

const Works = () => {
    return (
        <section id='works'>
             <h2 className="worksTitle">My Portfolio</h2>
             <span className="workDesc">I find satisfaction in meticulously attending to every detail, ensuring that my work is flawless at the pixel level. I am eager to contribute my expertise and experience to assist businesses in reaching their objectives and establishing a robust online presence.</span>
             <div className="worksImgs">
                <img src={Portfolio1} alt="" className="worksImg"/>
                <img src={Portfolio2} alt="" className="worksImg"/>
                <img src={Portfolio3} alt="" className="worksImg"/>
                <img src={Portfolio4} alt="" className="worksImg"/>
                <img src={Portfolio5} alt="" className="worksImg"/>
                <img src={Portfolio6} alt="" className="worksImg"/>
             </div>
             <button className="worksBtn">See more</button>
        </section>
    );
}

export default Works