'use client'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import styles from "../header.module.css"

export default function Logo() {
 const router = useRouter()
 const words = [
   "made",
   "designed", 
   "created",
   "coded",
   "dreamed",
   "solved",
   "crafted",
   "built",
 ];
 const [currentIndex, setCurrentIndex] = useState(0);
 const [animationClass, setAnimationClass] = useState(styles.wordslidein);

 const changeWord = () => {
   setAnimationClass(styles.wordslideout);
   setTimeout(() => {
     setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
     setAnimationClass(styles.wordslidein);
   }, 300);
 };

 useEffect(() => {
   const slideInterval = setInterval(changeWord, 5000);
   return () => clearInterval(slideInterval);
 }, [currentIndex]);

 const handleClick = () => {
   changeWord()
   router.push('/')
 }

 return (
   <div className={styles.logocontainer} onClick={handleClick}>

     <div 
       className={animationClass}
       style={{
         paddingRight: '10px'
       }}
     >
       {words[currentIndex]}
     </div>
     
     <div>by Ilya</div>

   </div>
 );
}