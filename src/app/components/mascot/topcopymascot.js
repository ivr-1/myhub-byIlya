'use client'

import styles from "./mascot.module.css"

import idleAnimation from "../mascot/animations/idle-breathing.json";
import hatAnimation from "../mascot/animations/hat-off.json";
import pushAnimation from "../mascot/animations/push-loop.json";
import walkAnimation from "../mascot/animations/walk-loop.json";
import walktoPushAnimation from "../mascot/animations/walk-to-push.json";
import walktoStopAnimation from "../mascot/animations/walk-to-stop.json";
import waveAnimation from "../mascot/animations/wavehand.json"

import { motion } from "motion/react"
import { useState, useRef, useEffect } from "react";

import Mascot from "./Mascot"

function TopCopyMascot({firstLaunch, text, animationState, setAnimationState}) {
  const lottieRef = useRef();
  const timerRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const movableOffset = firstLaunch? 100:0
  const introSequence = firstLaunch? [
    {
      animation: walkAnimation,
      position: { x: -5, y: 0 },
      speed: 1,
      direction: 1,
      duration: 0, // full cycle 2000
      opacity: 0,
    },
    {
      animation: walktoPushAnimation,
      position: { x: -30, y: 0 },
      speed: 4,
      direction: -1,
      duration: 300, // full cycle 2000
    },
    {
      animation: pushAnimation,
      position: { x: -30, y: 0 },
      speed: 4,
      direction: -1,
      duration: 1000, // full cycle 2000
    },
    {
      animation: walkAnimation,
      position: { x: 5, y: 0 },
      speed: 2,
      direction: 1,
      duration: 700, // full cycle 1950
    },
    {
      animation: hatAnimation,
      position: { x: 5, y: 0 },
      speed: 0.8,
      direction: 1,
      duration: 4400, // full cycle 4000
    },
  ] 
  : 
  [
    {
      animation: walktoStopAnimation,
      position: { x: 5, y: 0 },
      speed: 3,
      direction: 1,
      duration: 700
    },
    {
      animation: waveAnimation,
      position: { x: 5, y: 0 },
      speed: 1,
      direction: 1,
      duration: 2000
    }
  ];


  const clickAnimationSequence = [
    {
      animation: waveAnimation,
      position: { x: 5, y: 0 },
      speed: 1,
      direction: 1,
      duration: 2000, // full cycle 2000
    }]

  const [currentStep, setCurrentStep] = useState(introSequence[0]);


  const playNextAnimation = () => {
    if (currentIndex < introSequence.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      setAnimationState("idle");
    }
  };

  useEffect(() => {
    if (lottieRef.current) {
      const currentStep = introSequence[currentIndex];
      lottieRef.current.setSpeed(currentStep.speed);
      
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      
      timerRef.current = setTimeout(() => {
        playNextAnimation();
      }, currentStep.duration);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex]);

  useEffect(() => {
    setCurrentStep(introSequence[currentIndex]);
  }, [currentIndex]);


  return (
      
      <motion.div
        className={styles.topcopycontainer}
        initial={{
          x: movableOffset
        }}
        animate={{
          x: currentIndex >= 1 ? 0 : movableOffset
        }}
        transition={{ duration: 1.1, delay: 0.3, ease:"easeOut" }}
      >
        <motion.div>{text}</motion.div>
        <motion.div 
          style={{
            scaleX: animationState==='outro'? 1 : 1,
          }}
          animate={{
            opacity: animationState==='outro'? 0 : 1,
            x: animationState==='outro'? 35 : 0,
          }}
          transition={{duration: 0.3}}
          className={styles.topcopymascotcontainer}
        
        >
          <Mascot
              animationState={animationState}
              currentStep={currentStep}
              lottieRef={lottieRef}
              mascotWidth = {90}
              mascotHeight = {90}
              mascotStart={{x: -40, y: 12, scale: 0.7, opacity: 0}}
              playNextAnimation={playNextAnimation}
              idleAnimation={idleAnimation}
              clickAnimationSequence={clickAnimationSequence}
              setCurrentStep={setCurrentStep}
          />
        </motion.div>

      
      </motion.div>

  );
}

export default TopCopyMascot;