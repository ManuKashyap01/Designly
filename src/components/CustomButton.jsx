import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'

const CustomButton = ({title,type,customStyles,handleClick}) => {
    const snap=useSnapshot(state)
    const generateStyle=(type)=>{
        if(type==='filled'){
            return {
                backgroundColor:snap.color,
                color:'#fff'
            }
        }else{

        }
    }
  return (
    <button 
        className={`px-2 py-1.5 rounded-md ${customStyles}`}
        style={generateStyle(type)}
        onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton