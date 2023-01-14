import styled from 'styled-components';

export const Friend = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  padding: 6px;
  background-color: #f7f5f5;
  box-shadow: 1px 2px 2px 3px #616161;
  width: 200px;
`;

export const FriendStatus = styled.span`
  align-self: auto;
  color: ${props => {
    return props.status ? 'green' : 'red';
  }};
`;

export const FriendImage = styled.img`
  border-radius: 20%;
  border: 1px solid #000;
`;

export const FriendName = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
