import walktoStopAnimation from "../components/mascot/animations/walk-to-stop.json";
import frameInteractAnimation from "../components/mascot/animations/interact-frame.json"
import frameInteract2Animation from "../components/mascot/animations/interact-frame2.json"


// MASCOT ANIMATION CONFIG
export const mascotStart = {x: 10, y: 0, scale: 1, opacity: 0}

export const introSequence = [
    {
      animation: walktoStopAnimation,
      position: { x: 57, y: 0 },
      speed: 1.5,
      direction: 1,
      duration: 500, 
      interaction: false,
    },
    {
      animation: frameInteractAnimation,
      position: { x: 57, y: 0 },
      speed: 1.5,
      direction: 1,
      duration: 600, 
      interaction: true
    },
    {
      animation: frameInteract2Animation,
      position: { x: 57, y: 0 },
      speed: 0.5,
      direction: 1,
      duration: 2500, 
      interaction: true,
    },
    {
      animation: walktoStopAnimation,
      position: { x: 0, y: 0 },
      speed: 1,
      direction: -1,
      duration: 600, 
      interaction: false,
    },
  ]

export const interactionConfig = {
    active: {
      initial: { y: 0, scale: 1 },
      animate: { y: -30, scale: 1.12 },
      transition: {
        duration: 0.95,
        delay: 0.05,
        ease: 'circOut'
      }
    },
    inactive: {
      initial: {},
      animate: {},
      transition: {
        duration: 0.3,
        delay: 0.1,
        ease: 'easeIn'
      }
    }
  };

export const clickAnimationSequence = introSequence


