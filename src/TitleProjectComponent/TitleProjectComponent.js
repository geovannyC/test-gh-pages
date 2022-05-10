import React from 'react'
import "./TitleProjectComponent.scss"
export function TitleProjectComponent({nameProject}) {
  return (
    <div className='text-container'>
        <small className="text-style">{nameProject}</small>
    </div>
  )
}
