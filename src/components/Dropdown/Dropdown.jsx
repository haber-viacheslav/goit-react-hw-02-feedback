import { Component } from 'react';
import {
  DropdownWrapper,
  DropdownMenu,
  DropdownButton,
} from './Dropdown.styled';

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  render() {
    const { visible } = this.state;
    return (
      <DropdownWrapper>
        <DropdownButton type="button" onClick={this.toggle}>
          {visible ? 'Скрыть' : 'Показать'}
        </DropdownButton>

        {visible && <DropdownMenu>Выпадающее меню</DropdownMenu>}
      </DropdownWrapper>
    );
  }
}

/* <Dropdown>
  <button type="button" className="Dropdown__toggle" onClick={this.toggle}>
    {visible ? 'Скрыть' : 'Показать'}
  </button>

  {visible && <Dropdown__menu>Выпадающее меню</Dropdown__menu>}
</Dropdown>; */
