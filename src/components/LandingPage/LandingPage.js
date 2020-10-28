import React from 'react';
import './LandingPage.scss';
// import {anime} from 'react-anime';
const LandingPage = () => {

    // const animationRef = React.useRef(null);
    // React.useEffect(() => {
    //     animationRef.current = anime({loop: true})
    //     .add({
    //       targets: '.ml8 .circle-white',
    //       scale: [0, 3],
    //       opacity: [1, 0],
    //       easing: "easeInOutExpo",
    //       rotateZ: 360,
    //       duration: 1100
    //     }).add({
    //       targets: '.ml8 .circle-container',
    //       scale: [0, 1],
    //       duration: 1100,
    //       easing: "easeInOutExpo",
    //       offset: '-=1000'
    //     }).add({
    //       targets: '.ml8 .circle-dark',
    //       scale: [0, 1],
    //       duration: 1100,
    //       easing: "easeOutExpo",
    //       offset: '-=600'
    //     }).add({
    //       targets: '.ml8 .letters-left',
    //       scale: [0, 1],
    //       duration: 1200,
    //       offset: '-=550'
    //     }).add({
    //       targets: '.ml8 .bang',
    //       scale: [0, 1],
    //       rotateZ: [45, 15],
    //       duration: 1200,
    //       offset: '-=1000'
    //     }).add({
    //       targets: '.ml8',
    //       opacity: 0,
    //       duration: 1000,
    //       easing: "easeOutExpo",
    //       delay: 1400
    //     });
      
    //   anime({
    //     targets: '.ml8 .circle-dark-dashed',
    //     rotateZ: 360,
    //     duration: 8000,
    //     easing: "linear",
    //     loop: true
    //   });
      
    // })
    


    return (
        <div className='landing-page__container' id='home'>
            <div  className='landing-page__image'>
                <figure>
                    <img 
                        className='landing-page__photo'
                        alt='Cartoon Of Poli'
                        src='https://github.com/polinetuch/portfolio_v2.0/blob/master/assets/img/polinetuch.jpg?raw=true'
                    />
                </figure>
            </div>
            <div className='landing-page__about-me'>
                <h1 className='ml8'>
                    <span className='letters-container'>
                        <span className='letters letters-left'>Hi</span>
                        <span className='letters bang'>!</span>
                    </span>

                    <span className='circle cirlce-white'></span>
                    <span className='circle cirlce-dark'></span>
                    <span className='circle cirlce-container'></span>
                
                </h1>
                <p>
                    I am aspiring full stack developer. I love building and finding ways
                    to make things easier with technology.
                </p>        
                <p>
                When I am not coding, you'll probably find me in my art and craft corner heavily 
                focused in my own trial and error process while I am trying out either different 
                colors of paint or magically turned a recycle cardboard into something unexpected.
                </p>
            </div>
        </div>
    )
};

export default LandingPage;