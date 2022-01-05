import React from 'react'
import Layout from './components/layout';

export default function contact() {
    return (
        <Layout>
            <div className="contact">
                <div className="contact-intro big-text-contact">Vamos<br/>falar?</div>
                <ul className="contact-social">
                <li className="contact-social-element">
                     <a href='https://www.instagram.com/alexandre_lucas_/' target="_blank" className="social-text">Instagram</a>
                 </li>
                 <li className="contact-social-element">
                     <a href='https://www.facebook.com/alexandre.lucas.140' target="_blank" className="social-text">Facebook</a>
                 </li>
                 <li className="contact-social-element">
                     <a href='https://www.linkedin.com/in/alexandre-lucas-67660799/' target="_blank" className="social-text">Linkedin</a>
                 </li>
                </ul>
            </div>
        </Layout>
    )
} 
