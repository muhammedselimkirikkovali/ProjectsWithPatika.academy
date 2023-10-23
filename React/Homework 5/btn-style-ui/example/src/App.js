import React from 'react'

import { Btn } from 'btn-style-ui'
import 'btn-style-ui/dist/index.css'

const App = () => {
  return (
    <Btn>
      <button type='primary'></button>
      <button type='default'></button>
      <button type='dashed'></button>
      <button type='text'></button>
      <button type='link'></button>
    </Btn>
  )
}

export default App
