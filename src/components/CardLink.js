import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 0 24%;
  background: #fff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25);
  margin: 0.5%;
  border-radius: 3px;
  transition: all 0.15s ease-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  }
`

export default CardLink