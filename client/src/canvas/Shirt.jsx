import React, { useEffect,useState } from 'react'
import {easing} from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal,useGLTF,useTexture } from '@react-three/drei'
// Decal is some kind of mesh or texture 
// useGLTF is to use the 3d model, useTexture is used to apply that texture

import state from '../store'

const Shirt = () => {
    const snap=useSnapshot(state)
    const {nodes, materials}=useGLTF('/shirt_baked.glb')
    
    useEffect(()=>{
        window.addEventListener('keydown',(e)=>{
            if(e.shiftKey){
                console.log('event',e)
                switch (e.key) {
                    case 'ArrowRight':
                        setlogox(logox+0.01)
                        break;
                    case 'ArrowLeft':
                        setlogox(logox-0.01)
                        break;
                    case 'ArrowUp':
                        setlogoy(logoy+0.01)
                        break;
                    case 'ArrowDown':
                        setlogoy(logoy-0.01)
                        break;

                    default:
                        break;
                }
            }
            else if(e.ctrlKey){
                console.log('event',e)
                switch (e.key) {
                    case 'ArrowRight':
                        setfullx(fullx+0.01)
                        break;
                    case 'ArrowLeft':
                        setfullx(fullx-0.01)
                        break;
                    case 'ArrowUp':
                        setfully(fully+0.01)
                        break;
                    case 'ArrowDown':
                        setfully(fully-0.01)
                        break;
                    
                    default:
                        break;
                }
            }
        })
    })
    const [logox, setlogox] = useState(0)
    const [logoy, setlogoy] = useState(0.04)
    const [fullx, setfullx] = useState(0)
    const [fully, setfully] = useState(0)
    const logoTexture=useTexture(snap.logoDecal)
    const fullTexture=useTexture(snap.fullDecal)
    
    // applying color smoothly
    useFrame((state,delta)=>{easing.dampC(materials.lambert1.color,
        snap.color,0.25,delta)})
     
    const stateString=JSON.stringify(snap)
    console.log('logox',logox);
    console.log('logoy',logoy);
  return (
    // key is used to render colors properly on the t-shirt
    <group key={stateString}>
        <mesh
            castShadow
            geometry={nodes.T_Shirt_male.geometry}
            material={materials.lambert1}
            material-roughness={1}
            dispose={null}
        >
            {snap.isFullTexture && (
                <Decal
                    position={[fullx,fully,0]}
                    rotation={[0,0,0]}
                    scale={1}
                    map={fullTexture}
                />
            )}
            {snap.isLogoTexture && (
                <Decal
                    position={[logox,logoy,0.15]}
                    rotation={[0,0,0]}
                    scale={0.15}
                    map={logoTexture}
                    map-anisotropy={16}
                    depthTest={false}  
                    depthWrite={true}

                />
            )}
        </mesh>
    </group>
  )
}

export default Shirt