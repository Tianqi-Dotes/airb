import React, { memo,useEffect } from 'react'
import hyRequest from '@/services'

const index = memo(() => {

  useEffect(()=>{
    hyRequest.get({url:"/home/highscore"}).then(res=>{
      console.log(res)
    })
  },[])
  
  return (
    <div>home</div>
  )
})

export default index