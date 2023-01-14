import styled from 'styled-components';
import { getRandomHexColor } from 'Utils/RandomColor';

export const Item = styled.li`
  display: flex;
  font-size: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${getRandomHexColor};
`;
