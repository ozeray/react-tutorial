import { useContext, useState } from 'react'
import { UserContext } from './UserContext';

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext)
  const [newName, setNewName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (newName.trim()) {
        updateUser(newName);
        setNewName('');
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={newName} onChange={e => setNewName(e.target.value)} 
                   placeholder='Enter a name' />
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default UpdateUser