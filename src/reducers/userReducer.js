const userReducer =(state,action)=>{
    switch(action.type){
        case "LOGIN":
            localStorage.setItem("userdata",JSON.stringify(action.payload))
            return{
                ...state,
                userdata: JSON.parse(localStorage.getItem("userdata")),
                loading:false,
            }
            case"SIGN_UP":
            return{
                ...state,
                loading:false,
                userdata:action.payload
            }
            default:
                return state;
    }
}
export default userReducer