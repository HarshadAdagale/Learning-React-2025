import { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const UpdateUser = () => {

    const {updateUser} = useContext(UserContext);
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim()) {
            updateUser(name);
            setName("");
        }
    }

    return <div>
            <h1>Update User Name</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                placeholder="Enter New Name"
                />
                <button type="submit">Update</button>
            </form>
           </div>
}

export default UpdateUser;