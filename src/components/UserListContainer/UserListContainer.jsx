import HoverCard from "../HoverCard/HoverCard";
import styles from "./UserListContainer.module.css";
import UsersList from "../UsersList/UsersList";


const UserList = () => {



  return (
    <div className={styles.card}>
      <UsersList />
      <HoverCard />
    </div>
  );
};

export default UserList;
