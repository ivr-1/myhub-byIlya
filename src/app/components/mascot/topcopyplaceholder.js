'use client'
import styles from "./mascot.module.css"



function TopCopyPlaceholder ({text}) {

  return (
      <div
        className={styles.topcopycontainer} style={{transform: 'translateX(55px)'}}>
        <div>{text}</div>
        <div></div>
      </div>
  );
}

export default TopCopyPlaceholder;