import React from 'react';
import emailPic from '../images/3053910-removebg-preview.png'
const ContactMe = () => {

    return (
        <div id="contact" className='pt-3'>
            <h1 style={{ color: 'rgb(249, 0, 77)', textTransform: 'uppercase' }} className='text-center my-3 '>Contact Me</h1>
            <div className="row container mx-auto align-items-center">
                <div className="col-md-5">
                    <img src={emailPic} className="img-fluid mx-auto" alt="" />
                </div>
                <div className="col-md-7 text-center">
                    <form action="https://formsubmit.co/muhibullahmuhsin545@gmail.com" method="POST">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="text" name="name" Placeholder="Your Name" className='w-75 px-2 py-2 border-3 rounded-2  border-danger my-2' required /> <br />
                        <input type="email" Placeholder="Your Email" className='w-75 px-2 py-2 border-3 rounded-2 border-danger' name="email" required />
                        <br />
                        <textarea name="message" Placeholder="Your Message" className='w-75 px-2 py-2 my-2 rounded-2  border-3 border-danger' cols="auto" rows="10"></textarea>                    <br />

                        <button className="w-75 px-2 py-2 btn button" type="submit">SEND MESSAGE</button>
                    </form>
                </div>
            </div>

        </div >
    );
};

export default ContactMe;