import { Stack } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../../redux/slices/userSlice"


const CardProfile = () => {

    const user = useSelector((state) => state.userInfo.data)
    const dispacth = useDispatch()
    
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.href = "/auth/login"
        dispacth(removeUser(false))
    }

    return (
        <Stack className="flex animate-toBottom flex-col absolute top-[20px] rounded-md -right-16 p-4 w-[130px] gap-2 bg-background shadow-black">
            <div className="flex justify-center flex-col items-center">
                <img className="rounded-full w-[50px] aspect-square" src={user?.avatar} alt="" />
                <span>{user?.name}</span>
            </div>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" id="signout">
                    <path fill="" d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"></path>
                </svg>
                <span 
                onClick={() => handleLogout()}
                >Logout</span>
            </div>
        </Stack>
    )
}
export default CardProfile