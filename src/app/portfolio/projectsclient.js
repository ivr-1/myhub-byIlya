'use client'
import Header from "../components/header"
import ProjectCard from "./components/projectcard";
import Background from "../components/background";
import useLayoutConfig from "../components/useLayoutConfig";
import SectionPlaceholder from "../components/mascot/sectionplaceholder";

import arcadeImage from "./assets/hero-arcade.png"
import dashboardImage from "./assets/hero-healthdash.png"
import petitImage from "./assets/hero-petit.png"
import portfolioImage from "./assets/hero-portfolio.png"
import legionImage from './assets/hero-legion.png'
import projectsImg from '../assets/portfolioImg.svg';


import { useAnimatedReturn } from "../components/useAnimatedReturn";
import { introSequence, clickAnimationSequence, interactionConfig, mascotStart } from "./projectsanimconfig";
import dynamic from "next/dynamic";


const sectionName ="Things I've Made"
const sectionAlt = "lightning in a bottle"
const returnPath = '/?section=mid'

const SectionLabelMascot = dynamic(() => import('../components/mascot/sectionlabelmascot'), {
    ssr: false,
    loading: () => 
        <SectionPlaceholder
            SectionLogo={projectsImg}
            SectionAlt={sectionAlt}
            returnPath={returnPath}
            text={sectionName}
        />
});



export default function ProjectsClient () {

    const {layoutData, mainContainerStyle} = useLayoutConfig();
    const color = layoutData.mid.background.backgroundImage
    useAnimatedReturn(returnPath)

    return (
        <>              
            <Header bgColor={color}/>
            <Background bgColor={color}/>

            <main style={mainContainerStyle}>

                <SectionLabelMascot
                    SectionLogo={projectsImg}
                    SectionAlt={sectionAlt}
                    returnPath={returnPath}
                    text={sectionName}
                    introSequence={introSequence}
                    clickAnimationSequence={clickAnimationSequence}
                    interactionConfig={interactionConfig}
                    mascotStart={mascotStart}
                />      

                <ProjectCard 
                    spotlight
                    heroImage={arcadeImage}
                    alt="3D Arcade Machines"
                    projectName="3D Retro Arcade / Classic Mobile Arcade"
                    techStack = {["react", "js", "three", "blender", "ps", "html", "css"]}
                    projectText = "Step into a nostalgic corner of the modern web with this interactive 3D arcade, offering fully playable versions of classic games. Designed and built from scratch using Three.js, JavaScript and Blender, the arcade transforms into a Game Boy-inspired experience on mobile."
                    viewWeb="https://arcade.byIlya.com"
                    viewCode="https://github.com/ivr-1/Arcade-byIlya"
                />

                <ProjectCard 
                    heroImage={legionImage}
                    alt="American Legion Logo"
                    projectName="American Legion - War Memorial Comission"
                    techStack = {["nextjs", "contentful", "tailwind", "motion", "html", "css", "js"]}
                    projectText = "A modern institutional website redesign for the American Legion War Memorial Commission. Built from scratch using Next.js and Contentful for headless CMS, the site features dynamic event scheduling, room reservation functionality and streamlined content updates. Optimized with server-side rendering and responsive design for seamless performance across all devices."
                    viewWeb="https://www.alwmcsf.org/"
                    viewCode="https://github.com/ivr-1/legion-byIlya"
                />

                <ProjectCard 
                    heroImage={dashboardImage}
                    alt="Medical Dashboard"
                    projectName="Healthcare Patient Dashboard"
                    techStack = {["nextjs", "chartjs",  "tailwind",  "vercel", "type", "html", "css"]}
                    projectText = "A clean, responsive medical dashboard for patient data management, implemented as a pixel-perfect match of the provided design system. Features vital monitoring via graph visualization and dynamic patient profiles that scale based on API data. Built in TypeScript and Tailwind CSS, with dashboard components automatically building and updating based on incoming patient information."
                    viewWeb="https://dashboard.byilya.com"
                    viewCode="https://github.com/ivr-1/medicaldash-byilya"
                />

                <ProjectCard 
                    heroImage={petitImage}
                    alt="Food Delivery UI"
                    projectName="Le Petit Croissant Delivery"
                    techStack = {["nextjs", "vercel", "ps", "html", "css", "js"]}
                    projectText = "A full-stack food delivery website with scalable ordering and reservation systems, inspired by industry-leading apps and services. Designed and built from scratch using Next.js with server-side rendering for API integration and enhanced SEO. Features serverless back-end for order processing and responsive design, delivering a smooth experience across variety of devices."
                    viewWeb="https:///petit.byilya.com"
                    viewCode="https://github.com/ivr-1/Petit-byIlya"
                />
                
                <ProjectCard 
                    spotlight
                    heroImage={portfolioImage}
                    alt="Animated mascot in a hat holding a cog, a lightning in a bottle and a picture frame"
                    projectName="Animated Portfolio Website"
                    techStack = {["nextjs", "motion", "lottie", "aftereffects", "html", "css", "js"]}
                    projectText = "This website. A playful take on the traditional portfolio featuring an animated mascot, neumorphic design and fluid micro-interactions.  Built from scratch using Next.js, Motion, Lottie and After Effects. Features dynamic SSR for SEO and responsive design, optimized for seamless performance across mobile, tablet and desktop devices."
                    viewCode="https://github.com/ivr-1/myhub-byIlya"
                />

            </main>
        </>
    )
}

