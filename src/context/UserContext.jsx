import { createContext, useState } from "react";

const UserContext = createContext()
const initialUser = {id: null, userName: null, token:null}
const UserProvider = ({children}) =>{
    const [dataUser, setDataUser] = useState(initialUser)
    const updateDataUser = (datos)=>{
        setDataUser(datos)
    }
    const data = {dataUser, updateDataUser}
    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )

}
export {UserProvider}
export default UserContext;