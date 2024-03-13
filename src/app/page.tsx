import Image from 'next/image'
import './globals.css'
import Hero from './components/Intro'
import Vantagens from './components/Vantagens'
import Section from './components/UI/Section'
import Title from './components/UI/Title'
import Intro from './components/Intro'
import Steps from './components/Steps'
import Criadores from './components/Criadores'
import NossoCliente from './components/NossoClientes'

export default function Home() {
  return (
    <div className="h-full">
      <Intro />
      <Vantagens />
      <Steps />
      <NossoCliente />
      <Criadores />
    </div>
  )
}
