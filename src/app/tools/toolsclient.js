'use client'
import styles from "./tools.module.css";

import Header from "../components/header";
import Card from './components/card'
import Background from "../components/background";
import useLayoutConfig from "../components/useLayoutConfig";
import SectionPlaceholder from "../components/mascot/sectionplaceholder";

import codeLogo from "./assets/codeLogo.png"
import createLogo from "./assets/createLogo.png"
import tinkerLogo from "./assets/tinkerLogo.png"
import skillsImg from "../assets/skillsImg.svg"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { introSequence, clickAnimationSequence, interactionConfig, mascotStart } from "./toolsanimconfig";
import { useAnimatedReturn } from "../components/useAnimatedReturn";
import dynamic from "next/dynamic";


const sectionName ="My Favorite Tools"
const sectionAlt = "cog"
const returnPath = '/?section=right'


const SectionLabelMascot = dynamic(() => import('../components/mascot/sectionlabelmascot'), {
    ssr: false,
    loading: () => 
        <SectionPlaceholder
            SectionLogo={skillsImg}
            SectionAlt={sectionAlt}
            returnPath={returnPath}
            text={sectionName}
        />
    });


export default function ToolsClient() {
    const {layoutData, mainContainerStyle} = useLayoutConfig();
    const color = layoutData.right.background.backgroundImage
    const [isLarge, setIsLarge] = useState(false);
    useAnimatedReturn(returnPath)

    useEffect(() => {
        const checkWidth = () => {
            setIsLarge(window.innerWidth > 1200);
        };
        checkWidth();
        window.addEventListener('resize', checkWidth);
        return () => window.removeEventListener('resize', checkWidth);
    }, []);

    return (
        <>
           <Header bgColor={color}/>
           <Background bgColor={color}/>

           <main style={mainContainerStyle}>
                <SectionLabelMascot
                    SectionLogo={skillsImg}
                    SectionAlt={sectionAlt}
                    returnPath={returnPath}
                    text={sectionName}
                    introSequence={introSequence}
                    clickAnimationSequence={clickAnimationSequence}
                    interactionConfig={interactionConfig}
                    mascotStart={mascotStart}
                />      
                <motion.div   
                    initial={{
                        opacity:  0,
                        scale: 2,
                        y:  200,
                        x:  500,
                        gap: '500px'
                    }}
                    animate={{ 
                        opacity: 1,
                        scale: 1,
                        y:  0,
                        x: 0,
                        gap: '25px'
                    }}
                    transition={{duration: 0.5, ease: "circOut"}}
                    className={styles.cardcontainer}
                >
                        <Card
                            title="to design and create..." 
                            logo={createLogo}
                            cardAlt="pencil"
                            content={["Figma", "Adobe Photoshop & Illustrator", "Adobe After Effects", "Final Cut Pro X", "Topaz Gigapixel"]}
                        />
                        <Card
                            title="to play and tinker..." 
                            logo={tinkerLogo}
                            cardAlt="lightning"
                            content={["Large Language & Diffusion Models", "XR", "Leica D7", "Ipad Pro", "Razer Deathadder Elite"]}
                        />
                        <Card
                            title="to build and deploy..."
                            logo={codeLogo}
                            cardAlt="code brackets"
                            content={["HTML ◦ CSS ◦ JavaScript","React ◦ Next.js", "VS Code", "Motion ◦ Lottie ◦ Chakra UI",  "Three.js ◦ React Three Fiber", "Node.js ◦ Vercel ◦ Git ◦ Docker"]}
                            large={isLarge}
                        />
                </motion.div>
            </main>
        </>
    );
}
