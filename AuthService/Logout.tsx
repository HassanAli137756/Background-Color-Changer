import { useDispatch } from "react-redux";
import { logout } from "../Redux/AuthSlice";
import { useNavigate } from "react-router-dom";


export function Logout()
{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return(
    <div>
        <button
        className="font-bold p-2 rounded-2xl text-2xl bg-red-700"
        onClick={() => (dispatch(logout()), navigate('/login'))}
        >LOGOUT</button>
    </div>
    )
}
