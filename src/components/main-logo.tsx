import logo from '/assets/images/dragon-ball-logo.png'

type Props = {
  width: string,
  height: string
}

function MainLogo({ width, height }: Props): JSX.Element {

  return (
    <header>
      <img
        src={logo}
        alt="Dragon Ball Logo"
        width={width}
        height={height}
        className='image-shadow'
      />
    </header>
  )
}

export default MainLogo