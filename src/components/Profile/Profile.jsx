import css from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
   
 <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar} width="200"
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.statsItem}>
      <b className={css.label}>Followers</b>
      <b className={css.quantity}>{stats.followers}</b>
    </li>
    <li className={css.statsItem}>
      <b className={css.label}>Views</b>
      <b className={css.quantity}>{stats.views}</b>
    </li>
    <li className={css.statsItem}>
      <b className={css.label}>Likes</b>
      <b className={css.quantity}>{stats.likes}</b>
    </li>
  </ul>
</div>
      
 )
};

Profile.propTypes = {
username: PropTypes.string,
tag: PropTypes.string,
location: PropTypes.string,
avatar: PropTypes.string,
stats: PropTypes.object,
};

export default Profile;