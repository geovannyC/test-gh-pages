import React, { useEffect, useState } from 'react'
import "./TitleProjectComponent.scss"
export function TitleProjectComponent({nameProject}) {
  const [loading, setLoading]= useState(true)
  useEffect(()=>{
setTimeout(() => {
  setLoading(false)
}, 200);
  },[])
  const SchemmaTitleProject=()=>{
    return (
      <div className={loading?'text-container off-rotation':'text-container on-rotation'}>
          <small className="text-style">{nameProject}</small>
      </div>
    )
  }
return SchemmaTitleProject()
}
