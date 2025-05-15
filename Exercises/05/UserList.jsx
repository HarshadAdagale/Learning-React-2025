const UserList = () => {

    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
    ];

    return <>
        {users.map((user)=> (
            <div key={user.id}>
                <h1>{user.name}</h1>
                <h2>{user.age}</h2>
            </div>
        ))}
    </>
}

export default UserList;