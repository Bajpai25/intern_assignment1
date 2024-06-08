import React from 'react'

function Child1({increment}) {
  return (
    <div>
      <h1>Child 1</h1>
      <button onClick={increment}> Increment money by 100</button>
    </div>
  )
}

export default Child1
