import React from 'react';
import getData from '../hooks/getData';
import LoadingScreen from './LoadingScreen';
import AdviceCSS from './AdvicePage.module.css'
import {Link} from 'react-router-dom'

const AdvicePage = () => {
  const {data, loading, error, refetch} = getData('https://api.adviceslip.com/advice')

  if(loading) return (<LoadingScreen/>)
  document.body.style.background = '#202733';
  return (
    <div className={AdviceCSS.wrapper}>
        <div className={AdviceCSS.nav}><Link to={"/"}><button className={AdviceCSS.homeBTN}>HOME</button></Link></div>
        <div className={AdviceCSS.adviceContainer}>
            <h4 className={AdviceCSS.number}>ADVICE #{data?.slip.id}</h4>
            <h2 className={AdviceCSS.header}>"{data?.slip.advice}"</h2>
            <img className={AdviceCSS.divider} src="assets/pattern-divider-desktop.svg" alt="" />
            <button className={AdviceCSS.randBTN} onClick={refetch}><img src="assets/icon-dice.svg" alt="" /></button>
        </div>
    </div>
  );
}

export default AdvicePage;
