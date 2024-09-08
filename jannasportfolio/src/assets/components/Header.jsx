'use client';
import useMousePosition from '../../utils/useMousePosition';
import { motion } from 'framer-motion';
import React from 'react';
import '../css/Header.css';
import Janna from '../images/Janna.png';
import CompEng from '../images/CompEng.png';

function Header() {
    const [isHovered, setIsHovered] = React.useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 275 : 40;
    return (
        <header className="header">
            <div className="image-div">
            <motion.div
             className="mask"
             animate=
             {{
                WebkitMaskPosition: `${x - (size)/2}px ${y - (size)/2}px`,
                WebkitMaskSize: `${size}px ${size}px`
             }}
             transition={{type:"tween", ease:"backOut"}}>
                <img onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}} src={CompEng} alt="Computer Engineer" />
            </motion.div>
            
            <div>
                <img src={Janna} alt="Janna" />
            </div>
            </div>
        </header>
    );
}

export default Header;