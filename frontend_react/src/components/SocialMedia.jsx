import React from 'react'
import { BsWhatsapp, BsTelegram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://api.whatsapp.com/send?phone=+918421594102&text=Hello, more information!" target="_blank">
            <BsWhatsapp />
            </a>
        </div>

        <div>
          <a href='https://www.facebook.com/' target='_blank'>
            <FaFacebookF />
          </a>
        </div>

        <div>
          <a href="https://api.telegram.com/send?phone=+918421594102&text=Hello, more information!" target="_blank">
            <BsTelegram />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia