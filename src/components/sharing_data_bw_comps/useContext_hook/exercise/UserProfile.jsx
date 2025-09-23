import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h4>User Profile</h4>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default UserProfile;
