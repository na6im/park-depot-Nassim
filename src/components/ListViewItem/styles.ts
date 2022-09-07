import styled from '@emotion/styled'

export const ListItemContainer = styled.div`
  position: relative;
  height: 100px;
  width: 70%;
  margin: 5px auto;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #9a9a9a;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 300ms ease;

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  img {
    width: 30%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    text-align: start;
    margin-right: 2em;
  }

  > div {
    padding: 10px;
    flex: 1;
  }
`
