import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { BackToTopBtn } from './components/BackToTopBtn'

import { Banner } from './components/Banner'
import { Contact } from './components/Contact'

import { Newsletter } from './components/Newsletter'
import { Skills } from './components/Skills'
import { Team } from './components/Team'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export function App() {
  return (
    <div>
      <Banner />
      <Testimonials />
      <Skills />
      <Team />
      <Newsletter />
      <Contact />
      <Footer />

      <BackToTopBtn />
      {/* <div className="h-[2000px]"></div> */}
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}
