import React from 'react'
import Title from '../UI/Title'
import { FaBeer } from 'react-icons/fa'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import Vantagem from './components/Vantagen'

function Vantagens() {
  return (
    <div className="mx-[20px] md:mx-[40px]">
      <Title headerLevel={1} title="Vantagens" invert="ignore" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Vantagem icon={<HiOutlineLightningBolt />} text="Rapido" />
        <Vantagem icon={<HiOutlineLightningBolt />} text="Rapido" />
        <Vantagem icon={<HiOutlineLightningBolt />} text="Rapido" />
        <Vantagem icon={<HiOutlineLightningBolt />} text="Rapido" />
        <Vantagem icon={<HiOutlineLightningBolt />} text="Rapido" />
        <Vantagem icon={<HiOutlineLightningBolt />} text="Rapido" />
        <Vantagem icon={<HiOutlineLightningBolt />} text="Rapido" />
        <Vantagem icon={<HiOutlineLightningBolt />} text="Rapido" />
        <Vantagem icon={<HiOutlineLightningBolt />} text="Rapido" />
      </div>
    </div>
  )
}

export default Vantagens
