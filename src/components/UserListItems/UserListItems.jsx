import styles from "./UserListItems.module.css";
import { Lock } from "react-feather";
import { Trash2 } from "react-feather";
import { useDispatch } from "react-redux";
import {mouseHover,removeUser}  from "../../store/actions";

const Users = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.users}>
      <div className={styles.col1}>
        <img
          src={props.img}
          alt="user_image"
          onMouseEnter={() => dispatch(mouseHover(props.id))}
        />
        <div className={styles.nameEmail}>
          <p className={styles.name}>
            {props.fname}
            {props.lname}
          </p>
          <p className={styles.email}>{props.email}</p>
        </div>
      </div>
      <div className={styles["status_dropdown"]}>
        {props.isActive && <p style={{ color: "green" }}>Active</p>}
        {!props.isActive && (
          <div className="dropdown">
            <select className={styles.select}>
              {!props.isActive && (
                <>
                  <option> Inactive</option>
                  <option> Active</option>
                </>
              )}
            </select>
          </div>
        )}
      </div>
      <div className={styles["access_dropdown"]}>
        {props.isOwner && <p>Owner</p>}
        {!props.isOwner && (
          <div className="dropdown">
            <select className={styles.select}>
              <option> Manager</option>
              <option> Read</option>
            </select>
          </div>
        )}
      </div>
      {props.isOwner && (
        <div className={styles.icon}>
          <Lock />
        </div>
      )}
      {!props.isOwner && (
        <div
          className={styles.icon}
          onClick={() => dispatch(removeUser(props.id))}
        >
          <Trash2 />
        </div>
      )}
    </div>
  );
};

export default Users;
