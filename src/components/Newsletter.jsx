import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { toast } from 'react-toastify'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    if (email === '') {
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
          toast.success('Email enviado')
        },
        (err) => {
          console.log('Erro: ', err)
          toast.error('Email não enviado.')
        },
      )
  }

  return (
    <section className="bg-accent pt-[54px] pb-[74px]">
      <div className="container mx-auto px-8  text-center">
        <h3 className="font-primary text-[40px] font-extrabold leading-[1.2] text-white mb-[12px]">
          Assine nosso newsletter
        </h3>
        <p className="mb-[40px] text-white text-sm">
          Seja o primeiro a receber as últimas notícias sobre nós.
        </p>
        <form
          onSubmit={sendEmail}
          className="max-w-[600px] mx-auto flex flex-col lg:flex-row"
        >
          <input
            className="form-control mb-4"
            type="email"
            placeholder="Seu melhor email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn bg-primary hover:bg-primary-hover lg:max-w-[150px] lg:ml-4">
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
