import * as motion from "motion/react-client"
import styles from './background3d.module.scss'

const Background3D = () => {
  
    
    return (
      <motion.div
      className={styles.background}
      initial={{ scale: 1, rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 50,
        ease: "linear",
      }}
    >
      <svg
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          d="M0,192L80,181.3C160,171,320,149,480,170.7C640,192,800,256,960,256C1120,256,1280,192,1360,160L1440,128V600H1360C1280,600,1120,600,960,600C800,600,640,600,480,600C320,600,160,600,80,600H0Z"
          fill="url(#waveGradient)"
        />
      </svg>
    </motion.div>

                
    )
}

export default Background3D;