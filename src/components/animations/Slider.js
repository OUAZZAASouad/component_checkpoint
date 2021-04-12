
import { useSpring, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'

function Slider({ children }) {
    const [bind, { delta, down }] = useGesture()
    const { x, size } = useSpring({
      x: down ? delta[0] : 0,
      size: down ? 1.1 : 1,
      immediate: name => down && name === 'x'
    })
    const avSize = x.interpolate({ map: Math.abs, range: [50, 300], output: ['scale(0.5)', 'scale(1)'], extrapolate: 'clamp' })
    return (
      <animated.div {...bind()} class="item">
        <animated.div class="av" style={{ transform: avSize, justifySelf: delta[0] < 0 ? 'end' : 'start' }} />
        <animated.div class="fg" style={{ transform: interpolate([x, size], (x, s) => `translate3d(${x}px,0,0) scale(${s})`) }}>
          {children}
        </animated.div>
      </animated.div>
    )
  }

  export default Slider;