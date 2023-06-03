import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { toast } from 'react-toastify'

export function Appointment() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || message === '' || phone === '') {
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
          setPhone('')
          toast.success('Email enviado')
        },
        (err) => {
          console.log('Erro: ', err)
          toast.error('Email não enviado.')
        },
      )
  }

  return (
    <div className="bg-accent w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto">
      <h3 className="text-white text-[28px] font-bold tracking-[0.3px] text-center">
        Agende uma consulta
      </h3>
      <div className="w-[54px] h-[3px] bg-white my-6 mx-auto "></div>
      {/* input group */}
      <div className="space-y-[24px]">
        <form onSubmit={sendEmail}>
          <input
            className="form-control mb-4"
            placeholder="Nome Completo"
            type="text"
            value={name}
            name="from_name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control mb-4"
            placeholder="Whatsaap"
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="form-control mb-4"
            placeholder="Seu melhor email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="resize-none w-full h-[132px] outline-none rounded-sm
            p-4 font-body text-sm text-gray focus:ring-1 focus:ring-primary mb-4"
            placeholder="Sua mensagem*"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="btn bg-primary hover:bg-primary-hover transition-all"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </div>
  )
}
