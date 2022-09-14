import React, { useRef, useEffect, createRef } from 'react'
import { reveal } from './reveal'

type RevealListType = {
  children: React.ReactNode
  className?: any
  interval: number
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

const RevealList: React.FC<RevealListType> = ({
  children,
  className,
  interval,
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
  const listRefs = useRef([]) as any

  const Origin = origin === undefined || null ? reveal.origin : origin
  const Distance = distance === undefined || null ? reveal.distance : distance
  const Duration = duration === undefined || null ? reveal.duration : duration
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

  const revealList: any = React.Children.map(children, (child: any) =>
    React.cloneElement(child, {
      ref: createRef(),
    }),
  )

  useEffect(() => {
    async function revElement() {
      const sr = (await require('scrollreveal')).default(reveal)
      const Interval = interval != 0 ? interval : 50
      const baseDelay: any = delay != 0 || undefined || null ? delay : 300
      revealList.forEach((e: any, index: number) => {
        listRefs[index] = e.ref
        const currentIntervalDelay = Interval * index
        if (listRefs[index].current) {
          sr.reveal(listRefs[index].current, {
            delay: baseDelay + currentIntervalDelay,
            origin: Origin,
            distance: Distance,
            duration: Duration,
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
          })
        }
      })
    }
    revElement()
  }, [])

  return <div className={className}>{revealList}</div>
}

export default RevealList
