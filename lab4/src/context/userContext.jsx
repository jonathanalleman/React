const UserContext = React.createContext();
// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>
export const UserProvider = (props) => {
// store the current user in state at the top level
const [currentUser, setCurrentUser] = useState({});
// sets user object in state, shared via context
const handleUpdateUser = (user) => {
setCurrentUser(user);
}
// 2. Provide the context.
// The Provider component of any context (UserContext.Provider)
// sends data via its value prop to all children at every level.
// We are sending both the current user and an update function
return (
<UserContext.Provider value={{currentUser, handleUpdateUser}}>
{props.children}
</UserContext.Provider>
);
}


export const useUserContext = () => {
    return useContext(UserContext)
}