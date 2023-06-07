import React from 'react'

function Card(props) {
    function classNameMaker (){
        
    }
  return (
    <div className='card'>{props.children}</div>
  )
}

export default Card