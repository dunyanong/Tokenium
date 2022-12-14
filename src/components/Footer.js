import React from 'react';
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub,
    AiFillHome
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-white p-5">           
        <div className="text-2xl flex justify-center gap-10 pt-7 text-gray-600">
        <a href="/"><AiFillHome /></a>
            <a href="https://twitter.com/dun_yan_" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
            <a href="https://www.linkedin.com/in/dun-yan-ong-b26aa5244/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
            <a href="https://github.com/dunyanong" target="_blank" rel="noreferrer"><AiFillGithub /></a>    
        </div>
     
        <div className="pb-5 pt-5">
            <p className="text-gray-600 text-center">Copyright @ Tokenium</p>
        </div>
    </footer>
    );
}
 
export default Footer;
