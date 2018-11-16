import React from 'react'
import ShowImage from './ShowImage'

function ShowCard ({image}) {
  return (
    <div>
      <ShowImage src={image} preview fullWidth />
      <style jsx>{`
        div {
          width: 200px;
          transition: 0.4s ease all;
        }
        div:hover {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  )
}

export default ShowCard