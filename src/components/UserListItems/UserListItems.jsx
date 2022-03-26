import styles from "./UserListItems.module.css";
import { Lock } from "react-feather";
import { Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  mouseHover,
  mouseLeave,
  removeUser,
  isActive,
} from "../../store/actions";
// import {useState} from "react";

const Users = (props) => {
  const dispatch = useDispatch();
  // const Active = useSelector((state) => state.isActive);
  // const newId = useSelector((state) => state.selectedId);
  // const newUsers = useSelector((state) => state.users);
  // // console.log(typeof Active);
  // // console.log(Active);
  // console.log(newId);
  // console.log(newUsers);

  return (
    <div className={styles.users}>
      <div></div>
      <div
        className={styles.col1}
        onMouseEnter={() => dispatch(mouseHover(props.user.id))}
        // onMouseLeave={() => dispatch(mouseLeave(props.user.id))}
      >
        <img src={props.user.avatar} alt="user_image" />
        <div className={styles.nameEmail}>
          <p className={styles.name}>
            {props.user.first_name} {props.user.last_name}
          </p>
          <p className={styles.email}>{props.user.email}</p>
        </div>
      </div>
      <div className={styles["status_dropdown"]}>
        {props.user.id === 1 ? (
          <p style={{ color: "#1cd31c" }}>Active</p>
        ) : (
          <div className="dropdown">
            <select className={styles.select}>
              <>
                <option value="inActive"> InActive</option>
                <option value="active"> Active</option>
              </>
            </select>
          </div>
        )}
      </div>
      <div className={styles["access_dropdown"]}>
        {props.user.id === 1 ? (
          <p>Owner</p>
        ) : (
          <div className="dropdown">
            <select className={styles.select}>
              <option> Manager</option>
              <option> Read</option>
            </select>
          </div>
        )}
      </div>
      {props.user.id === 1 ? (
        <div className={styles.icon}>
          <Lock />
        </div>
      ) : (
        <div
          className={styles.icon}
          onClick={() => dispatch(removeUser(props.user.id))}
        >
          <Trash2 />
        </div>
      )}
    </div>
  );
};

export default Users;

/* 

return (
    <div className={styles.users}>
      <div></div>
      <div
        className={styles.col1}
        onMouseEnter={() => dispatch(mouseHover(props.user.id))}
        onMouseLeave={() => dispatch(mouseLeave(props.user.id))}
      >
        <img src={props.user.avatar} alt="user_image" />
        <div className={styles.nameEmail}>
          <p className={styles.name}>
            {props.user.first_name}
            {props.user.last_name}
          </p>
          <p className={styles.email}>{props.user.email}</p>
        </div>
      </div>
      <div className={styles["status_dropdown"]}>
        {Active &&
          <p style={{ color: "green" }}>Active</p>
 } 
 { !Active && 
          <div className="dropdown">
            <select
              className={styles.select}
              onChange={() => dispatch(isActive(props.user.id))}
            >
              <>
                <option value="inActive"> InActive</option>
                <option value="active"> Active</option>
              </>
            </select>
          </div>
        }
      </div>
      <div className={styles["access_dropdown"]}>
        {props.user.id === 1 ? (
          <p>Owner</p>
        ) : (
          <div className="dropdown">
            <select className={styles.select}>
              <option> Manager</option>
              <option> Read</option>
            </select>
          </div>
        )}
      </div>
      {props.user.id === 1 ? (
        <div className={styles.icon}>
          <Lock />
        </div>
      ) : (
        <div
          className={styles.icon}
          onClick={() => dispatch(removeUser(props.user.id))}
        >
          <Trash2 />
        </div>
      )}
    </div>
  );
};


*/
