import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ( { friends }) => {
  return (
    <div>
      <ul className={css.friend_list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={css.friend_item} key={id}>
  <span className={`${css.friend_status} ${css[isOnline]}`}>{isOnline}</span>
  <img src={avatar}  alt="User avatar" width="100" />
  <p className={css.friend_name}>{name}</p>
</li>
))}
</ul>
    </div>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
  };