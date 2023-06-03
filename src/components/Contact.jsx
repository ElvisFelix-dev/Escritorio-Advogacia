import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { toast } from 'react-toastify'

import { FcPhone } from 'react-icons/fc'

import { social } from '../data'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || message === '') {
      toast.warning('Preencha os campos.')
      return
    }

    emailjs
      .sendForm(
        'service_e7d7usw',
        'template_xvbgsin',
        e.target,

        'avv6uQ0puupw5tSE4',
      )
      .then(
        (response) => {
          console.log('Email Enviado', response.status, response.text)
          setEmail('')
          setMessage('')
          setName('')
          toast.success('Email enviado')
        },
        (err) => {
          console.log('Erro: ', err)
          toast.error('Email não enviado.')
        },
      )
  }

  return (
    <section
      id="contact"
      className="bg-primary text-white min-h-[732px] section"
    >
      <div className=" container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">
          Contate-nos
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px] text-center">
          Ter um advogado ao nosso lado nos proporciona segurança e
          tranquilidade, assegurando que nossos interesses sejam devidamente
          protegidos e que tenhamos o suporte necessário para lidar com qualquer
          desafio legal que possa surgir.
        </p>
        {/* form */}
        <form
          onSubmit={sendEmail}
          className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]"
        >
          <input
            className="form-control"
            type="text"
            placeholder="Nome Completo"
            value={name}
            name="from_name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control"
            type="email"
            placeholder="Seu melhor email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="textarea"
            placeholder="Mensagem*"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="btn bg-accent hover:bg-accent-hover transition-all"
          >
            Enviar Mensagem
          </button>
        </form>
        <div className="flex items-center max-w-[250px] mx-auto pb-4">
          <a href="tel:+55 16 1234 56789">+55 11 1234 56789</a>
        </div>
        <div className="flex items-center max-w-[350px] mx-auto pb-4 pl-8">
          <address>Rua: Do Centro, São Paulo SP N°123</address>
        </div>
        {/* socials */}
        <div className="flex items-center justify-between max-w-[250px] mx-auto">
          {social.map((item, index) => {
            return (
              <a href="#!" key={index}>
                <img src={item.icon} alt="" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
