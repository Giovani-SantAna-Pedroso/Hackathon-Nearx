import React from 'react'
import CardCriador from './CardCriador'

function Criadores() {
  return (
    <div className="mx-[20px] md:mx-[40px]">
      <div className="grid grid-cols-2 gap-4">
        <CardCriador
          nome="Ze Da Bota"
          position="dev"
          img="https://picsum.photos/200"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, grid "
        />
        <CardCriador
          nome="Ze Da Bota"
          position="dev"
          img="https://picsum.photos/200"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, grid consectetur adipiscing elit, grid consectetur adipiscing elit, grid consectetur adipiscing elit, grid "
        />
        <CardCriador
          nome="Ze Da Bota"
          position="dev"
          img="https://picsum.photos/200"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, grid "
        />
        <CardCriador
          nome="Ze Da Bota"
          position="dev"
          img="https://picsum.photos/200"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, grid "
        />
      </div>
    </div>
  )
}

export default Criadores
