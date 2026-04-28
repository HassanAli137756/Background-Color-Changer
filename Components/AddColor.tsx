import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColor } from "../Redux/ColorSlice";
import { useNavigate } from "react-router-dom";


interface colorStructure
{
    name: string
    status: 'permanent' | 'temperarily'
}

export function AddColor()
{

    const colors:colorStructure[] = useSelector((state: any) => state.colorReducer.colors)
    const [error, setError] = useState<string>('')
    const [color, setColor] = useState<colorStructure>({name: '', status: 'temperarily'})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const addNewColor = () =>
    {
        if(color && color.name.length > 0)
        {
            let colorStatus = false

            colors.map(clr => clr.name.toLocaleLowerCase() == color.name.toLocaleLowerCase() ? (colorStatus=true) : null )
            if(!colorStatus)
            {
                dispatch(addColor(color))
                navigate('/')
            }
            else
            {
                setError('This color is already taken')
            }
                
        }
    }

    return(
    <div>
        <div className="flex justify-center">
        <div>
            
        <div
        style={{border: '2px solid black'}}
        className="rounded-2xl p-12 bg-white/50 text-black">
        
        <input 
        placeholder="Type a Valid Color..."
        type="text"
        onChange={(e) => (setColor(perv => ({...perv, name: e.target.value})), setError(''))}
        className="p-2.5 rounded-2xl font-bold text-2xl bg-black/50 text-white"
        />
        {error && error.length > 0 && <div className="font-bold text-lg text-red-950">{error}</div>}
        <br /><br />
        <div className="font-bold text-black text-2xl">Select-Status</div>
        <div className="flex justify-evenly">
            <label htmlFor="temp">Temprarily- 
                <input 
                type="radio" 
                name="status" 
                id="temp" 
                defaultChecked
                value={'temperarily'}
                onChange={(e) => setColor(perv => ({...perv, status: e.target.value as 'permanent' | 'temperarily'}))}
                />
            </label>

            <label htmlFor="perm">Permanent- 
                <input 
                type="radio" 
                name="status" 
                id="perm" 
                value={'permanent'}
                onChange={(e) => setColor(perv => ({...perv, status: e.target.value as 'permanent' | 'temperarily'}))}
                />
            </label>
        </div>


        <br /><br />
        <div className="flex justify-center">
        <button
        style={{transition: '0.8s'}}
        className={`font-bold text-2xl w-1/2 text-black p-3 rounded-2xl ${color && color.name.length > 0 ? 'bg-blue-700 text-black' : 'bg-gray-700 text-black/50'}`}
        onClick={() => color.name.trim().length > 0 ? addNewColor() : null}
        >Add</button>
        </div>

        </div>
    </div>
    
        </div>
        </div>
    )

}
