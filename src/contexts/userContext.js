import {useReducer, createContext} from "react"
import axios from "axios"
import userReducer from "../reducers/userReducer"


const initialState={
    userdata:{},
    loading:true,
    error:null
}

export const userContext = createContext()

const UserContextProvider =({children})=>{
    const [state,dispatch] = useReducer(userReducer,initialState)

    async function signIn(user){
        try{
            const config={
                headers:{
                    'Content-Type':'application/json'
                }
            }
            const res = await axios.post("https://trainees-api.herokuapp.com/api/v1/users/login",user,config);
            console.log(res.data);
            dispatch({
                type:"LOGIN",
                payload:res.data
            });

        }catch(error){
            console.log(error)
        }
    }
    async function signUp(newuser){
        try{
            const config={
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const res=await axios.post("https://primetek-api.herokuapp.com/api/v2/users/register",newuser,config)
            dispatch({
                type:"SIGN_UP",
                payload:res.data
            })

        }catch(error){
            console.log(error)
        }
    }

    return(
        <userContext.Provider value={{signIn,loading:state.loading,userdata:state.loading}}>
            {children}
        </userContext.Provider>
    )
}
export default UserContextProvider