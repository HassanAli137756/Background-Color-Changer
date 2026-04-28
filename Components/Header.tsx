import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import type { loginStructure } from "../Redux/AuthSlice";
import { useEffect, useState } from "react";

export function Header()
{

    const userData:loginStructure = useSelector((state: any) => state.authReducer.userData)
    const [links, setLinks] = useState<{name: string, path: string}[]>([{name: '', path: ''}])

    useEffect(() =>
    {
        
        if(userData.email.length > 0 && userData.name.length > 0 && userData.password.length > 0)
        {
            setLinks(
            [
                {name: 'Color-Changer', path: '/'},
                {name: 'Add-Color', path: '/addcolor'},
                {name: 'Log-Out', path: '/logout'},
            ]
            )
        }
        else
        {
            setLinks(
            [
                {name: 'Login', path: '/login'}
            ]
            )
        }
    }, [userData])



    return(
    <div>
    <div className="flex justify-evenly p-5 bg-gray-950">

        {
            links.map(link =>
            {
                return(
                <div>
                    <NavLink 
                    to={link.path}
                    className={({isActive}) => `font-bold text-2xl ${isActive ? 'text-green-700' : 'text-white'}`}
                    >{link.name}</NavLink>
                </div>
                )
            }
            )
        }



    </div>
    </div>
    )
}
