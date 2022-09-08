import React from 'react'
import styled from '@emotion/styled'

type props = {
  isActive: boolean
}

const Path = styled.path<props>`
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: ${(props) => (props.isActive ? '#FFF' : '#414d55')};
`
function Line({ isActive }: props) {
  return (
    <svg
      height='18'
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      x='0px'
      y='0px'
      viewBox='0 0 17 14'
      xmlSpace='preserve'
    >
      <Path
        isActive={isActive}
        d='M0,9h4V5H0V9z M0,14h4v-4H0V14z M0,4h4V0H0V4z M5,9h12V5H5V9z M5,14h12v-4H5V14z M5,0v4h12V0H5z'
      />
    </svg>
  )
}

export default Line
