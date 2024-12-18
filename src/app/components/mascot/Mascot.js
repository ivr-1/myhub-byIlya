'use client'
import walkAnimation from "../mascot/animations/walk-loop.json";

import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";

function Mascot({
  animationState,
  currentStep,
  setCurrentStep,
  lottieRef,
  mascotHeight,
  mascotWidth,
  playNextAnimation,
  idleAnimation,
  clickAnimationSequence,
  mascotStart
}) {
  const [clickAnimationActive, setClickAnimationActive] = useState(false);
  const [clickSequenceIndex, setClickSequenceIndex] = useState(0);
  const clickTimerRef = useRef();

  const playNextClickAnimation = () => {
    if (clickSequenceIndex < clickAnimationSequence.length - 1) {
      setClickSequenceIndex(prevIndex => prevIndex + 1);
      setCurrentStep(clickAnimationSequence[clickSequenceIndex + 1]);
    } else {
      setClickAnimationActive(false);
      setClickSequenceIndex(0);
      setCurrentStep({ ...currentStep, interaction: false });
    }
  };

  useEffect(() => {
    if (clickAnimationActive && lottieRef.current) {
      const currentClickStep = clickAnimationSequence[clickSequenceIndex];
      lottieRef.current.setSpeed(currentClickStep.speed);
      
      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
      }
      
      clickTimerRef.current = setTimeout(() => {
        playNextClickAnimation();
      }, currentClickStep.duration);
    }

    return () => {
      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
      }
    };
  }, [clickSequenceIndex, clickAnimationActive]);

  const renderIntroAnimation = () => (
    <motion.div
      initial={mascotStart}
      animate={{
        x: currentStep.position.x,
        y: currentStep.position.y,
        scale: 1,
        opacity: currentStep.opacity ?? 1
      }}
      transition={{ duration: currentStep.duration/1000 }}
      style={{ scaleX: currentStep.direction }}
    >
      <Lottie
        style={{ 
          height: mascotHeight, 
          width: mascotWidth, 
          filter: 'drop-shadow(0 1px 3px rgba(255, 255, 255, 0.7))'
        }}
        lottieRef={lottieRef}
        animationData={currentStep.animation}
        loop={true}
        onComplete={playNextAnimation}
      />
    </motion.div>
  );

  const renderIdleAnimation = () => {
    const currentClickStep = clickAnimationActive ? clickAnimationSequence[clickSequenceIndex] : null;
    
    return (
      <motion.div 
        initial={{ x: currentStep?.position?.x ?? 0 }} 
        animate={clickAnimationActive ? {
          x: currentClickStep.position.x,
          y: currentClickStep.position.y,
          scale: 1,
        } : {}}
        style={{ 
          cursor: "pointer",
          scaleX: clickAnimationActive ? currentClickStep.direction : 1
        }}
        transition={{ duration: currentStep.duration/1000 }}
      >
        <Lottie
          style={{ 
            height: mascotHeight, 
            width: mascotWidth, 
            filter: 'drop-shadow(0 1px 3px rgba(255, 255, 255, 0.7))'
          }}
          lottieRef={lottieRef}
          animationData={clickAnimationActive ? currentClickStep.animation : idleAnimation}
          loop={!clickAnimationActive}
          onComplete={() => {
            if (clickAnimationActive) {
              playNextClickAnimation();
            }
          }}
          onClick={() => {
            if (!clickAnimationActive) {
              setClickAnimationActive(true);
              setClickSequenceIndex(0);
              setCurrentStep(clickAnimationSequence[0]);
            }
          }}
        />
      </motion.div>
    );
  };

  const renderOutroAnimation = () => (
    <motion.div style={{ scaleX: 1 }}>
         <Lottie
            style={{ height: mascotHeight, width: mascotWidth, filter: 'drop-shadow(0 1px 3px rgba(255, 255, 255, 0.7))'}}
            lottieRef={lottieRef}
            animationData={walkAnimation}
            loop={true}
          />
    </motion.div>

  );


  switch (animationState) {
    case "intro":
      return <div>{renderIntroAnimation()}</div>;
    case "idle":
      return <div>{renderIdleAnimation()}</div>;
    case "outro":
      return <div>{renderOutroAnimation()}</div>;
    default:
      return null;
  }
}

export default Mascot;
