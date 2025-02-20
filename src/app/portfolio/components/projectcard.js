'use client'
import styles from "../projects.module.css"

import logoGithub from "../assets/logo-github.svg"
import logoOpen from "../assets/logo-open.svg"

import Image from 'next/image' 
import Stack from "./elements/stack"
import { motion } from "motion/react";

function Viewbutton ({logo, alt, text, linkto}) {
    return (
    <button 
        className={styles.viewbutton}
        onClick={()=>{window.open(linkto, '_blank', 'noopener,noreferrer')}}
    >
        <Image
            src={logo}
            alt={alt}
            width={25}
        /> 
        {text}
    </button>
)}

const containerVariants = {
  flat: {
    scale: 1,
    opacity: 0,
    boxShadow: "0px 0px 0px rgba(60, 67, 131, 0), 0px 0px 0px rgba(157, 182, 224, 0)",
    transition: {
      duration: 0
    }
  },
  extruded: {
    scale: 1,
    opacity: 1,
    boxShadow: [
      "0px 0px 0px rgba(72, 60, 131, 0), 0px 0px 0px rgba(158, 157, 224, 0)",
      "2px 2px 10px rgba(71, 60, 131, 0.2), -1px -1px 4px rgba(157, 166, 224, 0.3)",
      "4px 4px 20px rgba(74, 60, 131, 0.3), -1.5px -1.5px 7px rgba(168, 157, 224, 0.6)",
      "6px 7px 35px rgba(73, 60, 131, 0.514), -2px -2px 8px rgb(167, 157, 224, 0.7)"
    ],
    transition: {
      duration: 1,
      ease: "easeOut",
      boxShadow: {
        times: [0, 0.3, 0.6, 1],
        duration: 1,
        ease: "easeOut"
      }
    }
  }
};

const childVariants = {
  flat: {
    opacity: 0,
  },
  extruded: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.3,
      ease: "easeOut"
    }
  }
}


export default function ProjectCard({heroImage, alt, projectName, techStack, projectText, viewWeb, viewCode, spotlight}) {
  return (
    <motion.article
      className={styles.projectcard}
      variants={containerVariants}
      initial={"flat"}
      animate={"extruded"}
    >

      <motion.section variants={childVariants} className={styles.projectimage} onClick={() => viewWeb && window.open(viewWeb, '_blank', 'noopener,noreferrer')}      >
        <div className={spotlight? styles.spotlightWrapper : styles.imageWrapper}>
          <Image
            src={heroImage}
            alt={alt}
            fill
            className={styles.backgroundImage}
          />

        </div>
      </motion.section>

      <motion.section variants={childVariants} className={styles.projectinfo}>
        <h1>{projectName}</h1>
        <div className={styles.stack}>
          <Stack techStack = {techStack}/>
        </div>
        <p>{projectText}</p>
      </motion.section >

      <motion.section variants={childVariants}>

        {viewWeb && (
          <Viewbutton
            logo={logoOpen}
            alt="open window logo"
            text="Live View"
            linkto={viewWeb}
          />
        )}

        {viewCode && (
          <Viewbutton 
              logo={logoGithub}
              alt="github logo"
              text="Code View"
              linkto={viewCode}
          />
        )}

      </motion.section>
    </motion.article>
  )
}
