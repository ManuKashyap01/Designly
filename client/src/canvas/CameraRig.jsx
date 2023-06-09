import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import state from '../store'

const CameraRig = ({children}) => {
    const group=useRef()
    // useRef hook is used to persist a value between rerenders
    const snap=useSnapshot(state)

    // useFrame hook is used to run code on every rendered frame, like running effects, updating controls, etc.
    useFrame((state,delta)=>{
        const isBreakpoint=window.innerWidth<=1260
        const isMobile=window.innerWidth<=600

        // set the initial position of the model
        let targetPosition=[-0.4,0,2]
        if(snap.intro){
            if(isBreakpoint) targetPosition=[0,0,2]
            if(isMobile) targetPosition=[0,0.2,2.5]
        }else{
            if(isMobile) targetPosition=[0,0,2.5]
            else targetPosition=[0,0,2]
        }
        // set model camera position
        // damp3 is used for model or camera positioning
        easing.damp3(state.camera.position, targetPosition, 0.25, delta)
        // setting the model rotation smoothly
        // dampE is used for model rotation
        easing.dampE(
            group.current.rotation,
            [state.pointer.y/10,-state.pointer.x/5,0],
            0.25,
            delta
            // delta is amount of change and is coming from last render
        )
    })
    
  return (
    <group ref={group}>
        {children}
    </group>
  )
}

export default CameraRig