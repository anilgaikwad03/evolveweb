import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {AppWrap, MotionWrap} from '../../wrapper';    
import './About.scss';
import { urlFor, client } from '../../client';



const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query =  '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) => setAbouts(data))
  }, []);
  

  return (
<>
    <h2 className='head-text'style={{marginBottom: 20, marginTop:20}}>Why choose an <span> Evolve web?</span></h2>
    <p className='p-text' style={{marginBottom: 20, marginTop:20}}><center>The Evolve Web provides more than website design and development. Your business, web presence and brand identity will be taken to the next level. The Evolve Web will produce a custom website design that will maintain the professional image that you've worked hard to build. The Evolve Web is a leading provider of web site design and development solutions in the Solapur. Work with professional web developers and who understand your ideas and design and develop websites with a value addition.</center></p>
    <div className='features badge-cmp tag-cmp' style={{marginBottom: 100, marginTop:20}}>
      <div className='box'>
      <h3 className='head-text1'>Fully content managed</h3>
      <p className='p-text' style={{marginBottom: 20, marginTop:20}}><center>All websites come with our excellent content management system. This means that should you want to change a few words on your website, add some new photos, all you need to do is login to your control panel and make the change yourself. Don't worry if you've not got experience of using content management systems though, all Evolve packages come with training and support included. And if all that sounds like too much hard work, you can always give me a call or drop me an email and I can take care of it for you.</center></p>
      </div>

       
      <div className='box'>
      <h3 className='head-text1'>We Ask, Listen and Understand</h3>
      <p className='p-text' style={{marginBottom: 20, marginTop:20}}><center>We begin each web development project by gaining a solid understanding of who you are, what you do and why you do it. This helps us create strategic web design solutions that communicate the right messages and express your unique brand identity. We collaborate with our clients - Good design doesn't come in a flash of inspiration. It's a collaborative process of discovery that takes patience, experience, and communication. We involve our clients every step of the way, incorporating feedback at each stage until the design is finalized.</center></p>
      </div>

      <div className='box'>
      <h3 className='head-text1'>Updates Included</h3>
      <p className='p-text' style={{marginBottom: 20, marginTop:20}}><center>My websites come with updates included. The days of being charged to make updates to your website are over. Evolve's affordable business websites not only allow change, but actively encourage it.</center></p>
      </div>

      <div className='box'>
      <h3 className='head-text1'>Yearly Fee</h3>
      <p className='p-text' style={{marginBottom: 20, marginTop:20}}><center>Evolve's pricing model means one less thing to worry about. My pay yearly websites come with no setup charge and a single time fee. This improves your cashflow and helps you plan for the future.</center></p>
      </div>
    </div>
      
    <h2 className='head-text' style={{marginTop: 20}}>Our <span>Services</span></h2>
      
      <div className='app__profiles'>
          {abouts.map((about, index) =>(
            <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5, type:'tween'}}
            className='app__profile-item'
            key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
            </motion.div>
          ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
  );