import styled from 'styled-components';
export const StatisticsWrp = styled.div`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 4px 6px #2e2bc2, -1px -2px 4px #1d06eb;
  display: flex;
  gap: 20px;
`;

export const StatisticsItem = styled.p`
  font-size: 20px;
`;

export const StatisticsValue = styled.span`
  color: ${props => {
    switch (props.statsValue) {
      case 'good':
        return '#00c900';
      case 'neutral':
        return '#fbff00';
      case 'bad':
        return '#ff0000';
      case 'total':
        return '#04c4ff';
      default:
        return '#ffffff';
    }
  }};
`;
