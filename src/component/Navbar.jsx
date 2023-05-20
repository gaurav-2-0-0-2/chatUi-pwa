import { BsArrowLeft } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { FiMoreVertical } from 'react-icons/fi';


export default function Navbar({start, destination}) {
    return (
        <div>
            <section className='flex flex-row justify-between'>
                <div className='flex gap-4'>
                    <BsArrowLeft size={30} className='mt-1' />
                    <h1 className='text-2xl font-bold'>Trip 1</h1>
                </div>
                <FiEdit className='mt-1' size={22} />
            </section>

            <section className='flex justify-between mt-2'>

                <div className='flex gap-4'>
                    <img className='w-[50px] h-[50px] rounded-full' src="https://www.pngfind.com/pngs/m/663-6634050_render-anime-jojo-koichi-hirose-png-transparent-png.png" alt="profile" />
                    <div>
                        <h1>From  <span className='font-bold'>{start}</span></h1>
                        <h1>To <span className='font-bold'>{destination}</span></h1>
                    </div>

                </div>
                <FiMoreVertical className='mt-2' size={25}/>

            </section>
        </div>
    )
}

