import { team } from '../data'

export function Team() {
  return (
    <section id="team" className="section">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">
          Nossos advogados
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]">
          Eles trabalham em estreita colaboração com os clientes, ouvindo suas
          preocupações e necessidades, e oferecem aconselhamento jurídico
          personalizado e estratégias eficazes para alcançar os melhores
          resultados.
        </p>
        {/* team members grid */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-[30px]">
          {team.map((item, index) => {
            const { image, name, position, description } = item
            return (
              <div className="text-center lg:text-left mb-12" key={index}>
                <img className="mx-auto lg:mx-0 mb-6" src={image} alt="/" />
                <h4 className="text-2xl mb-2 font-primary font-bold">{name}</h4>
                <p className="text-sm uppercase tracking-[0.3px] mb-4 opacity-[0.8]">
                  {position}
                </p>
                <p className="max-w-[332px] lg:max-w-[335px] mx-auto lg:mx-0">
                  {description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
