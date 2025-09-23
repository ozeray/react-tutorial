/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Ahmet Özer" });

  const updateUser = (newName) => setUser({ name: newName });

  return (
    <div className="demo">
      <h2>2. Data sharing using data provider & useContext method</h2>
      <UserContext.Provider value={{ user, updateUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserProvider;
