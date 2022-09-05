import React from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import Error from '../../assets/148-laughing.svg'

const ErrorWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > span {
    display: flex;
    flex-direction: column;
  }

  * {
    margin: 5px;
  }
`

interface ErrorProps {
  retry: () => void
}

function ErrorScreen({ retry }: ErrorProps) {
  return (
    <ErrorWrapper data-testid='loader-component'>
      <img src={Error} alt='laughting' />
      <span>
        <div>Something went wrong</div>
        <Button variant='contained' onClick={retry}>
          Try again
        </Button>
      </span>
    </ErrorWrapper>
  )
}

export default ErrorScreen
