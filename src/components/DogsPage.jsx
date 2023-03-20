import React from 'react';
import getData from '../hooks/getData';
import LoadingScreen from './LoadingScreen';
import DogCSS from './styleModules/DogPage.module.css'
import {Link} from 'react-router-dom'


const DogsPage = () => {
    const {data, loading, error, refetch} = getData('https://dog.ceo/api/breeds/image/random')
    if(loading) return (<LoadingScreen/>)
    document.body.style.background = '#f2dedc';
    return (
      <div className={DogCSS.background}> 
      <div className={DogCSS.nav}><Link to={"/"}><button className={DogCSS.homeBTN}>HOME</button></Link></div>
        <div className={DogCSS.wrapper}>
            <div className={DogCSS.imageContainer}>
                <img className={DogCSS.mainImage} src={data?.message} alt="" />
            </div>
            <div className={DogCSS.textContainer}>
                <h3 className={DogCSS.header}>LOOK AT THIS DOG!</h3>
                <button className={DogCSS.randBTN} onClick={refetch}><img src="assets/icon-dice.svg" alt="" /></button>
            </div>
        </div>
      </div>
    );
}

export default DogsPage;
