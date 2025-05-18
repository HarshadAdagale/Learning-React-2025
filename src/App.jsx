import UserProfile from "../Exercises/11/UserProfile.jsx";
import UserProvider from "../Exercises/11/UserContext.jsx";
import UpdateUser from "../Exercises/11/UpdateUser.jsx";

function App() {
    return <UserProvider>
        < UserProfile />
        <UpdateUser />
    </UserProvider>
}

export default App;