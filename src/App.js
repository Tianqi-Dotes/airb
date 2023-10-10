import React, { memo } from 'react'
import Helloworld from 'components/helloworld'

const App = memo(() => {
  return (
    <div>
      <Helloworld/>
    </div>
  )
})

export default App