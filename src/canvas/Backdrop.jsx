import React,{useRef} from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import {AccumulativeShadows,RandomizedLight} from '@react-three/drei'

// this component is responsible for the t-shirt backlight
const Backdrop = () => {
    const shadows=useRef()

  return (
    <AccumulativeShadows
        ref={shadows}
        // temporal smooths out the edges of the shadows
        temporal
        frames={60}
        // alphTest is used for transparency
        alphaTest={0.85}
        rotation={[Math.PI/2,0,0]}
        position={[0,0,-0.14]}
    >
        <RandomizedLight
            amount={4}
            radius={10}
            intensity={0.55}
            ambient={0.25}
            position={[5,5,-10]}
        />
        <RandomizedLight
            amount={4}
            radius={10}
            intensity={0.55}
            ambient={0.55}
            position={[-5,5,-10]}
        />
    </AccumulativeShadows>
  )
}

export default Backdrop