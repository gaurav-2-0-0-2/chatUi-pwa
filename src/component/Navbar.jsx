import { BsArrowLeft } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { FiMoreVertical } from 'react-icons/fi';


export default function Navbar() {
    return (
        <div>
            <section className='flex flex-row gap-[16rem]'>
                <div className='flex gap-4'>
                    <BsArrowLeft size={30} className='mt-1' />
                    <h1 className='text-2xl font-bold'>Trip 1</h1>
                </div>
                <FiEdit className='mt-1' size={22} />
            </section>

            <section className='flex gap-[9rem] mt-2'>

                <div className='flex gap-4'>
                    <img className='w-[50px] h-[50px] rounded-full' src="https://www.pngfind.com/pngs/m/663-6634050_render-anime-jojo-koichi-hirose-png-transparent-png.png" alt="profile" />
                    <div>
                        <h1>From  <span className='font-bold'>IGI Airport, T3</span></h1>
                        <h1>To <span className='font-bold'>Sector 28</span></h1>
                    </div>

                </div>
                <FiMoreVertical className='mt-2' size={25}/>

            </section>
        </div>
    )
}

