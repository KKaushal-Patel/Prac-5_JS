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
        {users.map((user,index) => {
          return (
            <UserListItems
              key={user.id}
              id={user.id}
              fname={user.first_name}
              lname={user.last_name}
              email={user.email}
              isOwner={user.isOwner}
              isActive={user.isActive}
              img={user.avatar}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
