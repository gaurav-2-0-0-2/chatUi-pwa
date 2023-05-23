import { useEffect, useRef, useState } from "react"
import Navbar from "./Navbar";
import Input from './Input';
import chatLoading from './chatLoading'


// const url = "http://3.111.128.67/assignment/chat?page=0";

export default function Body() {

    const [fetchedData, setFetchedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const loaderRef = useRef(null);
    const containerRef = useRef(null); 


    const fetchData = async (page) => {


        try {
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const response = await fetch(`http://3.111.128.67/assignment/chat?page=${page}`);
            const jsonData = await response.json();
            // console.log(jsonData);
            // setFetchedData(jsonData);
            setFetchedData((prevData) => [...prevData, ...jsonData.chats]);
            setIsLoading(false);
        } catch (error) {
            console.log(error)
            setIsLoading(false);
        }

    };


    useEffect(() => {
        fetchData(pageNumber);
    }, [pageNumber]);


    useEffect(() => {
        const options = {
            root: containerRef.current,
            rootMargin: "20px",
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setPageNumber((prevPageNumber) => prevPageNumber + 1);
            }
        }, options);

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, []);



    return (
        <div style={{backgroundColor: '#FAF9F4'}} className="max-width-[370px]">

            {/* <div>
                {
                    fetchedData.length != 0 ? (
                        <Navbar start={fetchedData.from} destination={fetchedData.to}/>
                    ) : null
                }
            </div> */}

            <Navbar/>


               

            <div className="overflow-y-scroll h-[33rem] scrollbar-hide" ref={containerRef}>
                <div className=" flex justify-between mb-7 mt-20 md:mt-10 px-6">
                    <hr className="border-t-2 w-[20%] md:w-[35%] mt-3 border-gray-200" />
                    <div className="text-gray-200">20 May,2023</div>
                    <hr className="border-t-2 w-[20%] md:w-[35%] mt-3 border-gray-200" />
                </div>

                {/* Chats Area  */}

                <div>
                    {
                        fetchedData.length != 0 ? (
                            <div>
                                {
                                    fetchedData.map((item) => {
                                        return (

                                            <div key={item.id} className={item.sender.self === true ? `flex justify-end md:px-6 px-4`: `flex md:px-6 px-4`}>
                                                {
                                                    item.sender.self === true ? (

                                                        <div className="pl-14">
                                                            {/* <img className="w-[30px] h-[30px] rounded-full" src={item.sender.image} alt="" /> */}

                                                            <h1 className="md:w-[18.5rem] w-[14rem] bg-blue-600 mb-4 p-2 rounded-xl rounded-br-none">{item.message.slice(1, 100)}</h1>

                                                        </div>

                                                    ) : (
                                                        <div className="flex gap-2">
                                                            <img className="w-[30px] h-[30px] rounded-full" src={item.sender.image} alt="" />
                                                            <h1 className="md:w-[20rem] w-[14rem] bg-white mb-4 p-2 rounded-xl rounded-tl-none">{item.message.slice(1, 100)}</h1>
                                                        </div>

                                                    )
                                                }

                                            </div>

                                        )
                                    })
                                }
                            </div>
                        ) : null}
                </div>
                {isLoading && <p className="text-3xl text-center text-red-500">Chats are Loading...</p>}
                <div ref={loaderRef} />
            </div>

            <Input />
        </div>
    )
}