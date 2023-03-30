import { useContext } from "react"
import { CurrentUserContext } from "../context/CurrentUserProvider"

export const useCurrentUser=()=>{

    const {currentUser, setCurrentUser}= useContext(CurrentUserContext)
    return {currentUser, setCurrentUser};
}