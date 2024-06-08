import React from 'react'

function Child2({decrement}) {
  return (
    <div>
      <h1>Child2 </h1>
      <button onClick={decrement}> Decrement money by 50</button>
    </div>
  )
}

export default Child2
