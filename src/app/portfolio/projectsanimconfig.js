import walktoStopAnimation from "../components/mascot/animations/walk-to-stop.json";
import walkAnimation from "../components/mascot/animations/walk-loop.json";
import bottleInteractAnimation from "../components/mascot/animations/interact-bottle.json" 
import bottleInteract2Animation from "../components/mascot/animations/interact-bottle2.json" 

// MASCOT ANIMATION CONFIG
export const mascotStart = {x: -20, y: 0, scale: 1, opacity: 0}

export const introSequence = [
    {
        animation: walkAnimation,
        position: { x: 25 ,y: 0 },
        speed: 1.5,
        direction: 1,
        duration: 300, 
        interaction: false,
    },
    {
        animation: bottleInteractAnimation,
        position: { x: 25, y: 0 },
        speed: 1,
        direction: 1,
        duration: 1000, 
        interaction: true,
    },    
    {
      animation: bottleInteract2Animation,
      position: { x: 28, y: 0 },
      speed: 1,
      direction: 1,
      duration: 2500, 
      interaction: true,
  },    
    {
        animation: walktoStopAnimation,
        position: { x: 0, y: 0 },
        speed: 1,
        direction: -1,
        duration: 500, 
        interaction: false,
  },
  ]

export const interactionConfig = {
    active: {
        initial: { rotate: 0, scale: 1 },
        animate: { rotate: -40, scale: 0.8},
        transition: {
        duration: 0.5,
        delay: 0.65,
        ease: 'circOut'
        }
    },
    inactive: {
        initial: {scale: 1},
        animate: {},
        transition: {
        delay: 0.1,
        duration: 0.5,
        }
    }
        
};

export const clickAnimationSequence = introSequence

