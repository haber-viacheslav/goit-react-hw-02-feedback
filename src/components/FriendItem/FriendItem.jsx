import PropTypes from 'prop-types';
import { VscCircleLargeFilled } from 'react-icons/vsc';
import {
  Friend,
  FriendStatus,
  FriendImage,
  FriendName,
} from './FriendItem.styled';

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Friend>
      <FriendStatus status={isOnline}>
        <VscCircleLargeFilled size="20" />
      </FriendStatus>
      <FriendImage src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
