import { ControlButton, ControlsContainer } from './Controls.styled';

export const Controls = ({ onIncrement, onDecrement }) => (
  <ControlsContainer className="Counter__controls">
    <ControlButton type="button" onClick={onIncrement}>
      increment
    </ControlButton>
    <ControlButton type="button" onClick={onDecrement}>
      decrement
    </ControlButton>
  </ControlsContainer>
);
