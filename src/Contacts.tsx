import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/ReactToastify.css'
import portal from '../src/assets/projectsDislay/black screen portal effect.mp4'

const Contacts = () => {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [errors, setErrors] = useState({general: '', email: ''})
  const validate = () => {
    let valid = true
    const newErrors = {general: '', email: ''}
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      newErrors.general = 'All fields are required'
      valid = false
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Please check your email adress'
      valid = false
    }
    setErrors(newErrors)
    return valid
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const { name, value} = e.target
    setFormData({ ...formData, [name]: value})
    setErrors({ ...errors, [name]: ''})
  }
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      return
    }
    if (form.current) {
      emailjs
      .sendForm(
        'service_hrllmyc',
        'template_py8akni',
        form.current, 
        'QHwe-mf3hH30Db1iN'
      )
      .then(
        () => {
          toast.success('Message sent successfully!')
          setFormData({name: '', email: '', message: ''})
        })
        .catch(() => {
          toast.error('Failed to send message, please try again.')
        })
      } 
  }
  return (
    <section id="contact" className='sm:px-24 px-4 xl:px-64 py-2 mb-20 relative'>
      <video src={portal} autoPlay loop muted className="absolute top-0 left-0 w-full h-screen object-cover opacity-5 pointer-events-none"></video>
      <p className="text-5xl py-16 text-center font-ibm">
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 via-cyan-800 to bg-pink-800'>Get in touch</span></p>
      <form ref={form} onSubmit={sendEmail} className="bg-transparent px-12 md:w-[75%] w-full mx-auto rounded-md font-lexend">
        <div className="">
          <label htmlFor="name"></label>
          <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required className="my-4 p-3 outline-none rounded-md w-full shadow-sm"/>
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required className="p-3 outline-none rounded-md w-full shadow-sm"/>
          {errors.email.length > 0 && <p className="text-red-800 italic text-sm"> {errors.email} </p>}
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea name="message" value={formData.message} onChange={handleChange} required  className="my-4 p-3 outline-none rounded-md w-full shadow-sm h-48" placeholder="Message"></textarea>
        </div>
        {errors.general.length > 0 && <p className="text-red-400"> {errors.general} </p>}
        <button type="submit" className="p-3 bg-stone-200 text-teal-800 hover:bg-teal-800 hover:text-pink-300 w-28 rounded-md font-semibold">Send</button>
      </form>
      <ToastContainer/>
    </section>
  )
}

export default Contacts
