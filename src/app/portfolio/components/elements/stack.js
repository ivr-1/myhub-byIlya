'use client'

import Image from "next/image"
import styles from "../../projects.module.css"

import aftereffectsImg from "../../assets/stacklogos/aftereffects.svg"
import blenderImg from "../../assets/stacklogos/blender.svg"
import cssImg from "../../assets/stacklogos/css.svg"
import framerImg from "../../assets/stacklogos/motion.svg"
import htmlImg from "../../assets/stacklogos/html.svg"
import jsImg from "../../assets/stacklogos/javascript.svg"
import lottieImg from "../../assets/stacklogos/lottie.svg"
import nextjsImg from "../../assets/stacklogos/nextjs.svg"
import psImg from "../../assets/stacklogos/photoshop.svg"
import reactImg from "../../assets/stacklogos/react.svg"
import threejsImg from "../../assets/stacklogos/threejs.svg"
import vercelImg from "../../assets/stacklogos/vercel.svg"


import { useState, useEffect } from "react"

const itemConfig = {
  aftereffects: {
    image: aftereffectsImg,
    alt: "Adobe After Effects - Motion graphics software",
    text: "After Effects"
  },
  blender: {
    image: blenderImg,
    alt: "Blender - 3D modeling software",
    text: "Blender"
  },
  css: {
    image: cssImg,
    alt: "CSS3 - Cascading Style Sheets",
    text: "CSS"
  },
  motion: {
    image: framerImg,
    alt: "Motion - React animation library",
    text: "Motion"
  },    
  html: {
    image: htmlImg,
    alt: "HTML5 - Hypertext Markup Language",
    text: "HTML5"
  },
  js: {
    image: jsImg,
    alt: "JavaScript programming language",
    text: "JavaScript"
  },
  lottie: {
    image: lottieImg,
    alt: "Lottie - Lightweight animation library",
    text: "Lottie"
  },
  nextjs: {
    image: nextjsImg,
    alt: "Next.js - React framework",
    text: "Next.js"
  },
  ps: {
    image: psImg,
    alt: "Adobe Photoshop - Image editing software",
    text: "Photoshop"
  },
  react: {
    image: reactImg,
    alt: "React - JavaScript library for user interfaces",
    text: "React"
  },
  three: {
    image: threejsImg,
    alt: "Three.js - 3D graphics library",
    text: "Three.js"
  },
  vercel: {
    image: vercelImg,
    alt: "Vercel - Deployment and hosting platform",
    text: "Vercel"
  }
}

function StackItem({ item }) {
  const [stackItemData, setStackItemData] = useState({
    image: null,
    alt: "",
    text: ""
  })

  useEffect(() => {
    const itemData = itemConfig[item]
    if (itemData) {
      setStackItemData(itemData)
    }
  }, [item])

  if (!stackItemData.image) {
    return null // Don't render anything if no valid item data
  }

  return (
    <div className={styles.stackitem}>
      <Image
        src={stackItemData.image}
        alt={stackItemData.alt}
        width={20}
        height={20}
        className={styles.stacklogo}
      />
      <span className={styles.stacktext}>{stackItemData.text}</span>
    </div>
  )
}

function Stack({techStack}) {
  
  return (
    <div className={styles.stack}>
      {techStack.map(tech => (
        <StackItem key={tech} item={tech} />
      ))}
    </div>
  )
}

export default Stack