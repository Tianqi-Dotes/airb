import React, { memo } from 'react'
import Center from './c-cpns/center'
import Left from './c-cpns/left'
import Right from './c-cpns/right'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <Left/>
      <Center/>
      <Right/>
      </HeaderWrapper>
  )
})

export default AppHeader