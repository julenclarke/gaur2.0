import React from 'react'
import { ThemeConsumer } from '../contexts/theme'

export default function Nav () {
  return (
    <nav className='row space-between'>
      <button
        style={{fontSize: 30}}
        className='btn-clear'
      >
        JC
      </button>
    </nav>
  )
}