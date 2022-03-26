import styles from "./UsersList.module.css";
import UserListItems from "../UserListItems/UserListItems";
import { useSelector } from "react-redux";

const UsersList = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className={styles.mainContainer}>
      <div className={styles["container_inner"]}>
        <div className={styles.titles}>
          <div>Name</div>
          <div>Status</div>
          <div>Access</div>
        </div>
        {users.map((user) => {
          return (
            <UserListItems
              key={user.id}
              user={user}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
