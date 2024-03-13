import React, { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  text: string
}
function Vantagem(props: Props) {
  return (
    <div className="flex justify-center text-primary text-[34px]  border border-primary rounded">
      <div className="flex items-center ">
        <div className="mr-2">{props.icon}</div>
        {props.text}
      </div>
    </div>
  )
}

export default Vantagem
