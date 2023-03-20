import React from 'react';
import getData from '../hooks/getData';
import LoadingScreen from './LoadingScreen';
import JokesCSS from './styleModules/JokesPage.module.css'
import {Link} from 'react-router-dom'

const JokesPage = () => {
    const {data, loading, error, refetch} = getData('https://v2.jokeapi.dev/joke/Any')
    if(loading) return (<LoadingScreen/>)
    document.body.style.background = '#ffffff';


    return (
      <div className={JokesCSS.wrapper}>
        <div className={JokesCSS.nav}><Link to={"/"}><button className={JokesCSS.homeBTN}>HOME</button></Link></div>
        <img className={JokesCSS.comedyImage} src="/assets/theater.png" alt="" />
        <img className={JokesCSS.comedyImage2} src="/assets/theater(1).png" alt=""/>
        <div className={JokesCSS.jokeContainer}>
            <h2 className={JokesCSS.header}>{data?.joke}</h2>
            <h2 className={JokesCSS.header}>{data?.setup}</h2>
            <h2 className={JokesCSS.header}>{data?.delivery}</h2>
            <button className={JokesCSS.randBTN}  onClick={refetch}><img src="assets/icon-dice.svg" alt="" /></button>
        </div>
      </div>
    );
}

export default JokesPage;
