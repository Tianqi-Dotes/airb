import React, { memo } from 'react'
//import Helloworld from 'components/helloworld'
import {useRoutes} from 'react-router-dom'
import routes from './router'

const App = memo(() => {
  return (
    <div className='app'>
      <div className='header'>header</div>
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <div className='footer'>footer</div>

    </div>
  )
})

export default App