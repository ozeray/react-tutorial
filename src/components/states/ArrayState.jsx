import { useState } from 'react';

const ArrayState = () => {
    const [friends, setFriends] = useState(["Ali", "Mehmet"]);
    const addFriend = () => setFriends([...friends, "Mahmut"]);
    const removeFriend = () => setFriends(friends.slice(0, -1));
    const updateFriend = () => setFriends(friends.map(f => f === "Ali" ? "Ali Ziya" : f));

  return (
    <div className='demo'>
      <h2>Array State</h2>
        <ul>
            {friends.map(f => (
                <li key={Math.random()}>{f}</li>
            ))}
        </ul>
        <button onClick={addFriend}>Add Friend</button>
        <button onClick={removeFriend}>Remove Friend</button>
        <button onClick={updateFriend}>Update Friend</button>
    </div>
  );
}

export default ArrayState;