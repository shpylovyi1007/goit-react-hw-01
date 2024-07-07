import css from "./Profile.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, image, stats }) => {
  const containerStyle = clsx(css.container);
  const listStyle = clsx(css.list);
  const itemtStyle = clsx(css.item);
  const iconStyle = clsx(css.icon);
  const titleStyle = clsx(css.title);
  const firstContainer = clsx(css.firstContainer);
  const itemSpan = clsx(css.itemSpan);

  return (
    <div className={containerStyle}>
      <div className={firstContainer}>
        <img className={iconStyle} src={image} alt="User avatar" />
        <p className={titleStyle}>{name}</p>
        <p>&#64;{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={listStyle}>
        <li className={itemtStyle}>
          <span>Followers</span>
          <span className={itemSpan}>{stats.followers}</span>
        </li>
        <li className={itemtStyle}>
          <span>Views</span>
          <span className={itemSpan}>{stats.views}</span>
        </li>
        <li className={itemtStyle}>
          <span>Likes</span>
          <span className={itemSpan}> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
