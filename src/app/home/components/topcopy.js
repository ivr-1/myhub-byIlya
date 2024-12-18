'use client'
import { motion, AnimatePresence } from "motion/react";


export default function TopCopy({ selected, topX, topY, animduration, children, firstLaunch }) {
  return (
    <AnimatePresence mode="popLayout">
      {selected === 'home' && (
        <motion.div 
          initial={{
            opacity: 1,
            scale: firstLaunch? 1 : 2,
            y: topY,
            x: topX,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0,
          }}
          exit={{
            opacity: 0,
            scale: 2,
            y: topY,
            x: topX,
            transition: {
              duration: animduration,
            }
          }}
          transition={{
            duration:firstLaunch? 1 : animduration,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}