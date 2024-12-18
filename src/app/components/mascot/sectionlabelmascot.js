'use client'

import styles from "./mascot.module.css"

import idleAnimation from "../mascot/animations/idle-breathing.json";

import { motion } from "motion/react";

import { useState, useRef, useEffect } from "react";
import Mascot from "./Mascot"

import Image from "next/image";
import Arrow from "../../assets/arrow.svg"
import { useRouter } from 'next/navigation'


function SectionLabelMascot ({
  SectionLogo, 
  SectionAlt, 
  returnPath, 
  text,
  introSequence,
  clickAnimationSequence,
  interactionConfig,
  mascotStart
  }) 

{

  const router = useRouter()
  const lottieRef = useRef();
  const timerRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState("intro");
  const [currentStep, setCurrentStep] = useState(introSequence[0]);

  const movableOffset = 10


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


  async function  handleClick(){
    setAnimationState('outro')
    await new Promise(resolve => setTimeout(resolve, 0)); // delay
    router.push(returnPath); 
  }



  return (
      <nav className={styles.nav}>
        <motion.div
          className={styles.sectioncontainer}
          initial={{
            x:  animationState==="outro"? 0 : movableOffset,
            opacity: animationState==="outro"? 1 : 0
          }}
          animate={{
            x:  animationState==="outro"?  movableOffset+10 : 0,
            opacity: animationState==="outro"? 0 : 1
          }}
          transition={{ duration: 0.3, delay: 0 }}
        >
          <motion.div
            initial={{
              x:  animationState==="outro"? 0 : movableOffset+10,
              opacity: animationState==="outro"? 1 : 0
            }}
            animate={{
              x:  animationState==="outro"?  movableOffset+10 : 0,
              opacity: animationState==="outro"? 0 : 1
            }}
            transition={{ duration: 0.3, delay: 0 }}
          >
            <Image
              src={Arrow}
              alt="Back arrow"
              onClick={handleClick}
              className={styles.back}
            />
          </motion.div>

          <motion.div 
            className={styles.verticaldivider}>
          </motion.div>

          <div className={styles.sectionmascotcontainer}>
            <Mascot
              animationState={animationState}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep} 
              lottieRef={lottieRef}
              mascotWidth={90}
              mascotHeight={90}
              mascotStart={mascotStart}
              playNextAnimation={playNextAnimation}
              idleAnimation={idleAnimation}
              clickAnimationSequence={clickAnimationSequence}
            />
          </div>

        </motion.div>

 
        <motion.div
          initial={currentStep.interaction ? interactionConfig.active.initial : interactionConfig.inactive.initial}
          animate={currentStep.interaction ? interactionConfig.active.animate : interactionConfig.inactive.animate}
          transition={currentStep.interaction ? interactionConfig.active.transition : interactionConfig.inactive.transition}
        >
           <Image
              priority
              src={SectionLogo}
              alt={SectionAlt}
              className={styles.logo}
              style={{ display: 'block' }}
          />
        </motion.div>

         <h1 className={styles.sectiontext}>{text}</h1>
      </nav>

  );
}

export default SectionLabelMascot;