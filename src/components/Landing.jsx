import React from 'react';
import { Route, Routes, Link} from 'react-router-dom'
import LandingCSS from './Landing.module.css'


const Landing = () => {
  document.body.style.background = '#f2dedc';

  return (
    <div className={LandingCSS.wrapper}>
        <h1 className={LandingCSS.header}>HOW ARE YOU FEELING TODAY?</h1>
        <div className={LandingCSS.buttonContainer}>
            <Link to={"/advisor"}><button className={LandingCSS.buttonAdvice}>down, give me an advice!</button></Link>
            <Link to={"/doggy"}><button className={LandingCSS.buttonDog}>sad, show me something cute!</button></Link>
            <Link to={"/joke"}><button className={LandingCSS.buttonJoke}>cranky, tell me a joke!</button></Link>
        </div>
    </div>
  );
}

export default Landing;
