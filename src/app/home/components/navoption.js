'use client'
import Image from 'next/image'
import styles from "../home.module.css";
import { useRouter, } from 'next/navigation'
import { motion, AnimatePresence } from "motion/react";

function NavOption({
  path,
  text,
  image,
  alt,
  x,
  y,
  animduration,
  selected,
  setSelected,
  id,
  getPosition,
  setAnimationState
}) {
  const router = useRouter();
  const MotionImage = motion(Image);

  async function handleClick() {
    router.prefetch(path);

    setAnimationState('outro')
    await new Promise(resolve => setTimeout(resolve, 50));
    await getPosition(id);
    await new Promise(resolve => setTimeout(resolve, 10));
    setSelected(id);
    await new Promise(resolve => setTimeout(resolve, 350));
    router.push(path);
  }

  const shouldAnimate = selected !== 'home';

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {(selected === id || selected === 'home') && (
        <motion.div
          layout="position"
          key={id}
          onClick={handleClick}
          className={`
            ${selected === id ? styles.navoptionfocused : styles.navoption}
            ${id === 'mid' && selected === 'home' && styles.midnavoption}
          `}
          initial={shouldAnimate ? {
            opacity: 0,
            scale: 2,
            y: y,
            x: x
          } : false}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0
          }}
          exit={{
            opacity: 0,
            scale: 2,
            y: y,
            x: x,
            transition: {
              duration: animduration,
            }
          }}
          transition={{
            duration: animduration,
          }}
        >
          <MotionImage
            priority
            className={selected === id ? styles.naviconfocused : styles.navicon}
            src={image}
            alt={alt}
          />
          
          <motion.a layout> {text} </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NavOption;