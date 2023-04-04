import React from 'react'
import {SketchPicker} from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'
import { color } from 'framer-motion'

const ColorPicker = () => {
  const snap=useSnapshot(state)
  return (
    <div
      className='absolute left-full ml-3'
    >
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={['#ababab','#20419a','#f6e44a','#821d2b','#dd7db6','#f34976','#f3eed7','#27c1ca','#00b064','#baa3da','#d1696d','#000']}
        onChange={(color)=>state.color=color.hex}
      />
    </div>
  )
}

export default ColorPicker