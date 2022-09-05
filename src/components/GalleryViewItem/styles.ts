import styled from '@emotion/styled'

export const GalleryItemContainer = styled.div`
  position: relative;
  height: 200px;
  margin: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 300ms ease;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  :hover {
    transform: scale(1.05);
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
  }
`
