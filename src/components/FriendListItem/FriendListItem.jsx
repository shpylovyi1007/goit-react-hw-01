import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ icon, username, userIsOnline }) => {
  const title = clsx(css.title);
  const textStyle = clsx(css.text, userIsOnline ? css.isOnline : css.isOffline);

  return (
    <div>
      <img src={icon} alt="Avatar" width="48" />
      <p className={title}>{username}</p>
      <p className={textStyle}>{userIsOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
