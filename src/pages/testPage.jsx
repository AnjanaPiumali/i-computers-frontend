import { useState } from "react";
import { toast } from "react-hot-toast";

export default function TestPage() {

    const [status, setStatus] = useState("Off")


    
    return (
        <div className="w-full h-full flex flex-col  items-center justify-center">
            <h1 className='text-3xl font-bold'>{status}</h1>
            <div className="w-75 h-[50px] flex justify-center items-center">
                <button onClick={
                    () => {
                        setStatus("On")
                        toast.success("The System is Now On!")
                    }
                } className="p-2 text-white m-2 bg-green-600">Turn On</button>
                <button onClick={
                    () => {
                        setStatus("Off")
                        toast.error("The System is Now Off!")
                    }
                } className="p-2 text-white m-2 bg-red-600">Turn Off</button>
                <button onClick={
                    () => {
                        setStatus("Idle")
                    }
                } className="p-2 text-white m-2 bg-yellow-600">Idle</button>
            </div>

            
        </div>
    )
}







/*--- Alignment and Position css ---- */
// export default function TestPage() {
//     return (
//         <div className="w-full h-full">
//             <div className="flex flex-col relative items-center justify-center gap-2 w-[600px] h-[600px] bg-yellow-300">

//                 <div className="w-[100px] h-[100px] bg-red-600">
//                 </div>
//                 <div className="fixed right-2  bottom-2 w-[100px] h-[100px] bg-green-600">
//                 </div>
//                 <div className="absolute right-0 top-0 w-[100px] h-[100px] bg-blue-600">
//                 </div>
//                 <div className="w-[100px] h-[100px] bg-white">
//                 </div>
//                 <div className="w-[100px] h-[100px] bg-black">
//                 </div>

//             </div>
//         </div>
//     )
// }

/* --- Padding & Margine css --- */
// export default function TestPage() {
//     return (
//         <div className="w-full h-full">
//             <div className="w-[280px] h-[280px] m-4 bg-yellow-300 p-[10px] ">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus explicabo debitis quasi officia tempore vero ullam cum, voluptas eaque optio. Dicta error delectus, ipsum, laborum accusantium, eos vel quibusdam tenetur tempora saepe excepturi at inventore? Illum in voluptatibus sunt commodi accusamus, cumque iure?
//             </div>
//             <div className="w-[280px] h-[280px] mb-[30px] bg-yellow-300 p-[10px] ">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus explicabo debitis quasi officia tempore vero ullam cum, voluptas eaque optio. Dicta error delectus, ipsum, laborum accusantium, eos vel quibusdam tenetur tempora saepe excepturi at inventore? Illum in voluptatibus sunt commodi accusamus, cumque iure?
//             </div>
//         </div>
//     )
// }