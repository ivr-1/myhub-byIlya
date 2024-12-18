'use client'

import styles from "./mascot.module.css"
import Image from "next/image";
import Arrow from "../../assets/arrow.svg"


function SectionPlaceholder ({ SectionLogo, SectionAlt, text }) {
  return (
      <nav className={styles.nav}>
        <div className={styles.sectioncontainer}>
          <div>
            <Image
              src={Arrow}
              alt="Back arrow"
              className={styles.back}
            />
          </div>

          <div 
            className={styles.verticaldivider}>
          </div>

          <div className={styles.sectionmascotcontainer}>
            <div style={{width: '90px', height: '90px'}}></div>
          </div>
        </div>

        <div>
           <Image
              priority
              src={SectionLogo}
              alt={SectionAlt}
              className={styles.logo}
              style={{ display: 'block' }}
          />
        </div>

         <h1 className={styles.sectiontext} >{text}</h1>

      </nav>

  );
}

export default SectionPlaceholder;