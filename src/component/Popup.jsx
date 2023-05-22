
import { BiCamera } from "react-icons/bi"
import { BiCameraMovie } from "react-icons/bi"
import { BsFillFileArrowDownFill } from "react-icons/bs"


export default function Popup() {
    return (
        
            <div className="popup fixed p-4 bg-green-500 rounded-full">
                <BiCamera className="popup-icon" size={20}/>
                <BiCameraMovie className="popup-icon" size={20}/>
                <BsFillFileArrowDownFill className="popup-icon" size={20}/>
            </div>

        

    )

}

