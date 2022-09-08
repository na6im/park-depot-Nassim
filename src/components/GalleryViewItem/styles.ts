import styled from '@emotion/styled'

export const GalleryItemContainer = styled.div`
  position: relative;
  height: 400px;
  margin: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  :hover {
    cursor: pointer;
  }

  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  > div {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(0deg, #000 40%, #ffffff00);
    color: white;
    padding: 10px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const ActiveButton = styled.span<{ active: boolean }>`
  bottom: 20px;
  right: 13px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;

  > div {
    margin-left: 0.5em;
    height: 13px;
    width: 13px;
    border-radius: 15px;
    background-color: ${(props) => (props.active ? 'green' : 'red')};
  }
`
