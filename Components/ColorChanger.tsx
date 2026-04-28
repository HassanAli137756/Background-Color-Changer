import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteColor, type colorStructure } from "../Redux/ColorSlice";
import type { loginStructure } from "../Redux/AuthSlice";

export function ColorChanger()
{
    const userData: loginStructure = useSelector((state: any) => state.authReducer.userData)
    const colors:colorStructure[] = useSelector((state: any) => state.colorReducer.colors)
    const body: any = document.querySelector('body')
    const [bodyColor, setBodyColor] = useState<string>('')
    const dispatch = useDispatch()


    useEffect(() =>
    {
        body.style.backgroundColor = bodyColor
    }, [bodyColor])


    return(
    <div>
    <div className="flex justify-start">

    {userData.name.length > 0 && 
    <div className="font-bold text-2xl text-black">WellCome &nbsp; <span className="font-bold italic text-pink-600">{userData.name}</span></div>
    }

    </div>
    <br /><br /><br />
    <div>
    {
        colors.map(color =>
        {
            return(
            <div key={color.id}>
                <div
                style={{backgroundColor: color.name}} 
                className="w-[2cm] h-[2cm]"
                onClick={() => setBodyColor(color.name)}
                ></div>
                {color.status == 'temperarily' ? 
                <div>
                    <button 
                    className="w-[2cm] bg-red-950 rounded-2xl p-2 font-semibold"
                    onClick={() => dispatch(deleteColor(color.id))}
                    >Delete</button>
                </div> : null}
            </div>
            )
        }
        )
    }
    </div>
    </div>
    )
}
