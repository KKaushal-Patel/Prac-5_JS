import UserListContainer from "./components/UserListContainer/UserListContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return <UserListContainer />;
}

export default App;
