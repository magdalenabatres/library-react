import React from "react";
import UndrawBooks from '../assets/Undraw_Books.svg';
import Waves from '../assets/wave.svg';
import {Link} from "react-router-dom";
import Feactures from "./Features";
import Explore from "./Explore";

const Landing = ({icon}) => {
  return ( 
  <section id="landing">
       <header className="header__container">
        <div className="header__container">
            <div className="header__description">
                <h1>Welcome to Our <span className="purple">Library Platform</span></h1>
                <h2>Discover your next favorite book</h2>
                <Link to='#features'>
                    <button className="btn">Explore Now</button>
                </Link>
            </div>
             <figure className="header__img--wrapper">
                  <img src={UndrawBooks} alt="" />
             </figure>
           </div>   
        </header>
           {/* Olas al final del header */}
        <figure className="wave__wrapper">
           <img src={Waves} alt="Decorative wave" />
        </figure>

    </section>

     );
  }

  export default Landing;

