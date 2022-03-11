import React from 'react'
import { FaFacebookF, FaArrowUp } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { ImWhatsapp } from 'react-icons/im';
function Footer() {
    return (
        <div class="under-div">


            <div class="under-div2">
                <a name="contact"> </a>
                <div class="future">
                    <a href="http://www.facebook.com">  <button class="btn btn4">  <FaFacebookF color='white' size={"2rem"} /> </button></a>
                    <a href="http://www.twitter.com"> <button class="btn btn2"> <BsTwitter color='white' size={"2rem"} /></button></a>
                    <a href="#up"> <button class="btn btn5"> <FaArrowUp color='white' size={"2rem"} /></button></a>
                    <a href="http://www.gmail.com"><button class="btn btn1"> <SiGmail color='white' size={"2rem"} />  </button></a>
                    <a href="http://www.whatsapp.com"> <button class="btn btn3"><ImWhatsapp color='white' size={"2rem"} /> </button></a>


                </div>
            </div>

            <div class="footer-bottom" >
                <p> © 2014-2030, quickhome. All rights reserved. </p>
            </div>


        </div>


    )
}

export default Footer