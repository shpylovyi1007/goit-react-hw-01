import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
import clsx from "clsx";

const FriendList = ({ friends }) => {
  const listStyle = clsx(css.list);
  const itemStyle = clsx(css.item);

  return (
    <ul className={listStyle}>
      {friends.map((friend) => {
        return (
          <li className={itemStyle} key={friend.id}>
            <FriendListItem
              icon={friend.avatar}
              username={friend.name}
              userIsOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
