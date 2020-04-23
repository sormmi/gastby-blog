import styled from "styled-components"

export const PostNavigationWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: var(--site-max-width);
  width: 100%;
  list-style: none;
  padding: 0;
  
  input {
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
      opacity: 0.7;
    }
  }
`

export const ItemWrapper = styled.li`
  margin: 10px;
`

export const ImgWrapper = styled.div`
  width: 30px;
  height: 30px;
`
