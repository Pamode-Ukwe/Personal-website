import holder from '../src/assets/Photo.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id='home' className='xl:px-64 px-44 py-12'>
        <div className='grid lg:grid-cols-2 mx-auto container'>            
            <motion.div className='col-span-1 my-auto font-ibm' initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.2}} transition={{duration: 0.3, ease:'easeOut'}} 
              variants={{hidden: {opacity: 0, x:-50}, visible: {opacity: 1, x:0}}} >
                <p className='text-6xl'>Hi, I'm Ukwe Pamode</p>
                <p className='text-4xl my-6 font-exo'>A Front-end Developer from Rivers State, Nigeria</p>
                <p className='text-xl mb-3 font-lexend'>I make websites, webapps and all kinds of interface for the web.</p>
                <p className='text-xl font-lexend'>Allow me to help give your brand the representation it deserves.</p>
                <div className='flex justify-between my-6'>
                    <a href="#portfolio"><button className='p-6 bg-stone-300 font-bold text-teal-600 rounded-md hover:bg-teal-600 hover:text-pink-300'>
                        My portfolio</button></a>
                    <a href="#contact"><motion.button className='p-6 text-white font-bold bg-teal-600 rounded-md hover:bg-teal-400 hover:text-teal-800'  whileHover={{scale: 1.1}}  variants={{hidden: {opacity: 0.5}, visible: {opacity: 1}}} transition={{delay: 0.2}}>
                        Get in touch</motion.button></a>
                </div>
            </motion.div>
            <motion.div className='hidden col-span-1 lg:ml-6 lg:mx-0 lg:flex items-center' initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.2}} transition={{duration: 0.5, ease:'easeOut'}} 
              variants={{hidden: {opacity: 0, x:20}, visible: {opacity: 1, x:0}}}>
                <img src={holder} alt="DP" className='rounded-full absolute z-10 hover:cursor-pointer hover:shadow-lg md:hover:shadow-pink-200'/>
                <div className='hidden xl:flex w-[98%] h-[80%] rounded-full bg-cyan-300/25 relative z-0 hover:bg-cyan-300/30'></div>
            </motion.div>
        </div>
    </section>
  )
}

export default Hero

