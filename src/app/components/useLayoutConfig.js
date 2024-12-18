import { useState, useEffect } from 'react';

// USE THIS TO SET ANIMATION DIRECTIONS AND BACKGROUND COLORS

export default function useLayoutConfig() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  const layoutData = {
    left: {
      mobile: {
        top: { x: 0, y: -100 },
        mid: { x: 0, y: -50 },
        right: { x: 0, y: 135 },
      },
      desktop: {
        top: { x: 1000, y: -600 },
        mid: { x: 600, y: -400 },
        right: { x: 700, y: -270 },
      },
      background: {
        backgroundImage: 'linear-gradient(180deg, #4eb0b4 10%, #4798c9 50%, #7186b0 100%)'
      }
    },
    mid: {
      mobile: {
        top: { x: 0, y: -100 },
        left: { x: 0, y: -400 },
        right: { x: 0, y: -150 },
      },
      desktop: {
        top: { x: 0, y: -800 },
        left: { x: -500, y: -500 },
        right: { x: 300, y: -500 },
      },
      background: {
        backgroundImage: 'linear-gradient(180deg, #6a6ac8 0%, #8678c3 50%, #623b87 100%)'
      }
    },
    right: {
      mobile: {
        top: { x: 0, y: -300 },
        left: { x: 0, y: -500 },
        mid: { x: 0, y: -400 },
      },
      desktop: {
        top: { x: -1000, y: -600 },
        left: { x: -700, y: -270 },
        mid: { x: -700, y: -400 },
      },
      background: {
        backgroundImage: 'linear-gradient(180deg,  #d76ca9 12%, #eb808d 50%, #d16655 100%)'
      }
    }
  };
  
  const homeBG = {backgroundImage: 'linear-gradient(-45deg, #d99178, #e0577c, #39a6d5, #4ec5a1)'}

  const mainContainerStyle = {
    position: 'relative',
    display: 'flex',
    minHeight: '100vh',
    paddingTop: 'clamp(150px, 6vw, 200px)',
    paddingBottom: '100px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '25px'
  };

  const animduration = 0.4;

  const [firstLaunch, setFirstLaunch] = useState(true);
  const [animationState, setAnimationState] = useState("intro");
  const [rightY, setRightY] = useState(0);
  const [rightX, setRightX] = useState(0);
  const [midY, setMidY] = useState(0);
  const [midX, setMidX] = useState(0);
  const [leftY, setLeftY] = useState(0);
  const [leftX, setLeftX] = useState(0);
  const [topY, setTopY] = useState(0);
  const [topX, setTopX] = useState(0);
  const [dynamicBG, setDynamicBG] = useState(homeBG);

  function getPosition(selected) {
    if (!layoutData[selected]) return;
    
    const config = layoutData[selected];
    const mode = isMobile ? 'mobile' : 'desktop';
    
    if (config[mode].top) {
      setTopX(config[mode].top.x);
      setTopY(config[mode].top.y);
    }
    if (config[mode].left) {
      setLeftX(config[mode].left.x);
      setLeftY(config[mode].left.y);
    }
    if (config[mode].mid) {
      setMidX(config[mode].mid.x);
      setMidY(config[mode].mid.y);
    }
    if (config[mode].right) {
      setRightX(config[mode].right.x);
      setRightY(config[mode].right.y);
    }
    
    // Set background
    setDynamicBG(config.background);
  }

  return {
    layoutData,
    mainContainerStyle,
    rightY,
    rightX,
    midY,
    midX,
    leftY,
    leftX,
    topY,
    topX,
    dynamicBG,
    setDynamicBG,
    homeBG,
    getPosition,
    animduration,
    firstLaunch,
    setFirstLaunch,
    animationState,
    setAnimationState,
    isMobile,
  };
}