import express from 'express'
import * as dotenv from 'dotenv'
import fetch from 'node-fetch'
// import {Configuration,OpenAIApi} from 'openai'

dotenv.config()

// router is used to create different routes
const router=express.Router()

// const config=new Configuration({
//     apiKey:process.env.API_KEY
// })
// create an instance of openai by using the config
// const openapi=new OpenAIApi(config)

router.route('/').get((req,res)=>{
    res.status(200).json({message:'Hello from Dalle routes'})
})

router.route('/').post(async (req,res)=>{
    try {
        const {prompt}=req.body
        // const response=await openapi.createImage({
        //     prompt,
        //     n:1,
        //     size:'1024x1024',
        //     response_format:'b64_json'
        // })
        const response=await fetch(
            `https://api.edenai.run/v2/image/generation`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.EDENAI_API_KEY}`
              },
              body: JSON.stringify({
                providers: 'openai',
                text: prompt,
                resolution: '512x512',
                num_images: 1,
                response_format:'b64_json'
              })
            }
          );
        const data = await response.json();
        const image=data.openai.items[0].image
        console.log(data.openai.items)
        res.status(200).json({photo:image})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
    }
})

export default router