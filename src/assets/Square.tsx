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
        d='M0,6h5V0H0V6z M0,14h5V8H0V14z M6,14h5V8H6V14z M12,14h5V8h-5V14z M6,6h5V0H6V6z M12,0v6h5V0H12z'
      />
    </svg>
  )
}

export default Line
