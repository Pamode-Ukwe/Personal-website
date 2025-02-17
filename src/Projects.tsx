import VideoThumbnail from './VideoThumbnail'
import screenShotOne from './assets/projectsDislay/Pizza Website.png'
import screenShotTwo from './assets/projectsDislay/Sneaker Store.png'
import screenShotThree from './assets/projectsDislay/Construction.png'
import screenShotFour from './assets/projectsDislay/Linktree.png'
import screenSaveOne from './assets/projectsDislay/Bennys Pizzza Place - Profile 1 - Microsoft​ Edge 2024-12-14 23-14-14.mp4'
import screenSaveTwo from './assets/projectsDislay/Vite + React + TS - Profile 1 - Microsoft​ Edge 2024-12-24 15-30-04.mp4'
import screenSaveThree from './assets/projectsDislay/Vite + React + TS and 1 more page - Profile 1 - Microsoft​ Edge 2025-02-14 00-30-08.mp4'
import screenSaveFour from './assets/projectsDislay/Create Next App and 2 more pages - Profile 1 - Microsoft​ Edge 2025-02-14 00-59-09.mp4'

interface Props {
    id: number
    thumbnail: string
    videoSrc: string
    liveDemo?: string
    githubLink: string
    description: string
}

const Projects = () => {
    const videoData: Props[] = [
        {id: 1, thumbnail: screenShotOne, videoSrc: screenSaveOne, liveDemo: 'https://pamode-ukwe.github.io/Bennys-Pizza/', githubLink: 'https://github.com/Pamode-Ukwe/Bennys-Pizza',
            description: 'A pizza website that allows users to order pizza online and have it delivered to their location. The website is "light" and was built using HTML, CSS, and JavaScript to show that I know my way around the foundational tools if i need to go vanilla.'},
        {id: 2, thumbnail: screenShotTwo, videoSrc: screenSaveTwo, liveDemo: 'https://footwear-shop-6vyk.vercel.app/', githubLink: 'https://github.com/Pamode-Ukwe/footwear-shop',
            description: 'A sneaker store that allows users to view and purchase sneakers. The website was built using React, TypeScript, Tailwind CSS, Framer Motion, Zod and Zustand for state management. The products were fetched from a fake store API and stored.'},
        {id: 3, thumbnail: screenShotThree, videoSrc: screenSaveThree, liveDemo: 'https://b-con-construction-uzmi.vercel.app/', githubLink: 'https://github.com/Pamode-Ukwe/BCon-construction',
            description: 'A construction website that allows users to view the companys projects, achievements, guarantees and request construction services. It was built using React, TypeScript, Tailwind CSS and Framer Motion. The idea came from a vanilla HTML, CSS and JavaScript project on YouTube that I decided to build on React and add my own ideas with few pages, animations and designs.'},
        {id: 4, thumbnail: screenShotFour, videoSrc: screenSaveFour, githubLink: 'https://github.com/Pamode-Ukwe/linkshare-webapp',
            description: 'A link-sharing app that allows users to share their social media links and other links in one place. The website was built using Next.js, TypeScript, Tailwind CSS, Zustand for state management and MongoDB for authentication and database. Sadly,  I encountered unforeseen deployment challenges due to an initial misconfiguration in the project setup and I am currently migrating this project to a new Next.js environment that ensures a smooth deployment ⏳.'}
    ]
  return (
    <section id='portfolio' className='pt-12 bg-black/15 pb-16'>
        <p className="text-5xl py-12 text-center font-ibm">
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-cyan-700 to bg-teal-700'>Portfolio</span></p>
        <p className='text-pink-950 my-2 ml-32 text-sm font-semibold font-lexend'>*Hover to watch demonstrations (PC)</p>
        <div className="grid md:grid-cols-2 md:mx-32 sm:mx-20 mx-8 gap-12">
            { videoData.map((video) => <div key={video.id}><VideoThumbnail githubLink={video.githubLink} description={video.description} liveDemo={video.liveDemo} id={video.id} thumbnail={video.thumbnail} videoSrc={video.videoSrc}/></div>) }
        </div>
    </section>
  )
}

export default Projects
