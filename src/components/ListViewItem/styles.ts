import styled from '@emotion/styled'

export const ListItemContainer = styled.div`
  position: relative;
  height: 100px;
  width: 70%;
  min-width: 300px;
  margin: 5px auto;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #9a9a9a;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (max-width: 765px) {
    width: 100%;
  }

  :hover {
    cursor: pointer;
  }

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    overflow: hidden;
    text-align: start;
    margin: 0 1em;
    border-radius: 100px;
  }

  > div {
    flex: 1;
    margin-right: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div:first-child {
    flex: 1.5;
  }
`
