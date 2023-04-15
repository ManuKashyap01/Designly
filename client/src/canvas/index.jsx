import {Canvas} from '@react-three/fiber'
import {Environment,Center} from '@react-three/drei'
import Shirt from './Shirt'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'


const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{position:[0,0,0],fov:25}}
      gl={{preserveDrawingBuffer:true}}
      className='w-full max-w-full h-full transition-all ease-in'
    >
      <ambientLight intensity={0.5}/>
      {/* environment is used to set a place for our model and can also be set as background 
      and our model then does not require additional lighting */}
      <Environment preset='city' />
      <CameraRig>
        <Backdrop/>
        {/* center is used to position the 3d model in the center of the screen */}
        <Center>
          <Shirt/>
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel