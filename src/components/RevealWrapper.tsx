import React, { useRef, useEffect } from 'react'
import { reveal } from './reveal'

type RevealWrapperType = {
  children: React.ReactNode
  className?: any
  origin?: string
  distance?: string
  duration?: number
  delay?: number
  easing?: string
  opacity?: number
  rotate?: { x: number; y: number; z: number }
  scale?: number
  cleanup?: boolean
  desktop?: boolean
  mobile?: boolean
  reset?: boolean
  useDelay?: string
  viewFactor?: number
  viewOffset?: { top: number; right: number; bottom: number; left: number }
}

const RevealWrapper: React.FC<RevealWrapperType> = ({
  children,
  className,
  origin,
  distance,
  duration,
  delay,
  reset,
  easing,
  opacity,
  rotate,
  scale,
  cleanup,
  desktop,
  mobile,
  useDelay,
  viewFactor,
  viewOffset,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const Origin = origin === undefined || null ? reveal.origin : origin
  const Distance = distance === undefined || null ? reveal.distance : distance
  const Duration = duration === undefined || null ? reveal.duration : duration
  const Delay = delay === undefined || null ? reveal.delay : delay
  const Reset = reset === undefined || null ? reveal.reset : reset
  const Easing = easing === undefined || null ? reveal.easing : easing
  const Opacity = opacity === undefined || null ? reveal.opacity : opacity
  const Rotate = rotate === undefined || null ? reveal.rotate : rotate
  const Scale = scale === undefined || null ? reveal.scale : scale
  const Cleanup = cleanup === undefined || null ? reveal.cleanup : cleanup
  const Desktop = desktop === undefined || null ? reveal.desktop : desktop
  const Mobile = mobile === undefined || null ? reveal.mobile : mobile
  const UseDelay = useDelay === undefined || null ? reveal.useDelay : useDelay
  const ViewFactor = viewFactor === undefined || null ? reveal.viewFactor : viewFactor
  const ViewOffset = viewOffset === undefined || null ? reveal.viewOffset : viewOffset

  const revealOptionProps = {
    origin: Origin,
    distance: Distance,
    duration: Duration,
    delay: Delay,
    reset: Reset,
    easing: Easing,
    opacity: Opacity,
    rotate: Rotate,
    scale: Scale,
    cleanup: Cleanup,
    desktop: Desktop,
    mobile: Mobile,
    useDelay: UseDelay,
    viewFactor: ViewFactor,
    viewOffset: ViewOffset,
  }

  useEffect(() => {
    async function revElement() {
      const sr = (await require('scrollreveal')).default(reveal)
      //If you pass a custom scrollreveal object you need to specify at least the origin
      if (revealOptionProps.origin != null && ref.current) {
        sr.reveal(ref.current, revealOptionProps)
      } else if (ref.current) {
        //if you don't pass any props
        sr.reveal(ref.current)
      } else {
        console.warn("next-scroll doesn't apply to your element")
      }
    }
    revElement()
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default RevealWrapper
