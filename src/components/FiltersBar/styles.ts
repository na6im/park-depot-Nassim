import styled from '@emotion/styled'
import { Select } from '@mui/material'

export const Container = styled.div`
  position: relative;
  width: 60%;
  height: 60px;
  margin: 15px auto;
  padding: 25px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  .MuiSelect-select {
    padding: 0 16px;
  }

  @media (max-width: 765px) {
    width: 100%;
  }

  > div {
    display: flex;
    align-items: center;
  }

  span {
    margin: 10px;
  }
`

export const Icon = styled.img`
  width: 20px;
`

export const SelectMenu = styled(Select)`
  margin-left: 10px;
  width: 150px;
  padding: 5px;
`
