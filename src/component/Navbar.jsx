import { BsArrowLeft } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { FiMoreVertical } from 'react-icons/fi';
import pic from '../assets/pic.png'


export default function Navbar() {
    return (
        <div>
            <div className='px-6 pt-4 md:pt-2'>
                <section className='flex flex-row justify-between'>
                    <div className='flex gap-4'>
                        <BsArrowLeft size={25} className='mt-1 md:w-[25px] md:mt-0' />
                        <h1 className='text-xl md:text-xl font-bold'>Trip 1</h1>
                    </div>
                    <FiEdit className='mt-1 md:w-[18.5px]' size={20} />
                </section>

                <section className='flex justify-between mt-1 md:mt-0'>

                    <div className='flex gap-4'>
                        <img className='w-[40px] h-[40px] md:w-[30px] md:h-[30px] rounded-full mt-1 md:mt-2' src={pic} alt="profile" />
                        <div>
                            <h1>From  <span className='font-bold md:text-sm'>IGI Airport, T3</span></h1>
                            <h1>To <span className='font-bold md:text-sm'>Sector 28</span></h1>
                        </div>

                    </div>
                    <FiMoreVertical className='mt-2 md:w-[20px]' size={22} />

                </section>

            </div>

            <hr className=" mt-3 border-gray-200" />
        </div>
    )
}

