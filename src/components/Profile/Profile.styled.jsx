import styled from 'styled-components';

export const Card = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  border: 1px solid rgb(199, 199, 235);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const UserImage = styled.img`
  border-radius: 100%;
`;

export const UserName = styled.h3`
  font-size: 32px;
  font-weight: 600;
`;

export const UserTag = styled.p`
  color: grey;
  font-size: 20px;
  font-weight: 40px;
`;

export const UserLocation = UserTag;

export const StatsList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 3px 4px grey;
`;

export const StatsItem = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.33%;
  outline: 1px solid grey;
  padding: 20px 0;
  background-color: rgb(231, 255, 255);
`;

export const StatsLabel = styled.ul`
  color: grey;
`;

export const StatsQuantity = styled.ul`
  color: black;
  font-weight: 600;
`;
