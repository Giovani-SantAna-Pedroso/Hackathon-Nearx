import React from 'react'

type Props = {
  img: string
  nome: string
  position: string
  description: string
}
function CardCriador(props: Props) {
  return (
    <div className="flex flex-col items-center  p-2 border rounded border-primary">
      <img src={props.img} />
      <p>{props.nome}</p>
      <p className="text-primary font-bold text-2xl">{props.position}</p>
      <p className="text-justify">{props.description}</p>
    </div>
  )
}

export default CardCriador
