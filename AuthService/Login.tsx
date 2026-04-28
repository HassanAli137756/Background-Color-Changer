import { useNavigate } from "react-router-dom";
import { login} from "../Redux/AuthSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

export function Login()
{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const loginSession = (data: any) =>
    {
        if(data.email.length > 0 && data.name.length > 0 && data.password.length > 0)
        {
            dispatch(login(data))
            navigate('/')
        }
    }

    return(
    <div>
        <div className="flex justify-center">
        <div>
        
        <div className="rounded-2xl p-14 bg-white/50">
        <div className="flex justify-center font-bold text-2xl text-black italic">Create Accout to use Service</div>
        <br />
        <br />
        <form onSubmit={(handleSubmit(loginSession))}>
        <div className="font-bold text-2xl text-black flex justify-start">Name</div>
        <input 
        type="text"
        placeholder="Enter Name"
        className="font-bold text-black bg-white text-2xl rounded-2xl p-3 w-full"
        required
        {...register('name', {required:'Please fill in this field'})}
        />
        <br /><br />


        <div className="font-bold text-2xl text-black flex justify-start">Email</div>
        <input 
        type="text"
        placeholder="Enter Email"
        className="font-bold text-black bg-white text-2xl rounded-2xl p-3 w-full"
        required
        {...register('email', {required:'Please fill in this field'})}
        />
        <br /><br />


        <div className="font-bold text-2xl text-black flex justify-start">Password</div>
        <input 
        type="text"
        placeholder="Enter Name"
        className="font-bold text-black bg-white text-2xl rounded-2xl p-3 w-full"
        required
        {...register('password', {required:'Please fill in this field'})}
        />

        <br /><br />
        <br />

        <div className="flex justify-center">
        <div>
        <button
        type="submit"
        className="font-bold text-2xl p-3 bg-blue-700 rounded-2xl w-[5cm]"
        >LOGIN</button>
        
        </div>
        </div>
        </form>
        </div>
            
        </div>
        </div>
    </div>
    )
}
