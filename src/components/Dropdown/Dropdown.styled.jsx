import styled from 'styled-components';
export const DropdownWrapper = styled.div`
  position: relative;
  width: 400px;
  padding: 20px;
  border: 1px solid black;
`;

export const DropdownButton = styled.button`
  border: none;
  background-color: blueviolet;
  padding: 4px 10px;
  border-radius: 2px;
  cursor: pointer;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 20px;
  text-align: center;
  background-color: teal;
  color: white;
`;
