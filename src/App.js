// import ButtonGradient from "./assets/svg/ButtonGradient";
// import Benefits from "./components/Benefits";
// import Collaboration from "./components/Collaboration";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Pricing from "./components/Pricing";
// import Roadmap from "./components/Roadmap";
// import Services from "./components/Services";

// const App = () => {
//   return (
//     <>
//       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
//         <Header />
//         <Hero />
//         <Roadmap />
//         <Benefits />
//         {/* <Collaboration /> */}
//         <Services />
//         {/* <Pricing /> */}
//         <Footer />
//       </div>

//       <ButtonGradient />
//     </>
//   );
// };

// export default App;




















import { motion } from "framer-motion";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
// import PlaneGame from "./components/PlaneGame";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },  // Initial state
  visible: { opacity: 1, y: 0 },  // Animated state
};

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}  // Ensures the animation runs only once
          transition={{ duration: 0.5 }}
          variants={animationVariants}
        >
          <Hero />
        </motion.div>

        {/* Roadmap Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={animationVariants}
        >
          <Roadmap />
          {/* <PlaneGame /> */}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={animationVariants}
        >
          <Benefits />
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={animationVariants}
        >
          {/* <Services /> */}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          variants={animationVariants}
        >
          <Footer />
        </motion.div>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
