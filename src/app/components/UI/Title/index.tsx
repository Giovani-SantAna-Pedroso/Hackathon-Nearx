type Props = {
  headerLevel: number
  title: string
  invert: 'yes' | 'no' | 'ignore'
}

function Title(props: Props) {
  const CLASS_TITLE = 'text-primary text-[32px] md:text-[64px]'
  let classTitle = `${CLASS_TITLE} ${props.invert == 'ignore' ? '' : props.invert == 'no' ? ' hidden md:flex' : 'md:hidden'}`

  switch (props.headerLevel) {
    case 1:
      return <h1 className={classTitle}>{props.title}</h1>
    case 2:
      return <h2 className={classTitle}>{props.title}</h2>
    case 3:
      return <h3 className={classTitle}>{props.title}</h3>
    case 4:
      return <h4 className={classTitle}>{props.title}</h4>
    default:
      return <h1 className={classTitle}>{props.title}</h1>
  }
}

export default Title
