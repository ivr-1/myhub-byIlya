'use client'
import styles from "./about.module.css"

import Header from "../components/header"
import Background from "../components/background";
import useLayoutConfig from "../components/useLayoutConfig";
import SectionPlaceholder from "../components/mascot/sectionplaceholder";

import aboutImg from '../assets/aboutImg.svg';

import { introSequence, clickAnimationSequence, interactionConfig, mascotStart } from "./aboutanimconfig";
import handleEmailClick from "../components/elements/handleemailclick";
import { motion } from "framer-motion";
import { useAnimatedReturn } from "../components/useAnimatedReturn";
import dynamic from "next/dynamic";


const sectionName ="About Me"
const sectionAlt = "picture frame"
const returnPath = '/?section=left'


const SectionLabelMascot = dynamic(() => import('../components/mascot/sectionlabelmascot'), { 
    ssr: false,
    loading: () => 
        <SectionPlaceholder
            SectionLogo={aboutImg}
            SectionAlt={sectionAlt}
            returnPath={returnPath}
            text={sectionName}
        />
});


export default function AboutClient () {

    const {layoutData, mainContainerStyle} = useLayoutConfig();
    const color = layoutData.left.background.backgroundImage
    useAnimatedReturn(returnPath)
    

    return (
        <>
            <Header bgColor={color}/>
            <Background bgColor={color}/>

            <main style={mainContainerStyle}>          
                    <SectionLabelMascot
                        SectionLogo={aboutImg}
                        SectionAlt={sectionAlt}
                        returnPath={returnPath}
                        text={sectionName}
                        introSequence={introSequence}
                        clickAnimationSequence={clickAnimationSequence}
                        interactionConfig={interactionConfig}
                        mascotStart={mascotStart}
                    /> 

                <motion.div 
                    className={styles.textcontainer}
                    initial={{opacity: 0.3, y: 5, scale: 0.99}}
                    animate={{opacity: 1, y: 0, scale: 1}}
                    transition={{duration: 0.3, delay: 0}}
                >
                    <p>I&apos;m a frontend developer combining technical skills with UX design thinking. </p>
                    <p>While working in the entertainment industry, I fell into web development  as a side project that quickly turned into an obsession. I build from California.</p>
                    <section className={styles.features}>
                        <h2>My Core Features</h2>
                        <ul>
                            <li><h3>Design that works: </h3> I believe great design isn&apos;t just about looking good - it&apos;s about making users feel good. Every animation, micro-interaction, layout choice should make the experience more impactful, not just prettier. </li>
                            <li><h3>Storytelling and code:</h3> Coming from visual media, I know how to guide attention and create impact. Now I&apos;m bringing these skills to front-end to build experiences that tell a story.</li>
                            <li><h3>Let&apos;s talk clearly: </h3> Seen good ideas get lost in translation? Me too. Having led creative teams, I believe in proactive updates and asking the right questions early. When something isn&apos;t clear, I speak up - good communication is as crucial as good code.</li>
                            <li><h3>Building for growth: </h3> I approach every project with a focus on writing clean, maintainable code. Though early in my  journey, I prioritize performance and scalability knowing their crucial role in creating lasting value. </li>
                            <li><h3>Off screen: </h3> I greatly enjoy storytelling in any form, <a href='https://gallery.byilya.com' target="_blank" rel="noopener noreferrer"> photography</a> and great tea.</li>
                        </ul>  
                    </section>
                    <p> If you would like to collaborate, have a project in mind, or need a tea recommendation...</p>
                    <button onClick={handleEmailClick}>Say Hello</button>
                </motion.div>
                
            </main>
        </>
    )
}