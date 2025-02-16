import { BiEnvelope } from "react-icons/bi"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="bg-black/85 py-8 text-center text-white">
      <div>
        <p className="font-bold text-xl text-cyan-800 font-lexend">PamoDev</p>
      </div>
      <div className="flex justify-center items-center gap-4 my-4">
        <a href="https://github.com/Pamode-Ukwe/" target='_blank' rel='noopener noreferrer'><FaGithub className="hover:text-pink-300 size-5"/></a>
        <a href="mailto:ebenezerukwe@gmail.com" target='_blank' rel='noopener noreferrer'><BiEnvelope className="hover:text-pink-300 size-5"/></a>
        <a href="https://www.linkedin.com/in/pamode-ukwe-26a2b5351/" target='_blank' rel='noopener noreferrer'><FaLinkedin className="hover:text-pink-300 size-5"/></a>
        <a href="https://wa.me/+2348106747706" target='_blank' rel='noopener noreferrer'><FaWhatsapp className="hover:text-pink-300 size-5"/></a>
      </div>
      <p className='font-light text-sm'>© 2025 PamoDev. All rights reserved.</p>
    </div>
  )
}

export default Footer
