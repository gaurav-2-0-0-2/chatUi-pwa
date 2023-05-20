import { useEffect, useState } from "react"

const url = "http://3.111.128.67/assignment/chat?page=0";

export default function Body() {

    const [data, setData] = useState([]);




    const fetchData = async () => {

        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            // console.log(jsonData);
            setData(jsonData);

        } catch (error) {
            console.log(error)
        }




    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className="mt-40">
            <div className="flex justify-between mb-10">

                <hr className="border-t-4 w-[35%] mt-2 border-gray-300" />
                <div className="text-gray-300">20 May,2023</div>
                <hr className="border-t-4 w-[35%] mt-2 border-gray-300" />
            </div>

            {/* Chats Area  */}

            <div>
                {
                    data.length != 0 ? (
                        <div>
                            {
                                data.chats.map((item) => {
                                    return (
                                        <div key={item.id} className="flex">
                                            <img className="w-[30px] h-[30px] rounded-full" src={item.sender.image} alt="" />
                                            <h1 className=" bg-cyan-300 mb-4">{item.message}</h1>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (
                        <h1>Loading...</h1>
                    )
                }
            </div>










        </div>
    )
}