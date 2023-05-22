import { BiSend } from 'react-icons/bi';
import { FiPaperclip } from "react-icons/fi";
// import { Tooltip } from 'antd';
import Popup from './Popup';
export default function Input() {
    return (
        <div className="relative px-4">
            <input className=" outline-none bg-white w-full py-2 px-4 rounded-lg" type="text" placeholder="Reply" />
            <div className="flex gap-5 absolute top-3 right-7">
                {/* <Tooltip className='tooltip' placement='right' color='#87d068' title={<Popup/>}> */}
                    <FiPaperclip className='icon' size={20}/>
                    <Popup/>
                {/* </Tooltip> */}
                <BiSend size={20}/>
            </div>
        </div>
    )
}