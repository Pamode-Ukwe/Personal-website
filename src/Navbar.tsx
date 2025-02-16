import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { motion } from 'framer-motion'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const style = "hover:cursor-pointer text-lg mt-4 md:mt-0"
  const stay = "hover:cursor-pointer text-lg text-pink-300 shadow-md mt-4 md:mt-0 px-1"
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.5, // Adjust the threshold for when a section is considered "active"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div className="flex justify-between px-36 py-8 sticky top-0 z-50 bg-cyan-600 text-white font-ibm" initial='hidden' 
                          whileInView='visible' viewport={{once: true, amount: 0.1}} transition={{duration: 0.2, ease:'easeOut', delay: 0.1}} 
    variants={{hidden: {opacity: 0}, visible: {opacity: 1}}}>
      <div>
        <p className="font-bold text-xl text-cyan-950 font-lexend">PamoDev</p>
      </div>

      <nav>
        <ul className="hidden md:flex gap-12">
          <a href="#home"><li className={activeSection === 'home' ? stay : style}>Home</li></a>
          <a href="#about"><li className={activeSection === 'about' ? stay : style}>About</li></a>
          <a href="#portfolio"><li className={activeSection === 'portfolio' ? stay : style}>Projects</li></a>
          <a href="#contact"><li className={activeSection === 'contact' ? stay : style}>Contact Me</li></a>
        </ul>

        <div
          onClick={() => setMenu((m) => !m)}
          className="flex absolute md:hidden cursor-pointer"
        >
          <BiMenu className="text-3xl hover:text-pink-300" />
        </div>

        <div
          className={`absolute top-16 right-0 bg-cyan-600 text-white shadow-lg rounded-md max-w-xs w-full transition-transform duration-300 ease-in-out ${
            menu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="grid gap-4 p-4 md:hidden">
            <a href="#home" onClick={() => setMenu(false)}><li className={activeSection === 'home' ? stay : style}>Home</li></a>
            <a href="#about" onClick={() => setMenu(false)}><li className={activeSection === 'about' ? stay : style}>About</li></a>
            <a href="#portfolio" onClick={() => setMenu(false)}><li className={activeSection === 'portfolio' ? stay : style}>Projects</li></a>
            <a href="#contact" onClick={() => setMenu(false)}><li className={activeSection === 'contact' ? stay : style}>Contact Me</li></a>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
