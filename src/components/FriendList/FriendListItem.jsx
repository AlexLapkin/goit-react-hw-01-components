import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.friend_item}>
        <span className={css.friend_status}
        style={{
           backgroundColor: isOnline ? 'green' : 'red',
        }}
        >{isOnline}</span>
        <img src={avatar}  alt="User avatar" width="100" />
        <p className={css.friend_name}>{name}</p>
      </li>
    )
}

FriendListItem.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;