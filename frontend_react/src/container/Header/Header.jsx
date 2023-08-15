import React from 'react';
import {motion} from 'framer-motion';
import {AppWrap} from '../../wrapper';
import {images} from '../../constants';
import './Header.scss';


const scaleVariants ={
  whileInView:{
    scale:[0, 1],
    opacity:[0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1]}}
      transition={{ duration: 0.5}}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            
            <div style={{ marginLeft: 10}}>
              <p className='p-text'><center><b></b></center></p>
              <h1 className='head-text1'>
              Best <b>Web Design </b> Company in Solapur   
              </h1>
            </div>
          </div>
          
          <div className='tag-cmp app__flex'>
          <p className='p-text'> <b>Are you looking for a web development company ? </b> <br/> Hi there, my name is Anil Gaikwad and I run a website company called Evolve Web. I create stunning websites that support your business and generate leads. I offer yearly plans which include regular maintainance, so your new website will always be fresh and up-to-date. If you’re looking for help with your website I’d love to hear from you.
                                    <br/><br/> <a href="mailto:gaikwadanil530@gmail.com"> <b>Anil Gaikwad, Website Designer. </b> gaikwadanil530@gmail.com</a>
                                    </p>
          </div>
        </div>
      </motion.div>

      <motion.div
      whileInView={{ opacity: [0, 1]}}
      transition={{ duration: 0.5, delayChildren: 0.5}}
      className='app__header-img'
      >
        <img src={images.profile} alt='profile-bg' />
        <motion.img
        whileInView={{ scale: [0, 1]}}
        transition={{ duration: 1, ease: 'easeInOut'}}
        className='overlay_circle'  
        src={images.circle}
        alt='profile'
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.java, images.react, images.flutter].map((circle, index) =>(
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');