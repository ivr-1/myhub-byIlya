import walktoStopAnimation from "../components/mascot/animations/walk-to-stop.json";
import cogInteractAnimation from "../components/mascot/animations/interact-cog.json" 


// MASCOT ANIMATION CONFIG
export const mascotStart = {x: -20, y: 0, scale: 1, opacity: 0}

export const introSequence = [
    {
        animation: walktoStopAnimation,
        position: { x: 15, y: 0 },
        speed: 1.5,
        direction: 1,
        duration: 300, 
        interaction: false,
    },
    {
        animation: cogInteractAnimation,
        position: { x: 15, y: 0 },
        speed: 1.2,
        direction: 1,
        duration: 2350, 
        interaction: true,
    },
  {
        animation: walktoStopAnimation,
        position: { x: 0, y: 0 },
        speed: 1.5,
        direction: -1,
        duration: 500, 
        interaction: false,
  }
  ]

export const interactionConfig = {
active: {
    initial: { rotate: 0 },
    animate: { rotate: 370 },
    transition: {
    duration: 2.35,
    delay: 0.55,
    ease: 'circOut'
    }
},
inactive: {
    initial: {},
    animate: {},
    transition: {
    duration: 0,
    }
}
};

export const clickAnimationSequence = introSequence

