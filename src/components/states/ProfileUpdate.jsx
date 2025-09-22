import { useState } from "react";

const ProfileUpdate = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    
    setProfile({ ...profile, [name]: value });
  };

  return (<div className='demo'>
    <h2>Profile Update</h2>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={profile.name} onChange={handleChange} />
      
      <label htmlFor="age">Age:</label>
      <input type="number" name="age" value={profile.age} onChange={handleChange} />
      <div>
        <h2>Name: {profile.name}</h2>
        <h2>Age: {profile.age}</h2>
      </div>
    </form></div>);
};

export default ProfileUpdate;
