import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const scale = keyframes`
  0% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
`

export const LoaderComponent = styled.div<{ size?: number }>`
  display: flex;
  height: ${(props) => props.size ?? 70}px;
  width: ${(props) => 2 * (props.size ?? 70)}px;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;

  :before {
    content: '';
    height: ${(props) => props.size ?? 70}px;
    width: ${(props) => props.size ?? 70}px;
    background-color: black;
    border-radius: 50%;
    position: absolute;
    right: 0;
    animation: ${scale} 2000ms linear 1000ms infinite;
  }

  :after {
    content: '';
    height: ${(props) => props.size ?? 70}px;
    width: ${(props) => props.size ?? 70}px;
    background-color: black;
    border-radius: 50%;
    position: absolute;
    left: 0;
    animation: ${scale} 2000ms linear 0s infinite;
  }
`

const LoaderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

function LoadingScreen() {
  return (
    <LoaderWrapper data-testid='loader-component'>
      <LoaderComponent />
    </LoaderWrapper>
  )
}

export default LoadingScreen
