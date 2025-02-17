import { SiCss3, SiGit, SiHtml5, SiJavascript, SiMongodb, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import holder from '../src/assets/aboutImg.png'
import nextLogo from '../src/assets/png-transparent-nextjs-hd-logo.png'
import zustandLogo from '../src/assets/zustandLogo.jpeg'
import { BiDownload } from 'react-icons/bi'
import { TbBrandFramerMotion } from 'react-icons/tb'

const About = () => {
  return (
    <section id='about' className='py-4 bg-black/5'>
        <p className="text-5xl py-16 text-center font-ibm">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 via-cyan-600 to bg-teal-800'>About Me</span></p>
        <div className='grid lg:grid-cols-2 md:mx-44 sm:mx-32 mx-20 py-8 xl:mx-64 gap-6'>
            <div className='col-span-1 hover:cursor-pointer bg-cyan-600 h-fit'>
                <img src={holder} alt="" className='rounded-md mx-auto shadow-cyan-300/25 opacity-95 shadow-xl hover:shadow-pink-300/25 hover:shadow-md'/>
            </div>
            <div className='col-span-1 my-auto text-lg space-x-1 space-y-1 font-lexend'>
                <p>&nbsp;&nbsp;Hello, I am Ukwe Pamode. I hold a Bsc in <span className='text-pink-800'>Mechanical Engineering</span> from Landmark University and a
                    <span className='text-pink-800'> certificate</span> of proficiency in <span className='text-pink-800'>Frontend </span>
                     Development from <span className='text-teal-600'><a href="https://hng.tech/internship" target='_blank' rel='noopener noreferrer'>HNG</a></span> Internship. I enjoy coding up beautiful interfaces for the web.</p>
                <p>&nbsp;&nbsp;I would describe my <span className='text-pink-800'>journey</span> in web development as a <span className='text-pink-800'>natural progression</span> so far. My goal has always been the same since I attempted the first project which is to build <span className='text-pink-800'>applications</span>
                  &nbsp;that are <span className='text-pink-800'>scalable and efficient</span> under the hood, coupled with a smooth and intuitive <span className='text-pink-800'>user experience</span> for visitors. I understand that learning never ends and I'm always <span className='text-pink-800'> open to ideas and perspectives</span></p>
                <p>&nbsp;&nbsp;Asides code, I'm a massive <span className='text-pink-800'>football</span> fan and a notorious <span className='text-pink-800'>perfectionist</span>.</p>
                <a href='/HNGCert.pdf' download='HNGCert.pdf' className='underline cursor-pointer hover:text-teal-950 text-pink-800 flex items-center gap-1'>HNG Cerftification <BiDownload/></a>
                <a href='/MyCV.rtf' download="PamodeCV.rtf" className='font-semibold my-2 underline cursor-pointer text-teal-950 hover:text-pink-950 space-x-0 flex items-center gap-1'>Download my Resume <BiDownload/></a>
            </div>
        </div>
        <p className="text-2xl text-center mt-16 sm:mb-4 mb-8">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 via-cyan-800 to bg-pink-800'>Technical Skillset</span>
        </p>
        <p className='md:flex md:justify-center grid grid-cols-5 px-8 md:px-0 gap-8 pb-24'>
            <span><SiHtml5 className='size-10 mx-auto mb-1' style={{color: '#E34F26'}}/> <span className='flex justify-center'>HTML</span></span>
            <p><SiCss3 className='size-10 mx-auto mb-1' style={{color: '#1572B6'}}/> <span className='flex justify-center'>CSS</span></p>
            <p><SiJavascript className='bg-black size-10 mx-auto mb-1' style={{color: '#F7DF1E'}}/><span className='flex justify-center'>Javascript</span></p>
            <span><SiReact className='size-10 mx-auto mb-1' style={{color: '#61DAFB'}}/> <span className='flex justify-center'>React</span></span>
            <span><SiTailwindcss className='size-10 mx-auto mb-1' style={{color: '#06B6D4'}}/> <span className='flex justify-center'>Tailwind CSS</span></span>
            <span><SiTypescript className='bg-white size-10 mx-auto mb-1' style={{color: '#3178C6'}}/> <span className='flex justify-center'>Typescript</span></span>
            <span><SiMongodb className='size-10 mx-auto mb-1' style={{color: '#47A248'}}/> <span className='flex justify-center'>MongoDB</span></span> 
            <span><SiGit className='size-10 mx-auto mb-1' style={{color: '#F05033'}}/> <span className='flex justify-center'>Git</span></span>
            <span><TbBrandFramerMotion className='size-10 mx-auto mb-1'/> <span className='flex justify-center'>Framer Motion</span></span>
            <p><img src={nextLogo} alt="Nextjs" className='w-20 h-11'/><span className='flex justify-center'>Next.js</span></p>
            <p><img src={zustandLogo} alt="Nextjs" className='w-20 h-11'/><span className='flex justify-center'>Zustand</span></p>
        </p>
    </section>
  )
}

export default About
