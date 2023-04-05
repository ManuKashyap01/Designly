import {motion,AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
import state from '../store'
import { CustomButton } from '../components'

const Home = () => {
    const snap=useSnapshot(state)
  return (
    // component by framer motion that controls the animation that has been removed from the DOM tree
    <AnimatePresence>
        {snap.intro &&(
            // normal div tag with some animations
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img
                        src='./threejs.png'
                        alt='logo'
                        className='w-8 h-8 object-contain' 
                    />
                </motion.header>

                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            LET'S <br className='xl:block hidden'/> DO IT.    
                        </h1>                    
                    </motion.div>
                    <motion.div className='flex flex-col gap-5' {...headContentAnimation}>
                        <p className='max-w-md font-normal text-gray-600'>
                            Unleash your inner fashion designer with our AI-powered 
                            t-shirt customization web app. Get ready to create personalized, 
                            eye-catching tees that reflect your <strong>one-of-a-kind style. </strong>
                            Join the fashion-forward revolution now and
                            start designing your own t-shirt today!
                        </p> 
                        <CustomButton
                            type='filled'
                            title='Customize It'
                            handleClick={()=>state.intro=false}
                            customStyles='w-fit pz-4 py-2.5 font-bold text-sm'
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home