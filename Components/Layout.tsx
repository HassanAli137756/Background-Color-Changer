import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Layout()
{
    

    

    return(
    <div>
        <Header />
        <br /><br /><br />
        <Outlet />
    </div>
    )
}
