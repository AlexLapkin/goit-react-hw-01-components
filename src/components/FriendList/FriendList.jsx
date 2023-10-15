import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.friend_list}>
        {friends.map(friend => (
       <FriendListItem
       key={friend.id}
       avatar={friend.avatar}
       name={friend.name}
       isOnline={friend.isOnline}
       />
))}
</ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  };
  
  export default FriendList;