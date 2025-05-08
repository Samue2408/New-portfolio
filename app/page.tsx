import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client"
import FloatingButton from "./components/FloatingButton/floatingbutton";
import HeroSection from "./components/HeroSection/herosection";
import Navbar from "./components/Navbar/navbar";
import ToolBox from "./components/ToolBox/toolBox";
import Missions from "./components/Missisons/missions";

export default function Home() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >           
          <HeroSection></HeroSection>           
        </motion.div>        
      </AnimatePresence>
      
      <Missions></Missions>

      <ToolBox/>


      <FloatingButton/>
      <div className="scrol">
      </div>
    </div>

  );
}
