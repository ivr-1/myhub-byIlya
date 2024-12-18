'use client';

import styles from "./home.module.css";

import projectsImg from '../assets/portfolioImg.svg';
import toolsImg from '../assets/skillsImg.svg';
import aboutImg from '../assets/aboutImg.svg';

import Header from "../components/header";
import TopCopy from "./components/topcopy";
import NavOption from "./components/navoption";
import useLayoutConfig from "../components/useLayoutConfig";
import Background from "../components/background";
import TopCopyPlaceholder from "../components/mascot/topcopyplaceholder";

import { motion } from "motion/react";
import { useState, useEffect} from "react";
import { useSearchParams, useRouter} from "next/navigation";


import dynamic from "next/dynamic";
const TopCopyMascot = dynamic(() => import('../components/mascot/topcopymascot'), { 
  ssr: false,
  loading: () =>  <TopCopyPlaceholder text="Hi, I'm Ilya!"/>
});


export default function HomeClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { rightY, rightX, midY, midX, leftY, leftX, topY, topX, dynamicBG, setDynamicBG, homeBG, getPosition, animduration, animationState, setAnimationState, mainContainerStyle, firstLaunch, setFirstLaunch} = useLayoutConfig();
  const [selected, setSelected] = useState(searchParams.get('section') || "home"); // sections: "right", "mid", "left", "home"

  useEffect(() => {
    if (searchParams.get('section')) {
      getPosition(searchParams.get('section'));
      setDynamicBG({
        backgroundImage: homeBG
      });
      setFirstLaunch(false)
      router.replace(window.location.pathname);
      setTimeout(() => {
        setSelected("home");
      }, 50);
    }
  }, []);

    
  return (
    <>
      <Header bgColor={dynamicBG.backgroundImage}/>
      <Background bgColor={dynamicBG.backgroundImage}/>
      <motion.main className={styles.main} style={mainContainerStyle}> 

        <TopCopy selected={selected} topX={topX} topY={topY} firstLaunch={firstLaunch} animduration={animduration}>
          <TopCopyMascot 
            text="Hi, I'm Ilya!" firstLaunch={firstLaunch} animationState={animationState} setAnimationState={setAnimationState}/>
            <p>UX designer, Front-end developer, & tea enthusiast</p>
        </TopCopy>
        
          <motion.nav 
            animate={{gap: (selected !== 'home') ? "0px" : 'clamp(10px, 5vw, 300px)' }}
            transition={{ duration: animduration }}
            initial={false}
            layout
            key="fullnav"
          >
              <NavOption
                id='left'
                path='/bio'
                text="About Me"
                image={aboutImg}
                alt="photo frame"
                x = {leftX}
                y = {leftY}
                animduration={animduration}
                selected = {selected}
                setSelected = {setSelected}
                getPosition = {getPosition}
                setAnimationState={setAnimationState}
              />

              <NavOption
                id='mid'
                path='/portfolio'
                text="Things I've Made"
                image={projectsImg}
                alt="lightning in a bottle"
                x = {midX}
                y = {midY}
                animduration={animduration}
                selected={selected}
                setSelected = {setSelected}
                getPosition = {getPosition}
                setAnimationState={setAnimationState}
              />

              <NavOption
                id='right'
                path='/tools'
                text="My Favorite Tools"
                image={toolsImg}
                alt="cog"
                x = {rightX}
                y = {rightY}
                animduration={animduration}
                selected={selected}
                setSelected = {setSelected}
                getPosition = {getPosition}
                setAnimationState={setAnimationState}
              />
          </motion.nav>
      </motion.main> 


    </>
  );
}