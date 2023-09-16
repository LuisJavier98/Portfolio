export const tiltEffect = (e,Card) => {
  const marginX = (window.innerWidth - e.target.clientWidth) / 2
  const marginY = (window.innerHeight - e.target.clientHeight) / 2
  const perspectiveX = e.clientX - marginX - (e.target.clientWidth / 2)
  const perspectiveY = e.clientY - marginY - (e.target.clientHeight / 2)
  Card.current.style.transitionTimingFunction = 'ease-out'
  Card.current.style.transitionDuration = '300ms'
  Card.current.style.transform = `perspective(2700px) translate3d(0,0,50px) rotateX(${-perspectiveY / 45}deg) rotateY(${perspectiveX / 45}deg) `
}

export const disableAnimation = (Card) => {
  Card.current.style.transform = ''
  Card.current.style.transitionTimingFunction = ''
  Card.current.style.transitionDuration = ''
}