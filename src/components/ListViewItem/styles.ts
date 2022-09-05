import styled from '@emotion/styled'

export const ListItemContainer = styled.div`
  position: relative;
  height: 100px;
  width: 80%;
  margin: 5px auto;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #505050;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  img {
    width: 300px;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    text-align: start;
  }

  > div {
    width: 100%;
    padding: 10px;
  }
`
