import React from 'react'
import CustomButton from './CustomButton'

const AIPicker = ({prompt,setPrompt,generatingImg,handleSubmit}) => {
  return (
    <div className='aipicker-container'> 
      <textarea 
        name="" 
        placeholder='Ask Ai...'
        id=""  
        rows={5}
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg
        ?(
          <CustomButton
            type='outline'
            title='Generating Image'
            customStyles='text-xs w-full'
          />
        )
      :(
        <>
        <CustomButton
          type='outline'
          title='AI Logo'
          handleClick={()=>handleSubmit('logo')}
          customStyles='text-xs flex-1'
        />
        <CustomButton
          type='outline'
          title='AI Full'
          handleClick={()=>handleSubmit('full')}
          customStyles='text-xs flex-1'
        />
        </>
      )}
      </div>
    </div>
  )
}

export default AIPicker