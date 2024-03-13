import { reverse } from 'dns'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import Title from '../Title'

type Props = {
  imgSrc: string
  title: string
  reverse?: boolean
  children: ReactNode
  headerLevel: 1 | 2 | 3 | 4
}

const CLASS_TITLE = 'text-primary text-[32px] md:text-[64px]'

function Section(props: Props) {
  return (
    <section className="flex flex-col my-4">
      <Title headerLevel={props.headerLevel} title={props.title} invert="yes" />
      <div
        className={`flex flex-col md:flex-row ${props.reverse ? 'md:flex-row-reverse' : ''} justify-between`}
      >
        <img src={props.imgSrc} alt="Logo" className="w-full md:w-[40%]" />
        <div className="md:max-w-[40%]">
          <Title
            headerLevel={props.headerLevel}
            title={props.title}
            invert="no"
          />
          <p>{props.children}</p>
        </div>
      </div>
    </section>
  )
}

export default Section
